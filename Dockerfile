# syntax=docker/dockerfile:1

FROM node:25-alpine AS base
WORKDIR /app

# Install pnpm (corepack isn't available in this alpine image)
RUN npm install -g pnpm@10.15.1 --silent

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
# Install all dependencies (dev needed for the build step)
RUN pnpm install --no-frozen-lockfile

FROM deps AS build
COPY . .
# Build, prune devDependencies, and place the client build into dist/public
RUN pnpm build && pnpm prune --prod && \
	mkdir -p dist/public && \
	cp -r docs/* dist/public || true

FROM node:25-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Only copy production artifacts
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
# Copy production node_modules (pruned in the build stage)
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "dist/index.js"]
