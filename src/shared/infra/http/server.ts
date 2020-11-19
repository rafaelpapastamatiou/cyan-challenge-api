import express from 'express';

import 'express-async-errors';

import cors from 'cors';

import * as dotenv from 'dotenv';

import routes from './routes';

import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

// Middleware for error handling
app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(process.env.PORT || 4000, () =>
  console.log('Server started on port 3000'),
);
