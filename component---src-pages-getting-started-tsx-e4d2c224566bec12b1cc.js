/*! For license information please see component---src-pages-getting-started-tsx-e4d2c224566bec12b1cc.js.LICENSE.txt */
(self.webpackChunkdogecoin_org=self.webpackChunkdogecoin_org||[]).push([[48],{1763:function(e,t,n){var r;"undefined"!=typeof self&&self,e.exports=(r=n(7294),function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";function r(e,t){return l(e)||c(e,t)||i(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}function l(e){if(Array.isArray(e))return e}var s=n(1),u=n.n(s),d=n(8),f=n.n(d),m=n(2),p=n(10),h=n.n(p),y=n(3),b=n(6),g=function(e){return e.query||Object(y.a)(e)},x=function(e){if(!e)return null;var t=Object.keys(e);return 0===t.length?null:t.reduce((function(t,n){return t[Object(m.a)(n)]=e[n],t}),{})},v=function(){var e=u.a.useRef(!1);return u.a.useEffect((function(){e.current=!0}),[]),e.current},w=function(e){var t=u.a.useContext(b.a),n=function(){return x(e)||x(t)},o=r(u.a.useState(n),2),i=o[0],a=o[1];return u.a.useEffect((function(){var e=n();h()(i,e)||a(e)}),[e,t]),i},E=function(e){var t=function(){return g(e)},n=r(u.a.useState(t),2),o=n[0],i=n[1];return u.a.useEffect((function(){var e=t();o!==e&&i(e)}),[e]),o},O=function(e,t){var n=function(){return f()(e,t||{},!!t)},o=r(u.a.useState(n),2),i=o[0],a=o[1],c=v();return u.a.useEffect((function(){return c&&a(n()),function(){i.dispose()}}),[e,t]),i},k=function(e){var t=r(u.a.useState(e.matches),2),n=t[0],o=t[1];return u.a.useEffect((function(){var t=function(){o(e.matches)};return e.addListener(t),t(),function(){e.removeListener(t)}}),[e]),n},_=function(e,t,n){var r=w(t),o=E(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var i=O(o,r),a=k(i),c=v();return u.a.useEffect((function(){c&&n&&n(a)}),[a]),a};t.a=_},function(e,t){e.exports=r},function(e,t,n){"use strict";function r(e){return"-"+e.toLowerCase()}function o(e){if(c.hasOwnProperty(e))return c[e];var t=e.replace(i,r);return c[e]=a.test(t)?"-"+t:t}var i=/[A-Z]/g,a=/^ms-/,c={};t.a=o},function(e,t,n){"use strict";var r=n(2),o=n(11),i=function(e){return"not ".concat(e)},a=function(e,t){var n=Object(r.a)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?i(n):"(".concat(n,": ").concat(t,")")},c=function(e){return e.join(" and ")},l=function(e){var t=[];return Object.keys(o.a.all).forEach((function(n){var r=e[n];null!=r&&t.push(a(n,r))})),c(t)};t.a=l},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(1),o=n.n(r).a.createContext();t.a=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(17),i=n(3),a=n(6);n.d(t,"default",(function(){return o.a})),n.d(t,"useMediaQuery",(function(){return r.a})),n.d(t,"toQuery",(function(){return i.a})),n.d(t,"Context",(function(){return a.a}))},function(e,t,n){"use strict";function r(e,t,n){function r(e){u&&u.addListener(e)}function o(e){u&&u.removeListener(e)}function c(e){s.matches=e.matches,s.media=e.media}function l(){u&&u.removeListener(c)}var s=this;if(a&&!n){var u=a.call(window,e);this.matches=u.matches,this.media=u.media,u.addListener(c)}else this.matches=i(e,t),this.media=e;this.addListener=r,this.removeListener=o,this.dispose=l}function o(e,t,n){return new r(e,t,n)}var i=n(9).match,a="undefined"!=typeof window?window.matchMedia:null;e.exports=o},function(e,t,n){"use strict";function r(e,t){return o(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,l=t[n];if(!l)return!1;switch(n){case"orientation":case"scan":return l.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=c(o),l=c(l);break;case"resolution":o=a(o),l=a(l);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=i(o),l=i(l);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,l=parseInt(l,10)||0}switch(r){case"min":return l>=o;case"max":return l<=o;default:return l===o}}));return o&&!n||!o&&n}))}function o(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(l),n=t[1],r=t[2],o=t[3]||"",i={};return i.inverse=!!n&&"not"===n.toLowerCase(),i.type=r?r.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],i.expressions=o.map((function(e){var t=e.match(s),n=t[1].toLowerCase().match(u);return{modifier:n[1],feature:n[2],value:t[2]}})),i}))}function i(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function a(e){var t=parseFloat(e);switch(String(e).match(f)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(d)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=r,t.parse=o;var l=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,s=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,u=/^(?:(min|max)-)?(.+)/,d=/(em|rem|px|cm|mm|in|pt|pc)?$/,f=/(dpi|dpcm|dppx)?$/},function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var i=0;i<o;i++){var a=n[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}e.exports=r},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(12),c=n.n(a),l=c.a.oneOfType([c.a.string,c.a.number]),s={orientation:c.a.oneOf(["portrait","landscape"]),scan:c.a.oneOf(["progressive","interlace"]),aspectRatio:c.a.string,deviceAspectRatio:c.a.string,height:l,deviceHeight:l,width:l,deviceWidth:l,color:c.a.bool,colorIndex:c.a.bool,monochrome:c.a.bool,resolution:l},u=o({minAspectRatio:c.a.string,maxAspectRatio:c.a.string,minDeviceAspectRatio:c.a.string,maxDeviceAspectRatio:c.a.string,minHeight:l,maxHeight:l,minDeviceHeight:l,maxDeviceHeight:l,minWidth:l,maxWidth:l,minDeviceWidth:l,maxDeviceWidth:l,minColor:c.a.number,maxColor:c.a.number,minColorIndex:c.a.number,maxColorIndex:c.a.number,minMonochrome:c.a.number,maxMonochrome:c.a.number,minResolution:l,maxResolution:l},s),d={all:c.a.bool,grid:c.a.bool,aural:c.a.bool,braille:c.a.bool,handheld:c.a.bool,print:c.a.bool,projection:c.a.bool,screen:c.a.bool,tty:c.a.bool,tv:c.a.bool,embossed:c.a.bool},f=o(o({},d),u);s.type=Object.keys(d),t.a={all:f,types:d,matchers:s,features:u}},function(e,t,n){var r=n(4);e.exports=n(14)(r.isElement,!0)},function(e,t,n){"use strict";!function(){function e(e){return"string"==typeof e||"function"==typeof e||e===x||e===_||e===w||e===v||e===C||e===S||"object"==typeof e&&null!==e&&(e.$$typeof===T||e.$$typeof===j||e.$$typeof===E||e.$$typeof===O||e.$$typeof===I||e.$$typeof===$||e.$$typeof===Z||e.$$typeof===L||e.$$typeof===P)}function n(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case b:var n=e.type;switch(n){case k:case _:case x:case w:case v:case C:return n;default:var r=n&&n.$$typeof;switch(r){case O:case I:case T:case j:case E:return r;default:return t}}case g:return t}}}function r(e){return q||(q=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),o(e)||n(e)===k}function o(e){return n(e)===_}function i(e){return n(e)===O}function a(e){return n(e)===E}function c(e){return"object"==typeof e&&null!==e&&e.$$typeof===b}function l(e){return n(e)===I}function s(e){return n(e)===x}function u(e){return n(e)===T}function d(e){return n(e)===j}function f(e){return n(e)===g}function m(e){return n(e)===w}function p(e){return n(e)===v}function h(e){return n(e)===C}var y="function"==typeof Symbol&&Symbol.for,b=y?Symbol.for("react.element"):60103,g=y?Symbol.for("react.portal"):60106,x=y?Symbol.for("react.fragment"):60107,v=y?Symbol.for("react.strict_mode"):60108,w=y?Symbol.for("react.profiler"):60114,E=y?Symbol.for("react.provider"):60109,O=y?Symbol.for("react.context"):60110,k=y?Symbol.for("react.async_mode"):60111,_=y?Symbol.for("react.concurrent_mode"):60111,I=y?Symbol.for("react.forward_ref"):60112,C=y?Symbol.for("react.suspense"):60113,S=y?Symbol.for("react.suspense_list"):60120,j=y?Symbol.for("react.memo"):60115,T=y?Symbol.for("react.lazy"):60116,P=y?Symbol.for("react.block"):60121,$=y?Symbol.for("react.fundamental"):60117,Z=y?Symbol.for("react.responder"):60118,L=y?Symbol.for("react.scope"):60119,A=k,R=_,N=O,W=E,z=b,D=I,F=x,M=T,B=j,X=g,U=w,G=v,J=C,q=!1;t.AsyncMode=A,t.ConcurrentMode=R,t.ContextConsumer=N,t.ContextProvider=W,t.Element=z,t.ForwardRef=D,t.Fragment=F,t.Lazy=M,t.Memo=B,t.Portal=X,t.Profiler=U,t.StrictMode=G,t.Suspense=J,t.isAsyncMode=r,t.isConcurrentMode=o,t.isContextConsumer=i,t.isContextProvider=a,t.isElement=c,t.isForwardRef=l,t.isFragment=s,t.isLazy=u,t.isMemo=d,t.isPortal=f,t.isProfiler=m,t.isStrictMode=p,t.isSuspense=h,t.isValidElementType=e,t.typeOf=n}()},function(e,t,n){"use strict";function r(){return null}var o=n(4),i=n(15),a=n(5),c=n(16),l=Function.call.bind(Object.prototype.hasOwnProperty),s=function(){};s=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},e.exports=function(e,t){function n(e){var t=e&&(C&&e[C]||e[S]);if("function"==typeof t)return t}function u(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){this.message=e,this.stack=""}function f(e){function n(n,i,c,l,u,f,m){if(l=l||j,f=f||c,m!==a){if(t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}if("undefined"!=typeof console){var h=l+":"+c;!r[h]&&o<3&&(s("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[h]=!0,o++)}}return null==i[c]?n?new d(null===i[c]?"The "+u+" `"+f+"` is marked as required in `"+l+"`, but its value is `null`.":"The "+u+" `"+f+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(i,c,l,u,f)}var r={},o=0,i=n.bind(null,!1);return i.isRequired=n.bind(null,!0),i}function m(e){function t(t,n,r,o,i,a){var c=t[n];return O(c)!==e?new d("Invalid "+o+" `"+i+"` of type `"+k(c)+"` supplied to `"+r+"`, expected `"+e+"`."):null}return f(t)}function p(e){function t(t,n,r,o,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var c=t[n];if(!Array.isArray(c))return new d("Invalid "+o+" `"+i+"` of type `"+O(c)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<c.length;l++){var s=e(c,l,r,o,i+"["+l+"]",a);if(s instanceof Error)return s}return null}return f(t)}function h(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||j;return new d("Invalid "+o+" `"+i+"` of type `"+I(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return f(t)}function y(e){function t(t,n,r,o,i){for(var a=t[n],c=0;c<e.length;c++)if(u(a,e[c]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===k(t)?String(t):t}));return new d("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")}return Array.isArray(e)?f(t):(s(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)}function b(e){function t(t,n,r,o,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],s=O(c);if("object"!==s)return new d("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var u in c)if(l(c,u)){var f=e(c,u,r,o,i+"."+u,a);if(f instanceof Error)return f}return null}return f(t)}function g(e){function t(t,n,r,o,i){for(var c=0;c<e.length;c++)if(null==(0,e[c])(t,n,r,o,i,a))return null;return new d("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return s("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+_(o)+" at index "+n+"."),r}return f(t)}function x(e){function t(t,n,r,o,i){var c=t[n],l=O(c);if("object"!==l)return new d("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var u=e[s];if(u){var f=u(c,s,r,o,i+"."+s,a);if(f)return f}}return null}return f(t)}function v(e){function t(t,n,r,o,c){var l=t[n],s=O(l);if("object"!==s)return new d("Invalid "+o+" `"+c+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var u=i({},t[n],e);for(var f in u){var m=e[f];if(!m)return new d("Invalid "+o+" `"+c+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var p=m(l,f,r,o,c+"."+f,a);if(p)return p}return null}return f(t)}function w(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(w);if(null===t||e(t))return!0;var r=n(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!w(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!w(a[1]))return!1}return!0;default:return!1}}function E(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function O(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":E(t,e)?"symbol":t}function k(e){if(null==e)return""+e;var t=O(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function _(e){var t=k(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function I(e){return e.constructor&&e.constructor.name?e.constructor.name:j}var C="function"==typeof Symbol&&Symbol.iterator,S="@@iterator",j="<<anonymous>>",T={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:f(r),arrayOf:p,element:function(){function t(t,n,r,o,i){var a=t[n];return e(a)?null:new d("Invalid "+o+" `"+i+"` of type `"+O(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return f(t)}(),elementType:function(){function e(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new d("Invalid "+r+" `"+i+"` of type `"+O(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")}return f(e)}(),instanceOf:h,node:function(){function e(e,t,n,r,o){return w(e[t])?null:new d("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return f(e)}(),objectOf:b,oneOf:y,oneOfType:g,shape:x,exact:v};return d.prototype=Error.prototype,T.checkPropTypes=c,T.resetWarningCache=c.resetWarningCache,T.PropTypes=T,T}},function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,l=r(e),s=1;s<arguments.length;s++){for(var u in n=Object(arguments[s]))i.call(n,u)&&(l[u]=n[u]);if(o){c=o(n);for(var d=0;d<c.length;d++)a.call(n,c[d])&&(l[c[d]]=n[c[d]])}}return l}},function(e,t,n){"use strict";function r(e,t,n,r,l){for(var s in e)if(c(e,s)){var u;try{if("function"!=typeof e[s]){var d=Error((r||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw d.name="Invariant Violation",d}u=e[s](t,s,r,n,null,i)}catch(m){u=m}if(!u||u instanceof Error||o((r||"React class")+": type specification of "+n+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in a)){a[u.message]=!0;var f=l?l():"";o("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}var o=function(){},i=n(5),a={},c=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},r.resetWarningCache=function(){a={}},e.exports=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=o(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function o(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function i(e){var t=e.children,n=e.device,o=e.onChange,i=r(e,["children","device","onChange"]),c=Object(a.a)(i,n,o);return"function"==typeof t?t(c):c?t:null}t.a=i;var a=n(0)}]))},8619:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ae}});var r=n(7294),o=n(9925),i=n(7415),a=n(3747),c=n(9633),l=n(6273),s=n(4582),u=n(3661),d=n(1245),f=n(1931),m=n(5281),p=o.ZP.h1.withConfig({displayName:"styled__Title",componentId:"sc-1dx684h-0"})(["line-height:0.95;letter-spacing:",";color:",";@media all and (max-width:","){font-size:64px;letter-spacing:-2.67px;line-height:68px;margin-bottom:20px;}"],(0,m.hO)(-5),(function(e){return e.theme.colors.white}),(function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"})),h=o.ZP.h3.withConfig({displayName:"styled__Subtitle",componentId:"sc-1dx684h-1"})(["font-size:",";line-height:",";letter-spacing:",";color:",";width:80%;margin:0 auto;@media all and (max-width:","){font-size:30px;letter-spacing:-1.5px;line-height:36px;width:100%;}"],(0,m.hO)(70),(0,m.hO)(72),(0,m.hO)(-2),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"})),y=(0,o.ZP)(c.JX).withConfig({displayName:"styled__ColWrapper",componentId:"sc-1dx684h-2"})(["text-align:center;z-index:2;"]),b=o.ZP.section.withConfig({displayName:"styled__Wrapper",componentId:"sc-1dx684h-3"})(["position:relative;padding:"," 0 "," 0;background-color:",';&:after{content:"";position:absolute;bottom:',";left:calc((100% - ",") / 2);width:",";height:",";background-color:",";opacity:0.2;border-radius:5px;}@media all and (max-width:","){padding:70px 0;}"],(0,m.hO)(160),(0,m.hO)(150),(function(e){return e.theme.colors.accent}),(0,m.hO)(16),(0,m.hO)(120),(0,m.hO)(120),(0,m.hO)(8),(function(e){return e.theme.colors.white}),(function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"})),g=o.ZP.div.withConfig({displayName:"styled__Decors",componentId:"sc-1dx684h-4"})(["@media all and (max-width:","){> div{max-width:100px;}}"],(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"})),x=[{style:{bottom:"45%",left:"-10px",zIndex:1},width:"72px",element:r.createElement(f.Z,{$color:"#00BEB5",$strokeWidth:"1"}),delay:0,speed:11},{style:{bottom:"45%",left:"36px",zIndex:1},width:"40px",element:r.createElement(f.Z,{$color:"#98EDE3",$type:2,$strokeWidth:"10",$rotate:30}),delay:.5,speed:9.6},{style:{top:"-70px",left:"10%",zIndex:1},width:"133px",element:r.createElement(u.Z,{$color:"#c3f1ff",$type:2}),delay:1,speed:6.6},{style:{top:"-80px",right:"5%",zIndex:1},width:"133px",element:r.createElement(u.Z,{$color:"#00BEB5"}),delay:1,speed:8},{style:{top:"15px",right:"8%",zIndex:1},width:"42px",element:r.createElement(f.Z,{$color:"#C3F1FF"}),delay:0,speed:9.9},{style:{bottom:"50px",left:"10%",zIndex:1},width:"67px",element:r.createElement(u.Z,{$color:"#C3F1FF",$type:2}),delay:.1,speed:6},{style:{bottom:"-80px",left:"10%",zIndex:1},width:"178px",element:r.createElement(f.Z,{$color:"#FFD203",$type:2}),delay:.2,speed:13},{style:{top:"35%",right:"12%",zIndex:1},width:"86px",element:r.createElement(f.Z,{$color:"#00beb5",$type:2,$strokeWidth:"5",$rotate:-65}),delay:0,speed:7.7}],v=function(){var e=(0,l.o)([{id:"GET_STARTED_TITLE"},{id:"GET_STARTED_SUBTITLE"}]),t=e[0],n=e[1];return r.createElement(d.Z,{as:b},r.createElement(g,null,x.map((function(e,t){return r.createElement(s.Z,{key:t,style:e.style,$width:e.width,$delay:e.delay,$speed:e.speed,$animate:!0},e.element)}))),r.createElement(c.X2,{center:"xs"},r.createElement(y,{xs:12,md:7},r.createElement(p,null,t),r.createElement(h,null,n))))},w=n(1763),E=n(5963),O=o.ZP.div.withConfig({displayName:"styled__ArrowWrapper",componentId:"sc-1wdczju-0"})(["@media all and (max-width:","){svg{width:22px;height:auto;margin-right:10px;}}"],(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"})),k=o.ZP.div.withConfig({displayName:"styled__OvalWrapper",componentId:"sc-1wdczju-1"})(["@media all and (max-width:","){svg{width:60px;height:auto;}}"],(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"})),_=o.ZP.div.withConfig({displayName:"styled__IconGroup",componentId:"sc-1wdczju-2"})(["position:relative;display:inline-block;margin-top:",";","{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);}@media all and (max-width:","){margin-top:0;}"],(0,m.hO)(16),O,(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"})),I=o.ZP.a.withConfig({displayName:"styled__Card",componentId:"sc-1wdczju-3"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;padding:"," 10% "," 10%;border-radius:",";font-size:",";line-height:",";letter-spacing:-0.5px;font-weight:",";text-align:center;","{transition:transform 0.3s ease;}@media all and (max-width:","){padding:46px 30px 30px;border-radius:20px;p{margin-bottom:20px;}}"," "," ",""],(0,m.hO)(120),(0,m.hO)(88),(0,m.hO)(32),(0,m.hO)(31),(0,m.hO)(36),(function(e){return e.theme.fontWeight.bold}),k,(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"}),(function(e){return"accent"===e.color&&(0,o.iv)(["color:",";background-color:",";","{svg path{fill:",";}}","{transform:translate3d(-6px,4px,0);&:hover{transform:scale(1.02) translate3d(-6px,4px,0) rotate(3deg);}}"],e.theme.colors.odd,e.theme.colors.accent,O,e.theme.colors.odd,k)}),(function(e){return"black"===e.color&&(0,o.iv)(["color:",";background-color:",";","{svg path{fill:",";}}","{transform:translate3d(-4px,4px,0);&:hover{transform:scale(1.02) translate3d(-4px,4px,0) rotate(-6deg);}}"],e.theme.colors.white,e.theme.colors.black,O,e.theme.colors.white,k)}),(function(e){return"secondary"===e.color&&(0,o.iv)(["color:",";background-color:",";","{transform:translate3d(-4px,4px,0);&:hover{transform:scale(1.026) translate3d(-4px,4px,0) rotate(-10deg);}}"],e.theme.colors.primary,e.theme.colors.secondary,k)})),C=n(5655),S=function(){return r.createElement(C.Z,{width:"40",height:"40",viewBox:"0 0 40 40"},r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("g",null,r.createElement("g",null,r.createElement("g",null,r.createElement("g",null,r.createElement("path",{fill:"#00665E",d:"M23.69 7L35.562 20.491 23.69 33.982 21.438 32 30.301 21.926 5 21.927 5 18.927 30.189 18.926 21.438 8.982z",transform:"translate(-395 -4464) translate(167 4140) translate(205 295) translate(23 29)"})))))))},j=function(e){switch(e.color){case"accent":return r.createElement(u.Z,{$type:4,$strokeColor:"#84f9ef"});case"black":return r.createElement(u.Z,{$type:4,$rotate:90,$strokeColor:"#ffffff"});case"secondary":return r.createElement(u.Z,{$type:4,$rotate:45,$strokeColor:"#00665e"})}},T=function(e){var t=e.text,n=e.link,o=e.color;return r.createElement(I,{href:n,target:"_blank",rel:"noopener noreferrer",color:o},r.createElement("p",null,t),r.createElement(_,null,r.createElement(O,null,r.createElement(S,null)),r.createElement(k,null,r.createElement(j,{color:o}))))},P=o.ZP.div.withConfig({displayName:"styled__IconWrapper",componentId:"sc-1fhbni6-0"})(["width:",";height:",";border:2px solid rgba(255,210,3,0.2);border-radius:",";display:flex;align-items:center;justify-content:center;margin-bottom:",";transition:background-color 0.3s ease;svg{width:",";margin-right:0;}svg path{fill:"," !important;}@media all and (max-width:","){margin-bottom:8px;}"],(0,m.hO)(96),(0,m.hO)(96),(0,m.hO)(32),(0,m.hO)(24),(0,m.hO)(64),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"})),$=o.ZP.a.withConfig({displayName:"styled__Card",componentId:"sc-1fhbni6-1"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;padding:25% 0;border-radius:",";font-weight:",";color:",";background-color:",";p{margin-bottom:0;}","{transition:border 0.3s ease;> div{box-shadow:none !important;}}&:hover{","{border-color:rgba(255,210,3,1);}}@media all and (max-width:","){border-radius:20px;padding:25px;}"],(0,m.hO)(32),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.primary}),P,P,(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"})),Z=function(e){var t=e.icon,n=e.link,o=e.type;return r.createElement($,{href:n,target:"_blank",rel:"noopener noreferrer"},r.createElement(P,null,t),r.createElement("p",null,o))},L=n(5973),A=o.ZP.h2.withConfig({displayName:"BlockStepLead__Title",componentId:"sc-6zytu2-0"})(["font-size:",";font-weight:",";line-height:",";letter-spacing:-2px;text-align:center;padding-top:",";margin-bottom:0;@media all and (max-width:","){font-size:30px;letter-spacing:-1.5px;line-height:36px;}"],(0,m.hO)(70),(function(e){return e.theme.fontWeight.medium}),(0,m.hO)(80),(0,m.hO)(40),(function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"})),R=(0,o.ZP)(c.X2).withConfig({displayName:"BlockStepLead__RowWrapper",componentId:"sc-6zytu2-1"})(["padding-bottom:",";"],(0,m.hO)(64)),N=function(e){var t=e.step,n=e.title;return r.createElement(R,{center:"xs"},r.createElement(c.JX,{xs:12,md:8,lg:6},r.createElement(L.Z,{step:t}),n&&r.createElement(A,null,n)))},W=n(5444),z=n(9892),D=n(3110),F=n(4573),M=function(e){var t=e.icon,n=e.text,o=e.link;return r.createElement(z.Z,{icon:t,text:n,layout:"center",backgroundColor:"black",href:o,fullWidth:!0})},B=[[r.createElement(M,{icon:r.createElement("img",{src:(0,W.dq)("/images/multidoge-icon.png"),alt:"multidoge"}),text:"Multidoge",link:"https://multidoge.org/"}),r.createElement(M,{icon:r.createElement("img",{src:(0,W.dq)("/images/dogecoin-icon.png"),alt:"dogecoin"}),text:"Dogecoin Core",link:"https://github.com/dogecoin/dogecoin/releases"})],[r.createElement(M,{icon:r.createElement(D.ve,null),text:"Trustwallet",link:"https://trustwallet.com/dogecoin-wallet/"}),r.createElement(M,{icon:r.createElement(D.Kc,null),text:"Exodus",link:"https://www.exodus.com/dogecoin-wallet"}),r.createElement(M,{icon:r.createElement(D.Ss,null),text:"Ledger",link:"https://www.ledger.com/"}),r.createElement(M,{icon:r.createElement(D.zU,null),text:"Robinhood",link:"https://robinhood.com/us/en/"})]],X=[[r.createElement(M,{icon:r.createElement(D.zU,null),text:"Robinhood",link:"https://robinhood.com/us/en/"}),r.createElement(M,{icon:r.createElement(D.UR,null),text:"Kraken",link:"https://www.kraken.com/"})],[r.createElement(M,{icon:r.createElement(D.ZL,null),text:"Binance",link:"https://www.binance.com/en"}),r.createElement(M,{icon:r.createElement(D.lx,null),text:"FTX",link:"https://ftx.com/"})]],U=[{type:"Reddit",link:F.B.reddit,icon:r.createElement(z.Z,{bordered:!0,icon:r.createElement(D.oI,null),as:"div"})},{type:"Twitter",link:F.B.twitter,icon:r.createElement(z.Z,{bordered:!0,icon:r.createElement(D.JD,null),as:"div"})},{type:"Github",link:F.B.discord,icon:r.createElement(z.Z,{bordered:!0,icon:r.createElement(D.VT,null),as:"div"})},{type:"Discord",link:F.B.facebook,icon:r.createElement(z.Z,{bordered:!0,icon:r.createElement(D.zJ,null),as:"div"})},{type:"Subreddit",link:F.B.subreddit,icon:r.createElement(z.Z,{bordered:!0,icon:r.createElement(D.i0,null),as:"div"})},{type:"Facebook",link:F.B.github,icon:r.createElement(z.Z,{bordered:!0,icon:r.createElement(D.Uv,null),as:"div"})}],G=n(4488),J=o.ZP.div.withConfig({displayName:"styled__SectionWrapper",componentId:"sc-2snn5h-0"})(["position:relative;"]),q=o.ZP.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-2snn5h-1"})(["position:relative;overflow:visible;background-color:",";& > *{z-index:2;position:relative;}&:not(:last-child){","{padding-bottom:",";}}@media all and (max-width:","){&:not(:last-child){padding-bottom:40px;}}"],(function(e){return e.theme.colors.background}),G.O,(0,m.hO)(160),(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"})),H=(0,o.ZP)(q).withConfig({displayName:"styled__RadiusWrapper",componentId:"sc-2snn5h-2"})(["padding-top:",";border-radius:"," "," 0 0;@media all and (max-width:","){padding-top:60px;border-radius:24px 24px 0 0;}"],(0,m.hO)(170),(0,m.hO)(63),(0,m.hO)(63),(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"})),V=o.ZP.div.withConfig({displayName:"styled__TabsTitles",componentId:"sc-2snn5h-3"})(["text-align:center;margin-bottom:",";h4{font-size:",";font-weight:",";color:",";margin-bottom:",";}@media all and (max-width:","){margin-bottom:30px;p{font-size:16px;}}"],(0,m.hO)(48),(0,m.hO)(31),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.colors.primary}),(0,m.hO)(-4),(function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"})),Q=o.ZP.div.withConfig({displayName:"styled__TabsButtons",componentId:"sc-2snn5h-4"})(["& > a:not(:last-child){margin-bottom:",";}svg path{fill:"," !important;}a:hover{svg,img{opacity:0.8;transition:all 0.3s ease;}}@media all and (max-width:","){a{}}"],(0,m.hO)(24),(function(e){return e.theme.colors.white}),(function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"})),Y=(0,o.ZP)(c.JX).withConfig({displayName:"styled__TabsCol",componentId:"sc-2snn5h-5"})(["&:first-child{padding-right:",";}&:last-child{padding-left:",";}@media all and (max-width:","){&:first-child{padding:0;margin-bottom:40px;}&:last-child{padding:0;}}"],(0,m.hO)(24),(0,m.hO)(24),(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"})),K=(0,o.ZP)(c.JX).withConfig({displayName:"styled__CardsContainerCol",componentId:"sc-2snn5h-6"})(["max-width:100%;"]),ee=(0,o.ZP)(c.X2).withConfig({displayName:"styled__CardsRow",componentId:"sc-2snn5h-7"})(["max-width:100%;a{height:100%;}","{margin-bottom:",";&:nth-child(odd){padding-right:",";}&:nth-child(even){padding-left:",";}@media all and (max-width:","){margin-bottom:16px;&:nth-child(odd){padding:0;}&:nth-child(even){padding:0;}}}"],c.JX,(0,m.hO)(40),(0,m.hO)(24),(0,m.hO)(24),(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"})),te=(0,o.ZP)(c.X2).withConfig({displayName:"styled__SocialCardsRow",componentId:"sc-2snn5h-8"})(["justify-content:space-between;","{max-width:calc(100% / 3 - ",");padding:0;margin-bottom:",";@media all and (max-width:","){max-width:initial;padding:0 6px;margin-bottom:12px;}}"],c.JX,(0,m.hO)(24),(0,m.hO)(40),(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"})),ne=(0,o.ZP)(s.Z).withConfig({displayName:"styled__DecorWrapper",componentId:"sc-2snn5h-9"})(["left:0px;top:4.5%;width:100%;height:calc(100% + 2.5rem + 4.5%);@media all and (max-width:","){width:calc(100% + ",");left:calc("," / -2);}"],(function(e){return e.theme.flexboxgrid.breakpoints.md+"em"}),(0,m.hO)(80),(0,m.hO)(80)),re=function(e){var t=e.groups;return r.createElement(c.X2,{center:"xs"},t.map((function(e,t){return r.createElement(Y,{xs:12,md:6,lg:4,key:t},e.title&&e.subtitle&&r.createElement(V,null,r.createElement("h4",null,e.title),r.createElement("p",null,e.subtitle)),r.createElement(Q,null,e.buttonGroup))})))},oe=function(){var e=(0,w.useMediaQuery)({maxWidth:767}),t=(0,l.o)([{id:"GUIDE_STEP_1_SECTION_TITLE"},{id:"WALLET_OFFICIAL_TITLE"},{id:"WALLET_OFFICIAL_SUBTITLE"},{id:"WALLET_ALT_TITLE"},{id:"WALLET_ALT_SUBTITLE"},{id:"GUIDE_STEP_2_SECTION_TITLE"},{id:"GUIDE_STEP_3_CARD_ONE"},{id:"GUIDE_STEP_3_CARD_TWO"},{id:"GUIDE_STEP_3_CARD_THREE"},{id:"GUIDE_STEP_4_SECTION_TITLE"}]),n=t[0],o=t[1],i=t[2],a=t[3],s=t[4],u=t[5],f=t[6],m=t[7],p=t[8],h=t[9];return r.createElement(J,null,r.createElement(d.Z,{as:H},!e&&r.createElement(ne,null,r.createElement(E.Z,{$type:2})),r.createElement(N,{step:1,title:n}),r.createElement(re,{groups:[{title:o,subtitle:i,buttonGroup:B[0]},{title:a,subtitle:s,buttonGroup:B[1]}]})),r.createElement(d.Z,{as:q},!e&&r.createElement(ne,null,r.createElement(E.Z,{$type:3})),r.createElement(N,{step:2,title:u}),r.createElement(re,{groups:[{buttonGroup:X[0]},{buttonGroup:X[1]}]})),r.createElement(d.Z,{as:q},!e&&r.createElement(ne,null,r.createElement(E.Z,{$type:4})),r.createElement(N,{step:3}),r.createElement(c.X2,{center:"xs"},r.createElement(K,{md:12,lg:8},r.createElement(ee,null,r.createElement(c.JX,{xs:12,md:6},r.createElement(T,{color:"accent",text:f,link:"https://bitpay.com/blog/spend-dogecoin/"})),r.createElement(c.JX,{xs:12,md:6},r.createElement(T,{color:"black",text:m,link:" https://twitter.com/SnoopDogg/status/1375587797474504707"})),r.createElement(c.JX,{xs:12,md:6},r.createElement(T,{color:"secondary",text:p,link:"https://www.spendyourdogecoins.cf/"})))))),r.createElement(d.Z,{as:q},r.createElement(N,{step:4,title:h}),r.createElement(c.X2,{center:"xs"},r.createElement(K,{md:12,lg:8},r.createElement(te,null,U.map((function(e,t){return r.createElement(c.JX,{xs:6,md:4,key:t},r.createElement(Z,{type:e.type,link:e.link,icon:e.icon}))})))))))},ie=o.ZP.div.withConfig({displayName:"getting-started__Wrapper",componentId:"sc-18vv4y8-0"})(["background-color:",";"],(function(e){return e.theme.colors.accent})),ae=function(){return r.createElement(i.Z,{isSimpleHeader:!0},r.createElement(a.Z,null,r.createElement(ie,null,r.createElement(v,null),r.createElement(oe,null))))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-tsx-e4d2c224566bec12b1cc.js.map