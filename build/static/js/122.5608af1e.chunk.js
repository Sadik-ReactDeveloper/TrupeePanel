(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[122],{2399:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return H}));var n=a(51),r=a(13),l=a(14),c=a(16),o=a(15),s=a(0),i=a.n(s),m=a(1141),d=a(1142),u=a(1139),p=a(1140),h=a(1143),b=a(172),E=a(1146),f=a(796),g=a(795),S=a(794),v=a(169),N=a(56),y=a(914),C=a.n(y),k=a(797),q=a.n(k),F=a(837),j=a(838),O=a(811),T=a.n(O),H=(a(845),a(804),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).onEditorStateChange=function(e){l.setState({editorState:e,desc:T()(Object(F.convertToRaw)(e.getCurrentContent()))})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),console.log("Desc",l.state.desc);var t=l.props.match.params.id;v.a.post("admin/edit_faq/".concat(t),l.state).then((function(e){q()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e)}))},l.state={title:"",editorState:F.EditorState.createEmpty(),desc:""},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;v.a.get("/admin/getoneFaq/".concat(t)).then((function(t){var a=t.data.data.desc,n=F.ContentState.createFromBlockArray(Object(F.convertFromHTML)(a)),r=F.EditorState.createWithContent(n);e.setState({title:t.data.data.title,desc:a,editorState:r})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/scripts/cashEquity",tag:"a"},"Edit Faq"),i.a.createElement(p.a,{active:!0},"Edit Faq"))))),i.a.createElement(h.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Faq")),i.a.createElement(d.a,null,i.a.createElement(N.b,{render:function(e){var t=e.history;return i.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/faq/faqList")}},"Back")}}))),i.a.createElement(E.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(g.a,null,"Title"),i.a.createElement(S.a,{type:"text",required:!0,placeholder:"Enter Title",name:"title",value:this.state.title,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,null,"Description"),i.a.createElement(j.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,defaultContentState:C()(this.state.desc),toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),a}(s.Component))},804:function(e,t,a){},915:function(e,t){}}]);
//# sourceMappingURL=122.5608af1e.chunk.js.map