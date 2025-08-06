# Stage 1: Build
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Pass build-time environment variables
ARG NEXT_PUBLIC_ACCTIVITY_API_URL
ARG NEXT_PUBLIC_LOCATION_API_URL
ENV NEXT_PUBLIC_ACCTIVITY_API_URL=$NEXT_PUBLIC_ACCTIVITY_API_URL
ENV NEXT_PUBLIC_LOCATION_API_URL=$NEXT_PUBLIC_LOCATION_API_URL

# Build the Next.js app
RUN npm run build

# Stage 2: Production
FROM node:24-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public

# Set environment variables again for runtime (if needed)
ENV NEXT_PUBLIC_ACCTIVITY_API_URL=$NEXT_PUBLIC_ACCTIVITY_API_URL
ENV NEXT_PUBLIC_LOCATION_API_URL=$NEXT_PUBLIC_LOCATION_API_URL

EXPOSE 3042

CMD ["npm", "start"]