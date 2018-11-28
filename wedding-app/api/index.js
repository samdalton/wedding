import express from 'express';
import compression from 'compression';
import path from 'path';
import { readFile } from 'fs';

const app = express();
app.use(bodyParser.json());

let indexHtml;
readFile(path.join(__dirname, '..', 'build', 'index.html'), (err, data) => {
  indexHtml = data.toString();
});

initDB(app, (connection) => {
  app.get('/*', (req, res, next) => {
      return res.send(indexHtml);
    }

    return res.redirect('/fail');
  });

  app.use(compression());
  app.use(express.static(path.join(__dirname, '..', 'build')));
  app.listen(3001);
});
