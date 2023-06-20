/*! For license information please see 98.8ae64673.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[98],{2268:function(t,e,n){t.exports=n.p+"static/media/otpimg.5a7f8dec.png"},2269:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==g(t)&&"function"!==typeof t)return{default:t};var n=a(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var u=o?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=t[i]}r.default=t,n&&n.set(t,r);return r}(n(0)),o=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function a(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(a=function(t){return t?n:e})(t)}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function f(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==g(e)&&"function"!==typeof e?y(t):e}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var b=function(t){return"object"===g(t)},w=function(t){f(n,t);var e=h(n);function n(t){var o;return c(this,n),m(y(o=e.call(this,t)),"getClasses",(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return!b(t)&&!1!==t})).join(" ")})),m(y(o),"getType",(function(){var t=o.props,e=t.isInputSecure,n=t.isInputNum;return e?"password":n?"tel":"text"})),o.input=r.default.createRef(),o}return l(n,[{key:"componentDidMount",value:function(){var t=this.props,e=t.focus,n=t.shouldAutoFocus,r=this.input.current;r&&e&&n&&r.focus()}},{key:"componentDidUpdate",value:function(t){var e=this.props.focus,n=this.input.current;t.focus!==e&&n&&e&&(n.focus(),n.select())}},{key:"render",value:function(){var t=this.props,e=t.placeholder,n=t.separator,a=t.isLastChild,c=t.inputStyle,s=t.focus,l=t.isDisabled,f=t.hasErrored,p=t.errorStyle,h=t.focusStyle,d=t.disabledStyle,y=(t.shouldAutoFocus,t.isInputNum),v=t.index,m=t.value,g=t.className,w=(t.isInputSecure,u(t,o));return r.default.createElement("div",{className:g,style:{display:"flex",alignItems:"center"}},r.default.createElement("input",i({"aria-label":"".concat(0===v?"Please enter verification code. ":"").concat(y?"Digit":"Character"," ").concat(v+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},b(c)&&c,s&&b(h)&&h,l&&b(d)&&d,f&&b(p)&&p),placeholder:e,className:this.getClasses(c,s&&h,l&&d,f&&p),type:this.getType(),maxLength:"1",ref:this.input,disabled:l,value:m||""},w)),!a&&n)}}]),n}(r.PureComponent),O=function(t){f(n,t);var e=h(n);function n(){var t;c(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return m(y(t=e.call.apply(e,[this].concat(a))),"state",{activeInput:0}),m(y(t),"getOtpValue",(function(){return t.props.value?t.props.value.toString().split(""):[]})),m(y(t),"getPlaceholderValue",(function(){var e=t.props,n=e.placeholder,r=e.numInputs;if("string"===typeof n){if(n.length===r)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),m(y(t),"handleOtpChange",(function(e){(0,t.props.onChange)(e.join(""))})),m(y(t),"isInputValueValid",(function(e){return(t.props.isInputNum?!isNaN(parseInt(e,10)):"string"===typeof e)&&1===e.trim().length})),m(y(t),"focusInput",(function(e){var n=t.props.numInputs,r=Math.max(Math.min(n-1,e),0);t.setState({activeInput:r})})),m(y(t),"focusNextInput",(function(){var e=t.state.activeInput;t.focusInput(e+1)})),m(y(t),"focusPrevInput",(function(){var e=t.state.activeInput;t.focusInput(e-1)})),m(y(t),"changeCodeAtFocus",(function(e){var n=t.state.activeInput,r=t.getOtpValue();r[n]=e[0],t.handleOtpChange(r)})),m(y(t),"handleOnPaste",(function(e){e.preventDefault();var n=t.state.activeInput,r=t.props,o=r.numInputs;if(!r.isDisabled){for(var a=t.getOtpValue(),i=n,u=e.clipboardData.getData("text/plain").slice(0,o-n).split(""),c=0;c<o;++c)c>=n&&u.length>0&&(a[c]=u.shift(),i++);t.setState({activeInput:i},(function(){t.focusInput(i),t.handleOtpChange(a)}))}})),m(y(t),"handleOnChange",(function(e){var n=e.target.value;t.isInputValueValid(n)&&t.changeCodeAtFocus(n)})),m(y(t),"handleOnKeyDown",(function(e){8===e.keyCode||"Backspace"===e.key?(e.preventDefault(),t.changeCodeAtFocus(""),t.focusPrevInput()):46===e.keyCode||"Delete"===e.key?(e.preventDefault(),t.changeCodeAtFocus("")):37===e.keyCode||"ArrowLeft"===e.key?(e.preventDefault(),t.focusPrevInput()):39===e.keyCode||"ArrowRight"===e.key?(e.preventDefault(),t.focusNextInput()):32!==e.keyCode&&" "!==e.key&&"Spacebar"!==e.key&&"Space"!==e.key||e.preventDefault()})),m(y(t),"handleOnInput",(function(e){if(t.isInputValueValid(e.target.value))t.focusNextInput();else if(!t.props.isInputNum){var n=e.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(e.preventDefault(),t.changeCodeAtFocus(""),t.focusPrevInput())}})),m(y(t),"renderInputs",(function(){for(var e=t.state.activeInput,n=t.props,o=n.numInputs,a=n.inputStyle,i=n.focusStyle,u=n.separator,c=n.isDisabled,s=n.disabledStyle,l=n.hasErrored,f=n.errorStyle,p=n.shouldAutoFocus,h=n.isInputNum,d=n.isInputSecure,y=n.className,v=[],m=t.getOtpValue(),g=t.getPlaceholderValue(),b=t.props["data-cy"],O=t.props["data-testid"],x=function(n){v.push(r.default.createElement(w,{placeholder:g&&g[n],key:n,index:n,focus:e===n,value:m&&m[n],onChange:t.handleOnChange,onKeyDown:t.handleOnKeyDown,onInput:t.handleOnInput,onPaste:t.handleOnPaste,onFocus:function(e){t.setState({activeInput:n}),e.target.select()},onBlur:function(){return t.setState({activeInput:-1})},separator:u,inputStyle:a,focusStyle:i,isLastChild:n===o-1,isDisabled:c,disabledStyle:s,hasErrored:l,errorStyle:f,shouldAutoFocus:p,isInputNum:h,isInputSecure:d,className:y,"data-cy":b&&"".concat(b,"-").concat(n),"data-testid":O&&"".concat(O,"-").concat(n)}))},E=0;E<o;E++)x(E);return v})),t}return l(n,[{key:"render",value:function(){var t=this.props.containerStyle;return r.default.createElement("div",{style:Object.assign({display:"flex"},b(t)&&t),className:b(t)?"":t},this.renderInputs())}}]),n}(r.Component);m(O,"defaultProps",{numInputs:4,onChange:function(t){return console.log(t)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var x=O;e.default=x},2399:function(t,e,n){"use strict";n.r(e);var r=n(71),o=n(51),a=n(13),i=n(14),u=n(16),c=n(15),s=n(0),l=n.n(s),f=n(1135),p=n(1136),h=n(1137),d=n(1138),y=n(1139),v=n(1140),m=n(795),g=n(172),b=n(2268),w=n.n(b),O=n(27),x=(n(876),n(2269)),E=n.n(x),I=n(41),j=n.n(I);function S(){S=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new E(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=w(i,n);if(u){if(u===l)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=c;var l={};function f(){}function p(){}function h(){}var d={};u(d,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(I([])));v&&v!==e&&n.call(v,o)&&(d=v);var m=h.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,u){var c=s(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function I(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=h,u(m,"constructor",h),u(h,"constructor",p),p.displayName=u(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new b(c(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(m),u(m,i,"Generator"),u(m,o,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}var N=function(t){Object(u.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return(t=e.call.apply(e,[this].concat(u))).state={otp:""},t.handlechange=function(e){e.preventDefault(),t.setState(Object(o.a)({},e.target.name,e.target.value))},t.SubmitOtp=function(){var e=Object(r.a)(S().mark((function e(n){var r,o,a,i;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r=t.state.otp,"",a=new URLSearchParams(window.location.href),o=a.get("mobile"),i={mobile:o,otp:r},j.a.post("http://15.206.122.110:4000/api/user/verifyotp",i).then((function(e){console.log(e.data),"success"===e.data.status?(console.log(e.data.otp),t.props.history.push("/pages/reset-password")):alert(e.data.msg)})).catch((function(t){console.log(t.response)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(f.a,{className:"m-0 justify-content-center"},l.a.createElement(p.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},l.a.createElement(h.a,{className:"bg-authentication rounded-0 mb-0 w-100"},l.a.createElement(f.a,{className:"m-0"},l.a.createElement(p.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-5 w-100"},l.a.createElement("img",{src:w.a,alt:"lsImg",className:"",width:"100%"})),l.a.createElement(p.a,{lg:"6",md:"12",className:"p-0"},l.a.createElement(h.a,{className:"rounded-0 mb-0 px-1 pb-2 w-100 h-100 lg-mx-5"},l.a.createElement(d.a,{className:"pb-1"},l.a.createElement(y.a,null,l.a.createElement("h4",{className:"mb-0"},"Enter Your OTP Here"))),l.a.createElement(v.a,{className:"rst1"},l.a.createElement(m.a,null,l.a.createElement(E.a,{value:this.state.otp,name:"otp",onChange:this.handleChange,numInputs:4,separator:l.a.createElement("span",null,"-"),inputStyle:{width:"3rem",height:"3rem",margin:"1rem 1rem",fontSize:"1rem",borderRadius:4,border:"1px solid rgba(0,0,0,0.3)"}}),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center flex-wrap pt-5"},l.a.createElement("span",{className:"text-primary",onClick:function(){return O.a.push("/pages/login")}},"Are you not John Doe ?"),l.a.createElement("div",null,l.a.createElement(g.a.Ripple,{className:"unlock-btn",color:"primary",onClick:this.SubmitOtp},"Submit")))))))))))}}]),n}(l.a.Component);e.default=N},795:function(t,e,n){"use strict";var r=n(5),o=n(9),a=n(11),i=n(12),u=n(0),c=n.n(u),s=n(1),l=n.n(s),f=n(4),p=n.n(f),h=n(3),d=["className","cssModule","inline","tag","innerRef"],y={children:l.a.node,inline:l.a.bool,tag:h.tagPropType,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),className:l.a.string,cssModule:l.a.object},v=function(t){function e(e){var n;return(n=t.call(this,e)||this).getRef=n.getRef.bind(Object(a.a)(n)),n.submit=n.submit.bind(Object(a.a)(n)),n}Object(i.a)(e,t);var n=e.prototype;return n.getRef=function(t){this.props.innerRef&&this.props.innerRef(t),this.ref=t},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var t=this.props,e=t.className,n=t.cssModule,a=t.inline,i=t.tag,u=t.innerRef,s=Object(o.a)(t,d),l=Object(h.mapToCssModules)(p()(e,!!a&&"form-inline"),n);return c.a.createElement(i,Object(r.a)({},s,{ref:u,className:l}))},e}(u.Component);v.propTypes=y,v.defaultProps={tag:"form"},e.a=v},876:function(t,e,n){}}]);
//# sourceMappingURL=98.8ae64673.chunk.js.map