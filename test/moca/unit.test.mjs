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
            `([\\s\\S]*?)<\\/p>([\\s\\S]*?)<\\/section>` //closing tags
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
    it(checksNum+'27a `textInput` macro render as expected. Text with minimum options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control">`,//form control 
            `\\s*<label\\s*id="govcy-test-27a-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-27a">\\s*1. Text with minimum options\\s*<\\/label>`,//label
            `\\s*<input\\s*id="govcy-test-27a"\\s*type="text"\\s*spellcheck="false"\\s*class="govcy-text-input">`, //input
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'27b `textInput` macro render as expected. isPageHeading:true', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control">`,//form control 
            `\\s*<h1>\\s*<label\\s*id="govcy-test-27b-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-27b">\\s*2. Text input with isPageHeading:true\\s*<\\/label>\\s*<\\/h1>`,//label
            `\\s*<input\\s*id="govcy-test-27b"\\s*type="text"\\s*spellcheck="false"\\s*class="govcy-text-input">`, //input
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'27c `textInput` macro render as expected. Ελληνικά. with most options, type:tel, fixedWidth:50', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control\\s*govcy-form-control-error\\s*govcy-test-class\\s*"\\s*lang="el">`,//form control 
            `\\s*<label\\s*id="govcy-test-27c-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-27c"\\s*lang="el">\\s*3. Ελληνικά. Text input with most options, type:tel, fixedWidth:50\\s*<\\/label>`,//label
            `\\s*<span\\s*id="govcy-test-27c-hint"\\s*class="govcy-hint"\\s*lang="el">\\s*Περιεχομένο\\s*hint\\s*<\\/span>`,//hint
            `\\s*<p\\s*id="govcy-test-27c-error"\\s*class="govcy-input-error-msg"\\s*lang="el"\\s*>\\s*<span\\s*class="govcy-visually-hidden-error"\\s*>\\s*Σφάλμα:\\s*<\\/span>\\s*Περιεχομένο error\\s*<\\/p>`,//error message
            `\\s*<input id="govcy-test-27c"\\s*name="govcy-test-27c"\\s*type="tel"\\s*spellcheck="false"\\s*autocomplete="tel"\\s*class="govcy-text-input\\s*govcy-text-input-char_50\\s*govcy-text-input-error"\\s*aria-describedby="govcy-test-27c-hint\\s*govcy-test-27c-error\\s*"\\s*>`, //input
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'27d `textInput` macro render as expected. type:email', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control">`,//form control 
            `\\s*<label\\s*id="govcy-test-27d-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-27d">\\s*4\\. Text type:email\\s*<\\/label>`,//label
            `\\s*<input\\s*id="govcy-test-27d"\\s*name="govcy-test-27d"\\s*type="email"\\s*spellcheck="false"\\s*autocomplete="email"\\s*class="govcy-text-input">`, //input
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'27e `textInput` macro render as expected. type:numeric', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control">`,//form control 
            `\\s*<label\\s*id="govcy-test-27e-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-27e"\\s*>\\s*5. Text type:numeric\\s*<\\/label>`,//label
            `\\s*<input\\s*id="govcy-test-27e"\\s*name="govcy-test-27e"\\s*type="text"\\s*pattern="\\[0-9\\]\\*"\\s*inputmode="numeric"\\s*spellcheck="false"\\s*class="govcy-text-input"\\s*>`, //input
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'27f `textInput` macro render as expected. type:name', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control">`,//form control 
            `\\s*<label\\s*id="govcy-test-27f-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-27f"\\s*>\\s*6. Text type:name\\s*<\\/label>`,//label
            `\\s*<input\\s*id="govcy-test-27f"\\s*name="govcy-test-27f"\\s*type="text"\\s*spellcheck="false"\\s*autocomplete="name"\\s*class="govcy-text-input">`, //input
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'27h `textInput` macro render as expected. fixedWidth:35', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control">`,//form control 
            `\\s*<label\\s*id="govcy-test-27g-label"\\s*class="govcy-label\\s*govcy-label-primary\\s*"\\s*for="govcy-test-27g"\\s*>\\s*7. Text fixedWidth:35\\s*<\\/label>`,//label
            `\\s*<input\\s*id="govcy-test-27g"\\s*name="govcy-test-27g"\\s*type="text"\\s*spellcheck="false"\\s*class="govcy-text-input\\s*govcy-text-input-char_35\\s*"\\s*>`, //input
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        // expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'27i `textInput` macro render as expected. isSpellcheck=true', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control">`,//form control 
            `\\s*<label\\s*id="govcy-test-27i-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-27i"\\s*>\\s*9. Text spellcheck true\\s*<\\/label>`,//label
            `\\s*<input\\s*id="govcy-test-27i"\\s*name="govcy-test-27i"\\s*type="text"\\s*spellcheck="true"\\s*class="govcy-text-input"\\s*>`, //input
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'27j `textInput` macro render as expected. autocomplete:tel', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control">`,//form control 
            `\\s*<label\\s*id="govcy-test-27j-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-27j"\\s*>\\s*10. Text autocomplete:tel\\s*<\\/label>`,//label
            `\\s*<input\\s*id="govcy-test-27j"\\s*name="govcy-test-27j"\\s*type="text"\\s*spellcheck="false"\\s*autocomplete="tel"\\s*class="govcy-text-input"\\s*>`, //input
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'28 `fieldset` macro render as expected. defaults', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*id="govcy-test-28"\\s*class="govcy-fieldset">`,//fieldset 
            `\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'29 `fieldset` macro render as expected. options classes, ariaDescribedBy, lang', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*id="govcy-test-29"\\s*class="govcy-fieldset\\s*govcy-test-class"\\s*aria-describedby="govcy-test-29-aria"\\s*lang="el"\\s*>`,//fieldset 
            `\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'30 `fieldset` macro render as expected. has elements', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*id="govcy-test-30"\\s*class="govcy-fieldset"\\s*>`,//fieldset 
            `\\s*<div\\s*class="govcy-form-control">`,//input form control
            `\\s*<label\\s*id="govcy-test-30a-label"([\\s\\S]*?)<\\/label>`,//label
            `\\s*<input\\s*id="govcy-test-30a"([\\s\\S]*?)>`,//input
            `\\s*<\\/div>`, //input closing tags
            `\\s*<p>English text govcy-test-30<\\/p>`, //input closing tags
            `\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'31 `radios` macro render as expected. default options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset">`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend">\\s*Radios: English default options\\s*<\\/legend>`,//legend
            `\\s*<div\\s*class="govcy-form-control">`,//form control
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'32 `radios` macro render as expected. with items', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset">`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend">\\s*Radios: English with items\\s*<\\/legend>`,//legend
            `\\s*<div\\s*class="govcy-form-control">`,//form control
            `\\s*<div\\s*class="govcy-radio">`,//radio
            `\\s*<input\\s*class="govcy-radio-input"\\s*name="govcy-test-32"\\s*value="yes"\\s*type="radio"\\s*id="govcy-test-32-option-1"\\s*>`,//input for radio
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-32-option-1"\\s*>\\s*Yes\\s*<\\/label>`,//label for radio
            `\\s*<\\/div>`, //closing tags for radio
            `\\s*<div\\s*class="govcy-radio">`,//radio
            `\\s*<input\\s*class="govcy-radio-input"\\s*name="govcy-test-32"\\s*value="no"\\s*type="radio"\\s*id="govcy-test-32-option-2"\\s*>`,//input for radio
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-32-option-2"\\s*>\\s*No\\s*<\\/label>`,//label for radio
            `\\s*<\\/div>`, //closing tags for radio
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'33 `radios` macro render as expected. with items and error', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset"\\s*aria-describedby="\\s*govcy-test-33-error">`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend">\\s*Radios: English with items and error\\s*<\\/legend>`,//legend
            `\\s*<div\\s*class="govcy-form-control\\s*govcy-form-control-error">`,//form control
            `\\s*<p id="govcy-test-33-error"\\s*class="govcy-input-error-msg">([\\s\\S]*?)<\\/p>`,//error message
            `\\s*<div\\s*class="govcy-radio">`,//radio
            `\\s*<input\\s*class="govcy-radio-input"\\s*name="govcy-test-33"\\s*value="yes"\\s*type="radio"\\s*id="govcy-test-33-option-1"\\s*>`,//input for radio
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-33-option-1"\\s*>\\s*Yes\\s*<\\/label>`,//label for radio
            `\\s*<\\/div>`, //closing tags for radio
            `\\s*<div\\s*class="govcy-radio">`,//radio
            `\\s*<input\\s*class="govcy-radio-input"\\s*name="govcy-test-33"\\s*value="no"\\s*type="radio"\\s*id="govcy-test-33-option-2"\\s*>`,//input for radio
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-33-option-2"\\s*>\\s*No\\s*<\\/label>`,//label for radio
            `\\s*<\\/div>`, //closing tags for radio
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'34 `radios` macro render as expected. with `and` item', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset">`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend">\\s*Radios: English with and item\\s*<\\/legend>`,//legend
            `\\s*<div\\s*class="govcy-form-control">`,//form control
            `\\s*<div\\s*class="govcy-radio">`,//radio
            `([\\s\\S]*?)`,
            `\\s*<p\\s*class="govcy-ml-3\\s*govcy-mb-3">\\s*And\\s*</p>\\s*`, //and item
            `\\s*<div\\s*class="govcy-radio">`,//radio
            `\\s*<input\\s*class="govcy-radio-input"\\s*name="govcy-test-34"\\s*value="maybe"\\s*type="radio"\\s*id="govcy-test-34-option-3"\\s*>`,//input for radio
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-34-option-3"\\s*>\\s*<span\\s*class="govcy-visually-hidden-error">\\s*And,\\s*</span>\\s*Maybe\\s*<\\/label>`,//label for radio
            `\\s*<\\/div>`, //closing tags for radio
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'35 `radios` macro render as expected. with inline items', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset">`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend">\\s*Radios: English with inline items\\s*<\\/legend>`,//legend
            `\\s*<div\\s*class="govcy-form-control">`,//form control
            `\\s*<div\\s*class="govcy-radio\\s*govcy-d-sm-inline-block">`,//radio
            `\\s*<input\\s*class="govcy-radio-input"\\s*name="govcy-test-35"\\s*value="yes"\\s*type="radio"\\s*id="govcy-test-35-option-1"\\s*>`,//input for radio
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-35-option-1"\\s*>\\s*Yes\\s*<\\/label>`,//label for radio
            `\\s*<\\/div>`, //closing tags for radio
            `\\s*<div\\s*class="govcy-radio\\s*govcy-d-sm-inline-block">`,//radio
            `\\s*<input\\s*class="govcy-radio-input"\\s*name="govcy-test-35"\\s*value="no"\\s*type="radio"\\s*id="govcy-test-35-option-2"\\s*>`,//input for radio
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-35-option-2"\\s*>\\s*No\\s*<\\/label>`,//label for radio
            `\\s*<\\/div>`, //closing tags for radio
            `\\s*<p\\s*class="govcy-ml-3\\s*govcy-mb-3\\s*govcy-d-sm-inline-block\\s*govcy-mr-3">\\s*Or\\s*</p>\\s*`, //or item
            `\\s*<div\\s*class="govcy-radio\\s*govcy-d-sm-inline-block">`,//radio
            `\\s*<input\\s*class="govcy-radio-input"\\s*name="govcy-test-35"\\s*value="maybe"\\s*type="radio"\\s*id="govcy-test-35-option-3"\\s*>`,//input for radio
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-35-option-3"\\s*>\\s*<span\\s*class="govcy-visually-hidden-error">\\s*Or,\\s*</span>\\s*Maybe\\s*<\\/label>`,//label for radio
            `\\s*<\\/div>`, //closing tags for radio
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'36 `radios` macro render as expected. with all options possible, isPageHeading, radios with hint, altAndText', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset\\s*govcy-test-class"\\s*aria-describedby="\\s*govcy-test-36-hint\\s*govcy-test-36-error\\s*"\\s*>`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend">\\s*<h1>\\s*Radios: English with all options possible\\s*<\\/h1>\\s*<\\/legend>`,//legend
            `\\s*<div\\s*class="govcy-form-control\\s*govcy-form-control-error">`,//form control
            `([\\s\\S]*?)`,
            `\\s*<div\\s*class="govcy-radio">`,//radio
            `\\s*<input\\s*class="govcy-radio-input"\\s*name="govcy-test-36"\\s*value="no"\\s*type="radio"\\s*id="govcy-test-36-option-2"\\s*aria-describedby="govcy-test-36-option-2-hint"\\s*>`,//input for radio
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-36-option-2"\\s*>\\s*No\\s*<\\/label>`,//label for radio
            `\\s*<span\\s*id="govcy-test-36-option-2-hint"\\s*class="govcy-hint">\\s*English hint for no\\s*<\\/span>`, //hint for radio
            `\\s*<\\/div>`, //closing tags for radio
            `\\s*<p\\s*class="govcy-ml-3\\s*govcy-mb-3">\\s*If not\\s*</p>`, //Add item
            `\\s*<div\\s*class="govcy-radio">`,//radio
            `\\s*<input\\s*class="govcy-radio-input"\\s*name="govcy-test-36"\\s*value="maybe"\\s*type="radio"\\s*id="govcy-test-36-option-3"\\s*aria-describedby="\\s*govcy-test-36-option-3-hint"\\s*>`,//input for radio
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-36-option-3"\\s*>\\s*<span\\s*class="govcy-visually-hidden-error">\\s*If not,\\s*</span>\\s*Maybe\\s*<\\/label>`,//label for radio
            `\\s*<span\\s*id="govcy-test-36-option-3-hint"\\s*class="govcy-hint">\\s*We want you to be absolutely sure\\s*<\\/span>`, //hint for radio
            `\\s*<\\/div>`, //closing tags for radio
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'37 `radios` macro render as expected. lang:el', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset\\s*govcy-test-class"\\s*aria-describedby="\\s*govcy-test-37-hint\\s*govcy-test-37-error\\s*"\\s*lang="el"\\s*>`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend"\\s*lang="el">\\s*<h1>\\s*Radios: Ελληνικά with all options possible\\s*<\\/h1>\\s*<\\/legend>`,//legend
            `([\\s\\S]*?)`,
            `Ελληνικά hint`,
            `([\\s\\S]*?)`,
            `Ελληνικά error`,
            `([\\s\\S]*?)`,
            `Ναι`,
            `([\\s\\S]*?)`,
            `Όχι`,
            `([\\s\\S]*?)`,
            `Ελληνικά hint for no`,
            `([\\s\\S]*?)`,
            `Αν όχι`,
            `([\\s\\S]*?)`,
            `Ίσως`,
            `([\\s\\S]*?)`,
            `Θέλουμε να είστε απολύτως σίγουροι govcy-test-43-option-3`,
            `([\\s\\S]*?)`,
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'38 `checkboxes` macro render as expected. default options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset">`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend">\\s*Checkboxes: English default options\\s*<\\/legend>`,//legend
            `\\s*<div\\s*class="govcy-form-control">`,//form control
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'39 `checkboxes` macro render as expected. with items', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset">`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend">\\s*Checkboxes: English with items\\s*<\\/legend>`,//legend
            `\\s*<div\\s*class="govcy-form-control">`,//form control
            `\\s*<div\\s*class="govcy-checkbox">`,//checkbox
            `\\s*<input\\s*class="govcy-checkbox-input"\\s*name="govcy-test-39"\\s*value="yes"\\s*type="checkbox"\\s*id="govcy-test-39-option-1"\\s*>`,//input for checkbox
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-39-option-1"\\s*>\\s*Yes\\s*<\\/label>`,//label for checkbox
            `\\s*<\\/div>`, //closing tags for checkbox
            `\\s*<div\\s*class="govcy-checkbox">`,//checkbox
            `\\s*<input\\s*class="govcy-checkbox-input"\\s*name="govcy-test-39"\\s*value="no"\\s*type="checkbox"\\s*id="govcy-test-39-option-2"\\s*>`,//input for checkbox
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-39-option-2"\\s*>\\s*No\\s*<\\/label>`,//label for checkbox
            `\\s*<\\/div>`, //closing tags for checkbox
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'40 `checkboxes` macro render as expected. with items and error', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset"\\s*aria-describedby="\\s*govcy-test-40-error">`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend">\\s*Checkboxes: English with items and error\\s*<\\/legend>`,//legend
            `\\s*<div\\s*class="govcy-form-control\\s*govcy-form-control-error">`,//form control
            `\\s*<p id="govcy-test-40-error"\\s*class="govcy-input-error-msg">([\\s\\S]*?)<\\/p>`,//error message
            `\\s*<div\\s*class="govcy-checkbox">`,//checkbox
            `\\s*<input\\s*class="govcy-checkbox-input"\\s*name="govcy-test-40"\\s*value="yes"\\s*type="checkbox"\\s*id="govcy-test-40-option-1"\\s*>`,//input for checkbox
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-40-option-1"\\s*>\\s*Yes\\s*<\\/label>`,//label for checkbox
            `\\s*<\\/div>`, //closing tags for checkbox
            `\\s*<div\\s*class="govcy-checkbox">`,//checkbox
            `\\s*<input\\s*class="govcy-checkbox-input"\\s*name="govcy-test-40"\\s*value="no"\\s*type="checkbox"\\s*id="govcy-test-40-option-2"\\s*>`,//input for checkbox
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-40-option-2"\\s*>\\s*No\\s*<\\/label>`,//label for checkbox
            `\\s*<\\/div>`, //closing tags for checkbox
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'41 `checkboxes` macro render as expected. with `and` item', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset">`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend">\\s*Checkboxes: English with and item\\s*<\\/legend>`,//legend
            `\\s*<div\\s*class="govcy-form-control">`,//form control
            `\\s*<div\\s*class="govcy-checkbox">`,//checkbox
            `([\\s\\S]*?)`,
            `\\s*<p\\s*class="govcy-ml-3\\s*govcy-mb-3">\\s*And\\s*</p>\\s*`, //and item
            `\\s*<div\\s*class="govcy-checkbox">`,//checkbox
            `\\s*<input\\s*class="govcy-checkbox-input"\\s*name="govcy-test-41"\\s*value="maybe"\\s*type="checkbox"\\s*id="govcy-test-41-option-3"\\s*>`,//input for checkbox
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-41-option-3"\\s*>\\s*<span\\s*class="govcy-visually-hidden-error">\\s*And,\\s*</span>\\s*Maybe\\s*<\\/label>`,//label for checkbox
            `\\s*<\\/div>`, //closing tags for checkbox
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'42 `checkboxes` macro render as expected. with all options possible, isPageHeading, checkboxes with hint, altAndText', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset\\s*govcy-test-class"\\s*aria-describedby="\\s*govcy-test-42-hint\\s*govcy-test-42-error\\s*"\\s*>`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend">\\s*<h1>\\s*Checkboxes: English with all options possible\\s*<\\/h1>\\s*<\\/legend>`,//legend
            `\\s*<div\\s*class="govcy-form-control\\s*govcy-form-control-error">`,//form control
            `([\\s\\S]*?)`,
            `\\s*<div\\s*class="govcy-checkbox">`,//checkbox
            `\\s*<input\\s*class="govcy-checkbox-input"\\s*name="govcy-test-42"\\s*value="no"\\s*type="checkbox"\\s*id="govcy-test-42-option-2"\\s*aria-describedby="govcy-test-42-option-2-hint"\\s*>`,//input for checkbox
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-42-option-2"\\s*>\\s*No\\s*<\\/label>`,//label for checkbox
            `\\s*<span\\s*id="govcy-test-42-option-2-hint"\\s*class="govcy-hint">\\s*English hint for no\\s*<\\/span>`, //hint for checkbox
            `\\s*<\\/div>`, //closing tags for checkbox
            `\\s*<p\\s*class="govcy-ml-3\\s*govcy-mb-3">\\s*If not\\s*</p>`, //Add item
            `\\s*<div\\s*class="govcy-checkbox">`,//checkbox
            `\\s*<input\\s*class="govcy-checkbox-input"\\s*name="govcy-test-42"\\s*value="maybe"\\s*type="checkbox"\\s*id="govcy-test-42-option-3"\\s*aria-describedby="\\s*govcy-test-42-option-3-hint"\\s*>`,//input for checkbox
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-42-option-3"\\s*>\\s*<span\\s*class="govcy-visually-hidden-error">\\s*If not,\\s*</span>\\s*Maybe\\s*<\\/label>`,//label for checkbox
            `\\s*<span\\s*id="govcy-test-42-option-3-hint"\\s*class="govcy-hint">\\s*We want you to be absolutely sure\\s*<\\/span>`, //hint for checkbox
            `\\s*<\\/div>`, //closing tags for checkbox
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'43 `checkboxes` macro render as expected. lang:el', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset\\s*govcy-test-class"\\s*aria-describedby="\\s*govcy-test-43-hint\\s*govcy-test-43-error\\s*"\\s*lang="el"\\s*>`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend"\\s*lang="el">\\s*<h1>\\s*Checkboxes: Ελληνικά with all options possible\\s*<\\/h1>\\s*<\\/legend>`,//legend
            `([\\s\\S]*?)`,
            `Ελληνικά hint`,
            `([\\s\\S]*?)`,
            `Ελληνικά error`,
            `([\\s\\S]*?)`,
            `Ναι`,
            `([\\s\\S]*?)`,
            `Όχι`,
            `([\\s\\S]*?)`,
            `Ελληνικά hint for no`,
            `([\\s\\S]*?)`,
            `Αν όχι`,
            `([\\s\\S]*?)`,
            `Ίσως`,
            `([\\s\\S]*?)`,
            `Θέλουμε να είστε απολύτως σίγουροι govcy-test-43-option-3`,
            `([\\s\\S]*?)`,
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'44 `fileInput` macro render as expected. with default options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control">`, //form control
            `\\s*<label\\s*id="govcy-test-44-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-44"\\s*>\\s*File input: English with default options\\s*<\\/label>`, //label
            `\\s*<input\\s*id="govcy-test-44"\\s*type="file"\\s*class="govcy-file-upload">`, //file input
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'45 `fileInput` macro render as expected. with hint', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control">`, //form control
            `\\s*<label\\s*id="govcy-test-45-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-45"\\s*>\\s*File input: English with hint\\s*<\\/label>`, //label
            `\\s*<span\\s*id="govcy-test-45-hint"\\s*class="govcy-hint"\\s*>\\s*PDF, JPG, JPEG, PNG are the acceptable formats\\s*<\\/span>`, //hint
            `\\s*<input\\s*id="govcy-test-45"\\s*name="govcy-test-45"\\s*type="file"\\s*class="govcy-file-upload"\\s*aria-describedby="govcy-test-45-hint\\s*">`, //file input
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'46 `fileInput` macro render as expected. with all possible options. id, name, classes, hint, label, error, isPageHeading', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control govcy-form-control-error">`, //form control
            `\\s*<h1>\\s*<label\\s*id="govcy-test-46-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-46"\\s*>\\s*File input: English with all possible options\\s*<\\/label>\\s*<\\/h1>`, //label
            `\\s*<span\\s*id="govcy-test-46-hint"\\s*class="govcy-hint">\\s*English hint\\s*<\\/span>`, //hint
            `\\s*<p\\s*id="govcy-test-46-error"\\s*class="govcy-input-error-msg">\\s*<span\\s*class="govcy-visually-hidden-error">\\s*Error:\\s*<\\/span>\\s*English error\\s*<\\/p>`, //error message
            `\\s*<input\\s*id="govcy-test-46"\\s*name="govcy-test-46"\\s*type="file"\\s*class="govcy-file-upload"\\s*aria-describedby="govcy-test-46-hint\\s*govcy-test-46-error\\s*"\\s*>`, //file input
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'47 `fileInput` macro render as expected. lang:el', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control govcy-form-control-error">`, //form control
            `\\s*<h1>\\s*<label\\s*id="govcy-test-47-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-47"\\s*lang="el"\\s*>\\s*Ελληνικά with all possible options\\s*<\\/label>\\s*<\\/h1>`, //label
            `([\\s\\S]*?)`,
            `Ελληνικά hint`,
            `([\\s\\S]*?)`,
            `Ελληνικά error govcy-test-47`,
            `([\\s\\S]*?)`,
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'48 `fileView` macro render as expected. with default options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form">`, //form div
            `\\s*<div class="govcy-form-control">`, //form control
            `\\s*<p\\s*class="govcy-label\\s*govcy-label-primary">\\s*File view: English with default options\\s*<\\/p>`, //label
            `\\s*<a\\s*href="#view48">\\s*View\\s*<\\/a>\\s*<a\\s*class="govcy-ml-3"\\s*href="#delete48">\\s*Delete\\s*<\\/a>`, //links
            `\\s*<\\/div>\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'49 `fileView` macro render as expected. with hint', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form">`, //form div
            `\\s*<div class="govcy-form-control">`, //form control
            `\\s*<p\\s*class="govcy-label\\s*govcy-label-primary">\\s*File view: English with hint\\s*<\\/p>`, //label
            `\\s*<span\\s*class="govcy-hint"\\s*>\\s*English hint\\s*<\\/span>`, //hint
            `\\s*<a\\s*href="#view49">\\s*View\\s*<\\/a>\\s*<a\\s*class="govcy-ml-3"\\s*href="#delete49">\\s*Delete\\s*<\\/a>`, //links
            `\\s*<\\/div>\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'50 `fileView` macro render as expected. with all possible options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form">`, //form div
            `\\s*<div class="govcy-form-control\\s*govcy-test-class">`, //form control
            `\\s*<h1>\\s*File view: English with all possible options\\s*<\\/h1>`, //label
            `\\s*<span\\s*class="govcy-hint"\\s*>\\s*English hint\\s*<\\/span>`, //hint
            `\\s*<a\\s*href="#view50">\\s*View\\s*<span\\s*class="govcy-visually-hidden">\\s*English visuallyHiddenText\\s*<\\/span><\\/a>`, //view link
            `\\s*<a\\s*class="govcy-ml-3"\\s*href="#delete50">\\s*Delete\\s*<span\\s*class="govcy-visually-hidden">\\s*English visuallyHiddenText\\s*<\\/span><\\/a>`, //delete link
            `\\s*<\\/div>\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'51 `fileView` macro render as expected. with lang:el', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form">`, //form div
            `\\s*<div class="govcy-form-control\\s*govcy-test-class"\\s*lang="el"\\s*>`, //form control
            `\\s*<h1>\\s*Ελληνικά label with lang:el\\s*<\\/h1>`, //label
            `\\s*<span\\s*class="govcy-hint"\\s*lang="el">\\s*Ελληνικά hint\\s*<\\/span>`, //hint
            `\\s*<a\\s*href="#view51">\\s*Προβολή\\s*<span\\s*class="govcy-visually-hidden">\\s*Ελληνικά visuallyHiddenText govcy-test-51\\s*<\\/span><\\/a>`, //view link
            `\\s*<a\\s*class="govcy-ml-3"\\s*href="#delete51">\\s*Διαγραφή\\s*<span\\s*class="govcy-visually-hidden">\\s*Ελληνικά visuallyHiddenText govcy-test-51\\s*<\\/span><\\/a>`, //delete link
            `\\s*<\\/div>\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'52 `backLink` macro render as expected. default options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<a\\s*class="govcy-back-link"\\s*href="javascript:history.back\\(\\)">\\s*Back\\s*<\\/a>`, //back link
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'53 `backLink` macro render as expected. with text options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<a\\s*class="govcy-back-link"\\s*href="javascript:history.back\\(\\)">\\s*Back EN govcy-test-53\\s*<\\/a>`, //back link
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'54 `backLink` macro render as expected. with text and classes options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<a\\s*class="govcy-back-link\\s*govcy-test-54"\\s*href="javascript:history.back\\(\\)">\\s*Back EN with classes\\s*<\\/a>`, //back link
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'55 `backLink` macro render as expected. with text, href and classes options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<a\\s*class="govcy-back-link\\s*govcy-test-55"\\s*href="#">\\s*Back EN with classes and href\\s*<\\/a>`, //back link
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'56 `backLink` macro render as expected. with text, href and classes options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<a\\s*class="govcy-back-link\\s*govcy-test-56"\\s*href="#"\\s*lang="el">\\s*Πίσω EL with classes and href\\s*<\\/a>`, //back link
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'57 `tag` macro render as expected. default options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<span\\s*class="govcy-tag">\\s*ENGLISH tag 57\\s*<\\/span>`, //tag
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'58 `tag` macro render as expected. with classes options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<span\\s*class="govcy-tag\\s*govcy-tag-gray">\\s*ENGLISH tag 58\\s*<\\/span>`, //tag
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'59 `tag` macro render as expected. with classes and lang options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<span\\s*class="govcy-tag\\s*govcy-tag-orange"\\s*lang="el">\\s*ΕΛΛΗΝΙΚΑ tag 59\\s*<\\/span>`, //tag
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
}
