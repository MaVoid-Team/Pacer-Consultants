# syntax=docker/dockerfile:1

FROM node:25-alpine AS base
WORKDIR /app

# Install pnpm (corepack isn't available in this alpine image)
RUN npm install -g pnpm@latest --silent

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
RUN pnpm install --no-frozen-lockfile

FROM deps AS build
COPY . .
RUN pnpm build

FROM node:25-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Only copy production artifacts
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
CMD ["node", "dist/index.js"]
