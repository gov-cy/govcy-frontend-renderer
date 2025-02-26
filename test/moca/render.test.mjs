import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { expect } from 'chai';
import { govcyFrontendRenderer } from '../../dist/index.mjs';

/**
 * Render the html based on the test input either using the nkj or json method.
 * 
 * @param {string} inputMode "njk" or "json" 
 * @returns rendered HTML as string 
 */
function renderTest(inputMode){
    const renderer = new govcyFrontendRenderer();
    const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
    const __dirname = path.dirname(__filename); // get the name of the directory
    let inputString = null //
    if (inputMode === 'json') {
        inputString = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'test.json'), 'utf8')); // get the json data
    }else if (inputMode === 'njk') {
        inputString = fs.readFileSync(path.join(__dirname, '..', 'test.njk'), 'utf8'); // get the njk template
    }
    const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'site-data.json'), 'utf8')); // get site data
    const pageData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'page-data.json'), 'utf8')); // get page data
    // Merge the data
    const inputData = { ...siteData, ...pageData };
    let rtn = null;
    if (inputMode === 'json') {
        rtn = renderer.renderFromJSON(inputString, inputData)
    }else if (inputMode === 'njk') {
        rtn = renderer.renderFromString(inputString, inputData)
    }
    return rtn;
}

function renderLangTest(){
    const renderer = new govcyFrontendRenderer();

    let inputString = (num) =>
        `{% from "govcyElement.njk" import govcyElement %}
        {{ govcyElement("textElement",{text:{en:"English ",el:"Greek"}, type:"p", id:"govcy-test-3-${num}-1"}) }}
        {{ govcyElement("textElement",{text:{en:"English ",el:"Greek"}, lang:"en", type:"p", id:"govcy-test-3-${num}-2"}) }}
        {{ govcyElement("textElement",{text:{en:"English ",el:"Greek"}, lang:"el", type:"p", id:"govcy-test-3-${num}-3"}) }}
        `;
    let rtn = renderer.renderFromString(inputString(1), {})
    rtn += renderer.renderFromString(inputString(2), {site:{lang:'en'}});
    rtn += renderer.renderFromString(inputString(3), {site:{lang:'el'}});
    return rtn;
}


/**
 * Perform tests on rendered HTML
 * 
 * @param {string} renderedHTML The rendered HTML 
 * @param {string} checksNum The prefix of the checksNum 
 */
