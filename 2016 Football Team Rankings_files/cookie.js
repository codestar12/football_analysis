define(["jquery","libs/debug","version!fly/libs/jquery.cookie"],function(n,e){e=e.init("cookie");e.log("cookie");var r={domain:".cbssports.com",path:"/"};return{read:function(e){return n.cookie(e)},write:function(e,o,i){n.cookie(e,o,n.extend(true,{},r,i||{}))},erase:function(e,o){return n.removeCookie(e,n.extend(true,{},r,o||{}))}}});