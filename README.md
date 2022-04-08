<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=007D59&labelColor=01032C">

 <img src="https://img.shields.io/static/v1?label=STOCK TRADES&message=1.0.0&color=007D59&labelColor=01032C" alt="STOCK TRADES" />
</p>


Brokerage company's accounts and trading management platform 

## Features

Add new trades
```sh
    POST request at /trades
```
Return all the trades
```sh
    GET request at /trades
```
Erase all the trades
```sh
    DELETE request at /erase
```
Return trade records filtered by the user ID
```sh
    GET request at /trades/users/{userID}
```
Return the highest and lowest price for the stock symbol in the given date range
```sh
    GET request at /stocks/{stockSymbol}/price?start={startDate}&end={endDate}
```
Return the fluctuations count, maximum daily rise and maximum daily fall for each
stock symbol for the period in the given date range
```sh
     GET request at /stocks/stats?start={startDate}&end={endDate}
```

## Techs and Tools
- Server
  - [Node.js](https://nodejs.org/en/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Fastify](https://www.fastify.io/)
  - [fp-ts](https://gcanti.github.io/fp-ts/) for functional programming in TypeScript
- Database
  - [Sqlite](https://sqlite.org/)
  - [Prisma](https://www.prisma.io/)
- Decorator
  - [ESLINT](https://eslint.org//) Standard

### Directories 
Organized following Domain Driven Design and Functional Programming

```bash
C:.
+---prisma
|   |   
|   \---migrations
|       |   
|       \---20220407151319_create_tables
|               
\---src
    +---domain
    |   +---Contracts
    |   |       
    |   +---entities
    |   |   |   
    |   |   \---errors
    |   |           
    |   +---errors
    |   |       
    |   \---requiredFields
    |       |   
    |       \---is
    |               
    +---infra
    |   +---http
    |   |   |   
    |   |   +---controller
    |   |   |       
    |   |   \---routes
    |   |           
    |   +---middleware
    |   |       
    |   \---prisma
    |           
    +---services
    |   |   
    |   +---dates
    |   |       
    |   +---errors
    |   |       
    |   +---prices
    |   |       
    |   \---validate
    |           
    \---useCases
```


## Skipped
The was project was developed using Postgres Database and also created UI charts. However, I found myself taking a lot of time to set up docker and docker-compose, so i decided to set up Sqlite. It was built with all my heart, I would like to have used TDD.


## Installation

[Node.js](https://nodejs.org/) and NPM are required to run.

## Production
```bash
# Create Migration, Create Build and Start the application
> `npm run prod`  ou `yarn prod`
```

## Development
```bash
# Create Migration 
> `npm run migration:save`  ou `yarn migration:save`

# Create Build and start the application
> `npm run dev`  ou `yarn dev`
```