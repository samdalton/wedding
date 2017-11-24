import express from 'express';
import passport from 'passport';
import path from 'path';

import { init, findUser } from './auth';

const app = express();

init(app);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/status', (req, res) => {
  res.json({status: 'ok'});
});

app.get('/fail', (req, res) => {
  res.json({status: 'bad'});
});

app.get('/*', (req, res, next) => {
  if (req.query.id) {
    return findUser(req.query.id, (err, user) => {
      if (err || !user) {
        return res.redirect('/fail');
      }

      return req.login(user, () => res.redirect('/'));
    });
  } else if (req.user) {
    return res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  }

  return res.redirect('/fail');
});

app.listen(3001);
