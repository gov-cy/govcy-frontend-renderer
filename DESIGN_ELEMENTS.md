Find in this document the elements that are supported by the package and how to include them in your templates.

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