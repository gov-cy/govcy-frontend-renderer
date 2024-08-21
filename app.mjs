import express from 'express';
import { renderTest } from './test/moca/render.test.mjs';

// Create Express app
const app = express();


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
</ul>
</body>
</html>
  `
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
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
