import { expect } from 'chai';
import { renderTest,renderLangTest, renderChecks, renderJsonTest } from './render.test.mjs';

describe('1. Testing Note.js `govcyFrontendRenderer.renderFromString` `macros`', () => {
    let renderedHTML = renderTest("njk");
    //perform render checks
    renderChecks(renderedHTML, '1.');
    //console.log(renderedHTML);
});
describe('2. Testing Note.js `govcyFrontendRenderer.renderFromJson`', () => {
    let renderedHTML = renderTest("json");
    //perform render checks
    renderChecks(renderedHTML, '2.');
    //console.log(renderedHTML);
});
describe('3. Testing `govcyFrontendRenderer.renderFromString` global lang test', () => {
    let renderedHTML = renderLangTest();
    //perform render checks
    // console.log(renderedHTML);
    it('3.1 `renderFromString` without global lang ', async () => {
        let expectedRegex = /<p id="govcy-test-3-1-1">\s*Greek\s*<\/p>/;
        expect(renderedHTML).to.match(expectedRegex);
        expectedRegex = /<p id="govcy-test-3-1-2"\s*lang="en">\s*English\s*<\/p>/;
        expect(renderedHTML).to.match(expectedRegex);
        expectedRegex = /<p id="govcy-test-3-1-3"\s*lang="el">\s*Greek\s*<\/p>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it('3.2 `renderFromString` with global lang "en" ', async () => {
        let expectedRegex = /<p id="govcy-test-3-2-1">\s*English\s*<\/p>/;
        expect(renderedHTML).to.match(expectedRegex);
        expectedRegex = /<p id="govcy-test-3-2-2"\s*lang="en">\s*English\s*<\/p>/;
        expect(renderedHTML).to.match(expectedRegex);
        expectedRegex = /<p id="govcy-test-3-2-3"\s*lang="el">\s*Greek\s*<\/p>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it('3.3 `renderFromString` with global lang "el" ', async () => {
        let expectedRegex = /<p id="govcy-test-3-3-1">\s*Greek\s*<\/p>/;
        expect(renderedHTML).to.match(expectedRegex);
        expectedRegex = /<p id="govcy-test-3-3-2"\s*lang="en">\s*English\s*<\/p>/;
        expect(renderedHTML).to.match(expectedRegex);
        expectedRegex = /<p id="govcy-test-3-3-3"\s*lang="el">\s*Greek\s*<\/p>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
});

describe('5. Testing `govcyFrontendRenderer.renderFromJSON` matomo rendering', () => {
    let renderedHTML = "";
    //perform render checks
    it('5.1 `renderFromJSON` without matomo data ', async () => {
        renderedHTML = renderJsonTest(
            {
                site:
                {
                    lang:'en'
                },
                pageData: {
                    title: {en: "Page title", el: "Τιτλός σελιδας"},
                    layout: "layouts/govcyBase.njk",
                    mainLayout: "max-width"
                }
            }
        );
        // console.log(renderedHTML);
        let expectedRegex = /<!-- Matomo -->\s*<script>[\s\S]*?<\/script>/;
        expect(renderedHTML).to.not.match(expectedRegex);
    });
    it('5.2 `renderFromJSON` without matomo.url data ', async () => {
        renderedHTML = renderJsonTest(
            {
                site:
                {
                    lang:'en',
                    matomo: {
                        url: "",
                        siteId: "1"
                    }
                },
                pageData: {
                    title: {en: "Page title", el: "Τιτλός σελιδας"},
                    layout: "layouts/govcyBase.njk",
                    mainLayout: "max-width"
                }
            }
        );
        // console.log(renderedHTML);
        let expectedRegex = /<!-- Matomo -->\s*<script>[\s\S]*?<\/script>/;
        expect(renderedHTML).to.not.match(expectedRegex);
    });
    it('5.3 `renderFromJSON` without matomo.siteId data ', async () => {
        renderedHTML = renderJsonTest(
            {
                site:
                {
                    lang:'en',
                    matomo: {
                        url: "https://matomo.example.com",
                        siteId: ""
                    }
                },
                pageData: {
                    title: {en: "Page title", el: "Τιτλός σελιδας"},
                    layout: "layouts/govcyBase.njk",
                    mainLayout: "max-width"
                }
            }
        );
        // console.log(renderedHTML);
        let expectedRegex = /<!-- Matomo -->\s*<script>[\s\S]*?<\/script>/;
        expect(renderedHTML).to.not.match(expectedRegex);
    });
    it('5.4 `renderFromJSON` with matomo data ', async () => {
        renderedHTML = renderJsonTest(
            {
                site:
                {
                    lang:'en',
                    matomo: {
                        url: "https://matomo.example.com",
                        siteId: "12"
                    }
                },
                pageData: {
                    title: {en: "Page title", el: "Τιτλός σελιδας"},
                    layout: "layouts/govcyBase.njk",
                    mainLayout: "max-width"
                }
            }
        );
        // console.log(renderedHTML);
        let expectedRegex = /<!-- Matomo -->\s*<script>[\s\S]*https\:\/\/matomo.example.com[\s\S]*12[\s\S]*<\/script>\s*<!-- End Matomo Code -->/;
        expect(renderedHTML).to.match(expectedRegex);
    });
});

describe('6. Testing `govcyFrontendRenderer.renderFromJSON` manifest rendering', () => {
    let renderedHTML = "";
    //perform render checks
    it('6.1 `renderFromJSON` without manifest data ', async () => {
        renderedHTML = renderJsonTest(
            {
                site:
                {
                    lang:'en'
                },
                pageData: {
                    title: {en: "Page title", el: "Τιτλός σελιδας"},
                    layout: "layouts/govcyBase.njk",
                    mainLayout: "max-width"
                }
            }
        );
        // console.log(renderedHTML);
        let expectedRegex = /<link rel="manifest" href="\/manifest\.json">/;
        expect(renderedHTML).to.not.match(expectedRegex);
    });
    it('6.1 `renderFromJSON` with manifest data ', async () => {
        renderedHTML = renderJsonTest(
            {
                site:
                {
                    lang:'en',
                    manifest: "/manifest.json"
                },
                pageData: {
                    title: {en: "Page title", el: "Τιτλός σελιδας"},
                    layout: "layouts/govcyBase.njk",
                    mainLayout: "max-width"
                }
            }
        );
        // console.log(renderedHTML);
        let expectedRegex = /<link rel="manifest" href="\/manifest\.json">/;
        expect(renderedHTML).to.match(expectedRegex);
    });
});

describe('7. Testing `govcyFrontendRenderer.renderFromJSON` footerIcons rendering', () => {
    let renderedHTML = "";
    it('7.1 `renderFromJSON` with footerIcons data (EN)', async () => {
        renderedHTML = renderJsonTest(
            {
                site: {
                    lang: 'en',
                    footerIcons: [
                        {
                            src: { en: "https://example.com/icon-en.svg", el: "https://example.com/icon-el.svg" },
                            alt: { en: "English Icon", el: "Ελληνικό εικονίδιο" },
                            href: { en: "https://example.com", el: "https://example.com/el" },
                            target: "_blank"
                        }
                    ]
                },
                pageData: {
                    title: { en: "Page title", el: "Τιτλός σελιδας" },
                    layout: "layouts/govcyBase.njk",
                    mainLayout: "max-width"
                }
            }
        );
        let expectedRegex = /<a href="https:\/\/example\.com" target="_blank">\s*<img[^>]+src="https:\/\/example\.com\/icon-en\.svg"[^>]+alt="English Icon"/;
        expect(renderedHTML).to.match(expectedRegex);
    });

    it('7.2 `renderFromJSON` with footerIcons data (EL)', async () => {
        renderedHTML = renderJsonTest(
            {
                site: {
                    lang: 'el',
                    footerIcons: [
                        {
                            src: { en: "https://example.com/icon-en.svg", el: "https://example.com/icon-el.svg" },
                            alt: { en: "English Icon", el: "Ελληνικό εικονίδιο" },
                            href: { en: "https://example.com", el: "https://example.com/el" },
                            target: "_blank"
                        }
                    ]
                },
                pageData: {
                    title: { en: "Page title", el: "Τιτλός σελιδας" },
                    layout: "layouts/govcyBase.njk",
                    mainLayout: "max-width"
                }
            }
        );
        let expectedRegex = /<a href="https:\/\/example\.com\/el" target="_blank">\s*<img[^>]+src="https:\/\/example\.com\/icon-el\.svg"[^>]+alt="Ελληνικό εικονίδιο"/;
        expect(renderedHTML).to.match(expectedRegex);
    });

    it('7.3 `renderFromJSON` without footerIcons data', async () => {
        renderedHTML = renderJsonTest(
            {
                site: {
                    lang: 'en'
                },
                pageData: {
                    title: { en: "Page title", el: "Τιτλός σελιδας" },
                    layout: "layouts/govcyBase.njk",
                    mainLayout: "max-width"
                }
            }
        );
        let expectedRegex = /govcy-eu-logo/;
        expect(renderedHTML).to.not.match(expectedRegex);
    });
});


