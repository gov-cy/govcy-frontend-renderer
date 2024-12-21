In this document you can find the elements that are supported by the package and how to include them in your templates.

<details>
  <summary>backLink</summary>
  
## backLink

This element is used to add a back link as defined in the [UDS - backLink](https://gov-cy.github.io/govcy-design-system-docs/components/back_link/).

**Element name** : `backLink`

**Parameters** :
```js
/**
@param {string} lang The language used. Can be 'en','el'. Optional. 
@param {object} text The button text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}` 
@param {string} classes Additional classes to add to the button. Optional 
@param {string} href The URL to navigate when clicked. Optional, default is 'javascript:history.back()'
**/ 
```

**JSON Example** 
```json
{
    "element": "backLink",
    "params": {
        "text": {
            "en": "Back",
            "el": "Πίσω"
        }
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ 
    govcyElement(
        "backLink",
        {text:{en:"Back",el:"Πίσω"} }
    ) 
}}
```
</details>

<details>
  <summary>button</summary>
  
## button

This element is used to add a button as defined in the [UDS - button](https://gov-cy.github.io/govcy-design-system-docs/components/button/).

**Element name** : `button`

**Parameters** :
```js
/**
 @param {string} lang The language used. Can be 'en','el'. Optional. 
 @param {object} text The button text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}` 
 @param {string} variant The button variant. Optional, default is 'primary'. Can be 'primary', 'secondary', 'warning', 'success' 
 @param {string} id The id of the button. Optional 
 @param {string} type The button input type. Optional, default is button. Can be button or submit 
 @param {string} classes Additional classes to add to the button. Optional 
 @param {string} prototypeNavigate WARNING Only to be used for prototypes. the URL to navigate when clicked Optional
**/ 
```

**JSON Example** 
```json
{
    "element": "button",
    "params": {
        "text": {
            "en": "Continue",
            "el": "Συνέχεια"
        },
        "variant": "success",
        "id": "success-button"
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ 
    govcyElement(
        "button",
        {
            text:{en:"Continue",el:"Συνέχεια"}, 
            variant:"success", 
            id:"success-button"
        }
    ) 
}}
```
</details>

<details>
  <summary>checkboxes</summary>
  
## checkboxes

This element is used to add checkboxes as defined in the [UDS - checkbox](https://gov-cy.github.io/govcy-design-system-docs/components/checkbox/).

**Element name** : `checkboxes`

**Parameters** :
```js
/**
 @param {object} legend The legend text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`
 @param {string} id The id prefix for the options. Will escape text. 
 @param {string} name The name used in checkbox. Will escape text. 
 @param {string} hint The hint text. Optional. Will escape text 
 @param {boolean} isPageHeading Is the label also the page heading? Optional, default is false. Can be true,false 
 @param {string} classes Additional classes to add to the outer fieldset. Optional 
 @param {object} error If not empty there is an error message and displays the error variant. Optional, default is ''. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`
 @param {boolean} hideFormControlError If true, hides the form control error (red line on the left). Mostly used in conditional radio elements. Optional    
 @param {string} lang The language used. Can be 'en','el'. Optional.
 @param {array} items The array of items to turn onto checkbox 
    i.e. `[
            {
                value: "yes",
                text: {en:"Yes",el:"Ναι"}
            },
            {
                value: "no",
                text: {en:"No",el:"Όχι"}
            },
            {
                type: "or",
                altOrText: {en:"If not",el:"Αν όχι"},
                value: "maybe",
                hint: {en:"We want you to be absolutely sure",el:"Θέλουμε να είστε απολύτως σίγουροι"},
                text: {en:"Maybe",el:"Ίσως"}
            }
        ]`
        @param {string} item.type The item type. Can be empty,'or','and'. Optional, default is empty  
        @param {string} item.value The value of the checkbox.  
        @param {object} item.text The label of the checkbox. Example `{en:"Content",el:"Περιεχομένο"}`  
        @param {object} item.hint The hint of the checkbox. Example `{en:"Content",el:"Περιεχομένο"}`  
        @param {object} item.altAndText The and text. Optional, default is `{en:"And",el:"Και"}
        @param {object} item.altOrText The or text. Optional, default is `{en:"Or",el:"Ή"}
**/ 
```

**JSON Example** 
```json
{
    "element": "checkboxes",
    "params": {
        "id": "are-you-sure",
        "name": "are-you-sure",
        "legend": {
            "en": "Are you sure?",
            "el": "Είστε σίγουροι?"
        },
        "items": [
            {
                "value": "yes",
                "text": {
                    "en": "Yes",
                    "el": "Ναι"
                }
            },
            {
                "value": "no",
                "text": {
                    "en": "No",
                    "el": "Όχι"
                }
            }
        ]
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ 
    govcyElement(
        "checkboxes",
        {
            id:"are-you-sure"
            ,name:"are-you-sure"
            ,legend:{en:"Are you sure?",el:"Είστε σίγουροι?"}
            ,items:[
                {
                    value: "yes",
                    text: {en:"Yes",el:"Ναι"}
                },
                {
                    value: "no",
                    text: {en:"No",el:"Όχι"}
                }
            ]
        }
    ) 
}}
```
**Notes** :
In order to get the gov.cy styles, you need to add it inside a `form` element. 
</details>

<details>
  <summary>errorMessage</summary>
  
## errorMessage

This element is used to add an error message as defined in the [UDS - error message](https://gov-cy.github.io/govcy-design-system-docs/components/error_message/).

**Element name** : `errorMessage`

**Parameters** :
```js
/**
 @param {object} message The error message text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}` 
 @param {string} id The error message id. Will escape text 
 @param {string} lang The language used. Can be 'en','el'. Optional, default is 'el'.
 @param {string} classes Additional classes to add to the outer div. Optional 
**/ 
```

**JSON Example** 
```json
{
    "element": "errorMessage",
    "params": {
        "message": {
            "en": "Error message",
            "el": "Περιεχομένο"
        },
        "id": "input-error-message"
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ govcyElement(
    "errorMessage",
        {
            message:{en:"Error message",el:"Περιεχομένο"}, 
            id:"input-error-message"
        }
    ) 
}}
```
**Notes** :
- In order to get the gov.cy styles, you need to add it inside a `form` and a `formControl` element. 
- This component is called inside individual form elements such as `textInput`, `select`, `checkboxes` and so on.

</details>

<details>
  <summary>fieldset</summary>
  
## fieldset

This element is used to add a fieldset as defined in the [UDS - fieldset](https://gov-cy.github.io/govcy-design-system-docs/components/fieldset/).

**Element name** : `fieldset`

**Parameters** :
```js
/**
 @param {string} id The hint id. Will escape text. Optional
 @param {string} classes Additional classes to add to the outer div. Optional 
 @param {string} ariaDescribedby Ids of aria-describedby. To be used for hints and errors. Optional 
 @param {string} lang The language used. Can be 'en','el'. Optional.
 @param {array} elements If defined will be rendered elements inside the form. 
    i.e. `[
            {element:"button",params:{text:{en:"Button 1",el:"Κουμπί 1"},lang:"en",id:"govcy-test-23b"} },
            {element:"button",params:{text:{en:"Button 2",el:"Κουμπί 2"},variant:'secondary',lang:"en",id:"govcy-test-23c"} },
        ]`

**/ 
```

**JSON Example** 
```json
{
    "element": "fieldset",
    "params": {
        "id": "govcy-test-30",
        "elements": [
            {
                "element": "textInput",
                "params": {
                    "label": {
                        "en": "English label",
                        "el": "Ελληνικά label"
                    },
                    "id": "govcy-test-30a"
                }
            },
            {
                "element": "htmlElement",
                "params": {
                    "text": {
                        "en": "<p>English text</p>",
                        "el": "<p>Ελληνικά text</p>"
                    }
                }
            }
        ]
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ govcyElement(
    "fieldset",
        {
            id:"govcy-test-30"
            ,elements:[
                {
                    element: "textInput",
                    params: {
                        label:{en:"English label",el:"Ελληνικά label"}
                        ,id:"govcy-test-30a"
                    }
                }
                ,{
                    element: "htmlElement",
                    params: {
                        text:{en:"<p>English text</p>",el:"<p>Ελληνικά text</p>"}
                    }
                }
            ]
        }
    ) 
}}
```
**Notes** :
In order to get the gov.cy styles, you need to add it inside a `form` element. 
</details>

<details>
  <summary>fileInput</summary>
  
## fileInput

This element is used to add a fileInput as defined in the [UDS - file upload](https://gov-cy.github.io/govcy-design-system-docs/components/file/).

**Element name** : `fileInput`

**Parameters** :
```js
/**
 @param {object} label The label text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`  
 @param {string} id The input id. Will escape text 
 @param {string} name The input name. Will escape text. Optional
 @param {object} hint The hint text. Optional. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`   
 @param {boolean} isPageHeading Is the label also the page heading? Optional, default is false. Can be true,false 
 @param {string} classes Additional classes to add to the outer div. Optional 
 @param {object} error If not empty there is an error message and displays the error variant. Optional, default is ''. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`
 @param {boolean} hideFormControlError If true, hides the form control error (red line on the left). Mostly used in conditional radio elements. Optional     
 @param {string} lang The language used. Can be 'en','el'. Optional.
**/ 
```

**JSON Example** 
```json
{
    "element": "fileInput",
    "params": {
        "id": "govcy-test-46",
        "name": "govcy-test-46",
        "classes": "govcy-test-class",
        "label": {
            "en": "File input: English with all possible options",
            "el": "Ελληνικά label"
        },
        "hint": {
            "en": "English hint",
            "el": "Ελληνικά hint"
        },
        "error": {
            "en": "English error",
            "el": "Ελληνικά error"
        },
        "isPageHeading": true
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ govcyElement(
    "fileInput",
        {
            id:"govcy-test-46",
            name:"govcy-test-46",
            classes:"govcy-test-class",
            label:{en:"File input: English with all possible options",el:"Ελληνικά label"},
            hint:{en:"English hint",el:"Ελληνικά hint"},
            error:{en:"English error",el:"Ελληνικά error"},
            isPageHeading: true
        }
    ) 
}}
```
**Notes** :
In order to get the gov.cy styles, you need to add it inside a `form` element. 
</details>

<details>
  <summary>fileView</summary>
  
## fileView

This element is used to add a fileView as defined in the [UDS - file upload, previously uploaded file](https://gov-cy.github.io/govcy-design-system-docs/components/file/#previously-uploaded-file).

**Element name** : `fileView`

**Parameters** :
```js
/**
 @param {object} label The label text. Will escape text. `{en:"Content",el:"Περιεχομένο"}`
 @param {string} viewHref The view link's href. Will escape text 
 @param {string} deleteHref The delete link's href. Will escape text 
 @param {object} visuallyHiddenText The visuallyHiddenText text. Optional. Will escape text. `{en:"Content",el:"Περιεχομένο"}` 
 @param {object} hint The hint text. Optional. Will escape text. `{en:"Content",el:"Περιεχομένο"}`
 @param {string} classes Additional classes to add to the outer div. Optional
 @param {boolean} isPageHeading Is the label also the page heading? Optional, default is false. Can be true,false 
 @param {string} lang The language used. Can be 'en','el'. Optional.
**/ 
```

**JSON Example** 
```json
{
    "element": "fileView",
    "params": {
        "id": "govcy-test-50",
        "viewHref": "#view50",
        "deleteHref": "#delete50",
        "classes": "govcy-test-class",
        "isPageHeading": true,
        "label": {
            "en": "File view: English with all possible options",
            "el": "Ελληνικά label"
        },
        "hint": {
            "en": "English hint",
            "el": "Ελληνικά hint"
        },
        "visuallyHiddenText": {
            "en": "English visuallyHiddenText",
            "el": "Ελληνικά visuallyHiddenText"
        }
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ govcyElement(
    "fileView",
        {
            id:"govcy-test-50",
            viewHref:"#view50",
            deleteHref:"#delete50",
            classes:"govcy-test-class",
            isPageHeading: true,
            label:{en:"File view: English with all possible options",el:"Ελληνικά label"},
            hint:{en:"English hint",el:"Ελληνικά hint"},
            visuallyHiddenText:{en:"English visuallyHiddenText",el:"Ελληνικά visuallyHiddenText"}
        }
    ) 
}}
```
**Notes** :
In order to get the gov.cy styles, you need to add it inside a `form` element. 
</details>

<details>
  <summary>form</summary>
  
## form

This element is used to add a form as defined in the [UDS](https://gov-cy.github.io/govcy-design-system-docs/). There is no distinct definition for the form element in the design system, but it is used by all input elements.

**Element name** : `form`

**Parameters** :
```js
/**
 @param {string} action. Will escape text 
 @param {string} id The hint id. Will escape text 
 @param {string} classes Additional classes to add to the outer div. Optional 
 @param {array} elements If defined will be rendered elements inside the form. 
    i.e. `[
            {element:"button",params:{text:{en:"Button 1",el:"Κουμπί 1"},lang:"en",id:"govcy-test-23b"} },
            {element:"button",params:{text:{en:"Button 2",el:"Κουμπί 2"},variant:'secondary',lang:"en",id:"govcy-test-23c"} },
        ]`
**/ 
```

**JSON Example** 
```json
{
    "element": "form",
    "params": {
        "action": "test-action",
        "id": "govcy-test-14",
        "elements": [
            {
                "element": "formControl",
                "params": {
                    "id": "govcy-test-15",
                    "elements": [
                        {
                            "element": "htmlElement",
                            "params": {
                                "text": {
                                    "en": "Form with action"
                                }
                            }
                        }
                    ]
                }
            }
        ]
    }
}
```

**Nunjucks Example** 

It can be called as a `call`, with text inside the tag as follows:

```Nunjucks
{% call govcyElement("form",{ action:"test-action", id:"govcy-test-14"}) %}
    {% call govcyElement("formControl",{ id:"govcy-test-15"}) %}
        Form with action
    {% endcall %}
{% endcall %}
```

OR it can be called using the `param.elements` array as follows: 

```Nunjucks
{{ govcyElement(
    "form",
        {
            action:"test-action", 
            id:"govcy-test-14",
            "elements": [
                {
                    "element": "formControl",
                    "params": {
                        "id": "govcy-test-15",
                        "elements": [
                            {
                                "element": "htmlElement",
                                "params": {
                                    "text": {
                                        "en": "Form with action"
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ) 
}}
```

</details>

<details>
  <summary>formControl</summary>
  
## formControl

This element is used to add a formControl as defined in the [UDS](https://gov-cy.github.io/govcy-design-system-docs/). There is no distinct definition for the formControl element in the design system, but it is used by all input elements.

Individual input elements have the formControl element included, so there is no need to include it, unless you are building a custom component.

**Element name** : `formControl`

**Parameters** :
```js
/**
 @param {string} id The hint id. Will escape text. Optional
 @param {string} classes Additional classes to add to the outer div. Optional 
 @param {string} isError Is there a validation error and need to render the errror variant? Optional, default is false. Can be true,false 
 @param {string} lang The language used. Can be 'en','el'. Optional.
 @param {array} elements If defined will be rendered elements inside the form. 
    i.e. `[
            {element:"button",params:{text:{en:"Button 1",el:"Κουμπί 1"},lang:"en",id:"govcy-test-23b"} },
            {element:"button",params:{text:{en:"Button 2",el:"Κουμπί 2"},variant:'secondary',lang:"en",id:"govcy-test-23c"} },
        ]`
**/ 
```

**JSON Example** 
```json
{
    "element": "form",
    "params": {
        "action": "test-action",
        "id": "govcy-test-14",
        "elements": [
            {
                "element": "formControl",
                "params": {
                    "id": "govcy-test-15",
                    "elements": [
                        {
                            "element": "htmlElement",
                            "params": {
                                "text": {
                                    "en": "Form with action"
                                }
                            }
                        }
                    ]
                }
            }
        ]
    }
}
```

**Nunjucks Example** 

It can be called as a `call`, with text inside the tag as follows:

```Nunjucks
{% call govcyElement("form",{ action:"test-action", id:"govcy-test-14"}) %}
    {% call govcyElement("formControl",{ id:"govcy-test-15"}) %}
        Form with action
    {% endcall %}
{% endcall %}
```

OR it can be called using the `param.elements` array as follows: 

```Nunjucks
{{ govcyElement(
    "form",
        {
            action:"test-action", 
            id:"govcy-test-14",
            "elements": [
                {
                    "element": "formControl",
                    "params": {
                        "id": "govcy-test-15",
                        "elements": [
                            {
                                "element": "htmlElement",
                                "params": {
                                    "text": {
                                        "en": "Form with action"
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ) 
}}
```


**Notes** :
- In order to get the gov.cy styles, you need to add it inside a `form` element. 
- This component is called inside individual form elements such as `textInput`, `select`, `checkboxes` and so on.

</details>

<details>
  <summary>hint</summary>
  
## hint

This element is used to add a hint as defined in the [UDS](https://gov-cy.github.io/govcy-design-system-docs/). There is no distinct definition for the hint element in the design system, but it is used by all input elements.

Individual input elements have the hint element included, so there is no need to include it, unless you are building a custom component.

**Element name** : `hint`

**Parameters** :
```js
/**
 @param {string} lang The language used. Can be 'en','el'. Optional. 
 @param {object} hint The label text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}` 
 @param {string} id The hint id. Will escape text 
 @param {string} classes Additional classes to add to the outer div. Optional 
**/ 
```

**JSON Example** 
```json
{
    "element": "hint",
    "params": {
        "hint": {
            "en": "This is the hint element by itself ",
            "el": "Περιεχομένο"
        },
        "classes": "govcy-test-class",
        "id": "govcy-test-2"
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ govcyElement(
    "hint",
        {
            hint:{en:"This is the hint element by itself ",el:"Περιεχομένο"}, 
            classes:"govcy-test-class", 
            id:"govcy-test-2"
        }
    ) 
}}
```


**Notes** :
- This component is called inside individual form elements such as `textInput`, `select`, `checkboxes` and so on.

</details>

<details>
  <summary>htmlElement</summary>
  
## htmlElement

This element is used to add a htmlElement. There is no distinct definition for the htmlElement element in the design system. Use it when you want to render custom HTML.

<u>**CAUTION**</u>

Ths element will also allow you to add scripts and other potentially dangerous elements that could have negative consequences, so use with care.

**Element name** : `htmlElement`

**Parameters** :
```js
/**
 @param {string} lang The language used. Can be 'en','el'. Optional. 
 @param {object} text The text. Will not escape text, Example `{en:"Content",el:"Περιεχομένο"}` 
**/ 
```

**JSON Example** 
```json
{
    "element": "htmlElement",
    "params": {
        "text": {
            "en": "<div>This is a div</div>"
        }
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ govcyElement(
    "htmlElement",
        {
            "text": 
            {
                "en": "<div>This is a div</div>"
            }
        }
    ) 
}}
```

</details>

<details>
  <summary>label</summary>
  
## label

This element is used to add a label as defined in the [UDS](https://gov-cy.github.io/govcy-design-system-docs/patterns/labels_and_legend_headings/). There is no distinct definition for the label element in the design system, but it is used by all input elements.

Individual input elements have the label element included, so there is no need to include it, unless you are building a custom component.

**Element name** : `label`

**Parameters** :
```js
/**
 @param {string} lang The language used. Can be 'en','el'. Optional. 
 @param {object} label The label text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}` 
 @param {string} id The label id. Will escape text 
 @param {string} for The input id used in `for`. Will escape text 
 @param {boolean} isPrimary Is the label a primary? Optional, default is true. Can be true,false 
 @param {boolean} isPageHeading Is the label also the page heading? Optional, default is false. Can be true,false 
 @param {boolean} isHTML Is the label an HTML and can be reproduced without escaping? Optional, default is false. Can be true,false 
 @param {string} classes Additional classes to add to the outer div. Optional 
**/ 
```

**JSON Example** 
```json
{
    "element": "label",
    "params": {
        "label": {
            "en": "This is the label content",
            "el": "Περιεχομένο"
        },
        "for": "govcy-label-for-id",
        "id": "govcy-test-4",
        "isPrimary": true,
        "isPageHeading": true,
        "isHTML": true
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ govcyElement(
    "label",
    {
        "label": {
            "en": "This is the label content",
            "el": "Περιεχομένο"
        },
        "for": "govcy-label-for-id",
        "id": "govcy-test-4",
        "isPrimary": true,
        "isPageHeading": true,
        "isHTML": true
    }
    ) 
}}
```


**Notes** :
- This component is called inside individual form elements such as `textInput`, `select`, `checkboxes` and so on.

</details>

<details>
  <summary>legend</summary>
  
## legend

This element is used to add a legend as defined in the [UDS](https://gov-cy.github.io/govcy-design-system-docs/patterns/labels_and_legend_headings/). There is no distinct definition for the legend element in the design system, but it is used by all input elements.
Individual input elements have the legend element included, so there is no need to include it, unless you are building a custom component.

**Element name** : `legend`

**Parameters** :
```js
/**
 @param {string} lang The language used. Can be 'en','el'. Optional. 
 @param {object} legend The legend text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}` 
 @param {string} id The legend id. Will escape text 
 @param {boolean} isPageHeading Is the legend also the page heading? Optional, default is false. Can be true,false 
 @param {string} classes Additional classes to add to the outer div. Optional 
**/ 
```

**JSON Example** 
```json
{
    "element": "legend",
    "params": 
    {
        "legend": {
            "en": "This is the legend content",
            "el": "Περιεχομένο"
        },
        "id": "govcy-test-5",
        "isPageHeading": true,
        "classes": "govcy-test-class"
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ govcyElement(
    "legend",
    {
        "legend": {
            "en": "This is the legend content",
            "el": "Περιεχομένο"
        },
        "id": "govcy-test-5",
        "isPageHeading": true,
        "classes": "govcy-test-class"
    }
    ) 
}}
```


**Notes** :
- In order to get the gov.cy styles, you need to add it inside a `form` and `fieldset` element. 
- This component is called inside individual form elements such as `checkboxes`, `radios` and so 

</details>

<details>
  <summary>markdown</summary>
  
## markdown

This element is used to add a html using markdown. There is no distinct definition for the markdown element in the design system. Use it when you want to render custom HTML using markdown.

<u>**CAUTION**</u>

Ths element will also allow you to add scripts and other potentially dangerous elements that could have negative consequences, so use with care.

**Element name** : `markdown`

**Parameters** :
```js
/**
 @param {string} lang The language used. Can be 'en','el'. Optional. 
 @param {object} text The text. Will not escape text, Example `{en:"\n## Header 2\nThis is a **Markdown-it**",el:"## Τίτλος 2\nΑυτό είναι **Markdown-it**"}` 
**/ 
```

**JSON Example** 
```json
{
    "element": "markdown",
    "params": {
        "text": {
            "el": "## Τίτλος 2\nΑυτό είναι **Markdown-it**",
            "en":"\n## Header 2\nThis is a **Markdown-it**"
        }
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ govcyElement(
    "markdown",
        {
            "text": 
            {
                "el": "## Τίτλος 2\nΑυτό είναι **Markdown-it**",
                "en":"\n## Header 2\nThis is a **Markdown-it**"
            }
        }
    ) 
}}
```

</details>

<details>
  <summary>radios</summary>
  
## radios

This element is used to add radios as defined in the [UDS - radios](https://gov-cy.github.io/govcy-design-system-docs/components/radio/).

**Element name** : `radios`

**Parameters** :
```js
/**
 @param {object} legend The legend text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`
 @param {string} id The id prefix for the options. Will escape text. 
 @param {string} name The name used in radio. Will escape text. 
 @param {string} hint The hint text. Optional. Will escape text 
 @param {boolean} isPageHeading Is the label also the page heading? Optional, default is false. Can be true,false 
 @param {boolean} isInline Are the radios inline type? Optional, default is false. Can be true,false 
 @param {string} classes Additional classes to add to the outer fieldset. Optional  
 @param {object} error If not empty there is an error message and displays the error variant. Optional, default is ''. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`
 @param {boolean} hideFormControlError If true, hides the form control error (red line on the left). Mostly used in conditional radio elements. Optional    
 @param {string} lang The language used. Can be 'en','el'. Optional.
 @param {array} items The array of items to turn onto radio 
    i.e. `[
            {
                        value: "yes",
                        text: {en:"Yes",el:"Ναι"}
            },
            {
                value: "no",
                text: {en:"No",el:"Όχι"}
            },
            {
                type: "or",
                altOrText: {en:"If not",el:"Αν όχι"},
                value: "maybe",
                hint: {en:"We want you to be absolutely sure",el:"Θέλουμε να είστε απολύτως σίγουροι"},
                text: {en:"Maybe",el:"Ίσως"}
            }
        ]`
        @param {string} item.type The item type. Can be empty,'or','and'. Optional, default is empty  
        @param {string} item.value The value of the radio.  
        @param {object} item.text The label of the radio. Example `{en:"Content",el:"Περιεχομένο"}`  
        @param {object} item.hint The hint of the radio. Example `{en:"Content",el:"Περιεχομένο"}`  
        @param {object} item.altAndText The and text. Optional, default is `{en:"And",el:"Και"}
        @param {object} item.altOrText The or text. Optional, default is `{en:"Or",el:"Ή"}
        @param {array} item.conditionalElements The conditional elements for this radio item. Optional. This will be an array of elements.
        @param {boolean} item.conditionalHasErrors The conditional elements for this radio item has error. Optional.
        i.e. `[
            {element:"button",params:{text:{en:"Button 1",el:"Κουμπί 1"},lang:"en",id:"govcy-test-23b"} },
            {element:"button",params:{text:{en:"Button 2",el:"Κουμπί 2"},variant:'secondary',lang:"en",id:"govcy-test-23c"} }
        ]
**/ 
```

**JSON Example** 
```json
{
    "element": "radios",
    "params": {
        "id":"govcy-test-71"
        ,"name":"govcy-test-71"
        ,"lang":"el"
        ,"legend":{"en":"English legend","el":"Radios: Ελληνικά with all options possible"}
        ,"hint":{"en":"English hint","el":"Ελληνικά hint"}
        ,"error":{"en":"English error","el":"Ελληνικά error"}
        ,"isPageHeading": true
        ,"isInline": false
        ,"classes":"govcy-test-class"
        ,"items":[
            {
                "value": "yes",
                "text": {"en":"Yes","el":"Ναι"}
            },
            {
                "value": "no",
                "hint": {"en":"English hint for no","el":"Ελληνικά hint for no"},
                "text": {"en":"No","el":"Όχι"},
                "conditionalHasErrors": true,
                "conditionalElements": [
                    {
                        "element": "textInput",
                        "params": {
                            "label":{"en":"English","el":"Όνομα"}
                            ,"id":"govcy-test-71a"
                            ,"name":"govcy-test-71a"
                            ,"error":{"en":"English error","el":"Ελληνικά error"}
                        }
                    },
                    {
                        "element": "fileInput",
                        "params": {
                            "label":{"en":"English","el":"File"}
                            ,"id":"govcy-test-71a1"
                            ,"name":"govcy-test-71a1"
                            ,"error":{"en":"English error","el":"Ελληνικά error"}
                        }
                    }
                ]
            },
            {
                "type": "or",
                "altOrText": {"en":"If not","el":"Αν όχι"},
                "value": "maybe",
                "hint": {"en":"We want you to be absolutely sure","el":"Θέλουμε να είστε απολύτως σίγουροι"},
                "text": {"en":"Maybe","el":"Ίσως"},
                "conditionalElements": [
                    {
                        "element": "textElement",
                        "params": {
                            "text":{"en":"Conditional element","el":"Ελληνικά conditional element"}
                        }
                    },
                    {
                        "element": "textInput",
                        "params": {
                            "label":{"en":"English","el":"Email"}
                            ,"id":"govcy-test-71b"
                            ,"name":"govcy-test-71b"
                            ,"type": "email"
                        }
                    }
                ]
            }
        ]
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ 
    govcyElement(
        "radios",
        {
            "id":"govcy-test-71"
            ,"name":"govcy-test-71"
            ,"lang":"el"
            ,"legend":{"en":"English legend","el":"Radios: Ελληνικά with all options possible"}
            ,"hint":{"en":"English hint","el":"Ελληνικά hint"}
            ,"error":{"en":"English error","el":"Ελληνικά error"}
            ,"isPageHeading": true
            ,"isInline": false
            ,"classes":"govcy-test-class"
            ,"items":[
                {
                    "value": "yes",
                    "text": {"en":"Yes","el":"Ναι"}
                },
                {
                    "value": "no",
                    "hint": {"en":"English hint for no","el":"Ελληνικά hint for no"},
                    "text": {"en":"No","el":"Όχι"},
                    "conditionalHasErrors": true,
                    "conditionalElements": [
                        {
                            "element": "textInput",
                            "params": {
                                "label":{"en":"English","el":"Όνομα"}
                                ,"id":"govcy-test-71a"
                                ,"name":"govcy-test-71a"
                                ,"error":{"en":"English error","el":"Ελληνικά error"}
                            }
                        },
                        {
                            "element": "fileInput",
                            "params": {
                                "label":{"en":"English","el":"File"}
                                ,"id":"govcy-test-71a1"
                                ,"name":"govcy-test-71a1"
                                ,"error":{"en":"English error","el":"Ελληνικά error"}
                            }
                        }
                    ]
                },
                {
                    "type": "or",
                    "altOrText": {"en":"If not","el":"Αν όχι"},
                    "value": "maybe",
                    "hint": {"en":"We want you to be absolutely sure","el":"Θέλουμε να είστε απολύτως σίγουροι"},
                    "text": {"en":"Maybe","el":"Ίσως"},
                    "conditionalElements": [
                        {
                            "element": "textElement",
                            "params": {
                                "text":{"en":"Conditional element","el":"Ελληνικά conditional element"}
                            }
                        },
                        {
                            "element": "textInput",
                            "params": {
                                "label":{"en":"English","el":"Email"}
                                ,"id":"govcy-test-71b"
                                ,"name":"govcy-test-71b"
                                ,"type": "email"
                            }
                        }
                    ]
                }
            ]
        }
    ) 
}}
```
**Notes** :
In order to get the gov.cy styles, you need to add it inside a `form` element. 
</details>

<details>
  <summary>select</summary>
  
## select

This element is used to add select as defined in the [UDS - select](https://gov-cy.github.io/govcy-design-system-docs/components/select/).

**Element name** : `select`

**Parameters** :
```js
/**
 @param {object} label The label text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`  
 @param {string} id The id of the select. Will escape text. 
 @param {string} name The name of the select. Will escape text. 
 @param {array} items The array of items to turn onto select options. Array contains object with `text` and `value`. i.e. `{"text":{en:"Cyprus",el:"Κύπρος"},"value":"cy"}` 
 @param {object} hint The hint text. Optional. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`  
 @param {boolean} isPageHeading Is the label also the page heading? Optional, default is false. Can be true,false 
 @param {string} classes Additional classes to add to the outer `govcy-form-control` container. Optional 
 @param {object} error If not empty there is an error message and displays the error variant. Optional, default is ''. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`
 @param {boolean} hideFormControlError If true, hides the form control error (red line on the left). Mostly used in conditional radio elements. Optional    
 @param {string} lang The language used. Can be 'en','el'. Optional.
**/ 
```

**JSON Example** 
```json
{
    "element": "select",
    "params": {
        "label": {
            "en": "Sort by",
            "el": "Περιεχομένο"
        },
        "error": {
            "en": "Error message",
            "el": "Περιεχομένο"
        },
        "hint": {
            "en": "Hint message",
            "el": "Περιεχομένο"
        },
        "id": "govcy-test-19",
        "name": "govcy-test-19",
        "isPageHeading": true,
        "items": [
            {
                "value": "",
                "text": {
                    "en": "None",
                    "el": "Περιεχομένο"
                }
            },
            {
                "value": "published",
                "text": {
                    "en": "Recently published",
                    "el": "Περιεχομένο"
                }
            }
        ]
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ 
    govcyElement(
        "select",
        {
            "label": {
                "en": "Sort by",
                "el": "Περιεχομένο"
            },
            "error": {
                "en": "Error message",
                "el": "Περιεχομένο"
            },
            "hint": {
                "en": "Hint message",
                "el": "Περιεχομένο"
            },
            "id": "govcy-test-19",
            "name": "govcy-test-19",
            "isPageHeading": true,
            "items": [
                {
                    "value": "",
                    "text": {
                        "en": "None",
                        "el": "Περιεχομένο"
                    }
                },
                {
                    "value": "published",
                    "text": {
                        "en": "Recently published",
                        "el": "Περιεχομένο"
                    }
                }
            ]
        }
    ) 
}}
```
**Notes** :
In order to get the gov.cy styles, you need to add it inside a `form` element. 
</details>

<details>
  <summary>summaryList</summary>
  
## summaryList

This element is used to add summaryList as defined in the [UDS - summaryList](https://gov-cy.github.io/govcy-design-system-docs/components/summary_list/).

**Element name** : `summaryList`

**Parameters** :
```js
/**
 @param {string} id The id prefix for the options. Will escape text. 
 @param {string} classes Additional classes to add to the outer fieldset. Optional 
 @param {string} lang The language used. Can be 'en','el'. Optional.
 @param {array} items The array of items which contain elements
 @param {string} item.key The item key. Will escape text.
 @param {array} item.value The value. This will be an array of elements.
 i.e. `
[
    {
        elements: [
            {element:"htmlElement",params:{text:{en:"January",el:"Ιανουάριος"}} }
        ]
    },
    {
        elements: [
            {element:"htmlElement",params:{text:{en:"€85",el:"€85"}} }
        ],
        classes: "govcy-text-end",
    },
    {
        elements: [
            {element:"tag",params:{text:{en:"PAYED",el:"ΠΛΗΡΩΘΗΚΕ"}, classes:"govcy-tag-green"} }
        ]
    }
]
 `
 @param {array} item.actions The array of actions objects. 
 i.e. `
[
    {
        text:{en:"Change",el:"Αλλαγή"},
        href: "#",
        classes: "govcy-link",
        visuallyHiddenText: {en:"Date of birth",el:"Ημερομηνία γέννησης"}
    },
    {
        text:{en:"Remove",el:"Διαγραφή"},
        href: "#", 
        visuallyHiddenText: {en:"Date of birth",el:"Ημερομηνία γέννησης"}
    }
]
`
**/ 
```

### Simple summary list example

**JSON Example** 
```json
{
    "element": "summaryList",
    "params": {
        "id":"govcy-test-69",
        "items":[
            {
                "key":{"en":"Name","el":"el Name"},
                "value":
                [
                    {"element":"htmlElement","params":{"text":{"en":"Andreas Andreou","el":"EL Andreas Andreou"} } }
                ]
            },
            {
                "key":{"en":"Date of birth","el":"el Date of birth"},
                "value":
                [
                    {"element":"htmlElement","params":{"text":{"en":"10 March 1990<br>","el":"EL 10 March 1990<br>"} } }
                    ,{"element":"tag","params":{"text":{"en":"Adult","el":"el Adult"}, "classes":"govcy-tag-green"} }
                ],
                "actions":[
                    {
                        "text":{"en":"Change","el":"Αλλαγή"},
                        "href": "#",
                        "visuallyHiddenText": {"en":"Date of birth","el":"Ημερομηνία γέννησης"}
                    }
                ]
            },
            {
                "key":{"en":"Address","el":"el Address"},
                "value":
                [
                    {"element":"htmlElement","params":{"text":{"en":"50 Enton Street<br>Nicosia<br>2066","el":"50 Enton Street<br>Nicosia<br>2066"} } }
                ],
                "actions":[
                    {
                        "text":{"en":"Change","el":"Αλλαγή"},
                        "href": "#",
                        "visuallyHiddenText": {"en":"Address","el":"el Address"}
                    },
                    {
                        "text":{"en":"Remove","el":"Διαγραφή"},
                        "href": "#2", 
                        "visuallyHiddenText": {"en":"Address","el":"el Address"}
                    }
                ]
            },
            {
                "key":{"en":"Contact details","el":"el Contact details"},
                "actions":[
                    {
                        "text":{"en":"Enter contact","el":"el Enter contact"},
                        "href": "#1"
                    }
                ]
            }
        ]
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ 
    govcyElement(
        "summaryList",
        {
            "id":"govcy-test-69",
            "items":[
                {
                    "key":{"en":"Name","el":"el Name"},
                    "value":
                    [
                        {"element":"htmlElement","params":{"text":{"en":"Andreas Andreou","el":"EL Andreas Andreou"} } }
                    ]
                },
                {
                    "key":{"en":"Date of birth","el":"el Date of birth"},
                    "value":
                    [
                        {"element":"htmlElement","params":{"text":{"en":"10 March 1990<br>","el":"EL 10 March 1990<br>"} } }
                        ,{"element":"tag","params":{"text":{"en":"Adult","el":"el Adult"}, "classes":"govcy-tag-green"} }
                    ],
                    "actions":[
                        {
                            "text":{"en":"Change","el":"Αλλαγή"},
                            "href": "#",
                            "visuallyHiddenText": {"en":"Date of birth","el":"Ημερομηνία γέννησης"}
                        }
                    ]
                },
                {
                    "key":{"en":"Address","el":"el Address"},
                    "value":
                    [
                        {"element":"htmlElement","params":{"text":{"en":"50 Enton Street<br>Nicosia<br>2066","el":"50 Enton Street<br>Nicosia<br>2066"} } }
                    ],
                    "actions":[
                        {
                            "text":{"en":"Change","el":"Αλλαγή"},
                            "href": "#",
                            "visuallyHiddenText": {"en":"Address","el":"el Address"}
                        },
                        {
                            "text":{"en":"Remove","el":"Διαγραφή"},
                            "href": "#2", 
                            "visuallyHiddenText": {"en":"Address","el":"el Address"}
                        }
                    ]
                },
                {
                    "key":{"en":"Contact details","el":"el Contact details"},
                    "actions":[
                        {
                            "text":{"en":"Enter contact","el":"el Enter contact"},
                            "href": "#1"
                        }
                    ]
                }
            ]
        }
    ) 
}}
```

### Complex summary list
For a complex summary list, add `summaryList` element inside the `params.items.value`. The package will also count the `summaryList` elements inside the `params.items.value` array and render the appropriacte `govcy-visually-hidden` content.

**JSON Example** 
```json
{
    "element": "summaryList",
    "params": {
        "id":"govcy-test-75",
        "items":[
            {
                "key":{"en":"Name","el":"el Name"},
                "value":
                [
                    {"element":"htmlElement","params":{"text":{"en":"Andreas ","el":"EL Andreas"} } }
                    ,{"element":"htmlElement","params":{"text":{"en":"Andreou","el":"EL Andreou"} } }
                    
                ],
                "actions":[
                    {
                        "text":{"en":"Change","el":"Αλλαγή"},
                        "href": "#",
                        "visuallyHiddenText": {"en":"Name","el":"Όνομα"}
                    }
                ]
            },
            {
                "key":{"en":"Date of birth","el":"el Date of birth"},
                "value":
                [
                    {"element":"htmlElement","params":{"text":{"en":"10 March 1990","el":"EL 10 March 1990"} } }
                    ,{"element":"summaryList",
                    "params":
                        {
                            "items":[
                                {
                                    "key":{"en":"Day 1","el":"el Day"},
                                    "value":
                                    [
                                        {"element":"htmlElement","params":{"text":{"en":"10","el":"EL"} } }
                                    ]
                                },
                                {
                                    "key":{"en":"Month","el":"el Month"},
                                    "value":
                                    [
                                        {"element":"htmlElement","params":{"text":{"en":"March","el":"EL"} } }
                                    ]
                                },
                                {
                                    "key":{"en":"Year","el":"el Year"},
                                    "value":
                                    [
                                        {"element":"htmlElement","params":{"text":{"en":"1990","el":"EL"} } }
                                    ]
                                }
                            ]
                        } 
                    }
                ],
                "actions":[
                    {
                        "text":{"en":"Change","el":"Αλλαγή"},
                        "href": "#",
                        "visuallyHiddenText": {"en":"Date of birth","el":"Ημερομηνία γέννησης"}
                    }
                ]
            },
            {
                "key":{"en":"Address","el":"el Address"},
                "value":
                [
                    {"element":"summaryList",
                    "params":
                        {
                            "items":[
                                {
                                    "key":{"en":"Address line 1","el":"el Address line 1 EL"},
                                    "value":
                                    [
                                        {"element":"htmlElement","params":{"text":{"en":"1 Some Steet","el":"EL"} } }
                                    ]
                                },
                                {
                                    "key":{"en":"Town","el":"el Town"},
                                    "value":
                                    [
                                        {"element":"htmlElement","params":{"text":{"en":"Nicosia","el":"EL"} } }
                                    ]
                                },
                                {
                                    "key":{"en":"Post code","el":"el Post postcode"},
                                    "value":
                                    [
                                        {"element":"htmlElement","params":{"text":{"en":"2040","el":"EL"} } }
                                    ]
                                }
                            ]
                        } 
                    },
                    {"element":"summaryList",
                    "params":
                        {
                            "items":[
                                {
                                    "key":{"en":"Address line 1","el":"el Address line 1 EL"},
                                    "value":
                                    [
                                        {"element":"htmlElement","params":{"text":{"en":"2 Some Steet","el":"EL"} } }
                                    ]
                                },
                                {
                                    "key":{"en":"Town","el":"el Town"},
                                    "value":
                                    [
                                        {"element":"htmlElement","params":{"text":{"en":"Nicosia","el":"EL"} } }
                                    ]
                                },
                                {
                                    "key":{"en":"Post code","el":"el Post postcode"},
                                    "value":
                                    [
                                        {"element":"htmlElement","params":{"text":{"en":"2040","el":"EL"} } }
                                    ]
                                }
                            ]
                        } 
                    }
                ],
                "actions":[
                    {
                        "text":{"en":"Change","el":"Αλλαγή"},
                        "href": "#",
                        "visuallyHiddenText": {"en":"Address","el":"el Address"}
                    },
                    {
                        "text":{"en":"Remove","el":"Διαγραφή"},
                        "href": "#2", 
                        "visuallyHiddenText": {"en":"Address","el":"el Address"}
                    }
                ]
            }
        ]
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ 
    govcyElement(
        "summaryList",
        {
            "id":"govcy-test-75",
            "items":[
                {
                    "key":{"en":"Name","el":"el Name"},
                    "value":
                    [
                        {"element":"htmlElement","params":{"text":{"en":"Andreas ","el":"EL Andreas"} } }
                        ,{"element":"htmlElement","params":{"text":{"en":"Andreou","el":"EL Andreou"} } }
                        
                    ],
                    "actions":[
                        {
                            "text":{"en":"Change","el":"Αλλαγή"},
                            "href": "#",
                            "visuallyHiddenText": {"en":"Name","el":"Όνομα"}
                        }
                    ]
                },
                {
                    "key":{"en":"Date of birth","el":"el Date of birth"},
                    "value":
                    [
                        {"element":"htmlElement","params":{"text":{"en":"10 March 1990","el":"EL 10 March 1990"} } }
                        ,{"element":"summaryList",
                        "params":
                            {
                                "items":[
                                    {
                                        "key":{"en":"Day 1","el":"el Day"},
                                        "value":
                                        [
                                            {"element":"htmlElement","params":{"text":{"en":"10","el":"EL"} } }
                                        ]
                                    },
                                    {
                                        "key":{"en":"Month","el":"el Month"},
                                        "value":
                                        [
                                            {"element":"htmlElement","params":{"text":{"en":"March","el":"EL"} } }
                                        ]
                                    },
                                    {
                                        "key":{"en":"Year","el":"el Year"},
                                        "value":
                                        [
                                            {"element":"htmlElement","params":{"text":{"en":"1990","el":"EL"} } }
                                        ]
                                    }
                                ]
                            } 
                        }
                    ],
                    "actions":[
                        {
                            "text":{"en":"Change","el":"Αλλαγή"},
                            "href": "#",
                            "visuallyHiddenText": {"en":"Date of birth","el":"Ημερομηνία γέννησης"}
                        }
                    ]
                },
                {
                    "key":{"en":"Address","el":"el Address"},
                    "value":
                    [
                        {"element":"summaryList",
                        "params":
                            {
                                "items":[
                                    {
                                        "key":{"en":"Address line 1","el":"el Address line 1 EL"},
                                        "value":
                                        [
                                            {"element":"htmlElement","params":{"text":{"en":"1 Some Steet","el":"EL"} } }
                                        ]
                                    },
                                    {
                                        "key":{"en":"Town","el":"el Town"},
                                        "value":
                                        [
                                            {"element":"htmlElement","params":{"text":{"en":"Nicosia","el":"EL"} } }
                                        ]
                                    },
                                    {
                                        "key":{"en":"Post code","el":"el Post postcode"},
                                        "value":
                                        [
                                            {"element":"htmlElement","params":{"text":{"en":"2040","el":"EL"} } }
                                        ]
                                    }
                                ]
                            } 
                        },
                        {"element":"summaryList",
                        "params":
                            {
                                "items":[
                                    {
                                        "key":{"en":"Address line 1","el":"el Address line 1 EL"},
                                        "value":
                                        [
                                            {"element":"htmlElement","params":{"text":{"en":"2 Some Steet","el":"EL"} } }
                                        ]
                                    },
                                    {
                                        "key":{"en":"Town","el":"el Town"},
                                        "value":
                                        [
                                            {"element":"htmlElement","params":{"text":{"en":"Nicosia","el":"EL"} } }
                                        ]
                                    },
                                    {
                                        "key":{"en":"Post code","el":"el Post postcode"},
                                        "value":
                                        [
                                            {"element":"htmlElement","params":{"text":{"en":"2040","el":"EL"} } }
                                        ]
                                    }
                                ]
                            } 
                        }
                    ],
                    "actions":[
                        {
                            "text":{"en":"Change","el":"Αλλαγή"},
                            "href": "#",
                            "visuallyHiddenText": {"en":"Address","el":"el Address"}
                        },
                        {
                            "text":{"en":"Remove","el":"Διαγραφή"},
                            "href": "#2", 
                            "visuallyHiddenText": {"en":"Address","el":"el Address"}
                        }
                    ]
                }
            ]
        }
    ) 
}}
```

</details>

<details>
  <summary>table</summary>
  
## table

This element is used to add table as defined in the [UDS - table](https://gov-cy.github.io/govcy-design-system-docs/components/table/).

**Element name** : `table`

**Parameters** :
```js
/**
 @param {string} id The id prefix for the options. Will escape text. 
 @param {string} classes Additional classes to add to the outer fieldset. Optional 
 @param {string} lang The language used. Can be 'en','el'. Optional.
 @param {string} responsiveType The responsive type. Can be 'horisontal','vertical-no-headers', 'vertical-headers'. Optional.
 @param {boolean} firstCellIsHeader Indicates if the first cell is a header. Optional.
 @param {array} head The array of head
    i.e. `
[
    {
        text:{en:"Month",el:"Μηνας"}
    },
    {
        text:{en:"Amount",el:"Ποσό"},
        classes: "govcy-text-end",
        colspan : 1,
        rowspan : 1
    },
    {
        text:{en:"Status",el:"Κατάσταση"}
    }
]
`
 @param {array} rows The array of rows which contain elements
    i.e. `
[
    [
        {
            elements: [
                {element:"htmlElement",params:{text:{en:"January",el:"Ιανουάριος"}} }
            ]
        },
        {
            elements: [
                {element:"htmlElement",params:{text:{en:"€85",el:"€85"}} }
            ],
            classes: "govcy-text-end",
            colspan : 1,
            rowspan : 1
        },
        {
            elements: [
                {element:"tag",params:{text:{en:"PAYED",el:"ΠΛΗΡΩΘΗΚΕ"}, classes:"govcy-tag-green"} }
            ]
        }
    ],
    [
        {
            elements: [
                {element:"htmlElement",params:{text:{en:"February",el:"Φεβάριος"}} }
            ]
        },
        {
            elements: [
                {element:"htmlElement",params:{text:{en:"€75",el:"€75"}} }
            ],
            classes: "govcy-text-end"
        },
        {
            elements: [
                {element:"tag",params:{text:{en:"PAYED",el:"ΔΕΝ ΠΛΗΡΩΘΗΚΕ"}, classes:"govcy-tag-orange"} }
            ]
        }
    ]
]`
```

**JSON Example** 
```json
{
    "element": "table",
    "params": {
        "id": "govcy-test-63",
        "firstCellIsHeader": true,
        "responsiveType": "vertical-no-headers",
        "head": [
            {
                "text": {
                    "en": "Month",
                    "el": "Μηνας"
                }
            },
            {
                "text": {
                    "en": "Amount",
                    "el": "Ποσό"
                }
            }
        ],
        "rows": [
            [
                {
                    "elements": [
                        {
                            "element": "htmlElement",
                            "params": {
                                "text": {
                                    "en": "January",
                                    "el": "Ιανουάριος"
                                }
                            }
                        }
                    ]
                },
                {
                    "elements": [
                        {
                            "element": "htmlElement",
                            "params": {
                                "text": {
                                    "en": "€85",
                                    "el": "€85"
                                }
                            }
                        }
                    ]
                }
            ],
            [
                {
                    "elements": [
                        {
                            "element": "htmlElement",
                            "params": {
                                "text": {
                                    "en": "February",
                                    "el": "Φεβάριος"
                                }
                            }
                        }
                    ]
                },
                {
                    "elements": [
                        {
                            "element": "htmlElement",
                            "params": {
                                "text": {
                                    "en": "€75",
                                    "el": "€75"
                                }
                            }
                        }
                    ]
                }
            ]
        ]
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ 
    govcyElement(
        "table",
        {
            "id": "govcy-test-63",
            "firstCellIsHeader": true,
            "responsiveType": "vertical-no-headers",
            "head": [
                {
                    "text": {
                        "en": "Month",
                        "el": "Μηνας"
                    }
                },
                {
                    "text": {
                        "en": "Amount",
                        "el": "Ποσό"
                    }
                }
            ],
            "rows": [
                [
                    {
                        "elements": [
                            {
                                "element": "htmlElement",
                                "params": {
                                    "text": {
                                        "en": "January",
                                        "el": "Ιανουάριος"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "elements": [
                            {
                                "element": "htmlElement",
                                "params": {
                                    "text": {
                                        "en": "€85",
                                        "el": "€85"
                                    }
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        "elements": [
                            {
                                "element": "htmlElement",
                                "params": {
                                    "text": {
                                        "en": "February",
                                        "el": "Φεβάριος"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "elements": [
                            {
                                "element": "htmlElement",
                                "params": {
                                    "text": {
                                        "en": "€75",
                                        "el": "€75"
                                    }
                                }
                            }
                        ]
                    }
                ]
            ]
        }
    ) 
}}
```

</details>

<details>
  <summary>tag</summary>
  
## tag

This element is used to add tag as defined in the [UDS - tag](https://gov-cy.github.io/govcy-design-system-docs/components/tag/).

**Element name** : `tag`

**Parameters** :
```js
/**
 @param {string} lang The language used. Can be 'en','el'. Optional. 
 @param {object} text The button text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}` 
 @param {string} classes Additional classes to add to the button. Optional 
**/
```

**JSON Example** 
```json
{
    "element": "tag",
    "params": {
        "text": {
            "en": "PAYED",
            "el": "ΠΛΗΡΩΘΗΚΕ"
        },
        "classes": "govcy-tag-green"
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ 
    govcyElement(
        "tag",
        {
            "text": {
                "en": "PAYED",
                "el": "ΠΛΗΡΩΘΗΚΕ"
            },
            "classes": "govcy-tag-green"
        }
    ) 
}}
```

</details>

<details>
  <summary>textElement</summary>
  
## textElement

This element is used to add textElement as defined in the [UDS - textElement](https://gov-cy.github.io/govcy-design-system-docs/styles/typography/).

**Element name** : `textElement`

**Parameters** :
```js
/**
 @param {string} lang The language used. Can be 'en','el'. Optional. 
 @param {object} text The text. Will escape text, Example `{en:"Content",el:"Περιεχομένο"}` 
 @param {string} type The type of the element. Can be `p`,`h1`,`h2`,`h3`,`h4`. Default is `p`
 @param {string} id The elemen't id. Will escape text. Optional  
 @param {string} classes Additional classes to add to the outer div. Optional 
**/
```

**JSON Example** 
```json
{
    "element": "textElement",
    "params": {
        "text": {
            "en": "Default content ",
            "el": "Default Περιεχομένο"
        },
        "type": "h3",
        "lang": "el",
        "id": "govcy-test-24b"
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ 
    govcyElement(
        "textElement",
        {
            "text": {
                "en": "Default content ",
                "el": "Default Περιεχομένο"
            },
            "type": "h3",
            "lang": "el",
            "id": "govcy-test-24b"
        }
    ) 
}}
```

</details>

<details>
  <summary>textInput</summary>
  
## textInput

This element is used to add textInput as defined in the [UDS - textInput](https://gov-cy.github.io/govcy-design-system-docs/components/text_input/).

`textInput` can be used to render different variants of the text input using the `params.type` parameter. It can be:
- `text` (default)
- [numeric](https://gov-cy.github.io/govcy-design-system-docs/patterns/numeric_inputs/)
- [email](https://gov-cy.github.io/govcy-design-system-docs/patterns/email/)
- [name](https://gov-cy.github.io/govcy-design-system-docs/patterns/names/)
- [tel](https://gov-cy.github.io/govcy-design-system-docs/patterns/telephone/)

**Element name** : `textInput`

**Parameters** :
```js
/**
 @param {object} label The label text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`  
 @param {string} id The input id. Will escape text 
 @param {string} name The input name. Will escape text. Optional
 @param {object} hint The hint text. Optional. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`  
 @param {boolean} isPageHeading Is the label also the page heading? Optional, default is false. Can be true,false 
 @param {boolean} isSpellcheck true renders nothing, false renders spellcheck="false"? Optional, default is true. Can be true,false 
 @param {string} type The text input type. Optional, default is text. Can be text,numeric,email,name,tel 
 @param {string} autocomplete The autocomplete attribute. Optional. Can be email, name, ... 
 @param {string} classes Additional classes to add to the outer div. Optional 
 @param {object} error If not empty there is an error message and displays the error variant. Optional, default is ''. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`  
 @param {boolean} hideFormControlError If true, hides the form control error (red line on the left). Mostly used in conditional radio elements. Optional  
 @param {string} fixedWidth width If not empty will add the fixed width class variant. Optional, default is ''. Can be 50,35,20,10,5,4,3,2 
 @param {string} lang The language used. Can be 'en','el'. Optional.
**/
```

**JSON Example** 
```json
{
    "element": "textInput",
    "params": {
        "label": {
            "en": "English label",
            "el": "Text input with most options, type:tel, fixedWidth:50"
        },
        "id": "govcy-test-27c",
        "name": "govcy-test-27c",
        "hint": {
            "en": "Hint message",
            "el": "Περιεχομένο hint"
        },
        "type": "tel",
        "isPageHeading": false,
        "classes": "govcy-test-class",
        "error": {
            "en": "Error message",
            "el": "Περιεχομένο error"
        },
        "fixedWidth": "50",
        "lang": "el"
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ 
    govcyElement(
        "textInput",
        {
            "label": {
                "en": "English label",
                "el": "Text input with most options, type:tel, fixedWidth:50"
            },
            "id": "govcy-test-27c",
            "name": "govcy-test-27c",
            "hint": {
                "en": "Hint message",
                "el": "Περιεχομένο hint"
            },
            "type": "tel",
            "isPageHeading": false,
            "classes": "govcy-test-class",
            "error": {
                "en": "Error message",
                "el": "Περιεχομένο error"
            },
            "fixedWidth": "50",
            "lang": "el"
        }
    ) 
}}
```
**Notes** :
In order to get the gov.cy styles, you need to add it inside a `form` element. 

</details>

<details>
  <summary>textArea (and character count)</summary>
  
## textArea (and character count)

This element is used to add textArea as defined in the [UDS - textArea](https://gov-cy.github.io/govcy-design-system-docs/components/textarea/) and it's variant [UDS - charachet count](https://gov-cy.github.io/govcy-design-system-docs/components/character_count/).

To use convert the element into a character count component, add the `params.characterCount` parameter.

**Element name** : `textArea`

**Parameters** :
```js
/**
 @param {object} label The label text. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`  
 @param {string} id The input id. Will escape text 
 @param {string} name The input name. Will escape text. Optional
 @param {object} hint The hint text. Optional. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`  
 @param {boolean} isPageHeading Is the label also the page heading? Optional, default is false. Can be true,false 
 @param {boolean} isSpellcheck true renders nothing, false renders spellcheck="false"? Optional, default is true. Can be true,false 
 @param {string} autocomplete The autocomplete attribute. Optional. Can be email, name, ... 
 @param {string} classes Additional classes to add to the outer div. Optional 
 @param {object} error If not empty there is an error message and displays the error variant. Optional, default is ''. Will escape text. Example `{en:"Content",el:"Περιεχομένο"}`  
 @param {boolean} hideFormControlError If true, hides the form control error (red line on the left). Mostly used in conditional radio elements. Optional  
 @param {string} lang The language used. Can be 'en','el'. Optional.
 @param {string} rows The rows attribute of the textarea. Optional, default is '5' 
 @param {object} characterCount The character count object. Optional. i.e. {"type":"char","max":150}
 @param {string} characterCount.type The character count type. Optional, default is 'char'. Can be 'char' or 'word'
 @param {int} characterCount.max The character count maxchars or maxwords. Default is 100
**/
```

**JSON Example** 
```json
{
    "element": "textArea",
    "params": {
        "label": {
            "en":"Default Text area with most options, autocomplete, character count char",
            "el":"Ελληνικά label"
        }
        ,"id":"govcy-test-73"
        ,"name":"govcy-test-73"
        ,"rows": 7
        ,"hint": {
            "en":"English hint",
            "el":"Ελληνικά hint"
        }
        ,"error": {
            "en":"English error",
            "el":"Ελληνικά error"
        }
        ,"isPageHeading": true
        ,"isSpellcheck": true
        ,"autocomplete": "street-address"
        ,"classes": "govcy-test-class"
        ,"characterCount": {
            "type":"char"
            ,"max":150
        }
    }
}
```

**Nunjucks Example** 

```Nunjucks
{{ 
    govcyElement(
        "textArea",
        {
            "label": {
                "en":"Default Text area with most options, autocomplete, character count char",
                "el":"Ελληνικά label"
            }
            ,"id":"govcy-test-73"
            ,"name":"govcy-test-73"
            ,"rows": 7
            ,"hint": {
                "en":"English hint",
                "el":"Ελληνικά hint"
            }
            ,"error": {
                "en":"English error",
                "el":"Ελληνικά error"
            }
            ,"isPageHeading": true
            ,"isSpellcheck": true
            ,"autocomplete": "street-address"
            ,"classes": "govcy-test-class"
            ,"characterCount": {
                "type":"char"
                ,"max":150
            }
        }
    ) 
}}
```
**Notes** :
In order to get the gov.cy styles, you need to add it inside a `form` element. 

</details>
