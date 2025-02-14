(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["utilities/govcyUtilities.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["content", "lang", "isHTML"], 
[], 
function (l_content, l_lang, l_isHTML, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("content", l_content);
frame.set("lang", l_lang);
frame.set("isHTML", l_isHTML);
var t_2 = "";var t_3;
t_3 = env.getFilter("default").call(context, env.getFilter("default").call(context, l_lang,runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "globalData")),"site")),"lang")),"el");
frame.set("inlang", t_3, true);
if(frame.topLevel) {
context.setVariable("inlang", t_3);
}
if(frame.topLevel) {
context.addExport("inlang", t_3);
}
var t_4;
t_4 = env.getFilter("default").call(context, l_isHTML,false);
frame.set("inIsHTML", t_4, true);
if(frame.topLevel) {
context.setVariable("inIsHTML", t_4);
}
if(frame.topLevel) {
context.addExport("inIsHTML", t_4);
}
if(runtime.contextOrFrameLookup(context, frame, "inIsHTML")) {
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((l_content),runtime.contextOrFrameLookup(context, frame, "inlang"))), env.opts.autoescape);
;
}
else {
t_2 += runtime.suppressValue(runtime.memberLookup((l_content),runtime.contextOrFrameLookup(context, frame, "inlang")), env.opts.autoescape);
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("govcyLocalizeContent");
context.setVariable("govcyLocalizeContent", macro_t_1);
var macro_t_5 = runtime.makeMacro(
["lang"], 
[], 
function (l_lang, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("lang", l_lang);
var t_6 = "";if(l_lang) {
t_6 += " lang=\"";
t_6 += runtime.suppressValue(l_lang, env.opts.autoescape);
t_6 += "\"";
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_6);
});
context.addExport("govcyLangAttribute");
context.setVariable("govcyLangAttribute", macro_t_5);
var macro_t_7 = runtime.makeMacro(
["elements", "lang"], 
[], 
function (l_elements, l_lang, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("elements", l_elements);
frame.set("lang", l_lang);
var t_8 = "";env.getTemplate("govcyElement.njk", false, "utilities/govcyUtilities.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "govcyElement")) {
var t_12 = t_9.govcyElement;
} else {
cb(new Error("cannot import 'govcyElement'")); return;
}
context.setVariable("govcyElement", t_12);
frame = frame.push();
var t_15 = l_elements;
if(t_15) {t_15 = runtime.fromIterator(t_15);
var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("element", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
if(l_lang && !runtime.memberLookup((runtime.memberLookup((t_16),"params")),"lang")) {
var t_17;
t_17 = env.getFilter("merge").call(context, runtime.memberLookup((t_16),"params"),{"lang": l_lang});
frame.set("params", t_17, true);
if(frame.topLevel) {
context.setVariable("params", t_17);
}
if(frame.topLevel) {
context.addExport("params", t_17);
}
;
}
else {
var t_18;
t_18 = runtime.memberLookup((t_16),"params");
frame.set("params", t_18, true);
if(frame.topLevel) {
context.setVariable("params", t_18);
}
if(frame.topLevel) {
context.addExport("params", t_18);
}
;
}
t_8 += runtime.suppressValue((lineno = 33, colno = 29, runtime.callWrap(t_12, "govcyElement", context, [runtime.memberLookup((t_16),"element"),runtime.contextOrFrameLookup(context, frame, "params"),runtime.makeKeywordArgs({"caller": (function (){var macro_t_19 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_20 = "";;
frame = frame.pop();
return new runtime.SafeString(t_20);
});
return macro_t_19;})()})])), env.opts.autoescape);
;
}
}
frame = frame.pop();
})});
frame = callerFrame;
return new runtime.SafeString(t_8);
});
context.addExport("govcyElementsFromArray");
context.setVariable("govcyElementsFromArray", macro_t_7);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/backLink.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/backLink.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
var t_8;
t_8 = (runtime.memberLookup((l_params),"text")?(lineno = 11, colno = 35, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"text"),runtime.memberLookup((l_params),"lang")])):(lineno = 11, colno = 103, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "Back","el": "Πίσω"},runtime.memberLookup((l_params),"lang")])));
frame.set("text", t_8, true);
if(frame.topLevel) {
context.setVariable("text", t_8);
}
if(frame.topLevel) {
context.addExport("text", t_8);
}
var t_9;
t_9 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"href"),"javascript:history.back()");
frame.set("href", t_9, true);
if(frame.topLevel) {
context.setVariable("href", t_9);
}
if(frame.topLevel) {
context.addExport("href", t_9);
}
t_2 += "<a class=\"govcy-back-link";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\" href=\"";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "href"), env.opts.autoescape);
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 13, colno = 120, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "text"), env.opts.autoescape);
t_2 += "</a>";
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("backLink");
context.setVariable("backLink", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/button.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/button.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
var t_8;
t_8 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"variant"),"primary");
frame.set("variant", t_8, true);
if(frame.topLevel) {
context.setVariable("variant", t_8);
}
if(frame.topLevel) {
context.addExport("variant", t_8);
}
var t_9;
t_9 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"type"),"button");
frame.set("type", t_9, true);
if(frame.topLevel) {
context.setVariable("type", t_9);
}
if(frame.topLevel) {
context.addExport("type", t_9);
}
t_2 += "<button type=\"";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "type"), env.opts.autoescape);
t_2 += "\"";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "  id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "class=\"govcy-btn-";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "variant"), env.opts.autoescape);
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
if(runtime.memberLookup((l_params),"prototypeNavigate")) {
t_2 += " onclick=\"location.href='";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"prototypeNavigate"), env.opts.autoescape);
t_2 += "'\"";
;
}
t_2 += runtime.suppressValue((lineno = 16, colno = 285, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">";
t_2 += runtime.suppressValue((lineno = 16, colno = 325, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</button>";
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("button");
context.setVariable("button", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/checkboxes.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params", "item", "index", "lang"], 
[], 
function (l_params, l_item, l_index, l_lang, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
frame.set("item", l_item);
frame.set("index", l_index);
frame.set("lang", l_lang);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/checkboxes.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
env.getTemplate("elements/hint.njk", false, "elements/checkboxes.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hint")) {
var t_11 = t_8.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_11);
env.getTemplate("elements/label.njk", false, "elements/checkboxes.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "label")) {
var t_15 = t_12.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_15);
if(runtime.memberLookup((l_item),"altOrText")) {
var t_16;
t_16 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 29, colno = 47, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"altOrText"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("orText", t_16, true);
if(frame.topLevel) {
context.setVariable("orText", t_16);
}
if(frame.topLevel) {
context.addExport("orText", t_16);
}
;
}
else {
var t_17;
t_17 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 31, colno = 47, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "Or","el": "Ή"},l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("orText", t_17, true);
if(frame.topLevel) {
context.setVariable("orText", t_17);
}
if(frame.topLevel) {
context.addExport("orText", t_17);
}
;
}
if(runtime.memberLookup((l_item),"altAndText")) {
var t_18;
t_18 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 35, colno = 48, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"altAndText"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("andText", t_18, true);
if(frame.topLevel) {
context.setVariable("andText", t_18);
}
if(frame.topLevel) {
context.addExport("andText", t_18);
}
;
}
else {
var t_19;
t_19 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 37, colno = 48, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "And","el": "Και"},l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("andText", t_19, true);
if(frame.topLevel) {
context.setVariable("andText", t_19);
}
if(frame.topLevel) {
context.addExport("andText", t_19);
}
;
}
var t_20;
t_20 = runtime.memberLookup((l_params),"id") + "" + "-option-" + "" + l_index;
frame.set("optionId", t_20, true);
if(frame.topLevel) {
context.setVariable("optionId", t_20);
}
if(frame.topLevel) {
context.addExport("optionId", t_20);
}
if(runtime.memberLookup((l_item),"hint")) {
var t_21;
t_21 = env.getFilter("join").call(context, [runtime.contextOrFrameLookup(context, frame, "optionId"),"-hint"]);
frame.set("hintId", t_21, true);
if(frame.topLevel) {
context.setVariable("hintId", t_21);
}
if(frame.topLevel) {
context.addExport("hintId", t_21);
}
;
}
else {
var t_22;
t_22 = "";
frame.set("hintId", t_22, true);
if(frame.topLevel) {
context.setVariable("hintId", t_22);
}
if(frame.topLevel) {
context.addExport("hintId", t_22);
}
;
}
if(runtime.memberLookup((l_item),"type") == "or") {
t_2 += "<p class=\"govcy-ml-3 govcy-mb-3\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "orText"), env.opts.autoescape);
t_2 += "</p>";
t_15 = (function() {
var output = "";
output += "\n        <span class=\"govcy-visually-hidden-error\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "orText"), env.opts.autoescape);
output += ", </span>";
output += runtime.suppressValue((lineno = 51, colno = 96, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("label", t_15, true);
if(frame.topLevel) {
context.setVariable("label", t_15);
}
if(frame.topLevel) {
context.addExport("label", t_15);
}
;
}
else {
if(runtime.memberLookup((l_item),"type") == "and") {
t_2 += "<p class=\"govcy-ml-3 govcy-mb-3\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "andText"), env.opts.autoescape);
t_2 += "</p>";
t_15 = (function() {
var output = "";
output += "\n        <span class=\"govcy-visually-hidden-error\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "andText"), env.opts.autoescape);
output += ", </span>";
output += runtime.suppressValue((lineno = 56, colno = 97, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("label", t_15, true);
if(frame.topLevel) {
context.setVariable("label", t_15);
}
if(frame.topLevel) {
context.addExport("label", t_15);
}
;
}
else {
t_15 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 59, colno = 45, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("label", t_15, true);
if(frame.topLevel) {
context.setVariable("label", t_15);
}
if(frame.topLevel) {
context.addExport("label", t_15);
}
;
}
;
}
t_2 += "<div class=\"govcy-checkbox\">\n    <input class=\"govcy-checkbox-input\" name=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_2 += "\" value=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_item),"value"), env.opts.autoescape);
t_2 += "\" type=\"checkbox\" id=\"";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "optionId"), env.opts.autoescape);
t_2 += "\" ";
if(runtime.memberLookup((l_item),"hint")) {
t_2 += " aria-describedby=\"";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hintId"), env.opts.autoescape);
t_2 += "\"";
;
}
t_2 += ">\n    <label class=\"govcy-label\" for=\"";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "optionId"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, t_15), env.opts.autoescape);
t_2 += "</label>";
t_2 += runtime.suppressValue((lineno = 66, colno = 16, runtime.callWrap(t_11, "hint", context, [{"hint": runtime.memberLookup((l_item),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": l_lang},runtime.makeKeywordArgs({"caller": (function (){var macro_t_23 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_24 = "";;
frame = frame.pop();
return new runtime.SafeString(t_24);
});
return macro_t_23;})()})])), env.opts.autoescape);
t_2 += "\n</div>";
})})})})})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.setVariable("_checkboxItem", macro_t_1);
output += "\n";
output += "\n";
var macro_t_25 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_26 = "";var t_27;
t_27 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isPageHeading"),false);
frame.set("isPageHeading", t_27, true);
if(frame.topLevel) {
context.setVariable("isPageHeading", t_27);
}
if(frame.topLevel) {
context.addExport("isPageHeading", t_27);
}
if(runtime.memberLookup((l_params),"legend") && runtime.memberLookup((l_params),"id") && runtime.memberLookup((l_params),"name")) {
env.getTemplate("elements/fieldset.njk", false, "elements/checkboxes.njk", false, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
t_28.getExported(function(t_30,t_28) {
if(t_30) { cb(t_30); return; }
if(Object.prototype.hasOwnProperty.call(t_28, "fieldset")) {
var t_31 = t_28.fieldset;
} else {
cb(new Error("cannot import 'fieldset'")); return;
}
context.setVariable("fieldset", t_31);
env.getTemplate("elements/hint.njk", false, "elements/checkboxes.njk", false, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
t_32.getExported(function(t_34,t_32) {
if(t_34) { cb(t_34); return; }
if(Object.prototype.hasOwnProperty.call(t_32, "hint")) {
var t_35 = t_32.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_35);
env.getTemplate("elements/legend.njk", false, "elements/checkboxes.njk", false, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
t_36.getExported(function(t_38,t_36) {
if(t_38) { cb(t_38); return; }
if(Object.prototype.hasOwnProperty.call(t_36, "legend")) {
var t_39 = t_36.legend;
} else {
cb(new Error("cannot import 'legend'")); return;
}
context.setVariable("legend", t_39);
env.getTemplate("elements/errorMessage.njk", false, "elements/checkboxes.njk", false, function(t_41,t_40) {
if(t_41) { cb(t_41); return; }
t_40.getExported(function(t_42,t_40) {
if(t_42) { cb(t_42); return; }
if(Object.prototype.hasOwnProperty.call(t_40, "errorMessage")) {
var t_43 = t_40.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_43);
env.getTemplate("elements/formControl.njk", false, "elements/checkboxes.njk", false, function(t_45,t_44) {
if(t_45) { cb(t_45); return; }
t_44.getExported(function(t_46,t_44) {
if(t_46) { cb(t_46); return; }
if(Object.prototype.hasOwnProperty.call(t_44, "formControl")) {
var t_47 = t_44.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_47);
if(runtime.memberLookup((l_params),"hint")) {
var t_48;
t_48 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-hint"]);
frame.set("hintId", t_48, true);
if(frame.topLevel) {
context.setVariable("hintId", t_48);
}
if(frame.topLevel) {
context.addExport("hintId", t_48);
}
;
}
else {
var t_49;
t_49 = "";
frame.set("hintId", t_49, true);
if(frame.topLevel) {
context.setVariable("hintId", t_49);
}
if(frame.topLevel) {
context.addExport("hintId", t_49);
}
;
}
if(runtime.memberLookup((l_params),"error")) {
var t_50;
t_50 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-error"]);
frame.set("errorId", t_50, true);
if(frame.topLevel) {
context.setVariable("errorId", t_50);
}
if(frame.topLevel) {
context.addExport("errorId", t_50);
}
;
}
else {
var t_51;
t_51 = "";
frame.set("errorId", t_51, true);
if(frame.topLevel) {
context.setVariable("errorId", t_51);
}
if(frame.topLevel) {
context.addExport("errorId", t_51);
}
;
}
if(runtime.memberLookup((l_params),"error") || runtime.memberLookup((l_params),"hint")) {
var t_52;
t_52 = runtime.contextOrFrameLookup(context, frame, "hintId") + "" + " " + "" + runtime.contextOrFrameLookup(context, frame, "errorId");
frame.set("ariaDescribedBy", t_52, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_52);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_52);
}
;
}
else {
var t_53;
t_53 = "";
frame.set("ariaDescribedBy", t_53, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_53);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_53);
}
;
}
t_26 += runtime.suppressValue((lineno = 127, colno = 20, runtime.callWrap(t_31, "fieldset", context, [{"ariaDescribedby": runtime.contextOrFrameLookup(context, frame, "ariaDescribedBy"),"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_54 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_55 = "";t_55 += "\n        ";
t_55 += runtime.suppressValue((lineno = 128, colno = 22, runtime.callWrap(t_39, "legend", context, [{"legend": runtime.memberLookup((l_params),"legend"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_56 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_57 = "";;
frame = frame.pop();
return new runtime.SafeString(t_57);
});
return macro_t_56;})()})])), env.opts.autoescape);
t_55 += "\n        ";
t_55 += runtime.suppressValue((lineno = 129, colno = 27, runtime.callWrap(t_47, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error"))},runtime.makeKeywordArgs({"caller": (function (){var macro_t_58 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_59 = "";t_59 += "\n            ";
t_59 += runtime.suppressValue((lineno = 130, colno = 24, runtime.callWrap(t_35, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_60 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_61 = "";;
frame = frame.pop();
return new runtime.SafeString(t_61);
});
return macro_t_60;})()})])), env.opts.autoescape);
t_59 += runtime.suppressValue((lineno = 132, colno = 32, runtime.callWrap(t_43, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_62 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_63 = "";;
frame = frame.pop();
return new runtime.SafeString(t_63);
});
return macro_t_62;})()})])), env.opts.autoescape);
t_59 += "\n            ";
frame = frame.push();
var t_66 = runtime.memberLookup((l_params),"items");
if(t_66) {t_66 = runtime.fromIterator(t_66);
var t_65 = t_66.length;
for(var t_64=0; t_64 < t_66.length; t_64++) {
var t_67 = t_66[t_64];
frame.set("item", t_67);
frame.set("loop.index", t_64 + 1);
frame.set("loop.index0", t_64);
frame.set("loop.revindex", t_65 - t_64);
frame.set("loop.revindex0", t_65 - t_64 - 1);
frame.set("loop.first", t_64 === 0);
frame.set("loop.last", t_64 === t_65 - 1);
frame.set("loop.length", t_65);
if(t_67) {
t_59 += runtime.suppressValue((lineno = 136, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_checkboxItem"), "_checkboxItem", context, [l_params,t_67,runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = frame.pop();
return new runtime.SafeString(t_59);
});
return macro_t_58;})()})])), env.opts.autoescape);
t_55 += "\n    ";
;
frame = frame.pop();
return new runtime.SafeString(t_55);
});
return macro_t_54;})()})])), env.opts.autoescape);
})})})})})})})})})});
}
;
frame = callerFrame;
return new runtime.SafeString(t_26);
});
context.addExport("checkboxes");
context.setVariable("checkboxes", macro_t_25);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/errorMessage.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/errorMessage.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
var t_8;
t_8 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 12, colno = 28, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "Error","el": "Σφάλμα"},runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("hiddenError", t_8, true);
if(frame.topLevel) {
context.setVariable("hiddenError", t_8);
}
if(frame.topLevel) {
context.addExport("hiddenError", t_8);
}
if(runtime.memberLookup((l_params),"message")) {
t_2 += "<p ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\"";
;
}
t_2 += " class=\"govcy-input-error-msg";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 15, colno = 158, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">\n    <span class=\"govcy-visually-hidden-error\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hiddenError"), env.opts.autoescape);
t_2 += ":</span>";
t_2 += runtime.suppressValue((lineno = 16, colno = 94, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"message"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\n</p>";
;
}
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("errorMessage");
context.setVariable("errorMessage", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/fieldset.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/fieldset.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
t_2 += "<fieldset ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "class=\"govcy-fieldset";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
if(runtime.memberLookup((l_params),"ariaDescribedby")) {
t_2 += " aria-describedby=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"ariaDescribedby"), env.opts.autoescape);
t_2 += "\"";
;
}
t_2 += runtime.suppressValue((lineno = 15, colno = 248, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">\n";
t_2 += runtime.suppressValue((lineno = 16, colno = 9, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
if(runtime.memberLookup((l_params),"elements")) {
env.getTemplate("govcyElement.njk", false, "elements/fieldset.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "govcyElement")) {
var t_11 = t_8.govcyElement;
} else {
cb(new Error("cannot import 'govcyElement'")); return;
}
context.setVariable("govcyElement", t_11);
frame = frame.push();
var t_14 = runtime.memberLookup((l_params),"elements");
if(t_14) {t_14 = runtime.fromIterator(t_14);
var t_13 = t_14.length;
for(var t_12=0; t_12 < t_14.length; t_12++) {
var t_15 = t_14[t_12];
frame.set("element", t_15);
frame.set("loop.index", t_12 + 1);
frame.set("loop.index0", t_12);
frame.set("loop.revindex", t_13 - t_12);
frame.set("loop.revindex0", t_13 - t_12 - 1);
frame.set("loop.first", t_12 === 0);
frame.set("loop.last", t_12 === t_13 - 1);
frame.set("loop.length", t_13);
t_2 += runtime.suppressValue((lineno = 22, colno = 33, runtime.callWrap(t_11, "govcyElement", context, [runtime.memberLookup((t_15),"element"),runtime.memberLookup((t_15),"params"),runtime.makeKeywordArgs({"caller": (function (){var macro_t_16 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_17 = "";;
frame = frame.pop();
return new runtime.SafeString(t_17);
});
return macro_t_16;})()})])), env.opts.autoescape);
;
}
}
frame = frame.pop();
})});
}
t_2 += "</fieldset>";
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("fieldset");
context.setVariable("fieldset", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/fileInput.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/fileInput.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
env.getTemplate("elements/formControl.njk", false, "elements/fileInput.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "formControl")) {
var t_11 = t_8.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_11);
env.getTemplate("elements/hint.njk", false, "elements/fileInput.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "hint")) {
var t_15 = t_12.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_15);
env.getTemplate("elements/label.njk", false, "elements/fileInput.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "label")) {
var t_19 = t_16.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_19);
env.getTemplate("elements/errorMessage.njk", false, "elements/fileInput.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "errorMessage")) {
var t_23 = t_20.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_23);
var t_24;
t_24 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isPageHeading"),false);
frame.set("isPageHeading", t_24, true);
if(frame.topLevel) {
context.setVariable("isPageHeading", t_24);
}
if(frame.topLevel) {
context.addExport("isPageHeading", t_24);
}
if(runtime.memberLookup((l_params),"label") && runtime.memberLookup((l_params),"id")) {
var t_25;
t_25 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-hint"]);
frame.set("hintId", t_25, true);
if(frame.topLevel) {
context.setVariable("hintId", t_25);
}
if(frame.topLevel) {
context.addExport("hintId", t_25);
}
var t_26;
t_26 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-label"]);
frame.set("labelId", t_26, true);
if(frame.topLevel) {
context.setVariable("labelId", t_26);
}
if(frame.topLevel) {
context.addExport("labelId", t_26);
}
var t_27;
t_27 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-error"]);
frame.set("errorId", t_27, true);
if(frame.topLevel) {
context.setVariable("errorId", t_27);
}
if(frame.topLevel) {
context.addExport("errorId", t_27);
}
t_2 += runtime.suppressValue((lineno = 27, colno = 23, runtime.callWrap(t_11, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error")),"classes": runtime.memberLookup((l_params),"classe"),"lang": runtime.memberLookup((l_params),"langs")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_28 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_29 = "";t_29 += runtime.suppressValue((lineno = 29, colno = 21, runtime.callWrap(t_19, "label", context, [{"label": runtime.memberLookup((l_params),"label"),"id": runtime.contextOrFrameLookup(context, frame, "labelId"),"for": runtime.memberLookup((l_params),"id"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_30 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_31 = "";;
frame = frame.pop();
return new runtime.SafeString(t_31);
});
return macro_t_30;})()})])), env.opts.autoescape);
t_29 += runtime.suppressValue((lineno = 31, colno = 20, runtime.callWrap(t_15, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_32 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_33 = "";;
frame = frame.pop();
return new runtime.SafeString(t_33);
});
return macro_t_32;})()})])), env.opts.autoescape);
t_29 += runtime.suppressValue((lineno = 33, colno = 28, runtime.callWrap(t_23, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_34 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_35 = "";;
frame = frame.pop();
return new runtime.SafeString(t_35);
});
return macro_t_34;})()})])), env.opts.autoescape);
t_29 += "<input id=\"";
t_29 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_29 += "\"";
if(runtime.memberLookup((l_params),"name")) {
t_29 += " name=\"";
t_29 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_29 += "\"";
;
}
t_29 += " type=\"file\" class=\"govcy-file-upload\"";
if(runtime.memberLookup((l_params),"hint") || runtime.memberLookup((l_params),"error")) {
t_29 += " aria-describedby=\"";
if(runtime.memberLookup((l_params),"hint")) {
t_29 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hintId"), env.opts.autoescape);
t_29 += " ";
;
}
if(runtime.memberLookup((l_params),"error")) {
t_29 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "errorId"), env.opts.autoescape);
t_29 += " ";
;
}
t_29 += "\"";
;
}
t_29 += ">\n    ";
;
frame = frame.pop();
return new runtime.SafeString(t_29);
});
return macro_t_28;})()})])), env.opts.autoescape);
;
}
})})})})})})})})})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("fileInput");
context.setVariable("fileInput", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/fileView.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/fileView.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
env.getTemplate("elements/formControl.njk", false, "elements/fileView.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "formControl")) {
var t_11 = t_8.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_11);
env.getTemplate("elements/hint.njk", false, "elements/fileView.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "hint")) {
var t_15 = t_12.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_15);
var t_16;
t_16 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 17, colno = 46, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "View","el": "Προβολή"},runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("viewLabel", t_16, true);
if(frame.topLevel) {
context.setVariable("viewLabel", t_16);
}
if(frame.topLevel) {
context.addExport("viewLabel", t_16);
}
var t_17;
t_17 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 18, colno = 48, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "Delete","el": "Διαγραφή"},runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("deleteLabel", t_17, true);
if(frame.topLevel) {
context.setVariable("deleteLabel", t_17);
}
if(frame.topLevel) {
context.addExport("deleteLabel", t_17);
}
if(runtime.memberLookup((l_params),"label") && runtime.memberLookup((l_params),"viewHref") && runtime.memberLookup((l_params),"deleteHref")) {
t_2 += "<div class=\"govcy-form\">\n    ";
t_2 += runtime.suppressValue((lineno = 22, colno = 23, runtime.callWrap(t_11, "formControl", context, [{"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_18 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_19 = "";if(runtime.memberLookup((l_params),"isPageHeading")) {
t_19 += "<h1>";
;
}
else {
t_19 += "<p class=\"govcy-label govcy-label-primary\">";
;
}
t_19 += runtime.suppressValue((lineno = 23, colno = 135, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"label"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
if(runtime.memberLookup((l_params),"isPageHeading")) {
t_19 += "</h1>";
;
}
else {
t_19 += "</p>";
;
}
t_19 += runtime.suppressValue((lineno = 25, colno = 20, runtime.callWrap(t_15, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_20 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_21 = "";;
frame = frame.pop();
return new runtime.SafeString(t_21);
});
return macro_t_20;})()})])), env.opts.autoescape);
t_19 += "<a href=\"";
t_19 += runtime.suppressValue(runtime.memberLookup((l_params),"viewHref"), env.opts.autoescape);
t_19 += "\">";
t_19 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "viewLabel"), env.opts.autoescape);
if(runtime.memberLookup((l_params),"visuallyHiddenText")) {
t_19 += "<span class=\"govcy-visually-hidden\">";
t_19 += runtime.suppressValue((lineno = 27, colno = 146, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"visuallyHiddenText"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_19 += "</span>";
;
}
t_19 += "</a>";
t_19 += "<a class=\"govcy-ml-3\" href=\"";
t_19 += runtime.suppressValue(runtime.memberLookup((l_params),"deleteHref"), env.opts.autoescape);
t_19 += "\">";
t_19 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "deleteLabel"), env.opts.autoescape);
if(runtime.memberLookup((l_params),"visuallyHiddenText")) {
t_19 += "<span class=\"govcy-visually-hidden\">";
t_19 += runtime.suppressValue((lineno = 29, colno = 169, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"visuallyHiddenText"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_19 += "</span>";
;
}
t_19 += "</a>\n    ";
;
frame = frame.pop();
return new runtime.SafeString(t_19);
});
return macro_t_18;})()})])), env.opts.autoescape);
t_2 += "\n    </div>";
;
}
})})})})})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("fileView");
context.setVariable("fileView", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/form.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";t_2 += "<form ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "action=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"action"), env.opts.autoescape);
t_2 += "\" class=\"govcy-form";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\" novalidate=\"\">\n    ";
t_2 += runtime.suppressValue((lineno = 13, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
if(runtime.memberLookup((l_params),"elements")) {
env.getTemplate("govcyElement.njk", false, "elements/form.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyElement")) {
var t_6 = t_3.govcyElement;
} else {
cb(new Error("cannot import 'govcyElement'")); return;
}
context.setVariable("govcyElement", t_6);
frame = frame.push();
var t_9 = runtime.memberLookup((l_params),"elements");
if(t_9) {t_9 = runtime.fromIterator(t_9);
var t_8 = t_9.length;
for(var t_7=0; t_7 < t_9.length; t_7++) {
var t_10 = t_9[t_7];
frame.set("element", t_10);
frame.set("loop.index", t_7 + 1);
frame.set("loop.index0", t_7);
frame.set("loop.revindex", t_8 - t_7);
frame.set("loop.revindex0", t_8 - t_7 - 1);
frame.set("loop.first", t_7 === 0);
frame.set("loop.last", t_7 === t_8 - 1);
frame.set("loop.length", t_8);
t_2 += runtime.suppressValue((lineno = 19, colno = 33, runtime.callWrap(t_6, "govcyElement", context, [runtime.memberLookup((t_10),"element"),runtime.memberLookup((t_10),"params"),runtime.makeKeywordArgs({"caller": (function (){var macro_t_11 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_12 = "";;
frame = frame.pop();
return new runtime.SafeString(t_12);
});
return macro_t_11;})()})])), env.opts.autoescape);
;
}
}
frame = frame.pop();
})});
}
t_2 += "</form>";
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("form");
context.setVariable("form", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/formControl.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/formControl.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
var t_8;
t_8 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isError"),false);
frame.set("isError", t_8, true);
if(frame.topLevel) {
context.setVariable("isError", t_8);
}
if(frame.topLevel) {
context.addExport("isError", t_8);
}
t_2 += "<div ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "class=\"govcy-form-control";
if(runtime.contextOrFrameLookup(context, frame, "isError")) {
t_2 += " govcy-form-control-error";
;
}
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 17, colno = 209, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">\n    ";
t_2 += runtime.suppressValue((lineno = 18, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
if(runtime.memberLookup((l_params),"elements")) {
env.getTemplate("govcyElement.njk", false, "elements/formControl.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "govcyElement")) {
var t_12 = t_9.govcyElement;
} else {
cb(new Error("cannot import 'govcyElement'")); return;
}
context.setVariable("govcyElement", t_12);
frame = frame.push();
var t_15 = runtime.memberLookup((l_params),"elements");
if(t_15) {t_15 = runtime.fromIterator(t_15);
var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("element", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
t_2 += runtime.suppressValue((lineno = 24, colno = 33, runtime.callWrap(t_12, "govcyElement", context, [runtime.memberLookup((t_16),"element"),runtime.memberLookup((t_16),"params"),runtime.makeKeywordArgs({"caller": (function (){var macro_t_17 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_18 = "";;
frame = frame.pop();
return new runtime.SafeString(t_18);
});
return macro_t_17;})()})])), env.opts.autoescape);
;
}
}
frame = frame.pop();
})});
}
t_2 += "</div>";
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("formControl");
context.setVariable("formControl", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/hint.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/hint.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
if(runtime.memberLookup((l_params),"hint")) {
t_2 += "<span ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\"";
;
}
t_2 += " class=\"govcy-hint";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 10, colno = 170, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">";
t_2 += runtime.suppressValue((lineno = 10, colno = 210, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"hint"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</span>";
;
}
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("hint");
context.setVariable("hint", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/htmlElement.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";if(runtime.memberLookup((l_params),"text")) {
env.getTemplate("utilities/govcyUtilities.njk", false, "elements/htmlElement.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
t_2 += runtime.suppressValue((lineno = 10, colno = 27, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"text"),runtime.memberLookup((l_params),"lang"),true])), env.opts.autoescape);
})});
}
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("htmlElement");
context.setVariable("htmlElement", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/label.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/label.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
var t_8;
t_8 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isPrimary"),true);
frame.set("isPrimary", t_8, true);
if(frame.topLevel) {
context.setVariable("isPrimary", t_8);
}
if(frame.topLevel) {
context.addExport("isPrimary", t_8);
}
var t_9;
t_9 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isHTML"),false);
frame.set("isHTML", t_9, true);
if(frame.topLevel) {
context.setVariable("isHTML", t_9);
}
if(frame.topLevel) {
context.addExport("isHTML", t_9);
}
if(runtime.memberLookup((l_params),"label") && runtime.memberLookup((l_params),"for")) {
if(runtime.memberLookup((l_params),"isPageHeading")) {
t_2 += "<h1>";
;
}
t_2 += "<label ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "class=\"govcy-label";
if(runtime.contextOrFrameLookup(context, frame, "isPrimary") == true) {
t_2 += " govcy-label-primary";
;
}
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\" for=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"for"), env.opts.autoescape);
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 20, colno = 236, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">";
t_2 += runtime.suppressValue((lineno = 20, colno = 276, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"label"),runtime.memberLookup((l_params),"lang"),runtime.contextOrFrameLookup(context, frame, "isHTML")])), env.opts.autoescape);
t_2 += "</label>";
if(runtime.memberLookup((l_params),"isPageHeading")) {
t_2 += "</h1>";
;
}
;
}
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("label");
context.setVariable("label", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/legend.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/legend.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
var t_8;
t_8 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isPageHeading"),false);
frame.set("isPageHeading", t_8, true);
if(frame.topLevel) {
context.setVariable("isPageHeading", t_8);
}
if(frame.topLevel) {
context.addExport("isPageHeading", t_8);
}
if(runtime.memberLookup((l_params),"legend")) {
if(runtime.contextOrFrameLookup(context, frame, "isPageHeading")) {
t_2 += "<legend ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "class=\"govcy-legend";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 16, colno = 162, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "><h1>";
t_2 += runtime.suppressValue((lineno = 16, colno = 206, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"legend"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</h1></legend>";
;
}
else {
t_2 += "<legend ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "class=\"govcy-legend";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 18, colno = 162, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">";
t_2 += runtime.suppressValue((lineno = 18, colno = 202, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"legend"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</legend>";
;
}
;
}
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("legend");
context.setVariable("legend", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/markdown.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";if(runtime.memberLookup((l_params),"text")) {
env.getTemplate("utilities/govcyUtilities.njk", false, "elements/markdown.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
t_2 += runtime.suppressValue(env.getFilter("markdown").call(context, ("" + (lineno = 10, colno = 33, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"text"),runtime.memberLookup((l_params),"lang"),true])))), env.opts.autoescape);
})});
}
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("markdown");
context.setVariable("markdown", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/panel.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\r\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/panel.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
var t_8;
t_8 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"background"),"govcy-bg-success");
frame.set("background", t_8, true);
if(frame.topLevel) {
context.setVariable("background", t_8);
}
if(frame.topLevel) {
context.addExport("background", t_8);
}
t_2 += "<div ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "class=\"govcy-alert-completed-notification";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 20, colno = 173, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">\r\n    <div class=\"govcy-alert-completed-notification-body ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "background"), env.opts.autoescape);
t_2 += "\">";
if(runtime.memberLookup((l_params),"header")) {
t_2 += "<h1>";
t_2 += runtime.suppressValue((lineno = 22, colno = 59, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"header"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</h1>";
;
}
if(runtime.memberLookup((l_params),"body")) {
t_2 += "<p>";
t_2 += runtime.suppressValue((lineno = 23, colno = 56, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"body"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</p>";
;
}
if(runtime.memberLookup((l_params),"referenceNumber")) {
t_2 += "<p class=\"govcy-fw-bold\">";
t_2 += runtime.suppressValue((lineno = 24, colno = 89, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"referenceNumber"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</p>";
;
}
env.getTemplate("govcyElement.njk", false, "elements/panel.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "govcyElement")) {
var t_12 = t_9.govcyElement;
} else {
cb(new Error("cannot import 'govcyElement'")); return;
}
context.setVariable("govcyElement", t_12);
frame = frame.push();
var t_15 = runtime.memberLookup((l_params),"elements");
if(t_15) {t_15 = runtime.fromIterator(t_15);
var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("element", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
if(runtime.memberLookup((l_params),"lang") && !runtime.memberLookup((runtime.memberLookup((t_16),"params")),"lang")) {
var t_17;
t_17 = env.getFilter("merge").call(context, runtime.memberLookup((t_16),"params"),{"lang": runtime.memberLookup((l_params),"lang")});
frame.set("paramsIn", t_17, true);
if(frame.topLevel) {
context.setVariable("paramsIn", t_17);
}
if(frame.topLevel) {
context.addExport("paramsIn", t_17);
}
;
}
else {
var t_18;
t_18 = runtime.memberLookup((t_16),"params");
frame.set("paramsIn", t_18, true);
if(frame.topLevel) {
context.setVariable("paramsIn", t_18);
}
if(frame.topLevel) {
context.addExport("paramsIn", t_18);
}
;
}
t_2 += runtime.suppressValue((lineno = 35, colno = 33, runtime.callWrap(t_12, "govcyElement", context, [runtime.memberLookup((t_16),"element"),runtime.contextOrFrameLookup(context, frame, "paramsIn"),runtime.makeKeywordArgs({"caller": (function (){var macro_t_19 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_20 = "";;
frame = frame.pop();
return new runtime.SafeString(t_20);
});
return macro_t_19;})()})])), env.opts.autoescape);
;
}
}
frame = frame.pop();
t_2 += "</div>   \r\n</div>";
})})})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("panel");
context.setVariable("panel", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/radios.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["params", "item", "isInline", "index", "lang"], 
[], 
function (l_params, l_item, l_isInline, l_index, l_lang, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
frame.set("item", l_item);
frame.set("isInline", l_isInline);
frame.set("index", l_index);
frame.set("lang", l_lang);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/radios.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyElementsFromArray")) {
var t_8 = t_3.govcyElementsFromArray;
} else {
cb(new Error("cannot import 'govcyElementsFromArray'")); return;
}
context.setVariable("govcyElementsFromArray", t_8);
env.getTemplate("elements/hint.njk", false, "elements/radios.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "hint")) {
var t_12 = t_9.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_12);
env.getTemplate("elements/label.njk", false, "elements/radios.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
t_13.getExported(function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
if(Object.prototype.hasOwnProperty.call(t_13, "label")) {
var t_16 = t_13.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_16);
l_isInline = env.getFilter("default").call(context, l_isInline,false);
frame.set("isInline", l_isInline, true);
if(frame.topLevel) {
context.setVariable("isInline", l_isInline);
}
if(frame.topLevel) {
context.addExport("isInline", l_isInline);
}
if(runtime.memberLookup((l_item),"altOrText")) {
var t_17;
t_17 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 38, colno = 47, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"altOrText"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("orText", t_17, true);
if(frame.topLevel) {
context.setVariable("orText", t_17);
}
if(frame.topLevel) {
context.addExport("orText", t_17);
}
;
}
else {
var t_18;
t_18 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 40, colno = 47, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "Or","el": "Ή"},l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("orText", t_18, true);
if(frame.topLevel) {
context.setVariable("orText", t_18);
}
if(frame.topLevel) {
context.addExport("orText", t_18);
}
;
}
if(runtime.memberLookup((l_item),"altAndText")) {
var t_19;
t_19 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 44, colno = 48, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"altAndText"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("andText", t_19, true);
if(frame.topLevel) {
context.setVariable("andText", t_19);
}
if(frame.topLevel) {
context.addExport("andText", t_19);
}
;
}
else {
var t_20;
t_20 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 46, colno = 48, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "And","el": "Και"},l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("andText", t_20, true);
if(frame.topLevel) {
context.setVariable("andText", t_20);
}
if(frame.topLevel) {
context.addExport("andText", t_20);
}
;
}
var t_21;
t_21 = runtime.memberLookup((l_params),"id") + "" + "-option-" + "" + l_index;
frame.set("optionId", t_21, true);
if(frame.topLevel) {
context.setVariable("optionId", t_21);
}
if(frame.topLevel) {
context.addExport("optionId", t_21);
}
if(runtime.memberLookup((l_item),"hint")) {
var t_22;
t_22 = env.getFilter("join").call(context, [runtime.contextOrFrameLookup(context, frame, "optionId"),"-hint"]);
frame.set("hintId", t_22, true);
if(frame.topLevel) {
context.setVariable("hintId", t_22);
}
if(frame.topLevel) {
context.addExport("hintId", t_22);
}
;
}
else {
var t_23;
t_23 = "";
frame.set("hintId", t_23, true);
if(frame.topLevel) {
context.setVariable("hintId", t_23);
}
if(frame.topLevel) {
context.addExport("hintId", t_23);
}
;
}
if(runtime.memberLookup((l_item),"conditionalElements")) {
var t_24;
t_24 = env.getFilter("join").call(context, [runtime.contextOrFrameLookup(context, frame, "optionId"),"-conditional"]);
frame.set("conditionalElementsId", t_24, true);
if(frame.topLevel) {
context.setVariable("conditionalElementsId", t_24);
}
if(frame.topLevel) {
context.addExport("conditionalElementsId", t_24);
}
var t_25;
t_25 = (lineno = 59, colno = 51, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "This option expands and has more questions,","el": "Αυτή η επιλογή επεκτείνεται και έχει περισσότερες ερωτήσεις,"},l_lang]));
frame.set("conditionalLabel", t_25, true);
if(frame.topLevel) {
context.setVariable("conditionalLabel", t_25);
}
if(frame.topLevel) {
context.addExport("conditionalLabel", t_25);
}
;
}
else {
var t_26;
t_26 = "";
frame.set("conditionalElementsId", t_26, true);
if(frame.topLevel) {
context.setVariable("conditionalElementsId", t_26);
}
if(frame.topLevel) {
context.addExport("conditionalElementsId", t_26);
}
var t_27;
t_27 = "";
frame.set("conditionalLabel", t_27, true);
if(frame.topLevel) {
context.setVariable("conditionalLabel", t_27);
}
if(frame.topLevel) {
context.addExport("conditionalLabel", t_27);
}
;
}
if(runtime.memberLookup((l_item),"type") == "or") {
t_2 += "<p class=\"govcy-ml-3 govcy-mb-3";
if(l_isInline) {
t_2 += " govcy-d-sm-inline-block govcy-mr-3";
;
}
t_2 += "\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "orText"), env.opts.autoescape);
t_2 += "</p>";
t_16 = (function() {
var output = "";
output += "\n        <span class=\"govcy-visually-hidden-error\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "orText"), env.opts.autoescape);
output += ", </span>";
output += runtime.suppressValue((lineno = 68, colno = 96, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("label", t_16, true);
if(frame.topLevel) {
context.setVariable("label", t_16);
}
if(frame.topLevel) {
context.addExport("label", t_16);
}
;
}
else {
if(runtime.memberLookup((l_item),"type") == "and") {
t_2 += "<p class=\"govcy-ml-3 govcy-mb-3";
if(l_isInline) {
t_2 += " govcy-d-sm-inline-block govcy-mr-3";
;
}
t_2 += "\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "andText"), env.opts.autoescape);
t_2 += "</p>";
t_16 = (function() {
var output = "";
output += "\n        <span class=\"govcy-visually-hidden-error\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "andText"), env.opts.autoescape);
output += ", </span>";
output += runtime.suppressValue((lineno = 73, colno = 97, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("label", t_16, true);
if(frame.topLevel) {
context.setVariable("label", t_16);
}
if(frame.topLevel) {
context.addExport("label", t_16);
}
;
}
else {
t_16 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 76, colno = 45, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("label", t_16, true);
if(frame.topLevel) {
context.setVariable("label", t_16);
}
if(frame.topLevel) {
context.addExport("label", t_16);
}
;
}
;
}
t_2 += "<div class=\"govcy-radio";
if(l_isInline) {
t_2 += " govcy-d-sm-inline-block";
;
}
t_2 += "\">\n    <input class=\"govcy-radio-input\" name=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_2 += "\" value=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_item),"value"), env.opts.autoescape);
t_2 += "\" type=\"radio\" id=\"";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "optionId"), env.opts.autoescape);
t_2 += "\" ";
if(runtime.memberLookup((l_item),"hint")) {
t_2 += " aria-describedby=\"";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hintId"), env.opts.autoescape);
t_2 += "\"";
;
}
if(runtime.memberLookup((l_item),"conditionalElements")) {
t_2 += " data-aria-controls=\"";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "conditionalElementsId"), env.opts.autoescape);
t_2 += "\"";
;
}
t_2 += ">\n    <label class=\"govcy-label\" for=\"";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "optionId"), env.opts.autoescape);
t_2 += "\">";
if(runtime.memberLookup((l_item),"conditionalElements")) {
t_2 += " <span class=\"govcy-visually-hidden\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "conditionalLabel"), env.opts.autoescape);
t_2 += "</span>";
;
}
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, t_16), env.opts.autoescape);
t_2 += "</label>";
t_2 += runtime.suppressValue((lineno = 83, colno = 16, runtime.callWrap(t_12, "hint", context, [{"hint": runtime.memberLookup((l_item),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": l_lang},runtime.makeKeywordArgs({"caller": (function (){var macro_t_28 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_29 = "";;
frame = frame.pop();
return new runtime.SafeString(t_29);
});
return macro_t_28;})()})])), env.opts.autoescape);
t_2 += "\n</div>";
if(runtime.memberLookup((l_item),"conditionalElements")) {
var t_30;
t_30 = [];
frame.set("updatedConditionalElements", t_30, true);
if(frame.topLevel) {
context.setVariable("updatedConditionalElements", t_30);
}
if(frame.topLevel) {
context.addExport("updatedConditionalElements", t_30);
}
frame = frame.push();
var t_33 = runtime.memberLookup((l_item),"conditionalElements");
if(t_33) {t_33 = runtime.fromIterator(t_33);
var t_32 = t_33.length;
for(var t_31=0; t_31 < t_33.length; t_31++) {
var t_34 = t_33[t_31];
frame.set("element", t_34);
frame.set("loop.index", t_31 + 1);
frame.set("loop.index0", t_31);
frame.set("loop.revindex", t_32 - t_31);
frame.set("loop.revindex0", t_32 - t_31 - 1);
frame.set("loop.first", t_31 === 0);
frame.set("loop.last", t_31 === t_32 - 1);
frame.set("loop.length", t_32);
var t_35;
t_35 = env.getFilter("merge").call(context, t_34,{"params": env.getFilter("merge").call(context, runtime.memberLookup((t_34),"params"),{"hideFormControlError": true})});
frame.set("updatedElement", t_35, true);
if(frame.topLevel) {
context.setVariable("updatedElement", t_35);
}
if(frame.topLevel) {
context.addExport("updatedElement", t_35);
}
var t_36;
t_36 = (lineno = 93, colno = 78, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "updatedConditionalElements")),"concat"), "updatedConditionalElements[\"concat\"]", context, [[runtime.contextOrFrameLookup(context, frame, "updatedElement")]]));
frame.set("updatedConditionalElements", t_36, true);
if(frame.topLevel) {
context.setVariable("updatedConditionalElements", t_36);
}
if(frame.topLevel) {
context.addExport("updatedConditionalElements", t_36);
}
;
}
}
frame = frame.pop();
t_2 += "<div class=\"govcy-form-control";
if(runtime.memberLookup((l_item),"conditionalHasErrors")) {
t_2 += " govcy-form-control-error";
;
}
else {
t_2 += " govcy-form-control-hint";
;
}
t_2 += " govcy-pl-4 govcy-ml-5 govcy-radio__conditional govcy-radio__conditional--hidden\" id=\"";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "conditionalElementsId"), env.opts.autoescape);
t_2 += "\">\n            ";
t_2 += runtime.suppressValue((lineno = 96, colno = 37, runtime.callWrap(t_8, "govcyElementsFromArray", context, [runtime.contextOrFrameLookup(context, frame, "updatedConditionalElements"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\n        </div>";
;
}
})})})})})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.setVariable("_radioItem", macro_t_1);
output += "\n";
output += "\n";
var macro_t_37 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_38 = "";var t_39;
t_39 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isPageHeading"),false);
frame.set("isPageHeading", t_39, true);
if(frame.topLevel) {
context.setVariable("isPageHeading", t_39);
}
if(frame.topLevel) {
context.addExport("isPageHeading", t_39);
}
var t_40;
t_40 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isInline"),false);
frame.set("isInline", t_40, true);
if(frame.topLevel) {
context.setVariable("isInline", t_40);
}
if(frame.topLevel) {
context.addExport("isInline", t_40);
}
if(runtime.memberLookup((l_params),"legend") && runtime.memberLookup((l_params),"id") && runtime.memberLookup((l_params),"name")) {
env.getTemplate("elements/fieldset.njk", false, "elements/radios.njk", false, function(t_42,t_41) {
if(t_42) { cb(t_42); return; }
t_41.getExported(function(t_43,t_41) {
if(t_43) { cb(t_43); return; }
if(Object.prototype.hasOwnProperty.call(t_41, "fieldset")) {
var t_44 = t_41.fieldset;
} else {
cb(new Error("cannot import 'fieldset'")); return;
}
context.setVariable("fieldset", t_44);
env.getTemplate("elements/hint.njk", false, "elements/radios.njk", false, function(t_46,t_45) {
if(t_46) { cb(t_46); return; }
t_45.getExported(function(t_47,t_45) {
if(t_47) { cb(t_47); return; }
if(Object.prototype.hasOwnProperty.call(t_45, "hint")) {
var t_48 = t_45.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_48);
env.getTemplate("elements/legend.njk", false, "elements/radios.njk", false, function(t_50,t_49) {
if(t_50) { cb(t_50); return; }
t_49.getExported(function(t_51,t_49) {
if(t_51) { cb(t_51); return; }
if(Object.prototype.hasOwnProperty.call(t_49, "legend")) {
var t_52 = t_49.legend;
} else {
cb(new Error("cannot import 'legend'")); return;
}
context.setVariable("legend", t_52);
env.getTemplate("elements/errorMessage.njk", false, "elements/radios.njk", false, function(t_54,t_53) {
if(t_54) { cb(t_54); return; }
t_53.getExported(function(t_55,t_53) {
if(t_55) { cb(t_55); return; }
if(Object.prototype.hasOwnProperty.call(t_53, "errorMessage")) {
var t_56 = t_53.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_56);
env.getTemplate("elements/formControl.njk", false, "elements/radios.njk", false, function(t_58,t_57) {
if(t_58) { cb(t_58); return; }
t_57.getExported(function(t_59,t_57) {
if(t_59) { cb(t_59); return; }
if(Object.prototype.hasOwnProperty.call(t_57, "formControl")) {
var t_60 = t_57.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_60);
if(runtime.memberLookup((l_params),"hint")) {
var t_61;
t_61 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-hint"]);
frame.set("hintId", t_61, true);
if(frame.topLevel) {
context.setVariable("hintId", t_61);
}
if(frame.topLevel) {
context.addExport("hintId", t_61);
}
;
}
else {
var t_62;
t_62 = "";
frame.set("hintId", t_62, true);
if(frame.topLevel) {
context.setVariable("hintId", t_62);
}
if(frame.topLevel) {
context.addExport("hintId", t_62);
}
;
}
if(runtime.memberLookup((l_params),"error")) {
var t_63;
t_63 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-error"]);
frame.set("errorId", t_63, true);
if(frame.topLevel) {
context.setVariable("errorId", t_63);
}
if(frame.topLevel) {
context.addExport("errorId", t_63);
}
;
}
else {
var t_64;
t_64 = "";
frame.set("errorId", t_64, true);
if(frame.topLevel) {
context.setVariable("errorId", t_64);
}
if(frame.topLevel) {
context.addExport("errorId", t_64);
}
;
}
if(runtime.memberLookup((l_params),"error") || runtime.memberLookup((l_params),"hint")) {
var t_65;
t_65 = runtime.contextOrFrameLookup(context, frame, "hintId") + "" + " " + "" + runtime.contextOrFrameLookup(context, frame, "errorId");
frame.set("ariaDescribedBy", t_65, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_65);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_65);
}
;
}
else {
var t_66;
t_66 = "";
frame.set("ariaDescribedBy", t_66, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_66);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_66);
}
;
}
t_38 += runtime.suppressValue((lineno = 160, colno = 20, runtime.callWrap(t_44, "fieldset", context, [{"ariaDescribedby": runtime.contextOrFrameLookup(context, frame, "ariaDescribedBy"),"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_67 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_68 = "";t_68 += "\n        ";
t_68 += runtime.suppressValue((lineno = 161, colno = 22, runtime.callWrap(t_52, "legend", context, [{"legend": runtime.memberLookup((l_params),"legend"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_69 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_70 = "";;
frame = frame.pop();
return new runtime.SafeString(t_70);
});
return macro_t_69;})()})])), env.opts.autoescape);
t_68 += "\n        ";
t_68 += runtime.suppressValue((lineno = 162, colno = 27, runtime.callWrap(t_60, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error"))},runtime.makeKeywordArgs({"caller": (function (){var macro_t_71 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_72 = "";t_72 += "\n            ";
t_72 += runtime.suppressValue((lineno = 163, colno = 24, runtime.callWrap(t_48, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_73 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_74 = "";;
frame = frame.pop();
return new runtime.SafeString(t_74);
});
return macro_t_73;})()})])), env.opts.autoescape);
t_72 += runtime.suppressValue((lineno = 165, colno = 32, runtime.callWrap(t_56, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_75 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_76 = "";;
frame = frame.pop();
return new runtime.SafeString(t_76);
});
return macro_t_75;})()})])), env.opts.autoescape);
t_72 += "\n            ";
frame = frame.push();
var t_79 = runtime.memberLookup((l_params),"items");
if(t_79) {t_79 = runtime.fromIterator(t_79);
var t_78 = t_79.length;
for(var t_77=0; t_77 < t_79.length; t_77++) {
var t_80 = t_79[t_77];
frame.set("item", t_80);
frame.set("loop.index", t_77 + 1);
frame.set("loop.index0", t_77);
frame.set("loop.revindex", t_78 - t_77);
frame.set("loop.revindex0", t_78 - t_77 - 1);
frame.set("loop.first", t_77 === 0);
frame.set("loop.last", t_77 === t_78 - 1);
frame.set("loop.length", t_78);
if(t_80) {
t_72 += runtime.suppressValue((lineno = 169, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_radioItem"), "_radioItem", context, [l_params,t_80,runtime.contextOrFrameLookup(context, frame, "isInline"),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = frame.pop();
return new runtime.SafeString(t_72);
});
return macro_t_71;})()})])), env.opts.autoescape);
t_68 += "\n    ";
;
frame = frame.pop();
return new runtime.SafeString(t_68);
});
return macro_t_67;})()})])), env.opts.autoescape);
})})})})})})})})})});
}
;
frame = callerFrame;
return new runtime.SafeString(t_38);
});
context.addExport("radios");
context.setVariable("radios", macro_t_37);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/select.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var t_3;
t_3 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isPageHeading"),false);
frame.set("isPageHeading", t_3, true);
if(frame.topLevel) {
context.setVariable("isPageHeading", t_3);
}
if(frame.topLevel) {
context.addExport("isPageHeading", t_3);
}
if(runtime.memberLookup((l_params),"label") && runtime.memberLookup((l_params),"id") && runtime.memberLookup((l_params),"name")) {
env.getTemplate("utilities/govcyUtilities.njk", false, "elements/select.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "govcyLocalizeContent")) {
var t_7 = t_4.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_7);
if(Object.prototype.hasOwnProperty.call(t_4, "govcyLangAttribute")) {
var t_8 = t_4.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_8);
env.getTemplate("elements/hint.njk", false, "elements/select.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "hint")) {
var t_12 = t_9.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_12);
env.getTemplate("elements/label.njk", false, "elements/select.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
t_13.getExported(function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
if(Object.prototype.hasOwnProperty.call(t_13, "label")) {
var t_16 = t_13.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_16);
env.getTemplate("elements/errorMessage.njk", false, "elements/select.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
t_17.getExported(function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
if(Object.prototype.hasOwnProperty.call(t_17, "errorMessage")) {
var t_20 = t_17.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_20);
env.getTemplate("elements/formControl.njk", false, "elements/select.njk", false, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
t_21.getExported(function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
if(Object.prototype.hasOwnProperty.call(t_21, "formControl")) {
var t_24 = t_21.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_24);
if(runtime.memberLookup((l_params),"hint")) {
var t_25;
t_25 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-hint"]);
frame.set("hintId", t_25, true);
if(frame.topLevel) {
context.setVariable("hintId", t_25);
}
if(frame.topLevel) {
context.addExport("hintId", t_25);
}
;
}
else {
var t_26;
t_26 = "";
frame.set("hintId", t_26, true);
if(frame.topLevel) {
context.setVariable("hintId", t_26);
}
if(frame.topLevel) {
context.addExport("hintId", t_26);
}
;
}
if(runtime.memberLookup((l_params),"error")) {
var t_27;
t_27 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-error"]);
frame.set("errorId", t_27, true);
if(frame.topLevel) {
context.setVariable("errorId", t_27);
}
if(frame.topLevel) {
context.addExport("errorId", t_27);
}
;
}
else {
var t_28;
t_28 = "";
frame.set("errorId", t_28, true);
if(frame.topLevel) {
context.setVariable("errorId", t_28);
}
if(frame.topLevel) {
context.addExport("errorId", t_28);
}
;
}
if(runtime.memberLookup((l_params),"error") || runtime.memberLookup((l_params),"hint")) {
var t_29;
t_29 = runtime.contextOrFrameLookup(context, frame, "hintId") + "" + " " + "" + runtime.contextOrFrameLookup(context, frame, "errorId");
frame.set("ariaDescribedBy", t_29, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_29);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_29);
}
;
}
else {
var t_30;
t_30 = "";
frame.set("ariaDescribedBy", t_30, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_30);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_30);
}
;
}
t_2 += runtime.suppressValue((lineno = 43, colno = 23, runtime.callWrap(t_24, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error")),"classes": runtime.memberLookup((l_params),"classes")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_31 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_32 = "";t_32 += "\n        ";
t_32 += runtime.suppressValue((lineno = 44, colno = 21, runtime.callWrap(t_16, "label", context, [{"label": runtime.memberLookup((l_params),"label"),"id": runtime.contextOrFrameLookup(context, frame, "labelId"),"for": runtime.memberLookup((l_params),"id"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_33 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_34 = "";;
frame = frame.pop();
return new runtime.SafeString(t_34);
});
return macro_t_33;})()})])), env.opts.autoescape);
t_32 += "\n        ";
t_32 += runtime.suppressValue((lineno = 45, colno = 20, runtime.callWrap(t_12, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_35 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_36 = "";;
frame = frame.pop();
return new runtime.SafeString(t_36);
});
return macro_t_35;})()})])), env.opts.autoescape);
t_32 += runtime.suppressValue((lineno = 47, colno = 28, runtime.callWrap(t_20, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_37 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_38 = "";;
frame = frame.pop();
return new runtime.SafeString(t_38);
});
return macro_t_37;})()})])), env.opts.autoescape);
t_32 += "\n        <select id=\"";
t_32 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_32 += "\" name=\"";
t_32 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_32 += "\" class=\"govcy-select";
if(runtime.memberLookup((l_params),"error")) {
t_32 += " govcy-select-error";
;
}
t_32 += "\" ";
if(runtime.contextOrFrameLookup(context, frame, "ariaDescribedBy")) {
t_32 += " aria-describedby=\"";
t_32 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ariaDescribedBy"), env.opts.autoescape);
t_32 += "\"";
;
}
t_32 += runtime.suppressValue((lineno = 48, colno = 229, runtime.callWrap(t_8, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_32 += ">\n            ";
frame = frame.push();
var t_41 = runtime.memberLookup((l_params),"items");
if(t_41) {t_41 = runtime.fromIterator(t_41);
var t_40 = t_41.length;
for(var t_39=0; t_39 < t_41.length; t_39++) {
var t_42 = t_41[t_39];
frame.set("item", t_42);
frame.set("loop.index", t_39 + 1);
frame.set("loop.index0", t_39);
frame.set("loop.revindex", t_40 - t_39);
frame.set("loop.revindex0", t_40 - t_39 - 1);
frame.set("loop.first", t_39 === 0);
frame.set("loop.last", t_39 === t_40 - 1);
frame.set("loop.length", t_40);
if(runtime.memberLookup((t_42),"text")) {
t_32 += "<option value=\"";
t_32 += runtime.suppressValue(runtime.memberLookup((t_42),"value"), env.opts.autoescape);
t_32 += "\">";
t_32 += runtime.suppressValue((lineno = 52, colno = 76, runtime.callWrap(t_7, "govcyLocalizeContent", context, [runtime.memberLookup((t_42),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_32 += "</option>";
;
}
;
}
}
frame = frame.pop();
t_32 += "</select>\n    ";
;
frame = frame.pop();
return new runtime.SafeString(t_32);
});
return macro_t_31;})()})])), env.opts.autoescape);
})})})})})})})})})});
}
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("select");
context.setVariable("select", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/summaryList.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\r\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/summaryList.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyElementsFromArray")) {
var t_8 = t_3.govcyElementsFromArray;
} else {
cb(new Error("cannot import 'govcyElementsFromArray'")); return;
}
context.setVariable("govcyElementsFromArray", t_8);
t_2 += "<dl ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "class=\"";
if(!runtime.memberLookup((l_params),"isInnerList")) {
t_2 += "govcy-summary-list";
;
}
else {
t_2 += "govcy-summary-list-row-internal";
;
}
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 50, colno = 239, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">";
if(runtime.memberLookup((l_params),"entryCount")) {
var t_9;
t_9 = (lineno = 53, colno = 48, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "Entry","el": "Καταχώρηση"},runtime.memberLookup((l_params),"lang")]));
frame.set("entryText", t_9, true);
if(frame.topLevel) {
context.setVariable("entryText", t_9);
}
if(frame.topLevel) {
context.addExport("entryText", t_9);
}
t_2 += "<dt><span class=\"govcy-visually-hidden\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "entryText"), env.opts.autoescape);
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"entryCount"), env.opts.autoescape);
t_2 += "</span></dt>";
;
}
frame = frame.push();
var t_12 = runtime.memberLookup((l_params),"items");
if(t_12) {t_12 = runtime.fromIterator(t_12);
var t_11 = t_12.length;
for(var t_10=0; t_10 < t_12.length; t_10++) {
var t_13 = t_12[t_10];
frame.set("item", t_13);
frame.set("loop.index", t_10 + 1);
frame.set("loop.index0", t_10);
frame.set("loop.revindex", t_11 - t_10);
frame.set("loop.revindex0", t_11 - t_10 - 1);
frame.set("loop.first", t_10 === 0);
frame.set("loop.last", t_10 === t_11 - 1);
frame.set("loop.length", t_11);
t_2 += "\r\n    ";
if(!runtime.memberLookup((l_params),"isInnerList")) {
t_2 += "<div class=\"govcy-summary-list-row\">";
;
}
t_2 += "<dt class=\"";
if(!runtime.memberLookup((l_params),"isInnerList")) {
t_2 += "govcy-summary-list-key";
;
}
else {
t_2 += "govcy-summary-list-key-internal";
;
}
t_2 += "\">\r\n            ";
t_2 += runtime.suppressValue((lineno = 60, colno = 35, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((t_13),"key"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
if(!runtime.memberLookup((l_params),"isInnerList")) {
t_2 += runtime.suppressValue((lineno = 62, colno = 84, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_countSummaryListsRenderVisualyHidden"), "_countSummaryListsRenderVisualyHidden", context, [runtime.memberLookup((t_13),"value"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
}
t_2 += "</dt>";
t_2 += "<dd class=\"";
if(!runtime.memberLookup((l_params),"isInnerList")) {
t_2 += "govcy-summary-list-value";
;
}
else {
t_2 += "govcy-summary-list-value-internal";
;
}
t_2 += "\">";
if(runtime.memberLookup((t_13),"value")) {
t_2 += runtime.suppressValue((lineno = 67, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_govcySummayListElementsFromArray"), "_govcySummayListElementsFromArray", context, [runtime.memberLookup((t_13),"value"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_13),"actions")) {
t_2 += runtime.suppressValue((lineno = 69, colno = 38, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_summaryListActions"), "_summaryListActions", context, [runtime.memberLookup((t_13),"actions"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
}
;
}
t_2 += "</dd>";
if(runtime.memberLookup((t_13),"actions") && runtime.memberLookup((t_13),"value") && !runtime.memberLookup((l_params),"isInnerList")) {
t_2 += "<dd class=\"govcy-summary-list-actions\">\r\n            ";
t_2 += runtime.suppressValue((lineno = 75, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_summaryListActions"), "_summaryListActions", context, [runtime.memberLookup((t_13),"actions"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\r\n        </dd>";
;
}
t_2 += "\r\n    ";
if(!runtime.memberLookup((l_params),"isInnerList")) {
t_2 += "</div>";
;
}
;
}
}
frame = frame.pop();
t_2 += "\r\n</dl>";
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("summaryList");
context.setVariable("summaryList", macro_t_1);
output += "\r\n";
var macro_t_14 = runtime.makeMacro(
["actions", "lang"], 
[], 
function (l_actions, l_lang, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("actions", l_actions);
frame.set("lang", l_lang);
var t_15 = "";t_15 += "\r\n    <ul class=\"list-inline govcy-my-0\">";
frame = frame.push();
var t_18 = l_actions;
if(t_18) {t_18 = runtime.fromIterator(t_18);
var t_17 = t_18.length;
for(var t_16=0; t_16 < t_18.length; t_16++) {
var t_19 = t_18[t_16];
frame.set("action", t_19);
frame.set("loop.index", t_16 + 1);
frame.set("loop.index0", t_16);
frame.set("loop.revindex", t_17 - t_16);
frame.set("loop.revindex0", t_17 - t_16 - 1);
frame.set("loop.first", t_16 === 0);
frame.set("loop.last", t_16 === t_17 - 1);
frame.set("loop.length", t_17);
t_15 += "\r\n        <li class=\"list-inline-item\">";
t_15 += "<a href=\"";
if(runtime.memberLookup((t_19),"href")) {
t_15 += runtime.suppressValue(runtime.memberLookup((t_19),"href"), env.opts.autoescape);
;
}
else {
t_15 += "#";
;
}
t_15 += "\"";
if(runtime.memberLookup((t_19),"classes")) {
t_15 += "class=\"";
t_15 += runtime.suppressValue(runtime.memberLookup((t_19),"classes"), env.opts.autoescape);
t_15 += "\"";
;
}
t_15 += ">";
t_15 += runtime.suppressValue((lineno = 108, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govcyLocalizeContent"), "govcyLocalizeContent", context, [runtime.memberLookup((t_19),"text"),l_lang])), env.opts.autoescape);
if(runtime.memberLookup((t_19),"visuallyHiddenText")) {
t_15 += "\r\n                <span class=\"govcy-visually-hidden\"> ";
t_15 += runtime.suppressValue((lineno = 111, colno = 76, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govcyLocalizeContent"), "govcyLocalizeContent", context, [runtime.memberLookup((t_19),"visuallyHiddenText"),l_lang])), env.opts.autoescape);
t_15 += "</span>\r\n                ";
;
}
t_15 += "</a>\r\n        </li>";
;
}
}
frame = frame.pop();
t_15 += "\r\n    </ul>";
;
frame = callerFrame;
return new runtime.SafeString(t_15);
});
context.setVariable("_summaryListActions", macro_t_14);
var macro_t_20 = runtime.makeMacro(
["elements", "lang"], 
[], 
function (l_elements, l_lang, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("elements", l_elements);
frame.set("lang", l_lang);
var t_21 = "";env.getTemplate("govcyElement.njk", false, "elements/summaryList.njk", false, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
t_22.getExported(function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
if(Object.prototype.hasOwnProperty.call(t_22, "govcyElement")) {
var t_25 = t_22.govcyElement;
} else {
cb(new Error("cannot import 'govcyElement'")); return;
}
context.setVariable("govcyElement", t_25);
var t_26;
t_26 = 0;
frame.set("summaryListCount", t_26, true);
if(frame.topLevel) {
context.setVariable("summaryListCount", t_26);
}
if(frame.topLevel) {
context.addExport("summaryListCount", t_26);
}
frame = frame.push();
var t_29 = l_elements;
if(t_29) {t_29 = runtime.fromIterator(t_29);
var t_28 = t_29.length;
for(var t_27=0; t_27 < t_29.length; t_27++) {
var t_30 = t_29[t_27];
frame.set("element", t_30);
frame.set("loop.index", t_27 + 1);
frame.set("loop.index0", t_27);
frame.set("loop.revindex", t_28 - t_27);
frame.set("loop.revindex0", t_28 - t_27 - 1);
frame.set("loop.first", t_27 === 0);
frame.set("loop.last", t_27 === t_28 - 1);
frame.set("loop.length", t_28);
if(l_lang && !runtime.memberLookup((runtime.memberLookup((t_30),"params")),"lang")) {
var t_31;
t_31 = env.getFilter("merge").call(context, runtime.memberLookup((t_30),"params"),{"lang": l_lang});
frame.set("params", t_31, true);
if(frame.topLevel) {
context.setVariable("params", t_31);
}
if(frame.topLevel) {
context.addExport("params", t_31);
}
;
}
else {
var t_32;
t_32 = runtime.memberLookup((t_30),"params");
frame.set("params", t_32, true);
if(frame.topLevel) {
context.setVariable("params", t_32);
}
if(frame.topLevel) {
context.addExport("params", t_32);
}
;
}
if(runtime.memberLookup((t_30),"element") == "summaryList") {
var t_33;
t_33 = runtime.contextOrFrameLookup(context, frame, "summaryListCount") + 1;
frame.set("summaryListCount", t_33, true);
if(frame.topLevel) {
context.setVariable("summaryListCount", t_33);
}
if(frame.topLevel) {
context.addExport("summaryListCount", t_33);
}
var t_34;
t_34 = env.getFilter("merge").call(context, runtime.contextOrFrameLookup(context, frame, "params"),{"isInnerList": true});
frame.set("params", t_34, true);
if(frame.topLevel) {
context.setVariable("params", t_34);
}
if(frame.topLevel) {
context.addExport("params", t_34);
}
var t_35;
t_35 = env.getFilter("merge").call(context, runtime.contextOrFrameLookup(context, frame, "params"),{"entryCount": runtime.contextOrFrameLookup(context, frame, "summaryListCount")});
frame.set("params", t_35, true);
if(frame.topLevel) {
context.setVariable("params", t_35);
}
if(frame.topLevel) {
context.addExport("params", t_35);
}
;
}
t_21 += runtime.suppressValue((lineno = 134, colno = 29, runtime.callWrap(t_25, "govcyElement", context, [runtime.memberLookup((t_30),"element"),runtime.contextOrFrameLookup(context, frame, "params"),runtime.makeKeywordArgs({"caller": (function (){var macro_t_36 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_37 = "";;
frame = frame.pop();
return new runtime.SafeString(t_37);
});
return macro_t_36;})()})])), env.opts.autoescape);
;
}
}
frame = frame.pop();
})});
frame = callerFrame;
return new runtime.SafeString(t_21);
});
context.setVariable("_govcySummayListElementsFromArray", macro_t_20);
var macro_t_38 = runtime.makeMacro(
["elements", "lang"], 
[], 
function (l_elements, l_lang, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("elements", l_elements);
frame.set("lang", l_lang);
var t_39 = "";var t_40;
t_40 = 0;
frame.set("totalCount", t_40, true);
if(frame.topLevel) {
context.setVariable("totalCount", t_40);
}
if(frame.topLevel) {
context.addExport("totalCount", t_40);
}
frame = frame.push();
var t_43 = l_elements;
if(t_43) {t_43 = runtime.fromIterator(t_43);
var t_42 = t_43.length;
for(var t_41=0; t_41 < t_43.length; t_41++) {
var t_44 = t_43[t_41];
frame.set("item", t_44);
frame.set("loop.index", t_41 + 1);
frame.set("loop.index0", t_41);
frame.set("loop.revindex", t_42 - t_41);
frame.set("loop.revindex0", t_42 - t_41 - 1);
frame.set("loop.first", t_41 === 0);
frame.set("loop.last", t_41 === t_42 - 1);
frame.set("loop.length", t_42);
if(runtime.memberLookup((t_44),"element") == "summaryList") {
var t_45;
t_45 = runtime.contextOrFrameLookup(context, frame, "totalCount") + 1;
frame.set("totalCount", t_45, true);
if(frame.topLevel) {
context.setVariable("totalCount", t_45);
}
if(frame.topLevel) {
context.addExport("totalCount", t_45);
}
;
}
;
}
}
frame = frame.pop();
var t_46;
t_46 = (lineno = 145, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govcyLocalizeContent"), "govcyLocalizeContent", context, [{"en": "Entries","el": "Καταχωρήσεις"},l_lang]));
frame.set("entriesText", t_46, true);
if(frame.topLevel) {
context.setVariable("entriesText", t_46);
}
if(frame.topLevel) {
context.addExport("entriesText", t_46);
}
if(runtime.contextOrFrameLookup(context, frame, "totalCount") > 0) {
t_39 += "<span class=\"govcy-visually-hidden\">";
t_39 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "totalCount"), env.opts.autoescape);
t_39 += " ";
t_39 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "entriesText"), env.opts.autoescape);
t_39 += "</span>";
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_39);
});
context.setVariable("_countSummaryListsRenderVisualyHidden", macro_t_38);
output += "\r\n\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/table.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/table.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
env.getTemplate("govcyElement.njk", false, "elements/table.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "govcyElement")) {
var t_11 = t_8.govcyElement;
} else {
cb(new Error("cannot import 'govcyElement'")); return;
}
context.setVariable("govcyElement", t_11);
if(runtime.memberLookup((l_params),"responsiveType") == "horisontal") {
t_2 += "<div class=\"govcy-table-responsive\">";
;
}
t_2 += "\n<table ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "class=\"govcy-table";
if(runtime.memberLookup((l_params),"responsiveType") == "vertical-headers" || runtime.memberLookup((l_params),"responsiveType") == "vertical-no-headers") {
t_2 += " govcy-table-responsive-vertical";
;
}
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 73, colno = 297, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">";
if(runtime.memberLookup((l_params),"head")) {
t_2 += "\n    <thead>\n        <tr>";
frame = frame.push();
var t_14 = runtime.memberLookup((l_params),"head");
if(t_14) {t_14 = runtime.fromIterator(t_14);
var t_13 = t_14.length;
for(var t_12=0; t_12 < t_14.length; t_12++) {
var t_15 = t_14[t_12];
frame.set("head", t_15);
frame.set("loop.index", t_12 + 1);
frame.set("loop.index0", t_12);
frame.set("loop.revindex", t_13 - t_12);
frame.set("loop.revindex0", t_13 - t_12 - 1);
frame.set("loop.first", t_12 === 0);
frame.set("loop.last", t_12 === t_13 - 1);
frame.set("loop.length", t_13);
t_2 += "\n            <th";
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, (lineno = 79, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_cellAttributes"), "_cellAttributes", context, [t_15]))), env.opts.autoescape);
t_2 += ">\n                ";
t_2 += runtime.suppressValue((lineno = 80, colno = 39, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((t_15),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\n            </th>";
;
}
}
frame = frame.pop();
t_2 += "\n        </tr>\n    </thead>";
;
}
t_2 += "\n    <tbody>";
frame = frame.push();
var t_18 = runtime.memberLookup((l_params),"rows");
if(t_18) {t_18 = runtime.fromIterator(t_18);
var t_17 = t_18.length;
for(var t_16=0; t_16 < t_18.length; t_16++) {
var t_19 = t_18[t_16];
frame.set("row", t_19);
frame.set("loop.index", t_16 + 1);
frame.set("loop.index0", t_16);
frame.set("loop.revindex", t_17 - t_16);
frame.set("loop.revindex0", t_17 - t_16 - 1);
frame.set("loop.first", t_16 === 0);
frame.set("loop.last", t_16 === t_17 - 1);
frame.set("loop.length", t_17);
if(t_19) {
t_2 += "\n        <tr>\n            ";
frame = frame.push();
var t_22 = t_19;
if(t_22) {t_22 = runtime.fromIterator(t_22);
var t_21 = t_22.length;
for(var t_20=0; t_20 < t_22.length; t_20++) {
var t_23 = t_22[t_20];
frame.set("cell", t_23);
frame.set("loop.index", t_20 + 1);
frame.set("loop.index0", t_20);
frame.set("loop.revindex", t_21 - t_20);
frame.set("loop.revindex0", t_21 - t_20 - 1);
frame.set("loop.first", t_20 === 0);
frame.set("loop.last", t_20 === t_21 - 1);
frame.set("loop.length", t_21);
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first") && runtime.memberLookup((l_params),"firstCellIsHeader")) {
t_2 += "<th scope=\"row\"";
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, (lineno = 94, colno = 45, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_cellAttributes"), "_cellAttributes", context, [t_23]))), env.opts.autoescape);
t_2 += ">";
if(runtime.memberLookup((l_params),"responsiveType") == "vertical-headers") {
t_2 += "\n                <div class=\"govcy-d-md-none govcy-fw-bolder govcy-my-2\">";
t_2 += runtime.suppressValue((lineno = 97, colno = 95, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((l_params),"head")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0"))),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</div>";
;
}
t_2 += "\n                ";
t_2 += runtime.suppressValue((lineno = 99, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_cellElements"), "_cellElements", context, [runtime.memberLookup((t_23),"elements"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\n            </th>";
;
}
else {
t_2 += "\n            <td";
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, (lineno = 102, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_cellAttributes"), "_cellAttributes", context, [t_23]))), env.opts.autoescape);
t_2 += ">";
if(runtime.memberLookup((l_params),"responsiveType") == "vertical-headers") {
t_2 += "\n                <div class=\"govcy-d-md-none govcy-fw-bolder govcy-my-2\">";
t_2 += runtime.suppressValue((lineno = 104, colno = 95, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((l_params),"head")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0"))),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</div>";
;
}
t_2 += "\n                ";
t_2 += runtime.suppressValue((lineno = 106, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_cellElements"), "_cellElements", context, [runtime.memberLookup((t_23),"elements"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\n            </td>";
;
}
;
}
}
frame = frame.pop();
t_2 += "\n        </tr>";
;
}
;
}
}
frame = frame.pop();
t_2 += "\n    </tbody>\n</table>\n";
if(runtime.memberLookup((l_params),"responsiveType") == "horisontal") {
t_2 += "</div>";
;
}
})})})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("table");
context.setVariable("table", macro_t_1);
var macro_t_24 = runtime.makeMacro(
["cell"], 
[], 
function (l_cell, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("cell", l_cell);
var t_25 = "";if(runtime.memberLookup((l_cell),"classes")) {
t_25 += " class=\"";
t_25 += runtime.suppressValue(runtime.memberLookup((l_cell),"classes"), env.opts.autoescape);
t_25 += "\"";
;
}
if(runtime.memberLookup((l_cell),"colspan")) {
t_25 += " colspan=\"";
t_25 += runtime.suppressValue(runtime.memberLookup((l_cell),"colspan"), env.opts.autoescape);
t_25 += "\"";
;
}
if(runtime.memberLookup((l_cell),"rowspan")) {
t_25 += " rowspan=\"";
t_25 += runtime.suppressValue(runtime.memberLookup((l_cell),"rowspan"), env.opts.autoescape);
t_25 += "\"";
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_25);
});
context.setVariable("_cellAttributes", macro_t_24);
var macro_t_26 = runtime.makeMacro(
["elements", "lang"], 
[], 
function (l_elements, l_lang, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("elements", l_elements);
frame.set("lang", l_lang);
var t_27 = "";frame = frame.push();
var t_30 = l_elements;
if(t_30) {t_30 = runtime.fromIterator(t_30);
var t_29 = t_30.length;
for(var t_28=0; t_28 < t_30.length; t_28++) {
var t_31 = t_30[t_28];
frame.set("element", t_31);
frame.set("loop.index", t_28 + 1);
frame.set("loop.index0", t_28);
frame.set("loop.revindex", t_29 - t_28);
frame.set("loop.revindex0", t_29 - t_28 - 1);
frame.set("loop.first", t_28 === 0);
frame.set("loop.last", t_28 === t_29 - 1);
frame.set("loop.length", t_29);
if(l_lang && !runtime.memberLookup((runtime.memberLookup((t_31),"params")),"lang")) {
var t_32;
t_32 = env.getFilter("merge").call(context, runtime.memberLookup((t_31),"params"),{"lang": l_lang});
frame.set("params", t_32, true);
if(frame.topLevel) {
context.setVariable("params", t_32);
}
if(frame.topLevel) {
context.addExport("params", t_32);
}
;
}
else {
var t_33;
t_33 = runtime.memberLookup((t_31),"params");
frame.set("params", t_33, true);
if(frame.topLevel) {
context.setVariable("params", t_33);
}
if(frame.topLevel) {
context.addExport("params", t_33);
}
;
}
t_27 += runtime.suppressValue((lineno = 131, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govcyElement"), "govcyElement", context, [runtime.memberLookup((t_31),"element"),runtime.contextOrFrameLookup(context, frame, "params"),runtime.makeKeywordArgs({"caller": (function (){var macro_t_34 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_35 = "";;
frame = frame.pop();
return new runtime.SafeString(t_35);
});
return macro_t_34;})()})])), env.opts.autoescape);
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_27);
});
context.setVariable("_cellElements", macro_t_26);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/tag.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/tag.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
if(runtime.memberLookup((l_params),"text")) {
t_2 += "<span class=\"govcy-tag";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 11, colno = 99, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">";
t_2 += runtime.suppressValue((lineno = 11, colno = 139, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</span>";
;
}
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("tag");
context.setVariable("tag", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/textArea.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/textArea.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
env.getTemplate("elements/formControl.njk", false, "elements/textArea.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "formControl")) {
var t_11 = t_8.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_11);
env.getTemplate("elements/hint.njk", false, "elements/textArea.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "hint")) {
var t_15 = t_12.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_15);
env.getTemplate("elements/label.njk", false, "elements/textArea.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "label")) {
var t_19 = t_16.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_19);
env.getTemplate("elements/errorMessage.njk", false, "elements/textArea.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "errorMessage")) {
var t_23 = t_20.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_23);
var t_24;
t_24 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isPageHeading"),false);
frame.set("isPageHeading", t_24, true);
if(frame.topLevel) {
context.setVariable("isPageHeading", t_24);
}
if(frame.topLevel) {
context.addExport("isPageHeading", t_24);
}
var t_25;
t_25 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isSpellcheck"),false);
frame.set("isSpellcheck", t_25, true);
if(frame.topLevel) {
context.setVariable("isSpellcheck", t_25);
}
if(frame.topLevel) {
context.addExport("isSpellcheck", t_25);
}
var t_26;
t_26 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"autocomplete"),false);
frame.set("autocomplete", t_26, true);
if(frame.topLevel) {
context.setVariable("autocomplete", t_26);
}
if(frame.topLevel) {
context.addExport("autocomplete", t_26);
}
var t_27;
t_27 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"rows"),"5");
frame.set("rows", t_27, true);
if(frame.topLevel) {
context.setVariable("rows", t_27);
}
if(frame.topLevel) {
context.addExport("rows", t_27);
}
if(runtime.memberLookup((l_params),"label") && runtime.memberLookup((l_params),"id")) {
var t_28;
t_28 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-hint"]);
frame.set("hintId", t_28, true);
if(frame.topLevel) {
context.setVariable("hintId", t_28);
}
if(frame.topLevel) {
context.addExport("hintId", t_28);
}
var t_29;
t_29 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-label"]);
frame.set("labelId", t_29, true);
if(frame.topLevel) {
context.setVariable("labelId", t_29);
}
if(frame.topLevel) {
context.addExport("labelId", t_29);
}
var t_30;
t_30 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-error"]);
frame.set("errorId", t_30, true);
if(frame.topLevel) {
context.setVariable("errorId", t_30);
}
if(frame.topLevel) {
context.addExport("errorId", t_30);
}
var t_31;
t_31 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-char-count"]);
frame.set("charactercountId", t_31, true);
if(frame.topLevel) {
context.setVariable("charactercountId", t_31);
}
if(frame.topLevel) {
context.addExport("charactercountId", t_31);
}
if(runtime.contextOrFrameLookup(context, frame, "isSpellcheck")) {
var t_32;
t_32 = "spellcheck=\"true\"";
frame.set("inputSpellcheck", t_32, true);
if(frame.topLevel) {
context.setVariable("inputSpellcheck", t_32);
}
if(frame.topLevel) {
context.addExport("inputSpellcheck", t_32);
}
;
}
else {
var t_33;
t_33 = "spellcheck=\"false\"";
frame.set("inputSpellcheck", t_33, true);
if(frame.topLevel) {
context.setVariable("inputSpellcheck", t_33);
}
if(frame.topLevel) {
context.addExport("inputSpellcheck", t_33);
}
;
}
if(runtime.contextOrFrameLookup(context, frame, "autocomplete")) {
var t_34;
t_34 = (function() {
var output = "";
output += "autocomplete=\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "autocomplete")), env.opts.autoescape);
output += "\"";
;
return output;
})()
;
frame.set("inputAutocomplete", t_34, true);
if(frame.topLevel) {
context.setVariable("inputAutocomplete", t_34);
}
if(frame.topLevel) {
context.addExport("inputAutocomplete", t_34);
}
;
}
else {
var t_35;
t_35 = "";
frame.set("inputAutocomplete", t_35, true);
if(frame.topLevel) {
context.setVariable("inputAutocomplete", t_35);
}
if(frame.topLevel) {
context.addExport("inputAutocomplete", t_35);
}
;
}
t_2 += runtime.suppressValue((lineno = 49, colno = 23, runtime.callWrap(t_11, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error")),"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_36 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_37 = "";t_37 += runtime.suppressValue((lineno = 51, colno = 21, runtime.callWrap(t_19, "label", context, [{"label": runtime.memberLookup((l_params),"label"),"id": runtime.contextOrFrameLookup(context, frame, "labelId"),"for": runtime.memberLookup((l_params),"id"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_38 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_39 = "";;
frame = frame.pop();
return new runtime.SafeString(t_39);
});
return macro_t_38;})()})])), env.opts.autoescape);
t_37 += runtime.suppressValue((lineno = 53, colno = 20, runtime.callWrap(t_15, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_40 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_41 = "";;
frame = frame.pop();
return new runtime.SafeString(t_41);
});
return macro_t_40;})()})])), env.opts.autoescape);
t_37 += runtime.suppressValue((lineno = 55, colno = 28, runtime.callWrap(t_23, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_42 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_43 = "";;
frame = frame.pop();
return new runtime.SafeString(t_43);
});
return macro_t_42;})()})])), env.opts.autoescape);
t_37 += "<textarea id=\"";
t_37 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_37 += "\"";
if(runtime.memberLookup((l_params),"name")) {
t_37 += " name=\"";
t_37 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_37 += "\"";
;
}
t_37 += " rows=\"";
t_37 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "rows"), env.opts.autoescape);
t_37 += "\" ";
t_37 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "inputSpellcheck")), env.opts.autoescape);
t_37 += " ";
t_37 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "inputAutocomplete")), env.opts.autoescape);
t_37 += " class=\"govcy-text-area";
if(runtime.memberLookup((l_params),"error")) {
t_37 += " govcy-text-area-error";
;
}
t_37 += "\"";
if(runtime.memberLookup((l_params),"hint") || runtime.memberLookup((l_params),"error") || runtime.memberLookup((l_params),"characterCount")) {
t_37 += " aria-describedby=\"";
if(runtime.memberLookup((l_params),"characterCount")) {
t_37 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "charactercountId"), env.opts.autoescape);
;
}
if(runtime.memberLookup((l_params),"hint")) {
t_37 += " ";
t_37 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hintId"), env.opts.autoescape);
;
}
if(runtime.memberLookup((l_params),"error")) {
t_37 += " ";
t_37 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "errorId"), env.opts.autoescape);
;
}
t_37 += "\"";
;
}
t_37 += "></textarea>\n        ";
if(runtime.memberLookup((l_params),"characterCount")) {
var t_44;
t_44 = env.getFilter("default").call(context, runtime.memberLookup((runtime.memberLookup((l_params),"characterCount")),"type"),"char");
frame.set("charactercountType", t_44, true);
if(frame.topLevel) {
context.setVariable("charactercountType", t_44);
}
if(frame.topLevel) {
context.addExport("charactercountType", t_44);
}
var t_45;
t_45 = env.getFilter("default").call(context, runtime.memberLookup((runtime.memberLookup((l_params),"characterCount")),"max"),100);
frame.set("charactercountMax", t_45, true);
if(frame.topLevel) {
context.setVariable("charactercountMax", t_45);
}
if(frame.topLevel) {
context.addExport("charactercountMax", t_45);
}
var t_46;
t_46 = (lineno = 63, colno = 56, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "You have <span></span> characters remaining","el": "Έχετε <span></span> χαρακτήρες που απομένουν"},runtime.memberLookup((l_params),"lang"),true]));
frame.set("charRemaining", t_46, true);
if(frame.topLevel) {
context.setVariable("charRemaining", t_46);
}
if(frame.topLevel) {
context.addExport("charRemaining", t_46);
}
var t_47;
t_47 = (lineno = 64, colno = 56, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "You have entered <span></span> characters more","el": "Έχετε περάσει <span></span> χαρακτήρες περισσότερους"},runtime.memberLookup((l_params),"lang"),true]));
frame.set("charExceeding", t_47, true);
if(frame.topLevel) {
context.setVariable("charExceeding", t_47);
}
if(frame.topLevel) {
context.addExport("charExceeding", t_47);
}
var t_48;
t_48 = (lineno = 65, colno = 56, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "You have <span></span> words remaining","el": "Έχετε <span></span> λέξεις που απομένουν"},runtime.memberLookup((l_params),"lang"),true]));
frame.set("wordRemaining", t_48, true);
if(frame.topLevel) {
context.setVariable("wordRemaining", t_48);
}
if(frame.topLevel) {
context.addExport("wordRemaining", t_48);
}
var t_49;
t_49 = (lineno = 66, colno = 57, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "You have entered <span></span> words more","el": "Έχετε περάσει <span></span> λέξεις περισσότερες"},runtime.memberLookup((l_params),"lang"),true]));
frame.set("wordsExceeding", t_49, true);
if(frame.topLevel) {
context.setVariable("wordsExceeding", t_49);
}
if(frame.topLevel) {
context.addExport("wordsExceeding", t_49);
}
t_37 += "<div id=\"";
t_37 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "charactercountId"), env.opts.autoescape);
t_37 += "\" class=\"govcy-character-count\"";
if(runtime.contextOrFrameLookup(context, frame, "charactercountType") == "word") {
t_37 += "data-maxwords";
;
}
else {
t_37 += "data-maxchars";
;
}
t_37 += "=\"";
t_37 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "charactercountMax"), env.opts.autoescape);
t_37 += "\">\n                <div class=\"govcy-character-remaining-counter\">";
if(runtime.contextOrFrameLookup(context, frame, "charactercountType") == "word") {
t_37 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "wordRemaining")), env.opts.autoescape);
;
}
else {
t_37 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "charRemaining")), env.opts.autoescape);
;
}
t_37 += "</div>\n                <div class=\"govcy-character-more-counter\">";
if(runtime.contextOrFrameLookup(context, frame, "charactercountType") == "word") {
t_37 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "wordsExceeding")), env.opts.autoescape);
;
}
else {
t_37 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "charExceeding")), env.opts.autoescape);
;
}
t_37 += "</div>\n            </div>";
;
}
;
frame = frame.pop();
return new runtime.SafeString(t_37);
});
return macro_t_36;})()})])), env.opts.autoescape);
;
}
})})})})})})})})})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("textArea");
context.setVariable("textArea", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/textElement.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";var t_3;
t_3 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"type"),"p");
frame.set("textType", t_3, true);
if(frame.topLevel) {
context.setVariable("textType", t_3);
}
if(frame.topLevel) {
context.addExport("textType", t_3);
}
if(runtime.memberLookup((l_params),"text")) {
env.getTemplate("utilities/govcyUtilities.njk", false, "elements/textElement.njk", false, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
t_4.getExported(function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
if(Object.prototype.hasOwnProperty.call(t_4, "govcyLocalizeContent")) {
var t_7 = t_4.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_7);
if(Object.prototype.hasOwnProperty.call(t_4, "govcyLangAttribute")) {
var t_8 = t_4.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_8);
if(runtime.contextOrFrameLookup(context, frame, "textType") == "p" || runtime.contextOrFrameLookup(context, frame, "textType") == "h1" || runtime.contextOrFrameLookup(context, frame, "textType") == "h2" || runtime.contextOrFrameLookup(context, frame, "textType") == "h3" || runtime.contextOrFrameLookup(context, frame, "textType") == "h4") {
var t_9;
t_9 = runtime.contextOrFrameLookup(context, frame, "textType");
frame.set("textTag", t_9, true);
if(frame.topLevel) {
context.setVariable("textTag", t_9);
}
if(frame.topLevel) {
context.addExport("textTag", t_9);
}
t_2 += "<";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "textType"), env.opts.autoescape);
if(runtime.memberLookup((l_params),"id")) {
t_2 += " id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\"";
;
}
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " class=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
t_2 += "\"";
;
}
t_2 += runtime.suppressValue((lineno = 17, colno = 157, runtime.callWrap(t_8, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">\n            ";
t_2 += runtime.suppressValue((lineno = 18, colno = 35, runtime.callWrap(t_7, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\n        </";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "textType"), env.opts.autoescape);
t_2 += ">";
;
}
})});
}
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("textElement");
context.setVariable("textElement", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/textInput.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
var macro_t_1 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/textInput.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
t_3.getExported(function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLocalizeContent")) {
var t_6 = t_3.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_6);
if(Object.prototype.hasOwnProperty.call(t_3, "govcyLangAttribute")) {
var t_7 = t_3.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_7);
env.getTemplate("elements/formControl.njk", false, "elements/textInput.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "formControl")) {
var t_11 = t_8.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_11);
env.getTemplate("elements/hint.njk", false, "elements/textInput.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "hint")) {
var t_15 = t_12.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_15);
env.getTemplate("elements/label.njk", false, "elements/textInput.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "label")) {
var t_19 = t_16.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_19);
env.getTemplate("elements/errorMessage.njk", false, "elements/textInput.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
t_20.getExported(function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
if(Object.prototype.hasOwnProperty.call(t_20, "errorMessage")) {
var t_23 = t_20.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_23);
var t_24;
t_24 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isPageHeading"),false);
frame.set("isPageHeading", t_24, true);
if(frame.topLevel) {
context.setVariable("isPageHeading", t_24);
}
if(frame.topLevel) {
context.addExport("isPageHeading", t_24);
}
var t_25;
t_25 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isSpellcheck"),false);
frame.set("isSpellcheck", t_25, true);
if(frame.topLevel) {
context.setVariable("isSpellcheck", t_25);
}
if(frame.topLevel) {
context.addExport("isSpellcheck", t_25);
}
var t_26;
t_26 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"type"),"text");
frame.set("type", t_26, true);
if(frame.topLevel) {
context.setVariable("type", t_26);
}
if(frame.topLevel) {
context.addExport("type", t_26);
}
var t_27;
t_27 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"autocomplete"),"");
frame.set("autocomplete", t_27, true);
if(frame.topLevel) {
context.setVariable("autocomplete", t_27);
}
if(frame.topLevel) {
context.addExport("autocomplete", t_27);
}
if(runtime.memberLookup((l_params),"label") && runtime.memberLookup((l_params),"id")) {
var t_28;
t_28 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-hint"]);
frame.set("hintId", t_28, true);
if(frame.topLevel) {
context.setVariable("hintId", t_28);
}
if(frame.topLevel) {
context.addExport("hintId", t_28);
}
var t_29;
t_29 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-label"]);
frame.set("labelId", t_29, true);
if(frame.topLevel) {
context.setVariable("labelId", t_29);
}
if(frame.topLevel) {
context.addExport("labelId", t_29);
}
var t_30;
t_30 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-error"]);
frame.set("errorId", t_30, true);
if(frame.topLevel) {
context.setVariable("errorId", t_30);
}
if(frame.topLevel) {
context.addExport("errorId", t_30);
}
var t_31;
t_31 = env.getFilter("join").call(context, ["govcy-text-input-char_",runtime.memberLookup((l_params),"fixedWidth")]);
frame.set("fixedWidthClass", t_31, true);
if(frame.topLevel) {
context.setVariable("fixedWidthClass", t_31);
}
if(frame.topLevel) {
context.addExport("fixedWidthClass", t_31);
}
if(runtime.contextOrFrameLookup(context, frame, "type") == "text") {
var t_32;
t_32 = "type=\"text\"";
frame.set("inputType", t_32, true);
if(frame.topLevel) {
context.setVariable("inputType", t_32);
}
if(frame.topLevel) {
context.addExport("inputType", t_32);
}
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "email") {
var t_33;
t_33 = "type=\"email\"";
frame.set("inputType", t_33, true);
if(frame.topLevel) {
context.setVariable("inputType", t_33);
}
if(frame.topLevel) {
context.addExport("inputType", t_33);
}
var t_34;
t_34 = false;
frame.set("isSpellcheck", t_34, true);
if(frame.topLevel) {
context.setVariable("isSpellcheck", t_34);
}
if(frame.topLevel) {
context.addExport("isSpellcheck", t_34);
}
var t_35;
t_35 = "email";
frame.set("autocomplete", t_35, true);
if(frame.topLevel) {
context.setVariable("autocomplete", t_35);
}
if(frame.topLevel) {
context.addExport("autocomplete", t_35);
}
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "tel") {
var t_36;
t_36 = "type=\"tel\"";
frame.set("inputType", t_36, true);
if(frame.topLevel) {
context.setVariable("inputType", t_36);
}
if(frame.topLevel) {
context.addExport("inputType", t_36);
}
var t_37;
t_37 = false;
frame.set("isSpellcheck", t_37, true);
if(frame.topLevel) {
context.setVariable("isSpellcheck", t_37);
}
if(frame.topLevel) {
context.addExport("isSpellcheck", t_37);
}
var t_38;
t_38 = "tel";
frame.set("autocomplete", t_38, true);
if(frame.topLevel) {
context.setVariable("autocomplete", t_38);
}
if(frame.topLevel) {
context.addExport("autocomplete", t_38);
}
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "name") {
var t_39;
t_39 = "type=\"text\"";
frame.set("inputType", t_39, true);
if(frame.topLevel) {
context.setVariable("inputType", t_39);
}
if(frame.topLevel) {
context.addExport("inputType", t_39);
}
var t_40;
t_40 = false;
frame.set("isSpellcheck", t_40, true);
if(frame.topLevel) {
context.setVariable("isSpellcheck", t_40);
}
if(frame.topLevel) {
context.addExport("isSpellcheck", t_40);
}
var t_41;
t_41 = "name";
frame.set("autocomplete", t_41, true);
if(frame.topLevel) {
context.setVariable("autocomplete", t_41);
}
if(frame.topLevel) {
context.addExport("autocomplete", t_41);
}
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "numeric") {
var t_42;
t_42 = "type=\"text\" pattern=\"[0-9]*\" inputmode=\"numeric\"";
frame.set("inputType", t_42, true);
if(frame.topLevel) {
context.setVariable("inputType", t_42);
}
if(frame.topLevel) {
context.addExport("inputType", t_42);
}
var t_43;
t_43 = false;
frame.set("isSpellcheck", t_43, true);
if(frame.topLevel) {
context.setVariable("isSpellcheck", t_43);
}
if(frame.topLevel) {
context.addExport("isSpellcheck", t_43);
}
;
}
;
}
;
}
;
}
;
}
if(runtime.contextOrFrameLookup(context, frame, "isSpellcheck")) {
var t_44;
t_44 = "spellcheck=\"true\"";
frame.set("inputSpellcheck", t_44, true);
if(frame.topLevel) {
context.setVariable("inputSpellcheck", t_44);
}
if(frame.topLevel) {
context.addExport("inputSpellcheck", t_44);
}
;
}
else {
var t_45;
t_45 = "spellcheck=\"false\"";
frame.set("inputSpellcheck", t_45, true);
if(frame.topLevel) {
context.setVariable("inputSpellcheck", t_45);
}
if(frame.topLevel) {
context.addExport("inputSpellcheck", t_45);
}
;
}
if(runtime.contextOrFrameLookup(context, frame, "autocomplete")) {
var t_46;
t_46 = (function() {
var output = "";
output += "autocomplete=\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "autocomplete")), env.opts.autoescape);
output += "\"";
;
return output;
})()
;
frame.set("inputAutocomplete", t_46, true);
if(frame.topLevel) {
context.setVariable("inputAutocomplete", t_46);
}
if(frame.topLevel) {
context.addExport("inputAutocomplete", t_46);
}
;
}
else {
var t_47;
t_47 = "";
frame.set("inputAutocomplete", t_47, true);
if(frame.topLevel) {
context.setVariable("inputAutocomplete", t_47);
}
if(frame.topLevel) {
context.addExport("inputAutocomplete", t_47);
}
;
}
t_2 += runtime.suppressValue((lineno = 60, colno = 23, runtime.callWrap(t_11, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error")),"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_48 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_49 = "";t_49 += runtime.suppressValue((lineno = 62, colno = 21, runtime.callWrap(t_19, "label", context, [{"label": runtime.memberLookup((l_params),"label"),"id": runtime.contextOrFrameLookup(context, frame, "labelId"),"for": runtime.memberLookup((l_params),"id"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_50 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_51 = "";;
frame = frame.pop();
return new runtime.SafeString(t_51);
});
return macro_t_50;})()})])), env.opts.autoescape);
t_49 += runtime.suppressValue((lineno = 64, colno = 20, runtime.callWrap(t_15, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_52 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_53 = "";;
frame = frame.pop();
return new runtime.SafeString(t_53);
});
return macro_t_52;})()})])), env.opts.autoescape);
t_49 += runtime.suppressValue((lineno = 66, colno = 28, runtime.callWrap(t_23, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_54 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_55 = "";;
frame = frame.pop();
return new runtime.SafeString(t_55);
});
return macro_t_54;})()})])), env.opts.autoescape);
t_49 += "<input id=\"";
t_49 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_49 += "\"";
if(runtime.memberLookup((l_params),"name")) {
t_49 += " name=\"";
t_49 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_49 += "\"";
;
}
t_49 += " ";
t_49 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "inputType")), env.opts.autoescape);
t_49 += " ";
t_49 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "inputSpellcheck")), env.opts.autoescape);
t_49 += " ";
t_49 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "inputAutocomplete")), env.opts.autoescape);
t_49 += " class=\"govcy-text-input";
if(runtime.memberLookup((l_params),"fixedWidth")) {
t_49 += " ";
t_49 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fixedWidthClass"), env.opts.autoescape);
;
}
if(runtime.memberLookup((l_params),"error")) {
t_49 += " govcy-text-input-error";
;
}
t_49 += "\"";
if(runtime.memberLookup((l_params),"hint") || runtime.memberLookup((l_params),"error")) {
t_49 += " aria-describedby=\"";
if(runtime.memberLookup((l_params),"hint")) {
t_49 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hintId"), env.opts.autoescape);
t_49 += " ";
;
}
if(runtime.memberLookup((l_params),"error")) {
t_49 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "errorId"), env.opts.autoescape);
t_49 += " ";
;
}
t_49 += "\"";
;
}
t_49 += ">\n    ";
;
frame = frame.pop();
return new runtime.SafeString(t_49);
});
return macro_t_48;})()})])), env.opts.autoescape);
;
}
})})})})})})})})})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("textInput");
context.setVariable("textInput", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govcyElement.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = ["label","legend","hint","button","errorMessage","select","textElement","htmlElement","textInput","radios","checkboxes","fileInput","fileView","backLink","tag","table","summaryList","textArea","markdown","panel"];
frame.set("macroSimpleBlocks", t_1, true);
if(frame.topLevel) {
context.setVariable("macroSimpleBlocks", t_1);
}
if(frame.topLevel) {
context.addExport("macroSimpleBlocks", t_1);
}
var t_2;
t_2 = ["formControl","form","fieldset"];
frame.set("macroCallerBlocks", t_2, true);
if(frame.topLevel) {
context.setVariable("macroCallerBlocks", t_2);
}
if(frame.topLevel) {
context.addExport("macroCallerBlocks", t_2);
}
var macro_t_3 = runtime.makeMacro(
["component", "params"], 
[], 
function (l_component, l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("component", l_component);
frame.set("params", l_params);
var t_4 = "";frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "macroSimpleBlocks");
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("c", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
if(t_8 == l_component) {
env.getTemplate("elements/" + t_8 + ".njk", false, "govcyElement.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
frame.set("comp", t_9);
t_4 += runtime.suppressValue((lineno = 34, colno = 22, runtime.callWrap(runtime.memberLookup((t_9),t_8), "comp[\"c\"]", context, [l_params])), env.opts.autoescape);
})});
}
;
}
}
frame = frame.pop();
frame = frame.push();
var t_14 = runtime.contextOrFrameLookup(context, frame, "macroCallerBlocks");
if(t_14) {t_14 = runtime.fromIterator(t_14);
var t_13 = t_14.length;
for(var t_12=0; t_12 < t_14.length; t_12++) {
var t_15 = t_14[t_12];
frame.set("c", t_15);
frame.set("loop.index", t_12 + 1);
frame.set("loop.index0", t_12);
frame.set("loop.revindex", t_13 - t_12);
frame.set("loop.revindex0", t_13 - t_12 - 1);
frame.set("loop.first", t_12 === 0);
frame.set("loop.last", t_12 === t_13 - 1);
frame.set("loop.length", t_13);
if(t_15 == l_component) {
env.getTemplate("elements/" + t_15 + ".njk", false, "govcyElement.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
frame.set("compm", t_16);
t_4 += runtime.suppressValue((lineno = 41, colno = 29, runtime.callWrap(runtime.memberLookup((t_16),t_15), "compm[\"c\"]", context, [l_params,runtime.makeKeywordArgs({"caller": (function (){var macro_t_19 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_20 = "";t_20 += runtime.suppressValue((lineno = 42, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
;
frame = frame.pop();
return new runtime.SafeString(t_20);
});
return macro_t_19;})()})])), env.opts.autoescape);
})});
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_4);
});
context.addExport("govcyElement");
context.setVariable("govcyElement", macro_t_3);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

