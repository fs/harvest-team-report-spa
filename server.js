const next = require('next');
const routes = require('./routes');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const availableRequestFormats = ['.css', '.js', '.json', '.map'];
// Create the Express-Next App
const app = next({ dev });
const handle = app.getRequestHandler();

function renderAndCache(req, res) {
  const { route, params } = routes.match(req.url);

  if (!route) {
    const staticAsset = req.url.match(/^\/static\//);
    const requestFormat = (req.url.match(/\.(\w+)/g) || []).pop();
    if (staticAsset || !requestFormat || availableRequestFormats.includes(requestFormat)) {
      return handle(req, res);
    } else {
      return res.status(404).send('Not Found');
    }
  }

  const query = { ...req.query, ...params };

  app
    .renderToHTML(req, res, route.page, query)
    .then(html => {
      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, route.page, params);
    });
}

// Start the app
app
  .prepare()
  // Start Express server and serve the
  .then(() => {
    const server = express();

    server.use(renderAndCache).listen(port, err => {
      if (err) throw err;
      if (dev) {
        console.log(`ready on http://localhost:${port}`);
      } else {
        console.log(`ready`);
      }
    });

    server.get('/favicon.ico', (req, res) => {
      app.serveStatic(req, res, __dirname + '/public/favicon.ico');
    });
    server.all('*', async (req, res) => {
      return handle(req, res);
    });
  });
