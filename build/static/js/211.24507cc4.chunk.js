/*! For license information please see 211.24507cc4.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[211],{2319:function(e,t,a){"use strict";a.r(t);var r=a(71),n=a(13),i=a(14),l=a(16),o=a(15),c=a(0),d=a.n(c),u=a(1135),s=a(1136),m=a(1137),f=a(1140),p=a(785),h=a(788),v=a(786),g=a(784),y=a(793),w=a(172),E=a(169),b=a(170),N=a(801),_=a(437),x=a(259),T=(a(27),a(802),a(562),a(857)),F=a.n(T);function k(){k=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(F){o=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof s?t:s,i=Object.create(n.prototype),l=new _(r||[]);return i._invoke=function(e,t,a){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return T()}for(a.method=n,a.arg=i;;){var l=a.delegate;if(l){var o=E(l,a);if(o){if(o===u)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=d(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(e,a,l),i}function d(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(F){return{type:"throw",arg:F}}}e.wrap=c;var u={};function s(){}function m(){}function f(){}var p={};o(p,n,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(x([])));v&&v!==t&&a.call(v,n)&&(p=v);var g=f.prototype=s.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){o(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;this._invoke=function(n,i){function l(){return new t((function(r,l){!function r(n,i,l,o){var c=d(e[n],e,i);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,l,o)}),(function(e){r("throw",e,l,o)})):t.resolve(s).then((function(e){u.value=e,l(u)}),(function(e){return r("throw",e,l,o)}))}o(c.arg)}(n,i,r,l)}))}return r=r?r.then(l,l):l()}}function E(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=d(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function x(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return m.prototype=f,o(g,"constructor",f),o(f,"constructor",m),m.displayName=o(f,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,o(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(w.prototype),o(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,a,r,n,i){void 0===i&&(i=Promise);var l=new w(c(t,a,r,n),i);return e.isGeneratorFunction(a)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},y(g),o(g,l,"Generator"),o(g,n,(function(){return this})),o(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=x,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return l.type="throw",l.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var o=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(o&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var l=i?i.completion:{};return l.type=e,l.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;N(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var S=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Type Of Script",field:"script_type",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex  align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.script_type))}},{headerName:"Script Name",field:"scriptName",width:140,cellRendererFramework:function(e){var t,a,r;return d.a.createElement("div",{className:"d-flex  align-items-center cursor-pointer"},d.a.createElement("span",null,null===(t=e.data.fnoindex_scrpt_name)||void 0===t?void 0:t.scriptName),d.a.createElement("span",null,null===(a=e.data.fnoequty_scrpt_name)||void 0===a?void 0:a.scriptName),d.a.createElement("span",null,null===(r=e.data.cash_scrpt_name)||void 0===r?void 0:r.scriptName))}},{headerName:"Trade Type",field:"type",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.type))}},{headerName:"Call Type",field:"call_type",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.call_type))}},{headerName:"Active Value",field:"active_value",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.active_value))}},{headerName:"Active Value 2",field:"active_value2",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.active_value2))}},{headerName:" SL",field:"SL",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.SL))}},{headerName:"Trial",field:"trl",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.trl))}},{headerName:"T\u20b9 1",field:"T1",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.T1))}},{headerName:"T\u20b9 2",field:"T2",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.T2))}},{headerName:"T\u20b9 3",field:"T3",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.T3))}},{headerName:"T\u20b9 4",field:"T4",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.T4))}},{headerName:"T5",field:"t5",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.t5))}},{headerName:"Quantity",field:"qty",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.qty))}},{headerName:"Investment Amount",field:"investment_amt",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.investment_amt))}},{headerName:"Date",field:"updatedAt",width:120,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,F()(e.data.updatedAt).format("ll")," "))}},{headerName:"Number Of Lots",field:"no_of_lots",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.no_of_lots))}},{headerName:"SL Type",field:"sl_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.sl_type):"false"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.sl_type):null}},{headerName:"Trial Type",field:"trl_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.trl_type):"false"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.trl_type):null}},{headerName:"FT1 Type",field:"FT1_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.FT1_type):"false"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.FT1_type):null}},{headerName:"FT2 Type",field:"FT2_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.FT2_type):"false"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.FT2_type):null}},{headerName:"FT3 Type",field:"FT3_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.FT3_type):"false"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.FT3_type):null}},{headerName:"T1 Type",field:"t1_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.t1_type):"false"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.t1_type):null}},{headerName:"T2 Type",field:"t2_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.t2_type):"false"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.t2_type):null}},{headerName:"T3 Type",field:"t3_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.t3_type):"false"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.t3_type):null}},{headerName:"T4 Type",field:"t4_type",filter:!0,width:150,cellRendererFramework:function(e){return"true"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.t4_type):"false"===e.value?d.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.t4_type):null}},{headerName:"status ",field:"status",filter:!0,width:150,cellRendererFramework:function(e){var t,a,r,n,i,l,o,c,u,s,m,f;return"true"==(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.FT1_type)||"true"==(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.FT2_type)||"true"==(null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.FT3_type)||"true"==(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.t1_type)||"true"==(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.t2_type)||"true"==(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.t3_type)||"true"==(null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.t4_type)||"true"==(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.trl_type)||"true"==(null===e||void 0===e||null===(u=e.data)||void 0===u?void 0:u.t5_type)?d.a.createElement("div",{className:"badge badge-pill badge-success"},null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.status):"true"==(null===e||void 0===e||null===(m=e.data)||void 0===m?void 0:m.sl_type)?d.a.createElement("div",{className:"badge badge-pill badge-danger"},null===e||void 0===e||null===(f=e.data)||void 0===f?void 0:f.status):null}},{headerName:"Actions",field:"sortorder",width:150,pinned:window.innerWidth>992&&"right",cellRendererFramework:function(t){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(_.a,{size:20,color:"red",onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(k().mark((function e(){var t=this;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/completedTrade").then((function(e){var a=e.data.data;console.log(a),t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,r=t.columnDefs,n=t.defaultColDef;return console.log(a),d.a.createElement(u.a,{className:"app-user-list"},d.a.createElement(s.a,{sm:"12"}),d.a.createElement(s.a,{sm:"12"},d.a.createElement(m.a,null,d.a.createElement(u.a,{className:"m-2"},d.a.createElement(s.a,null,d.a.createElement("h1",{sm:"6",className:"float-left"},"Completed Trade List"))),d.a.createElement(f.a,null,null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(p.a,{className:"p-1 ag-dropdown"},d.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(x.a,{className:"ml-50",size:15})),d.a.createElement(v.a,{right:!0},d.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(y.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(w.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(b.a.Consumer,null,(function(t){return d.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(d.a.Component);t.default=S}}]);
//# sourceMappingURL=211.24507cc4.chunk.js.map