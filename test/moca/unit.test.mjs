import { expect } from 'chai';
import { renderTest,renderLangTest } from './render.test.mjs';

describe('1. Testing `govcyFrontendRenderer.renderFromString` `macros`', () => {
    let renderedHTML = renderTest("njk");
    //perform render checks
    renderChecks(renderedHTML, '1.');
    //console.log(renderedHTML);
});
describe('2. Testing `govcyFrontendRenderer.renderFromJson`', () => {
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

/**
 * Perform tests on rendered HTML
 * 
 * @param {string} renderedHTML The rendered HTML 
 * @param {string} checksNum The prefix of the checksNum 
 */
function renderChecks(renderedHTML, checksNum){
    it(checksNum+'1 `renderFromString` should not be empty ', async () => {
        expect(renderedHTML).to.not.be.empty;
    });
    it(checksNum+'2 `hint` macro render as expected', async () => {
        // check for structure  
        let expectedRegex = /<span id="govcy-test-2"([\s\S]*?)class="govcy-hint\s*govcy-test-class"([\s\S]*?)<\/span>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'3 `label` macro render as expected. Options classes, for, id, isPrimary:false', async () => {
        // check for structure  
        let expectedRegex = /<label id="govcy-test-3"([\s\S]*?)class="govcy-label\s*govcy-test-class"([\s\S]*?)for="govcy-label-for-id"([\s\S]*?)&lt;b&gt;([\s\S]*?)<\/label>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'4 `label` macro render as expected. Options for, isPrimary, isPageHeading, isHTML id', async () => {
        // check for structure  
        let expectedRegex = /<h1><label id="govcy-test-4"([\s\S]*?)class="govcy-label\s*govcy-label-primary"([\s\S]*?)for="govcy-label-for-id"([\s\S]*?)<b>([\s\S]*?)<\/label><\/h1>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'5 `legend` macro render as expected. Options isPageHeading, classes, id', async () => {
        // check for structure  
        let expectedRegex = /<legend id="govcy-test-5"([\s\S]*?)class="govcy-legend\s*govcy-test-class"([\s\S]*?)><h1>([\s\S]*?)<\/h1><\/legend>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'6 `legend` macro render as expected. Options isPageHeading:false , id', async () => {
        // check for structure  
        let expectedRegex = /<legend id="govcy-test-6"([\s\S]*?)class="govcy-legend"([\s\S]*?)>This is the legend by itself. Options isPageHeading:false, id<\/legend>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'7 `button` macro render as expected. Default options', async () => {
        // check for structure  
        let expectedRegex = /<button\s*type="button"\s*id="govcy-test-7"([\s\S]*?)class="govcy-btn-primary"([\s\S]*?)>Primary default options<\/button>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'8 `button` macro render as expected. Options variant:secondary, type:submit, classes:govcy-test-class', async () => {
        // check for structure  
        let expectedRegex = /<button\s*type="submit"\s*id="govcy-test-8"([\s\S]*?)class="govcy-btn-secondary([\s\S]*?)govcy-test-class"([\s\S]*?)>([\s\S]*?)<\/button>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'9 `button` macro render as expected. Options variant:success', async () => {
        // check for structure  
        let expectedRegex = /<button\s*type="button"\s*id="govcy-test-9"([\s\S]*?)class="govcy-btn-success"([\s\S]*?)>([\s\S]*?)<\/button>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'10 `errorMessage` macro render as expected. Options id, classes. lang: "el"', async () => {
        // check for structure  
        let expectedRegex = /<p\s*id="govcy-test-10"\s*class="govcy-input-error-msg govcy-test-class"\s*lang="el"\s*>([\s\S]*?)<span class="govcy-visually-hidden-error">Σφάλμα:<\/span>([\s\S]*?)<\/p>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'11 `errorMessage` macro render as expected. Options lang: en', async () => {
        // check for structure  
        let expectedRegex = /<p\s*id="govcy-test-11"\s*class="govcy-input-error-msg\s*"\s*>([\s\S]*?)<span class="govcy-visually-hidden-error">Error:<\/span>([\s\S]*?)<\/p>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'12 `formControl` macro render as expected. Options isError:true, classes, id', async () => {
        // check for structure  
        let expectedRegex = /<div\s*id="govcy-test-12"\s*class="govcy-form-control\s*govcy-form-control-error\s*govcy-test-class"\s*>([\s\S]*?)<\/div>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'13 `form` macro render as expected. Options classes, id', async () => {
        // check for structure  
        let expectedRegex = /<form\s*id="govcy-test-13"\s*action=""\s*class="govcy-form\s*govcy-test-class"\s*novalidate=""\s*>([\s\S]*?)<\/form>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'14 `form` macro render as expected. Options action', async () => {
        // check for structure  
        let expectedRegex = /<form\s*id="govcy-test-14"\s*action="test-action"\s*class="govcy-form"\s*novalidate=""\s*>([\s\S]*?)<\/form>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'15 `formControl` macro render as expected. Options id', async () => {
        // check for structure  
        let expectedRegex = /<div\s*id="govcy-test-15"\s*class="govcy-form-control"\s*>([\s\S]*?)<\/div>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    // only test this when rendering from njk
    if (checksNum==1) {
        it(checksNum+'16 `govcyLocalizeContent` macro render as expected.', async () => {
            // check for structure   
            let expectedRegex = /&lt;b&gt;Should show English escaped&lt;\/b&gt;/;
            expect(renderedHTML).to.match(expectedRegex);
            // check for structure   
            expectedRegex = /&lt;b&gt;Should show Ελληνικά escaped&lt;\/b&gt;/;
            expect(renderedHTML).to.match(expectedRegex);
            // check for structure   
            expectedRegex = /<b>Should show Ελληνικά unescaped<\/b>/;
            expect(renderedHTML).to.match(expectedRegex);
        });
    }
    it(checksNum+'17 `select` macro render as expected. Default options. Checks for form control, label, select and options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control">`,//form control
            `\\s*<label\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-17">([\\s\\S]*?)<\\/label>`,//label
            `\\s*<select\\s*id="govcy-test-17"\\s*name="govcy-test-17"\\s*\\s*class="govcy-select\\s*"([\\s\\S]*?)>([\\s\\S]*?)<\\/select>`,//select
            `\\s*<\\/div>` //closing tags
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
        // check for options   
        expectedRegex =  new RegExp ([ 
            `<select([\\s\\S]*?)id="govcy-test-17"([\\s\\S]*?)>`,//select
            `\\s*<option\\s*value="">None<\\/option>\\s*<option\\s*value="published">Recently published<\\/option>`,//options
            `([\\s\\S]*?)<\\/select>` //closing tags
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'18 `select` macro render as expected. Options error, hint. Checks for form control, label, select and options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control\\s*govcy-form-control-error">`,//form control
            `\\s*<label\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-18">([\\s\\S]*?)<\\/label>`,//label
            `\\s*<span\\s*id="govcy-test-18-hint"\\s*class="govcy-hint">([\\s\\S]*?)<\\/span>`,//hint
            `\\s*<p id="govcy-test-18-error"\\s*class="govcy-input-error-msg">([\\s\\S]*?)<\\/p>`,//error
            `\\s*<select\\s*id="govcy-test-18"\\s*name="govcy-test-18"\\s*class="govcy-select\\s*govcy-select-error\\s*"\\s*aria-describedby="govcy-test-18-hint\\s*govcy-test-18-error"([\\s\\S]*?)>`,//select
            `([\\s\\S]*?)<\\/select>\\s*<\\/div>` //closing tags
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
        // check for options   
        expectedRegex =  new RegExp ([ 
            `<select([\\s\\S]*?)id="govcy-test-18"([\\s\\S]*?)>`,//select
            `\\s*<option\\s*value="">None<\\/option>\\s*<option\\s*value="published">Recently published<\\/option>`,//options
            `([\\s\\S]*?)<\\/select>` //closing tags
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'19 `select` macro render as expected. Options error, hint, isPageHeading. Checks for form control, label, select and options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control\\s*govcy-form-control-error">`,//form control
            `\\s*<h1><label\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-19">([\\s\\S]*?)<\\/label>\\s*<\\/h1>`,//label
            `\\s*<span\\s*id="govcy-test-19-hint"\\s*class="govcy-hint">([\\s\\S]*?)<\\/span>`,//hint
            `\\s*<p id="govcy-test-19-error"\\s*class="govcy-input-error-msg">([\\s\\S]*?)<\\/p>`,//error
            `\\s*<select\\s*id="govcy-test-19"\\s*name="govcy-test-19"\\s*class="govcy-select\\s*govcy-select-error\\s*"\\s*aria-describedby="govcy-test-19-hint\\s*govcy-test-19-error"([\\s\\S]*?)>`,//select
            `([\\s\\S]*?)<\\/select>\\s*<\\/div>` //closing tags
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
        // check for options   
        expectedRegex =  new RegExp ([ 
            `<select([\\s\\S]*?)id="govcy-test-19"([\\s\\S]*?)>`,//select
            `\\s*<option\\s*value="">None<\\/option>\\s*<option\\s*value="published">Recently published<\\/option>`,//options
            `([\\s\\S]*?)<\\/select>` //closing tags
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'20 `select` macro render as expected. Options hint. Checks for form control, label, select and options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control\\s*">`,//form control
            `\\s*<label\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-20">([\\s\\S]*?)<\\/label>`,//label
            `\\s*<span\\s*id="govcy-test-20-hint"\\s*class="govcy-hint">([\\s\\S]*?)<\\/span>`,//hint
            `\\s*<select\\s*id="govcy-test-20"\\s*name="govcy-test-20"\\s*class="govcy-select\\s*"\\s*aria-describedby="govcy-test-20-hint\\s*"([\\s\\S]*?)>`,//select
            `([\\s\\S]*?)<\\/select>\\s*<\\/div>` //closing tags
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
        // check for options   
        expectedRegex =  new RegExp ([ 
            `<select([\\s\\S]*?)id="govcy-test-20"([\\s\\S]*?)>`,//select
            `\\s*<option\\s*value="">None<\\/option>\\s*<option\\s*value="published">Recently published<\\/option>`,//options
            `([\\s\\S]*?)<\\/select>` //closing tags
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'21 `select` macro render as expected. Options lang:"el". Checks for label, hint, error, options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control\\s*govcy-form-control-error">`,//form control
            `\\s*<label\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-21"([\\s\\S]*?)lang="el">\\s*Περιεχομένο label\\s*<\\/label>`,//label
            `\\s*<span\\s*id="govcy-test-21-hint"([\\s\\S]*?)lang="el">\\s*Περιεχομένο hint\\s*<\\/span>`,//hint
            `([\\s\\S]*?)<p id="govcy-test-21-error"([\\s\\S]*?)lang="el">([\\s\\S]*?)Περιεχομένο error\\s*<\\/p>`,//error
            `\\s*<select\\s*id="govcy-test-21"([\\s\\S]*?)lang="el">`,//select
            `([\\s\\S]*?)<\\/select>\\s*<\\/div>` //closing tags
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
        // check for content   
        expectedRegex =  new RegExp ([ 
            `<select([\\s\\S]*?)id="govcy-test-21"([\\s\\S]*?)>`,//select
            `\\s*<option\\s*value="">Κανένα<\\/option>\\s*<option\\s*value="published">Πρόσφατα<\/option>([\\s\\S]*?)`,//options
            `<\\/select>` //closing tags
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'22 `form` and `formControl` macro render as expected when used with `elements`', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<form\\s*id="govcy-test-22"([\\s\\S]*?)>`,//form 
            `\\s*<div\\s*id="govcy-test-23"([\\s\\S]*?)>`,//form control
            `\\s*<div\\s*class="govcy-form-control">\\s*<label\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-23a">([\\s\\S]*?)</label>`,//select label
            `\\s* <select\\s*id="govcy-test-23a"([\\s\\S]*?)<\\/select>\\s*<\\/div>`,//select
            `\\s*<button\\s*type="button"\\s*id="govcy-test-23b"([\\s\\S]*?)<\\/button>`,// button 1
            `\\s*<button\\s*type="button"\\s*id="govcy-test-23c"\\s*class="govcy-btn-secondary"([\\s\\S]*?)<\\/button>`,//button 2
            `\\s*<button\\s*type="button"\\s*id="govcy-test-23d"\\s*class="govcy-btn-success"([\\s\\S]*?)<\\/button>`,//button 3
            `\\s*<\\/div>\\s*<\\/form>` //closing tags
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'24 `textElement` macro render as expected', async () => {
        // check for structure
        let expectedRegex =  new RegExp ([ 
            `<p\\s*id="govcy-test-24a"\\s*class="govcy-test-class"\\s*>\\s*Default content\\s*<\\/p>`//p
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
        expectedRegex =  new RegExp ([ 
            `<h3\\s*id="govcy-test-24b"\\s*lang="el">\\s*Default Περιεχομένο\\s*<\\/h3>`//h3
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'25 check that something is rendered in a different section, in this case `beforeMain`', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<section\\s*class="govcy-container"\\s*id="beforeMainContainer">`,//section 
            `\\s*<p\\s*id="govcy-test-25">`,//p
            `([\\s\\S]*?)<\\/p>\\s*<\\/section>` //closing tags
        ].join(''));
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'26 Lang attribute with `govcyLocalizeContent` macro renders as expected for `button`,`hint`, `legend`, `textElement`.', async () => {
        // check for structure  
        // error message is checked in 10. 
        // hint, label, legend error message, select is checked in 21.
        let expectedRegex = /<button\s*type="button"\s*id="govcy-test-26a"([\s\S]*?)lang="el">\s*Ελληνικά\s*<\/button>/;
        expect(renderedHTML).to.match(expectedRegex);
        expectedRegex = /<span\s*id="govcy-test-26b"\s*class="govcy-hint"\s*lang="el">\s*Ελληνικά\s*<\/span>/;
        expect(renderedHTML).to.match(expectedRegex);
        expectedRegex = /<legend\s*id="govcy-test-26c"\s*class="govcy-legend"\s*lang="el">\s*Ελληνικά\s*<\/legend>/;
        expect(renderedHTML).to.match(expectedRegex);
        expectedRegex = /<p\s*id="govcy-test-26d"\s*lang="el">\s*Ελληνικά\s*<\/p>/;
        expect(renderedHTML).to.match(expectedRegex);
    });
    
}
