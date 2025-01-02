import { expect } from 'chai';
import { renderTest,renderLangTest, renderChecks } from './render.test.mjs';

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

