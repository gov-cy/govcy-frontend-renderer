import { expect } from 'chai';
import puppeteer from 'puppeteer';

const SERVER_URL = 'http://localhost:3000';

/**
 * Fetch page HTML via Puppeteer for a specific route.
 *
 * @param {string} routePath Path to open on the local test server.
 * @returns {Promise<string>} The rendered page HTML.
 */
async function getPageHTML(routePath) {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        await page.goto(`${SERVER_URL}${routePath}`, { waitUntil: 'networkidle0' });
        return await page.content();
    } finally {
        await browser.close();
    }
}

describe('9. Header navigation browser route tests', function () {
    it('renders full NJK scenario with active current grandchild', async () => {
        const html = await getPageHTML('/test-header-nav-njk/full');

        // Validate current state on the 3rd-level item.
        expect(html).to.match(/Birth certificate<\/a>/);
        expect(html).to.match(/class="govcy-menu-item active" aria-current="true">Birth certificate<\/a>/);
    });

    it('renders nav-only JSON scenario without language area', async () => {
        const html = await getPageHTML('/test-header-nav-json/navOnly');

        // Validate nav area exists and language area does not.
        expect(html).to.match(/<ul class="govcy-menu-items" aria-label="Main menu">/);
        expect(html).to.not.match(/govcy-header-language-area/);
    });
});
