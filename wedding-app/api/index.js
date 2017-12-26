import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import compression from 'compression';
import path from 'path';
import { readFile } from 'fs';

import { initAuth } from './auth';
import { initDB } from './db';

const app = express();
app.use(bodyParser.json());

let indexHtml;
readFile(path.join(__dirname, '..', 'build', 'index.html'), (err, data) => {
  indexHtml = data.toString();
});

let failHtml;
readFile(path.join(__dirname, '..', 'build', 'fail.html'), (err, data) => {
  failHtml = data.toString();
});

initDB(app, (connection) => {
  const findUser = initAuth(app, connection);


  app.get('/api/status', (req, res) => {
    res.json({status: 'ok'});
  });

  app.get('/fail', (req, res) => {
    return res.send(failHtml);
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

      const html = indexHtml.replace('__USER__', JSON.stringify({ user: req.user }));
      return res.send(html);
    }

    return res.redirect('/fail');
  });

  app.use(compression());
  app.use(express.static(path.join(__dirname, '..', 'build')));
  app.listen(3001);
});
