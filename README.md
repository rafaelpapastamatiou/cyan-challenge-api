# Cyan Challenge

Cyan Challenge Api

## Installation

Clone the repository

```bash
git clone https://github.com/rafaelpapastamatiou/cyan-challenge-api && cd cyan-challenge-api
```

Install dependencies

```bash
yarn
```

or

```bash
npm i
```

Set environment variables specified in .env.example file (postgres database, port) then migrate

```bash
yarn sequelize-cli db:migrate
```

or

```bash
npm sequelize-cli db:migrate
```

## Run - Development

Development
```bash
yarn dev:server
```

or

```bash
npm run dev:server
```

## Build - Production

Build
```bash
yarn build
```
or
```bash
npm run build
```

Run
```bash
yarn start:prod
```
or
```bash
npm run start:prod
```
