(function e(){var t=window.location.href;var r=window.location.host;var a=["247sports.com","scout.com"];c();function n(e){return e.substring(e.lastIndexOf(".",e.lastIndexOf(".")-1)+1)}function o(e,t){var r=t;var a=new RegExp("[?&]"+e+"=([^&#]*)","i");var n=a.exec(r);return n?n[1]:null}function s(e){return Object.keys(e).sort().map(function(t){return[t,e[t]].join("=")}).join("&")}function c(){var e=encodeURIComponent(r);var c=document.querySelectorAll('[data-js="saagEmbed"]');var i=o("env",t);var u=i=="stage"?"stage.fly.cbssports.com":i=="qa"?"qa.fly.cbssports.com":"embed.cbssports.com";var l=a.indexOf(n(r))>-1?1:0;if(c){var d;for(d=0;d<c.length;d++){var v=document.createElement("iframe");var f=c[d].getAttribute("data-league");var m={arena:f,setTorqEnv:"production",setDevice:"desktop",embedPageUrl:e,supportsAllGames:l};var p="//"+u+"/widgets/scores-at-a-glance/?"+s(m);var b="height:56px; width:100%; border:0;";v.setAttribute("src",p);v.setAttribute("style",b);c[d].appendChild(v)}}else{return false}}})();