define(["jquery","libs/debug"],function(e,n){n=n.init("locale");var o={en:{code:"en",language:"en"}};var a=typeof window!=="undefined"&&window.SportsPageVars&&window.SportsPageVars.locale;a=o[a]&&o[a].code||"en";n.log("localeCode: ",a);var g={getCode:function(){n.log("getCode: ",o[a].code);return o[a].code},getLanguage:function(){n.log("getLanguage: ",o[a].language);return o[a].language}};return g});