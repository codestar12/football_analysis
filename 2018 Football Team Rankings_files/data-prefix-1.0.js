define(["jquery","version!fly/utils/string-helper"],function(f,u){var n=function(e,n){var r=f(this),i=r.data(n),t={};if(e){f.each(i,function(n,r){if(n.indexOf(e)===0){n=n.substr(e.length);t[u.lowerFirst(n)]=r}});return t}};f.fn.dataPrefix=n;return n});