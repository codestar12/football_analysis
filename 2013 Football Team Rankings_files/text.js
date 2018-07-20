define(["module"],function(e){"use strict";var u,i,a,s,f,r=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],t=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,o=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,l=typeof location!=="undefined"&&location.href,c=l&&location.protocol&&location.protocol.replace(/\:/,""),p=l&&location.hostname,d=l&&(location.port||undefined),m={},v=e.config&&e.config()||{};u={version:"2.0.12",strip:function(e){if(e){e=e.replace(t,"");var n=e.match(o);if(n){e=n[1]}}else{e=""}return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:v.createXhr||function(){var e,n,t;if(typeof XMLHttpRequest!=="undefined"){return new XMLHttpRequest}else if(typeof ActiveXObject!=="undefined"){for(n=0;n<3;n+=1){t=r[n];try{e=new ActiveXObject(t)}catch(e){}if(e){r=[t];break}}}return e},parseName:function(e){var n,t,r,i=false,o=e.indexOf("."),a=e.indexOf("./")===0||e.indexOf("../")===0;if(o!==-1&&(!a||o>1)){n=e.substring(0,o);t=e.substring(o+1,e.length)}else{n=e}r=t||n;o=r.indexOf("!");if(o!==-1){i=r.substring(o+1)==="strip";r=r.substring(0,o);if(t){t=r}else{n=r}}return{moduleName:n,ext:t,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,t,r){var i,o,a,s=u.xdRegExp.exec(e);if(!s){return true}i=s[2];o=s[3];o=o.split(":");a=o[1];o=o[0];return(!i||i===n)&&(!o||o.toLowerCase()===t.toLowerCase())&&(!a&&!o||a===r)},finishLoad:function(e,n,t,r){t=n?u.strip(t):t;if(v.isBuild){m[e]=t}r(t)},load:function(n,e,t,r){if(r&&r.isBuild&&!r.inlineText){t();return}v.isBuild=r&&r.isBuild;var i=u.parseName(n),o=i.moduleName+(i.ext?"."+i.ext:""),a=e.toUrl(o),s=v.useXhr||u.useXhr;if(a.indexOf("empty:")===0){t();return}if(!l||s(a,c,p,d)){u.get(a,function(e){u.finishLoad(n,i.strip,e,t)},function(e){if(t.error){t.error(e)}})}else{e([o],function(e){u.finishLoad(i.moduleName+"."+i.ext,i.strip,e,t)})}},write:function(e,n,t,r){if(m.hasOwnProperty(n)){var i=u.jsEscape(m[n]);t.asModule(e+"!"+n,"define(function () { return '"+i+"';});\n")}},writeFile:function(t,e,n,r,i){var o=u.parseName(e),a=o.ext?"."+o.ext:"",s=o.moduleName+a,f=n.toUrl(o.moduleName+a)+".js";u.load(s,n,function(e){var n=function(e){return r(f,e)};n.asModule=function(e,n){return r.asModule(e,f,n)};u.write(t,s,n,i)},i)}};if(v.env==="node"||!v.env&&typeof process!=="undefined"&&process.versions&&!!process.versions.node&&!process.versions["node-webkit"]){i=require.nodeRequire("fs");u.get=function(e,n,t){try{var r=i.readFileSync(e,"utf8");if(r.indexOf("\ufeff")===0){r=r.substring(1)}n(r)}catch(e){if(t){t(e)}}}}else if(v.env==="xhr"||!v.env&&u.createXhr()){u.get=function(r,i,o,e){var a=u.createXhr(),n;a.open("GET",r,true);if(e){for(n in e){if(e.hasOwnProperty(n)){a.setRequestHeader(n.toLowerCase(),e[n])}}}if(v.onXhr){v.onXhr(a,r)}a.onreadystatechange=function(e){var n,t;if(a.readyState===4){n=a.status||0;if(n>399&&n<600){t=new Error(r+" HTTP status: "+n);t.xhr=a;if(o){o(t)}}else{i(a.responseText)}if(v.onXhrComplete){v.onXhrComplete(a,r)}}};a.send(null)}}else if(v.env==="rhino"||!v.env&&typeof Packages!=="undefined"&&typeof java!=="undefined"){u.get=function(e,n){var t,r,i="utf-8",o=new java.io.File(e),a=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o),i)),f="";try{t=new java.lang.StringBuffer;r=s.readLine();if(r&&r.length()&&r.charAt(0)===65279){r=r.substring(1)}if(r!==null){t.append(r)}while((r=s.readLine())!==null){t.append(a);t.append(r)}f=String(t.toString())}finally{s.close()}n(f)}}else if(v.env==="xpconnect"||!v.env&&typeof Components!=="undefined"&&Components.classes&&Components.interfaces){a=Components.classes;s=Components.interfaces;Components.utils["import"]("resource://gre/modules/FileUtils.jsm");f="@mozilla.org/windows-registry-key;1"in a;u.get=function(e,n){var t,r,i,o={};if(f){e=e.replace(/\//g,"\\")}i=new FileUtils.File(e);try{t=a["@mozilla.org/network/file-input-stream;1"].createInstance(s.nsIFileInputStream);t.init(i,1,0,false);r=a["@mozilla.org/intl/converter-input-stream;1"].createInstance(s.nsIConverterInputStream);r.init(t,"utf-8",t.available(),s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);r.readString(t.available(),o);r.close();t.close();n(o.value)}catch(e){throw new Error((i&&i.path||"")+": "+e)}}}return u});