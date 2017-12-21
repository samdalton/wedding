import * as typeorm from 'typeorm';

import { User, UserEntity } from './models/user';

export const initDB = (app, done) => {
  typeorm.createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entitySchemas: [
      UserEntity,
    ],
  }).then((connection) => {
    app.use((req, res, next) => {
      req.db = connection;
      next();
    });

    done(connection);
  }).catch((error) => {
    console.error('DB error: ', error);
  });
};
