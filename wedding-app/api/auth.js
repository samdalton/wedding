import passport from 'passport';
import session from 'express-session';

const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

const users = [{
  name: 'sam',
  id: '1234',
}];

export const findUser = (id, done) => (
  done(null, users.find(u => u.id === id))
);

export const init = (app) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(findUser);

  app.use(session({
    secret: 'catdog',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: ONE_YEAR,
    },
  }));
  app.use(passport.initialize());
  app.use(passport.session());
}
