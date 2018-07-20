(function(){var n=this;var r=n._;var a={};var i=Array.prototype,t=Object.prototype,e=Function.prototype;var u=i.push,f=i.slice,l=i.concat,s=t.toString,o=t.hasOwnProperty;var c=i.forEach,p=i.map,v=i.reduce,h=i.reduceRight,y=i.filter,d=i.every,g=i.some,m=i.indexOf,b=i.lastIndexOf,w=Array.isArray,x=Object.keys,_=e.bind;var j=function(n){if(n instanceof j)return n;if(!(this instanceof j))return new j(n);this._wrapped=n};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=j}exports._=j}else{n._=j}j.VERSION="1.5.1";var A=j.each=j.forEach=function(n,r,t){if(n==null)return;if(c&&n.forEach===c){n.forEach(r,t)}else if(n.length===+n.length){for(var e=0,i=n.length;e<i;e++){if(r.call(t,n[e],e,n)===a)return}}else{for(var u in n){if(j.has(n,u)){if(r.call(t,n[u],u,n)===a)return}}}};j.map=j.collect=function(n,e,i){var u=[];if(n==null)return u;if(p&&n.map===p)return n.map(e,i);A(n,function(n,r,t){u.push(e.call(i,n,r,t))});return u};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,e,i,u){var a=arguments.length>2;if(n==null)n=[];if(v&&n.reduce===v){if(u)e=j.bind(e,u);return a?n.reduce(e,i):n.reduce(e)}A(n,function(n,r,t){if(!a){i=n;a=true}else{i=e.call(u,i,n,r,t)}});if(!a)throw new TypeError(E);return i};j.reduceRight=j.foldr=function(e,i,u,a){var f=arguments.length>2;if(e==null)e=[];if(h&&e.reduceRight===h){if(a)i=j.bind(i,a);return f?e.reduceRight(i,u):e.reduceRight(i)}var l=e.length;if(l!==+l){var o=j.keys(e);l=o.length}A(e,function(n,r,t){r=o?o[--l]:--l;if(!f){u=e[r];f=true}else{u=i.call(a,u,e[r],r,t)}});if(!f)throw new TypeError(E);return u};j.find=j.detect=function(n,e,i){var u;O(n,function(n,r,t){if(e.call(i,n,r,t)){u=n;return true}});return u};j.filter=j.select=function(n,e,i){var u=[];if(n==null)return u;if(y&&n.filter===y)return n.filter(e,i);A(n,function(n,r,t){if(e.call(i,n,r,t))u.push(n)});return u};j.reject=function(n,e,i){return j.filter(n,function(n,r,t){return!e.call(i,n,r,t)},i)};j.every=j.all=function(n,e,i){e||(e=j.identity);var u=true;if(n==null)return u;if(d&&n.every===d)return n.every(e,i);A(n,function(n,r,t){if(!(u=u&&e.call(i,n,r,t)))return a});return!!u};var O=j.some=j.any=function(n,e,i){e||(e=j.identity);var u=false;if(n==null)return u;if(g&&n.some===g)return n.some(e,i);A(n,function(n,r,t){if(u||(u=e.call(i,n,r,t)))return a});return!!u};j.contains=j.include=function(n,r){if(n==null)return false;if(m&&n.indexOf===m)return n.indexOf(r)!=-1;return O(n,function(n){return n===r})};j.invoke=function(n,r){var t=f.call(arguments,2);var e=j.isFunction(r);return j.map(n,function(n){return(e?r:n[r]).apply(n,t)})};j.pluck=function(n,r){return j.map(n,function(n){return n[r]})};j.where=function(n,t,r){if(j.isEmpty(t))return r?void 0:[];return j[r?"find":"filter"](n,function(n){for(var r in t){if(t[r]!==n[r])return false}return true})};j.findWhere=function(n,r){return j.where(n,r,true)};j.max=function(n,i,u){if(!i&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535){return Math.max.apply(Math,n)}if(!i&&j.isEmpty(n))return-Infinity;var a={computed:-Infinity,value:-Infinity};A(n,function(n,r,t){var e=i?i.call(u,n,r,t):n;e>a.computed&&(a={value:n,computed:e})});return a.value};j.min=function(n,i,u){if(!i&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535){return Math.min.apply(Math,n)}if(!i&&j.isEmpty(n))return Infinity;var a={computed:Infinity,value:Infinity};A(n,function(n,r,t){var e=i?i.call(u,n,r,t):n;e<a.computed&&(a={value:n,computed:e})});return a.value};j.shuffle=function(n){var r;var t=0;var e=[];A(n,function(n){r=j.random(t++);e[t-1]=e[r];e[r]=n});return e};var k=function(r){return j.isFunction(r)?r:function(n){return n[r]}};j.sortBy=function(n,r,e){var i=k(r);return j.pluck(j.map(n,function(n,r,t){return{value:n,index:r,criteria:i.call(e,n,r,t)}}).sort(function(n,r){var t=n.criteria;var e=r.criteria;if(t!==e){if(t>e||t===void 0)return 1;if(t<e||e===void 0)return-1}return n.index<r.index?-1:1}),"value")};var F=function(e,n,i,u){var a={};var f=k(n==null?j.identity:n);A(e,function(n,r){var t=f.call(i,n,r,e);u(a,t,n)});return a};j.groupBy=function(n,r,t){return F(n,r,t,function(n,r,t){(j.has(n,r)?n[r]:n[r]=[]).push(t)})};j.countBy=function(n,r,t){return F(n,r,t,function(n,r){if(!j.has(n,r))n[r]=0;n[r]++})};j.sortedIndex=function(n,r,t,e){t=t==null?j.identity:k(t);var i=t.call(e,r);var u=0,a=n.length;while(u<a){var f=u+a>>>1;t.call(e,n[f])<i?u=f+1:a=f}return u};j.toArray=function(n){if(!n)return[];if(j.isArray(n))return f.call(n);if(n.length===+n.length)return j.map(n,j.identity);return j.values(n)};j.size=function(n){if(n==null)return 0;return n.length===+n.length?n.length:j.keys(n).length};j.first=j.head=j.take=function(n,r,t){if(n==null)return void 0;return r!=null&&!t?f.call(n,0,r):n[0]};j.initial=function(n,r,t){return f.call(n,0,n.length-(r==null||t?1:r))};j.last=function(n,r,t){if(n==null)return void 0;if(r!=null&&!t){return f.call(n,Math.max(n.length-r,0))}else{return n[n.length-1]}};j.rest=j.tail=j.drop=function(n,r,t){return f.call(n,r==null||t?1:r)};j.compact=function(n){return j.filter(n,j.identity)};var I=function(n,r,t){if(r&&j.every(n,j.isArray)){return l.apply(t,n)}A(n,function(n){if(j.isArray(n)||j.isArguments(n)){r?u.apply(t,n):I(n,r,t)}else{t.push(n)}});return t};j.flatten=function(n,r){return I(n,r,[])};j.without=function(n){return j.difference(n,f.call(arguments,1))};j.uniq=j.unique=function(t,e,n,r){if(j.isFunction(e)){r=n;n=e;e=false}var i=n?j.map(t,n,r):t;var u=[];var a=[];A(i,function(n,r){if(e?!r||a[a.length-1]!==n:!j.contains(a,n)){a.push(n);u.push(t[r])}});return u};j.union=function(){return j.uniq(j.flatten(arguments,true))};j.intersection=function(n){var t=f.call(arguments,1);return j.filter(j.uniq(n),function(r){return j.every(t,function(n){return j.indexOf(n,r)>=0})})};j.difference=function(n){var r=l.apply(i,f.call(arguments,1));return j.filter(n,function(n){return!j.contains(r,n)})};j.zip=function(){var n=j.max(j.pluck(arguments,"length").concat(0));var r=new Array(n);for(var t=0;t<n;t++){r[t]=j.pluck(arguments,""+t)}return r};j.object=function(n,r){if(n==null)return{};var t={};for(var e=0,i=n.length;e<i;e++){if(r){t[n[e]]=r[e]}else{t[n[e][0]]=n[e][1]}}return t};j.indexOf=function(n,r,t){if(n==null)return-1;var e=0,i=n.length;if(t){if(typeof t=="number"){e=t<0?Math.max(0,i+t):t}else{e=j.sortedIndex(n,r);return n[e]===r?e:-1}}if(m&&n.indexOf===m)return n.indexOf(r,t);for(;e<i;e++)if(n[e]===r)return e;return-1};j.lastIndexOf=function(n,r,t){if(n==null)return-1;var e=t!=null;if(b&&n.lastIndexOf===b){return e?n.lastIndexOf(r,t):n.lastIndexOf(r)}var i=e?t:n.length;while(i--)if(n[i]===r)return i;return-1};j.range=function(n,r,t){if(arguments.length<=1){r=n||0;n=0}t=arguments[2]||1;var e=Math.max(Math.ceil((r-n)/t),0);var i=0;var u=new Array(e);while(i<e){u[i++]=n;n+=t}return u};var R=function(){};j.bind=function(t,e){var i,u;if(_&&t.bind===_)return _.apply(t,f.call(arguments,1));if(!j.isFunction(t))throw new TypeError;i=f.call(arguments,2);return u=function(){if(!(this instanceof u))return t.apply(e,i.concat(f.call(arguments)));R.prototype=t.prototype;var n=new R;R.prototype=null;var r=t.apply(n,i.concat(f.call(arguments)));if(Object(r)===r)return r;return n}};j.partial=function(n){var r=f.call(arguments,1);return function(){return n.apply(this,r.concat(f.call(arguments)))}};j.bindAll=function(r){var n=f.call(arguments,1);if(n.length===0)throw new Error("bindAll must be passed function names");A(n,function(n){r[n]=j.bind(r[n],r)});return r};j.memoize=function(r,t){var e={};t||(t=j.identity);return function(){var n=t.apply(this,arguments);return j.has(e,n)?e[n]:e[n]=r.apply(this,arguments)}};j.delay=function(n,r){var t=f.call(arguments,2);return setTimeout(function(){return n.apply(null,t)},r)};j.defer=function(n){return j.delay.apply(j,[n,1].concat(f.call(arguments,1)))};j.throttle=function(t,e,i){var u,a,f;var l=null;var o=0;i||(i={});var c=function(){o=i.leading===false?0:new Date;l=null;f=t.apply(u,a)};return function(){var n=new Date;if(!o&&i.leading===false)o=n;var r=e-(n-o);u=this;a=arguments;if(r<=0){clearTimeout(l);l=null;o=n;f=t.apply(u,a)}else if(!l&&i.trailing!==false){l=setTimeout(c,r)}return f}};j.debounce=function(i,u,a){var f;var l=null;return function(){var n=this,r=arguments;var t=function(){l=null;if(!a)f=i.apply(n,r)};var e=a&&!l;clearTimeout(l);l=setTimeout(t,u);if(e)f=i.apply(n,r);return f}};j.once=function(n){var r=false,t;return function(){if(r)return t;r=true;t=n.apply(this,arguments);n=null;return t}};j.wrap=function(r,t){return function(){var n=[r];u.apply(n,arguments);return t.apply(this,n)}};j.compose=function(){var t=arguments;return function(){var n=arguments;for(var r=t.length-1;r>=0;r--){n=[t[r].apply(this,n)]}return n[0]}};j.after=function(n,r){return function(){if(--n<1){return r.apply(this,arguments)}}};j.keys=x||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var r=[];for(var t in n)if(j.has(n,t))r.push(t);return r};j.values=function(n){var r=[];for(var t in n)if(j.has(n,t))r.push(n[t]);return r};j.pairs=function(n){var r=[];for(var t in n)if(j.has(n,t))r.push([t,n[t]]);return r};j.invert=function(n){var r={};for(var t in n)if(j.has(n,t))r[n[t]]=t;return r};j.functions=j.methods=function(n){var r=[];for(var t in n){if(j.isFunction(n[t]))r.push(t)}return r.sort()};j.extend=function(t){A(f.call(arguments,1),function(n){if(n){for(var r in n){t[r]=n[r]}}});return t};j.pick=function(r){var t={};var n=l.apply(i,f.call(arguments,1));A(n,function(n){if(n in r)t[n]=r[n]});return t};j.omit=function(n){var r={};var t=l.apply(i,f.call(arguments,1));for(var e in n){if(!j.contains(t,e))r[e]=n[e]}return r};j.defaults=function(t){A(f.call(arguments,1),function(n){if(n){for(var r in n){if(t[r]===void 0)t[r]=n[r]}}});return t};j.clone=function(n){if(!j.isObject(n))return n;return j.isArray(n)?n.slice():j.extend({},n)};j.tap=function(n,r){r(n);return n};var M=function(n,r,t,e){if(n===r)return n!==0||1/n==1/r;if(n==null||r==null)return n===r;if(n instanceof j)n=n._wrapped;if(r instanceof j)r=r._wrapped;var i=s.call(n);if(i!=s.call(r))return false;switch(i){case"[object String]":return n==String(r);case"[object Number]":return n!=+n?r!=+r:n==0?1/n==1/r:n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object RegExp]":return n.source==r.source&&n.global==r.global&&n.multiline==r.multiline&&n.ignoreCase==r.ignoreCase}if(typeof n!="object"||typeof r!="object")return false;var u=t.length;while(u--){if(t[u]==n)return e[u]==r}var a=n.constructor,f=r.constructor;if(a!==f&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(f)&&f instanceof f)){return false}t.push(n);e.push(r);var l=0,o=true;if(i=="[object Array]"){l=n.length;o=l==r.length;if(o){while(l--){if(!(o=M(n[l],r[l],t,e)))break}}}else{for(var c in n){if(j.has(n,c)){l++;if(!(o=j.has(r,c)&&M(n[c],r[c],t,e)))break}}if(o){for(c in r){if(j.has(r,c)&&!l--)break}o=!l}}t.pop();e.pop();return o};j.isEqual=function(n,r){return M(n,r,[],[])};j.isEmpty=function(n){if(n==null)return true;if(j.isArray(n)||j.isString(n))return n.length===0;for(var r in n)if(j.has(n,r))return false;return true};j.isElement=function(n){return!!(n&&n.nodeType===1)};j.isArray=w||function(n){return s.call(n)=="[object Array]"};j.isObject=function(n){return n===Object(n)};A(["Arguments","Function","String","Number","Date","RegExp"],function(r){j["is"+r]=function(n){return s.call(n)=="[object "+r+"]"}});if(!j.isArguments(arguments)){j.isArguments=function(n){return!!(n&&j.has(n,"callee"))}}if(typeof/./!=="function"){j.isFunction=function(n){return typeof n==="function"}}j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))};j.isNaN=function(n){return j.isNumber(n)&&n!=+n};j.isBoolean=function(n){return n===true||n===false||s.call(n)=="[object Boolean]"};j.isNull=function(n){return n===null};j.isUndefined=function(n){return n===void 0};j.has=function(n,r){return o.call(n,r)};j.noConflict=function(){n._=r;return this};j.identity=function(n){return n};j.times=function(n,r,t){var e=Array(Math.max(0,n));for(var i=0;i<n;i++)e[i]=r.call(t,i);return e};j.random=function(n,r){if(r==null){r=n;n=0}return n+Math.floor(Math.random()*(r-n+1))};var S={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};S.unescape=j.invert(S.escape);var T={escape:new RegExp("["+j.keys(S.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(S.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(r){j[r]=function(n){if(n==null)return"";return(""+n).replace(T[r],function(n){return S[r][n]})}});j.result=function(n,r){if(n==null)return void 0;var t=n[r];return j.isFunction(t)?t.call(n):t};j.mixin=function(t){A(j.functions(t),function(n){var r=j[n]=t[n];j.prototype[n]=function(){var n=[this._wrapped];u.apply(n,arguments);return z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var r=++N+"";return n?n+r:r};j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/;var B={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"};var D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(u,n,r){var t;r=j.defaults({},r,j.templateSettings);var e=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g");var a=0;var f="__p+='";u.replace(e,function(n,r,t,e,i){f+=u.slice(a,i).replace(D,function(n){return"\\"+B[n]});if(r){f+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"}if(t){f+="'+\n((__t=("+t+"))==null?'':__t)+\n'"}if(e){f+="';\n"+e+"\n__p+='"}a=i+n.length;return n});f+="';\n";if(!r.variable)f="with(obj||{}){\n"+f+"}\n";f="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+f+"return __p;\n";try{t=new Function(r.variable||"obj","_",f)}catch(n){n.source=f;throw n}if(n)return t(n,j);var i=function(n){return t.call(this,n,j)};i.source="function("+(r.variable||"obj")+"){\n"+f+"}";return i};j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j);A(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=i[r];j.prototype[r]=function(){var n=this._wrapped;t.apply(n,arguments);if((r=="shift"||r=="splice")&&n.length===0)delete n[0];return z.call(this,n)}});A(["concat","join","slice"],function(n){var r=i[n];j.prototype[n]=function(){return z.call(this,r.apply(this._wrapped,arguments))}});j.extend(j.prototype,{chain:function(){this._chain=true;return this},value:function(){return this._wrapped}})}).call(this);