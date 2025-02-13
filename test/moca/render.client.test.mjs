import { expect } from 'chai';
// import { renderChecks } from './render.test.mjs';
import puppeteer from 'puppeteer';

const SERVER_URL = 'http://localhost:3000';
let renderedHTMLclient;

describe('4. Testing Browser `govcyCompiledTemplates.browser.js` and `govcyFrontendRenderer.browser.js`', function () {
    let browser;
    let page;

    beforeEach(async function () {
        browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        page = await browser.newPage();
        await page.goto(`${SERVER_URL}/client/testclientjson.html`, { waitUntil: 'networkidle0' });

        renderedHTMLclient = await page.$eval('#output', el => el.innerHTML);
        // console.log(renderedHTMLclient.length);
    });

    afterEach(async function () {
        await browser.close();
    });

    it('4.1 Something was render correctly', async function () {
        // Perform your checks here
        expect(renderedHTMLclient).to.include('Back EN with classes');
        expect(renderedHTMLclient).to.include('Πίσω EL');
    });
    // renderChecks(renderedHTMLclient, '4.');


});
