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
var macro_t_21 = runtime.makeMacro(
["key", "lang", "isHTML"], 
[], 
function (l_key, l_lang, l_isHTML, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("key", l_key);
frame.set("lang", l_lang);
frame.set("isHTML", l_isHTML);
var t_22 = "";var t_23;
t_23 = {"backLink_back": {"el": "Πίσω","en": "Back"},"common_or": {"el": "Ή","en": "Or"},"common_and": {"el": "Και","en": "And"},"common_entry": {"en": "Entry","el": "Καταχώρηση"},"common_entries": {"en": "Entries","el": "Καταχωρήσεις"},"dateInput_dayLabel": {"el": "Μέρα","en": "Day"},"dateInput_monthLabel": {"el": "Μήνας","en": "Month"},"dateInput_yearLabel": {"el": "Χρόνος","en": "Year"},"dateInput_monthValue1": {"en": "January","el": "Ιανουάριος"},"dateInput_monthValue2": {"en": "February","el": "Φεβρουάριος"},"dateInput_monthValue3": {"en": "March","el": "Μάρτιος"},"dateInput_monthValue4": {"en": "April","el": "Απρίλιος"},"dateInput_monthValue5": {"en": "May","el": "Μάϊος"},"dateInput_monthValue6": {"en": "June","el": "Ιούνιος"},"dateInput_monthValue7": {"en": "July","el": "Ιούλιος"},"dateInput_monthValue8": {"en": "August","el": "Αύγουστος"},"dateInput_monthValue9": {"en": "September","el": "Σεπτέμβριος"},"dateInput_monthValue10": {"en": "October","el": "Οκτώβριος"},"dateInput_monthValue11": {"en": "November","el": "Νοέμβριος"},"dateInput_monthValue12": {"en": "December","el": "Δεκέμβριος"},"errorMessage_hiddenError": {"en": "Error","el": "Σφάλμα"},"errorSummary_header": {"en": "There is a problem","el": "Υπάρχει πρόβλημα"},"fileView_view": {"en": "View","el": "Προβολή"},"fileView_delete": {"en": "Delete","el": "Διαγραφή"},"progressList_completedLabel": {"en": "Completed","el": "Ολοκληρώθηκε"},"progressList_notCompletedLabel": {"en": "Not completed","el": "Δεν ολοκληρώθηκε"},"progressList_stepLabel": {"en": "Step","el": "Βήμα"},"progressList_ofLabel": {"en": "of","el": "από"},"radios_conditionalLabel": {"en": "This option expands and has more questions,","el": "Αυτή η επιλογή επεκτείνεται και έχει περισσότερες ερωτήσεις,"},"stepByStepStatic_step": {"en": "Step","el": "Βήμα"},"taskList_withStatus": {"en": "with status ","el": "με κατάσταση "},"textArea_charRemaining": {"en": "You have <span></span> characters remaining","el": "Έχετε <span></span> χαρακτήρες που απομένουν"},"textArea_charExceeding": {"en": "You have entered <span></span> characters more","el": "Έχετε περάσει <span></span> χαρακτήρες περισσότερους"},"textArea_wordRemaining": {"en": "You have <span></span> words remaining","el": "Έχετε <span></span> λέξεις που απομένουν"},"textArea_wordsExceeding": {"en": "You have entered <span></span> words more","el": "Έχετε περάσει <span></span> λέξεις περισσότερες"},"userName_signOut": {"en": "Sign out","el": "Αποσύνδεση"},"userName_fromUser": {"en": "from user","el": "από το χρήστη"}};
frame.set("govcyContent", t_23, true);
if(frame.topLevel) {
context.setVariable("govcyContent", t_23);
}
if(frame.topLevel) {
context.addExport("govcyContent", t_23);
}
var t_24;
t_24 = env.getFilter("default").call(context, env.getFilter("default").call(context, l_lang,runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "globalData")),"site")),"lang")),"el");
frame.set("inLang", t_24, true);
if(frame.topLevel) {
context.setVariable("inLang", t_24);
}
if(frame.topLevel) {
context.addExport("inLang", t_24);
}
var t_25;
t_25 = env.getFilter("default").call(context, l_isHTML,false);
frame.set("inIsHTML", t_25, true);
if(frame.topLevel) {
context.setVariable("inIsHTML", t_25);
}
if(frame.topLevel) {
context.addExport("inIsHTML", t_25);
}
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "govcyContent")),l_key) && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "govcyContent")),l_key)),runtime.contextOrFrameLookup(context, frame, "inLang"))) {
if(runtime.contextOrFrameLookup(context, frame, "inIsHTML")) {
t_22 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "govcyContent")),l_key)),runtime.contextOrFrameLookup(context, frame, "inLang"))), env.opts.autoescape);
;
}
else {
t_22 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "govcyContent")),l_key)),runtime.contextOrFrameLookup(context, frame, "inLang")), env.opts.autoescape);
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_22);
});
context.addExport("govcyGetContent");
context.setVariable("govcyGetContent", macro_t_21);
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
if(Object.prototype.hasOwnProperty.call(t_3, "govcyGetContent")) {
var t_8 = t_3.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_8);
var t_9;
t_9 = (runtime.memberLookup((l_params),"text")?(lineno = 11, colno = 35, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"text"),runtime.memberLookup((l_params),"lang")])):(lineno = 11, colno = 98, runtime.callWrap(t_8, "govcyGetContent", context, ["backLink_back",runtime.memberLookup((l_params),"lang")])));
frame.set("text", t_9, true);
if(frame.topLevel) {
context.setVariable("text", t_9);
}
if(frame.topLevel) {
context.addExport("text", t_9);
}
var t_10;
t_10 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"href"),"javascript:history.back()");
frame.set("href", t_10, true);
if(frame.topLevel) {
context.setVariable("href", t_10);
}
if(frame.topLevel) {
context.addExport("href", t_10);
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
var t_2 = "";var t_3;
t_3 = (!env.getTest("defined").call(context, runtime.memberLookup((l_params),"value")) === true?[]:((env.getTest("iterable").call(context, runtime.memberLookup((l_params),"value")) === true?runtime.memberLookup((l_params),"value"):[runtime.memberLookup((l_params),"value")])));
frame.set("checkboxValues", t_3, true);
if(frame.topLevel) {
context.setVariable("checkboxValues", t_3);
}
if(frame.topLevel) {
context.addExport("checkboxValues", t_3);
}
env.getTemplate("utilities/govcyUtilities.njk", false, "elements/checkboxes.njk", false, function(t_5,t_4) {
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
if(Object.prototype.hasOwnProperty.call(t_4, "govcyGetContent")) {
var t_9 = t_4.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_9);
env.getTemplate("elements/hint.njk", false, "elements/checkboxes.njk", false, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
t_10.getExported(function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
if(Object.prototype.hasOwnProperty.call(t_10, "hint")) {
var t_13 = t_10.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_13);
env.getTemplate("elements/label.njk", false, "elements/checkboxes.njk", false, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
t_14.getExported(function(t_16,t_14) {
if(t_16) { cb(t_16); return; }
if(Object.prototype.hasOwnProperty.call(t_14, "label")) {
var t_17 = t_14.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_17);
if(runtime.memberLookup((l_item),"altOrText")) {
var t_18;
t_18 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 31, colno = 47, runtime.callWrap(t_7, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"altOrText"),l_lang])), env.opts.autoescape);
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
else {
var t_19;
t_19 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 33, colno = 42, runtime.callWrap(t_9, "govcyGetContent", context, ["common_or",l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("orText", t_19, true);
if(frame.topLevel) {
context.setVariable("orText", t_19);
}
if(frame.topLevel) {
context.addExport("orText", t_19);
}
;
}
if(runtime.memberLookup((l_item),"altAndText")) {
var t_20;
t_20 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 37, colno = 48, runtime.callWrap(t_7, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"altAndText"),l_lang])), env.opts.autoescape);
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
else {
var t_21;
t_21 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 39, colno = 43, runtime.callWrap(t_9, "govcyGetContent", context, ["common_and",l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("andText", t_21, true);
if(frame.topLevel) {
context.setVariable("andText", t_21);
}
if(frame.topLevel) {
context.addExport("andText", t_21);
}
;
}
var t_22;
t_22 = runtime.memberLookup((l_params),"id") + "" + "-option-" + "" + l_index;
frame.set("optionId", t_22, true);
if(frame.topLevel) {
context.setVariable("optionId", t_22);
}
if(frame.topLevel) {
context.addExport("optionId", t_22);
}
if(runtime.memberLookup((l_item),"hint")) {
var t_23;
t_23 = env.getFilter("join").call(context, [runtime.contextOrFrameLookup(context, frame, "optionId"),"-hint"]);
frame.set("hintId", t_23, true);
if(frame.topLevel) {
context.setVariable("hintId", t_23);
}
if(frame.topLevel) {
context.addExport("hintId", t_23);
}
;
}
else {
var t_24;
t_24 = "";
frame.set("hintId", t_24, true);
if(frame.topLevel) {
context.setVariable("hintId", t_24);
}
if(frame.topLevel) {
context.addExport("hintId", t_24);
}
;
}
if(runtime.memberLookup((l_item),"type") == "or") {
t_2 += "<p class=\"govcy-ml-3 govcy-mb-3\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "orText"), env.opts.autoescape);
t_2 += "</p>";
t_17 = (function() {
var output = "";
output += "\n        <span class=\"govcy-visually-hidden-error\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "orText"), env.opts.autoescape);
output += ", </span>";
output += runtime.suppressValue((lineno = 53, colno = 96, runtime.callWrap(t_7, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("label", t_17, true);
if(frame.topLevel) {
context.setVariable("label", t_17);
}
if(frame.topLevel) {
context.addExport("label", t_17);
}
;
}
else {
if(runtime.memberLookup((l_item),"type") == "and") {
t_2 += "<p class=\"govcy-ml-3 govcy-mb-3\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "andText"), env.opts.autoescape);
t_2 += "</p>";
t_17 = (function() {
var output = "";
output += "\n        <span class=\"govcy-visually-hidden-error\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "andText"), env.opts.autoescape);
output += ", </span>";
output += runtime.suppressValue((lineno = 58, colno = 97, runtime.callWrap(t_7, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("label", t_17, true);
if(frame.topLevel) {
context.setVariable("label", t_17);
}
if(frame.topLevel) {
context.addExport("label", t_17);
}
;
}
else {
t_17 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 61, colno = 45, runtime.callWrap(t_7, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("label", t_17, true);
if(frame.topLevel) {
context.setVariable("label", t_17);
}
if(frame.topLevel) {
context.addExport("label", t_17);
}
;
}
;
}
t_2 += "<div class=\"govcy-checkbox\">\n    <input class=\"govcy-checkbox-input\" name=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_2 += "\"";
if(runtime.inOperator(runtime.memberLookup((l_item),"value"),runtime.contextOrFrameLookup(context, frame, "checkboxValues"))) {
t_2 += " checked";
;
}
t_2 += " value=\"";
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
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, t_17), env.opts.autoescape);
t_2 += "</label>";
t_2 += runtime.suppressValue((lineno = 68, colno = 16, runtime.callWrap(t_13, "hint", context, [{"hint": runtime.memberLookup((l_item),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": l_lang},runtime.makeKeywordArgs({"caller": (function (){var macro_t_25 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_26 = "";;
frame = frame.pop();
return new runtime.SafeString(t_26);
});
return macro_t_25;})()})])), env.opts.autoescape);
t_2 += "\n</div>";
})})})})})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.setVariable("_checkboxItem", macro_t_1);
output += "\n";
output += "\n";
var macro_t_27 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_28 = "";var t_29;
t_29 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isPageHeading"),false);
frame.set("isPageHeading", t_29, true);
if(frame.topLevel) {
context.setVariable("isPageHeading", t_29);
}
if(frame.topLevel) {
context.addExport("isPageHeading", t_29);
}
if(runtime.memberLookup((l_params),"legend") && runtime.memberLookup((l_params),"id") && runtime.memberLookup((l_params),"name")) {
env.getTemplate("elements/fieldset.njk", false, "elements/checkboxes.njk", false, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
t_30.getExported(function(t_32,t_30) {
if(t_32) { cb(t_32); return; }
if(Object.prototype.hasOwnProperty.call(t_30, "fieldset")) {
var t_33 = t_30.fieldset;
} else {
cb(new Error("cannot import 'fieldset'")); return;
}
context.setVariable("fieldset", t_33);
env.getTemplate("elements/hint.njk", false, "elements/checkboxes.njk", false, function(t_35,t_34) {
if(t_35) { cb(t_35); return; }
t_34.getExported(function(t_36,t_34) {
if(t_36) { cb(t_36); return; }
if(Object.prototype.hasOwnProperty.call(t_34, "hint")) {
var t_37 = t_34.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_37);
env.getTemplate("elements/legend.njk", false, "elements/checkboxes.njk", false, function(t_39,t_38) {
if(t_39) { cb(t_39); return; }
t_38.getExported(function(t_40,t_38) {
if(t_40) { cb(t_40); return; }
if(Object.prototype.hasOwnProperty.call(t_38, "legend")) {
var t_41 = t_38.legend;
} else {
cb(new Error("cannot import 'legend'")); return;
}
context.setVariable("legend", t_41);
env.getTemplate("elements/errorMessage.njk", false, "elements/checkboxes.njk", false, function(t_43,t_42) {
if(t_43) { cb(t_43); return; }
t_42.getExported(function(t_44,t_42) {
if(t_44) { cb(t_44); return; }
if(Object.prototype.hasOwnProperty.call(t_42, "errorMessage")) {
var t_45 = t_42.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_45);
env.getTemplate("elements/formControl.njk", false, "elements/checkboxes.njk", false, function(t_47,t_46) {
if(t_47) { cb(t_47); return; }
t_46.getExported(function(t_48,t_46) {
if(t_48) { cb(t_48); return; }
if(Object.prototype.hasOwnProperty.call(t_46, "formControl")) {
var t_49 = t_46.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_49);
if(runtime.memberLookup((l_params),"hint")) {
var t_50;
t_50 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-hint"]);
frame.set("hintId", t_50, true);
if(frame.topLevel) {
context.setVariable("hintId", t_50);
}
if(frame.topLevel) {
context.addExport("hintId", t_50);
}
;
}
else {
var t_51;
t_51 = "";
frame.set("hintId", t_51, true);
if(frame.topLevel) {
context.setVariable("hintId", t_51);
}
if(frame.topLevel) {
context.addExport("hintId", t_51);
}
;
}
if(runtime.memberLookup((l_params),"error")) {
var t_52;
t_52 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-error"]);
frame.set("errorId", t_52, true);
if(frame.topLevel) {
context.setVariable("errorId", t_52);
}
if(frame.topLevel) {
context.addExport("errorId", t_52);
}
;
}
else {
var t_53;
t_53 = "";
frame.set("errorId", t_53, true);
if(frame.topLevel) {
context.setVariable("errorId", t_53);
}
if(frame.topLevel) {
context.addExport("errorId", t_53);
}
;
}
if(runtime.memberLookup((l_params),"error") || runtime.memberLookup((l_params),"hint")) {
var t_54;
t_54 = runtime.contextOrFrameLookup(context, frame, "hintId") + "" + " " + "" + runtime.contextOrFrameLookup(context, frame, "errorId");
frame.set("ariaDescribedBy", t_54, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_54);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_54);
}
;
}
else {
var t_55;
t_55 = "";
frame.set("ariaDescribedBy", t_55, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_55);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_55);
}
;
}
t_28 += runtime.suppressValue((lineno = 135, colno = 20, runtime.callWrap(t_33, "fieldset", context, [{"ariaDescribedby": runtime.contextOrFrameLookup(context, frame, "ariaDescribedBy"),"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_56 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_57 = "";t_57 += "\n        ";
t_57 += runtime.suppressValue((lineno = 136, colno = 22, runtime.callWrap(t_41, "legend", context, [{"legend": runtime.memberLookup((l_params),"legend"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_58 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_59 = "";;
frame = frame.pop();
return new runtime.SafeString(t_59);
});
return macro_t_58;})()})])), env.opts.autoescape);
env.getTemplate("utilities/govcyUtilities.njk", false, "elements/checkboxes.njk", false, function(t_61,t_60) {
if(t_61) { cb(t_61); return; }
t_60.getExported(function(t_62,t_60) {
if(t_62) { cb(t_62); return; }
if(Object.prototype.hasOwnProperty.call(t_60, "govcyElementsFromArray")) {
var t_63 = t_60.govcyElementsFromArray;
} else {
cb(new Error("cannot import 'govcyElementsFromArray'")); return;
}
frame.set("govcyElementsFromArray", t_63);
t_57 += runtime.suppressValue((lineno = 140, colno = 33, runtime.callWrap(t_63, "govcyElementsFromArray", context, [runtime.memberLookup((l_params),"elements"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_57 += "\n        ";
t_57 += runtime.suppressValue((lineno = 141, colno = 27, runtime.callWrap(t_49, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error"))},runtime.makeKeywordArgs({"caller": (function (){var macro_t_64 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_65 = "";t_65 += "\n            ";
t_65 += runtime.suppressValue((lineno = 142, colno = 24, runtime.callWrap(t_37, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_66 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_67 = "";;
frame = frame.pop();
return new runtime.SafeString(t_67);
});
return macro_t_66;})()})])), env.opts.autoescape);
t_65 += runtime.suppressValue((lineno = 144, colno = 32, runtime.callWrap(t_45, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_68 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_69 = "";;
frame = frame.pop();
return new runtime.SafeString(t_69);
});
return macro_t_68;})()})])), env.opts.autoescape);
t_65 += "\n            ";
frame = frame.push();
var t_72 = runtime.memberLookup((l_params),"items");
if(t_72) {t_72 = runtime.fromIterator(t_72);
var t_71 = t_72.length;
for(var t_70=0; t_70 < t_72.length; t_70++) {
var t_73 = t_72[t_70];
frame.set("item", t_73);
frame.set("loop.index", t_70 + 1);
frame.set("loop.index0", t_70);
frame.set("loop.revindex", t_71 - t_70);
frame.set("loop.revindex0", t_71 - t_70 - 1);
frame.set("loop.first", t_70 === 0);
frame.set("loop.last", t_70 === t_71 - 1);
frame.set("loop.length", t_71);
if(t_73) {
t_65 += runtime.suppressValue((lineno = 148, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_checkboxItem"), "_checkboxItem", context, [l_params,t_73,runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = frame.pop();
return new runtime.SafeString(t_65);
});
return macro_t_64;})()})])), env.opts.autoescape);
t_57 += "\n    ";
})});
frame = frame.pop();
return new runtime.SafeString(t_57);
});
return macro_t_56;})()})])), env.opts.autoescape);
})})})})})})})})})});
}
;
frame = callerFrame;
return new runtime.SafeString(t_28);
});
context.addExport("checkboxes");
context.setVariable("checkboxes", macro_t_27);
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/dateInput.njk"] = (function() {
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
var t_4;
t_4 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"variant"),"mobile");
frame.set("variant", t_4, true);
if(frame.topLevel) {
context.setVariable("variant", t_4);
}
if(frame.topLevel) {
context.addExport("variant", t_4);
}
if(runtime.memberLookup((l_params),"legend") && runtime.memberLookup((l_params),"id") && runtime.memberLookup((l_params),"name")) {
env.getTemplate("utilities/govcyUtilities.njk", false, "elements/dateInput.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
t_5.getExported(function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
if(Object.prototype.hasOwnProperty.call(t_5, "govcyLocalizeContent")) {
var t_8 = t_5.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_8);
if(Object.prototype.hasOwnProperty.call(t_5, "govcyLangAttribute")) {
var t_9 = t_5.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_9);
if(Object.prototype.hasOwnProperty.call(t_5, "govcyGetContent")) {
var t_10 = t_5.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_10);
env.getTemplate("elements/fieldset.njk", false, "elements/dateInput.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
t_11.getExported(function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
if(Object.prototype.hasOwnProperty.call(t_11, "fieldset")) {
var t_14 = t_11.fieldset;
} else {
cb(new Error("cannot import 'fieldset'")); return;
}
context.setVariable("fieldset", t_14);
env.getTemplate("elements/hint.njk", false, "elements/dateInput.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
t_15.getExported(function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
if(Object.prototype.hasOwnProperty.call(t_15, "hint")) {
var t_18 = t_15.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_18);
env.getTemplate("elements/legend.njk", false, "elements/dateInput.njk", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
t_19.getExported(function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
if(Object.prototype.hasOwnProperty.call(t_19, "legend")) {
var t_22 = t_19.legend;
} else {
cb(new Error("cannot import 'legend'")); return;
}
context.setVariable("legend", t_22);
env.getTemplate("elements/errorMessage.njk", false, "elements/dateInput.njk", false, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
t_23.getExported(function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
if(Object.prototype.hasOwnProperty.call(t_23, "errorMessage")) {
var t_26 = t_23.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_26);
env.getTemplate("elements/formControl.njk", false, "elements/dateInput.njk", false, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
t_27.getExported(function(t_29,t_27) {
if(t_29) { cb(t_29); return; }
if(Object.prototype.hasOwnProperty.call(t_27, "formControl")) {
var t_30 = t_27.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_30);
var t_31;
t_31 = (lineno = 35, colno = 38, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_dayLabel",runtime.memberLookup((l_params),"lang")]));
frame.set("dayLabel", t_31, true);
if(frame.topLevel) {
context.setVariable("dayLabel", t_31);
}
if(frame.topLevel) {
context.addExport("dayLabel", t_31);
}
var t_32;
t_32 = (lineno = 36, colno = 40, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthLabel",runtime.memberLookup((l_params),"lang")]));
frame.set("monthLabel", t_32, true);
if(frame.topLevel) {
context.setVariable("monthLabel", t_32);
}
if(frame.topLevel) {
context.addExport("monthLabel", t_32);
}
var t_33;
t_33 = (lineno = 37, colno = 39, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_yearLabel",runtime.memberLookup((l_params),"lang")]));
frame.set("yearLabel", t_33, true);
if(frame.topLevel) {
context.setVariable("yearLabel", t_33);
}
if(frame.topLevel) {
context.addExport("yearLabel", t_33);
}
var t_34;
t_34 = (lineno = 38, colno = 41, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthValue1",runtime.memberLookup((l_params),"lang")]));
frame.set("monthValue1", t_34, true);
if(frame.topLevel) {
context.setVariable("monthValue1", t_34);
}
if(frame.topLevel) {
context.addExport("monthValue1", t_34);
}
var t_35;
t_35 = (lineno = 39, colno = 41, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthValue2",runtime.memberLookup((l_params),"lang")]));
frame.set("monthValue2", t_35, true);
if(frame.topLevel) {
context.setVariable("monthValue2", t_35);
}
if(frame.topLevel) {
context.addExport("monthValue2", t_35);
}
var t_36;
t_36 = (lineno = 40, colno = 41, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthValue3",runtime.memberLookup((l_params),"lang")]));
frame.set("monthValue3", t_36, true);
if(frame.topLevel) {
context.setVariable("monthValue3", t_36);
}
if(frame.topLevel) {
context.addExport("monthValue3", t_36);
}
var t_37;
t_37 = (lineno = 41, colno = 41, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthValue4",runtime.memberLookup((l_params),"lang")]));
frame.set("monthValue4", t_37, true);
if(frame.topLevel) {
context.setVariable("monthValue4", t_37);
}
if(frame.topLevel) {
context.addExport("monthValue4", t_37);
}
var t_38;
t_38 = (lineno = 42, colno = 41, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthValue5",runtime.memberLookup((l_params),"lang")]));
frame.set("monthValue5", t_38, true);
if(frame.topLevel) {
context.setVariable("monthValue5", t_38);
}
if(frame.topLevel) {
context.addExport("monthValue5", t_38);
}
var t_39;
t_39 = (lineno = 43, colno = 41, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthValue6",runtime.memberLookup((l_params),"lang")]));
frame.set("monthValue6", t_39, true);
if(frame.topLevel) {
context.setVariable("monthValue6", t_39);
}
if(frame.topLevel) {
context.addExport("monthValue6", t_39);
}
var t_40;
t_40 = (lineno = 44, colno = 41, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthValue7",runtime.memberLookup((l_params),"lang")]));
frame.set("monthValue7", t_40, true);
if(frame.topLevel) {
context.setVariable("monthValue7", t_40);
}
if(frame.topLevel) {
context.addExport("monthValue7", t_40);
}
var t_41;
t_41 = (lineno = 45, colno = 41, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthValue8",runtime.memberLookup((l_params),"lang")]));
frame.set("monthValue8", t_41, true);
if(frame.topLevel) {
context.setVariable("monthValue8", t_41);
}
if(frame.topLevel) {
context.addExport("monthValue8", t_41);
}
var t_42;
t_42 = (lineno = 46, colno = 41, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthValue9",runtime.memberLookup((l_params),"lang")]));
frame.set("monthValue9", t_42, true);
if(frame.topLevel) {
context.setVariable("monthValue9", t_42);
}
if(frame.topLevel) {
context.addExport("monthValue9", t_42);
}
var t_43;
t_43 = (lineno = 47, colno = 42, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthValue10",runtime.memberLookup((l_params),"lang")]));
frame.set("monthValue10", t_43, true);
if(frame.topLevel) {
context.setVariable("monthValue10", t_43);
}
if(frame.topLevel) {
context.addExport("monthValue10", t_43);
}
var t_44;
t_44 = (lineno = 48, colno = 42, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthValue11",runtime.memberLookup((l_params),"lang")]));
frame.set("monthValue11", t_44, true);
if(frame.topLevel) {
context.setVariable("monthValue11", t_44);
}
if(frame.topLevel) {
context.addExport("monthValue11", t_44);
}
var t_45;
t_45 = (lineno = 49, colno = 42, runtime.callWrap(t_10, "govcyGetContent", context, ["dateInput_monthValue12",runtime.memberLookup((l_params),"lang")]));
frame.set("monthValue12", t_45, true);
if(frame.topLevel) {
context.setVariable("monthValue12", t_45);
}
if(frame.topLevel) {
context.addExport("monthValue12", t_45);
}
if(runtime.memberLookup((l_params),"hint")) {
var t_46;
t_46 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-hint"]);
frame.set("hintId", t_46, true);
if(frame.topLevel) {
context.setVariable("hintId", t_46);
}
if(frame.topLevel) {
context.addExport("hintId", t_46);
}
;
}
else {
var t_47;
t_47 = "";
frame.set("hintId", t_47, true);
if(frame.topLevel) {
context.setVariable("hintId", t_47);
}
if(frame.topLevel) {
context.addExport("hintId", t_47);
}
;
}
if(runtime.memberLookup((l_params),"error")) {
var t_48;
t_48 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-error"]);
frame.set("errorId", t_48, true);
if(frame.topLevel) {
context.setVariable("errorId", t_48);
}
if(frame.topLevel) {
context.addExport("errorId", t_48);
}
;
}
else {
var t_49;
t_49 = "";
frame.set("errorId", t_49, true);
if(frame.topLevel) {
context.setVariable("errorId", t_49);
}
if(frame.topLevel) {
context.addExport("errorId", t_49);
}
;
}
if(runtime.memberLookup((l_params),"error") || runtime.memberLookup((l_params),"hint")) {
var t_50;
t_50 = runtime.contextOrFrameLookup(context, frame, "hintId") + "" + " " + "" + runtime.contextOrFrameLookup(context, frame, "errorId");
frame.set("ariaDescribedBy", t_50, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_50);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_50);
}
;
}
else {
var t_51;
t_51 = "";
frame.set("ariaDescribedBy", t_51, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_51);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_51);
}
;
}
t_2 += runtime.suppressValue((lineno = 68, colno = 20, runtime.callWrap(t_14, "fieldset", context, [{"ariaDescribedby": runtime.contextOrFrameLookup(context, frame, "ariaDescribedBy"),"classes": runtime.memberLookup((l_params),"classes"),"ariaRole": "group","lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_52 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_53 = "";t_53 += "\n        ";
t_53 += runtime.suppressValue((lineno = 69, colno = 22, runtime.callWrap(t_22, "legend", context, [{"legend": runtime.memberLookup((l_params),"legend"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_54 = runtime.makeMacro(
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
t_53 += "\n        ";
t_53 += runtime.suppressValue((lineno = 70, colno = 27, runtime.callWrap(t_30, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error"))},runtime.makeKeywordArgs({"caller": (function (){var macro_t_56 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_57 = "";t_57 += "\n            ";
t_57 += runtime.suppressValue((lineno = 71, colno = 24, runtime.callWrap(t_18, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_58 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_59 = "";;
frame = frame.pop();
return new runtime.SafeString(t_59);
});
return macro_t_58;})()})])), env.opts.autoescape);
t_57 += runtime.suppressValue((lineno = 73, colno = 32, runtime.callWrap(t_26, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_60 = runtime.makeMacro(
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
t_57 += "<div class=\"govcy-d-flex govcy-flex-wrap\"";
t_57 += runtime.suppressValue((lineno = 75, colno = 74, runtime.callWrap(t_9, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_57 += ">    \n                <div class=\"govcy-d-block govcy-mr-3\">\n                    <label class=\"govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2\" for=\"";
t_57 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_57 += "_day\">";
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "dayLabel"), env.opts.autoescape);
t_57 += "</label>\n                    <input id=\"";
t_57 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_57 += "_day\" name=\"";
t_57 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_57 += "_day\"";
if(env.getTest("defined").call(context, runtime.memberLookup((l_params),"dayValue")) === true) {
t_57 += " value=\"";
t_57 += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((l_params),"dayValue"),""), env.opts.autoescape);
t_57 += "\"";
;
}
t_57 += " class=\"govcy-text-input govcy-text-input-char_3";
if(runtime.memberLookup((l_params),"hasDayError")) {
t_57 += " govcy-text-input-error";
;
}
t_57 += "\" maxlength=\"2\" type=\"text\" pattern=\"[0-9]*\" inputmode=\"numeric\"";
if(runtime.memberLookup((l_params),"isBirthday")) {
t_57 += " autocomplete=\"bday-day\"";
;
}
t_57 += ">\n                </div>\n                <div class=\"govcy-d-block govcy-mr-3\">\n                    <label class=\"govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2\" for=\"";
t_57 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_57 += "_month\">";
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthLabel"), env.opts.autoescape);
t_57 += "</label>\n                    <select id=\"";
t_57 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_57 += "_month\" name=\"";
t_57 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_57 += "_month\" class=\"govcy-select";
if(runtime.memberLookup((l_params),"hasMonthError")) {
t_57 += " govcy-select-error";
;
}
t_57 += "\"";
if(runtime.memberLookup((l_params),"isBirthday")) {
t_57 += " autocomplete=\"bday-month\"";
;
}
t_57 += ">\n                        <option value=\"\"></option>\n                        <option value=\"1\"";
if(runtime.memberLookup((l_params),"monthValue") == "1") {
t_57 += " selected";
;
}
t_57 += ">";
if(runtime.contextOrFrameLookup(context, frame, "variant") == "mobile") {
t_57 += "1";
;
}
else {
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthValue1"), env.opts.autoescape);
;
}
t_57 += "</option>\n                        <option value=\"2\"";
if(runtime.memberLookup((l_params),"monthValue") == "2") {
t_57 += " selected";
;
}
t_57 += ">";
if(runtime.contextOrFrameLookup(context, frame, "variant") == "mobile") {
t_57 += "2";
;
}
else {
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthValue2"), env.opts.autoescape);
;
}
t_57 += "</option>\n                        <option value=\"3\"";
if(runtime.memberLookup((l_params),"monthValue") == "3") {
t_57 += " selected";
;
}
t_57 += ">";
if(runtime.contextOrFrameLookup(context, frame, "variant") == "mobile") {
t_57 += "3";
;
}
else {
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthValue3"), env.opts.autoescape);
;
}
t_57 += "</option>\n                        <option value=\"4\"";
if(runtime.memberLookup((l_params),"monthValue") == "4") {
t_57 += " selected";
;
}
t_57 += ">";
if(runtime.contextOrFrameLookup(context, frame, "variant") == "mobile") {
t_57 += "4";
;
}
else {
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthValue4"), env.opts.autoescape);
;
}
t_57 += "</option>\n                        <option value=\"5\"";
if(runtime.memberLookup((l_params),"monthValue") == "5") {
t_57 += " selected";
;
}
t_57 += ">";
if(runtime.contextOrFrameLookup(context, frame, "variant") == "mobile") {
t_57 += "5";
;
}
else {
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthValue5"), env.opts.autoescape);
;
}
t_57 += "</option>\n                        <option value=\"6\"";
if(runtime.memberLookup((l_params),"monthValue") == "6") {
t_57 += " selected";
;
}
t_57 += ">";
if(runtime.contextOrFrameLookup(context, frame, "variant") == "mobile") {
t_57 += "6";
;
}
else {
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthValue6"), env.opts.autoescape);
;
}
t_57 += "</option>\n                        <option value=\"7\"";
if(runtime.memberLookup((l_params),"monthValue") == "7") {
t_57 += " selected";
;
}
t_57 += ">";
if(runtime.contextOrFrameLookup(context, frame, "variant") == "mobile") {
t_57 += "7";
;
}
else {
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthValue7"), env.opts.autoescape);
;
}
t_57 += "</option>\n                        <option value=\"8\"";
if(runtime.memberLookup((l_params),"monthValue") == "8") {
t_57 += " selected";
;
}
t_57 += ">";
if(runtime.contextOrFrameLookup(context, frame, "variant") == "mobile") {
t_57 += "8";
;
}
else {
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthValue8"), env.opts.autoescape);
;
}
t_57 += "</option>\n                        <option value=\"9\"";
if(runtime.memberLookup((l_params),"monthValue") == "9") {
t_57 += " selected";
;
}
t_57 += ">";
if(runtime.contextOrFrameLookup(context, frame, "variant") == "mobile") {
t_57 += "9";
;
}
else {
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthValue9"), env.opts.autoescape);
;
}
t_57 += "</option>\n                        <option value=\"10\"";
if(runtime.memberLookup((l_params),"monthValue") == "10") {
t_57 += " selected";
;
}
t_57 += ">";
if(runtime.contextOrFrameLookup(context, frame, "variant") == "mobile") {
t_57 += "10";
;
}
else {
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthValue10"), env.opts.autoescape);
;
}
t_57 += "</option>\n                        <option value=\"11\"";
if(runtime.memberLookup((l_params),"monthValue") == "11") {
t_57 += " selected";
;
}
t_57 += ">";
if(runtime.contextOrFrameLookup(context, frame, "variant") == "mobile") {
t_57 += "11";
;
}
else {
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthValue11"), env.opts.autoescape);
;
}
t_57 += "</option>\n                        <option value=\"12\"";
if(runtime.memberLookup((l_params),"monthValue") == "12") {
t_57 += " selected";
;
}
t_57 += ">";
if(runtime.contextOrFrameLookup(context, frame, "variant") == "mobile") {
t_57 += "12";
;
}
else {
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "monthValue12"), env.opts.autoescape);
;
}
t_57 += "</option>\n                    </select>\n                </div>\n                <div class=\"govcy-d-block govcy-mr-3\">\n                    <label class=\"govcy-label govcy-mb-1 govcy-fw-normal govcy-mb-2\" for=\"";
t_57 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_57 += "_year\">";
t_57 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "yearLabel"), env.opts.autoescape);
t_57 += "</label>\n                    <input id=\"";
t_57 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_57 += "_year\" name=\"";
t_57 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_57 += "_year\"";
if(env.getTest("defined").call(context, runtime.memberLookup((l_params),"yearValue")) === true) {
t_57 += " value=\"";
t_57 += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((l_params),"yearValue"),""), env.opts.autoescape);
t_57 += "\"";
;
}
t_57 += " class=\"govcy-text-input govcy-text-input-char_6";
if(runtime.memberLookup((l_params),"hasYearError")) {
t_57 += " govcy-text-input-error";
;
}
t_57 += "\" maxlength=\"4\" type=\"text\" pattern=\"[0-9]*\" inputmode=\"numeric\"";
if(runtime.memberLookup((l_params),"isBirthday")) {
t_57 += " autocomplete=\"bday-year\"";
;
}
t_57 += ">\n                </div>\n            </div>\n        ";
;
frame = frame.pop();
return new runtime.SafeString(t_57);
});
return macro_t_56;})()})])), env.opts.autoescape);
t_53 += "\n    ";
;
frame = frame.pop();
return new runtime.SafeString(t_53);
});
return macro_t_52;})()})])), env.opts.autoescape);
})})})})})})})})})})})});
}
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("dateInput");
context.setVariable("dateInput", macro_t_1);
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/datePicker.njk"] = (function() {
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
env.getTemplate("utilities/govcyUtilities.njk", false, "elements/datePicker.njk", false, function(t_5,t_4) {
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
env.getTemplate("elements/hint.njk", false, "elements/datePicker.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "hint")) {
var t_12 = t_9.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_12);
env.getTemplate("elements/label.njk", false, "elements/datePicker.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
t_13.getExported(function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
if(Object.prototype.hasOwnProperty.call(t_13, "label")) {
var t_16 = t_13.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_16);
env.getTemplate("elements/errorMessage.njk", false, "elements/datePicker.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
t_17.getExported(function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
if(Object.prototype.hasOwnProperty.call(t_17, "errorMessage")) {
var t_20 = t_17.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_20);
env.getTemplate("elements/formControl.njk", false, "elements/datePicker.njk", false, function(t_22,t_21) {
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
t_2 += runtime.suppressValue((lineno = 45, colno = 23, runtime.callWrap(t_24, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error")),"classes": runtime.memberLookup((l_params),"classes")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_31 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_32 = "";t_32 += "\n        ";
t_32 += runtime.suppressValue((lineno = 46, colno = 21, runtime.callWrap(t_16, "label", context, [{"label": runtime.memberLookup((l_params),"label"),"id": runtime.contextOrFrameLookup(context, frame, "labelId"),"for": runtime.memberLookup((l_params),"id"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_33 = runtime.makeMacro(
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
t_32 += runtime.suppressValue((lineno = 47, colno = 20, runtime.callWrap(t_12, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_35 = runtime.makeMacro(
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
t_32 += runtime.suppressValue((lineno = 49, colno = 28, runtime.callWrap(t_20, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_37 = runtime.makeMacro(
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
t_32 += "\n        <div class=\"govcy-date-picker\"";
if(runtime.memberLookup((l_params),"dataMinDate")) {
t_32 += " data-min-date=\"";
t_32 += runtime.suppressValue(runtime.memberLookup((l_params),"dataMinDate"), env.opts.autoescape);
t_32 += "\"";
;
}
if(runtime.memberLookup((l_params),"dataMaxDate")) {
t_32 += " data-max-date=\"";
t_32 += runtime.suppressValue(runtime.memberLookup((l_params),"dataMaxDate"), env.opts.autoescape);
t_32 += "\"";
;
}
if(runtime.memberLookup((l_params),"value")) {
t_32 += " data-default-value=\"";
t_32 += runtime.suppressValue(env.getFilter("default").call(context, runtime.memberLookup((l_params),"value"),""), env.opts.autoescape);
t_32 += "\"";
;
}
t_32 += ">\n            <input type=\"text\" class=\"govcy-text-input ";
if(runtime.memberLookup((l_params),"error")) {
t_32 += " govcy-text-input-error";
;
}
t_32 += "\" \n                    id=\"";
t_32 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_32 += "\"\n                    name=\"";
t_32 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_32 += "\"\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "ariaDescribedBy")) {
t_32 += " aria-describedby=\"";
t_32 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ariaDescribedBy"), env.opts.autoescape);
t_32 += "\"";
;
}
t_32 += runtime.suppressValue((lineno = 54, colno = 115, runtime.callWrap(t_8, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_32 += "/>\n        </div>\n    ";
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
context.addExport("datePicker");
context.setVariable("datePicker", macro_t_1);
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/details.njk"] = (function() {
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
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/details.njk", false, function(t_4,t_3) {
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
if(runtime.memberLookup((l_params),"summary") && runtime.memberLookup((l_params),"elements")) {
t_2 += "\r\n<details ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "class=\"govcy-details";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 17, colno = 156, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">\r\n    <summary class=\"govcy-details__summary\">\r\n        <span class=\"govcy-details__summary-text\">";
t_2 += runtime.suppressValue((lineno = 19, colno = 73, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"summary"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</span>\r\n    </summary>\r\n    <div class=\"govcy-details__text\">\r\n        ";
t_2 += runtime.suppressValue((lineno = 22, colno = 33, runtime.callWrap(t_8, "govcyElementsFromArray", context, [runtime.memberLookup((l_params),"elements"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\r\n    </div>\r\n</details>";
;
}
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("details");
context.setVariable("details", macro_t_1);
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
if(Object.prototype.hasOwnProperty.call(t_3, "govcyGetContent")) {
var t_8 = t_3.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_8);
var t_9;
t_9 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 12, colno = 23, runtime.callWrap(t_8, "govcyGetContent", context, ["errorMessage_hiddenError",runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("hiddenError", t_9, true);
if(frame.topLevel) {
context.setVariable("hiddenError", t_9);
}
if(frame.topLevel) {
context.addExport("hiddenError", t_9);
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/errorSummary.njk"] = (function() {
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
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/errorSummary.njk", false, function(t_4,t_3) {
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
if(Object.prototype.hasOwnProperty.call(t_3, "govcyGetContent")) {
var t_8 = t_3.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_8);
if(runtime.memberLookup((l_params),"header")) {
var t_9;
t_9 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 29, colno = 47, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"header"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("header", t_9, true);
if(frame.topLevel) {
context.setVariable("header", t_9);
}
if(frame.topLevel) {
context.addExport("header", t_9);
}
;
}
else {
var t_10;
t_10 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 31, colno = 42, runtime.callWrap(t_8, "govcyGetContent", context, ["errorSummary_header",runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("header", t_10, true);
if(frame.topLevel) {
context.setVariable("header", t_10);
}
if(frame.topLevel) {
context.addExport("header", t_10);
}
;
}
if(runtime.memberLookup((l_params),"id") && runtime.memberLookup((l_params),"errors")) {
t_2 += "\r\n<div id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" class=\"govcy-alert-error govcy-br-5 govcy-br-danger govcy-p-3";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 35, colno = 164, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">\r\n    <h2 role=\"alert\" id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "-title\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "header"), env.opts.autoescape);
t_2 += "</h2>\r\n    <p>";
frame = frame.push();
var t_13 = runtime.memberLookup((l_params),"errors");
if(t_13) {t_13 = runtime.fromIterator(t_13);
var t_12 = t_13.length;
for(var t_11=0; t_11 < t_13.length; t_11++) {
var t_14 = t_13[t_11];
frame.set("error", t_14);
frame.set("loop.index", t_11 + 1);
frame.set("loop.index0", t_11);
frame.set("loop.revindex", t_12 - t_11);
frame.set("loop.revindex0", t_12 - t_11 - 1);
frame.set("loop.first", t_11 === 0);
frame.set("loop.last", t_11 === t_12 - 1);
frame.set("loop.length", t_12);
t_2 += "\r\n            <a href=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((t_14),"link"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 39, colno = 62, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((t_14),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</a>";
;
}
}
frame = frame.pop();
t_2 += "\r\n    </p>";
if(runtime.memberLookup((l_params),"body")) {
t_2 += "\r\n    <p>";
t_2 += runtime.suppressValue((lineno = 43, colno = 30, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"body"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</p>";
;
}
if(runtime.memberLookup((l_params),"linkToContinue")) {
t_2 += "\r\n    <a href=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_params),"linkToContinue")),"link"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 46, colno = 70, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((runtime.memberLookup((l_params),"linkToContinue")),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</a>";
;
}
t_2 += "\r\n</div>";
;
}
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("errorSummary");
context.setVariable("errorSummary", macro_t_1);
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
if(runtime.memberLookup((l_params),"ariaRole")) {
t_2 += " role=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"ariaRole"), env.opts.autoescape);
t_2 += "\"";
;
}
if(runtime.memberLookup((l_params),"ariaDescribedby")) {
t_2 += " aria-describedby=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"ariaDescribedby"), env.opts.autoescape);
t_2 += "\"";
;
}
t_2 += runtime.suppressValue((lineno = 16, colno = 312, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">\n";
t_2 += runtime.suppressValue((lineno = 17, colno = 9, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
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
t_2 += runtime.suppressValue((lineno = 23, colno = 33, runtime.callWrap(t_11, "govcyElement", context, [runtime.memberLookup((t_15),"element"),runtime.memberLookup((t_15),"params"),runtime.makeKeywordArgs({"caller": (function (){var macro_t_16 = runtime.makeMacro(
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
var t_28;
t_28 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-input-control"]);
frame.set("controlId", t_28, true);
if(frame.topLevel) {
context.setVariable("controlId", t_28);
}
if(frame.topLevel) {
context.addExport("controlId", t_28);
}
t_2 += runtime.suppressValue((lineno = 28, colno = 23, runtime.callWrap(t_11, "formControl", context, [{"id": runtime.contextOrFrameLookup(context, frame, "controlId"),"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error")),"classes": runtime.memberLookup((l_params),"classe"),"lang": runtime.memberLookup((l_params),"langs")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_29 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_30 = "";t_30 += runtime.suppressValue((lineno = 30, colno = 21, runtime.callWrap(t_19, "label", context, [{"label": runtime.memberLookup((l_params),"label"),"id": runtime.contextOrFrameLookup(context, frame, "labelId"),"for": runtime.memberLookup((l_params),"id"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_31 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_32 = "";;
frame = frame.pop();
return new runtime.SafeString(t_32);
});
return macro_t_31;})()})])), env.opts.autoescape);
t_30 += runtime.suppressValue((lineno = 32, colno = 20, runtime.callWrap(t_15, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_33 = runtime.makeMacro(
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
t_30 += runtime.suppressValue((lineno = 34, colno = 28, runtime.callWrap(t_23, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_35 = runtime.makeMacro(
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
t_30 += "<input id=\"";
t_30 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_30 += "\"";
if(runtime.memberLookup((l_params),"name")) {
t_30 += " name=\"";
t_30 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_30 += "\"";
;
}
t_30 += " type=\"file\" class=\"govcy-file-upload\"";
if(runtime.memberLookup((l_params),"hint") || runtime.memberLookup((l_params),"error")) {
t_30 += " aria-describedby=\"";
if(runtime.memberLookup((l_params),"hint")) {
t_30 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hintId"), env.opts.autoescape);
t_30 += " ";
;
}
if(runtime.memberLookup((l_params),"error")) {
t_30 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "errorId"), env.opts.autoescape);
t_30 += " ";
;
}
t_30 += "\"";
;
}
t_30 += ">\n    ";
;
frame = frame.pop();
return new runtime.SafeString(t_30);
});
return macro_t_29;})()})])), env.opts.autoescape);
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
if(Object.prototype.hasOwnProperty.call(t_3, "govcyGetContent")) {
var t_8 = t_3.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_8);
env.getTemplate("elements/formControl.njk", false, "elements/fileView.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "formControl")) {
var t_12 = t_9.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_12);
env.getTemplate("elements/hint.njk", false, "elements/fileView.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
t_13.getExported(function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
if(Object.prototype.hasOwnProperty.call(t_13, "hint")) {
var t_16 = t_13.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_16);
var t_17;
t_17 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 18, colno = 41, runtime.callWrap(t_8, "govcyGetContent", context, ["fileView_view",runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("viewLabel", t_17, true);
if(frame.topLevel) {
context.setVariable("viewLabel", t_17);
}
if(frame.topLevel) {
context.addExport("viewLabel", t_17);
}
var t_18;
t_18 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 19, colno = 43, runtime.callWrap(t_8, "govcyGetContent", context, ["fileView_delete",runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("deleteLabel", t_18, true);
if(frame.topLevel) {
context.setVariable("deleteLabel", t_18);
}
if(frame.topLevel) {
context.addExport("deleteLabel", t_18);
}
if(runtime.memberLookup((l_params),"label") && runtime.memberLookup((l_params),"viewHref") && runtime.memberLookup((l_params),"deleteHref")) {
t_2 += "<div ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "-view-control\" ";
;
}
t_2 += "class=\"govcy-form\">\n    ";
t_2 += runtime.suppressValue((lineno = 23, colno = 23, runtime.callWrap(t_12, "formControl", context, [{"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_19 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_20 = "";if(runtime.memberLookup((l_params),"isPageHeading")) {
t_20 += "<h1>";
;
}
else {
t_20 += "<p class=\"govcy-label govcy-label-primary\">";
;
}
t_20 += runtime.suppressValue((lineno = 24, colno = 135, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"label"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
if(runtime.memberLookup((l_params),"isPageHeading")) {
t_20 += "</h1>";
;
}
else {
t_20 += "</p>";
;
}
t_20 += runtime.suppressValue((lineno = 26, colno = 20, runtime.callWrap(t_16, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_21 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_22 = "";;
frame = frame.pop();
return new runtime.SafeString(t_22);
});
return macro_t_21;})()})])), env.opts.autoescape);
t_20 += "<a href=\"";
t_20 += runtime.suppressValue(runtime.memberLookup((l_params),"viewHref"), env.opts.autoescape);
t_20 += "\">";
t_20 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "viewLabel"), env.opts.autoescape);
if(runtime.memberLookup((l_params),"visuallyHiddenText")) {
t_20 += "<span class=\"govcy-visually-hidden\">";
t_20 += runtime.suppressValue((lineno = 28, colno = 146, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"visuallyHiddenText"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_20 += "</span>";
;
}
t_20 += "</a>";
t_20 += "<a class=\"govcy-ml-3\" href=\"";
t_20 += runtime.suppressValue(runtime.memberLookup((l_params),"deleteHref"), env.opts.autoescape);
t_20 += "\">";
t_20 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "deleteLabel"), env.opts.autoescape);
if(runtime.memberLookup((l_params),"visuallyHiddenText")) {
t_20 += "<span class=\"govcy-visually-hidden\">";
t_20 += runtime.suppressValue((lineno = 30, colno = 169, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"visuallyHiddenText"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_20 += "</span>";
;
}
t_20 += "</a>\n    ";
;
frame = frame.pop();
return new runtime.SafeString(t_20);
});
return macro_t_19;})()})])), env.opts.autoescape);
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
if(runtime.memberLookup((l_params),"method")) {
t_2 += " method=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"method"), env.opts.autoescape);
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
t_2 += runtime.suppressValue((lineno = 14, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
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
t_2 += runtime.suppressValue((lineno = 20, colno = 33, runtime.callWrap(t_6, "govcyElement", context, [runtime.memberLookup((t_10),"element"),runtime.memberLookup((t_10),"params"),runtime.makeKeywordArgs({"caller": (function (){var macro_t_11 = runtime.makeMacro(
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/progressList.njk"] = (function() {
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
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/progressList.njk", false, function(t_4,t_3) {
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
if(Object.prototype.hasOwnProperty.call(t_3, "govcyGetContent")) {
var t_8 = t_3.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_8);
var t_9;
t_9 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"showSteps"),false);
frame.set("showSteps", t_9, true);
if(frame.topLevel) {
context.setVariable("showSteps", t_9);
}
if(frame.topLevel) {
context.addExport("showSteps", t_9);
}
var t_10;
t_10 = env.getFilter("int").call(context, runtime.memberLookup((l_params),"current"));
frame.set("current", t_10, true);
if(frame.topLevel) {
context.setVariable("current", t_10);
}
if(frame.topLevel) {
context.addExport("current", t_10);
}
var t_11;
t_11 = env.getFilter("int").call(context, runtime.memberLookup((l_params),"total"));
frame.set("total", t_11, true);
if(frame.topLevel) {
context.setVariable("total", t_11);
}
if(frame.topLevel) {
context.addExport("total", t_11);
}
if(runtime.memberLookup((l_params),"completedLabel")) {
var t_12;
t_12 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 30, colno = 55, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"completedLabel"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("completedLabel", t_12, true);
if(frame.topLevel) {
context.setVariable("completedLabel", t_12);
}
if(frame.topLevel) {
context.addExport("completedLabel", t_12);
}
;
}
else {
var t_13;
t_13 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 32, colno = 50, runtime.callWrap(t_8, "govcyGetContent", context, ["progressList_completedLabel",runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("completedLabel", t_13, true);
if(frame.topLevel) {
context.setVariable("completedLabel", t_13);
}
if(frame.topLevel) {
context.addExport("completedLabel", t_13);
}
;
}
if(runtime.memberLookup((l_params),"notCompletedLabel")) {
var t_14;
t_14 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 36, colno = 58, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"notCompletedLabel"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("notCompletedLabel", t_14, true);
if(frame.topLevel) {
context.setVariable("notCompletedLabel", t_14);
}
if(frame.topLevel) {
context.addExport("notCompletedLabel", t_14);
}
;
}
else {
var t_15;
t_15 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 38, colno = 53, runtime.callWrap(t_8, "govcyGetContent", context, ["progressList_notCompletedLabel",runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("notCompletedLabel", t_15, true);
if(frame.topLevel) {
context.setVariable("notCompletedLabel", t_15);
}
if(frame.topLevel) {
context.addExport("notCompletedLabel", t_15);
}
;
}
if(runtime.memberLookup((l_params),"stepLabel")) {
var t_16;
t_16 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 42, colno = 50, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"stepLabel"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("stepLabel", t_16, true);
if(frame.topLevel) {
context.setVariable("stepLabel", t_16);
}
if(frame.topLevel) {
context.addExport("stepLabel", t_16);
}
;
}
else {
var t_17;
t_17 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 44, colno = 45, runtime.callWrap(t_8, "govcyGetContent", context, ["progressList_stepLabel",runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("stepLabel", t_17, true);
if(frame.topLevel) {
context.setVariable("stepLabel", t_17);
}
if(frame.topLevel) {
context.addExport("stepLabel", t_17);
}
;
}
if(runtime.memberLookup((l_params),"ofLabel")) {
var t_18;
t_18 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 48, colno = 48, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"ofLabel"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("ofLabel", t_18, true);
if(frame.topLevel) {
context.setVariable("ofLabel", t_18);
}
if(frame.topLevel) {
context.addExport("ofLabel", t_18);
}
;
}
else {
var t_19;
t_19 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 50, colno = 43, runtime.callWrap(t_8, "govcyGetContent", context, ["progressList_ofLabel",runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("ofLabel", t_19, true);
if(frame.topLevel) {
context.setVariable("ofLabel", t_19);
}
if(frame.topLevel) {
context.addExport("ofLabel", t_19);
}
;
}
if(runtime.contextOrFrameLookup(context, frame, "current") && runtime.contextOrFrameLookup(context, frame, "total")) {
if(runtime.contextOrFrameLookup(context, frame, "showSteps")) {
t_2 += "\r\n        <div ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "class=\"govcy-step-indicator";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 55, colno = 167, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">\r\n            <ol class=\"govcy-step-indicator__segments\">";
frame = frame.push();
var t_22 = (lineno = 57, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [1,runtime.contextOrFrameLookup(context, frame, "total") + 1]));
if(t_22) {t_22 = runtime.fromIterator(t_22);
var t_21 = t_22.length;
for(var t_20=0; t_20 < t_22.length; t_20++) {
var t_23 = t_22[t_20];
frame.set("i", t_23);
frame.set("loop.index", t_20 + 1);
frame.set("loop.index0", t_20);
frame.set("loop.revindex", t_21 - t_20);
frame.set("loop.revindex0", t_21 - t_20 - 1);
frame.set("loop.first", t_20 === 0);
frame.set("loop.last", t_20 === t_21 - 1);
frame.set("loop.length", t_21);
t_2 += "\r\n                <li class=\"govcy-step-indicator__segment";
if(t_23 < runtime.contextOrFrameLookup(context, frame, "current")) {
t_2 += " govcy-step-indicator__segment--complete";
;
}
if(t_23 == runtime.contextOrFrameLookup(context, frame, "current")) {
t_2 += " govcy-step-indicator__segment--current";
;
}
t_2 += "\"";
if(t_23 == runtime.contextOrFrameLookup(context, frame, "current")) {
t_2 += " aria-current=\"step\"";
;
}
t_2 += ">";
if(runtime.memberLookup((l_params),"steps") && runtime.memberLookup((runtime.memberLookup((l_params),"steps")),t_23 - 1) && runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((l_params),"steps")),t_23 - 1)),"text")) {
t_2 += "<span class=\"govcy-step-indicator__label\">\r\n                        ";
t_2 += runtime.suppressValue((lineno = 61, colno = 47, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((l_params),"steps")),t_23 - 1)),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
if(t_23 < runtime.contextOrFrameLookup(context, frame, "current")) {
t_2 += "\r\n                                <span class=\"govcy-visually-hidden\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "completedLabel"), env.opts.autoescape);
t_2 += "</span>";
;
}
else {
if(t_23 > runtime.contextOrFrameLookup(context, frame, "current")) {
t_2 += "\r\n                                <span class=\"govcy-visually-hidden\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "notCompletedLabel"), env.opts.autoescape);
t_2 += "</span>";
;
}
;
}
t_2 += "\r\n                    </span>";
;
}
t_2 += "\r\n                </li>";
;
}
}
frame = frame.pop();
t_2 += "\r\n            </ol>\r\n        </div>";
;
}
t_2 += "\r\n    <div ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "-counter\" ";
;
}
t_2 += "class=\"govcy-step-indicator__counter\"";
t_2 += runtime.suppressValue((lineno = 74, colno = 125, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">\r\n        <span class=\"govcy-visually-hidden\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "stepLabel"), env.opts.autoescape);
t_2 += " </span>\r\n        <span class=\"govcy-step-indicator__current-counter\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "current"), env.opts.autoescape);
t_2 += "</span> ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ofLabel"), env.opts.autoescape);
t_2 += " ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "total"), env.opts.autoescape);
t_2 += "\r\n    </div>";
;
}
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("progressList");
context.setVariable("progressList", macro_t_1);
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
if(Object.prototype.hasOwnProperty.call(t_3, "govcyGetContent")) {
var t_9 = t_3.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_9);
env.getTemplate("elements/hint.njk", false, "elements/radios.njk", false, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
t_10.getExported(function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
if(Object.prototype.hasOwnProperty.call(t_10, "hint")) {
var t_13 = t_10.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_13);
env.getTemplate("elements/label.njk", false, "elements/radios.njk", false, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
t_14.getExported(function(t_16,t_14) {
if(t_16) { cb(t_16); return; }
if(Object.prototype.hasOwnProperty.call(t_14, "label")) {
var t_17 = t_14.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_17);
l_isInline = env.getFilter("default").call(context, l_isInline,false);
frame.set("isInline", l_isInline, true);
if(frame.topLevel) {
context.setVariable("isInline", l_isInline);
}
if(frame.topLevel) {
context.addExport("isInline", l_isInline);
}
if(runtime.memberLookup((l_item),"altOrText")) {
var t_18;
t_18 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 38, colno = 47, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"altOrText"),l_lang])), env.opts.autoescape);
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
else {
var t_19;
t_19 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 40, colno = 42, runtime.callWrap(t_9, "govcyGetContent", context, ["common_or",l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("orText", t_19, true);
if(frame.topLevel) {
context.setVariable("orText", t_19);
}
if(frame.topLevel) {
context.addExport("orText", t_19);
}
;
}
if(runtime.memberLookup((l_item),"altAndText")) {
var t_20;
t_20 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 44, colno = 48, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"altAndText"),l_lang])), env.opts.autoescape);
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
else {
var t_21;
t_21 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 46, colno = 43, runtime.callWrap(t_9, "govcyGetContent", context, ["common_and",l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("andText", t_21, true);
if(frame.topLevel) {
context.setVariable("andText", t_21);
}
if(frame.topLevel) {
context.addExport("andText", t_21);
}
;
}
var t_22;
t_22 = runtime.memberLookup((l_params),"id") + "" + "-option-" + "" + l_index;
frame.set("optionId", t_22, true);
if(frame.topLevel) {
context.setVariable("optionId", t_22);
}
if(frame.topLevel) {
context.addExport("optionId", t_22);
}
if(runtime.memberLookup((l_item),"hint")) {
var t_23;
t_23 = env.getFilter("join").call(context, [runtime.contextOrFrameLookup(context, frame, "optionId"),"-hint"]);
frame.set("hintId", t_23, true);
if(frame.topLevel) {
context.setVariable("hintId", t_23);
}
if(frame.topLevel) {
context.addExport("hintId", t_23);
}
;
}
else {
var t_24;
t_24 = "";
frame.set("hintId", t_24, true);
if(frame.topLevel) {
context.setVariable("hintId", t_24);
}
if(frame.topLevel) {
context.addExport("hintId", t_24);
}
;
}
if(runtime.memberLookup((l_item),"conditionalElements")) {
var t_25;
t_25 = env.getFilter("join").call(context, [runtime.contextOrFrameLookup(context, frame, "optionId"),"-conditional"]);
frame.set("conditionalElementsId", t_25, true);
if(frame.topLevel) {
context.setVariable("conditionalElementsId", t_25);
}
if(frame.topLevel) {
context.addExport("conditionalElementsId", t_25);
}
var t_26;
t_26 = (lineno = 59, colno = 46, runtime.callWrap(t_9, "govcyGetContent", context, ["radios_conditionalLabel",l_lang]));
frame.set("conditionalLabel", t_26, true);
if(frame.topLevel) {
context.setVariable("conditionalLabel", t_26);
}
if(frame.topLevel) {
context.addExport("conditionalLabel", t_26);
}
;
}
else {
var t_27;
t_27 = "";
frame.set("conditionalElementsId", t_27, true);
if(frame.topLevel) {
context.setVariable("conditionalElementsId", t_27);
}
if(frame.topLevel) {
context.addExport("conditionalElementsId", t_27);
}
var t_28;
t_28 = "";
frame.set("conditionalLabel", t_28, true);
if(frame.topLevel) {
context.setVariable("conditionalLabel", t_28);
}
if(frame.topLevel) {
context.addExport("conditionalLabel", t_28);
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
t_17 = (function() {
var output = "";
output += "\n        <span class=\"govcy-visually-hidden-error\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "orText"), env.opts.autoescape);
output += ", </span>";
output += runtime.suppressValue((lineno = 68, colno = 96, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("label", t_17, true);
if(frame.topLevel) {
context.setVariable("label", t_17);
}
if(frame.topLevel) {
context.addExport("label", t_17);
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
t_17 = (function() {
var output = "";
output += "\n        <span class=\"govcy-visually-hidden-error\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "andText"), env.opts.autoescape);
output += ", </span>";
output += runtime.suppressValue((lineno = 73, colno = 97, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("label", t_17, true);
if(frame.topLevel) {
context.setVariable("label", t_17);
}
if(frame.topLevel) {
context.addExport("label", t_17);
}
;
}
else {
t_17 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 76, colno = 45, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_item),"text"),l_lang])), env.opts.autoescape);
;
return output;
})()
;
frame.set("label", t_17, true);
if(frame.topLevel) {
context.setVariable("label", t_17);
}
if(frame.topLevel) {
context.addExport("label", t_17);
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
t_2 += "\"";
if(runtime.memberLookup((l_params),"value") == runtime.memberLookup((l_item),"value")) {
t_2 += " checked";
;
}
t_2 += " value=\"";
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
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, t_17), env.opts.autoescape);
t_2 += "</label>";
t_2 += runtime.suppressValue((lineno = 83, colno = 16, runtime.callWrap(t_13, "hint", context, [{"hint": runtime.memberLookup((l_item),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": l_lang},runtime.makeKeywordArgs({"caller": (function (){var macro_t_29 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_30 = "";;
frame = frame.pop();
return new runtime.SafeString(t_30);
});
return macro_t_29;})()})])), env.opts.autoescape);
t_2 += "\n</div>";
if(runtime.memberLookup((l_item),"conditionalElements")) {
var t_31;
t_31 = [];
frame.set("updatedConditionalElements", t_31, true);
if(frame.topLevel) {
context.setVariable("updatedConditionalElements", t_31);
}
if(frame.topLevel) {
context.addExport("updatedConditionalElements", t_31);
}
frame = frame.push();
var t_34 = runtime.memberLookup((l_item),"conditionalElements");
if(t_34) {t_34 = runtime.fromIterator(t_34);
var t_33 = t_34.length;
for(var t_32=0; t_32 < t_34.length; t_32++) {
var t_35 = t_34[t_32];
frame.set("element", t_35);
frame.set("loop.index", t_32 + 1);
frame.set("loop.index0", t_32);
frame.set("loop.revindex", t_33 - t_32);
frame.set("loop.revindex0", t_33 - t_32 - 1);
frame.set("loop.first", t_32 === 0);
frame.set("loop.last", t_32 === t_33 - 1);
frame.set("loop.length", t_33);
var t_36;
t_36 = env.getFilter("merge").call(context, t_35,{"params": env.getFilter("merge").call(context, runtime.memberLookup((t_35),"params"),{"hideFormControlError": true})});
frame.set("updatedElement", t_36, true);
if(frame.topLevel) {
context.setVariable("updatedElement", t_36);
}
if(frame.topLevel) {
context.addExport("updatedElement", t_36);
}
var t_37;
t_37 = (lineno = 93, colno = 78, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "updatedConditionalElements")),"concat"), "updatedConditionalElements[\"concat\"]", context, [[runtime.contextOrFrameLookup(context, frame, "updatedElement")]]));
frame.set("updatedConditionalElements", t_37, true);
if(frame.topLevel) {
context.setVariable("updatedConditionalElements", t_37);
}
if(frame.topLevel) {
context.addExport("updatedConditionalElements", t_37);
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
var macro_t_38 = runtime.makeMacro(
["params"], 
[], 
function (l_params, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("params", l_params);
var t_39 = "";var t_40;
t_40 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isPageHeading"),false);
frame.set("isPageHeading", t_40, true);
if(frame.topLevel) {
context.setVariable("isPageHeading", t_40);
}
if(frame.topLevel) {
context.addExport("isPageHeading", t_40);
}
var t_41;
t_41 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isInline"),false);
frame.set("isInline", t_41, true);
if(frame.topLevel) {
context.setVariable("isInline", t_41);
}
if(frame.topLevel) {
context.addExport("isInline", t_41);
}
if(runtime.memberLookup((l_params),"legend") && runtime.memberLookup((l_params),"id") && runtime.memberLookup((l_params),"name")) {
env.getTemplate("elements/fieldset.njk", false, "elements/radios.njk", false, function(t_43,t_42) {
if(t_43) { cb(t_43); return; }
t_42.getExported(function(t_44,t_42) {
if(t_44) { cb(t_44); return; }
if(Object.prototype.hasOwnProperty.call(t_42, "fieldset")) {
var t_45 = t_42.fieldset;
} else {
cb(new Error("cannot import 'fieldset'")); return;
}
context.setVariable("fieldset", t_45);
env.getTemplate("elements/hint.njk", false, "elements/radios.njk", false, function(t_47,t_46) {
if(t_47) { cb(t_47); return; }
t_46.getExported(function(t_48,t_46) {
if(t_48) { cb(t_48); return; }
if(Object.prototype.hasOwnProperty.call(t_46, "hint")) {
var t_49 = t_46.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_49);
env.getTemplate("elements/legend.njk", false, "elements/radios.njk", false, function(t_51,t_50) {
if(t_51) { cb(t_51); return; }
t_50.getExported(function(t_52,t_50) {
if(t_52) { cb(t_52); return; }
if(Object.prototype.hasOwnProperty.call(t_50, "legend")) {
var t_53 = t_50.legend;
} else {
cb(new Error("cannot import 'legend'")); return;
}
context.setVariable("legend", t_53);
env.getTemplate("elements/errorMessage.njk", false, "elements/radios.njk", false, function(t_55,t_54) {
if(t_55) { cb(t_55); return; }
t_54.getExported(function(t_56,t_54) {
if(t_56) { cb(t_56); return; }
if(Object.prototype.hasOwnProperty.call(t_54, "errorMessage")) {
var t_57 = t_54.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_57);
env.getTemplate("elements/formControl.njk", false, "elements/radios.njk", false, function(t_59,t_58) {
if(t_59) { cb(t_59); return; }
t_58.getExported(function(t_60,t_58) {
if(t_60) { cb(t_60); return; }
if(Object.prototype.hasOwnProperty.call(t_58, "formControl")) {
var t_61 = t_58.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_61);
if(runtime.memberLookup((l_params),"hint")) {
var t_62;
t_62 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-hint"]);
frame.set("hintId", t_62, true);
if(frame.topLevel) {
context.setVariable("hintId", t_62);
}
if(frame.topLevel) {
context.addExport("hintId", t_62);
}
;
}
else {
var t_63;
t_63 = "";
frame.set("hintId", t_63, true);
if(frame.topLevel) {
context.setVariable("hintId", t_63);
}
if(frame.topLevel) {
context.addExport("hintId", t_63);
}
;
}
if(runtime.memberLookup((l_params),"error")) {
var t_64;
t_64 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-error"]);
frame.set("errorId", t_64, true);
if(frame.topLevel) {
context.setVariable("errorId", t_64);
}
if(frame.topLevel) {
context.addExport("errorId", t_64);
}
;
}
else {
var t_65;
t_65 = "";
frame.set("errorId", t_65, true);
if(frame.topLevel) {
context.setVariable("errorId", t_65);
}
if(frame.topLevel) {
context.addExport("errorId", t_65);
}
;
}
if(runtime.memberLookup((l_params),"error") || runtime.memberLookup((l_params),"hint")) {
var t_66;
t_66 = runtime.contextOrFrameLookup(context, frame, "hintId") + "" + " " + "" + runtime.contextOrFrameLookup(context, frame, "errorId");
frame.set("ariaDescribedBy", t_66, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_66);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_66);
}
;
}
else {
var t_67;
t_67 = "";
frame.set("ariaDescribedBy", t_67, true);
if(frame.topLevel) {
context.setVariable("ariaDescribedBy", t_67);
}
if(frame.topLevel) {
context.addExport("ariaDescribedBy", t_67);
}
;
}
t_39 += runtime.suppressValue((lineno = 166, colno = 20, runtime.callWrap(t_45, "fieldset", context, [{"ariaDescribedby": runtime.contextOrFrameLookup(context, frame, "ariaDescribedBy"),"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_68 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_69 = "";t_69 += "\n        ";
t_69 += runtime.suppressValue((lineno = 167, colno = 22, runtime.callWrap(t_53, "legend", context, [{"legend": runtime.memberLookup((l_params),"legend"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_70 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_71 = "";;
frame = frame.pop();
return new runtime.SafeString(t_71);
});
return macro_t_70;})()})])), env.opts.autoescape);
env.getTemplate("utilities/govcyUtilities.njk", false, "elements/radios.njk", false, function(t_73,t_72) {
if(t_73) { cb(t_73); return; }
t_72.getExported(function(t_74,t_72) {
if(t_74) { cb(t_74); return; }
if(Object.prototype.hasOwnProperty.call(t_72, "govcyElementsFromArray")) {
var t_75 = t_72.govcyElementsFromArray;
} else {
cb(new Error("cannot import 'govcyElementsFromArray'")); return;
}
frame.set("govcyElementsFromArray", t_75);
t_69 += runtime.suppressValue((lineno = 171, colno = 33, runtime.callWrap(t_75, "govcyElementsFromArray", context, [runtime.memberLookup((l_params),"elements"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_69 += "\n        ";
t_69 += runtime.suppressValue((lineno = 172, colno = 27, runtime.callWrap(t_61, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error"))},runtime.makeKeywordArgs({"caller": (function (){var macro_t_76 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_77 = "";t_77 += runtime.suppressValue((lineno = 174, colno = 24, runtime.callWrap(t_49, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_78 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_79 = "";;
frame = frame.pop();
return new runtime.SafeString(t_79);
});
return macro_t_78;})()})])), env.opts.autoescape);
t_77 += runtime.suppressValue((lineno = 176, colno = 32, runtime.callWrap(t_57, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_80 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_81 = "";;
frame = frame.pop();
return new runtime.SafeString(t_81);
});
return macro_t_80;})()})])), env.opts.autoescape);
t_77 += "\n            ";
frame = frame.push();
var t_84 = runtime.memberLookup((l_params),"items");
if(t_84) {t_84 = runtime.fromIterator(t_84);
var t_83 = t_84.length;
for(var t_82=0; t_82 < t_84.length; t_82++) {
var t_85 = t_84[t_82];
frame.set("item", t_85);
frame.set("loop.index", t_82 + 1);
frame.set("loop.index0", t_82);
frame.set("loop.revindex", t_83 - t_82);
frame.set("loop.revindex0", t_83 - t_82 - 1);
frame.set("loop.first", t_82 === 0);
frame.set("loop.last", t_82 === t_83 - 1);
frame.set("loop.length", t_83);
if(t_85) {
t_77 += runtime.suppressValue((lineno = 180, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_radioItem"), "_radioItem", context, [l_params,t_85,runtime.contextOrFrameLookup(context, frame, "isInline"),runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = frame.pop();
return new runtime.SafeString(t_77);
});
return macro_t_76;})()})])), env.opts.autoescape);
t_69 += "\n    ";
})});
frame = frame.pop();
return new runtime.SafeString(t_69);
});
return macro_t_68;})()})])), env.opts.autoescape);
})})})})})})})})})});
}
;
frame = callerFrame;
return new runtime.SafeString(t_39);
});
context.addExport("radios");
context.setVariable("radios", macro_t_38);
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
t_2 += runtime.suppressValue((lineno = 44, colno = 23, runtime.callWrap(t_24, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error")),"classes": runtime.memberLookup((l_params),"classes")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_31 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_32 = "";t_32 += "\n        ";
t_32 += runtime.suppressValue((lineno = 45, colno = 21, runtime.callWrap(t_16, "label", context, [{"label": runtime.memberLookup((l_params),"label"),"id": runtime.contextOrFrameLookup(context, frame, "labelId"),"for": runtime.memberLookup((l_params),"id"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_33 = runtime.makeMacro(
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
t_32 += runtime.suppressValue((lineno = 46, colno = 20, runtime.callWrap(t_12, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_35 = runtime.makeMacro(
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
t_32 += runtime.suppressValue((lineno = 48, colno = 28, runtime.callWrap(t_20, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_37 = runtime.makeMacro(
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
t_32 += runtime.suppressValue((lineno = 49, colno = 229, runtime.callWrap(t_8, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
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
t_32 += "\"";
if(runtime.memberLookup((l_params),"value") == runtime.memberLookup((t_42),"value")) {
t_32 += " selected";
;
}
t_32 += ">";
t_32 += runtime.suppressValue((lineno = 53, colno = 131, runtime.callWrap(t_7, "govcyLocalizeContent", context, [runtime.memberLookup((t_42),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/stepByStepStatic.njk"] = (function() {
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
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/stepByStepStatic.njk", false, function(t_4,t_3) {
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
if(Object.prototype.hasOwnProperty.call(t_3, "govcyGetContent")) {
var t_9 = t_3.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_9);
var t_10;
t_10 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 40, colno = 38, runtime.callWrap(t_9, "govcyGetContent", context, ["common_or",runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("orText", t_10, true);
if(frame.topLevel) {
context.setVariable("orText", t_10);
}
if(frame.topLevel) {
context.addExport("orText", t_10);
}
var t_11;
t_11 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 41, colno = 39, runtime.callWrap(t_9, "govcyGetContent", context, ["common_and",runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("andText", t_11, true);
if(frame.topLevel) {
context.setVariable("andText", t_11);
}
if(frame.topLevel) {
context.addExport("andText", t_11);
}
var t_12;
t_12 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 42, colno = 41, runtime.callWrap(t_9, "govcyGetContent", context, ["stepByStepStatic_step",runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("stepText", t_12, true);
if(frame.topLevel) {
context.setVariable("stepText", t_12);
}
if(frame.topLevel) {
context.addExport("stepText", t_12);
}
if(runtime.memberLookup((l_params),"items")) {
t_2 += "\r\n<div class=\"govcy-accordion govcy-accordion-steps govcy-mb-0";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
if(runtime.memberLookup((l_params),"id")) {
t_2 += " id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\"";
;
}
t_2 += runtime.suppressValue((lineno = 45, colno = 187, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">";
frame = frame.push();
var t_15 = runtime.memberLookup((l_params),"items");
if(t_15) {t_15 = runtime.fromIterator(t_15);
var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("item", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
if(runtime.memberLookup((t_16),"type") == "or") {
var t_17;
t_17 = (function() {
var output = "";
output += "<div class=\"govcy-accordion-step govcy-accordion-step-conditional\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "orText"), env.opts.autoescape);
output += "</div>";
;
return output;
})()
;
frame.set("itemStep", t_17, true);
if(frame.topLevel) {
context.setVariable("itemStep", t_17);
}
if(frame.topLevel) {
context.addExport("itemStep", t_17);
}
var t_18;
t_18 = (function() {
var output = "";
output += "<span class=\"govcy-visually-hidden\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "orText"), env.opts.autoescape);
output += ", </span>";
;
return output;
})()
;
frame.set("itemStepVisallyHidden", t_18, true);
if(frame.topLevel) {
context.setVariable("itemStepVisallyHidden", t_18);
}
if(frame.topLevel) {
context.addExport("itemStepVisallyHidden", t_18);
}
;
}
else {
if(runtime.memberLookup((t_16),"type") == "and") {
var t_19;
t_19 = (function() {
var output = "";
output += "<div class=\"govcy-accordion-step govcy-accordion-step-conditional\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "andText"), env.opts.autoescape);
output += "</div>";
;
return output;
})()
;
frame.set("itemStep", t_19, true);
if(frame.topLevel) {
context.setVariable("itemStep", t_19);
}
if(frame.topLevel) {
context.addExport("itemStep", t_19);
}
var t_20;
t_20 = (function() {
var output = "";
output += "<span class=\"govcy-visually-hidden\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "andText"), env.opts.autoescape);
output += ", </span>";
;
return output;
})()
;
frame.set("itemStepVisallyHidden", t_20, true);
if(frame.topLevel) {
context.setVariable("itemStepVisallyHidden", t_20);
}
if(frame.topLevel) {
context.addExport("itemStepVisallyHidden", t_20);
}
;
}
else {
var t_21;
t_21 = (function() {
var output = "";
output += "<div class=\"govcy-accordion-step\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "</div>";
;
return output;
})()
;
frame.set("itemStep", t_21, true);
if(frame.topLevel) {
context.setVariable("itemStep", t_21);
}
if(frame.topLevel) {
context.addExport("itemStep", t_21);
}
var t_22;
t_22 = (function() {
var output = "";
output += "<span class=\"govcy-visually-hidden\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "stepText"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += ", </span>";
;
return output;
})()
;
frame.set("itemStepVisallyHidden", t_22, true);
if(frame.topLevel) {
context.setVariable("itemStepVisallyHidden", t_22);
}
if(frame.topLevel) {
context.addExport("itemStepVisallyHidden", t_22);
}
;
}
;
}
t_2 += "\r\n        <div class=\"govcy-accordion-item";
if(runtime.memberLookup((t_16),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((t_16),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
if(runtime.memberLookup((l_params),"id")) {
t_2 += " id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "-item-";
t_2 += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
t_2 += "\"";
;
}
t_2 += ">\r\n            ";
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "itemStep")), env.opts.autoescape);
t_2 += "\r\n            <h3 class=\"govcy-pt-4\">\r\n                ";
t_2 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "itemStepVisallyHidden")), env.opts.autoescape);
t_2 += runtime.suppressValue((lineno = 61, colno = 75, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((t_16),"heading"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</h3> \r\n            <div>\r\n                ";
t_2 += runtime.suppressValue((lineno = 64, colno = 41, runtime.callWrap(t_8, "govcyElementsFromArray", context, [runtime.memberLookup((t_16),"elements"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "\r\n            </div>\r\n        </div>";
;
}
}
frame = frame.pop();
t_2 += "\r\n</div>";
;
}
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("stepByStepStatic");
context.setVariable("stepByStepStatic", macro_t_1);
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
if(Object.prototype.hasOwnProperty.call(t_3, "govcyGetContent")) {
var t_9 = t_3.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_9);
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
var t_10;
t_10 = (lineno = 53, colno = 43, runtime.callWrap(t_9, "govcyGetContent", context, ["common_entry",runtime.memberLookup((l_params),"lang")]));
frame.set("entryText", t_10, true);
if(frame.topLevel) {
context.setVariable("entryText", t_10);
}
if(frame.topLevel) {
context.addExport("entryText", t_10);
}
t_2 += "<dt><span class=\"govcy-visually-hidden\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "entryText"), env.opts.autoescape);
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"entryCount"), env.opts.autoescape);
t_2 += "</span></dt>";
;
}
frame = frame.push();
var t_13 = runtime.memberLookup((l_params),"items");
if(t_13) {t_13 = runtime.fromIterator(t_13);
var t_12 = t_13.length;
for(var t_11=0; t_11 < t_13.length; t_11++) {
var t_14 = t_13[t_11];
frame.set("item", t_14);
frame.set("loop.index", t_11 + 1);
frame.set("loop.index0", t_11);
frame.set("loop.revindex", t_12 - t_11);
frame.set("loop.revindex0", t_12 - t_11 - 1);
frame.set("loop.first", t_11 === 0);
frame.set("loop.last", t_11 === t_12 - 1);
frame.set("loop.length", t_12);
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
t_2 += runtime.suppressValue((lineno = 60, colno = 35, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((t_14),"key"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
if(!runtime.memberLookup((l_params),"isInnerList")) {
t_2 += runtime.suppressValue((lineno = 62, colno = 84, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_countSummaryListsRenderVisualyHidden"), "_countSummaryListsRenderVisualyHidden", context, [runtime.memberLookup((t_14),"value"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
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
if(runtime.memberLookup((t_14),"value")) {
t_2 += runtime.suppressValue((lineno = 67, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_govcySummayListElementsFromArray"), "_govcySummayListElementsFromArray", context, [runtime.memberLookup((t_14),"value"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_14),"actions")) {
t_2 += runtime.suppressValue((lineno = 69, colno = 38, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_summaryListActions"), "_summaryListActions", context, [runtime.memberLookup((t_14),"actions"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
}
;
}
t_2 += "</dd>";
if(runtime.memberLookup((t_14),"actions") && runtime.memberLookup((t_14),"value") && !runtime.memberLookup((l_params),"isInnerList")) {
t_2 += "<dd class=\"govcy-summary-list-actions\">\r\n            ";
t_2 += runtime.suppressValue((lineno = 75, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "_summaryListActions"), "_summaryListActions", context, [runtime.memberLookup((t_14),"actions"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
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
var macro_t_15 = runtime.makeMacro(
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
var t_16 = "";t_16 += "\r\n    <ul class=\"list-inline govcy-my-0\">";
frame = frame.push();
var t_19 = l_actions;
if(t_19) {t_19 = runtime.fromIterator(t_19);
var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("action", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
t_16 += "\r\n        <li class=\"list-inline-item\">";
t_16 += "<a href=\"";
if(runtime.memberLookup((t_20),"href")) {
t_16 += runtime.suppressValue(runtime.memberLookup((t_20),"href"), env.opts.autoescape);
;
}
else {
t_16 += "#";
;
}
t_16 += "\"";
if(runtime.memberLookup((t_20),"classes")) {
t_16 += "class=\"";
t_16 += runtime.suppressValue(runtime.memberLookup((t_20),"classes"), env.opts.autoescape);
t_16 += "\"";
;
}
t_16 += ">";
t_16 += runtime.suppressValue((lineno = 108, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govcyLocalizeContent"), "govcyLocalizeContent", context, [runtime.memberLookup((t_20),"text"),l_lang])), env.opts.autoescape);
if(runtime.memberLookup((t_20),"visuallyHiddenText")) {
t_16 += "\r\n                <span class=\"govcy-visually-hidden\"> ";
t_16 += runtime.suppressValue((lineno = 111, colno = 76, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govcyLocalizeContent"), "govcyLocalizeContent", context, [runtime.memberLookup((t_20),"visuallyHiddenText"),l_lang])), env.opts.autoescape);
t_16 += "</span>\r\n                ";
;
}
t_16 += "</a>\r\n        </li>";
;
}
}
frame = frame.pop();
t_16 += "\r\n    </ul>";
;
frame = callerFrame;
return new runtime.SafeString(t_16);
});
context.setVariable("_summaryListActions", macro_t_15);
var macro_t_21 = runtime.makeMacro(
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
var t_22 = "";env.getTemplate("govcyElement.njk", false, "elements/summaryList.njk", false, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
t_23.getExported(function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
if(Object.prototype.hasOwnProperty.call(t_23, "govcyElement")) {
var t_26 = t_23.govcyElement;
} else {
cb(new Error("cannot import 'govcyElement'")); return;
}
context.setVariable("govcyElement", t_26);
var t_27;
t_27 = 0;
frame.set("summaryListCount", t_27, true);
if(frame.topLevel) {
context.setVariable("summaryListCount", t_27);
}
if(frame.topLevel) {
context.addExport("summaryListCount", t_27);
}
frame = frame.push();
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
if(runtime.memberLookup((t_31),"element") == "summaryList") {
var t_34;
t_34 = runtime.contextOrFrameLookup(context, frame, "summaryListCount") + 1;
frame.set("summaryListCount", t_34, true);
if(frame.topLevel) {
context.setVariable("summaryListCount", t_34);
}
if(frame.topLevel) {
context.addExport("summaryListCount", t_34);
}
var t_35;
t_35 = env.getFilter("merge").call(context, runtime.contextOrFrameLookup(context, frame, "params"),{"isInnerList": true});
frame.set("params", t_35, true);
if(frame.topLevel) {
context.setVariable("params", t_35);
}
if(frame.topLevel) {
context.addExport("params", t_35);
}
var t_36;
t_36 = env.getFilter("merge").call(context, runtime.contextOrFrameLookup(context, frame, "params"),{"entryCount": runtime.contextOrFrameLookup(context, frame, "summaryListCount")});
frame.set("params", t_36, true);
if(frame.topLevel) {
context.setVariable("params", t_36);
}
if(frame.topLevel) {
context.addExport("params", t_36);
}
;
}
t_22 += runtime.suppressValue((lineno = 134, colno = 29, runtime.callWrap(t_26, "govcyElement", context, [runtime.memberLookup((t_31),"element"),runtime.contextOrFrameLookup(context, frame, "params"),runtime.makeKeywordArgs({"caller": (function (){var macro_t_37 = runtime.makeMacro(
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
;
}
}
frame = frame.pop();
})});
frame = callerFrame;
return new runtime.SafeString(t_22);
});
context.setVariable("_govcySummayListElementsFromArray", macro_t_21);
var macro_t_39 = runtime.makeMacro(
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
var t_40 = "";var t_41;
t_41 = 0;
frame.set("totalCount", t_41, true);
if(frame.topLevel) {
context.setVariable("totalCount", t_41);
}
if(frame.topLevel) {
context.addExport("totalCount", t_41);
}
frame = frame.push();
var t_44 = l_elements;
if(t_44) {t_44 = runtime.fromIterator(t_44);
var t_43 = t_44.length;
for(var t_42=0; t_42 < t_44.length; t_42++) {
var t_45 = t_44[t_42];
frame.set("item", t_45);
frame.set("loop.index", t_42 + 1);
frame.set("loop.index0", t_42);
frame.set("loop.revindex", t_43 - t_42);
frame.set("loop.revindex0", t_43 - t_42 - 1);
frame.set("loop.first", t_42 === 0);
frame.set("loop.last", t_42 === t_43 - 1);
frame.set("loop.length", t_43);
if(runtime.memberLookup((t_45),"element") == "summaryList") {
var t_46;
t_46 = runtime.contextOrFrameLookup(context, frame, "totalCount") + 1;
frame.set("totalCount", t_46, true);
if(frame.topLevel) {
context.setVariable("totalCount", t_46);
}
if(frame.topLevel) {
context.addExport("totalCount", t_46);
}
;
}
;
}
}
frame = frame.pop();
var t_47;
t_47 = (lineno = 145, colno = 45, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "govcyGetContent"), "govcyGetContent", context, ["common_entries",l_lang]));
frame.set("entriesText", t_47, true);
if(frame.topLevel) {
context.setVariable("entriesText", t_47);
}
if(frame.topLevel) {
context.addExport("entriesText", t_47);
}
if(runtime.contextOrFrameLookup(context, frame, "totalCount") > 0) {
t_40 += "<span class=\"govcy-visually-hidden\">";
t_40 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "totalCount"), env.opts.autoescape);
t_40 += " ";
t_40 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "entriesText"), env.opts.autoescape);
t_40 += "</span>";
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_40);
});
context.setVariable("_countSummaryListsRenderVisualyHidden", macro_t_39);
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/taskList.njk"] = (function() {
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
var t_2 = "";if(runtime.memberLookup((l_params),"items")) {
env.getTemplate("utilities/govcyUtilities.njk", false, "elements/taskList.njk", false, function(t_4,t_3) {
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
if(Object.prototype.hasOwnProperty.call(t_3, "govcyGetContent")) {
var t_8 = t_3.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_8);
if(runtime.memberLookup((l_params),"visuallyHiddenStatus")) {
var t_9;
t_9 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 39, colno = 65, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"visuallyHiddenStatus"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("visuallyHiddenStatus", t_9, true);
if(frame.topLevel) {
context.setVariable("visuallyHiddenStatus", t_9);
}
if(frame.topLevel) {
context.addExport("visuallyHiddenStatus", t_9);
}
;
}
else {
var t_10;
t_10 = (function() {
var output = "";
output += runtime.suppressValue((lineno = 41, colno = 60, runtime.callWrap(t_8, "govcyGetContent", context, ["taskList_withStatus",runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
;
return output;
})()
;
frame.set("visuallyHiddenStatus", t_10, true);
if(frame.topLevel) {
context.setVariable("visuallyHiddenStatus", t_10);
}
if(frame.topLevel) {
context.addExport("visuallyHiddenStatus", t_10);
}
;
}
t_2 += "\n    <table class=\"govcy-table";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
if(runtime.memberLookup((l_params),"id")) {
t_2 += " id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\"";
;
}
t_2 += runtime.suppressValue((lineno = 43, colno = 156, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">\n        <tbody>";
frame = frame.push();
var t_13 = runtime.memberLookup((l_params),"items");
if(t_13) {t_13 = runtime.fromIterator(t_13);
var t_12 = t_13.length;
for(var t_11=0; t_11 < t_13.length; t_11++) {
var t_14 = t_13[t_11];
frame.set("item", t_14);
frame.set("loop.index", t_11 + 1);
frame.set("loop.index0", t_11);
frame.set("loop.revindex", t_12 - t_11);
frame.set("loop.revindex0", t_12 - t_11 - 1);
frame.set("loop.first", t_11 === 0);
frame.set("loop.last", t_11 === t_12 - 1);
frame.set("loop.length", t_12);
if(t_14) {
if(runtime.memberLookup((t_14),"task") && runtime.memberLookup((t_14),"status")) {
t_2 += "\n                        <tr";
if(runtime.memberLookup((l_params),"id")) {
t_2 += " id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "-row-";
t_2 += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
t_2 += "\"";
;
}
t_2 += ">\n                            <td classes=\"govcy-valign-top\">\n                                ";
if(runtime.memberLookup((runtime.memberLookup((t_14),"task")),"link")) {
t_2 += "<a href=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_14),"task")),"link"), env.opts.autoescape);
t_2 += "\">";
;
}
t_2 += runtime.suppressValue((lineno = 50, colno = 119, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((runtime.memberLookup((t_14),"task")),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "<span class=\"govcy-visually-hidden\"> ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "visuallyHiddenStatus"), env.opts.autoescape);
t_2 += " ";
t_2 += runtime.suppressValue((lineno = 50, colno = 238, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((runtime.memberLookup((t_14),"status")),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</span>";
if(runtime.memberLookup((runtime.memberLookup((t_14),"task")),"link")) {
t_2 += "</a>";
;
}
if(runtime.memberLookup((t_14),"description")) {
t_2 += "<p>";
t_2 += runtime.suppressValue((lineno = 51, colno = 85, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((t_14),"description"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</p>";
;
}
t_2 += "\n                            </td>";
if(runtime.memberLookup((t_14),"status")) {
t_2 += "\n                            <td class=\"govcy-valign-top govcy-text-end\">\n                                <span class=\"govcy-tag ";
t_2 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_14),"status")),"classes"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 55, colno = 105, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((runtime.memberLookup((t_14),"status")),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</span>\n                            </td>";
;
}
t_2 += "\n                        </tr>";
;
}
;
}
;
}
}
frame = frame.pop();
t_2 += "\n        </tbody>\n    </table>\n";
})});
}
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("taskList");
context.setVariable("taskList", macro_t_1);
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
if(Object.prototype.hasOwnProperty.call(t_3, "govcyGetContent")) {
var t_8 = t_3.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_8);
env.getTemplate("elements/formControl.njk", false, "elements/textArea.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
t_9.getExported(function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
if(Object.prototype.hasOwnProperty.call(t_9, "formControl")) {
var t_12 = t_9.formControl;
} else {
cb(new Error("cannot import 'formControl'")); return;
}
context.setVariable("formControl", t_12);
env.getTemplate("elements/hint.njk", false, "elements/textArea.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
t_13.getExported(function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
if(Object.prototype.hasOwnProperty.call(t_13, "hint")) {
var t_16 = t_13.hint;
} else {
cb(new Error("cannot import 'hint'")); return;
}
context.setVariable("hint", t_16);
env.getTemplate("elements/label.njk", false, "elements/textArea.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
t_17.getExported(function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
if(Object.prototype.hasOwnProperty.call(t_17, "label")) {
var t_20 = t_17.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_20);
env.getTemplate("elements/errorMessage.njk", false, "elements/textArea.njk", false, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
t_21.getExported(function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
if(Object.prototype.hasOwnProperty.call(t_21, "errorMessage")) {
var t_24 = t_21.errorMessage;
} else {
cb(new Error("cannot import 'errorMessage'")); return;
}
context.setVariable("errorMessage", t_24);
var t_25;
t_25 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isValueEscaped"),true);
frame.set("isValueEscaped", t_25, true);
if(frame.topLevel) {
context.setVariable("isValueEscaped", t_25);
}
if(frame.topLevel) {
context.addExport("isValueEscaped", t_25);
}
var t_26;
t_26 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isPageHeading"),false);
frame.set("isPageHeading", t_26, true);
if(frame.topLevel) {
context.setVariable("isPageHeading", t_26);
}
if(frame.topLevel) {
context.addExport("isPageHeading", t_26);
}
var t_27;
t_27 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isSpellcheck"),false);
frame.set("isSpellcheck", t_27, true);
if(frame.topLevel) {
context.setVariable("isSpellcheck", t_27);
}
if(frame.topLevel) {
context.addExport("isSpellcheck", t_27);
}
var t_28;
t_28 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"autocomplete"),false);
frame.set("autocomplete", t_28, true);
if(frame.topLevel) {
context.setVariable("autocomplete", t_28);
}
if(frame.topLevel) {
context.addExport("autocomplete", t_28);
}
var t_29;
t_29 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"rows"),"5");
frame.set("rows", t_29, true);
if(frame.topLevel) {
context.setVariable("rows", t_29);
}
if(frame.topLevel) {
context.addExport("rows", t_29);
}
if(runtime.memberLookup((l_params),"label") && runtime.memberLookup((l_params),"id")) {
var t_30;
t_30 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-hint"]);
frame.set("hintId", t_30, true);
if(frame.topLevel) {
context.setVariable("hintId", t_30);
}
if(frame.topLevel) {
context.addExport("hintId", t_30);
}
var t_31;
t_31 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-label"]);
frame.set("labelId", t_31, true);
if(frame.topLevel) {
context.setVariable("labelId", t_31);
}
if(frame.topLevel) {
context.addExport("labelId", t_31);
}
var t_32;
t_32 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-error"]);
frame.set("errorId", t_32, true);
if(frame.topLevel) {
context.setVariable("errorId", t_32);
}
if(frame.topLevel) {
context.addExport("errorId", t_32);
}
var t_33;
t_33 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-char-count"]);
frame.set("charactercountId", t_33, true);
if(frame.topLevel) {
context.setVariable("charactercountId", t_33);
}
if(frame.topLevel) {
context.addExport("charactercountId", t_33);
}
if(runtime.contextOrFrameLookup(context, frame, "isSpellcheck")) {
var t_34;
t_34 = "spellcheck=\"true\"";
frame.set("inputSpellcheck", t_34, true);
if(frame.topLevel) {
context.setVariable("inputSpellcheck", t_34);
}
if(frame.topLevel) {
context.addExport("inputSpellcheck", t_34);
}
;
}
else {
var t_35;
t_35 = "spellcheck=\"false\"";
frame.set("inputSpellcheck", t_35, true);
if(frame.topLevel) {
context.setVariable("inputSpellcheck", t_35);
}
if(frame.topLevel) {
context.addExport("inputSpellcheck", t_35);
}
;
}
if(runtime.contextOrFrameLookup(context, frame, "autocomplete")) {
var t_36;
t_36 = (function() {
var output = "";
output += "autocomplete=\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "autocomplete")), env.opts.autoescape);
output += "\"";
;
return output;
})()
;
frame.set("inputAutocomplete", t_36, true);
if(frame.topLevel) {
context.setVariable("inputAutocomplete", t_36);
}
if(frame.topLevel) {
context.addExport("inputAutocomplete", t_36);
}
;
}
else {
var t_37;
t_37 = "";
frame.set("inputAutocomplete", t_37, true);
if(frame.topLevel) {
context.setVariable("inputAutocomplete", t_37);
}
if(frame.topLevel) {
context.addExport("inputAutocomplete", t_37);
}
;
}
t_2 += runtime.suppressValue((lineno = 52, colno = 23, runtime.callWrap(t_12, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error")),"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_38 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_39 = "";t_39 += runtime.suppressValue((lineno = 54, colno = 21, runtime.callWrap(t_20, "label", context, [{"label": runtime.memberLookup((l_params),"label"),"id": runtime.contextOrFrameLookup(context, frame, "labelId"),"for": runtime.memberLookup((l_params),"id"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_40 = runtime.makeMacro(
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
t_39 += runtime.suppressValue((lineno = 56, colno = 20, runtime.callWrap(t_16, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_42 = runtime.makeMacro(
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
t_39 += runtime.suppressValue((lineno = 58, colno = 28, runtime.callWrap(t_24, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_44 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_45 = "";;
frame = frame.pop();
return new runtime.SafeString(t_45);
});
return macro_t_44;})()})])), env.opts.autoescape);
t_39 += "<textarea id=\"";
t_39 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_39 += "\"";
if(runtime.memberLookup((l_params),"name")) {
t_39 += " name=\"";
t_39 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_39 += "\"";
;
}
t_39 += " rows=\"";
t_39 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "rows"), env.opts.autoescape);
t_39 += "\" ";
t_39 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "inputSpellcheck")), env.opts.autoescape);
t_39 += " ";
t_39 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "inputAutocomplete")), env.opts.autoescape);
t_39 += " class=\"govcy-text-area";
if(runtime.memberLookup((l_params),"error")) {
t_39 += " govcy-text-area-error";
;
}
t_39 += "\"";
if(runtime.memberLookup((l_params),"hint") || runtime.memberLookup((l_params),"error") || runtime.memberLookup((l_params),"characterCount")) {
t_39 += " aria-describedby=\"";
if(runtime.memberLookup((l_params),"characterCount")) {
t_39 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "charactercountId"), env.opts.autoescape);
;
}
if(runtime.memberLookup((l_params),"hint")) {
t_39 += " ";
t_39 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hintId"), env.opts.autoescape);
;
}
if(runtime.memberLookup((l_params),"error")) {
t_39 += " ";
t_39 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "errorId"), env.opts.autoescape);
;
}
t_39 += "\"";
;
}
t_39 += ">";
if(env.getTest("defined").call(context, runtime.memberLookup((l_params),"value")) === true) {
t_39 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "isValueEscaped")?env.getFilter("default").call(context, runtime.memberLookup((l_params),"value"),""):env.getFilter("safe").call(context, runtime.memberLookup((l_params),"value"))), env.opts.autoescape);
;
}
t_39 += "</textarea>\n        ";
if(runtime.memberLookup((l_params),"characterCount")) {
var t_46;
t_46 = env.getFilter("default").call(context, runtime.memberLookup((runtime.memberLookup((l_params),"characterCount")),"type"),"char");
frame.set("charactercountType", t_46, true);
if(frame.topLevel) {
context.setVariable("charactercountType", t_46);
}
if(frame.topLevel) {
context.addExport("charactercountType", t_46);
}
var t_47;
t_47 = env.getFilter("default").call(context, runtime.memberLookup((runtime.memberLookup((l_params),"characterCount")),"max"),100);
frame.set("charactercountMax", t_47, true);
if(frame.topLevel) {
context.setVariable("charactercountMax", t_47);
}
if(frame.topLevel) {
context.addExport("charactercountMax", t_47);
}
var t_48;
t_48 = (lineno = 66, colno = 51, runtime.callWrap(t_8, "govcyGetContent", context, ["textArea_charRemaining",runtime.memberLookup((l_params),"lang"),true]));
frame.set("charRemaining", t_48, true);
if(frame.topLevel) {
context.setVariable("charRemaining", t_48);
}
if(frame.topLevel) {
context.addExport("charRemaining", t_48);
}
var t_49;
t_49 = (lineno = 67, colno = 51, runtime.callWrap(t_8, "govcyGetContent", context, ["textArea_charExceeding",runtime.memberLookup((l_params),"lang"),true]));
frame.set("charExceeding", t_49, true);
if(frame.topLevel) {
context.setVariable("charExceeding", t_49);
}
if(frame.topLevel) {
context.addExport("charExceeding", t_49);
}
var t_50;
t_50 = (lineno = 68, colno = 51, runtime.callWrap(t_8, "govcyGetContent", context, ["textArea_wordRemaining",runtime.memberLookup((l_params),"lang"),true]));
frame.set("wordRemaining", t_50, true);
if(frame.topLevel) {
context.setVariable("wordRemaining", t_50);
}
if(frame.topLevel) {
context.addExport("wordRemaining", t_50);
}
var t_51;
t_51 = (lineno = 69, colno = 52, runtime.callWrap(t_8, "govcyGetContent", context, ["textArea_wordsExceeding",runtime.memberLookup((l_params),"lang"),true]));
frame.set("wordsExceeding", t_51, true);
if(frame.topLevel) {
context.setVariable("wordsExceeding", t_51);
}
if(frame.topLevel) {
context.addExport("wordsExceeding", t_51);
}
t_39 += "<div id=\"";
t_39 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "charactercountId"), env.opts.autoescape);
t_39 += "\" class=\"govcy-character-count\"";
if(runtime.contextOrFrameLookup(context, frame, "charactercountType") == "word") {
t_39 += "data-maxwords";
;
}
else {
t_39 += "data-maxchars";
;
}
t_39 += "=\"";
t_39 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "charactercountMax"), env.opts.autoescape);
t_39 += "\">\n                <div class=\"govcy-character-remaining-counter\">";
if(runtime.contextOrFrameLookup(context, frame, "charactercountType") == "word") {
t_39 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "wordRemaining")), env.opts.autoescape);
;
}
else {
t_39 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "charRemaining")), env.opts.autoescape);
;
}
t_39 += "</div>\n                <div class=\"govcy-character-more-counter\">";
if(runtime.contextOrFrameLookup(context, frame, "charactercountType") == "word") {
t_39 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "wordsExceeding")), env.opts.autoescape);
;
}
else {
t_39 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "charExceeding")), env.opts.autoescape);
;
}
t_39 += "</div>\n            </div>";
;
}
;
frame = frame.pop();
return new runtime.SafeString(t_39);
});
return macro_t_38;})()})])), env.opts.autoescape);
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
var t_4;
t_4 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"showNewLine"),false);
frame.set("showNewLine", t_4, true);
if(frame.topLevel) {
context.setVariable("showNewLine", t_4);
}
if(frame.topLevel) {
context.addExport("showNewLine", t_4);
}
if(runtime.memberLookup((l_params),"text")) {
env.getTemplate("utilities/govcyUtilities.njk", false, "elements/textElement.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
t_5.getExported(function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
if(Object.prototype.hasOwnProperty.call(t_5, "govcyLocalizeContent")) {
var t_8 = t_5.govcyLocalizeContent;
} else {
cb(new Error("cannot import 'govcyLocalizeContent'")); return;
}
context.setVariable("govcyLocalizeContent", t_8);
if(Object.prototype.hasOwnProperty.call(t_5, "govcyLangAttribute")) {
var t_9 = t_5.govcyLangAttribute;
} else {
cb(new Error("cannot import 'govcyLangAttribute'")); return;
}
context.setVariable("govcyLangAttribute", t_9);
if(runtime.contextOrFrameLookup(context, frame, "textType") == "p" || runtime.contextOrFrameLookup(context, frame, "textType") == "h1" || runtime.contextOrFrameLookup(context, frame, "textType") == "h2" || runtime.contextOrFrameLookup(context, frame, "textType") == "h3" || runtime.contextOrFrameLookup(context, frame, "textType") == "h4" || runtime.contextOrFrameLookup(context, frame, "textType") == "span") {
var t_10;
t_10 = runtime.contextOrFrameLookup(context, frame, "textType");
frame.set("textTag", t_10, true);
if(frame.topLevel) {
context.setVariable("textTag", t_10);
}
if(frame.topLevel) {
context.addExport("textTag", t_10);
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
if(runtime.contextOrFrameLookup(context, frame, "showNewLine")) {
t_2 += " style=\"white-space: pre-line;\"";
;
}
t_2 += runtime.suppressValue((lineno = 19, colno = 219, runtime.callWrap(t_9, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">";
t_2 += runtime.suppressValue((lineno = 19, colno = 259, runtime.callWrap(t_8, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"text"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</";
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
t_24 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isValueEscaped"),true);
frame.set("isValueEscaped", t_24, true);
if(frame.topLevel) {
context.setVariable("isValueEscaped", t_24);
}
if(frame.topLevel) {
context.addExport("isValueEscaped", t_24);
}
var t_25;
t_25 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isPageHeading"),false);
frame.set("isPageHeading", t_25, true);
if(frame.topLevel) {
context.setVariable("isPageHeading", t_25);
}
if(frame.topLevel) {
context.addExport("isPageHeading", t_25);
}
var t_26;
t_26 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"isSpellcheck"),false);
frame.set("isSpellcheck", t_26, true);
if(frame.topLevel) {
context.setVariable("isSpellcheck", t_26);
}
if(frame.topLevel) {
context.addExport("isSpellcheck", t_26);
}
var t_27;
t_27 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"type"),"text");
frame.set("type", t_27, true);
if(frame.topLevel) {
context.setVariable("type", t_27);
}
if(frame.topLevel) {
context.addExport("type", t_27);
}
var t_28;
t_28 = env.getFilter("default").call(context, runtime.memberLookup((l_params),"autocomplete"),"");
frame.set("autocomplete", t_28, true);
if(frame.topLevel) {
context.setVariable("autocomplete", t_28);
}
if(frame.topLevel) {
context.addExport("autocomplete", t_28);
}
if(runtime.memberLookup((l_params),"label") && runtime.memberLookup((l_params),"id")) {
var t_29;
t_29 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-hint"]);
frame.set("hintId", t_29, true);
if(frame.topLevel) {
context.setVariable("hintId", t_29);
}
if(frame.topLevel) {
context.addExport("hintId", t_29);
}
var t_30;
t_30 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-label"]);
frame.set("labelId", t_30, true);
if(frame.topLevel) {
context.setVariable("labelId", t_30);
}
if(frame.topLevel) {
context.addExport("labelId", t_30);
}
var t_31;
t_31 = env.getFilter("join").call(context, [runtime.memberLookup((l_params),"id"),"-error"]);
frame.set("errorId", t_31, true);
if(frame.topLevel) {
context.setVariable("errorId", t_31);
}
if(frame.topLevel) {
context.addExport("errorId", t_31);
}
var t_32;
t_32 = env.getFilter("join").call(context, ["govcy-text-input-char_",runtime.memberLookup((l_params),"fixedWidth")]);
frame.set("fixedWidthClass", t_32, true);
if(frame.topLevel) {
context.setVariable("fixedWidthClass", t_32);
}
if(frame.topLevel) {
context.addExport("fixedWidthClass", t_32);
}
if(runtime.contextOrFrameLookup(context, frame, "type") == "text") {
var t_33;
t_33 = "type=\"text\"";
frame.set("inputType", t_33, true);
if(frame.topLevel) {
context.setVariable("inputType", t_33);
}
if(frame.topLevel) {
context.addExport("inputType", t_33);
}
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "email") {
var t_34;
t_34 = "type=\"email\"";
frame.set("inputType", t_34, true);
if(frame.topLevel) {
context.setVariable("inputType", t_34);
}
if(frame.topLevel) {
context.addExport("inputType", t_34);
}
var t_35;
t_35 = false;
frame.set("isSpellcheck", t_35, true);
if(frame.topLevel) {
context.setVariable("isSpellcheck", t_35);
}
if(frame.topLevel) {
context.addExport("isSpellcheck", t_35);
}
var t_36;
t_36 = "email";
frame.set("autocomplete", t_36, true);
if(frame.topLevel) {
context.setVariable("autocomplete", t_36);
}
if(frame.topLevel) {
context.addExport("autocomplete", t_36);
}
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "tel") {
var t_37;
t_37 = "type=\"tel\"";
frame.set("inputType", t_37, true);
if(frame.topLevel) {
context.setVariable("inputType", t_37);
}
if(frame.topLevel) {
context.addExport("inputType", t_37);
}
var t_38;
t_38 = false;
frame.set("isSpellcheck", t_38, true);
if(frame.topLevel) {
context.setVariable("isSpellcheck", t_38);
}
if(frame.topLevel) {
context.addExport("isSpellcheck", t_38);
}
var t_39;
t_39 = "tel";
frame.set("autocomplete", t_39, true);
if(frame.topLevel) {
context.setVariable("autocomplete", t_39);
}
if(frame.topLevel) {
context.addExport("autocomplete", t_39);
}
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "name") {
var t_40;
t_40 = "type=\"text\"";
frame.set("inputType", t_40, true);
if(frame.topLevel) {
context.setVariable("inputType", t_40);
}
if(frame.topLevel) {
context.addExport("inputType", t_40);
}
var t_41;
t_41 = false;
frame.set("isSpellcheck", t_41, true);
if(frame.topLevel) {
context.setVariable("isSpellcheck", t_41);
}
if(frame.topLevel) {
context.addExport("isSpellcheck", t_41);
}
var t_42;
t_42 = "name";
frame.set("autocomplete", t_42, true);
if(frame.topLevel) {
context.setVariable("autocomplete", t_42);
}
if(frame.topLevel) {
context.addExport("autocomplete", t_42);
}
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") == "numeric") {
var t_43;
t_43 = "type=\"text\" pattern=\"[0-9]*\" inputmode=\"numeric\"";
frame.set("inputType", t_43, true);
if(frame.topLevel) {
context.setVariable("inputType", t_43);
}
if(frame.topLevel) {
context.addExport("inputType", t_43);
}
var t_44;
t_44 = false;
frame.set("isSpellcheck", t_44, true);
if(frame.topLevel) {
context.setVariable("isSpellcheck", t_44);
}
if(frame.topLevel) {
context.addExport("isSpellcheck", t_44);
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
var t_45;
t_45 = "spellcheck=\"true\"";
frame.set("inputSpellcheck", t_45, true);
if(frame.topLevel) {
context.setVariable("inputSpellcheck", t_45);
}
if(frame.topLevel) {
context.addExport("inputSpellcheck", t_45);
}
;
}
else {
var t_46;
t_46 = "spellcheck=\"false\"";
frame.set("inputSpellcheck", t_46, true);
if(frame.topLevel) {
context.setVariable("inputSpellcheck", t_46);
}
if(frame.topLevel) {
context.addExport("inputSpellcheck", t_46);
}
;
}
if(runtime.contextOrFrameLookup(context, frame, "autocomplete")) {
var t_47;
t_47 = (function() {
var output = "";
output += "autocomplete=\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "autocomplete")), env.opts.autoescape);
output += "\"";
;
return output;
})()
;
frame.set("inputAutocomplete", t_47, true);
if(frame.topLevel) {
context.setVariable("inputAutocomplete", t_47);
}
if(frame.topLevel) {
context.addExport("inputAutocomplete", t_47);
}
;
}
else {
var t_48;
t_48 = "";
frame.set("inputAutocomplete", t_48, true);
if(frame.topLevel) {
context.setVariable("inputAutocomplete", t_48);
}
if(frame.topLevel) {
context.addExport("inputAutocomplete", t_48);
}
;
}
t_2 += runtime.suppressValue((lineno = 63, colno = 23, runtime.callWrap(t_11, "formControl", context, [{"isError": (runtime.memberLookup((l_params),"hideFormControlError")?false:runtime.memberLookup((l_params),"error")),"classes": runtime.memberLookup((l_params),"classes"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_49 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_50 = "";t_50 += runtime.suppressValue((lineno = 65, colno = 21, runtime.callWrap(t_19, "label", context, [{"label": runtime.memberLookup((l_params),"label"),"id": runtime.contextOrFrameLookup(context, frame, "labelId"),"for": runtime.memberLookup((l_params),"id"),"isPageHeading": runtime.contextOrFrameLookup(context, frame, "isPageHeading"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_51 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_52 = "";;
frame = frame.pop();
return new runtime.SafeString(t_52);
});
return macro_t_51;})()})])), env.opts.autoescape);
t_50 += runtime.suppressValue((lineno = 67, colno = 20, runtime.callWrap(t_15, "hint", context, [{"hint": runtime.memberLookup((l_params),"hint"),"id": runtime.contextOrFrameLookup(context, frame, "hintId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_53 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_54 = "";;
frame = frame.pop();
return new runtime.SafeString(t_54);
});
return macro_t_53;})()})])), env.opts.autoescape);
t_50 += runtime.suppressValue((lineno = 69, colno = 28, runtime.callWrap(t_23, "errorMessage", context, [{"message": runtime.memberLookup((l_params),"error"),"id": runtime.contextOrFrameLookup(context, frame, "errorId"),"lang": runtime.memberLookup((l_params),"lang")},runtime.makeKeywordArgs({"caller": (function (){var macro_t_55 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_56 = "";;
frame = frame.pop();
return new runtime.SafeString(t_56);
});
return macro_t_55;})()})])), env.opts.autoescape);
t_50 += "<input id=\"";
t_50 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_50 += "\"";
if(env.getTest("defined").call(context, runtime.memberLookup((l_params),"value")) === true) {
t_50 += " value=\"";
t_50 += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "isValueEscaped")?env.getFilter("default").call(context, runtime.memberLookup((l_params),"value"),""):env.getFilter("safe").call(context, runtime.memberLookup((l_params),"value"))), env.opts.autoescape);
t_50 += "\"";
;
}
t_50 += " ";
if(runtime.memberLookup((l_params),"name")) {
t_50 += " name=\"";
t_50 += runtime.suppressValue(runtime.memberLookup((l_params),"name"), env.opts.autoescape);
t_50 += "\"";
;
}
t_50 += " ";
t_50 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "inputType")), env.opts.autoescape);
t_50 += " ";
t_50 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "inputSpellcheck")), env.opts.autoescape);
t_50 += " ";
t_50 += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "inputAutocomplete")), env.opts.autoescape);
t_50 += " class=\"govcy-text-input";
if(runtime.memberLookup((l_params),"fixedWidth")) {
t_50 += " ";
t_50 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "fixedWidthClass"), env.opts.autoescape);
;
}
if(runtime.memberLookup((l_params),"error")) {
t_50 += " govcy-text-input-error";
;
}
t_50 += "\"";
if(runtime.memberLookup((l_params),"hint") || runtime.memberLookup((l_params),"error")) {
t_50 += " aria-describedby=\"";
if(runtime.memberLookup((l_params),"hint")) {
t_50 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "hintId"), env.opts.autoescape);
t_50 += " ";
;
}
if(runtime.memberLookup((l_params),"error")) {
t_50 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "errorId"), env.opts.autoescape);
t_50 += " ";
;
}
t_50 += "\"";
;
}
t_50 += ">\n    ";
;
frame = frame.pop();
return new runtime.SafeString(t_50);
});
return macro_t_49;})()})])), env.opts.autoescape);
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["elements/userName.njk"] = (function() {
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
var t_2 = "";env.getTemplate("utilities/govcyUtilities.njk", false, "elements/userName.njk", false, function(t_4,t_3) {
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
if(Object.prototype.hasOwnProperty.call(t_3, "govcyGetContent")) {
var t_8 = t_3.govcyGetContent;
} else {
cb(new Error("cannot import 'govcyGetContent'")); return;
}
context.setVariable("govcyGetContent", t_8);
var t_9;
t_9 = (lineno = 12, colno = 33, runtime.callWrap(t_8, "govcyGetContent", context, ["userName_signOut",runtime.memberLookup((l_params),"lang")]));
frame.set("signOut", t_9, true);
if(frame.topLevel) {
context.setVariable("signOut", t_9);
}
if(frame.topLevel) {
context.addExport("signOut", t_9);
}
var t_10;
t_10 = (lineno = 13, colno = 44, runtime.callWrap(t_8, "govcyGetContent", context, ["userName_fromUser",runtime.memberLookup((l_params),"lang")]));
frame.set("userVisuallyHidden", t_10, true);
if(frame.topLevel) {
context.setVariable("userVisuallyHidden", t_10);
}
if(frame.topLevel) {
context.addExport("userVisuallyHidden", t_10);
}
if(runtime.memberLookup((l_params),"name") && runtime.memberLookup((l_params),"signOutLink")) {
t_2 += "\r\n    <div ";
if(runtime.memberLookup((l_params),"id")) {
t_2 += "id=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"id"), env.opts.autoescape);
t_2 += "\" ";
;
}
t_2 += "class=\"govcy-header-top-area";
if(runtime.memberLookup((l_params),"classes")) {
t_2 += " ";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"classes"), env.opts.autoescape);
;
}
t_2 += "\"";
t_2 += runtime.suppressValue((lineno = 15, colno = 164, runtime.callWrap(t_7, "govcyLangAttribute", context, [runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += ">\r\n        <div class=\"govcy-container\">\r\n            <div class=\"govcy-header-top-area-wrapper\">\r\n                <ul class=\"govcy-sign-in\">\r\n                    <li>";
t_2 += runtime.suppressValue((lineno = 19, colno = 47, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"name"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</li>\r\n                    <li><span>|</span></li>\r\n                    <li><a href=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((l_params),"signOutLink"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "signOut"), env.opts.autoescape);
t_2 += "<span class=\"govcy-visually-hidden-error\"> ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userVisuallyHidden"), env.opts.autoescape);
t_2 += " ";
t_2 += runtime.suppressValue((lineno = 21, colno = 163, runtime.callWrap(t_6, "govcyLocalizeContent", context, [runtime.memberLookup((l_params),"name"),runtime.memberLookup((l_params),"lang")])), env.opts.autoescape);
t_2 += "</span></a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>";
;
}
})});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("userName");
context.setVariable("userName", macro_t_1);
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
t_1 = ["label","legend","hint","button","errorMessage","select","textElement","htmlElement","textInput","radios","checkboxes","fileInput","fileView","backLink","tag","table","summaryList","textArea","markdown","panel","datePicker","dateInput","taskList","errorSummary","details","stepByStepStatic","progressList","userName"];
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
t_4 += runtime.suppressValue((lineno = 35, colno = 22, runtime.callWrap(runtime.memberLookup((t_9),t_8), "comp[\"c\"]", context, [l_params])), env.opts.autoescape);
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
t_4 += runtime.suppressValue((lineno = 42, colno = 29, runtime.callWrap(runtime.memberLookup((t_16),t_15), "compm[\"c\"]", context, [l_params,runtime.makeKeywordArgs({"caller": (function (){var macro_t_19 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = frame.push(true);
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_20 = "";t_20 += runtime.suppressValue((lineno = 43, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
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

