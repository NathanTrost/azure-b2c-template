_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var d=f[s];if(o.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?a=!1:n.add(d);else{var l=o.props[d],p=r[d]||new Set;"name"===d&&i||!p.has(l)?(p.add(l),r[d]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("q1tI"),a=n("g4pe"),i=n.n(a),c=n("vRNQ"),s=n.n(c);t.default=function(){var e=Object(o.useState)(),t=e[0],n=e[1],a=Object(o.useState)(!1),c=a[0],u=a[1],d=Object(o.useRef)(),l=Object(o.useRef)();return Object(o.useEffect)((function(){l.current.querySelector("form[id=localAccountForm]"),deubugger,console.log("anything?")}),[]),Object(o.useEffect)((function(){var e=function(e){return u((function(e){return!e}))},t=d.current.querySelectorAll("input[type=password]"),o=Object.keys(t).map((function(n){var o=t[n].id;return{id:o,element:Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"".concat(o,"-toggler"),children:"Show Password"}),Object(r.jsx)("input",{"data-relative-input":o,id:"".concat(o,"-toggler"),onClick:e,type:"checkbox"})]})}}));n(o)}),[]),Object(o.useEffect)((function(){d.current.querySelector("input[id=password]").type=c?"text":"password"}),[c]),Object(r.jsxs)("div",{className:s.a.container,ref:d,children:[Object(r.jsx)(i.a,{children:Object(r.jsx)("title",{children:"Sign up or sign in"})}),Object(r.jsx)("div",{className:"container unified_container",role:"presentation",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsx)("div",{className:"panel panel-default",children:Object(r.jsxs)("div",{className:"panel-body",children:[Object(r.jsx)("h1",{children:"The Puzzle Society"}),Object(r.jsx)("div",{className:"test-checkboxes",children:t&&t.map((function(e){return e.element}))}),Object(r.jsx)("div",{id:"api",ref:l}),Object(r.jsx)("div",{id:"api-copy","data-name":"Unified",style:{display:"none"},children:Object(r.jsxs)("form",{id:"localAccountForm",className:"localAccount","aria-label":"Sign in with your email address",children:[Object(r.jsx)("div",{className:"intro",children:Object(r.jsx)("h2",{"aria-level":"1",children:"Sign in with your email address"})}),Object(r.jsx)("div",{className:"error pageLevel","aria-hidden":"true",role:"alert",style:{display:"none"},children:Object(r.jsx)("p",{})}),Object(r.jsxs)("div",{className:"entry",children:[Object(r.jsxs)("div",{className:"entry-item",children:[Object(r.jsx)("div",{className:"error itemLevel","aria-hidden":"true",role:"alert",style:{display:"none"},children:Object(r.jsx)("p",{})}),Object(r.jsx)("input",{type:"email",id:"email",name:"Email Address",title:"Please enter a valid Email Address",pattern:"^[a-zA-Z0-9!#$%&'+^_`{}~-]+(?:\\.[a-zA-Z0-9!#$%&'+^_`{}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$",autoFocus:"",placeholder:"Email Address","aria-label":"Email Address"})]}),Object(r.jsxs)("div",{className:"entry-item",children:[Object(r.jsx)("div",{className:"password-label"}),Object(r.jsx)("div",{className:"error itemLevel","aria-hidden":"true",style:{display:"none"},children:Object(r.jsx)("p",{role:"alert"})}),Object(r.jsx)("input",{type:"password",id:"password",name:"Password",placeholder:"Password","aria-label":"Password",autoComplete:"current-password","aria-required":"true"}),Object(r.jsx)("div",{className:"forgot-password center-height",children:Object(r.jsx)("a",{id:"forgotPassword",href:"/amub2c.onmicrosoft.com/B2C_1_test2/api/CombinedSigninAndSignup/unified?claimsexchange=ForgotPassword&csrf_token=MFFLYnllUk9odmFWMzV6K0N0dmFIK0poeXJHTkNpdHNwaWhVeW1oTVd0MGxqY256MlFYWTdVNVlXYTdCMU5tbWJKMDdlckI3ZDQ3WnZNSDZDWXVNVXc9PTsyMDIxLTA0LTIwVDE3OjI4OjA1LjE1NDM3MzlaO1dyeTh1M05TaDZGY29WTUxEa0N6R1E9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&tx=StateProperties=eyJUSUQiOiI3YjRkZjQwZi0wMzk3LTQ4OTAtOTE3Mi1hMzE0OGFhZWUzMTIifQ&p=B2C_1_test2",children:"Forgot your password?"})})]}),Object(r.jsx)("div",{className:"working"}),Object(r.jsx)("div",{className:"buttons",children:Object(r.jsx)("button",{id:"next",type:"submit",form:"localAccountForm",children:"Sign in"})})]}),Object(r.jsx)("div",{className:"divider",children:Object(r.jsx)("h2",{children:"OR"})}),Object(r.jsx)("div",{className:"create",children:Object(r.jsxs)("p",{children:["Don't have an account?",Object(r.jsx)("a",{id:"createAccount",href:"/amub2c.onmicrosoft.com/B2C_1_test2/api/CombinedSigninAndSignup/unified?local=signup&csrf_token=MFFLYnllUk9odmFWMzV6K0N0dmFIK0poeXJHTkNpdHNwaWhVeW1oTVd0MGxqY256MlFYWTdVNVlXYTdCMU5tbWJKMDdlckI3ZDQ3WnZNSDZDWXVNVXc9PTsyMDIxLTA0LTIwVDE3OjI4OjA1LjE1NDM3MzlaO1dyeTh1M05TaDZGY29WTUxEa0N6R1E9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&tx=StateProperties=eyJUSUQiOiI3YjRkZjQwZi0wMzk3LTQ4OTAtOTE3Mi1hMzE0OGFhZWUzMTIifQ&p=B2C_1_test2",children:"Sign up now"})]})})]})})]})})})})}),Object(r.jsx)("div",{id:"shadowMeasureIt"}),Object(r.jsx)("div",{id:"divCoordMeasureIt"}),Object(r.jsx)("div",{id:"divRectangleMeasureIt",children:Object(r.jsx)("div",{id:"divRectangleBGMeasureIt"})})]})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);