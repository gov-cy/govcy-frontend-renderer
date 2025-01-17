import nunjucks from 'nunjucks';
import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

/**
 * Used to render HTML based on UDS components
 */

export default class govcyFrontendRenderer {

    /**
     * Returns the rendered html as string, based on the nunjucks templates
     * 
     * @param {string} input The input
     * @param {Object} data The data
     * @returns {string} Rendered  html as string
     */
      renderFromString(input,data = {}) {
        // Render template
        const __dirname = dirname(fileURLToPath(import.meta.url));
        // console.log(data)

        // Construct the absolute path to the template directory
        const templateDirectory = join(__dirname,'../src/njk');

        // Create a new nunjucks environment
        const env =  new nunjucks.Environment(new nunjucks.FileSystemLoader(templateDirectory));
        // Add a global nunjucks variable 'globalData' with the data passed 
        env.addGlobal('globalData', data);
        // Add a custom 'merge' filter
        env.addFilter('merge', (obj1, obj2) => {
          return Object.assign({}, obj1, obj2);
        });
        // Initialize Markdown-it
        const md = new MarkdownIt();
        md.use(markdownItAttrs);
        // Add a custom Markdown filter
        env.addFilter('markdown', (input) => {
          if (!input) return ''; // Handle empty input
            const htmlOutput = md.render(input); // Convert Markdown to HTML
            return new nunjucks.runtime.SafeString(htmlOutput); // Mark as safe to prevent escaping
        });
        const renderedContent = env.renderString(input, data);
        //console.log(renderedContent);
        // Return the rendered template
        return renderedContent;
    }

     /**
     * Returns the rendered html as string, based on the json templates
     * 
     * @param {onject} input The JSON input
     * @param {Object} data The data
     * @returns {string} Rendered  html as string
     */
    renderFromJSON(input,data = {}) {
      //build the template from the jsonInput
      let jsonTemplate = `{% from "govcyElement.njk" import govcyElement %} `;
      if(data.pageData.layout) jsonTemplate += `{% extends "${data.pageData.layout}" %} `;
      //for each section
      input.sections.forEach(section => {
        jsonTemplate += `{% block ${section.name} -%}`
        //for each element
        section.elements.forEach(element => {
          jsonTemplate += `{% call govcyElement('${element.element}',${JSON.stringify(element.params, null, 4)}) -%}{%- endcall  %}`
        })
        jsonTemplate += `{%- endblock %}`
      });
      // console.log(jsonTemplate);
      return this.renderFromString(jsonTemplate,data);
    }
}