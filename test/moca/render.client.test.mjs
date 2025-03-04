import { expect } from 'chai';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { renderChecks } from './render.test.mjs';
import puppeteer from 'puppeteer';

const SERVER_URL = 'http://localhost:3000';

let browser;
let page;
let renderResult;
browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
});

page = await browser.newPage();
await page.goto(`${SERVER_URL}/client/testclientjson.html`, { waitUntil: 'networkidle0' });

//load test data from json file
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
let testJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'test.json'), 'utf8')); // get the json data

// evaluate the `GovcyFrontendRendererBrowser.renderFromJSON` function
renderResult = await page.evaluate((testJson) => {

    // use renderer from the page
    const renderer = new GovcyFrontendRendererBrowser();
    const inputData = { site: { lang: 'en' } };
    const JSONTemplate = {
        elements: [
        ]
    };
    // go through every section and add the elements to the JSONTemplate
    testJson.sections.forEach(section => {
        section.elements.forEach(element => {
        JSONTemplate.elements.push(element);
        });
    });
    // return the rendered HTML from the client
    return renderer.renderFromJSON(JSONTemplate, inputData);
}, testJson);
// console.log(renderResult);
await browser.close();
describe('4. Testing Browser `govcyCompiledTemplates.browser.js` and `govcyFrontendRenderer.browser.js` more', function () {
    //perform render checks
    renderChecks(renderResult, '4.');
});
