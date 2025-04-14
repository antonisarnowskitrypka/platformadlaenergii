# Etap budowania
FROM node:22-alpine AS builder
WORKDIR /app
COPY ./ec-main-page/ ./
RUN npm install
RUN npm run build

# Etap produkcji
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start"]
EXPOSE 3000
