define(["jquery","version!fly/utils/string-helper","version!fly/utils/object-helper","version!fly/managers/debug","version!fly/components/base"],function(s,a,n,t,e){var r={attr:"data-component",includeContext:true},f=t.init("components"),c={},i;s(document).on("domUpdated",function(n,t){t=t||{};i.process(t.$context)});i={process:function(n){var r=this,t=this.findByAttr(n);t.each(function(n,t){var e=s(t),i=e.data(),o=a.toCleanArray(i.component);s.each(o,function(n,t){r.init(t,e)})})},init:function(n,t,e){var i=c[n],o,r,a;if(i){e=e||{},o=s.makeArray(i.require)||[];r=n;if(i.alias){r=i.alias;e=s.extend(true,{},i.options||{},e)}require(o,function(){if(t&&t.length){if(s.isFunction(t[r])){t[r](e)}}});f.log("init: ",n,t,e)}},setConfig:function(n){if(s.isPlainObject(n)){s.extend(r,n)}else{throw new Error("Component setConfig failure. Map is in the wrong format.")}},register:function(n){if(s.isPlainObject(n)){s.each(n,function(n,t){c[n]=t;if(t.options){e.setDefaultOptions(n,t.options)}if(t.events){e.addDefaultEvents(n,t.events)}});f.log("register: ",n)}else{throw new Error("Component register failure. Map is in the wrong format.")}},findByAttr:function(n,t,e){var i,o="";t=t&&!s.isArray(t)?[t]:t;if(t){s.each(t,function(n,t){o+=n>0?", ":"";o+="["+r.attr+'="'+t+'"], ['+r.attr+"*='\""+t+"\"']"})}else{o="["+r.attr+"]"}n=n||s(document.body);i=n.find(o);e=typeof e!=="undefined"?e:r.includeContext;if(e){i=i.addBack(o)}return i}};return i});