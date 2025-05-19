# Gunakan image resmi Node.js
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Salin file dependency
COPY package*.json yarn.lock ./

# Install dependency
RUN yarn install

# Salin semua file project
COPY . .

# Build TypeScript
RUN yarn build

EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "dist/index.js"]
