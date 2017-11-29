import * as typeorm from 'typeorm';

import { Intro, IntroEntity } from './models/intro';
import { User, UserEntity } from './models/user';

export const initDB = (app, done) => {
  typeorm.createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'wedding',
    password: 'hawaii',
    database: 'wedding',
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
