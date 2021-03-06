[![GS Phones Test](https://github.com/jgleal/react-phone-catalogue/workflows/GS%20Phones%20Test/badge.svg)](https://github.com/jgleal/react-phone-catalogue/actions?query=workflow%3A%22GS+Phones+Test%22)

# GuideSmiths Phone Store

It's a GuideSmiths React code challenge

## Structure and technologies

The code are divided in two workspaces: server and client.

- _Server_: contains backend code. I have used Node with Express to build an REST API for serve data (phones and images). I added deliberate delay to response to simulate a real environment and be able to see the loading component
- _Client_: contains frontend code. In addition to React+Redux, I have used other technologies:
  - Styled-Components: for CSS-in-JS styled components
  - TailWindCSS: utility classes for styling
  - TailWind.macro: for integrate TailWindCSS with Styled-Components

## Decisions

I have not use Create React App (CRA) to build the project. I'm feeling better having full control over every process and setup. Instead, I have use Webpack to bundle client app.

I decided implement a **feature-based code structuring** versus layer structuring (actions, reducers, hooks...). I think it is more encapsulated and reusable, which are WebComponents principles. It is also more scalable because everything that needs to be modified in a feature is in the same place.

For checking integration, I implemented CI on github with [github actions](https://github.com/features/actions). It runs on each push and runs [unit and e2e tests](#Test)

# Install & Run

## Using yarn

### Prerequisites

You need yarn to execute scripts because npm don't support workspaces on monorepo. If you are currently using npm and don't have yarn, you can install it executing:

```bash
npm i -g yarn
```

If you don't want install it, you can executing it temporally:

```bash
npx yarn <command>
```

### Install dependencies

To install dependencies, both server and client, execute this command on root folder:

```bash
yarn install
```

### Run app

To run complete app in development mode, execute:

```bash
yarn start
```

It will run server and client. To see it:

- Go to http://localhost:5000/phones to view server response
- Go to http://localhost:9000 to view web app

## Using Docker

### Prerequisites

You need docker and docker-compose installed on your computer. (see: https://docs.docker.com/install/)

### Run app

To run complete app execute:

```bash
docker-compose up
```

It build client workspace for production and deploy it on a ngix server. The server runs as production too.

- Go to http://localhost:5000/phones to view server response
- Go to http://localhost:8000 to view web app

The first time you execute it, it takes a little time to finish because download, build and run docker images. Next times, the images won't be downloaded and built, so that only needs run it.

If you make code changes, you should rebuild images:

```bash
docker-compose build --parallel
```

# Test

I have implemented some unit and end-to-end (e2e) tests on client app.

To run it execute:

```bash
yarn workspace client test
```

If only wants execute unit tests:

```bash
yarn workspace client test:unit
```

And for only e2e tests:

```bash
yarn workspace client test:e2e
```
