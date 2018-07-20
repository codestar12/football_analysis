define(["jquery","version!fly/utils/string-helper","version!fly/utils/url-helper","version!fly/managers/debug"],function(f,c,e,i){var r={},u=i.get("ads");var h={};var v={};var o=[];var b=[];var t=0;var n=[];var d=[];var l="1";var s=false;var g=[];var p={callbackMethods:{},adDivEventCallbacks:{},setCallback:function(e,i){this.callbackMethods[e]=i},setAdDivEventCallback:function(e,i,a){var t=this.callbackMethods[a];if(typeof t=="function"){u.log("gpt::setAdDivEventCallback:",e,{eventName:i,callbackName:a,callbackMethod:t});if(!this.adDivEventCallbacks[e]){this.adDivEventCallbacks[e]={}}if(!this.adDivEventCallbacks[e][i]){this.adDivEventCallbacks[e][i]=[]}this.adDivEventCallbacks[e][i].push(t)}},slotRenderEndedCallBack:function(a){var e=p;var t="NOT FOUND";f.each(v,function(e,i){if(i===a.slot){t=e;return}});u.log("gpt::slotRenderEndedCallback",{divId:t,event:a});var i=e.adDivEventCallbacks[t]&&e.adDivEventCallbacks[t].slotRenderEnded;if(i){u.log("gpt::slotRenderEndedCallback: calling event callbacks");for(var n=0;n<i.length;n++){i[n](t,a)}}}};var y=function(e,i,a){if(!e||!i&&!a){return}if(a){u.log("gpt::setAdSlotTargeting:","clearing targeting on slot:",e);e.clearTargeting()}if(i){u.log("gpt::setAdSlotTargeting:","setting targeting:",i,"on slot:",e);for(var t in i){e.setTargeting(t,i[t])}}};return{companionAds:false,delayIndvAds:false,init:function(e){r={slot:{},adConfig:{},targeting:{}};f.extend(r,e);if(!this._isClearTargetingOnInitDisabled()){for(var i=0;i<g.length;i++){var a=g[i];googletag.pubads().clearTargeting(a);u.log("gpt::init: clearTargeting:",a)}g=[]}this._initWrappers();var t=null;r.device=r.slotVars.platform;var n="iOS App";var d="Android App";var s=window.navigator.userAgent;if(s&&s.indexOf&&(s.indexOf(n)!=-1||s.indexOf(d)!=-1)){t="app"+r.region}else if(r.device=="mobile"){t="m"+r.region}else{t=r.region}r.slot="/"+r.slotVars.network+"/"+t+"-"+r.slotVars.siteName+(r.slotVars.topics?"/"+r.slotVars.topics:"");u.log("gpt::init:","Slot:",r.slot)},setSlot:function(e){r.slot=e},createAdSlot:function(n){var e=this;u.log("gpt::createAdSlot","creating adSlot for",n);var i=n.substring(0,n.indexOf("-"+r.containerId));if(r.suppressAds&&(f.inArray(i,r.suppressAds)>-1||f.inArray(i.replace(/-/g,"_"),r.suppressAds)>-1)){u.log("   in list of suppressed ads, skipping");return}var a=r.adConfig.adUnits[c.toCamelCase(i,"-")];u.log("   adUnit config:",a);if(!a){u.log("gpt::createAdSlot:",n,"Error: no adUnit config for this divId");window.console&&window.console.error&&console.error("gpt::createAdSlot:",n,"Error: no adUnit config for this divId");return}var t;if(a.outOfPage==true){t=googletag.defineOutOfPageSlot(r.slot,n);u.log("   create out of page slot")}else{t=googletag.defineSlot(r.slot,a.sizes,n);u.log("   create regular slot")}if(!t){u.log("gpt::createAdSlot:",n,"Error: failed to create adSlot");window.console&&window.console.error&&console.error("gpt::createAdSlot:",n,"Error: failed to create adSlot");return}if(a.isVideo==true){e.companionAds=true;t.addService(googletag.companionAds());u.log("   add companionAds service")}t.addService(googletag.pubads());u.log("   add pubad service");if(a.position){if(r.adConfig.disableAdIncrement==true&&a.position=="increment"){t.setTargeting("pos",1);u.log("   setTargeting:","pos=1")}else if(a.position=="increment"){t.setTargeting("pos",l);u.log("   setTargeting:","pos="+l);l++}else{t.setTargeting("pos",a.position);u.log("   setTargeting:","pos="+a.position)}}if(a.customTargeting){f.each(a.customTargeting,function(e,i){u.log("    setTargeting:",e+"="+i);t.setTargeting(e,i)})}if(a.disableInitialLoad||a.delayLoad||true===f("#"+n).data("disableInitialLoad")){e.delayIndvAds=true;u.log("   delayLoad")}else{o.push(t)}var d=a.collapseEmptyDiv;var s=a.collapseEmptyDivOnPageload;if(d===true||d===false){if(s===true||s===false){t.setCollapseEmptyDiv(d,s);u.log("   setCollapseEmptyDiv(",d,",",s,")")}else{t.setCollapseEmptyDiv(d);u.log("   setCollapseEmptyDiv(",d,")")}}if(a.eventCallbacks){f.each(a.eventCallbacks,function(e,i){var a=i.split(",");for(var t=0;t<a.length;t++){p.setAdDivEventCallback(n,e,a[t])}})}v[n]=t;if(!h[r.containerId]){h[r.containerId]={}}if(!h[r.containerId][i]){h[r.containerId][i]=[]}h[r.containerId][i].push(t)},setTargeting:function(e,i){googletag.pubads().setTargeting(e,i);u.log("gpt::setTargeting:",e+"="+i);g.push(e)},displayAds:function(e){var a=this;f.each(e,function(e,i){u.log("gpt::displayAds:",i);a.wrappers.display(i)})},isAsyncInline:function(){var e=r.adDivIds;return r.adConfig.method=="async-inline"&&e&&f.isArray(e)&&(e.length!=1||e[0]!="ad-div-id-list")},getAdDivIds:function(){var e=this;var d=[];var s={};if(e.isAsyncInline()){var n=new RegExp("^([\\w\\-]+)\\-"+r.containerId+"(\\-\\d+)?$");f.each(r.adDivIds,function(e,i){var a;if(a=i.match(n)){var t=a[1];if(r.adConfig.enableRepeatedAds===false&&r.targeting.device!="mobile"&&s[t]){u.log("gpt::getAdDivIds:","skipping divId:",i,"because repeated adUnits are not supported on ",r.targeting.device)}else{d.push(i);s[t]=1}}else{u.log("gpt::getAdDivIds:","skipping divId:",i,"because it does not match:",n,"(async-inline adConfig.adDivIds list was probably not re-initialized with the current divIds)")}});return e.adOrder(d)}f("div[data-ad]").each(function(e,i){var a=f(i).attr("data-ad");var t=f(i).attr("id");if(!r.adConfig.adUnits[c.toCamelCase(a,"-")]){u.log("gpt::getAdDivIds:","skipping divId:",t,'because there is no config (probably another type of div with "data-ad" attr)');return}var n=new RegExp(a+"-"+r.containerId+"(\\-\\d+)?$");if(t.match(n)){if(r.adConfig.enableRepeatedAds===false&&r.targeting.device!="mobile"&&s[a]){u.log("gpt::getAdDivIds:","skipping divId:",t,"because repeated adUnits are not supported on ",r.targeting.device)}else{d.push(t);s[a]=1}}else{u.log("gpt::getAdDivIds:","skipping divId:",t,"because it does not match:",n,'(was probably already loaded under a different "containerId", or possibly another type of div with "data-ad" attr)')}});return e.adOrder(d)},adOrder:function(a){if(typeof r.adConfig.adOrder!="undefined"&&f.isArray(r.adConfig.adOrder)&&a.length>0){var t=r.containerId&&a&&a[0].indexOf("-"+r.containerId)!=-1;var n=[];f.each(r.adConfig.adOrder,function(e,i){i=c.fromCamelCase(c.toCamelCase(i,"_"),"-");if(t){i+="-"+r.containerId}n.push(i)});f.each(n.reverse(),function(e,i){currentIndex=f.inArray(i,a);if(currentIndex>-1){a.splice(currentIndex,1);a.unshift(i)}});u.log("gpt::adOrder:","ordered divIds",a)}return a},displayInlineAd:function(e){var i=f.inArray(e,n);if(i>-1){u.log("gpt::displayInlineAd:",e);this.wrappers.display(e);n.splice(i,1);if(n.length==0){u.log("gpt::displayInlineAd:","running any postDisplayCmds:",d);while(d.length){d.shift()()}}}else{u.log("gpt::displayInlineAd:",e,"ERROR: ad was already displayed or should not be displayed at all")}},adDisplayTrigger:function(){var e=this;u.log("gpt::adDisplayTrigger:","ready to display any inline ads");if(f.isArray(window.cbsiGptDivIds)){u.log("gpt::adDisplayTrigger:","displaying ads for any existing cbsiGptDivIds:",window.cbsiGptDivIds);while(window.cbsiGptDivIds.length){e.displayInlineAd(window.cbsiGptDivIds.shift())}}u.log("gpt::adDisplayTrigger:","setting future cbsiGptDivId ads to display immediately");window.cbsiGptDivIds={push:e.displayInlineAd}},loadAds:function(){var a=this;u.log("gpt::loadAds:",r);if(r.suppressAds&&f.inArray("all",r.suppressAds)>-1){u.log('gpt::loadAds: not loading any ads because "suppressAds" contains "all"');return}if(r.adConfig.method!="async"&&!a.isAsyncInline()){u.log("gpt::Unable to load ads as method is not async or async-inline");return}if(a.isAsyncInline()){n=r.adDivIds.slice()}t++;b.push(r.containerId);o=[];if(r.adConfig.disableInitialLoadCompanions===true){f.each(r.adConfig.adUnits,function(e,i){if(i.isVideo){i.disableInitialLoad=true}})}googletag=window.googletag||{};googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){var e=a.getAdDivIds();u.log("gpt::loadAds","adDivIds:",e);f.each(e,function(e,i){a.createAdSlot(i)});f.each(r.targeting,function(e,i){a.setTargeting(e,i)});if(a.companionAds==true){if(r.adConfig.setRefreshUnfilledSlots==null||r.adConfig.setRefreshUnfilledSlots===true){googletag.companionAds().setRefreshUnfilledSlots(true);u.log("gpt::loadAds","CompanionAds setRefreshUnfilledSlots = true")}else{googletag.companionAds().setRefreshUnfilledSlots(false);u.log("gpt::loadAds","CompanionAds setRefreshUnfilledSlots = false")}if(r.adConfig.setClearUnfilledSlots===true){googletag.companionAds().setClearUnfilledSlots(true);u.log("gpt::loadAds","CompanionAds setClearUnfilledSlots = true")}}if(r.adConfig.enableAsyncRendering==null||r.adConfig.enableAsyncRendering===true){googletag.pubads().enableAsyncRendering();u.log("gpt::loadAds","enableAsyncRendering")}if(r.adConfig.enableSingleRequest==null||r.adConfig.enableSingleRequest===true){googletag.pubads().enableSingleRequest();u.log("gpt::loadAds","enableSingleRequest")}if(t==1){if(r.adConfig.collapseEmptyDiv===true){googletag.pubads().collapseEmptyDivs(true);u.log("gpt::loadAds","collapseEmptyDivs before ad fetch")}else{googletag.pubads().collapseEmptyDivs();u.log("gpt::loadAds","collapseEmptyDivs after ad fetch")}if(r.adConfig.disableInitialLoad===true||a.delayIndvAds==true||r.adConfig.disableInitialLoadRefresh===true){googletag.pubads().disableInitialLoad();s=true;u.log("gpt::loadAds","disableInitialLoad")}googletag.enableServices();u.log("gpt::loadAds","enableServices");googletag.pubads().addEventListener("slotRenderEnded",p.slotRenderEndedCallBack)}if(a.isAsyncInline()){a.adDisplayTrigger()}else{a.displayAds(e)}if(s&&r.adConfig.disableInitialLoad!==true){var i=function(){a.wrappers.refresh(o);u.log("gpt::loadAds","refreshing initialLoad ads",o)};if(a.isAsyncInline()&&n.length>0){d.push(i)}else{i()}}})},registerCallback:function(e,i){p.setCallback(e,i)},refresh:function(s,r,o,l,g){var p=this;if(s&&s.length>25){s=""}googletag.cmd.push(function(){if(!s&&r===undefined){if(o||l){for(var e in v){y(v[e],o,l)}}p.wrappers.refresh();u.log("gpt::refresh:","refresh all ads");return}if(r){var a=[];f.each(r,function(e,i){a.push(c.fromCamelCase(c.toCamelCase(i,"_"),"-"))});r=a}var t=[];if(s){if(h[s]){var i=[];if(r){i=r}else{i=Object.keys(h[s])}i=p.adOrder(i);f.each(i,function(e,i){if(h[s][i]){t=t.concat(h[s][i]);u.log("gpt::refresh:",i+"-"+s)}})}}else if(r){r=p.adOrder(r);var n={};for(var d=b.length-1;d>-1;d--){if(h[b[d]]){f.each(r,function(e,i){if(!n.hasOwnProperty(i)&&h[b[d]][i]){n[i]=1;t=t.concat(h[b[d]][i]);u.log("gpt::refresh:",i+"-"+b[d])}})}}}if(g){t=f.grep(t,function(e){var i=e.getSlotElementId();if(-1!==f.inArray(i,g)){u.log("gpt::refresh","Including ad div id "+i);return true}else{u.log("gpt::refresh","Excluding ad div id "+i);return false}})}if(o||l){for(var d=0;d<t.length;d++){y(t[d],o,l)}}p.wrappers.refresh(t);u.log("gpt::refresh",t)})},refreshLastLoad:function(e,i,a){var t=this;if(b.length>0){t.refresh(b[b.length-1],e,i,a)}},_isClearTargetingOnInitDisabled:function(){return true===r.adConfig.disableClearTargetingOnInit},_initWrappers:function(){if(this.headerBidding.isEnabled()){u.log("gpt::_initWrappers","Replacing wrappers");this.wrappers=this.headerBidding}},wrappers:{display:function(e){u.log("gpt::wrappers.display","Executing the standard ad logic");googletag.display(e)},refresh:function(e){u.log("gpt::wrappers.refresh","Executing the standard ad logic");googletag.pubads().refresh(e)}},headerBidding:{isEnabled:function(){return true===r.adConfig.enableHeaderBidding&&"object"===typeof window.index_headertag_lightspeed&&"function"===typeof window.index_headertag_lightspeed.set_slot_targeting&&"function"===typeof window.index_headertag_lightspeed.add_session_end_hook&&"function"===typeof window.index_headertag_lightspeed.refresh},display:function(e){u.log("gpt::headerBidding.display","Header bidding display() started");f(window).trigger("gptMgr.headerBiddingDisplayStart",{adDivId:e});var i=function(i){return function(){var e=window.googletag.pubads().getSlots();window.index_headertag_lightspeed.set_slot_targeting(e);f(window).trigger("gptMgr.headerBiddingDisplayEnd",{adDivId:i});window.googletag.display(i);u.log("gpt::headerBidding.display","Header bidding display() completed for adDivId "+i)}}(e);window.index_headertag_lightspeed.add_session_end_hook(i,true);window.index_headertag_lightspeed.refresh()},refresh:function(e){u.log("gpt::headerBidding.refresh","Header bidding refresh() started");f(window).trigger("gptMgr.headerBiddingRefreshStart");if(e===undefined){e=window.googletag.pubads().getSlots()}var i=function(e){return function(){window.index_headertag_lightspeed.set_slot_targeting(e);f(window).trigger("gptMgr.headerBiddingRefreshEnd");window.googletag.pubads().refresh(e);u.log("gpt::headerBidding.refresh","Header bidding refresh() completed")}}(e);window.index_headertag_lightspeed.add_session_end_hook(i,true);window.index_headertag_lightspeed.refresh()}}}});