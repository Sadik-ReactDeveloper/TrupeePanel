(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[124],{2340:function(e,t,a){"use strict";a.r(t),a.d(t,"AddFaq",(function(){return j}));var n=a(32),s=a(51),i=a(13),r=a(14),o=a(16),l=a(15),c=a(0),u=a.n(c),d=a(1137),f=a(1135),p=a(1136),m=a(172),b=a(1140),h=a(795),g=a(794),v=a(793),O=a(56),y=a(169),j=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),y.a.post("/addFAQ",n.state).then((function(e){console.log(e),n.props.history.push("/app/faq/faqList")})).catch((function(e){console.log(e)}))},n.state={addTextbox:[{}],title:"",desc:""},n}return Object(r.a)(a,[{key:"addControls",value:function(){this.setState({title:[].concat(Object(n.a)(this.state.title),[""]),desc:[].concat(Object(n.a)(this.state.desc),[""]),addTextbox:[].concat(Object(n.a)(this.state.addTextbox),[""])})}},{key:"delControl",value:function(e){console.log(this.state),this.state.addTextbox.splice(e,1),this.state.title.splice(e,1),this.state.desc.splice(e,1),this.setState({})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(f.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add FAQ")),u.a.createElement(p.a,null,u.a.createElement(O.b,{render:function(e){var t=e.history;return u.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/faq/faqList")}},"Back")}}))),u.a.createElement(b.a,null,u.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(f.a,{className:"mb-2"},u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(g.a,null,"Title"),u.a.createElement(v.a,{type:"text",placeholder:"Enter Title",name:"title",value:this.state.title,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(g.a,null,"Description"),u.a.createElement(v.a,{type:"text",placeholder:"Enter Description",name:"desc",value:this.state.desc,onChange:this.changeHandler}))),u.a.createElement(f.a,null,u.a.createElement(m.a.Ripple,{className:"mr-1 mb-1",type:"submit",color:"primary"},"Add FAQ"))))))}}]),a}(c.Component);t.default=j},793:function(e,t,a){"use strict";var n=a(5),s=a(9),i=a(11),r=a(12),o=a(0),l=a.n(o),c=a(1),u=a.n(c),d=a(4),f=a.n(d),p=a(3),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,r=e.bsSize,o=e.valid,c=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,m),v=["radio","checkbox"].indexOf(i)>-1,O=new RegExp("\\D","g"),y=u||("select"===i||"textarea"===i?i:"input"),j="form-control";b?(j+="-plaintext",y=u||"input"):"file"===i?j+="-file":"range"===i?j+="-range":v&&(j=d?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var E=Object(p.mapToCssModules)(f()(t,c&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,j),a);return("input"===y||u&&"function"===typeof u)&&(g.type=i),g.children&&!b&&"select"!==i&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(y,Object(n.a)({},g,{ref:h,className:E,"aria-invalid":c}))},t}(l.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},794:function(e,t,a){"use strict";var n=a(5),s=a(9),i=a(0),r=a.n(i),o=a(1),l=a.n(o),c=a(4),u=a.n(c),d=a(3),f=["className","cssModule","hidden","widths","tag","check","size","for"],p=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:p,order:p,offset:p})]),b={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:l.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,i=e.hidden,o=e.widths,l=e.tag,c=e.check,p=e.size,m=e.for,b=Object(s.a)(e,f),h=[];o.forEach((function(t,n){var s=e[t];if(delete b[t],s||""===s){var i,r=!n;if(Object(d.isObject)(s)){var o,l=r?"-":"-"+t+"-";i=g(r,t,s.size),h.push(Object(d.mapToCssModules)(u()(((o={})[i]=s.size||""===s.size,o["order"+l+s.order]=s.order||0===s.order,o["offset"+l+s.offset]=s.offset||0===s.offset,o))),a)}else i=g(r,t,s),h.push(i)}}));var v=Object(d.mapToCssModules)(u()(t,!!i&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),a);return r.a.createElement(l,Object(n.a)({htmlFor:m},b,{className:v}))};v.propTypes=b,v.defaultProps=h,t.a=v},795:function(e,t,a){"use strict";var n=a(5),s=a(9),i=a(11),r=a(12),o=a(0),l=a.n(o),c=a(1),u=a.n(c),d=a(4),f=a.n(d),p=a(3),m=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.submit=a.submit.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.inline,r=e.tag,o=e.innerRef,c=Object(s.a)(e,m),u=Object(p.mapToCssModules)(f()(t,!!i&&"form-inline"),a);return l.a.createElement(r,Object(n.a)({},c,{ref:o,className:u}))},t}(o.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=124.db3ac4e3.chunk.js.map