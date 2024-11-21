[![npm (scoped)](https://img.shields.io/npm/v/@govcy-frontend-renderers)](https://www.npmjs.com/package/@govcy-frontend-renderers)
![License](https://img.shields.io/github/license/govcy-frontend-renderer)
[![Unit test](https://github.com/gov-cy/govcy-frontend-renderer/actions/workflows/unit-test.yml/badge.svg)](https://github.com/gov-cy/govcy-frontend-renderer/actions/workflows/unit-test.yml)
[![tag-and-publish-on-version-change](https://github.com/gov-cy/govcy-frontend-renderer/actions/workflows/tag-and-publish-on-version-change.yml/badge.svg)](https://github.com/gov-cy/govcy-frontend-renderer/actions/workflows/tag-and-publish-on-version-change.yml)

Use this package to render HTML for gov.cy elements, as they are defined in the [Unified Design System](https://gov-cy.github.io/govcy-design-system-docs/), using njk or json templates.

The rendered HTML should:
- Be as close of a representation as possible of the design elements as they are defined in the [Unified Design System](https://gov-cy.github.io/govcy-design-system-docs/)
- Include the gov.cy branding
- Use the [govcy design system](https://gov-cy.github.io/govcy-design-system-docs/) css classes and javascript functions
- Use HTML best practices and be valid HTML
- Use accessibility best practices
- Allow multiple languages
- Be tested

The project is not intended to be used for production purposes, but your welcome to try.

The project uses [nunjucks](https://mozilla.github.io/nunjucks/) templates to built the html.

The package currently works with the **version 3.0.0** of the design system.

## Features

The package can:
 can:

- Generate HTML programmatically from input nunjucks template, using the project's base template and macros.
- Generate HTML programmatically from input JSON data
- Generate complete pages as well as individual components

## Pre-requisites
- You need to have [Node.js](https://nodejs.org/en/) installed. The package has been tested on node version 20. 

## Install

First, install the package using npm:

```shell
npm install @gov-cy/govcy-frontend-renderer
```

## Usage
First, you need to import the package as shown in the example below.

```js
import { govcyFrontendRenderer } from '@gov-cy/govcy-frontend-renderer';
```

The package's main functions accept an input:
- a [[**JSON object**]] with the site and page meta data 
- and a [[**template**]] which can either be a `nunjucks` template or a `JSON` object, that define the design elements to be rendered.

Whether you are using a nunjucks template or a JSON object, the result is identical as they are both rendered using the same nunjucks macros.

The output returned is a string with the rendered HTML.

### Nunjucks template example
Use a [[string with a nunjucks template]] and the `renderFromString` function to render HTML from a nunjucks template. See the example below.

```js
import { govcyFrontendRenderer } from '@gov-cy/govcy-frontend-renderer';
const renderer = new govcyFrontendRenderer();

// Define the input data
const inputData = 
{    
    "site" : {
        "lang" : "en",
        "title" : {"en":"Service title", "el":"Τιτλός υπηρεσίας"}, 
        "headerTitle" : {"en":"Header title", "el":"Τιτλός επικεφαλιδας"},
        "description" : {"en":"Service description", "el":"Περιγραφή υπηρεσίας"},
        "url" : "https://gov.cy",
        "cdn" : {
            "dist" : "https://cdn.jsdelivr.net/gh/gov-cy/govcy-design-system@3.0.0/dist",
            "cssIntegrity" : "sha384-1zLHWOtnS0hOIz5mVEPZp0UH5gUE6eo0CQcCGA3sF2TyYhHyKOd3Ni8Iy/NjEASU",
            "jsIntegrity" : "sha384-zOuDuogVaaTveh/Ou2iYwCk14zFiSmMk7Ax8yRnXDtOJMyKZH5+ZNibNVwZSKtw+"
        }
    },
    "pageData": {
        "title": {"en": "Page title", "el": "Τιτλός σελιδας"},
        "layout": "layouts/govcyBase.njk",
        "mainLayout": "max-width"
    }
};

// Define the template (njk)
let inputString = 
`
{% if pageData.layout %} {% extends pageData.layout %} {% endif %}
{% from "govcyElement.njk" import govcyElement %}
{% from "utilities/govcyUtilities.njk" import govcyLocalizeContent %}
{% block main %}
    {% call govcyElement("form",
        { 
            elements:
            [
                {
                    element: "textInput",
                    params: 
                    {
                        label:{en:"What is your name?",el:"Ποιο είναι το όνομα σας;"}
                        ,id:"name"
                        ,name:"name"
                        ,isPageHeading: true
                        ,autocomplete:"tel"
                    }
                },
                {
                    element:  "button",
                    params: {
                        text:{en:"Continue",el:"Συνέχεια"}
                        , type:"submit"
                    }
                }
            ]
        }) %}{% endcall %}

{% endblock %}
`

// Render
let rtn = renderer.renderFromString(inputString, inputData)
console.log(rtn);

```
In the example above, a sting will be written in the console containing the rendered HTML of a complete page.

It is important to start your template string with the following:
- `{% if pageData.layout %} {% extends pageData.layout %} {% endif %}`: Will extend the gov.cy page template as defined in the `pageData.layout` property.
- `{% from "govcyElement.njk" import govcyElement %}`: Will import the `govcyElement` macro which is responsible for rendering all the [[design elements]].
- `{% from "utilities/govcyUtilities.njk" import govcyLocalizeContent %}`: (Optional) Will import the `govcyUtilities` macro which includes [[localization and other utilities]]. 

To render design elements, the packages uses the `govcyElement` macro. See more details in the [[design elements]] section.

### JSON template example
Use a [[JSON object as the template]] and the `renderFromJSON` function to render HTML from a nunjucks template. See the example below.

```js
import { govcyFrontendRenderer } from '@gov-cy/govcy-frontend-renderer';
const renderer = new govcyFrontendRenderer();

// Define the input data
const inputData = 
{    
    "site" : {
        "lang" : "en",
        "title" : {"en":"Service title", "el":"Τιτλός υπηρεσίας"}, 
        "headerTitle" : {"en":"Header title", "el":"Τιτλός επικεφαλιδας"},
        "description" : {"en":"Service description", "el":"Περιγραφή υπηρεσίας"},
        "url" : "https://gov.cy",
        "cdn" : {
            "dist" : "https://cdn.jsdelivr.net/gh/gov-cy/govcy-design-system@3.0.0/dist",
            "cssIntegrity" : "sha384-1zLHWOtnS0hOIz5mVEPZp0UH5gUE6eo0CQcCGA3sF2TyYhHyKOd3Ni8Iy/NjEASU",
            "jsIntegrity" : "sha384-zOuDuogVaaTveh/Ou2iYwCk14zFiSmMk7Ax8yRnXDtOJMyKZH5+ZNibNVwZSKtw+"
        }
    },
    "pageData": {
        "title": {"en": "Page title", "el": "Τιτλός σελιδας"},
        "layout": "layouts/govcyBase.njk",
        "mainLayout": "max-width"
    }
};

// Define the JSON template 
let inputJson =  
{
    "sections": [
        {
            "name": "main",
            "elements": [
                {
                    "element": "form",
                    "params": {
                        "elements": [
                            {
                                "element": "textInput",
                                "params": 
                                {
                                    "label":{"en":"What is your name?","el":"Ποιο είναι το όνομα σας;"}
                                    ,"id":"name"
                                    ,"name":"name"
                                    ,"isPageHeading": true
                                    ,"autocomplete":"tel"
                                }
                            },
                            {
                                "element": "button",
                                "params": 
                                {
                                    "text":{"en":"Continue","el":"Συνέχεια"}
                                    , "type":"submit"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]
}
;

// Render
let rtn = renderer.renderFromJSON(inputJson, inputData)
console.log(rtn);
```
In the example above, a sting will be written in the console containing the rendered HTML of a complete page.

More details in defining design elements see in the [[design elements]] section.

### Render individual components example

To render individual components, use the same functions as above, but leave the `pageData.layout` empty, as shown in the example below (the example uses a JSON template). Everything except the `site.lang`in the *siteData* and *pageData* will be ignored.

```js
import { govcyFrontendRenderer } from '@gov-cy/govcy-frontend-renderer';
const renderer = new govcyFrontendRenderer();

// Define the input data
const inputData = 
{    
    "site" : {
        "lang" : "en"
    },
    "pageData": {
        "layout": "",
    }
};

// Define the JSON template 
let inputJson =  
{
    "sections": [
        {
            "name": "main",
            "elements": [
                {
                    "element": "form",
                    "params": {
                        "elements": [
                            {
                                "element": "textInput",
                                "params": 
                                {
                                    "label":{"en":"What is your name?","el":"Ποιο είναι το όνομα σας;"}
                                    ,"id":"name"
                                    ,"name":"name"
                                    ,"isPageHeading": true
                                    ,"autocomplete":"tel"
                                }
                            },
                            {
                                "element": "button",
                                "params": 
                                {
                                    "text":{"en":"Continue","el":"Συνέχεια"}
                                    , "type":"submit"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]
}
;

// Render
let rtn = renderer.renderFromJSON(inputJson, inputData)
console.log(rtn);
```
All the `inputData` except the `site.lang` and the empty `pageData.layout` will be ignored.

### Site and page meta data explained
In the examples above an `inputData` object is defined and it is used to pass the site and page's meta data. They are used by the `layouts/govcyBase.njk` template to add the necessary HTML tags and attributes.

The `inputData` object has the following structure: 

- **site.lang**: the language of the site. It is used both in the `<html lang` attribute and to define the default language to be used by the individual design elements defined in the template. 
- **site.title**: the title of the site. It is used in the `<title>`, `<meta property="og:title"` and `<meta property="twitter:title"` tags of the head.
- **site.description**: the description of the site. It is used in the `<meta name="description"`, `<meta property="og:description"` and `<meta property="twitter:description"` tags of the head.
- **site.url**: the URL of the site. It is used in the `<meta property="og:url"` and `<meta property="twitter:url"` tags of the head.
- **site.cdn.dist**: the CDN of the site. It is used to define the URL of the CDN used for the CSS and JS files.
- **site.cdn.cssIntegrity**: the integrity of the CSS file. It is used to define the integrity of the CSS file.
- **site.cdn.jsIntegrity**: the integrity of the JS file. It is used to define the integrity of the JS file.
- **pageData.title**: the title of the page. It is used in the `<title>`, `<meta property="og:title"` and `<meta property="twitter:title"` tags of the head.
- **pageData.layout**: the layout of the page. It is used to define the layout (or page template) of the page, which is defined in the `layouts/govcyBase.njk` template.
- **pageData.mainLayout**: the main layout of the page. It can be either `two-thirds` or `max-width`.

### Input Template explained 
The input template can either be a JSON template or a nunjucks template string. It is used to define the design elements to be rendered.

#### Nunjucks input template
To use the pre-defined design elements, you need to import the `govcyElement` macro by including the`{% from "govcyElement.njk" import govcyElement %}` as shown in the coded examples.

```js
// Define the template (njk)
let inputString = 
`
{% if pageData.layout %} {% extends pageData.layout %} {% endif %}
{% from "govcyElement.njk" import govcyElement %}
{% from "utilities/govcyUtilities.njk" import govcyLocalizeContent %}
{% block main %}
    {% call govcyElement("form",
        { 
            elements:
            [
                {
                    element: "textInput",
                    params: 
                    {
                        label:{en:"What is your name?",el:"Ποιο είναι το όνομα σας;"}
                        ,id:"name"
                        ,name:"name"
                        ,isPageHeading: true
                        ,autocomplete:"tel"
                    }
                },
                {
                    element:  "button",
                    params: {
                        text:{en:"Continue",el:"Συνέχεια"}
                        , type:"submit"
                    }
                }
            ]
        }) %}{% endcall %}

{% endblock %}
`;
```

If your using the `pageData.layout`, you can render html in each of the following [[gov.cy page template]] blocks:
- **bodyStart**: the start of the body
- **header**: the header section (where the gov.cy logo and service name are rendered)
- **beforeMain**: the section before the main content
- **main**: the main content
- **footer**: the footer section
- **bodyEnd**: the end of the body

Use the `govcyElement` macro inside the blocks to render the design elements defined in the `govcyElement.njk` template. More details in defining design elements see in the [[design elements]] section.

#### JSON input template
When using a JSON input template, there is no need to import or extend anything.

```js
// Define the JSON template 
let inputJson =  
{
    "sections": [
        {
            "name": "main",
            "elements": [
                {
                    "element": "form",
                    "params": {
                        "elements": [
                            {
                                "element": "textInput",
                                "params": 
                                {
                                    "label":{"en":"What is your name?","el":"Ποιο είναι το όνομα σας;"}
                                    ,"id":"name"
                                    ,"name":"name"
                                    ,"isPageHeading": true
                                    ,"autocomplete":"tel"
                                }
                            },
                            {
                                "element": "button",
                                "params": 
                                {
                                    "text":{"en":"Continue","el":"Συνέχεια"}
                                    , "type":"submit"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]
}
;

```

If your using the `pageData.layout`, you can render html in each of the following [[gov.cy page template]] blocks, by using the `sections` array (in a similar way `blocks` is use ) :
- **bodyStart**: the start of the body
- **header**: the header section (where the gov.cy logo and service name are rendered)
- **beforeMain**: the section before the main content
- **main**: the main content
- **footer**: the footer section
- **bodyEnd**: the end of the body

Define your design elements for each `sections` under the `elements` array. These elements use the same `govcyElement` macro to render the design elements. Do that by defining the `element` and `params` objects. For example:

```json
{
    "element": "textInput",
    "params": 
    {
        "label":{"en":"What is your name?","el":"Ποιο είναι το όνομα σας;"}
    }
}
```

will use the `govcyElement` macro to render the `textInput` design element as follows:

```jinja
{{ 
    govcyElement({
    "textInput", 
    {
        "label":{"en":"What is your name?","el":"Ποιο είναι το όνομα σας;"}
    }
    }) 
}}
```

More details in defining design elements see in the [[design elements]] section.

#### Input template design elements 
TODO:

### Language handling in elements
TODO:

### Changing the design system's version
TODO:

Use https://www.srihash.org/


## License

The package is released under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you have any questions or feedback, please feel free to reach out to us at [dsf-admin@dits.dmrid.gov.cy](mailto:dsf-admin@dits.dmrid.gov.cy)