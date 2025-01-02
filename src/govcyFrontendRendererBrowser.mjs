import nunjucks from 'nunjucks';
import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

/**
 * Used to render HTML based on UDS components. This is the browser version of the govcyFrontendRenderer
 * It works in a similar way but will not take into consideration `<head>` tags, `sections`, `blocks` and `extends` 
 * as they don't play well in the browser
 * 
 * @class
 */
class GovcyFrontendRendererBrowser {
    /**
     * Create a new instance of the govcyFrontendRenderer
     * 
     */
    constructor() {
        // Create a new Nunjucks environment
        this.env = new nunjucks.Environment();

        // Add custom filters to the Nunjucks environment
        this.env.addFilter('merge', (obj1, obj2) => {
            return Object.assign({}, obj1, obj2);
        });

        const md = new MarkdownIt();
        md.use(markdownItAttrs);

        this.env.addFilter('markdown', (input) => {
            if (!input) return ''; // Handle empty input
            const htmlOutput = md.render(input); // Convert Markdown to HTML
            return new nunjucks.runtime.SafeString(htmlOutput); // Mark as safe to prevent escaping
        });

        // Configure Nunjucks to use the precompiled templates
        nunjucks.configure({ autoescape: true, env: this.env });
    }

    /**
     * Returns the rendered html as string, based on the nunjucks templates
     * 
     * @param {string} input The input
     * @param {Object} data The data
     * @returns {string} Rendered  html as string
     * 
     * 
     * @example
     * const renderer = new govcyFrontendRenderer();
     * const input = `
     * {% from "govcyElement.njk" import govcyElement %}
     * {{ 
     *       govcyElement(
     *           "button",
     *           {
     *               text:{en:"Continue",el:"Συνέχεια"}, 
     *               variant:"success", 
     *               id:"success-button"
     *           }
     *       ) 
     *   }}
     * `;
     * const inputData = 
     *   {    
     *       "site" : {
     *           "lang" : "en"
     *       }
     *   };
     * const renderedHTML = renderer.renderFromString(input,inputData);
     * console.log(renderedHTML);
     */
    renderFromString(input, data = {}) {
        // Add a global nunjucks variable 'globalData' with the data passed 
        this.env.addGlobal('globalData', data);
        return this.env.renderString(input, data);
    }

    /**
     * Returns the rendered html as string, based on the json templates
     * 
     * @param {onject} input The JSON input
     * @param {Object} data The data
     * @returns {string} Rendered  html as string
     * 
     * 
     * @example
     * const renderer = new govcyFrontendRenderer();
     * const input = {
     *    elements: [
     *      {
     *           "element": "button",
     *           "params": {
     *               "text": {
     *                   "en": "Continue",
     *                   "el": "Συνέχεια"
     *               },
     *               "variant": "success",
     *               "id": "success-button"
     *           }
     *       }
     *    ]
     * };
     * 
     * const inputData = 
     *   {    
     *       "site" : {
     *           "lang" : "en"
     *       }
     *   };
     * const renderedHTML = renderer.renderFromJSON(input,inputData);
     * console.log(renderedHTML);
     */
    renderFromJSON(input, data = {}) {
        //build the template from the jsonInput
        let jsonTemplate = `{% from "govcyElement.njk" import govcyElement %} `;
        //for each element
        input.elements.forEach(element => {
            jsonTemplate += `{% call govcyElement('${element.element}',${JSON.stringify(element.params, null, 4)}) -%}{%- endcall  %}`
        })
        // Add a global nunjucks variable 'globalData' with the data passed 
        this.env.addGlobal('globalData', data);
        return this.env.renderString(jsonTemplate, data);
    }
}

export default GovcyFrontendRendererBrowser;