async function renderChecks(renderedHTML, checksNum){
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
    it(checksNum+'60 `table` default options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<table\\s*id="govcy-test-60"\\s*class="govcy-table">`, //table
            `\\s*<tbody>`, //tbody
            `\\s*<\\/tbody>\\s*<\\/table>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'61 `table` simple table', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<table\\s*id="govcy-test-61"\\s*class="govcy-table">`, //table
            `\\s*<thead>`, //thead
            `\\s*<tr>`, //tr
            `\\s*<th>\\s*Month\\s*<\\/th>`, //th
            `\\s*<th>\\s*Amount\\s*<\\/th>`, //th
            `\\s*<\\/tr>`, ///tr
            `\\s*<\\/thead>`, //thead
            `\\s*<tbody>`, //tbody
            `\\s*<tr>`, //tr
            `\\s*<td>\\s*January\\s*<\\/td>`, //td
            `\\s*<td>\\s*€85\\s*<\\/td>`, //td
            `\\s*<\\/tr>`, ///tr
            `\\s*<tr>`, //tr
            `\\s*<td>\\s*February\\s*<\\/td>`, //td
            `\\s*<td>\\s*€75\\s*<\\/td>`, //td
            `\\s*<\\/tr>`, ///tr
            `\\s*<\\/tbody>\\s*<\\/table>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'62 `table` Simple table with firstCellIsHeader:ture and responsiveType:vertical-headers', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<table\\s*id="govcy-test-62"\\s*class="govcy-table\\s*govcy-table-responsive-vertical">`, //table
            `\\s*<thead>`, //thead
            `\\s*<tr>`, //tr
            `\\s*<th>\\s*Month\\s*<\\/th>`, //th
            `\\s*<th>\\s*Amount\\s*<\\/th>`, //th
            `\\s*<\\/tr>`, ///tr
            `\\s*<\\/thead>`, //thead
            `\\s*<tbody>`, //tbody
            `\\s*<tr>`, //tr
            `\\s*<th\\s*scope="row">\\s*<div\\s*class="govcy-d-md-none\\s*govcy-fw-bolder\\s*govcy-my-2">\\s*Month\\s*<\\/div>\\s*January\\s*<\\/th>`, //th scope row
            `\\s*<td>\\s*<div\\s*class="govcy-d-md-none\\s*govcy-fw-bolder\\s*govcy-my-2">\\s*Amount\\s*<\\/div>\\s*€85\\s*<\\/td>`, //td
            `\\s*<\\/tr>`, ///tr
            `\\s*<tr>`, //tr
            `\\s*<th\\s*scope="row">\\s*<div\\s*class="govcy-d-md-none\\s*govcy-fw-bolder\\s*govcy-my-2">\\s*Month\\s*<\\/div>\\s*February\\s*<\\/th>`, //th scope row
            `\\s*<td>\\s*<div\\s*class="govcy-d-md-none\\s*govcy-fw-bolder\\s*govcy-my-2">\\s*Amount\\s*<\\/div>\\s*€75\\s*<\\/td>`, //td
            // `([\\s\\S]*?)`,
            `\\s*<\\/tr>`, ///tr
            `\\s*<\\/tbody>\\s*<\\/table>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'63 `table` Simple table with firstCellIsHeader:ture and responsiveType:vertical-no-headers', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<table\\s*id="govcy-test-63"\\s*class="govcy-table\\s*govcy-table-responsive-vertical">`, //table
            `\\s*<thead>`, //thead
            `\\s*<tr>`, //tr
            `\\s*<th>\\s*Month\\s*<\\/th>`, //th
            `\\s*<th>\\s*Amount\\s*<\\/th>`, //th
            `\\s*<\\/tr>`, ///tr
            `\\s*<\\/thead>`, //thead
            `\\s*<tbody>`, //tbody
            `\\s*<tr>`, //tr
            `\\s*<th\\s*scope="row">\\s*January\\s*<\\/th>`, //th scope row
            `\\s*<td>\\s*€85\\s*<\\/td>`, //td
            `\\s*<\\/tr>`, ///tr
            `\\s*<tr>`, //tr
            `\\s*<th\\s*scope="row">\\s*February\\s*<\\/th>`, //th scope row
            `\\s*<td>\\s*€75\\s*<\\/td>`, //td
            // `([\\s\\S]*?)`,
            `\\s*<\\/tr>`, ///tr
            `\\s*<\\/tbody>\\s*<\\/table>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'64 `table` Simple table with firstCellIsHeader:ture and responsiveType:horisontal', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-table-responsive">`, //table
            `\\s*<table\\s*id="govcy-test-64"\\s*class="govcy-table">`, //table
            `\\s*<thead>`, //thead
            `\\s*<tr>`, //tr
            `\\s*<th>\\s*Month\\s*<\\/th>`, //th
            `\\s*<th>\\s*Amount\\s*<\\/th>`, //th
            `\\s*<\\/tr>`, ///tr
            `\\s*<\\/thead>`, //thead
            `\\s*<tbody>`, //tbody
            `\\s*<tr>`, //tr
            `\\s*<th\\s*scope="row">\\s*January\\s*<\\/th>`, //th scope row
            `\\s*<td>\\s*€85\\s*<\\/td>`, //td
            `\\s*<\\/tr>`, ///tr
            `\\s*<tr>`, //tr
            `\\s*<th\\s*scope="row">\\s*February\\s*<\\/th>`, //th scope row
            `\\s*<td>\\s*€75\\s*<\\/td>`, //td
            // `([\\s\\S]*?)`,
            `\\s*<\\/tr>`, ///tr
            `\\s*<\\/tbody>\\s*<\\/table>\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'65 `table` Table with most options. On rows and head with colspan and rowspan, classes and multiple elements', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<table\\s*id="govcy-test-65"\\s*class="govcy-table\\s*govcy-test-class">`, //table
            `\\s*<thead>`, //thead
            `\\s*<tr>`, //tr
            `\\s*<th>\\s*Month\\s*<\\/th>`, //th
            `\\s*<th\\s*class="govcy-text-md-end"\\s*colspan="1"\\s*rowspan="1">\\s*Amount\\s*<\\/th>`, //th
            `\\s*<th>\\s*Status\\s*<\\/th>`, //th
            `\\s*<\\/tr>`, ///tr
            `\\s*<\\/thead>`, //thead
            `\\s*<tbody>`, //tbody
            `\\s*<tr>`, //tr
            `\\s*<th\\s*scope="row">\\s*January\\s*<\\/th>`, //th scope row
            `\\s*<td\\s*class="govcy-text-md-end"\\s*colspan="1"\\s*rowspan="1">\\s*€85\\s*<\\/td>`, //td
            `\\s*<td>\\s*<span\\s*class="govcy-tag\\s*govcy-tag-green">\\s*PAYED\\s*<\\/span>\\s*<\\/td>`, //td
            `\\s*<\\/tr>`, ///tr
            `\\s*<tr>`, //tr
            `\\s*<th\\s*scope="row">\\s*February\\s*<\\/th>`, //th scope row
            `\\s*<td\\s*class="govcy-text-md-end">\\s*<p><b>test<\\/b><\\/p>\\s*€75\\s*<\\/td>`, //td
            `\\s*<td>\\s*<span\\s*class="govcy-tag\\s*govcy-tag-orange">\\s*NOT PAYED\\s*<\\/span>\\s*<\\/td>`, //td
            `\\s*<\\/tr>`, ///tr
            // `([\\s\\S]*?)`,
            `\\s*<\\/tbody>\\s*<\\/table>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'66 `Table` Table with most options in lang:el', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<table\\s*id="govcy-test-66"\\s*class="govcy-table\\s*govcy-table-responsive-vertical"\\s*lang="el">`, //table
            `([\\s\\S]*?)`,
            `Μηνας`,
            `([\\s\\S]*?)`,
            `Ποσό`,
            `([\\s\\S]*?)`,
            `Κατάσταση`,
            `([\\s\\S]*?)`,
            `Μηνας`,
            `([\\s\\S]*?)`,
            `Ιανουάριος`,
            `([\\s\\S]*?)`,
            `Ποσό`,
            `([\\s\\S]*?)`,
            `€85`,
            `([\\s\\S]*?)`,
            `Κατάσταση`,
            `([\\s\\S]*?)`,
            `PAYED`,
            `([\\s\\S]*?)`,
            `Μηνας`,
            `([\\s\\S]*?)`,
            `Φεβάριος`,
            `([\\s\\S]*?)`,
            `Ποσό`,
            `([\\s\\S]*?)`,
            `<p>test el<\/p>\\s*€75`,
            `([\\s\\S]*?)`,
            `ΔΕΝ ΠΛΗΡΩΘΗΚΕ govcy-test-66`,
            // `([\\s\\S]*?)`,
            `\\s*<\\/span>\\s*<\\/td>\\s*<\\/tr>\\s*<\\/tbody>\\s*<\\/table>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'67 `summaryList` default options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<dl\\s*id="govcy-test-67"\\s*class="govcy-summary-list">`, //dl
            `\\s*<\\/dl>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'68 `summaryList` Simple, no actions', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<dl\\s*id="govcy-test-68"\\s*class="govcy-summary-list">`, //dl
            `\\s*<div\\s*class="govcy-summary-list-row">`, //row div
            `\\s*<dt\\s*class="govcy-summary-list-key">\\s*Name\\s*<\\/dt>`, //dt
            `\\s*<dd\\s*class="govcy-summary-list-value">\\s*Andreas Andreou\\s*<\\/dd>`, //dd
            `\\s*<\\/div>`, //closing div
            `\\s*<div\\s*class="govcy-summary-list-row">`, //row div
            `\\s*<dt\\s*class="govcy-summary-list-key">\\s*Date of birth\\s*<\\/dt>`, //dt
            `\\s*<dd\\s*class="govcy-summary-list-value">\\s*10 March 1990<br>\\s*<\\/dd>`, //dd
            `\\s*<\\/div>`, //closing div
            `\\s*<div\\s*class="govcy-summary-list-row">`, //row div
            `\\s*<dt\\s*class="govcy-summary-list-key">\\s*Address\\s*<\\/dt>`, //dt
            `\\s*<dd\\s*class="govcy-summary-list-value">\\s*50 Enton Street<br>Nicosia<br>2066\\s*<\\/dd>`, //dd
            `\\s*<\\/div>`, //closing div
            // `([\\s\\S]*?)`,
            `\\s*<\\/dl>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'69 `summaryList` with multiple elements and actions', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<dl\\s*id="govcy-test-69"\\s*class="govcy-summary-list">`, //dl
            `\\s*<div\\s*class="govcy-summary-list-row">`, //row div
            `\\s*<dt\\s*class="govcy-summary-list-key">\\s*Name\\s*<\\/dt>`, //dt
            `\\s*<dd\\s*class="govcy-summary-list-value">\\s*Andreas Andreou\\s*<\\/dd>`, //dd
            `\\s*<\\/div>`, //closing div
            `\\s*<div\\s*class="govcy-summary-list-row">`, //row div
            `\\s*<dt\\s*class="govcy-summary-list-key">\\s*Date of birth\\s*<\\/dt>`, //dt
            `\\s*<dd\\s*class="govcy-summary-list-value">\\s*10 March 1990<br>\\s*<span\\s*class="govcy-tag govcy-tag-green">\\s*Adult\\s*<\\/span><\\/dd>`, //dd
            `\\s*<dd\\s*class="govcy-summary-list-actions">\\s*<ul\\s*class="list-inline govcy-my-0">`, //open action
            `\\s*<li\\s*class="list-inline-item">`, //open list
            `\\s*<a href="#"\\s*class="govcy-link">\\s*Change\\s*<span class="govcy-visually-hidden">\\s*Date of birth\\s*<\\/span>\\s*</a>`, //action
            `\\s*</li>`, //close list
            `\\s*</ul>\\s*</dd>`, //close action
            `\\s*<\\/div>`, //closing div
            `\\s*<div\\s*class="govcy-summary-list-row">`, //row div
            `\\s*<dt\\s*class="govcy-summary-list-key">\\s*Address\\s*<\\/dt>`, //dt
            `\\s*<dd\\s*class="govcy-summary-list-value">\\s*50 Enton Street<br>Nicosia<br>2066\\s*<\\/dd>`, //dd
            `\\s*<dd\\s*class="govcy-summary-list-actions">\\s*<ul\\s*class="list-inline govcy-my-0">`, //open action
            `\\s*<li\\s*class="list-inline-item">`, //open list
            `\\s*<a href="#">\\s*Change\\s*<span class="govcy-visually-hidden">\\s*Address\\s*<\\/span>\\s*</a>`, //action
            `\\s*</li>`, //close list
            `\\s*<li\\s*class="list-inline-item">`, //open list
            `\\s*<a href="#2">\\s*Remove\\s*<span class="govcy-visually-hidden">\\s*Address\\s*<\\/span>\\s*</a>`, //action
            `\\s*</li>`, //close list
            `\\s*</ul>\\s*</dd>`, //close action
            `\\s*<\\/div>`, //closing div
            `\\s*<div\\s*class="govcy-summary-list-row">`, //row div
            `\\s*<dt\\s*class="govcy-summary-list-key">\\s*Contact details\\s*<\\/dt>`, //dt
            `\\s*<dd\\s*class="govcy-summary-list-value">`, //open dd
            `\\s*<ul\\s*class="list-inline govcy-my-0">`, //open list
            `\\s*<li\\s*class="list-inline-item">`, //open list
            `\\s*<a href="#1">\\s*Enter contact\\s*</a>`, //action
            `\\s*</li>`, //close list
            ,`\\s*<\\/ul>`, //close dd
            ,`\\s*<\\/dd>`, //close dd
            `\\s*<\\/div>`, //closing div
            // `([\\s\\S]*?)`,
            `\\s*<\\/dl>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'70 `summaryList` multiple elements and actions in Greek', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([            
            `<dl\\s*id="govcy-test-70"\\s*class="govcy-summary-list" lang="el">`, //dl
            `([\\s\\S]*?)`,
            `el Name`,
            `([\\s\\S]*?)`,
            `EL Andreas Andreou`,
            `([\\s\\S]*?)`,
            `el Date of birth`,
            `([\\s\\S]*?)`,
            `EL 10 March 1990`,
            `([\\s\\S]*?)`,
            `el Adult`,
            `([\\s\\S]*?)`,
            `Αλλαγή`,
            `([\\s\\S]*?)`,
            `Ημερομηνία γέννησης`,
            `([\\s\\S]*?)`,
            `el Address`,
            `([\\s\\S]*?)`,
            `el 50 Enton Street<br>Nicosia<br>2066`,
            `([\\s\\S]*?)`,
            `Αλλαγή`,
            `([\\s\\S]*?)`,
            `el Address`,
            `([\\s\\S]*?)`,
            `Διαγραφή`,
            `([\\s\\S]*?)`,
            `el Address`,
            `([\\s\\S]*?)`,
            `el Contact details`,
            `([\\s\\S]*?)`,
            `Εισαγάγετε τα στοιχεία επικοινωνίας govcy-test-70`,
            // `([\\s\\S]*?)`,
            // `\\s*<\\/span>\\s*<\\/td>\\s*<\\/tr>\\s*<\\/tbody>\\s*<\\/table>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'71 `conditional radios` macro render as expected. with all options possible and elements in items', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<fieldset\\s*class="govcy-fieldset\\s*govcy-test-class"\\s*aria-describedby="\\s*govcy-test-71-hint\\s*govcy-test-71-error\\s*"\\s*lang="el"\\s*>`,//fieldset 
            `\\s*<legend\\s*class="govcy-legend"\\s*lang="el">\\s*<h1>\\s*Radios: Ελληνικά with all options possible\\s*<\\/h1>\\s*<\\/legend>`,//legend
            `\\s*<div\\s*class="govcy-form-control\\s*govcy-form-control-error">`,//form control
            `([\\s\\S]*?)`, // not interested in radio specifics here, tested before
            `\\s*<div\\s*class="govcy-radio">`,//radio (with conditional elements)
            `\\s*<input\\s*class="govcy-radio-input"\\s*name="govcy-test-71"\\s*value="no"\\s*type="radio"\\s*id="govcy-test-71-option-2"\\s*aria-describedby="govcy-test-71-option-2-hint"\\s*data-aria-controls="govcy-test-71-option-2-conditional"\\s*>`,//input for radio
            `\\s*<label\\s*class="govcy-label"\\s*for="govcy-test-71-option-2"\\s*>\\s*<span class="govcy-visually-hidden">\\s*Αυτή η επιλογή επεκτείνεται και έχει περισσότερες ερωτήσεις,\\s*<\\/span>\\s*Όχι\\s*<\\/label>`,//label for radio
            `([\\s\\S]*?)`, // not interested in radio specifics here, tested before
            `\\s*<\\/div>`, //closing tags for radio (uncomment when styles are removed)
            `\\s*<div\\s*class="govcy-form-control\\s*govcy-form-control-error\\s*govcy-pl-4\\s*govcy-ml-5\\s*govcy-radio__conditional\\s*govcy-radio__conditional--hidden"\\s*id="govcy-test-71-option-2-conditional"\\s*>`, // conditional div
            `\\s*<div\\s*class="govcy-form-control"\\s*lang="el"\\s*>`, //form control 1 for conditional text input (withour error, controlled via hideFormControlError)
            `\\s*<label\\s*id="govcy-test-71a-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-71a"\\s*lang="el"\\s*>\\s*Όνομα\\s*<\\/label>`, //label for conditional text input
            `\\s*<p\\s*id="govcy-test-71a-error"\\s*class="govcy-input-error-msg"\\s*lang="el"\\s*>\\s*<span\\s*class="\\s*govcy-visually-hidden-error\\s*"\\s*>\\s*Σφάλμα:\\s*<\\/span>\\s*Ελληνικά error\\s*<\\/p>`, //error for conditional text input
            `\\s*<input\\s*id="govcy-test-71a"\\s*name="govcy-test-71a"\\s*type="text"\\s*spellcheck="false"\\s*class="govcy-text-input\\s*govcy-text-input-error\\s*"\\s*aria-describedby="\\s*govcy-test-71a-error\\s*">`, //input for conditional text input
            `\\s*<\\/div>`, //closing tags for conditional div 1
            `\\s*<div\\s*class="govcy-form-control"\\s*>`, //form control 2 for conditional text input (withour error, controlled via hideFormControlError)
            `([\\s\\S]*?)govcy-test-71a1([\\s\\S]*?)`, // not interested in control specifics here, tested before 
            `\\s*<\\/div>`, //closing tags for conditional div 2
            `([\\s\\S]*?)`, 
            `\\s*<div\\s*class="govcy-form-control">`, //form control in last conditional element
            `\\s*<label\\s*class="\\s*govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-71c"\\s*lang="el"\\s*>\\s*Χώρα\\s*<\\/label>`, //label in last conditional element
            `\\s*<select\\s*id="govcy-test-71c"\\s*name="govcy-test-71c"\\s*class="govcy-select"\\s*lang="el"\\s*>`, //select in last conditional element
            `\\s*<option\\s*value=""\\s*>\\s*Επιλέξετε Χώρα\\s*<\\/option>\\s*<option\\s*value="357"\\s*>\\s*ΚΥΠΡΟΣ\\s*<\\/option>\\s*<option\\s*value="9">\\s*ΕΛΛΑΔΑ\\s*<\\/option>`, //options in last conditional element,
            `\\s*<\\/select>\\s*<\\/div>`, //closing tags in last conditional element
            `\\s*<\\/div>`, //closing tags in last conditional area
            `\\s*<\\/div>\\s*<\\/fieldset>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'72 `textArea` macro render as expected. Default options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control">`,//form control 
            `\\s*<label\\s*id="govcy-test-72-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-72"\\s*>\\s*Default Text area\\s*<\\/label>`,//label
            `\\s*<textarea\\s*id="govcy-test-72"\\s*rows="5"\\s*spellcheck="false"\\s*class="govcy-text-area">\\s*<\\/textarea>`, //textarea
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'73 `textArea` macro render as expected. Default Text area with most options, autocomplete, character count char', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([ 
            `<div\\s*class="govcy-form-control\\s*govcy-form-control-error\\s*govcy-test-class">`,//form control 
            `\\s*<h1>\\s*<label\\s*id="govcy-test-73-label"\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-73"\\s*>\\s*Default Text area with most options, autocomplete, character count char\\s*<\\/label>\\s*<\\/h1>`,//label
            `\\s*<span\\s*id="govcy-test-73-hint"\\s*class="govcy-hint">\\s*English hint\\s*<\\/span>`, //hint
            `\\s*<p\\s*id="govcy-test-73-error"\\s*class="govcy-input-error-msg">\\s*<span class="govcy-visually-hidden-error">\\s*Error:\\s*<\\/span>\\s*English error\\s*<\\/p>`, //error
            `\\s*<textarea\\s*id="govcy-test-73"\\s*name="govcy-test-73"\\s*rows="7"\\s*spellcheck="true"\\s*autocomplete="street-address"\\s*class="govcy-text-area\\s*govcy-text-area-error"\\s*aria-describedby="govcy-test-73-char-count\\s*govcy-test-73-hint\\s*govcy-test-73-error">\\s*<\\/textarea>`, //textarea
            `\\s*<div\\s*id="govcy-test-73-char-count"\\s*class="govcy-character-count"\\s*data-maxchars="150">`, //character count
            `\\s*<div\\s*class="govcy-character-remaining-counter">\\s*You have <span><\\/span> characters remaining\\s*<\\/div>`, //remaining counter
            `\\s*<div\\s*class="govcy-character-more-counter">\\s*You have entered <span><\\/span> characters more\\s*<\\/div>`, //more counter
            `\\s*<\\/div>`, //closing character count
            `\\s*<\\/div>` //closing tags
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'74 `textArea` with most options, autocomplete, character count word, lang el', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([            
            `<div\\s*class="govcy-form-control\\s*govcy-form-control-error\\s*govcy-test-class"\\s* lang="el">`,//form control 
            `\\s*<h1>\\s*<label\\s*id="govcy-test-74-label"`,//label
            `([\\s\\S]*?)`,
            `Default Text area with most options, autocomplete, character count word, lang el`,
            `([\\s\\S]*?)`,
            `Ελληνικά hint`,
            `([\\s\\S]*?)`,
            `Σφάλμα:`,
            `([\\s\\S]*?)`,
            `Ελληνικά error`,
            `([\\s\\S]*?)`,
            `Έχετε <span><\\/span> λέξεις που απομένουν`,
            `([\\s\\S]*?)`,
            `Έχετε περάσει <span><\\/span> λέξεις περισσότερες`
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'75 `summaryList` Complex Summary List', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([            
            `\\s*<dl\\s*id="govcy-test-75"\\s*class="govcy-summary-list">`,//external dl 
            //1st row simple 
            `\\s*<div\\s*class="govcy-summary-list-row">`,//div
            `\\s*<dt\\s*class="govcy-summary-list-key">\\s*Name\\s*<\\/dt>`,//key simple
            `\\s*<dd\\s*class="govcy-summary-list-value"\\s*>\\s*Andreas Andreou\\s*<\/dd>`,//value simple
            `\\s*<dd\\s*class="govcy-summary-list-actions">`,//action dd
            `\\s*<ul\\s*class="list-inline govcy-my-0">`,//action ul
            `\\s*<li\\s*class="list-inline-item">\\s*<a\\s*href="#">\\s*Change\\s*<span\\s*class="govcy-visually-hidden">\\s*Date of birth\\s*<\\/span>\\s*<\\/a>\\s*<\\/li>`,//action li
            `\\s*<\\/ul>\\s*<\\/dd>\\s*<\\/div>`,//closing ul dd div
            // 2nd row complex 1 entry
            `\\s*<div\\s*class="govcy-summary-list-row">`,//div
            `\\s*<dt\\s*class="govcy-summary-list-key">\\s*Date of birth\\s*<span\\s*class="govcy-visually-hidden">\\s*1 Entries\\s*<\\/span>\\s*<\\/dt>`,//key complex with 1 entry
            `\\s*<dd\\s*class="govcy-summary-list-value"\\s*>`,//opening value dd comlpex
            `\\s*10 March 1990`,//simple value in complex example#
            // INNET DL START
            `\\s*<dl\\s*class="govcy-summary-list-row-internal">`,//inner dl in complex example
            `\\s*<dt><span\\s*class="govcy-visually-hidden">\\s*Entry 1\\s*<\\/span><\\/dt>`,//entry count in complex example
            `\\s*<dt\\s*class="govcy-summary-list-key-internal">\\s*Day 1\\s*<\\/dt>`,//dt inner key in complex example
            `\\s*<dd\\s*class="govcy-summary-list-value-internal">\\s*10\\s*<\\/dd>`,//dd inner value in complex example
            `\\s*<dt\\s*class="govcy-summary-list-key-internal">\\s*Month\\s*<\\/dt>`,//dt inner key in complex example
            `\\s*<dd\\s*class="govcy-summary-list-value-internal">\\s*March\\s*<\\/dd>`,//dd inner value in complex example
            `\\s*<dt\\s*class="govcy-summary-list-key-internal">\\s*Year\\s*<\\/dt>`,//dt inner key in complex example
            `\\s*<dd\\s*class="govcy-summary-list-value-internal">\\s*1990\\s*<\\/dd>`,//dd inner value in complex example
            `\\s*<\\/dl>`,//closing dl inner value in complex example
            // INNET DL END
            `\\s*<\\/dd>`,//closing value dd complex
            `\\s*<dd\\s*class="govcy-summary-list-actions">`,//action dd
            `\\s*<ul\\s*class="list-inline govcy-my-0">`,//action ul
            `\\s*<li\\s*class="list-inline-item">\\s*<a\\s*href="#">\\s*Change\\s*<span\\s*class="govcy-visually-hidden">\\s*Date of birth\\s*<\\/span>\\s*<\\/a>\\s*<\\/li>`,//action li
            `\\s*<\\/ul>\\s*<\\/dd>\\s*<\\/div>`,//closing ul dd div
            // 3nd row complex 2 entry
            `\\s*<div\\s*class="govcy-summary-list-row">`,//div
            `\\s*<dt\\s*class="govcy-summary-list-key">\\s*Address\\s*<span\\s*class="govcy-visually-hidden">\\s*2 Entries\\s*<\\/span>\\s*<\\/dt>`,//key complex with 2 entries
            `\\s*<dd\\s*class="govcy-summary-list-value"\\s*>`,//opening value dd comlpex
            // INNET DL START
            `\\s*<dl\\s*class="govcy-summary-list-row-internal">`,//inner dl in complex example
            `\\s*<dt><span\\s*class="govcy-visually-hidden">\\s*Entry 1\\s*<\\/span><\\/dt>`,//entry count in complex example
            `\\s*<dt\\s*class="govcy-summary-list-key-internal">\\s*Address line 1\\s*<\\/dt>`,//dt inner key in complex example
            `\\s*<dd\\s*class="govcy-summary-list-value-internal">\\s*1 Some Steet\\s*<\\/dd>`,//dd inner value in complex example
            `\\s*<dt\\s*class="govcy-summary-list-key-internal">\\s*Town\\s*<\\/dt>`,//dt inner key in complex example
            `\\s*<dd\\s*class="govcy-summary-list-value-internal">\\s*Nicosia\\s*<\\/dd>`,//dd inner value in complex example
            `\\s*<dt\\s*class="govcy-summary-list-key-internal">\\s*Post code\\s*<\\/dt>`,//dt inner key in complex example
            `\\s*<dd\\s*class="govcy-summary-list-value-internal">\\s*2040\\s*<\\/dd>`,//dd inner value in complex example
            `\\s*<\\/dl>`,//closing dl inner value in complex example
            // INNET DL END
            // INNET DL START
            `\\s*<dl\\s*class="govcy-summary-list-row-internal">`,//inner dl in complex example
            `\\s*<dt><span\\s*class="govcy-visually-hidden">\\s*Entry 2\\s*<\\/span><\\/dt>`,//entry count in complex example
            `\\s*<dt\\s*class="govcy-summary-list-key-internal">\\s*Address line 1\\s*<\\/dt>`,//dt inner key in complex example
            `\\s*<dd\\s*class="govcy-summary-list-value-internal">\\s*1 Some Steet\\s*<\\/dd>`,//dd inner value in complex example
            `\\s*<dt\\s*class="govcy-summary-list-key-internal">\\s*Town\\s*<\\/dt>`,//dt inner key in complex example
            `\\s*<dd\\s*class="govcy-summary-list-value-internal">\\s*Nicosia\\s*<\\/dd>`,//dd inner value in complex example
            `\\s*<dt\\s*class="govcy-summary-list-key-internal">\\s*Post code\\s*<\\/dt>`,//dt inner key in complex example
            `\\s*<dd\\s*class="govcy-summary-list-value-internal">\\s*2040\\s*<\\/dd>`,//dd inner value in complex example
            `\\s*<\\/dl>`,//closing dl inner value in complex example
            // INNET DL END
            `\\s*<\\/dd>`,//closing value dd complex
            `\\s*<dd\\s*class="govcy-summary-list-actions">`,//action dd
            `\\s*<ul\\s*class="list-inline govcy-my-0">`,//action ul
            `\\s*<li\\s*class="list-inline-item">\\s*<a\\s*href="#">\\s*Change\\s*<span\\s*class="govcy-visually-hidden">\\s*Address\\s*<\\/span>\\s*<\\/a>\\s*<\\/li>`,//action li
            `\\s*<li\\s*class="list-inline-item">\\s*<a\\s*href="#2">\\s*Remove\\s*<span\\s*class="govcy-visually-hidden">\\s*Address\\s*<\\/span>\\s*<\\/a>\\s*<\\/li>`,//action li
            `\\s*<\\/ul>\\s*<\\/dd>\\s*<\\/div>`,//closing ul dd div
            `\\s*<\\/dl>`,//closing dl
            // `([\\s\\S]*?)`,

            // `([\\s\\S]*?)`
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'76 `summaryList` Complex Summary List EL', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([            
            `\\s*<dl\\s*id="govcy-test-76"\\s*class="govcy-summary-list" lang="el">`,//external dl 
            `([\\s\\S]*?)`,
            `EL Date of birth`,
            `([\\s\\S]*?)`,
            `1 Καταχωρήσεις`,
            `([\\s\\S]*?)`,
            `EL 10 March 1990`,
            `([\\s\\S]*?)`,
            `Καταχώρηση 1`,
            `([\\s\\S]*?)`,
            `EL Day`,
            `([\\s\\S]*?)`,
            `EL 10`,
            `([\\s\\S]*?)`,
            `EL Month`,
            `([\\s\\S]*?)`,
            `EL March`,
            `([\\s\\S]*?)`,
            `EL Year`,
            `([\\s\\S]*?)`,
            `Αλλαγή`,
            `([\\s\\S]*?)`,
            `Ημερομηνία γέννησης`,
            `([\\s\\S]*?)`,
            `EL Address govcy-test-76`
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'77 `markdown` English', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([            
            `<p>\\s*govcy-test-77-start<\\/p>`,
            `\\s*<h2>\\s*Header 2\\s*<\\/h2>`,
            `\\s*<p>\\s*This is a <strong>\\s*Markdown-it\\s*<\\/strong>\\s*example rendered in <em>\\s*Nunjucks\\s*<\\/em>\\s*.\\s*<br>`,
            `\\s*This is a <a\\s*href="https://google.com"\\s*target="_blank"\\s*>\\s*link\\s*<\\/a>\\s*<\\/p>`,
            `\\s*<ul>\\s*<li\\s*class="govcy-text-success"\\s*>\\s*test\\s*<\\/li>\\s*<li>\\s*test\\s*<\\/li>\\s*<\\/ul>`,
            `\\s*<p>\\s*govcy-test-77-end<\\/p>`
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'79 `Panel` default', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([
            `<div\\s*id="govcy-test-79"\\s*class="govcy-alert-completed-notification">`, //external div
            `\\s*<div\\s*class="govcy-alert-completed-notification-body\\s*govcy-bg-success">\\s*<\\/div>`, //notification body div
            `\\s*<\\/div>`, //closing tag
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'81 `Panel` background danger', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([
            `<div\\s*id="govcy-test-80"\\s*class="govcy-alert-completed-notification">`, //external div
            `\\s*<div\\s*class="govcy-alert-completed-notification-body\\s*govcy-bg-danger">`, //notification body div
            `\\s*<h1>\\s*Your application has been sent\\s*<\\/h1>`, //header
            `\\s*<p>\\s*Your Reference Number\\s*<\\/p>`, //body
            `\\s*<p\\s*class="govcy-fw-bold">\\s*C123456\\s*<\\/p>`, //reference number
            `\\s*<\\/div>`, //closing tag
            `\\s*<\\/div>`, //closing tag
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'81 `Panel` with all options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([
            `<div\\s*id="govcy-test-81"\\s*class="govcy-alert-completed-notification">`, //external div
            `\\s*<div\\s*class="govcy-alert-completed-notification-body\\s*govcy-bg-success">`, //notification body div
            `\\s*<h1>\\s*Your application has been sent\\s*<\\/h1>`, //header
            `\\s*<p>\\s*Your Reference Number\\s*<\\/p>`, //body
            `\\s*<p\\s*class="govcy-fw-bold">\\s*C123456\\s*<\\/p>`, //reference number
            `\\s*test\\s*<span\\s*class="govcy-tag govcy-tag-gray"\\s*lang="el">\\s*el Adult\\s*<\\/span>`, //elements
            `\\s*<\\/div>`, //closing tag
            `\\s*<\\/div>`, //closing tag
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'82 `Panel` with all options lang="el"', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([
            `<div\\s*id="govcy-test-82"\\s*class="govcy-alert-completed-notification"\\s*lang="el">`, //external div
            `\\s*<div\\s*class="govcy-alert-completed-notification-body\\s*govcy-bg-success">`, //notification body div
            `\\s*<h1>\\s*Η αίτησή σας έχει σταλεί\\s*<\\/h1>`, //header
            `\\s*<p>\\s*Ο αριθμός αναφοράς σας\\s*<\\/p>`, //body
            `\\s*<p\\s*class="govcy-fw-bold">\\s*Π123456\\s*<\\/p>`, //reference number
            `\\s*test el\\s*<span\\s*class="govcy-tag\\s*govcy-tag-gray"\\s*lang="en">\\s*Adult<\\/span>`, //elements
            `\\s*<\\/div>`, //closing tag
            `\\s*<\\/div>`, //closing tag
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'83 `Date Picker` with default options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([
            `<div\\s*class="govcy-form-control">`, //div form control
            `\\s*<label\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-83"\\s*>\\s*Default\\s*values\\s*<\\/label>`, //label
            `\\s*<div\\s*class="govcy-date-picker">`, //date picker div
            `\\s*<input\\s*type="text"\\s*class="govcy-text-input\\s*"\\s*id="govcy-test-83"\\s*name="govcy-test-83"\\s*\\/>`, //date picker div
            `\\s*<\\/div>`, //closing tag
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'84 `Date Picker` with all options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([
            `<div\\s*class="govcy-form-control\\s*govcy-form-control-error\\s*test-class">`, //div form control
            `\\s*<h1>\\s*<label\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-84"\\s*>\\s*Default values\\s*<\\/label>\\s*<\\/h1>`, //label
            `\\s*<span\\s*id="govcy-test-84-hint"\\s*class="govcy-hint">\\s*This is a hint\\s*<\\/span>`, //hint
            `\\s*<p\\s*id="govcy-test-84-error"\\s*class="govcy-input-error-msg">\\s*<span\\s*class="govcy-visually-hidden-error">\\s*Error:\\s*<\\/span>\\s*This is an error\\s*<\\/p>`, //error
            `\\s*<div\\s*class="govcy-date-picker"\\s*data-min-date="2025-03-01"\\s*data-max-date="2025-03-10">`, //date picker div
            `\\s*<input\\s*type="text"\\s*class="govcy-text-input\\s*govcy-text-input-error\\s*"\\s*id="govcy-test-84"\\s*name="govcy-test-84"\\s*aria-describedby="\\s*govcy-test-84-hint\\s*govcy-test-84-error\\s*"\\s*\\/>`, //date picker div
            `\\s*<\\/div>`, //closing tag
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'85 `Date Picker` with all options lang="el"', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([
            `<div\\s*class="govcy-form-control\\s*govcy-form-control-error\\s*test-class">`, //div form control
            `\\s*<h1>\\s*<label\\s*class="govcy-label\\s*govcy-label-primary"\\s*for="govcy-test-85"\\s*lang="el">\\s*Default values el\\s*<\\/label>\\s*<\\/h1>`, //label
            `\\s*<span\\s*id="govcy-test-85-hint"\\s*class="govcy-hint"\\s*lang="el">\\s*This is a hint el\\s*<\\/span>`, //hint
            `\\s*<p\\s*id="govcy-test-85-error"\\s*class="govcy-input-error-msg"\\s*lang="el">\\s*<span\\s*class="govcy-visually-hidden-error">\\s*Σφάλμα:\\s*<\\/span>\\s*This is an error el\\s*<\\/p>`, //error
            `\\s*<div\\s*class="govcy-date-picker"\\s*data-min-date="2025-03-01"\\s*data-max-date="2025-03-10">`, //date picker div
            `\\s*<input\\s*type="text"\\s*class="govcy-text-input\\s*govcy-text-input-error\\s*"\\s*id="govcy-test-85"\\s*name="govcy-test-85"\\s*aria-describedby="\\s*govcy-test-85-hint\\s*govcy-test-85-error\\s*"\\s*lang="el"\\s*\\/>`, //date picker div
            `\\s*<\\/div>`, //closing tag
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'86 `Date Input` with default options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([
            `<fieldset\\s*class="govcy-fieldset"\\s*role="group"\\s*>`, //fieldset
            `\\s*<legend\\s*class="govcy-legend">\\s*Default values\\s*<\\/legend>`, //legend
            `\\s*<div\\s*class="govcy-form-control">`, //form control
            `\\s*<div\\s*class="govcy-d-flex govcy-flex-wrap">`, //flex wrap
            //-- Day --
            `\\s*<div\\s*class="govcy-d-block govcy-mr-3">`, //block day
            `\\s*<label\\s*class="govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2"\\s*for="govcy-test-86_day">\\s*Day\\s*<\\/label>`, //day label
            `\\s*<input\\s*id="govcy-test-86_day"\\s*name="govcy-test-86_day"\\s*class="govcy-text-input govcy-text-input-char_3"\\s*maxlength="2"\\s*type="text"\\s*pattern="\\[0-9\\]\\*"\\s*inputmode="numeric">`, //day input
            `\\s*</div>`, //closing div day
            //-- Month --
            `\\s*<div\\s*class="govcy-d-block govcy-mr-3">`, //block month
            `\\s*<label\\s*class="govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2"\\s*for="govcy-test-86_month">\\s*Month\\s*<\\/label>`, //month label
            `\\s*<select\\s*id="govcy-test-86_month"\\s*name="govcy-test-86_month"\\s*class="govcy-select">`, //month select
            `\\s*<option\\s*value=""\\s*selected="">\\s*<\\/option>`, //month empty
            `\\s*<option\\s*value="1"\\s*>\\s*1\\s*<\\/option>`, //month 1
            `\\s*<option\\s*value="2"\\s*>\\s*2\\s*<\\/option>`, //month 2
            `\\s*<option\\s*value="3"\\s*>\\s*3\\s*<\\/option>`, //month 3
            `\\s*<option\\s*value="4"\\s*>\\s*4\\s*<\\/option>`, //month 4
            `\\s*<option\\s*value="5"\\s*>\\s*5\\s*<\\/option>`, //month 5
            `\\s*<option\\s*value="6"\\s*>\\s*6\\s*<\\/option>`, //month 6
            `\\s*<option\\s*value="7"\\s*>\\s*7\\s*<\\/option>`, //month 7
            `\\s*<option\\s*value="8"\\s*>\\s*8\\s*<\\/option>`, //month 8
            `\\s*<option\\s*value="9"\\s*>\\s*9\\s*<\\/option>`, //month 9
            `\\s*<option\\s*value="10"\\s*>\\s*10\\s*<\\/option>`, //month 10
            `\\s*<option\\s*value="11"\\s*>\\s*11\\s*<\\/option>`, //month 11
            `\\s*<option\\s*value="12"\\s*>\\s*12\\s*<\\/option>`, //month 12
            `\\s*<\\/select>`, //closing select
            `\\s*<\\/div>`, //closing div month
            //-- Year --
            `\\s*<div\\s*class="govcy-d-block govcy-mr-3">`, //block year
            `\\s*<label\\s*class="govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2"\\s*for="govcy-test-86_year">\\s*Year\\s*<\\/label>`, //day label
            `\\s*<input\\s*id="govcy-test-86_year"\\s*name="govcy-test-86_year"\\s*class="govcy-text-input govcy-text-input-char_6"\\s*maxlength="4"\\s*type="text"\\s*pattern="\\[0-9\\]\\*"\\s*inputmode="numeric">`, //year input
            `\\s*</div>`, //closing div year
            `\\s*<\\/div>`, //closing flex wrap
            `\\s*<\\/div>`, //closing form control
            `\\s*<\\/fieldset>`, //closing fieldset
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'87 `Date Input` with all options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([
            `<fieldset\\s*class="govcy-fieldset\\s*govcy-test-class"\\s*role="group"\\s*aria-describedby="govcy-test-87-hint\\s*govcy-test-87-error"\\s*>`, //fieldset
            `\\s*<legend\\s*class="govcy-legend"\\s*>\\s*<h1>\\s*All options\\s*<\\/h1>\\s*<\\/legend>`, //legend
            `\\s*<div\\s*class="govcy-form-control\\s*govcy-form-control-error">`, //form control
            `\\s*<span\\s*id="govcy-test-87-hint"\\s*class="govcy-hint">\\s*This is a hint\\s*<\\/span>`, //hint
            `\\s*<p\\s*id="govcy-test-87-error"\\s*class="govcy-input-error-msg">\\s*<span\\s*class="govcy-visually-hidden-error"\\s*>\\s*Error:\\s*<\\/span>\\s*This is an error\\s*<\\/p>`, //error
            `\\s*<div\\s*class="govcy-d-flex govcy-flex-wrap">`, //flex wrap
            // //-- Day --
            `\\s*<div\\s*class="govcy-d-block govcy-mr-3">`, //block day
            `\\s*<label\\s*class="govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2"\\s*for="govcy-test-87_day">\\s*Day\\s*<\\/label>`, //day label
            `\\s*<input\\s*id="govcy-test-87_day"\\s*name="govcy-test-87_day"\\s*class="govcy-text-input govcy-text-input-char_3"\\s*maxlength="2"\\s*type="text"\\s*pattern="\\[0-9\\]\\*"\\s*inputmode="numeric"\\s*autocomplete="bday-day">`, //day input
            `\\s*</div>`, //closing div day
            // //-- Month --
            `\\s*<div\\s*class="govcy-d-block govcy-mr-3">`, //block month
            `\\s*<label\\s*class="govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2"\\s*for="govcy-test-87_month">\\s*Month\\s*<\\/label>`, //month label
            `\\s*<select\\s*id="govcy-test-87_month"\\s*name="govcy-test-87_month"\\s*class="govcy-select\\s*govcy-select-error"\\s*autocomplete="bday-month">`, //month select
            `\\s*<option\\s*value=""\\s*selected="">\\s*<\\/option>`, //month empty
            `\\s*<option\\s*value="1"\\s*>\\s*January\\s*<\\/option>`, //month 1
            `\\s*<option\\s*value="2"\\s*>\\s*February\\s*<\\/option>`, //month 2
            `\\s*<option\\s*value="3"\\s*>\\s*March\\s*<\\/option>`, //month 3
            `\\s*<option\\s*value="4"\\s*>\\s*April\\s*<\\/option>`, //month 4
            `\\s*<option\\s*value="5"\\s*>\\s*May\\s*<\\/option>`, //month 5
            `\\s*<option\\s*value="6"\\s*>\\s*June\\s*<\\/option>`, //month 6
            `\\s*<option\\s*value="7"\\s*>\\s*July\\s*<\\/option>`, //month 7
            `\\s*<option\\s*value="8"\\s*>\\s*August\\s*<\\/option>`, //month 8
            `\\s*<option\\s*value="9"\\s*>\\s*September\\s*<\\/option>`, //month 9
            `\\s*<option\\s*value="10"\\s*>\\s*October\\s*<\\/option>`, //month 10
            `\\s*<option\\s*value="11"\\s*>\\s*November\\s*<\\/option>`, //month 11
            `\\s*<option\\s*value="12"\\s*>\\s*December\\s*<\\/option>`, //month 12
            `\\s*<\\/select>`, //closing select
            `\\s*<\\/div>`, //closing div month
            // //-- Year --
            `\\s*<div\\s*class="govcy-d-block govcy-mr-3">`, //block year
            `\\s*<label\\s*class="govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2"\\s*for="govcy-test-87_year">\\s*Year\\s*<\\/label>`, //day label
            `\\s*<input\\s*id="govcy-test-87_year"\\s*name="govcy-test-87_year"\\s*class="govcy-text-input govcy-text-input-char_6\\s*govcy-text-input-error"\\s*maxlength="4"\\s*type="text"\\s*pattern="\\[0-9\\]\\*"\\s*inputmode="numeric"\\s*autocomplete="bday-year">`, //year input
            `\\s*</div>`, //closing div year
            `\\s*<\\/div>`, //closing flex wrap
            `\\s*<\\/div>`, //closing form control
            `\\s*<\\/fieldset>`, //closing fieldset
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
    it(checksNum+'88 `Date Input` with all options', async () => {
        // check for structure   
        let expectedRegex =  new RegExp ([            
            `\\s*<fieldset\\s*class="govcy-fieldset\\s*govcy-test-class"\\s*role="group"\\s*aria-describedby="govcy-test-88-hint\\s*govcy-test-88-error"\\s*lang="el">`,//external dl 
            `([\\s\\S]*?)`,
            `All options el`,
            `([\\s\\S]*?)`,
            `This is a hint el`,
            `([\\s\\S]*?)`,
            `Σφάλμα:`,
            `([\\s\\S]*?)`,
            `This is an error el`,
            `([\\s\\S]*?)`,
            `Μέρα`,
            `([\\s\\S]*?)`,
            `Μήνας`,
            `([\\s\\S]*?)`,
            `Ιανουάριος`,
            `([\\s\\S]*?)`,
            `Φεβρουάριος`,
            `([\\s\\S]*?)`,
            `Μάρτιος`,
            `([\\s\\S]*?)`,
            `Απρίλιος`,
            `([\\s\\S]*?)`,
            `Μάϊος`,
            `([\\s\\S]*?)`,
            `Ιούνιος`,
            `([\\s\\S]*?)`,
            `Ιούλιος`,
            `([\\s\\S]*?)`,
            `Αύγουστος`,
            `([\\s\\S]*?)`,
            `Σεπτέμβριος`,
            `([\\s\\S]*?)`,
            `Οκτώβριος`,
            `([\\s\\S]*?)`,
            `Νοέμβριος`,
            `([\\s\\S]*?)`,
            `Δεκέμβριος`,
            `([\\s\\S]*?)`,
            `Χρόνος`,
            `([\\s\\S]*?)`,
            `\\s*<\\/fieldset>` //closing fieldset
        ].join(''));
        // console.log(expectedRegex);
        expect(renderedHTML).to.match(expectedRegex);
    });
}

// Export the renderTest function
export { renderTest,renderLangTest, renderChecks };