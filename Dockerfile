# Stage 1: Build
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build the Next.js app (api urls are not needed here, they are read at runtime)
RUN npm run build

# Stage 2: Production
FROM node:24-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public

# Runtime environment variables (set via docker run -e / compose environment):
# ACTIVITY_API_URL, LOCATION_API_URL

EXPOSE 3042

CMD ["npm", "start"]