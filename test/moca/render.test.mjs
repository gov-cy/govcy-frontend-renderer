import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
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

// Export the renderTest function
export { renderTest,renderLangTest };