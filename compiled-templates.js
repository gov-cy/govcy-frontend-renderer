(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["govcyUtilities.njk"] = (function() {
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["backLink.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "backLink.njk", false, function(t_4,t_3) {
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["button.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "button.njk", false, function(t_4,t_3) {
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["checkboxes.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "checkboxes.njk", false, function(t_4,t_3) {
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
env.getTemplate("./hint.njk", false, "checkboxes.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hint")) {
var t_11 = t_8.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_11);
env.getTemplate("./label.njk", false, "checkboxes.njk", false, function(t_13,t_12) {
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
output += "\r\n        <span class=\"govcy-visually-hidden-error\">";
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
output += "\r\n        <span class=\"govcy-visually-hidden-error\">";
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
t_2 += "<div class=\"govcy-checkbox\">\r\n    <input class=\"govcy-checkbox-input\" name=\"";
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
t_2 += ">\r\n    <label class=\"govcy-label\" for=\"";
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
t_2 += "\r\n</div>";
})})})})})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.setVariable("_checkboxItem", macro_t_1);
output += "\r\n";
output += "\r\n";
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
env.getTemplate("./fieldset.njk", false, "checkboxes.njk", false, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
t_28.getExported(function(t_30,t_28) {
if(t_30) { cb(t_30); return; }
if(Object.prototype.hasOwnProperty.call(t_28, "fieldset")) {
var t_31 = t_28.fieldset;
} else {
cb(new Error("cannot import 'fieldset'")); return;
}
context.setVariable("fieldset", t_31);
env.getTemplate("./hint.njk", false, "checkboxes.njk", false, function(t_33,t_32) {
if(t_33) { cb(t_33); return; }
t_32.getExported(function(t_34,t_32) {
if(t_34) { cb(t_34); return; }
if(Object.prototype.hasOwnProperty.call(t_32, "hint")) {
var t_35 = t_32.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_35);
env.getTemplate("./legend.njk", false, "checkboxes.njk", false, function(t_37,t_36) {
if(t_37) { cb(t_37); return; }
t_36.getExported(function(t_38,t_36) {
if(t_38) { cb(t_38); return; }
if(Object.prototype.hasOwnProperty.call(t_36, "legend")) {
var t_39 = t_36.legend;
} else {
cb(new Error("cannot import 'legend'")); return;
}
context.setVariable("legend", t_39);
env.getTemplate("./errorMessage.njk", false, "checkboxes.njk", false, function(t_41,t_40) {
if(t_41) { cb(t_41); return; }
t_40.getExported(function(t_42,t_40) {
if(t_42) { cb(t_42); return; }
if(Object.prototype.hasOwnProperty.call(t_40, "errorMessage")) {
var t_43 = t_40.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_43);
env.getTemplate("./formControl.njk", false, "checkboxes.njk", false, function(t_45,t_44) {
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
t_26 += runtime.suppressValue((lineno = 126, colno = 20, runtime.callWrap(t_31, "fieldset", context, [{"ariaDescribedby": runtime.contextOrFrameLookup(context, frame, "ariaDescribedBy"),"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_54 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_55 = "";t_55 += "\r\n        ";
t_55 += runtime.suppressValue((lineno = 127, colno = 22, runtime.callWrap(t_39, "legend", context, [{"legend": runtime.memberLookup((l_params),"legend"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_56 = runtime.makeMacro(
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
t_55 += "\r\n        ";
t_55 += runtime.suppressValue((lineno = 128, colno = 27, runtime.callWrap(t_47, "formControl", context, [{"isError": runtime.memberLookup((l_params),"error")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_58 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_59 = "";t_59 += "\r\n            ";
t_59 += runtime.suppressValue((lineno = 129, colno = 24, runtime.callWrap(t_35, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_60 = runtime.makeMacro(
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
t_59 += runtime.suppressValue((lineno = 131, colno = 32, runtime.callWrap(t_43, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_62 = runtime.makeMacro(
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
t_59 += "\r\n            ";
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
t_59 += runtime.suppressValue((lineno = 135, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_checkboxItem"), "_checkboxItem", context, [l_params,t_67,runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
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
t_55 += "\r\n    ";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["errorMessage.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "errorMessage.njk", false, function(t_4,t_3) {
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
t_2 += ">\r\n    <span class=\"govcy-visually-hidden-error\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hiddenError"), env.opts.autoescape);
t_2 += ":</span>";
t_2 += runtime.suppressValue((lineno = 16, colno = 94, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"message"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\r\n</p>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["fieldset.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "fieldset.njk", false, function(t_4,t_3) {
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
t_2 += ">\r\n";
t_2 += runtime.suppressValue((lineno = 16, colno = 9, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
if(runtime.memberLookup((l_params),"elements")) {
env.getTemplate("../govcyElement.njk", false, "fieldset.njk", false, function(t_9,t_8) {
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["fileInput.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "fileInput.njk", false, function(t_4,t_3) {
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
env.getTemplate("./formControl.njk", false, "fileInput.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "formControl")) {
var t_11 = t_8.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_11);
env.getTemplate("./hint.njk", false, "fileInput.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "hint")) {
var t_15 = t_12.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_15);
env.getTemplate("./label.njk", false, "fileInput.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "label")) {
var t_19 = t_16.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_19);
env.getTemplate("./errorMessage.njk", false, "fileInput.njk", false, function(t_21,t_20) {
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
t_2 += runtime.suppressValue((lineno = 26, colno = 23, runtime.callWrap(t_11, "formControl", context, [{"isError": runtime.memberLookup((l_params),"error"),"classes": runtime.memberLookup((l_params),"classe"),"lang": runtime.memberLookup((l_params),"langs")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_28 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_29 = "";t_29 += runtime.suppressValue((lineno = 28, colno = 21, runtime.callWrap(t_19, "label", context, [{"label": runtime.memberLookup((l_params),"label"),"id": runtime.contextOrFrameLookup(context, frame, "labelId"),"for": runtime.memberLookup((l_params),"id"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_30 = runtime.makeMacro(
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
t_29 += runtime.suppressValue((lineno = 30, colno = 20, runtime.callWrap(t_15, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_32 = runtime.makeMacro(
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
t_29 += runtime.suppressValue((lineno = 32, colno = 28, runtime.callWrap(t_23, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_34 = runtime.makeMacro(
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
t_29 += ">\r\n    ";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["fileView.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "fileView.njk", false, function(t_4,t_3) {
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
env.getTemplate("./formControl.njk", false, "fileView.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "formControl")) {
var t_11 = t_8.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_11);
env.getTemplate("./hint.njk", false, "fileView.njk", false, function(t_13,t_12) {
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
t_2 += "<div class=\"govcy-form\">\r\n    ";
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
t_19 += "</a>\r\n    ";
;
frame = frame.pop();
return new runtime.SafeString(t_19);
});
return macro_t_18;})()})])), env.opts.autoescape);
t_2 += "\r\n    </div>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["form.njk"] = (function() {
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
t_2 += "\" novalidate=\"\">\r\n    ";
t_2 += runtime.suppressValue((lineno = 13, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
if(runtime.memberLookup((l_params),"elements")) {
env.getTemplate("../govcyElement.njk", false, "form.njk", false, function(t_4,t_3) {
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
output += "\r\n";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["formControl.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "formControl.njk", false, function(t_4,t_3) {
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
t_2 += ">\r\n    ";
t_2 += runtime.suppressValue((lineno = 18, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
if(runtime.memberLookup((l_params),"elements")) {
env.getTemplate("../govcyElement.njk", false, "formControl.njk", false, function(t_10,t_9) {
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["hint.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "hint.njk", false, function(t_4,t_3) {
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["htmlElement.njk"] = (function() {
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
var t_2 = "";if(runtime.memberLookup((l_params),"text")) {
env.getTemplate("../utilities/govcyUtilities.njk", false, "htmlElement.njk", false, function(t_4,t_3) {
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["label.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "label.njk", false, function(t_4,t_3) {
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["legend.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "legend.njk", false, function(t_4,t_3) {
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["radios.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "radios.njk", false, function(t_4,t_3) {
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
env.getTemplate("./hint.njk", false, "radios.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "hint")) {
var t_11 = t_8.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_11);
env.getTemplate("./label.njk", false, "radios.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "label")) {
var t_15 = t_12.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_15);
l_isInline = env.getFilter("default").call(context, l_isInline,false);
frame.set("isInline", l_isInline, true);
if(frame.topLevel) {
context.setVariable("isInline", l_isInline);
}
if(frame.topLevel) {
context.addExport("isInline", l_isInline);
}
if(runtime.memberLookup((l_item),"altOrText")) {
var t_16;
t_16 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 32, colno = 47, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"altOrText"),l_lang])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 34, colno = 47, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "Or","el": "Ή"},l_lang])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 38, colno = 48, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"altAndText"),l_lang])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 40, colno = 48, runtime.callWrap(t_6, "govcyLocalizeContent", context, [{"en": "And","el": "Και"},l_lang])), env.opts.autoescape);
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
t_2 += "<p class=\"govcy-ml-3 govcy-mb-3";
if(l_isInline) {
t_2 += " govcy-d-sm-inline-block govcy-mr-3";
;
}
t_2 += "\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "orText"), env.opts.autoescape);
t_2 += "</p>";
t_15 = (function() {
var output = "";
output += "\r\n        <span class=\"govcy-visually-hidden-error\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "orText"), env.opts.autoescape);
output += ", </span>";
output += runtime.suppressValue((lineno = 54, colno = 96, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
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
t_2 += "<p class=\"govcy-ml-3 govcy-mb-3";
if(l_isInline) {
t_2 += " govcy-d-sm-inline-block govcy-mr-3";
;
}
t_2 += "\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "andText"), env.opts.autoescape);
t_2 += "</p>";
t_15 = (function() {
var output = "";
output += "\r\n        <span class=\"govcy-visually-hidden-error\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "andText"), env.opts.autoescape);
output += ", </span>";
output += runtime.suppressValue((lineno = 59, colno = 97, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 62, colno = 45, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
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
t_2 += "<div class=\"govcy-radio";
if(l_isInline) {
t_2 += " govcy-d-sm-inline-block";
;
}
t_2 += "\">\r\n    <input class=\"govcy-radio-input\" name=\"";
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
t_2 += ">\r\n    <label class=\"govcy-label\" for=\"";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "optionId"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, t_15), env.opts.autoescape);
t_2 += "</label>";
t_2 += runtime.suppressValue((lineno = 69, colno = 16, runtime.callWrap(t_11, "hint", context, [{"hint": runtime.memberLookup((l_item),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": l_lang},runtime.makeKeywordArgs({"caller": (function (){var macro_t_23 = runtime.makeMacro(
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
t_2 += "\r\n</div>";
})})})})})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.setVariable("_radioItem", macro_t_1);
output += "\r\n";
output += "\r\n";
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
var t_28;
t_28 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isInline"),false);
frame.set("isInline", t_28, true);
if(frame.topLevel) {
context.setVariable("isInline", t_28);
}
if(frame.topLevel) {
context.addExport("isInline", t_28);
}
if(runtime.memberLookup((l_params),"legend") && runtime.memberLookup((l_params),"id") && runtime.memberLookup((l_params),"name")) {
env.getTemplate("./fieldset.njk", false, "radios.njk", false, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
t_29.getExported(function(t_31,t_29) {
if(t_31) { cb(t_31); return; }
if(Object.prototype.hasOwnProperty.call(t_29, "fieldset")) {
var t_32 = t_29.fieldset;
} else {
cb(new Error("cannot import 'fieldset'")); return;
}
context.setVariable("fieldset", t_32);
env.getTemplate("./hint.njk", false, "radios.njk", false, function(t_34,t_33) {
if(t_34) { cb(t_34); return; }
t_33.getExported(function(t_35,t_33) {
if(t_35) { cb(t_35); return; }
if(Object.prototype.hasOwnProperty.call(t_33, "hint")) {
var t_36 = t_33.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_36);
env.getTemplate("./legend.njk", false, "radios.njk", false, function(t_38,t_37) {
if(t_38) { cb(t_38); return; }
t_37.getExported(function(t_39,t_37) {
if(t_39) { cb(t_39); return; }
if(Object.prototype.hasOwnProperty.call(t_37, "legend")) {
var t_40 = t_37.legend;
} else {
cb(new Error("cannot import 'legend'")); return;
}
context.setVariable("legend", t_40);
env.getTemplate("./errorMessage.njk", false, "radios.njk", false, function(t_42,t_41) {
if(t_42) { cb(t_42); return; }
t_41.getExported(function(t_43,t_41) {
if(t_43) { cb(t_43); return; }
if(Object.prototype.hasOwnProperty.call(t_41, "errorMessage")) {
var t_44 = t_41.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_44);
env.getTemplate("./formControl.njk", false, "radios.njk", false, function(t_46,t_45) {
if(t_46) { cb(t_46); return; }
t_45.getExported(function(t_47,t_45) {
if(t_47) { cb(t_47); return; }
if(Object.prototype.hasOwnProperty.call(t_45, "formControl")) {
var t_48 = t_45.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_48);
if(runtime.memberLookup((l_params),"hint")) {
var t_49;
t_49 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-hint"]);
frame.set("hintId", t_49, true);
if(frame.topLevel) {
context.setVariable("hintId", t_49);
}
if(frame.topLevel) {
context.addExport("hintId", t_49);
}
;
}
else {
var t_50;
t_50 = "";
frame.set("hintId", t_50, true);
if(frame.topLevel) {
context.setVariable("hintId", t_50);
}
if(frame.topLevel) {
context.addExport("hintId", t_50);
}
;
}
if(runtime.memberLookup((l_params),"error")) {
var t_51;
t_51 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-error"]);
frame.set("errorId", t_51, true);
if(frame.topLevel) {
context.setVariable("errorId", t_51);
}
if(frame.topLevel) {
context.addExport("errorId", t_51);
}
;
}
else {
var t_52;
t_52 = "";
frame.set("errorId", t_52, true);
if(frame.topLevel) {
context.setVariable("errorId", t_52);
}
if(frame.topLevel) {
context.addExport("errorId", t_52);
}
;
}
if(runtime.memberLookup((l_params),"error") || runtime.memberLookup((l_params),"hint")) {
var t_53;
t_53 = runtime.contextOrFrameLookup(context, frame, "hintId") + "" + " " + "" + runtime.contextOrFrameLookup(context, frame, "errorId");
frame.set("ariaDescribedBy", t_53, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_53);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_53);
}
;
}
else {
var t_54;
t_54 = "";
frame.set("ariaDescribedBy", t_54, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_54);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_54);
}
;
}
t_26 += runtime.suppressValue((lineno = 131, colno = 20, runtime.callWrap(t_32, "fieldset", context, [{"ariaDescribedby": runtime.contextOrFrameLookup(context, frame, "ariaDescribedBy"),"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_55 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_56 = "";t_56 += "\r\n        ";
t_56 += runtime.suppressValue((lineno = 132, colno = 22, runtime.callWrap(t_40, "legend", context, [{"legend": runtime.memberLookup((l_params),"legend"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_57 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_58 = "";;
frame = frame.pop();
return new runtime.SafeString(t_58);
});
return macro_t_57;})()})])), env.opts.autoescape);
t_56 += "\r\n        ";
t_56 += runtime.suppressValue((lineno = 133, colno = 27, runtime.callWrap(t_48, "formControl", context, [{"isError": runtime.memberLookup((l_params),"error")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_59 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_60 = "";t_60 += "\r\n            ";
t_60 += runtime.suppressValue((lineno = 134, colno = 24, runtime.callWrap(t_36, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_61 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_62 = "";;
frame = frame.pop();
return new runtime.SafeString(t_62);
});
return macro_t_61;})()})])), env.opts.autoescape);
t_60 += runtime.suppressValue((lineno = 136, colno = 32, runtime.callWrap(t_44, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_63 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_64 = "";;
frame = frame.pop();
return new runtime.SafeString(t_64);
});
return macro_t_63;})()})])), env.opts.autoescape);
t_60 += "\r\n            ";
frame = frame.push();
var t_67 = runtime.memberLookup((l_params),"items");
if(t_67) {t_67 = runtime.fromIterator(t_67);
var t_66 = t_67.length;
for(var t_65=0; t_65 < t_67.length; t_65++) {
var t_68 = t_67[t_65];
frame.set("item", t_68);
frame.set("loop.index", t_65 + 1);
frame.set("loop.index0", t_65);
frame.set("loop.revindex", t_66 - t_65);
frame.set("loop.revindex0", t_66 - t_65 - 1);
frame.set("loop.first", t_65 === 0);
frame.set("loop.last", t_65 === t_66 - 1);
frame.set("loop.length", t_66);
if(t_68) {
t_60 += runtime.suppressValue((lineno = 140, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_radioItem"), "_radioItem", context, [l_params,t_68,runtime.contextOrFrameLookup(context, frame, "isInline"),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = frame.pop();
return new runtime.SafeString(t_60);
});
return macro_t_59;})()})])), env.opts.autoescape);
t_56 += "\r\n    ";
;
frame = frame.pop();
return new runtime.SafeString(t_56);
});
return macro_t_55;})()})])), env.opts.autoescape);
})})})})})})})})})});
}
;
frame = callerFrame;
return new runtime.SafeString(t_26);
});
context.addExport("radios");
context.setVariable("radios", macro_t_25);
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["select.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\r\n";
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
env.getTemplate("../utilities/govcyUtilities.njk", false, "select.njk", false, function(t_5,t_4) {
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
env.getTemplate("./hint.njk", false, "select.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "hint")) {
var t_12 = t_9.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_12);
env.getTemplate("./label.njk", false, "select.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
t_13.getExported(function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
if(Object.prototype.hasOwnProperty.call(t_13, "label")) {
var t_16 = t_13.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_16);
env.getTemplate("./errorMessage.njk", false, "select.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
t_17.getExported(function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
if(Object.prototype.hasOwnProperty.call(t_17, "errorMessage")) {
var t_20 = t_17.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_20);
env.getTemplate("./formControl.njk", false, "select.njk", false, function(t_22,t_21) {
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
t_2 += runtime.suppressValue((lineno = 42, colno = 23, runtime.callWrap(t_24, "formControl", context, [{"isError": runtime.memberLookup((l_params),"error"),"classes": runtime.memberLookup((l_params),"classes")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_31 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_32 = "";t_32 += "\r\n        ";
t_32 += runtime.suppressValue((lineno = 43, colno = 21, runtime.callWrap(t_16, "label", context, [{"label": runtime.memberLookup((l_params),"label"),"id": runtime.contextOrFrameLookup(context, frame, "labelId"),"for": runtime.memberLookup((l_params),"id"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_33 = runtime.makeMacro(
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
t_32 += "\r\n        ";
t_32 += runtime.suppressValue((lineno = 44, colno = 20, runtime.callWrap(t_12, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_35 = runtime.makeMacro(
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
t_32 += runtime.suppressValue((lineno = 46, colno = 28, runtime.callWrap(t_20, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_37 = runtime.makeMacro(
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
t_32 += "\r\n        <select id=\"";
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
t_32 += runtime.suppressValue((lineno = 47, colno = 229, runtime.callWrap(t_8, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_32 += ">\r\n            ";
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
t_32 += runtime.suppressValue((lineno = 51, colno = 76, runtime.callWrap(t_7, "govcyLocalizeContent", context, [runtime.memberLookup((t_42),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_32 += "</option>";
;
}
;
}
}
frame = frame.pop();
t_32 += "</select>\r\n    ";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["table.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "table.njk", false, function(t_4,t_3) {
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
env.getTemplate("../govcyElement.njk", false, "table.njk", false, function(t_9,t_8) {
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
t_2 += "\r\n<table ";
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
t_2 += runtime.suppressValue((lineno = 72, colno = 297, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">";
if(runtime.memberLookup((l_params),"head")) {
t_2 += "\r\n    <thead>\r\n        <tr>";
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
t_2 += "\r\n            <th";
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, (lineno = 77, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_cellAttributes"), "_cellAttributes", context, [t_15]))), env.opts.autoescape);
t_2 += ">\r\n                ";
t_2 += runtime.suppressValue((lineno = 78, colno = 39, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((t_15),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\r\n            </th>";
;
}
}
frame = frame.pop();
t_2 += "\r\n        </tr>\r\n    </thead>";
;
}
t_2 += "\r\n    <tbody>";
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
t_2 += "\r\n        <tr>\r\n            ";
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
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, (lineno = 90, colno = 45, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_cellAttributes"), "_cellAttributes", context, [t_23]))), env.opts.autoescape);
t_2 += ">";
if(runtime.memberLookup((l_params),"responsiveType") == "vertical-headers") {
t_2 += "\r\n                <div class=\"govcy-d-md-none govcy-fw-bolder govcy-my-2\">";
t_2 += runtime.suppressValue((lineno = 92, colno = 95, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((l_params),"head")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0"))),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</div>";
;
}
t_2 += "\r\n                ";
t_2 += runtime.suppressValue((lineno = 94, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_cellElements"), "_cellElements", context, [runtime.memberLookup((t_23),"elements"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\r\n            </th>";
;
}
else {
t_2 += "\r\n            <td";
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, (lineno = 97, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_cellAttributes"), "_cellAttributes", context, [t_23]))), env.opts.autoescape);
t_2 += ">";
if(runtime.memberLookup((l_params),"responsiveType") == "vertical-headers") {
t_2 += "\r\n                <div class=\"govcy-d-md-none govcy-fw-bolder govcy-my-2\">";
t_2 += runtime.suppressValue((lineno = 99, colno = 95, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((l_params),"head")),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0"))),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</div>";
;
}
t_2 += "\r\n                ";
t_2 += runtime.suppressValue((lineno = 101, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_cellElements"), "_cellElements", context, [runtime.memberLookup((t_23),"elements"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\r\n            </td>";
;
}
;
}
}
frame = frame.pop();
t_2 += "\r\n        </tr>";
;
}
;
}
}
frame = frame.pop();
t_2 += "\r\n    </tbody>\r\n</table>\r\n";
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
t_27 += runtime.suppressValue((lineno = 125, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govcyElement"), "govcyElement", context, [runtime.memberLookup((t_31),"element"),runtime.contextOrFrameLookup(context, frame, "params"),runtime.makeKeywordArgs({"caller": (function (){var macro_t_34 = runtime.makeMacro(
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["tag.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "tag.njk", false, function(t_4,t_3) {
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["textElement.njk"] = (function() {
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
env.getTemplate("../utilities/govcyUtilities.njk", false, "textElement.njk", false, function(t_5,t_4) {
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
t_2 += ">\r\n            ";
t_2 += runtime.suppressValue((lineno = 18, colno = 35, runtime.callWrap(t_7, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\r\n        </";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["textInput.njk"] = (function() {
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
var t_2 = "";env.getTemplate("../utilities/govcyUtilities.njk", false, "textInput.njk", false, function(t_4,t_3) {
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
env.getTemplate("./formControl.njk", false, "textInput.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
t_8.getExported(function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
if(Object.prototype.hasOwnProperty.call(t_8, "formControl")) {
var t_11 = t_8.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_11);
env.getTemplate("./hint.njk", false, "textInput.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
t_12.getExported(function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
if(Object.prototype.hasOwnProperty.call(t_12, "hint")) {
var t_15 = t_12.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_15);
env.getTemplate("./label.njk", false, "textInput.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
if(Object.prototype.hasOwnProperty.call(t_16, "label")) {
var t_19 = t_16.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_19);
env.getTemplate("./errorMessage.njk", false, "textInput.njk", false, function(t_21,t_20) {
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
t_2 += runtime.suppressValue((lineno = 59, colno = 23, runtime.callWrap(t_11, "formControl", context, [{"isError": runtime.memberLookup((l_params),"error"),"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_48 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_49 = "";t_49 += runtime.suppressValue((lineno = 61, colno = 21, runtime.callWrap(t_19, "label", context, [{"label": runtime.memberLookup((l_params),"label"),"id": runtime.contextOrFrameLookup(context, frame, "labelId"),"for": runtime.memberLookup((l_params),"id"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_50 = runtime.makeMacro(
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
t_49 += runtime.suppressValue((lineno = 63, colno = 20, runtime.callWrap(t_15, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_52 = runtime.makeMacro(
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
t_49 += runtime.suppressValue((lineno = 65, colno = 28, runtime.callWrap(t_23, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_54 = runtime.makeMacro(
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
t_49 += ">\r\n    ";
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
t_1 = ["label","legend","hint","button","errorMessage","select","textElement","htmlElement","textInput","radios","checkboxes","fileInput","fileView","backLink","tag","table"];
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
env.getTemplate("./elements/" + t_8 + ".njk", false, "govcyElement.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
frame.set("comp", t_9);
t_4 += runtime.suppressValue((lineno = 33, colno = 22, runtime.callWrap(runtime.memberLookup((t_9),t_8), "comp[\"c\"]", context, [l_params])), env.opts.autoescape);
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
env.getTemplate("./elements/" + t_15 + ".njk", false, "govcyElement.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
t_16.getExported(function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
frame.set("compm", t_16);
t_4 += runtime.suppressValue((lineno = 40, colno = 29, runtime.callWrap(runtime.memberLookup((t_16),t_15), "compm[\"c\"]", context, [l_params,runtime.makeKeywordArgs({"caller": (function (){var macro_t_19 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_20 = "";t_20 += runtime.suppressValue((lineno = 41, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
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

