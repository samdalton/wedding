import passport from 'passport';
import session from 'express-session';
import createRedisStore from 'connect-redis';

import { User } from './models/user';

const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

export const initAuth = (app, connection) => {
  const findUser = (id, done) => {
    if (!id || id.length < 6) {
      return done('bad id');
    }
    return connection.getRepository(User)
    .createQueryBuilder("user")
    .where("user.apiKey like :id", { id: `${id}%` })
    .getOne()
    .then((user) => done(null, user))
    .catch((e) => {
      console.error('Find user error', e);
      done(e);
    })
  };

  passport.serializeUser((user, done) => {
    done(null, user.apiKey);
  });

  passport.deserializeUser(findUser);

  const RedisStore = createRedisStore(session);
  app.use(session({
    store: new RedisStore({
      host: 'localhost',
      port: 6379,
    }),
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
