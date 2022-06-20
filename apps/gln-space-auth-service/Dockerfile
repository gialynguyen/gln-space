FROM node:14-alpine

RUN npm i -g pnpm

WORKDIR /app

COPY package.json .

RUN pnpm install --silent

COPY . .

RUN pnpm build

EXPOSE 1337

CMD [ "pnpm", "start" ]




