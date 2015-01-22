/*! grunt-grunticon Stylesheet Loader - v2.0.0-beta.4 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */

(function(e){function t(t,n,r){"use strict";function a(){for(var e,n=0;c.length>n;n++)c[n].href&&c[n].href.indexOf(t)>-1&&(e=!0);e?o.media=r||"all":setTimeout(a)}var o=e.document.createElement("link"),i=n||e.document.getElementsByTagName("script")[0],c=e.document.styleSheets;return o.rel="stylesheet",o.href=t,o.media="only x",i.parentNode.insertBefore(o,i),a(),o}var n=function(r){"use strict";if(r&&3===r.length){var a=e.navigator,o=e.Image,i=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||e.opera&&-1===a.userAgent.indexOf("Chrome")||-1!==a.userAgent.indexOf("Series40")),c=new o;c.onerror=function(){n.method="png",t(r[2])},c.onload=function(){var e=1===c.width&&1===c.height,a=r[e&&i?0:e?1:2];n.method=e&&i?"svg":e?"datapng":"png",n.href=a,t(a)},c.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",document.documentElement.className+=" grunticon"}};n.loadCSS=t,e.grunticon=n})(this);(function(e,t){"use strict";var n=t.document,r="grunticon:",o=function(e){if(n.attachEvent?"complete"===n.readyState:"loading"!==n.readyState)e();else{var t=!1;n.addEventListener("readystatechange",function(){t||(t=!0,e())},!1)}},a=function(e){for(var t,o,a,i,c,s,u={},l=n.styleSheets,d=0;l.length>d;d++)if(l[d].href&&l[d].href.indexOf(e)>-1){t=l[d];break}if(!t)return u;for(o=t.cssRules?t.cssRules:t.rules,d=0;o.length>d;d++)a=o[d].cssText,i=r+o[d].selectorText,c=a.split(");")[0].match(/US\-ASCII\,([^"']+)/),c&&c[1]&&(s=decodeURIComponent(c[1]),u[i]=s);return u},i=function(e){var t,o,a;o="data-grunticon-embed";for(var i in e)if(a=i.slice(r.length),t=n.querySelectorAll(a+"["+o+"]"),t.length)for(var c=0;t.length>c;c++)t[c].innerHTML=e[i],t[c].style.backgroundImage="none",t[c].removeAttribute(o);return t},c=function(){o(function(){i(a(e.href))})};e.embedIcons=i,e.getIcons=a,e.ready=o,e.svgLoadedCallback=c})(grunticon,this);