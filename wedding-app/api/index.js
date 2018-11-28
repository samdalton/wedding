import express from 'express';
import compression from 'compression';
import path from 'path';
import { readFile } from 'fs';

const app = express();

let indexHtml;
readFile(path.join(__dirname, '..', 'build', 'index.html'), (err, data) => {
  indexHtml = data.toString();
});

app.get('/*', (req, res, next) => {
    return res.send(indexHtml);
});

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'build')));
app.listen(3001);
