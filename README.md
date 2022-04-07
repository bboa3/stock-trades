<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=007D59&labelColor=01032C">

 <img src="https://img.shields.io/static/v1?label=STOCK TRADES&message=1.0.0&color=007D59&labelColor=01032C" alt="STOCK TRADES" />
</p>


Brokerage company's accounts and trading management platform 

## Features

- Add new trades
```sh
    POST request at /trades
```
- Return all the trades
```sh
    GET request at /trades
```
- Erase all the trades
```sh
    DELETE request at /erase
```
- Return trade records filtered by the user ID
```sh
    GET request at /trades/users/{userID}
```
- Return the highest and lowest price for the stock symbol in the given date range
```sh
    GET request at /stocks/{stockSymbol}/price?start={startDate}&end={endDate}
```
- Return the fluctuations count, maximum daily rise and maximum daily fall for each
stock symbol for the period in the given date range
```sh
     GET request at /stocks/stats?start={startDate}&end={endDate}
```

## Techs and Tools
- Server
  - [Node.js](https://nodejs.org/en/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Fastify](https://www.fastify.io/)
  - [fp-ts](https://gcanti.github.io/fp-ts/) for functional programming in TypesScript
- Database
  - [Sqlite](https://sqlite.org/)
  - [Prisma](https://www.prisma.io/)
- Decorator
  - [ESLINT](https://eslint.org//) Standard

### Directories 
Organized following Domain Driven Design and Functional Programming

C:.
|   .env.example
|   .eslintrc.json
|   .gitignore
|   package-lock.json
|   package.json
|   README.md
|   Resultant.txt
|   tsconfig.json
|   
+---prisma
|   |   schema.prisma
|   |   stock.db
|   |   
|   \---migrations
|       |   migration_lock.toml
|       |   
|       \---20220407151319_create_tables
|               migration.sql
|               
\---src
    +---@types
    +---domain
    |   +---Contracts
    |   |       CreateTrades.ts
    |   |       ErasingTrades.ts
    |   |       FindOrCreateUser.ts
    |   |       GetCountDailyFluctuations.ts
    |   |       GetHighestAndLowestPrice.ts
    |   |       GetTrades.ts
    |   |       GetTradesByUserId.ts
    |   |       
    |   +---entities
    |   |   |   create-trades.ts
    |   |   |   erasing-trades.ts
    |   |   |   find-or-create-user.ts
    |   |   |   get-count-daily-fluctuations.ts
    |   |   |   get-highest-and-lowest-price.ts
    |   |   |   get-trades-by-user-id.ts
    |   |   |   get-trades.ts
    |   |   |   
    |   |   \---errors
    |   |           db_error.ts
    |   |           
    |   +---errors
    |   |       domain_error.ts
    |   |       
    |   \---requiredFields
    |       |   count-daily-fluctuations.ts
    |       |   date.ts
    |       |   highest-and-lowests-price.ts
    |       |   name.ts
    |       |   price.ts
    |       |   shares-number.ts
    |       |   stock-symbol.ts
    |       |   timestamp.ts
    |       |   trade-type.ts
    |       |   trade.ts
    |       |   user.ts
    |       |   
    |       \---is
    |               is-date.ts
    |               is-name.ts
    |               is-price.ts
    |               is-shares-number.ts
    |               is-stock-symbol.ts
    |               is-timestamp.ts
    |               is-trade-type.ts
    |               
    +---infra
    |   +---http
    |   |   |   app.ts
    |   |   |   server.ts
    |   |   |   
    |   |   +---controller
    |   |   |       create-trades.ts
    |   |   |       erasing-trades.ts
    |   |   |       get-count-daily-fluctuations.ts
    |   |   |       get-highest-and-lowest-price.ts
    |   |   |       get-trades-by-user-id.ts
    |   |   |       get-trades.ts
    |   |   |       
    |   |   \---routes
    |   |           index.ts
    |   |           
    |   +---middleware
    |   |       http_error_response.ts
    |   |       http_success_response.ts
    |   |       Middleware.ts
    |   |       
    |   \---prisma
    |           client.ts
    |           
    +---services
    |   |   create-trades.ts
    |   |   erasing-trades.ts
    |   |   get-count-daily-fluctuations.ts
    |   |   get-highest-and-lowest-price.ts
    |   |   get-trades-by-user-id.ts
    |   |   get-trades.ts
    |   |   
    |   +---dates
    |   |       is-between-date-range.ts
    |   |       
    |   +---errors
    |   |       service-error.ts
    |   |       validation-error.ts
    |   |       
    |   +---prices
    |   |       count-daily-fluctuations.ts
    |   |       highest-and-lowest-price.ts
    |   |       
    |   \---validate
    |           create-trades.ts
    |           get-count-daily-fluctuations.ts
    |           get-highest-and-lowest-price.ts
    |           get-trades-by-user-id.ts
    |           
    \---useCases
            create-trades.ts
            erasing-trades.ts
            get-count-daily-fluctuations.ts
            get-highest-and-lowest-price.ts
            get-trades-by-user-id.ts
            get-trades.ts
            



## Skipped
The was project was developed using Postgres Database and also created UI charts. However, I found myself taking a lot of time to set up docker and docker-compose, so i decided to set up Sqlite. It was built with all my heart, I would like to have used TDD.


## Installation

[Node.js](https://nodejs.org/) and NPM are required to run.

```bash
> git clone https://github.com/bboa3/.git
```

```bash
# 
> `npm run knex:migrate`  ou `yarn knex:migrate`

# para iniciar o servidor
> `npm