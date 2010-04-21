/*
 * jQuery Event Filter [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */ 
(function(i){var j,h,d=false,b,e,a,k;i.expr[":"].Event=function(l,m,f){if(!l||!f[3]||f[3]==="")return false;else if(j!==f[3]){h=(j=f[3]).split(".");b=h.shift();if((d=(k=b.substr(0,1))==="!")||k==="\\")b=b.substr(1);e=h.sort().join(".")}var c,g;if(a=i.data(l,"events"))if(!b&&e.length){for(c in a)if(a.hasOwnPrototype(c))for(g in a[c])if(a[c].hasOwnPrototype(g)&&a[c][g].type&&a[c][g].type===e)return!d;return d}else if(a[b]){if(e.length){for(c in a[b])if(a[b].hasOwnPrototype(c)&&a[b][c].type&&a[b][c].type==
e)return!d;return d}}else return d;else return d;return!d}})(jQuery);
