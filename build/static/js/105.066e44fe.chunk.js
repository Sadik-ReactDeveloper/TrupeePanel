(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[105],{2362:function(e,t,a){"use strict";a.r(t),a.d(t,"AddTVC",(function(){return N}));var n=a(846),r=a(51),s=a(13),l=a(14),o=a(16),c=a(15),i=a(0),u=a.n(i),d=a(1137),f=a(1135),m=a(1136),p=a(172),h=a(1140),b=a(795),g=a(794),v=a(793),y=a(56),E=a(169),O=a(798),j=a.n(O),N=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(r.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),console.log(l.state);var t=new FormData;t.append("title",l.state.title),t.append("desc",l.state.desc),t.append("chart_type",l.state.chart_type),t.append("image",l.state.selectedFile,l.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var s=a.value;console.log(s)}}catch(u){r.e(u)}finally{r.f()}var o,c=Object(n.a)(t.keys());try{for(c.s();!(o=c.n()).done;){var i=o.value;console.log(i)}}catch(u){c.e(u)}finally{c.f()}E.a.post("/addTrending_chart",t).then((function(e){console.log(e.data),j()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/explore/Trupee/TradingViewCharts")})).catch((function(e){console.log(e)}))},l.state={title:"",desc:"",image:"",chart_type:"",selectedName:"",selectedFile:null},l}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(f.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Trading View Charts")),u.a.createElement(m.a,null,u.a.createElement(y.b,{render:function(e){var t=e.history;return u.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/explore/Trupee/TradingViewCharts")}},"Back")}}))),u.a.createElement(h.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(f.a,{className:"mb-2"},u.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(g.a,null,"Title"),u.a.createElement(v.a,{type:"text",placeholder:"Enter MRP Price",name:"title",value:this.state.title,onChange:this.changeHandler})),u.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(g.a,null,"Descripiton"),u.a.createElement(v.a,{type:"text",placeholder:"Enter Discount Price",name:"desc",value:this.state.desc,onChange:this.changeHandler})),u.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(g.a,{for:"exampleSelect"},"Charts"),u.a.createElement(v.a,{id:"exampleSelect",name:"chart_type",type:"select",value:this.state.chart_type,onChange:this.changeHandler},u.a.createElement("option",null,"Select Charts"),u.a.createElement("option",null,"Stock "),u.a.createElement("option",null,"Index "))),u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a,null,"Image"),u.a.createElement(v.a,{required:!0,type:"file",name:"image",onChange:this.onChangeHandler}))),u.a.createElement(f.a,null,u.a.createElement(p.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Add Trading View Charts"))))))}}]),a}(i.Component);t.default=N},793:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(11),l=a(12),o=a(0),c=a.n(o),i=a(1),u=a.n(i),d=a(4),f=a.n(d),m=a(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,d=e.addon,h=e.plaintext,b=e.innerRef,g=Object(r.a)(e,p),v=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),O="form-control";h?(O+="-plaintext",E=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":v&&(O=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(m.mapToCssModules)(f()(t,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===E||u&&"function"===typeof u)&&(g.type=s),g.children&&!h&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(m.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":i}))},t}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},t.a=b},794:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(0),l=a.n(s),o=a(1),c=a.n(o),i=a(4),u=a.n(i),d=a(3),f=["className","cssModule","hidden","widths","tag","check","size","for"],m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.hidden,o=e.widths,c=e.tag,i=e.check,m=e.size,p=e.for,h=Object(r.a)(e,f),b=[];o.forEach((function(t,n){var r=e[t];if(delete h[t],r||""===r){var s,l=!n;if(Object(d.isObject)(r)){var o,c=l?"-":"-"+t+"-";s=g(l,t,r.size),b.push(Object(d.mapToCssModules)(u()(((o={})[s]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o))),a)}else s=g(l,t,r),b.push(s)}}));var v=Object(d.mapToCssModules)(u()(t,!!s&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,b,!!b.length&&"col-form-label"),a);return l.a.createElement(c,Object(n.a)({htmlFor:p},h,{className:v}))};v.propTypes=h,v.defaultProps=b,t.a=v},795:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(11),l=a(12),o=a(0),c=a.n(o),i=a(1),u=a.n(i),d=a(4),f=a.n(d),m=a(3),p=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,o=e.innerRef,i=Object(r.a)(e,p),u=Object(m.mapToCssModules)(f()(t,!!s&&"form-inline"),a);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:u}))},t}(o.Component);b.propTypes=h,b.defaultProps={tag:"form"},t.a=b},846:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(91);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,l=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){o=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(o)throw s}}}}}}]);
//# sourceMappingURL=105.066e44fe.chunk.js.map