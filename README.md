## Objective

This project aims to solve the problem of currency conversion. And ensure traceability of the conversion operation, persisting each user interaction that uses it so that it is possible to retrieve it when necessary.

## Tech

* Node 16.15.1 (LTS)
* NPM 8.11.0 
* Express 4.18.1
* Sequelize 
* Postgres

## Environment Variables

```bash
export PORT=3000
export EXCHANGE_URL=
```

## Run dependecies

```bash
docker run --name=currency -d -p 5432:5432 \
-e POSTGRES_PASSWORD=sa \
-e POSTGRES_USER=sa \
-e POSTGRES_DB=currency postgres
``` 

## Apply Migrations

```bash
npx sequelize-cli db:migrate
```

This command generate database structure.

```bash
npx sequelize db:seed:all
```

This command load some default date into database

## How to Run test

```bash
npm run test
```

## How to Run APP

```bash
npm run dev
```

## API DOC

você pode acessar nossa documentação da API em `/api-docs`.

## RUN APP with docker-compose

// TODO create docker compose file

## Access our APP

// TODO add heroku URL here