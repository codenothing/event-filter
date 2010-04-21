/*
 * jQuery Event Filter
 * December 13, 2009
 * Corey Hart @ http://www.codenothing.com
 */
(function(i,l){var e,c=false,b,f,a,j,d,h;i.expr[":"].Event=function(k,m,g){if(k===l||!g[3]||g[3]=="")return false;else if(e!==g[3]){e=g[3].split(".");b=e.shift();if((c=(j=b.substr(0,1))==="!")||j==="\\")b=b.substr(1);f=e.sort().join(".");e=g[3]}if(a=i(k).data("events"))if(!b&&f.length){for(d in a)if(a[d])for(h in a[d])if(a[d][h].type&&a[d][h].type===f)return!c;return c}else if(a[b]){if(f.length){for(d in a[b])if(a[b][d].type&&a[b][d].type==f)return!c;return c}}else return c;else return c;return!c}})(jQuery);
