import passport from 'passport';
import session from 'express-session';

import { User } from './models/user';

const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

export const initAuth = (app, connection) => {
  const findUser = (id, done) => (
    connection.getRepository(User)
    .createQueryBuilder("user")
    .where("user.apiKey = :id", { id })
    .getOne()
    .then((user) => done(null, user))
    .catch((e) => {
      console.error('Find user error', e);
      done(e);
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.apiKey);
  });

  passport.deserializeUser(findUser);

  app.use(session({
    secret: 'catdog',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: false,
      maxAge: ONE_YEAR,
    },
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  return findUser;
}
