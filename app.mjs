import express from 'express';
import { renderTest } from './test/moca/render.test.mjs';
import { renderHeaderNavigation } from './test/moca/header.navigation.render.mjs';
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
<li><a href="/client/testclient-header-nav.html">Header navigation manual page</a></li>
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

/**
 * Build and return a valid header-navigation scenario key from route params.
 *
 * @param {string} scenario Route parameter value.
 * @returns {string} Safe scenario key.
 */
function resolveHeaderScenario(scenario) {
  const allowedScenarios = new Set(['full', 'navOnly', 'languagesOnly', 'dropdown2Levels', 'plainHeader', 'menuHiddenLabel', 'malformed']);
  return allowedScenarios.has(scenario) ? scenario : 'full';
}

// Header navigation NJK fixture route.
app.get('/test-header-nav-njk/:scenario?', (req, res) => {
  const scenario = resolveHeaderScenario(req.params.scenario);
  const lang = req.query.lang === 'el' ? 'el' : null;
  const result = renderHeaderNavigation('njk', scenario, lang);
  res.send(result);
});

// Header navigation JSON fixture route.
app.get('/test-header-nav-json/:scenario?', (req, res) => {
  const scenario = resolveHeaderScenario(req.params.scenario);
  const lang = req.query.lang === 'el' ? 'el' : null;
  const result = renderHeaderNavigation('json', scenario, lang);
  res.send(result);
});

// Start the server
const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default server;