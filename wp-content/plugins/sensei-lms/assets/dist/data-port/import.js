!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=151)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t,n){var r=n(10);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.data},,,function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===s)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){var r=n(25),o=n(26),s=n(18),i=n(27);e.exports=function(e,t){return r(e)||o(e,t)||s(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.lodash},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(35),o=n(36),s=n(18),i=n(37);e.exports=function(e){return r(e)||o(e)||s(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t,n){var r=n(33);e.exports=function(e,t){if(null==e)return{};var n,o,s=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"h",(function(){return s})),n.d(t,"t",(function(){return i})),n.d(t,"n",(function(){return a})),n.d(t,"q",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"k",(function(){return l})),n.d(t,"m",(function(){return p})),n.d(t,"r",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"o",(function(){return m})),n.d(t,"s",(function(){return b})),n.d(t,"g",(function(){return g})),n.d(t,"l",(function(){return v})),n.d(t,"p",(function(){return O})),n.d(t,"c",(function(){return j})),n.d(t,"j",(function(){return y})),n.d(t,"d",(function(){return h})),n.d(t,"i",(function(){return _}));var r="/sensei-internal/v1/import/",o="active",s="FETCH_FROM_API",i="WAIT",a="START_LOAD_CURRENT_JOB_STATE",c="SUCCESS_LOAD_CURRENT_JOB_STATE",u="ERROR_LOAD_CURRENT_JOB_STATE",l="SET_JOB_STATE",p="START_IMPORT",d="SUCCESS_START_IMPORT",f="ERROR_START_IMPORT",m="START_UPLOAD_IMPORT_DATA_FILE",b="SUCCESS_UPLOAD_IMPORT_DATA_FILE",g="ERROR_UPLOAD_IMPORT_DATA_FILE",v="START_DELETE_IMPORT_DATA_FILE",O="SUCCESS_DELETE_IMPORT_DATA_FILE",j="ERROR_DELETE_IMPORT_DATA_FILE",y="SET_IMPORT_LOG",h="ERROR_FETCH_IMPORT_LOG",_="RESET_STATE"},,,function(e,t){e.exports=window.wp.compose},function(e,t,n){var r=n(19);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},,,,function(e,t){e.exports=window.wp.apiFetch},,function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],_n=!0,r=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(_n=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);_n=!0);}catch(a){r=!0,o=a}finally{try{_n||null==i.return||i.return()}finally{if(r)throw o}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t){e.exports=window.wp.primitives},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(13),o=n.n(r),s=n(0),i=Object(s.createContext)(2);function a(e){return Object(s.createElement)(i.Consumer,null,(function(t){var n="h"+Math.min(t,6);return Object(s.createElement)(n,e)}))}function c(e){var t=e.component,n=e.children,r=o()(e,["component","children"]),a=t||"div";return Object(s.createElement)(i.Consumer,null,(function(e){return Object(s.createElement)(i.Provider,{value:e+1},!1===t?n:Object(s.createElement)(a,r,n))}))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n(4),o=function(e,t,n,r){return regeneratorRuntime.mark((function o(){var s,i=arguments;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!e){o.next=3;break}return o.next=3,{type:e};case 3:return o.prev=3,o.delegateYield(t.apply(void 0,i),"t0",5);case 5:return s=o.t0,o.next=8,{type:n,data:s};case 8:o.next=14;break;case 10:return o.prev=10,o.t1=o.catch(3),o.next=14,{type:r,error:o.t1};case 14:case"end":return o.stop()}}),o,null,[[3,10]])}))},s=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0,o=e[r.type]||e.DEFAULT;return o(r,n)}},i=function(e,t){if(r.createReduxStore){var n=Object(r.createReduxStore)(e,t);return Object(r.register)(n),n}return Object(r.registerStore)(e,t),e}},function(e,t){e.exports=window.wp.url},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t,n){var r=n(19);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(11),o=n.n(r),s=n(14),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[].concat(o()(e?[e]:[]),o()(t||[])).join("/");return s.a+n}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(){Object(r.useLayoutEffect)((function(){return document.body.classList.add("sensei-color"),function(){return document.body.classList.remove("sensei-color")}}))}},function(e,t,n){"use strict";var r,o=n(32),s=n(23);n.n(s).a.use((r={},function(e,t){return"string"!=typeof e.path||"GET"!==e.method&&e.method||(r[e.path]?e.path=Object(o.addQueryArgs)(e.path,{__skip_preload:1}):r[e.path]=!0),t(e)}))},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n(7),s=n.n(o),i=n(2),a=function(e){var t=e.message,n=e.isError,o=s()({"sensei-data-port-notice__message":!0,error:n});return Object(r.createElement)("div",{className:"sensei-data-port-notice"},n&&Object(r.createElement)(i.Dashicon,{className:"sensei-data-port-notice__icon error",icon:"warning"}),Object(r.createElement)("span",{className:o},t))}},,,function(e,t){e.exports=window.React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=a(n(51)),s=a(n(65)),i=a(n(68));function a(e){return e&&e.__esModule?e:{default:e}}var c=void 0;function u(e,t){var n,i,a,l,p,d,f,m,b=[],g={};for(d=0;d<e.length;d++)if("string"!==(p=e[d]).type){if(!t.hasOwnProperty(p.value)||void 0===t[p.value])throw new Error("Invalid interpolation, missing component node: `"+p.value+"`");if("object"!==r(t[p.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+p.value+"`","\n> "+c);if("componentClose"===p.type)throw new Error("Missing opening component token: `"+p.value+"`");if("componentOpen"===p.type){n=t[p.value],a=d;break}b.push(t[p.value])}else b.push(p.value);return n&&(l=function(e,t){var n,r,o=t[e],s=0;for(r=e+1;r<t.length;r++)if((n=t[r]).value===o.value){if("componentOpen"===n.type){s++;continue}if("componentClose"===n.type){if(0===s)return r;s--}}throw new Error("Missing closing component token `"+o.value+"`")}(a,e),f=u(e.slice(a+1,l),t),i=o.default.cloneElement(n,{},f),b.push(i),l<e.length-1&&(m=u(e.slice(l+1),t),b=b.concat(m))),1===b.length?b[0]:(b.forEach((function(e,t){e&&(g["interpolation-child-"+t]=e)})),(0,s.default)(g))}t.default=function(e){var t=e.mixedString,n=e.components,o=e.throwErrors;if(c=t,!n)return t;if("object"!==(void 0===n?"undefined":r(n))){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var s=(0,i.default)(t);try{return u(s,n)}catch(a){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+a.message+"`");return t}}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(3),o=n.n(r),s=n(0),i=n(52),a=n.n(i),c={em:Object(s.createElement)("em",null),strong:Object(s.createElement)("strong",null),code:Object(s.createElement)("code",null),small:Object(s.createElement)("small",null),sub:Object(s.createElement)("sub",null),sup:Object(s.createElement)("sup",null),br:Object(s.createElement)("br",null),p:Object(s.createElement)("p",null),del:Object(s.createElement)("del",null)},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a()({mixedString:e,components:o()(o()({},c),t)})}},,,function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},,function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(1),o={course:Object(r.__)("Courses","sensei-lms"),lesson:Object(r.__)("Lessons","sensei-lms"),question:Object(r.__)("Questions","sensei-lms")},s={error:Object(r.__)("Error","sensei-lms"),warning:Object(r.__)("Warning","sensei-lms")}},,,,,function(e,t,n){"use strict";var r=n(51),o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,s=n(58),i=n(66),a=n(67),c="function"==typeof Symbol&&Symbol.iterator;function u(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var n,r}function l(e,t,n,r){var s,a=typeof e;if("undefined"!==a&&"boolean"!==a||(e=null),null===e||"string"===a||"number"===a||"object"===a&&e.$$typeof===o)return n(r,e,""===t?"."+u(e,0):t),1;var p=0,d=""===t?".":t+":";if(Array.isArray(e))for(var f=0;f<e.length;f++)p+=l(s=e[f],d+u(s,f),n,r);else{var m=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(m){0;for(var b,g=m.call(e),v=0;!(b=g.next()).done;)p+=l(s=b.value,d+u(s,v++),n,r)}else if("object"===a){0;var O=""+e;i(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===O?"object with keys {"+Object.keys(e).join(", ")+"}":O,"")}}return p}var p=/\/+/g;function d(e){return(""+e).replace(p,"$&/")}var f,m,b=g,g=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},v=function(e){var t=this;i(e instanceof t,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)};function O(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function j(e,t,n){var o,i,a=e.result,c=e.keyPrefix,u=e.func,l=e.context,p=u.call(l,t,e.count++);Array.isArray(p)?y(p,a,n,s.thatReturnsArgument):null!=p&&(r.isValidElement(p)&&(o=p,i=c+(!p.key||t&&t.key===p.key?"":d(p.key)+"/")+n,p=r.cloneElement(o,{key:i},void 0!==o.props?o.props.children:void 0)),a.push(p))}function y(e,t,n,r,o){var s="";null!=n&&(s=d(n)+"/");var i=O.getPooled(t,s,r,o);!function(e,t,n){null==e||l(e,"",t,n)}(e,j,i),O.release(i)}O.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},f=function(e,t,n,r){var o=this;if(o.instancePool.length){var s=o.instancePool.pop();return o.call(s,e,t,n,r),s}return new o(e,t,n,r)},(m=O).instancePool=[],m.getPooled=f||b,m.poolSize||(m.poolSize=10),m.release=v;e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return a(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(r.isValidElement(e))return a(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;i(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)y(e[n],t,n,s.thatReturnsArgument);return t}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,s,i,a){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,s,i,a],l=0;(c=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){"use strict";var r=n(58);e.exports=r},function(e,t,n){"use strict";function r(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"fetchFromAPI",(function(){return N})),n.d(r,"wait",(function(){return L})),n.d(r,"loadCurrentJobState",(function(){return C})),n.d(r,"updateJobState",(function(){return U})),n.d(r,"pollJobProgress",(function(){return B})),n.d(r,"setJobState",(function(){return J})),n.d(r,"submitStartImport",(function(){return q})),n.d(r,"startImport",(function(){return V})),n.d(r,"successStartImport",(function(){return $})),n.d(r,"errorStartImport",(function(){return G})),n.d(r,"uploadFileForLevel",(function(){return W})),n.d(r,"throwEarlyUploadError",(function(){return z})),n.d(r,"startFileUploadAction",(function(){return Y})),n.d(r,"successFileUpload",(function(){return Q})),n.d(r,"errorFileUpload",(function(){return H})),n.d(r,"deleteLevelFile",(function(){return K})),n.d(r,"startDeleteLevelFileAction",(function(){return X})),n.d(r,"successDeleteLevelFileAction",(function(){return Z})),n.d(r,"errorDeleteLevelFileAction",(function(){return ee})),n.d(r,"resetState",(function(){return te})),n.d(r,"restartImporter",(function(){return ne}));var o={};n.r(o),n.d(o,"isFetching",(function(){return _e})),n.d(o,"getJobId",(function(){return Ee})),n.d(o,"getFetchError",(function(){return xe})),n.d(o,"getStepData",(function(){return Se})),n.d(o,"getNavigationSteps",(function(){return we})),n.d(o,"isCompleteStep",(function(){return Re})),n.d(o,"isReadyToStart",(function(){return ke})),n.d(o,"getUploadedLevelKeys",(function(){return Te})),n.d(o,"getSuccessResults",(function(){return Fe})),n.d(o,"getLogsBySeverity",(function(){return Pe})),n.d(o,"getLogsFetchError",(function(){return Ae}));var s={};n.r(s),n.d(s,"getLogsBySeverity",(function(){return Ne}));var i=n(0),a=n(1),c=n(4),u=n(43),l=n(7),p=n.n(l),d=function(e){var t=e.steps;return Object(i.createElement)("ol",{className:"sensei-data-port-steps"},t.map((function(e){var t=p()({active:e.isNext,done:e.isComplete});return Object(i.createElement)("li",{key:e.key,className:t},e.label)})))},f=n(10),m=n.n(f),b=n(3),g=n.n(b),v=n(9),O=n(14),j={jobId:null,isFetching:!0,fetchError:!1,completedSteps:[],upload:{isSubmitting:!1,errorMsg:null,courses:{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null},lessons:{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null},questions:{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null}},progress:{status:"",percentage:0},done:{results:null,logs:null}},y=function(e,t,n){return g()(g()({},e),{},{upload:g()(g()({},e.upload),{},m()({},t,n))})},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.n:return g()(g()({},e),{},{isFetching:!0,fetchError:!1});case O.q:return g()(g()({},Object(v.merge)({},e,t.data)),{},{isFetching:!1});case O.k:return g()({},Object(v.merge)({},e,t.data));case O.e:return g()(g()({},e),{},{isFetching:!1,fetchError:t.error});case O.m:return g()(g()({},e),{},{upload:g()(g()({},e.upload),{},{errorMsg:null,isSubmitting:!0})});case O.f:return g()(g()({},e),{},{upload:g()(g()({},e.upload),{},{errorMsg:t.error.message,isSubmitting:!1})});case O.r:return g()(g()({},e),{},{completedSteps:t.data.completedSteps,upload:g()(g()({},e.upload),{},{isSubmitting:!1}),progress:g()(g()({},e.progress),t.data.progress)});case O.o:return y(e,t.level,g()(g()({},e.upload[t.level]),{},{isUploaded:!1,isUploading:!0,isDeleting:!1,hasError:!1,errorMsg:null,filename:null}));case O.s:return y(g()(g()({},e),{},{jobId:t.data.jobId}),t.level,g()(g()(g()({},e.upload[t.level]),t.data.upload[t.level]),{},{isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null}));case O.g:return y(e,t.level,g()(g()({},e.upload[t.level]),{},{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!0,errorMsg:t.error.message,filename:null}));case O.l:return y(e,t.level,g()(g()({},e.upload[t.level]),{},{isDeleting:!0}));case O.p:return y(e,t.level,g()(g()({},t.data.upload[t.level]),{},{isUploaded:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null}));case O.c:return y(e,t.level,g()(g()({},e.upload[t.level]),{},{isUploaded:!1,isDeleting:!1,hasError:!0,errorMsg:t.error.message}));case O.j:return g()(g()({},e),{},{done:g()(g()({},e.done),{},{logs:t.data})});case O.d:return g()(g()({},e),{},{done:g()(g()({},e.done),{},{logs:{fetchError:t.error}})});case O.i:return g()({},j);default:return e}},_=n(31),E=n(13),x=n.n(E),S=n(8),w=n.n(S),R=function(e){var t={};return Object.entries(e).forEach((function(e){var n=w()(e,2),r=n[0],o=n[1];o.name&&(t[r]={filename:o.name,isUploaded:!0})})),t},k=function(e){return"pending"===e.status?["upload"]:"completed"===e.status?["upload","progress"]:[]},T=function(e){var t=e.id,n=e.files,r=e.status,o=e.results,s=x()(e,["id","files","status","results"]);return g()(g()({},s),{},{jobId:t,progress:r,upload:R(n||[]),completedSteps:k(r||{}),done:{results:o}})},F=n(41),P=regeneratorRuntime.mark(U),A=regeneratorRuntime.mark(q),I=regeneratorRuntime.mark(W),D=regeneratorRuntime.mark(K),M=regeneratorRuntime.mark(ne),N=function(e){return{type:O.h,request:e}},L=function(e){return{type:O.t,timeout:e}},C=Object(_.a)(O.n,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({path:Object(F.a)(O.b)});case 2:return t=e.sent,e.abrupt("return",T(t));case 4:case"end":return e.stop()}}),e)})),O.q,O.e);function U(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N({path:Object(F.a)(e)});case 3:return t=n.sent,n.next=6,J(T(t));case 6:n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),P,null,[[0,8]])}var B=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,N({path:Object(F.a)(t,["process"]),method:"POST"});case 3:return n=r.sent,r.next=6,J(T(n));case 6:if("completed"===n.status.status){r.next=9;break}return r.delegateYield(e(t),"t0",9);case 9:r.next=16;break;case 11:return r.prev=11,r.t1=r.catch(0),r.next=15,L(2e3);case 15:return r.delegateYield(e(t),"t2",16);case 16:case"end":return r.stop()}}),e,null,[[0,11]])})),J=function(e){return{type:O.k,data:e}};function q(e){var t,n,r,o,s=arguments;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:{},n=t.onSuccess,r=t.onError,i.next=3,V();case 3:if(i.prev=3,e){i.next=8;break}return i.next=7,G({message:null});case 7:return i.abrupt("return");case 8:return i.next=10,N({path:Object(F.a)(e,["start"]),method:"POST"});case 10:return o=i.sent,i.next=13,$(T(o));case 13:n&&n(),i.next=21;break;case 16:return i.prev=16,i.t0=i.catch(3),i.next=20,G(i.t0);case 20:r&&r(i.t0);case 21:case"end":return i.stop()}}),A,null,[[3,16]])}var V=function(){return{type:O.m}},$=function(e){return{type:O.r,data:e}},G=function(e){return{type:O.f,error:e}};function W(e,t,n){var r,o,s,i,a=arguments;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r=a.length>3&&void 0!==a[3]?a[3]:{},o=r.onSuccess,s=r.onError,c.next=3,Y(t,n);case 3:return c.prev=3,e||(e=O.b),c.next=7,N({path:Object(F.a)(e,["file",t]),method:"POST",body:n});case 7:return i=c.sent,c.next=10,Q(t,T(i));case 10:o&&o(),c.next=18;break;case 13:return c.prev=13,c.t0=c.catch(3),c.next=17,H(t,c.t0);case 17:s&&s(c.t0);case 18:case"end":return c.stop()}}),I,null,[[3,13]])}var z=function(e,t){return H(e,{code:"",message:t})},Y=function(e,t){return{type:O.o,level:e,uploadData:t}},Q=function(e,t){return{type:O.s,level:e,data:t}},H=function(e,t){return{type:O.g,level:e,error:t}};function K(e,t){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,X(t);case 2:if(r.prev=2,e){r.next=7;break}return r.next=6,ee({message:null});case 6:return r.abrupt("return");case 7:return r.next=9,N({path:Object(F.a)(e,["file",t]),method:"DELETE"});case 9:return n=r.sent,r.next=12,Z(t,T(n));case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(2),r.next=18,ee(t,r.t0);case 18:case"end":return r.stop()}}),D,null,[[2,14]])}var X=function(e){return{type:O.l,level:e}},Z=function(e,t){return{type:O.p,level:e,data:t}},ee=function(e,t){return{type:O.c,level:e,error:t}},te=function(){return{type:O.i}};function ne(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:return e.next=4,C();case 4:case"end":return e.stop()}}),M)}var re,oe=n(17),se=n(2),ie=n(29),ae=Object(i.createElement)(ie.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(i.createElement)(ie.Path,{d:"M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z"})),ce=n(48),ue=[{key:"courses",description:Object(a.__)("Courses CSV File","sensei-lms")},{key:"lessons",description:Object(a.__)("Lessons CSV File","sensei-lms")},{key:"questions",description:Object(a.__)("Questions CSV File","sensei-lms")}],le=Object(oe.compose)(Object(c.withSelect)((function(e){var t=e("sensei/import");return{jobId:t.getJobId(),state:t.getStepData("upload")}})),Object(c.withDispatch)((function(e){var t=e("sensei/import");return{deleteLevelFile:t.deleteLevelFile,uploadFileForLevel:t.uploadFileForLevel,throwEarlyUploadError:t.throwEarlyUploadError}})))((function(e){var t=e.jobId,n=e.state,r=e.uploadFileForLevel,o=e.throwEarlyUploadError,s=e.deleteLevelFile;return Object(i.createElement)("ol",null,ue.map((function(e){var c,u=n[e.key],l=function(e){return e.hasError?Object(i.createElement)(ce.a,{message:e.errorMsg,isError:!0}):e.isUploaded?Object(i.createElement)(ce.a,{message:e.filename}):void 0}(u);return u.isDeleting?c=Object(i.createElement)("div",{className:"sensei-upload-file-line__delete-button-wrapper"},Object(i.createElement)(se.Spinner,null)):u.isUploaded&&(c=Object(i.createElement)("div",{className:"sensei-upload-file-line__delete-button-wrapper"},Object(i.createElement)(se.Button,{icon:ae,label:Object(a.__)("Delete File","sensei-lms"),onClick:function(){return s(t,e.key)},disabled:u.isDeleting}))),Object(i.createElement)("li",{key:e.key,className:"sensei-upload-file-line sensei-data-port-step__line"},Object(i.createElement)("label",{className:"sensei-upload-file-line__description",htmlFor:"sensei-upload-file-line-".concat(e.key)},e.description),Object(i.createElement)(se.FormFileUpload,{key:u.isUploading,isSecondary:!0,id:"sensei-upload-file-line-".concat(e.key),accept:[".csv",".txt"],disabled:u.isUploading||u.isDeleting,onChange:function(n){return function(e,t,n,r,o){if(!(t.length<1)){var s=t[0];if(["csv","txt"].includes(s.name.split(".").pop())){var i=new FormData;i.append("file",s),r(e,n,i)}else o(n,Object(a.__)("Only CSV files are supported.","sensei-lms"))}}(t,n.target.files,e.key,r,o)}},u.isUploading?Object(a.__)("Uploading…","sensei-lms"):Object(a.__)("Upload","sensei-lms")),(l||c)&&Object(i.createElement)("div",{className:"sensei-upload-file-line__info"},l,c))})))})),pe=n(55),de=n(30),fe=Object(oe.compose)(Object(c.withSelect)((function(e){var t=e("sensei/import");return{state:t.getStepData("upload"),isReady:t.isReadyToStart()}})),Object(c.withDispatch)((function(e,t,n){var r=n.select,o=e("sensei/import").submitStartImport;return{submitStartImport:function(){o(r("sensei/import").getJobId());var e=r("sensei/import").getUploadedLevelKeys().join(",");window.sensei_log_event("import_continue_click",{type:e})}}})))((function(e){var t=e.state,n=e.isReady,r=e.submitStartImport,o=t.isSubmitting,s=t.errorMsg;return Object(i.createElement)("section",{className:"sensei-data-port-step sensei-upload-page"},Object(i.createElement)("header",{className:"sensei-data-port-step__header"},Object(i.createElement)(de.a,null,Object(a.__)("Import content from a CSV file","sensei-lms")),Object(i.createElement)("p",null,Object(pe.a)(Object(a.__)("This tool enables you to import courses, lessons, and questions from a CSV file. Please review the {{link}}documentation{{/link}} to learn more about the expected file structure.","sensei-lms"),{link:Object(i.createElement)("a",{className:"link__color-secondary",href:"https://senseilms.com/lesson/import/",target:"_blank",type:"external",rel:"noopener noreferrer"})}))),Object(i.createElement)(de.b,{className:"sensei-data-port-step__body",component:"section"},Object(i.createElement)("p",null,Object(a.__)("Choose one or more CSV files to upload from your computer.","sensei-lms")),Object(i.createElement)(le,null),Object(i.createElement)("div",{className:"sensei-data-port-step__footer"},null!==s&&Object(i.createElement)(ce.a,{message:s,isError:!0}),Object(i.createElement)(se.Button,{isPrimary:!0,className:"continue-button",disabled:!n||o,onClick:r},Object(a.__)("Continue","sensei-lms")))))})),me=function(){var e=Object(c.useDispatch)("sensei/import").pollJobProgress,t=Object(c.useSelect)((function(e){return e("sensei/import").getJobId()}));Object(i.useEffect)((function(){e(t)}),[e,t])},be=Object(oe.compose)(Object(c.withSelect)((function(e){return{state:e("sensei/import").getStepData("progress")}})))((function(e){var t=e.state.percentage;return me(),Object(i.createElement)("section",{className:"sensei-data-port-step sensei-import-progress-page"},Object(i.createElement)("header",{className:"sensei-data-port-step__header"},Object(i.createElement)(de.a,null,Object(a.__)("Importing","sensei-lms")),Object(i.createElement)("p",null,Object(a.__)("Your content is now being imported…","sensei-lms"))),Object(i.createElement)(de.b,{className:"sensei-data-port-step__body",component:"section"},Object(i.createElement)("p",null,Object(i.createElement)("progress",{className:"sensei-data-port__progressbar sensei-import-progress-page__progress",max:"100",value:t}))))})),ge=n(60),ve=function(e){var t=e.items,n=e.type;return Object(i.createElement)("div",{className:"sensei-import-done__log-data"},Object(i.createElement)("table",{className:"sensei-data-table"},Object(i.createElement)("thead",null,Object(i.createElement)("tr",null,"error"===n&&Object(i.createElement)("th",null,Object(a.__)("File","sensei-lms")),Object(i.createElement)("th",null,Object(a.__)("Title","sensei-lms")),Object(i.createElement)("th",null,Object(a.__)("Line #","sensei-lms")),Object(i.createElement)("th",null,ge.a[n]))),Object(i.createElement)("tbody",null,t.map((function(e){return Object(i.createElement)("tr",{key:Object(v.kebabCase)(Object.entries(e).join(""))},"error"===n&&Object(i.createElement)("td",null,e.filename),Object(i.createElement)("td",null,(t=e.post.title,(r=e.post.edit_link)?Object(i.createElement)("a",{href:r,target:"_blank",rel:"noreferrer"},t):t)),Object(i.createElement)("td",null,e.line),Object(i.createElement)("td",null,e.message));var t,r})))))},Oe=function(e){var t=e.successResults;return Object(i.createElement)("ul",{className:"sensei-import-bullet-list"},t.map((function(e){var t=e.key,n=e.count;return Object(i.createElement)("li",{key:t},n," ",function(e){var t=e.key,n=e.count;return{course:Object(a._n)("course","courses",n,"sensei-lms"),lesson:Object(a._n)("lesson","lessons",n,"sensei-lms"),question:Object(a._n)("question","questions",n,"sensei-lms")}[t]}({key:t,count:n}))})))},je=Object(oe.compose)(Object(c.withSelect)((function(e){var t=e("sensei/import"),n=t.getJobId();return{successResults:t.getSuccessResults(),logs:t.getLogsBySeverity(n),isFetching:t.isResolving("getLogsBySeverity",[n]),fetchError:t.getLogsFetchError()}})),Object(c.withDispatch)((function(e){var t=e("sensei/import"),n=t.restartImporter,r=t.invalidateResolutionForStoreSelector;return{restartImporter:n,retry:function(){return r("getLogsBySeverity")}}})))((function(e){var t=e.restartImporter,n=e.successResults,r=void 0===n?[]:n,o=e.logs,s=void 0===o?{}:o,c=e.isFetching,u=void 0!==c&&c,l=e.fetchError,p=void 0!==l&&l,d=e.retry,f=Object(i.createElement)(i.Fragment,null,s.error&&s.error.length>0&&Object(i.createElement)("section",{className:"sensei-data-port-step"},Object(i.createElement)(de.b,{className:"sensei-data-port-step__body"},Object(i.createElement)("h2",null,Object(a.__)("Failed","sensei-lms")),Object(i.createElement)("p",{className:"sensei-import-done__section-description"},Object(a.__)("The following content was not imported. Please make the necessary corrections to the import file and try again.","sensei-lms")),Object(i.createElement)(ve,{items:s.error,type:"error"}))),s.notice&&s.notice.length>0&&Object(i.createElement)("section",{className:"sensei-data-port-step"},Object(i.createElement)(de.b,{className:"sensei-data-port-step__body"},Object(i.createElement)("h2",null,Object(a.__)("Partial","sensei-lms")),Object(i.createElement)("p",{className:"sensei-import-done__section-description"},Object(a.__)("The following content was partially imported. The import process encountered some issues that you can resolve manually by clicking the link and making the necessary adjustments.","sensei-lms")),Object(i.createElement)(ve,{items:s.notice,type:"warning"}))));return u?f=Object(i.createElement)("div",{className:"sensei-import-done__log-fetching"},Object(i.createElement)(se.Spinner,null)," ",Object(a.__)("Fetching log details…","sensei-lms")):p&&(f=Object(i.createElement)(se.Notice,{status:"error",isDismissible:!1},Object(a.__)("Failed to load import log.","sensei-lms")," ",p.message,Object(i.createElement)(se.Button,{onClick:d,isLink:!0,isSmall:!0},Object(a.__)("Retry","sensei-lms")))),Object(i.createElement)(i.Fragment,null,Object(i.createElement)("section",{className:"sensei-data-port-step"},Object(i.createElement)(de.b,{className:"sensei-data-port-step__body"},Object(i.createElement)("h2",null,Object(a.__)("Completed","sensei-lms")),r.length>0?Object(i.createElement)(i.Fragment,null,Object(i.createElement)("p",{className:"sensei-import-done__section-description"},Object(a.__)("The following content was imported:","sensei-lms")),Object(i.createElement)(Oe,{successResults:r})):Object(i.createElement)("p",{className:"sensei-import-done__section-description"},Object(a.__)("No content was imported.","sensei-lms")),Object(i.createElement)("div",{className:"sensei-data-port-step__footer"},Object(i.createElement)(se.Button,{isPrimary:!0,onClick:t},Object(a.__)("Import More Content","sensei-lms"))))),f)})),ye=[{key:"upload",container:Object(i.createElement)(fe,null),label:Object(a.__)("Upload CSV Files","sensei-lms")},{key:"progress",container:Object(i.createElement)(be,null),label:Object(a.__)("Import","sensei-lms")},{key:"complete",container:Object(i.createElement)(je,null),label:Object(a.__)("Done","sensei-lms")}],he=["course","lesson","question"],_e=function(e){return e.isFetching},Ee=function(e){return e.jobId},xe=function(e){return e.fetchError},Se=function(e,t){return e[t]},we=function(e){var t=e.completedSteps,n=ye.map((function(e){return g()(g()({},e),{},{isComplete:t.includes(e.key),isNext:!1})}));return(n.find((function(e){return!e.isComplete}))||n[0]).isNext=!0,n},Re=function(e,t){return e.completedSteps.includes(t)},ke=function(e){var t=ue.map((function(t){var n=t.key;return e.upload[n]})),n=t.some((function(e){return e.isUploaded})),r=t.some((function(e){return e.isUploading||e.isDeleting}));return n&&!r},Te=function(e){var t=e.upload;return ue.filter((function(e){var n=e.key;return t[n].isUploaded})).map((function(e){return e.key}))},Fe=function(e){var t=e.done;return he.map((function(e){return{key:e,count:Object(v.get)(t,["results",e,"success"],0)+Object(v.get)(t,["results",e,"warning"],0)}})).filter((function(e){return e.count>0}))},Pe=function(e){var t=e.done,n=e.upload,r=Object(v.get)(t,"logs.items",[]).map((function(e){return g()(g()({},e),{},{filename:Object(v.get)(n,e.type+"s.filename","")})}));return Object(v.groupBy)(r,"severity")},Ae=function(e){var t=e.done;return Object(v.get)(t,"logs.fetchError",!1)},Ie=n(23),De=n.n(Ie),Me=(re={},m()(re,O.h,(function(e){var t=e.request;return De()(t)})),m()(re,O.t,(function(e){var t=e.timeout;return new Promise((function(e){return setTimeout(e,t)}))})),re),Ne=Object(_.a)(null,regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,N({path:Object(F.a)(t,["logs"])});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})),O.j,O.d),Le=function(){Object(c.registerStore)("sensei/import",{reducer:h,actions:r,selectors:o,controls:Me,resolvers:s})};n(44);Le();Object(i.render)(Object(i.createElement)((function(){var e=Object(c.useSelect)((function(e){var t=e("sensei/import");return{error:t.getFetchError(),navigationSteps:t.getNavigationSteps()}}),[]),t=e.error,n=e.navigationSteps,r=Object(c.useDispatch)("sensei/import").loadCurrentJobState;if(Object(i.useLayoutEffect)((function(){r()}),[r]),Object(u.a)(),t)return Object(i.createElement)(se.Notice,{status:"error",isDismissible:!1},Object(a.__)("An error has occurred while fetching the data. Please try again later!","sensei-lms"),Object(i.createElement)("br",null),Object(a.__)("Error details:","sensei-lms")," ",t.message);var o=n.find((function(e){return e.isNext}));return Object(i.createElement)("div",{className:"sensei-page-import"},Object(i.createElement)(d,{steps:n}),o.container)}),null),document.getElementById("sensei-import-page"))}]);