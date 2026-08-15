FROM node:24.14.1-alpine3.23 AS builder

RUN apk --no-cache -U upgrade
RUN apk add --no-cache openssl python3 build-base libtool autoconf automake

WORKDIR /app

COPY package.json package-lock.json ./
COPY .wasproot ./
COPY .waspignore ./
COPY main.wasp.ts ./
COPY schema.prisma ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY src ./src
COPY public ./public

RUN npm install

RUN npm install -g @wasp.sh/wasp-cli@0.25.0

RUN wasp install

RUN wasp build

FROM node:24.14.1-alpine3.23

RUN apk --no-cache -U upgrade
RUN apk add --no-cache openssl python3

WORKDIR /app

RUN npm install -g prisma@5.19.1

COPY --from=builder /app/.wasp/out /app

ENV NODE_ENV=production

WORKDIR /app/server

EXPOSE 3001

CMD ["npm", "run", "start-production"]
