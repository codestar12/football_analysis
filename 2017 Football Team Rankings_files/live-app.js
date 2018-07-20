define(["managers/liveScoring","jquery","libs/debug","liveconnection/managers/connection","version!fly/libs/underscore"],function(l,m,e,a,t){debug=e.init("liveApp");debug.enable();debug.log("liveApp");var o;l.initialize();var h=function(e){var t=this,o={topics:[],type:null,gameAbbr:null,league:null,environment:"qa",delay:0};this.options=m.extend({},o,e);var s=this.options.type;debug.log(e);if(s=="MLBGT"){this.options.topics=["/mlb/scoreboard","/mlb/gametracker/"+this.options.gameAbbr+"/plays","/mlb/gametracker/"+this.options.gameAbbr+"/ps","/mlb/gametracker/"+this.options.gameAbbr+"/psytd","/mlb/gametracker/"+this.options.gameAbbr+"/rosters","/mlb/gametracker/"+this.options.gameAbbr+"/boxscores","/mlb/gametracker/"+this.options.gameAbbr+"/scores","/mlb/gametracker/"+this.options.gameAbbr+"/zones"];l.setKey(["options"],this.options);require(["managers/gametracker/mlb"],function(e){h.prototype.connect(t.options)})}if(s=="FOOTBALLGT"){if(this.options.gameAbbr.indexOf("NFL_")>-1){this.options.topics=["/nfl/scoreboard","/nfl/gametracker/"+this.options.gameAbbr+"/drives","/nfl/gametracker/"+this.options.gameAbbr+"/plays","/nfl/gametracker/"+this.options.gameAbbr+"/ts","/nfl/gametracker/"+this.options.gameAbbr+"/ps","/nfl/gametracker/"+this.options.gameAbbr+"/psytd","/nfl/gametracker/"+this.options.gameAbbr+"/leaders","/nfl/gametracker/"+this.options.gameAbbr+"/scores"]}if(this.options.gameAbbr.indexOf("NCAAF_")>-1){this.options.topics=["/ncaaf/scoreboard","/ncaaf/gametracker/"+this.options.gameAbbr+"/drives","/ncaaf/gametracker/"+this.options.gameAbbr+"/plays","/ncaaf/gametracker/"+this.options.gameAbbr+"/ts","/ncaaf/gametracker/"+this.options.gameAbbr+"/ps","/ncaaf/gametracker/"+this.options.gameAbbr+"/psytd","/ncaaf/gametracker/"+this.options.gameAbbr+"/leaders","/ncaaf/gametracker/"+this.options.gameAbbr+"/scores"]}if(this.options.topics==[]){return}l.setKey(["options"],this.options);require(["managers/gametracker/football"],function(e){h.prototype.connect(t.options)})}if(s=="BASKETBALLGT"){if(this.options.gameAbbr.indexOf("NBA_")>-1){this.options.topics=["/nba/scoreboard","/nba/gametracker/"+this.options.gameAbbr+"/ts","/nba/gametracker/"+this.options.gameAbbr+"/ps","/nba/gametracker/"+this.options.gameAbbr+"/psytd","/nba/gametracker/"+this.options.gameAbbr+"/rosters","/nba/gametracker/"+this.options.gameAbbr+"/plays"]}if(this.options.gameAbbr.indexOf("NCAAB_")>-1){this.options.topics=["/ncaab/scoreboard","/ncaab/gametracker/"+this.options.gameAbbr+"/ts","/ncaab/gametracker/"+this.options.gameAbbr+"/ps","/ncaab/gametracker/"+this.options.gameAbbr+"/psytd","/ncaab/gametracker/"+this.options.gameAbbr+"/rosters","/ncaab/gametracker/"+this.options.gameAbbr+"/plays"]}if(this.options.topics==[]){return}l.setKey(["options"],this.options);require(["managers/gametracker/basketball"],function(e){h.prototype.connect(t.options)})}if(s=="scoreboard"){var a=this.options.league,i=a,r=this.options.gameAbbr,n=r!=""?r.split("|"):null;switch(a){case"nfl":this.options.topics.push("/"+a+"/scoreboard/leaders");i="football";break;case"nhl":i="nhl";break;case"ncaaf":case"collegefootball":a="ncaaf";i="football";break;case"ncaab":case"collegebasketball":a="ncaab";i="basketball";break;case"mlb":this.options.topics.push("/"+a+"/scoreboard/leaders");a="mlb";i="mlb";break;case"nba":a="nba";i="basketball";break}this.options.topics.push("/"+a+"/scoreboard");if(n!=null){for(var p in n){this.options.topics.push("/"+a+"/gametracker/"+n[p]+"/leaders")}}l.setKey(["options"],this.options);require(["managers/scoreboard/"+i],function(e){h.prototype.connect(t.options)})}if(s=="SUPERBOWLBOXSCORE"){var a=this.options.league,r=this.options.gameAbbr;this.options.topics=["/"+a+"/scoreboard/"+r];l.setKey(["options"],this.options);require(["managers/superbowl"],function(e){h.prototype.connect(t.options)})}if(m.inArray(s,["saag","scorecard"])!=-1){var r=this.options.gameAbbr,n=r!=""?r.split("|"):null;if(n!=null){for(var p in n){var c=n[p],b=c.split("_"),g=b.shift();this.options.topics.push("/"+g.toLowerCase()+"/scoreboard/"+c)}}l.setKey(["options"],this.options);require(["managers/"+s],function(e){h.prototype.connect(t.options)})}if(s=="GOLFLEADERBOARD"){this.options.topics.push("/golf/leaderboard/"+this.options.gameAbbr);l.setKey(["options"],this.options);require(["managers/leaderboard"],function(e){h.prototype.connect(t.options)})}if(this.options.type=="MASTERSLIVE"){this.options.topics.push("/golf/leaderboard/"+this.options.gameAbbr);this.options.environment="production";window.liveScoring.options=this.options;require(["managers/video/masters-live"],function(e){h.prototype.connect(t.options)})}if(s=="draft-tracker"){var a=this.options.league,i=a,r=this.options.gameAbbr,n=r!=""?r.split("|"):null;switch(a){case"nba":a="nba";i="basketball";break}this.options.topics.push("/drafttracker/"+a+"/aggregate");l.setKey(["options"],this.options);require(["managers/draft-tracker/"+i],function(e){h.prototype.connect(t.options)})}};h.prototype={connect:function(o){var e=parseInt(o.delay),t=o.type,s=l.getKey([t])||l.getValue();if(typeof s.currentTimeOut!="undefined"){clearTimeout(s.currentTimeOut)}s.currentTimeOut=setTimeout(function(){var e=s.eventStateCallback,t=s.eventUpdateCallback;if(typeof s.connection!="undefined"){s.connection.disconnect()}s.options=o;s.connection=new a({topics:o.topics,eventUpdateCallback:t,eventStateCallback:e,websocketServerEnvironment:o.environment,servers:o.servers,accessToken:"64d1553ce024ab863adf69cff277b1f2ed75d961"})},e*1e3)}};return h});