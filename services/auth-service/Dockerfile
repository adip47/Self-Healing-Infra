# Example minimal container for a service
FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production || true
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
