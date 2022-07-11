FROM node:16-alpine

RUN mkdir -p /app

COPY package.json app/package.json
COPY .sequelizerc app/.sequelizerc

WORKDIR /app

RUN npm install

RUN mkdir -p /src

COPY src /app/src

CMD npm run start