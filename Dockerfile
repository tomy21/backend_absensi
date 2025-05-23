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

RUN npx prisma generate --schema=prisma/main/schema.prisma
RUN npx prisma generate --schema=prisma/secondary/schema.prisma

# Build TypeScript
RUN yarn build

EXPOSE 4000

# Jalankan aplikasi
CMD ["yarn", "start"]
