//tealium universal tag - utag.loader ut4.0.201807191606, Copyright 2018 Tealium.com Inc. All Rights Reserved.
if(typeof utag_err=='undefined')var utag_err=[];window._tealium_old_error=window._tealium_old_error||window.onerror||function(){};window.onerror=function(m,u,l){if(typeof u!=='undefined'&&u.indexOf('/utag.')>0&&utag_err.length<5)utag_err.push({e:m,s:u,l:l,t:'js'});window._tealium_old_error(m,u,l)};var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_cbsi_247sportssite=(\/\/tags\.tiqcdn\.com\/utag\/cbsi\/[^\S;]*)")){if(RegExp.$1.indexOf("/prod/")===-1){var s=RegExp.$1;while(s.indexOf("%")!=-1){s=decodeURIComponent(s);}s=s.replace(/\.\./g,"");ul(s);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/cbsi/247sportssite/prod/';}}})();}catch(e){};try{var getCookieValue=function(ckNm){var value=null;var allCookies=document.cookie;var pos=allCookies.indexOf(ckNm);if(pos!=-1){var start=pos+ckNm.length+1;var end=allCookies.indexOf(";",start);if(end==-1)end=allCookies.length;value=allCookies.substring(start,end);}
return value;};function runInternalUserFuncs(){var js=document.createElement('script');var s=document.getElementsByTagName('script')[0];js.async=1;js.src="https://adops.cbsinteractive.com/static_tools/watson/Watson.js?"+Math.floor(Math.random()*10000000);s.parentNode.insertBefore(js,s);}
function cbsiInternal(isInternal){var dm=document.domain.split('.');var domain=dm[dm.length-2]+'.'+dm[dm.length-1];var expDt=new Date(new Date().getTime()+(180*86400000));if(isInternal){document.cookie='CBS_INTERNAL=1;domain=.'+domain+';expires='+expDt.toUTCString(),';path=/';runInternalUserFuncs();}
else{document.cookie='CBS_INTERNAL=0;domain=.'+domain+';expires='+expDt.toUTCString(),';path=/';}}
var isInternal=getCookieValue("CBS_INTERNAL");if(isInternal==null){var js=document.createElement('script');var s=document.getElementsByTagName('script')[0];js.async=1;js.src="https://iicbsi-a.akamaihd.net/common/js/esi/isInternalUser.js?cb=cbsiInternal";s.parentNode.insertBefore(js,s);}else if(isInternal==1){runInternalUserFuncs();}}catch(e){};if(typeof utag=="undefined"&&!utag_condload){var utag={id:"cbsi.247sportssite",o:{},sender:{},send:{},rpt:{ts:{a:new Date()}},dbi:[],db_log:[],loader:{q:[],lc:0,f:{},p:0,ol:0,wq:[],lq:[],bq:{},bk:{},rf:0,ri:0,rp:0,rq:[],ready_q:[],sendq:{"pending":0},run_ready_q:function(){for(var i=0;i<utag.loader.ready_q.length;i++){utag.DB("READY_Q:"+i);try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};}},lh:function(a,b,c){a=""+location.hostname;b=a.split(".");c=(/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a))?3:2;return b.splice(b.length-c,c).join(".");},WQ:function(a,b,c,d,g){utag.DB('WQ:'+utag.loader.wq.length);try{if(utag.udoname&&utag.udoname.indexOf(".")<0){utag.ut.merge(utag.data,window[utag.udoname],0);}
if(utag.cfg.load_rules_at_wait){utag.handler.LR(utag.data);}}catch(e){utag.DB(e)};d=0;g=[];for(a=0;a<utag.loader.wq.length;a++){b=utag.loader.wq[a];b.load=utag.loader.cfg[b.id].load;if(b.load==4){this.f[b.id]=0;utag.loader.LOAD(b.id)}else if(b.load>0){g.push(b);d++;}else{this.f[b.id]=1;}}
for(a=0;a<g.length;a++){utag.loader.AS(g[a]);}
if(d==0){utag.loader.END();}},AS:function(a,b,c,d){utag.send[a.id]=a;if(typeof a.src=='undefined'){a.src=utag.cfg.path+((typeof a.name!='undefined')?a.name:'ut'+'ag.'+a.id+'.js')}
a.src+=(a.src.indexOf('?')>0?'&':'?')+'utv='+(a.v?utag.cfg.template+a.v:utag.cfg.v);utag.rpt['l_'+a.id]=a.src;b=document;this.f[a.id]=0;if(a.load==2){utag.DB("Attach sync: "+a.src);a.uid=a.id;b.write('<script id="utag_'+a.id+'" src="'+a.src+'"></scr'+'ipt>')
if(typeof a.cb!='undefined')a.cb();}else if(a.load==1||a.load==3){if(b.createElement){c='utag_cbsi.247sportssite_'+a.id;if(!b.getElementById(c)){d={src:a.src,id:c,uid:a.id,loc:a.loc}
if(a.load==3){d.type="iframe"};if(typeof a.cb!='undefined')d.cb=a.cb;utag.ut.loader(d);}}}},GV:function(a,b,c){b={};for(c in a){if(a.hasOwnProperty(c)&&typeof a[c]!="function")b[c]=a[c];}
return b},OU:function(a,b,c,d,f){try{if(typeof utag.data['cp.OPTOUTMULTI']!='undefined'){c=utag.loader.cfg;a=utag.ut.decode(utag.data['cp.OPTOUTMULTI']).split('|');for(d=0;d<a.length;d++){b=a[d].split(':');if(b[1]*1!==0){if(b[0].indexOf('c')==0){for(f in utag.loader.GV(c)){if(c[f].tcat==b[0].substring(1))c[f].load=0}}else if(b[0]*1==0){utag.cfg.nocookie=true}else{for(f in utag.loader.GV(c)){if(c[f].tid==b[0])c[f].load=0}}}}}}catch(e){utag.DB(e)}},RDdom:function(o){var d=document||{},l=location||{};o["dom.referrer"]=d.referrer;o["dom.title"]=""+d.title;o["dom.domain"]=""+l.hostname;o["dom.query_string"]=(""+l.search).substring(1);o["dom.hash"]=(""+l.hash).substring(1);o["dom.url"]=""+d.URL;o["dom.pathname"]=""+l.pathname;o["dom.viewport_height"]=window.innerHeight||(d.documentElement?d.documentElement.clientHeight:960);o["dom.viewport_width"]=window.innerWidth||(d.documentElement?d.documentElement.clientWidth:960);},RDcp:function(o,b,c,d){b=utag.loader.RC();for(d in b){if(d.match(/utag_(.*)/)){for(c in utag.loader.GV(b[d])){o["cp.utag_"+RegExp.$1+"_"+c]=b[d][c];}}}
for(c in utag.loader.GV((utag.cl&&!utag.cl['_all_'])?utag.cl:b)){if(c.indexOf("utag_")<0&&typeof b[c]!="undefined")o["cp."+c]=b[c];}
},RDqp:function(o,a,b,c){a=location.search+(location.hash+'').replace("#","&");if(utag.cfg.lowerqp){a=a.toLowerCase()};if(a.length>1){b=a.substring(1).split('&');for(a=0;a<b.length;a++){c=b[a].split("=");if(c.length>1){o["qp."+c[0]]=utag.ut.decode(c[1])}}}},RDmeta:function(o,a,b,h){a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++){try{h=a[b].name||a[b].getAttribute("property")||"";}catch(e){h="";utag.DB(e)};if(utag.cfg.lowermeta){h=h.toLowerCase()};if(h!=""){o["meta."+h]=a[b].content}}},RDva:function(o){var readAttr=function(o,l){var a="",b;a=localStorage.getItem(l);if(!a||a=="{}")return;b=utag.ut.flatten({va:JSON.parse(a)});utag.ut.merge(o,b,1);}
try{readAttr(o,"tealium_va");readAttr(o,"tealium_va_"+o["ut.account"]+"_"+o["ut.profile"]);}catch(e){utag.DB(e)}},RDut:function(o,a){var t={};var d=new Date();var m=(utag.ut.typeOf(d.toISOString)=="function");o["ut.domain"]=utag.cfg.domain;o["ut.version"]=utag.cfg.v;t["tealium_event"]=o["ut.event"]=a||"view";t["tealium_visitor_id"]=o["ut.visitor_id"]=o["cp.utag_main_v_id"];t["tealium_session_id"]=o["ut.session_id"]=o["cp.utag_main_ses_id"];try{t["tealium_datasource"]=utag.cfg.datasource;t["tealium_account"]=o["ut.account"]=utag.cfg.utid.split("/")[0];t["tealium_profile"]=o["ut.profile"]=utag.cfg.utid.split("/")[1];t["tealium_environment"]=o["ut.env"]=utag.cfg.path.split("/")[6];}catch(e){utag.DB(e)}
t["tealium_random"]=Math.random().toFixed(16).substring(2);t["tealium_library_name"]="ut"+"ag.js";t["tealium_library_version"]=(utag.cfg.template+"0").substring(2);t["tealium_timestamp_epoch"]=Math.floor(d.getTime()/1000);t["tealium_timestamp_utc"]=(m?d.toISOString():"");d.setHours(d.getHours()-(d.getTimezoneOffset()/60));t["tealium_timestamp_local"]=(m?d.toISOString().replace("Z",""):"");utag.ut.merge(o,t,0);},RDses:function(o,a,c){a=(new Date()).getTime();c=(a+parseInt(utag.cfg.session_timeout))+"";if(!o["cp.utag_main_ses_id"]){o["cp.utag_main_ses_id"]=a+"";o["cp.utag_main__ss"]="1";o["cp.utag_main__sn"]=(1+parseInt(o["cp.utag_main__sn"]||0))+"";}else{o["cp.utag_main__ss"]="0";}
o["cp.utag_main__pn"]=o["cp.utag_main__pn"]||"1";o["cp.utag_main__st"]=c;utag.loader.SC("utag_main",{"_sn":(o["cp.utag_main__sn"]||1),"_ss":o["cp.utag_main__ss"],"_st":c,"ses_id":(o["cp.utag_main_ses_id"]||a)+";exp-session","_pn":o["cp.utag_main__pn"]+";exp-session"});},RDpv:function(o){if(typeof utag.pagevars=="function"){utag.DB("Read page variables");utag.pagevars(o);}},RD:function(o,a){utag.DB("utag.loader.RD");utag.DB(o);utag.loader.RDcp(o);if(!utag.loader.rd_flag){utag.loader.rd_flag=1;o["cp.utag_main_v_id"]=o["cp.utag_main_v_id"]||utag.ut.vi((new Date()).getTime());o["cp.utag_main__pn"]=(1+parseInt(o["cp.utag_main__pn"]||0))+"";utag.loader.SC("utag_main",{"v_id":o["cp.utag_main_v_id"]});utag.loader.RDses(o);}
if(a&&!utag.cfg.noview)utag.loader.RDses(o);utag.loader.RDqp(o);utag.loader.RDmeta(o);utag.loader.RDdom(o);utag.loader.RDut(o,a||"view");utag.loader.RDpv(o);utag.loader.RDva(o);},RC:function(a,x,b,c,d,e,f,g,h,i,j,k,l,m,n,o,v,ck,cv,r,s,t){o={};b=(""+document.cookie!="")?(document.cookie).split("; "):[];r=/^(.*?)=(.*)$/;s=/^(.*);exp-(.*)$/;t=(new Date()).getTime();for(c=0;c<b.length;c++){if(b[c].match(r)){ck=RegExp.$1;cv=RegExp.$2;}
e=utag.ut.decode(cv);if(typeof ck!="undefined"){if(ck.indexOf("ulog")==0||ck.indexOf("utag_")==0){e=cv.split("$");g=[];j={};for(f=0;f<e.length;f++){try{g=e[f].split(":");if(g.length>2){g[1]=g.slice(1).join(":");}
v="";if((""+g[1]).indexOf("~")==0){h=g[1].substring(1).split("|");for(i=0;i<h.length;i++)h[i]=utag.ut.decode(h[i]);v=h}else v=utag.ut.decode(g[1]);j[g[0]]=v;}catch(er){utag.DB(er)};}
o[ck]={};for(f in utag.loader.GV(j)){if(j[f]instanceof Array){n=[];for(m=0;m<j[f].length;m++){if(j[f][m].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);if(k>t)n[m]=(x==0)?j[f][m]:RegExp.$1;}}
j[f]=n.join("|");}else{j[f]=""+j[f];if(j[f].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);j[f]=(k<t)?null:(x==0?j[f]:RegExp.$1);}}
if(j[f])o[ck][f]=j[f];}}else if(utag.cl[ck]||utag.cl['_all_']){o[ck]=e}}}
return(a)?(o[a]?o[a]:{}):o;},SC:function(a,b,c,d,e,f,g,h,i,j,k,x,v){if(!a)return 0;if(a=="utag_main"&&utag.cfg.nocookie)return 0;v="";var date=new Date();var exp=new Date();exp.setTime(date.getTime()+(365*24*60*60*1000));x=exp.toGMTString();if(c&&c=="da"){x="Thu, 31 Dec 2009 00:00:00 GMT";}else if(a.indexOf("utag_")!=0&&a.indexOf("ulog")!=0){if(typeof b!="object"){v=b}}else{d=utag.loader.RC(a,0);for(e in utag.loader.GV(b)){f=""+b[e];if(f.match(/^(.*);exp-(\d+)(\w)$/)){g=date.getTime()+parseInt(RegExp.$2)*((RegExp.$3=="h")?3600000:86400000);if(RegExp.$3=="u")g=parseInt(RegExp.$2);f=RegExp.$1+";exp-"+g;}
if(c=="i"){if(d[e]==null)d[e]=f;}else if(c=="d")delete d[e];else if(c=="a")d[e]=(d[e]!=null)?(f-0)+(d[e]-0):f;else if(c=="ap"||c=="au"){if(d[e]==null)d[e]=f;else{if(d[e].indexOf("|")>0){d[e]=d[e].split("|")}
g=(d[e]instanceof Array)?d[e]:[d[e]];g.push(f);if(c=="au"){h={};k={};for(i=0;i<g.length;i++){if(g[i].match(/^(.*);exp-(.*)$/)){j=RegExp.$1;}
if(typeof k[j]=="undefined"){k[j]=1;h[g[i]]=1;}}
g=[];for(i in utag.loader.GV(h)){g.push(i);}}
d[e]=g}}else d[e]=f;}
h=new Array();for(g in utag.loader.GV(d)){if(d[g]instanceof Array){for(c=0;c<d[g].length;c++){d[g][c]=encodeURIComponent(d[g][c])}
h.push(g+":~"+d[g].join("|"))}else h.push((g+":").replace(/[\,\$\;\?]/g,"")+encodeURIComponent(d[g]))}
if(h.length==0){h.push("");x=""}
v=(h.join("$"));}
document.cookie=a+"="+v+";path=/;domain="+utag.cfg.domain+";expires="+x;return 1},LOAD:function(a,b,c,d){if(!utag.loader.cfg){return}
if(this.ol==0){if(utag.loader.cfg[a].block&&utag.loader.cfg[a].cbf){this.f[a]=1;delete utag.loader.bq[a];}
for(b in utag.loader.GV(utag.loader.bq)){if(utag.loader.cfg[a].load==4&&utag.loader.cfg[a].wait==0){utag.loader.bk[a]=1;utag.DB("blocked: "+a);}
utag.DB("blocking: "+b);return;}
utag.loader.INIT();return;}
utag.DB('utag.loader.LOAD:'+a);if(this.f[a]==0){this.f[a]=1;if(utag.cfg.noview!=true){if(utag.loader.cfg[a].send){utag.DB("SENDING: "+a);try{if(utag.loader.sendq.pending>0&&utag.loader.sendq[a]){utag.DB("utag.loader.LOAD:sendq: "+a);while(d=utag.loader.sendq[a].shift()){utag.DB(d);utag.sender[a].send(d.event,utag.handler.C(d.data));utag.loader.sendq.pending--;}}else{utag.sender[a].send('view',utag.handler.C(utag.data));}
utag.rpt['s_'+a]=0;}catch(e){utag.DB(e);utag.rpt['s_'+a]=1;}}}
if(utag.loader.rf==0)return;for(b in utag.loader.GV(this.f)){if(this.f[b]==0||this.f[b]==2)return}
utag.loader.END();}},EV:function(a,b,c,d){if(b=="ready"){if(!utag.data){try{utag.cl={'_all_':1};utag.loader.initdata();utag.loader.RD(utag.data);}catch(e){utag.DB(e)};}
if((document.attachEvent||utag.cfg.dom_complete)?document.readyState==="complete":document.readyState!=="loading")setTimeout(c,1);else{utag.loader.ready_q.push(c);var RH;if(utag.loader.ready_q.length<=1){if(document.addEventListener){RH=function(){document.removeEventListener("DOMContentLoaded",RH,false);utag.loader.run_ready_q()};if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded",RH,false);window.addEventListener("load",utag.loader.run_ready_q,false);}else if(document.attachEvent){RH=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",RH);utag.loader.run_ready_q()}};document.attachEvent("onreadystatechange",RH);window.attachEvent("onload",utag.loader.run_ready_q);}}}}else{if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a.attachEvent(((d==1)?"":"on")+b,c)}}},END:function(b,c,d,e,v,w){if(this.ended){return};this.ended=1;utag.DB("loader.END");b=utag.data;if(utag.handler.base&&utag.handler.base!='*'){e=utag.handler.base.split(",");for(d=0;d<e.length;d++){if(typeof b[e[d]]!="undefined")utag.handler.df[e[d]]=b[e[d]]}}else if(utag.handler.base=='*'){utag.ut.merge(utag.handler.df,b,1);}
utag.rpt['r_0']="t";for(var r in utag.loader.GV(utag.cond)){utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";}
utag.rpt.ts['s']=new Date();(function(a,b,c,l){if(typeof utag_err!='undefined'&&utag_err.length>0){a='//uconnect.tealiumiq.com/ulog/_error?utid='+utag.cfg.utid;l=utag_err.length>5?5:utag_err.length;for(b=0;b<l;b++){c=utag_err[b];a+='&e'+b+'='+encodeURIComponent(c.t+'::'+c.l+'::'+c.s+'::'+c.e);}
utag.dbi.push((new Image()).src=a);}})();v=utag.cfg.path;w=v.indexOf(".tiqcdn.");if(w>0&&b["cp.utag_main__ss"]==1&&!utag.cfg.no_session_count)utag.ut.loader({src:v.substring(0,v.indexOf("/ut"+"ag/")+6)+"tiqapp/ut"+"ag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");utag.handler.INIT();}},DB:function(a,b){if(utag.cfg.utagdb===false){return;}else if(typeof utag.cfg.utagdb=="undefined"){b=document.cookie+'';utag.cfg.utagdb=((b.indexOf('utagdb=true')>=0)?true:false);}
if(utag.cfg.utagdb===true){var t;if(utag.ut.typeOf(a)=="object"){t=utag.handler.C(a)}else{t=a}
utag.db_log.push(t);try{if(!utag.cfg.noconsole)console.log(t)}catch(e){}}},RP:function(a,b,c){if(typeof a!='undefined'&&typeof a.src!='undefined'&&a.src!=''){b=[];for(c in utag.loader.GV(a)){if(c!='src')b.push(c+'='+escape(a[c]))}
this.dbi.push((new Image()).src=a.src+'?utv='+utag.cfg.v+'&utid='+utag.cfg.utid+'&'+(b.join('&')))}},view:function(a,c,d){return this.track({event:'view',data:a,cfg:{cb:c,uids:d}})},link:function(a,c,d){return this.track({event:'link',data:a,cfg:{cb:c,uids:d}})},track:function(a,b,c,d){if(typeof a=="string")a={event:a,data:b,cfg:{cb:c}};for(d in utag.loader.GV(utag.o)){try{utag.o[d].handler.trigger(a.event||"view",a.data||a,a.cfg)}catch(e){utag.DB(e)};}
if(a.cfg&&a.cfg.cb)try{a.cfg.cb()}catch(e){utag.DB(e)};return true},handler:{base:"",df:{},o:{},send:{},iflag:0,INIT:function(a,b,c){utag.DB('utag.handler.INIT');if(utag.initcatch){utag.initcatch=0;return}
this.iflag=1;a=utag.loader.q.length;if(a>0){utag.DB("Loader queue");for(b=0;b<a;b++){c=utag.loader.q[b];utag.handler.trigger(c.a,c.b,c.c)}}
},test:function(){return 1},LR:function(b){utag.DB("Load Rules");for(var d in utag.loader.GV(utag.cond)){utag.cond[d]=false;}
utag.DB(b);utag.loader.loadrules(b);utag.DB(utag.cond);utag.loader.initcfg();utag.loader.OU();for(var r in utag.loader.GV(utag.cond)){utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";}},RE:function(a,b,c,d,e,f,g){if(c!="alr"&&!this.cfg_extend){return 0;}
utag.DB("RE: "+c);if(c=="alr")utag.DB("All Tags EXTENSIONS");utag.DB(b);if(typeof this.extend!="undefined"){g=0;for(d=0;d<this.extend.length;d++){try{e=0;if(typeof this.cfg_extend!="undefined"){f=this.cfg_extend[d];if(typeof f.count=="undefined")f.count=0;if(f[a]==0||(f.once==1&&f.count>0)||f[c]==0){e=1}else{if(f[c]==1){g=1};f.count++}}
if(e!=1){this.extend[d](a,b);utag.rpt['ex_'+d]=0}}catch(er){utag.DB(er);utag.rpt['ex_'+d]=1;utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});}}
utag.DB(b);return g;}},trigger:function(a,b,c,d,e,f){utag.DB('trigger:'+a+(c&&c.uids?":"+c.uids.join(","):""));b=b||{};utag.DB(b);if(!this.iflag){utag.DB("trigger:called before tags loaded");for(d in utag.loader.f){if(!(utag.loader.f[d]===1))utag.DB('Tag '+d+' did not LOAD')}
utag.loader.q.push({a:a,b:utag.handler.C(b),c:c});return;}
utag.ut.merge(b,this.df,0);utag.loader.RD(b,a);utag.cfg.noview=false;function sendTag(a,b,d){try{if(typeof utag.sender[d]!="undefined"){utag.DB("SENDING: "+d);utag.sender[d].send(a,utag.handler.C(b));utag.rpt['s_'+d]=0;}else if(utag.loader.cfg[d].load!=2){utag.loader.sendq[d]=utag.loader.sendq[d]||[];utag.loader.sendq[d].push({"event":a,"data":utag.handler.C(b)});utag.loader.sendq.pending++;utag.loader.AS({id:d,load:1});}}catch(e){utag.DB(e)}}
if(c&&c.uids){this.RE(a,b,"alr");for(f=0;f<c.uids.length;f++){d=c.uids[f];sendTag(a,b,d);}}else if(utag.cfg.load_rules_ajax){this.RE(a,b,"blr");this.LR(b);this.RE(a,b,"alr");for(f=0;f<utag.loader.cfgsort.length;f++){d=utag.loader.cfgsort[f];if(utag.loader.cfg[d].load&&utag.loader.cfg[d].send){sendTag(a,b,d);}}}else{this.RE(a,b,"alr");for(d in utag.loader.GV(utag.sender)){sendTag(a,b,d);}}
this.RE(a,b,"end");},C:function(a,b,c){b={};for(c in utag.loader.GV(a)){if(a[c]instanceof Array){b[c]=a[c].slice(0)}else{b[c]=a[c]}}
return b}},ut:{pad:function(a,b,c,d){a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return""+d+a},vi:function(t,a,b){if(!utag.v_id){a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;}
return utag.v_id},hasOwn:function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a)},isEmptyObject:function(o,a){for(a in o){if(utag.ut.hasOwn(o,a))return false}
return true},isEmpty:function(o){var t=utag.ut.typeOf(o);if(t=="number"){return isNaN(o)}else if(t=="boolean"){return false}else if(t=="string"){return o.length===0}else return utag.ut.isEmptyObject(o)},typeOf:function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();},flatten:function(o){var a={};function r(c,p){if(Object(c)!==c||c instanceof Array){a[p]=c;}else{if(utag.ut.isEmptyObject(c)){}else{for(var d in c){r(c[d],p?p+"."+d:d);}}}}
r(o,"");return a;},merge:function(a,b,c,d){if(c){for(d in utag.loader.GV(b)){a[d]=b[d]}}else{for(d in utag.loader.GV(b)){if(typeof a[d]=="undefined")a[d]=b[d]}}},decode:function(a,b){b="";try{b=decodeURIComponent(a)}catch(e){utag.DB(e)};if(b==""){b=unescape(a)};return b},encode:function(a,b){b="";try{b=encodeURIComponent(a)}catch(e){utag.DB(e)};if(b==""){b=escape(a)};return b},error:function(a,b,c){if(typeof utag_err!="undefined"){utag_err.push(a)}},loader:function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){m.parentNode.removeChild(m);}
b=a.createElement("iframe");o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}
if(o.id){b.id=o.id};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l])}
b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}
if(typeof o.error=="function"){utag.loader.EV(b,"error",o.error);}
if(o.type!="img"){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}}};utag.o['cbsi.247sportssite']=utag;utag.cfg={template:"ut4.45.",load_rules_ajax:true,load_rules_at_wait:false,lowerqp:false,noconsole:false,session_timeout:1800000,readywait:0,noload:0,domain:utag.loader.lh(),datasource:"##UTDATASOURCE##".replace("##"+"UTDATASOURCE##",""),path:"//tags.tiqcdn.com/utag/cbsi/247sportssite/prod/",utid:"cbsi/247sportssite/201807191606"};utag.cfg.v=utag.cfg.template+"201807191606";utag.cond={12:0,15:0};utag.pagevars=function(ud){ud=ud||utag.data;try{ud['js_page.sp_abd']=sp_abd}catch(e){utag.DB(e)};try{ud['js_page.gdprConsent']=gdprConsent}catch(e){utag.DB(e)};};utag.loader.initdata=function(){try{utag.data=(typeof utag_data!='undefined')?utag_data:{};utag.udoname='utag_data';}catch(e){utag.data={};utag.DB('idf:'+e);}};utag.loader.loadrules=function(_pd,_pc){var d=_pd||utag.data;var c=_pc||utag.cond;for(var l in utag.loader.GV(c)){switch(l){case'12':try{c[12]|=(d['cp.247_geo']=='US'&&d['dom.pathname']=='/')}catch(e){utag.DB(e)};break;case'15':try{c[15]|=(d['_isEuUser'].toString().toLowerCase()=='false'.toLowerCase())}catch(e){utag.DB(e)};break;}}};utag.pre=function(){utag.loader.initdata();utag.pagevars();try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};utag.loader.loadrules();};utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();utag.handler.extend=[function(a,b){try{if(1){b['_scRsid']='cbsi247sportssite';b['_scRsidDev']='cbsi247sportssite';b['_scAccount']=b['_scRsid'];b['_siteId']='';b['_siteCode']='247sports';b['_siteType']='desktop web';b['_siteDomain']=b['dom.domain'];b['_pageTitle']=b['dom.title'];b['_siteEdition']='us';try{b['_sitePrimaryRsid']=b["_scAccount"].split(",")[0]}catch(e){};b['_userStatus']='not authenticated|anon';b['_pageUrl']='D=g';b['_userAgent']='D=User-Agent';try{b['_pageName']=b['_siteCode']+':'+b["dom.pathname"]}catch(e){};b['_siteBrand']='247Sports.com'}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['_scAccount']!='undefined'&&b['_scAccount']!=''){try{b['_sitePrimaryRsid']=b["_scAccount"].split(",")[0]}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['pageName']!='undefined'&&b['pageName']!=''){try{b['_pageName']=b['_siteCode']+':'+b['pageName']}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['siteSection']!='undefined'&&b['siteSection']!=''){try{b['_siteSection']=b["siteSection"]instanceof Array?b["siteSection"].join("|"):b["siteSection"]}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['pageType']!='undefined'&&b['pageType']!=''){b['_pageType']=b['pageType']}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['pageTypeId']!='undefined'&&b['pageTypeId']!=''){b['_pageTypeId']=b['pageTypeId']}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['pageOntologyId']!='undefined'&&b['pageOntologyId']!=''){b['_pageOntologyId']=b['pageOntologyId']}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['pageViewGuid']!='undefined'&&b['pageViewGuid']!=''){b['_pageViewGuid']=b['pageViewGuid']}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['siteHier']!='undefined'&&b['siteHier']!=''){try{b['_siteHier']=b["siteHier"]instanceof Array?b["siteHier"].join("|"):b["siteHier"]}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['deviceType']!='undefined'&&b['deviceType']!=''){b['_deviceType']=b['deviceType']}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['siteType']!='undefined'&&b['siteType']!=''){b['_siteType']=b['siteType'];b['_siteTypeDevice']=b['siteType']}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((typeof b['userState']!='undefined'&&b['userState']!=''&&typeof b['userType']!='undefined'&&b['userType']!='')){c=[b['userState'],b['userType']];b['_userStatus']=c.join('|')}}catch(e){utag.DB(e)}},function(a,b,c,d){c=['_siteHier','_pageType','_siteSection','_authorPrimaryName'];for(d=0;d<c.length;d++){try{b[c[d]]=(b[c[d]]instanceof Array||b[c[d]]instanceof Object)?b[c[d]]:b[c[d]].toString().toLowerCase()}catch(e){}}},function(a,b){try{if(typeof b['qp.ET_RID']!='undefined'&&b['qp.ET_RID']!=''){b['_ET_RID']=b['qp.ET_RID']}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['qp.ET_CID']!='undefined'&&b['qp.ET_CID']!=''){b['_ET_CID']=b['qp.ET_CID']}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['qp.mpid']!='undefined'&&b['qp.mpid']!=''){b['_mpid']=b['qp.mpid']}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['qp.bpid']!='undefined'&&b['qp.bpid']!=''){b['_bpid']=b['qp.bpid']}}catch(e){utag.DB(e)}},function(a,b){try{if(1){try{b['_subDomain']=b['_siteDomain'].split('.',1)[0]}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){var eu_eea_codes=['at','be','bg','cy','cz','de','dk','ee','es','fi','fr','gb','gr','hr','hu','ie','is','it','li','lt','lu','lv','mt','nl','no','pl','pt','ro','se','si','sk'];var country_code=undefined;if(typeof window.evidon=='object'&&typeof window.evidon.notice=='object'){country_code=window.evidon.notice.country.code;}else if(typeof window.evidon=='object'&&typeof window.evidon.location=='object'){country_code=window.evidon.location.code;}
if(country_code==undefined){window.isEuUser=false;b['_isEuUser']="false";}else{if(eu_eea_codes.indexOf(country_code)>-1){window.isEuUser=true;b['_isEuUser']="true";}else{window.isEuUser=false;b['_isEuUser']="false";}}}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['cp._evidon_consent_cookie']!='undefined'||b['js_page.gdprConsent'].toString().toLowerCase()=='true'.toLowerCase()){b['js_page.gdprConsent']='true'}}catch(e){utag.DB(e)}}];utag.handler.cfg_extend=[{"alr":1,"bwq":0,"id":"1","blr":0,"end":0},{"alr":1,"bwq":0,"id":"46","blr":0,"end":0},{"alr":1,"bwq":0,"id":"3","blr":0,"end":0},{"alr":1,"bwq":0,"id":"4","blr":0,"end":0},{"alr":1,"bwq":0,"id":"5","blr":0,"end":0},{"alr":1,"bwq":0,"id":"6","blr":0,"end":0},{"alr":1,"bwq":0,"id":"7","blr":0,"end":0},{"alr":1,"bwq":0,"id":"8","blr":0,"end":0},{"alr":1,"bwq":0,"id":"9","blr":0,"end":0},{"alr":1,"bwq":0,"id":"10","blr":0,"end":0},{"alr":1,"bwq":0,"id":"11","blr":0,"end":0},{"alr":1,"bwq":0,"id":"42","blr":0,"end":0},{"alr":1,"bwq":0,"id":"40","blr":0,"end":0},{"alr":1,"bwq":0,"id":"64","blr":0,"end":0},{"alr":1,"bwq":0,"id":"65","blr":0,"end":0},{"alr":1,"bwq":0,"id":"66","blr":0,"end":0},{"alr":1,"bwq":0,"id":"67","blr":0,"end":0},{"alr":1,"bwq":0,"id":"74","blr":0,"end":0},{"alr":0,"bwq":0,"id":"86","blr":1,"end":0},{"alr":0,"bwq":0,"id":"87","blr":1,"end":0}];utag.loader.initcfg=function(){utag.loader.cfg={"29":{load:1,send:1,v:201807191606,wait:1,tid:19063},"37":{load:utag.cond[12],send:1,v:201708241513,wait:1,tid:20010},"6":{load:1,send:1,v:201703282017,wait:1,tid:3005},"24":{load:1,send:1,v:201707272126,wait:1,tid:20010},"27":{load:1,send:1,v:201609261922,wait:1,tid:17003},"32":{load:utag.cond[15],send:1,v:201805251724,wait:1,tid:20010,src:"//b-code.liadm.com/a-016u.min.js"}};utag.loader.cfgsort=["29","37","6","24","27","32"];}
utag.loader.initcfg();}
if(typeof utag_cfg_ovrd!='undefined'){for(utag._i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[utag._i]=utag_cfg_ovrd[utag._i]};utag.loader.PINIT=function(a,b,c){utag.DB("Pre-INIT");if(utag.cfg.noload){return;}
try{this.GET();if(utag.handler.RE('view',utag.data,"blr")){utag.handler.LR(utag.data);}}catch(e){utag.DB(e)};a=this.cfg;c=0;for(b in this.GV(a)){if(a[b].block==1||(a[b].load>0&&(typeof a[b].src!='undefined'&&a[b].src!=''))){a[b].block=1;c=1;this.bq[b]=1;}}
if(c==1){for(b in this.GV(a)){if(a[b].block){a[b].id=b;if(a[b].load==4)a[b].load=1;a[b].cb=function(){var d=this.uid;utag.loader.cfg[d].cbf=1;utag.loader.LOAD(d)};this.AS(a[b]);}}}
if(c==0)this.INIT();};utag.loader.INIT=function(a,b,c,d,e){utag.DB('utag.loader.INIT');if(this.ol==1)return-1;else this.ol=1;if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr");utag.rpt.ts['i']=new Date();d=this.cfgsort;for(a=0;a<d.length;a++){e=d[a];b=this.cfg[e];b.id=e;if(b.block!=1){if(utag.loader.bk[b.id]||((utag.cfg.readywait||utag.cfg.noview)&&b.load==4)){this.f[b.id]=0;utag.loader.LOAD(b.id)}else if(b.wait==1&&utag.loader.rf==0){utag.DB('utag.loader.INIT: waiting '+b.id);this.wq.push(b)
this.f[b.id]=2;}else if(b.load>0){utag.DB('utag.loader.INIT: loading '+b.id);this.lq.push(b);this.AS(b);}}}
if(this.wq.length>0)utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.DB('READY:utag.loader.wq');utag.loader.rf=1;utag.loader.WQ();}});else if(this.lq.length>0)utag.loader.rf=1;else if(this.lq.length==0)utag.loader.END();return 1};utag.loader.EV('','ready',function(a){if(utag.loader.efr!=1){utag.loader.efr=1;try{om={fireGdprTags:function(p){var tags=[1,2,3];utag.view(window.utag_data,undefined,tags);},getHbParams:function(p){var utag_keys=new Array('siteEdition','siteSection','siteType','siteHier','articleId','articleType','articleTitle','mediaAutoPlay','pageType','pageTypeId','pageOntologyId','pageViewGuid','showId','showTitle','showEpisodeId','showEpisodeTitle','userState','userId','userType','userRegId','deviceType','dwAnonId');var hbParams=new Array(),data={};if(!p){p={}};for(var i=0;i<utag_keys.length;i++){if(!!utag_data[utag_keys[i]]){hbParams[utag_keys[i]]=utag_data[utag_keys[i]];}}
$.extend(data,hbParams,{'siteRsids':utag_data['_scAccount'],'siteCode':utag_data['_siteCode'],'pageUrl':utag_data['_pageUrl'],'sitePrimaryRsid':utag_data['_sitePrimaryRsid'],'userStatus':utag_data['userType']},p);return data;},trackClick:function(p,j){var a=(!!p.item)?p.item:"";var j=(!!j)?j:"trackClick";var data={};$.extend(data,utag_data,{'link_text':j,'_clickAction':j,'_clickText':a},p);utag.link(data);return false;},trackImpression:function(p){var data={};$.extend(data,utag_data,{'link_text':"trackImpression"});utag.link(data);return false;},trackView:function(p){if(typeof p=="undefined"){var p={};}
var data={};$.extend(data,utag_data,{'_noLinkTrack':'LEVT'},p)
utag.view(data);},keepAlive:function(){utag.link({'link_text':'keepAlive'});return false;},trackSocialClick:function(p){var a=(!!p.socialService)?p.socialService:"";utag.link({'_clickAction':'socialShareClick','socialService':a,'link_text':'trackSocialClick','_levtType':'social','_levtEventType':'share','_riaEventT':'share','_riaSsite':a,'_riaWd':'sharebar','_riaWdLoc':'river','pageViewGuid':utag.data['pageViewGuid'],'pageType':utag.data['pageType'],'siteHier':utag.data['siteHier'],'siteType':utag.data['siteType'],'deviceType':utag.data['deviceType'],'articleId':utag.data['articleId'],'articleTitle':utag.data['articleTitle'],'articleType':utag.data['articleType'],'articlePubDate':utag.data['articlePubDate'],'articleAuthorId':utag.data['articleAuthorId'],'articleAuthorName':utag.data['articleAuthorName'],'topicId':utag.data['topicId'],'topicName':utag.data['topicName']});return false;},trackCommentAdd:function(){utag.link({'_clickAction':'submitComment','link_text':'trackSubmitComment','pageViewGuid':utag.data['pageViewGuid'],'_levtType':'ria','_levtEventType':'log','_riaEvent':'post','_riaMapp':'livefyre','_riaObjType':'url','pageType':utag.data['pageType'],'siteHier':utag.data['siteHier'],'siteType':utag.data['siteType'],'deviceType':utag.data['deviceType'],'articleId':utag.data['articleId'],'articleTitle':utag.data['articleTitle'],'articleType':utag.data['articleType'],'articlePubDate':utag.data['articlePubDate'],'articleAuthorId':utag.data['articleAuthorId'],'articleAuthorName':utag.data['articleAuthorName'],'topicId':utag.data['topicId'],'topicName':utag.data['topicName']});return false;},trackLogin:function(p){var a=(!!p.userId)?p.userId:"";var b=(!!p.userState)?p.userState:"";var c=(!!p.userType)?p.userType:"";utag.link({'_noLinkTrack':'LEVT','_clickAction':'login','link_text':'trackLogin','userId':a,'userState':b,'userType':c});return false;},trackGalleryPV:function(p){var data={};$.extend(data,utag_data,{'_noLinkTrack':'LEVT','_pageAction':'eventPhotoView'})
utag.view(data);},trackPhotoView:function(p){var data={};var params={'pageEventPhotoView':'1','_pageAction':'eventPhotoView','photoId':((!!p.photoId)?p.photoId:''),'photoTitle':((!!p.photoTitle)?p.photoTitle:''),'pageViewGuid':((!!p.pageViewGuid)?p.pageViewGuid:'na')};var data={};$.extend(data,utag_data,params);utag.view(data);return false;},trackSearchListPV:function(p){var a=(!!p.term)?p.term:"";var b=(!!p.filter)?p.filter:"";var data={};$.extend(data,utag_data,{'_noLinkTrack':'LEVT','_pageAction':'eventSearchView','searchTerm':a})
utag.view(data);},trackLogout:function(p){var a=(!!p.userId)?p.userId:"";utag.link({'_noLinkTrack':'LEVT','_clickAction':'logout','link_text':'trackLogout','userId':a,'userState':'not authenticated','userType':'anon'});return false;},trackWalletOrderView:function(p){var data={};$.extend(data,utag_data,{'link_text':'trackWalletOrderView','_clickAction':'eventWalletOrderView'});utag.link(data);},trackWalletPurchaseSuccess:function(p){var data={};$.extend(data,utag_data,{'link_text':'trackWalletPurchaseSuccess','_clickAction':'eventWalletPurchaseSuccess'});utag.link(data);return false;},trackPaymentRequest:function(p){var data={};$.extend(data,utag_data,{'link_text':'trackPaymentRequest','_clickAction':'eventPaymentRequest'});utag.link(data);return false;},trackPaymentRequestSuccess:function(p){var data={};$.extend(data,utag_data,{'link_text':'trackPaymentRequestSuccess','_clickAction':'eventPaymentRequestSuccess'});utag.link(data);return false;},trackPendingWinsClick:function(p){var data={};$.extend(data,utag_data,{'link_text':'trackPendingWinsClick','_clickAction':'eventPendingWins'});utag.link(data);return false;},trackPendingWinsSuccess:function(p){var data={};$.extend(data,utag_data,{'link_text':'trackPendingWinsSuccess','_clickAction':'eventPendingWinsSuccess'});utag.link(data);return false;},trackCasting:function(e,c){var data={};var action=e?(c?'eventCastingConnected':'eventCastingNotConnected'):'eventCastingNotEnabled';var state='chromecast:'+(e?'on':'off');return false;},trackaddcash:function(p){var data={};$.extend(data,utag_data,{'link_text':'trackaddcash','_clickAction':'eventtrackaddcash'});utag.link(data);},trackviewstep1:function(p){var a=(!!p.item)?p.item:"";utag.link({'link_text':'trackviewstep1','_clickAction':'eventviewstep1','_trackviewText':a});return false;},trackviewstep2:function(p){var a=(!!p.item)?p.item:"";utag.link({'link_text':'trackviewstep1','_clickAction':'eventviewstep2','_trackviewText':a});return false;},trackviewstep3:function(p){var a=(!!p.item)?p.item:"";utag.link({'link_text':'trackviewstep1','_clickAction':'eventviewstep3','_trackviewText':a});return false;},trackviewstep4:function(p){var a=(!!p.item)?p.item:"";utag.link({'link_text':'trackviewstep1','_clickAction':'eventviewstep3','_trackviewText':a});return false;},trackviewstep5:function(p){var a=(!!p.item)?p.item:"";utag.link({'link_text':'trackviewstep1','_clickAction':'eventviewstep1','_trackviewText':a});return false;},trackviewstep6:function(p){var a=(!!p.item)?p.item:"";utag.link({'link_text':'trackviewstep6','_clickAction':'eventviewstep6','_trackviewText':a});return false;},trackH5Video:function(p){var data={};var st=(p.eVar3)?p.eVar3:'';var va=(p.eVar31)?p.eVar31:'';var vb=(p.eVar25)?p.eVar25:'';var vc=(p.eVar32)?p.eVar32:'';var vd=(p.eVar33)?p.eVar33:'';var ve=(p.eVar34)?p.eVar34:'';var vf=(p.eVar38)?p.eVar38:'';var vg=(p.eVar39)?p.eVar39:'';var s;if(p.events){if(p.events.indexOf('event52')>-1){s='videoPlayStart';}else if(p.events.indexOf('event53')>-1){s='videoPlay25Percent';}else if(p.events.indexOf('event54')>-1){s='videoPlay50Percent';}else if(p.events.indexOf('event55')>-1){s='videoPlay75Percent';}else if(p.events.indexOf('event58')>-1){s='videoPlayComplete';}else if(p.events.indexOf('event60')>-1){s='videoAdStart';}else if(p.events.indexOf('event62')>-1){s='videoAd25Percent';}else if(p.events.indexOf('event63')>-1){s='videoAd50Percent';}else if(p.events.indexOf('event64')>-1){s='videoAd75Percent';}else if(p.events.indexOf('event61')>-1){s='videoAdComplete';}else{s='videoPaused';}
var vh=0;if(p.events.indexOf('=')>-1){vh=p.events.split('=')[1];}}
$.extend(data,utag_data,{'_videoAction':s,'link_text':'trackH5Video-'+s,'videoId':va,'videoTitle':vb,'videoPartners':vc,'videoAdId':vd,'videoAdTitle':ve,'videoContentType':vf,'videoSegment':vg,'videoTime':vh,'siteType':st});utag.link(data);return false;}}}catch(e){utag.DB(e)};try{var rid=utag_data['userId'];if(rid!=''&&rid!=undefined){var aa_cookie="cbsiaa";var aa="";var name=aa_cookie+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){aa=c.substring(name.length,c.length);}}
var d=new Date();d.setTime(d.getTime()+(265*24*60*60*1000));var expires="expires="+d.toUTCString();if(aa==""){document.cookie=aa_cookie+"="+rid+";"+expires+";path=/";}else{if(aa!=rid){document.cookie=aa_cookie+"="+rid+";"+expires+";path=/";}}}}catch(e){utag.DB(e)};try{if(typeof utag.runonce=='undefined')utag.runonce={};utag.jdh=function(h,i,j,k){h=utag.jdhc.length;if(h==0)window.clearInterval(utag.jdhi);else{for(i=0;i<h;i++){j=utag.jdhc[i];k=jQuery(j.i).is(":visible")?1:0;if(k!=j.s){if(j.e==(j.s=k))jQuery(j.i).trigger(j.e?"afterShow":"afterHide")}}}};utag.jdhi=window.setInterval(utag.jdh,250);utag.jdhc=[];if(1){if(typeof utag.runonce[85]=='undefined'){utag.runonce[85]=1;jQuery('body').on('click','.stubhub-tracker',function(e){utag.link({"_clickAction":'trackClickExternal',"link_text":'stubhubTrackClick',"_clickText":$(this).attr("data-stubhub-element")})})}}}catch(e){utag.DB(e)};}})
if(utag.cfg.readywait||utag.cfg.waittimer){utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.cfg.readywait=1;utag.DB('READY:utag.cfg.readywait');setTimeout(function(){utag.loader.PINIT()},utag.cfg.waittimer||1);}})}else{utag.loader.PINIT()}}