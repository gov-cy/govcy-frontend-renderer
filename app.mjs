import express from 'express';
import { renderTest } from './test/moca/render.test.mjs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Create Express app
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(data)

// Construct the absolute path to the client directory
const clientPath = join(__dirname,'client');

// Construct the absolute path to the dist directory
const distPath = join(__dirname, 'dist');

// Construct the absolute path to the dist directory
const testPath = join(__dirname, 'test');

// Serve static files from the 'client' directory
app.use('/client', express.static(clientPath));

// Serve static files from the 'dist' directory
app.use('/dist', express.static(distPath));

// Serve static files from the 'test' directory
app.use('/test', express.static(testPath));

// Create a route to serve the HTML
app.get('/', (req, res) => {
  const renderedHTML = `
  <!DOCTYPE html>
<html lang="en">
<head>
<title>Test govcy design system renderers</title>
</head>
<body>
<ul>
<li><a href="/testnjk">Njk renderer</a></li>
<li><a href="/testjson">Json resonder</a></li>
<li><a href="/client/testclientjson.html">Client-side rendering with Json</a></li>
</ul>
</body>
</html>
  `;
  // Send the rendered HTML as the response
  res.send(renderedHTML);
});

// Create a route to serve the HTML
app.get('/testnjk', (req, res) => {
  const result = renderTest("njk");
  res.send(result);
});
// Create a route to serve the HTML
app.get('/testjson', (req, res) => {
  const result = renderTest("json");
  res.send(result);
});

// Start the server
const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default server;