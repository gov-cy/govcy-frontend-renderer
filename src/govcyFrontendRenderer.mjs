import nunjucks from 'nunjucks';
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
     * @returns {string} Rendered  html as string
     */
      renderFromString(input,data = {}) {
        // Render template
        const __dirname = dirname(fileURLToPath(import.meta.url));
        // console.log(__dirname)

        // Construct the absolute path to the template directory
        const templateDirectory = join(__dirname, 'njk');

        // Create a new nunjucks environment
        const env =  new nunjucks.Environment(new nunjucks.FileSystemLoader(templateDirectory));
        // Add a global nunjucks variable 'globalData' with the data passed 
        env.addGlobal('globalData', data);

        const renderedContent = env.renderString(input, data);
        //console.log(renderedContent);
        // Return the rendered template
        return renderedContent;
    }

    renderFromJSON(input,data = {}) {
      //build the template from the jsonInput
      let jsonTemplate = `{% from "govcyElement.njk" import govcyElement %} `;
      if(data.layout) jsonTemplate += `{% extends "${data.layout}" %} `;
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