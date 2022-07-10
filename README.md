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

## Environments Variables

```bash
export PORT=3001 # default port is 3000
export DATABASE_URL='postgres://sa:sa@localhost:5432/currency'
```` 

## Apply Migrations

This command generate database structure.

```bash
npx sequelize-cli db:migrate
```

This command load some default data into database

```bash
npx sequelize db:seed:all
```

## How to Run test

This project has integration test and unit test. To run our test is necessary to run a or provision a postgres database for test we recommended that name like this. 

```bash
docker run --name=currency -d -p 5432:5432 \
-e POSTGRES_PASSWORD=sa \
-e POSTGRES_USER=sa \
-e POSTGRES_DB=currency_test postgres

export NODE_ENV=test

npx sequelize-cli db:migrate

npm run test
```

## How to Run APP

```bash
npm run dev
```

## API DOC

você pode acessar nossa documentação da API em `/api-docs`.

## Access our APP

https://conversor-de-moedas-leco.herokuapp.com/api-docs/