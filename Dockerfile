FROM node:18-alpine AS build
WORKDIR /app

# allow setting the app base URL at build time (example: '/Pacer-Consultants/' or '/')
ARG VITE_BASE_URL=/
ENV VITE_BASE_URL=${VITE_BASE_URL}
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# install dependencies
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm ci --production=false

# copy sources and build
COPY . .
# build the site (Vite will read process.env.VITE_BASE_URL in vite.config.ts)
RUN npm run build

FROM nginx:stable-alpine

# Copy built site (Vite configured to output to `docs`)
COPY --from=build /app/docs /usr/share/nginx/html

# Use a custom nginx config for SPA history fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
