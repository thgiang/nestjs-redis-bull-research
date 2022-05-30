## Description
This project using NestJS, Redis Bull. See my commit history to understand Redis Bull step by step. Control number of jobs at the same time. Using GroupKey, Concurrency.
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test
Access: http://localhost:3000/banker/add

See how your jobs processed in console log.

## License

Nest is [MIT licensed](LICENSE).
