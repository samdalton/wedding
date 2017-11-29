import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import path from 'path';
import { readFile } from 'fs';

import { initAuth } from './auth';
import { initDB } from './db';
import { createIntro } from './models/intro';

const app = express();
app.use(bodyParser.json());

initDB(app, (connection) => {
  const findUser = initAuth(app, connection);


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
      // Don't glob any path with an extension
      if (req.path.indexOf('static') > -1) {
        return next();
      }

      return readFile(path.join(__dirname, '..', 'build', 'index.html'), (err, data) => {
        let html = data.toString();
        html = html.replace('__USER__', JSON.stringify({ user: req.user }));
        return res.send(html);
      });
    }

    return res.redirect('/fail');
  });

  app.use(express.static(path.join(__dirname, '..', 'build')));
  app.listen(3001);
});
