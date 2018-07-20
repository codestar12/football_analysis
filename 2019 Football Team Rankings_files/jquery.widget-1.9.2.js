define(["jquery"],function(l){var i=0,r=Array.prototype.slice,n=l.cleanData;l.cleanData=function(t){for(var e=0,i;(i=t[e])!=null;e++){try{l(i).triggerHandler("remove")}catch(t){}}n(t)};l.widget=function(t,i,n){var e,s,a,o,r=t.split(".")[0];t=t.split(".")[1];e=r+"-"+t;if(!n){n=i;i=l.Widget}l.expr[":"][e.toLowerCase()]=function(t){return!!l.data(t,e)};l[r]=l[r]||{};s=l[r][t];a=l[r][t]=function(t,e){if(!this._createWidget){return new a(t,e)}if(arguments.length){this._createWidget(t,e)}};l.extend(a,s,{version:n.version,_proto:l.extend({},n),_childConstructors:[]});o=new i;o.options=l.widget.extend({},o.options);l.each(n,function(e,a){if(l.isFunction(a)){n[e]=function(){var n=function(){return i.prototype[e].apply(this,arguments)},s=function(t){return i.prototype[e].apply(this,t)};return function(){var t=this._super,e=this._superApply,i;this._super=n;this._superApply=s;i=a.apply(this,arguments);this._super=t;this._superApply=e;return i}}()}});a.prototype=l.widget.extend(o,{widgetEventPrefix:s?o.widgetEventPrefix:t},n,{constructor:a,namespace:r,widgetName:t,widgetBaseClass:e,widgetFullName:e});if(s){l.each(s._childConstructors,function(t,e){var i=e.prototype;l.widget(i.namespace+"."+i.widgetName,a,e._proto)});delete s._childConstructors}else{i._childConstructors.push(a)}l.widget.bridge(t,a)};l.widget.extend=function(t){var e=r.call(arguments,1),i=0,n=e.length,s,a;for(;i<n;i++){for(s in e[i]){a=e[i][s];if(a!==undefined){if(l.isPlainObject(a)){t[s]=l.isPlainObject(t[s])?l.widget.extend({},t[s],a):l.widget.extend({},a)}else{t[s]=a}}}}return t};l.widget.bridge=function(a,e){var o=e.prototype.widgetFullName||a;l.fn[a]=function(i){var t=typeof i==="string",n=r.call(arguments,1),s=this;i=!t&&n.length?l.widget.extend.apply(null,[i].concat(n)):i;if(t){this.each(function(){var t,e=l.data(this,o);if(!e){return l.error("cannot call methods on "+a+" prior to initialization; "+"attempted to call method '"+i+"'")}if(!l.isFunction(e[i])||i.charAt(0)==="_"){return l.error("no such method '"+i+"' for "+a+" widget instance")}t=e[i].apply(e,n);if(t!==e&&t!==undefined){s=t&&t.jquery?s.pushStack(t.get()):t;return false}})}else{this.each(function(){var t=l.data(this,o);if(t){t.option(i||{})._init()}else{l.data(this,o,new e(i,this))}})}return s}};l.Widget=function(){};l.Widget._childConstructors=[];l.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(t,e){e=l(e||this.defaultElement||this)[0];this.element=l(e);this.uuid=i++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=l.widget.extend({},this.options,this._getCreateOptions(),t);this.bindings=l();this.hoverable=l();this.focusable=l();if(e!==this){l.data(e,this.widgetName,this);l.data(e,this.widgetFullName,this);this._on(true,this.element,{remove:function(t){if(t.target===e){this.destroy()}}});this.document=l(e.style?e.ownerDocument:e.document||e);this.window=l(this.document[0].defaultView||this.document[0].parentWindow)}this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:l.noop,_getCreateEventData:l.noop,_create:l.noop,_init:l.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(l.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:l.noop,widget:function(){return this.element},option:function(t,e){var i=t,n,s,a;if(arguments.length===0){return l.widget.extend({},this.options)}if(typeof t==="string"){i={};n=t.split(".");t=n.shift();if(n.length){s=i[t]=l.widget.extend({},this.options[t]);for(a=0;a<n.length-1;a++){s[n[a]]=s[n[a]]||{};s=s[n[a]]}t=n.pop();if(e===undefined){return s[t]===undefined?null:s[t]}s[t]=e}else{if(e===undefined){return this.options[t]===undefined?null:this.options[t]}i[t]=e}}this._setOptions(i);return this},_setOptions:function(t){var e;for(e in t){this._setOption(e,t[e])}return this},_setOption:function(t,e){this.options[t]=e;if(t==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(o,r,t){var u,d=this;if(typeof o!=="boolean"){t=r;r=o;o=false}if(!t){t=r;r=this.element;u=this.widget()}else{r=u=l(r);this.bindings=this.bindings.add(r)}l.each(t,function(t,e){function i(){if(!o&&(d.options.disabled===true||l(this).hasClass("ui-state-disabled"))){return}return(typeof e==="string"?d[e]:e).apply(d,arguments)}if(typeof e!=="string"){i.guid=e.guid=e.guid||i.guid||l.guid++}var n=t.match(/^(\w+)\s*(.*)$/),s=n[1]+d.eventNamespace,a=n[2];if(a){u.delegate(a,s,i)}else{r.bind(s,i)}})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return(typeof t==="string"?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t);this._on(t,{mouseenter:function(t){l(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){l(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t);this._on(t,{focusin:function(t){l(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){l(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var n,s,a=this.options[t];i=i||{};e=l.Event(e);e.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase();e.target=this.element[0];s=e.originalEvent;if(s){for(n in s){if(!(n in e)){e[n]=s[n]}}}this.element.trigger(e,i);return!(l.isFunction(a)&&a.apply(this.element[0],[e].concat(i))===false||e.isDefaultPrevented())}};l.each({show:"fadeIn",hide:"fadeOut"},function(a,o){l.Widget.prototype["_"+a]=function(e,t,i){if(typeof t==="string"){t={effect:t}}var n,s=!t?a:t===true||typeof t==="number"?o:t.effect||o;t=t||{};if(typeof t==="number"){t={duration:t}}n=!l.isEmptyObject(t);t.complete=i;if(t.delay){e.delay(t.delay)}if(n&&l.effects&&(l.effects.effect[s]||l.uiBackCompat!==false&&l.effects[s])){e[a](t)}else if(s!==a&&e[s]){e[s](t.duration,t.easing,i)}else{e.queue(function(t){l(this)[a]();if(i){i.call(e[0])}t()})}}});if(l.uiBackCompat!==false){l.Widget.prototype._getCreateOptions=function(){return l.metadata&&l.metadata.get(this.element[0])[this.widgetName]}}});