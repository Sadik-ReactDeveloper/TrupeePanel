(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[176],{2420:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var n=t(51),l=t(13),o=t(14),r=t(16),s=t(15),c=t(0),i=t.n(c),m=t(1141),d=t(1142),u=t(1139),p=t(1140),h=t(1143),b=t(172),E=t(1146),g=t(796),f=t(795),y=t(794),N=t(169),v=(t(27),t(797)),S=t.n(v),C=t(56),O=t(837),k=t(838),T=t(810),F=t.n(T),H=(t(847),t(804),function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=a.call(this,e)).onEditorStateChange=function(e){o.setState({editorState:e,desc:F()(Object(O.convertToRaw)(e.getCurrentContent()))})},o.onChangeHandler=function(e){o.setState({selectedFile:e.target.files[0]})},o.changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),console.log(o.state);var a=new FormData;a.append("title",o.state.title),a.append("desc",o.state.desc),a.append("img",o.state.selectedFile);var t=o.props.match.params.id;N.a.post("/admin/editOportunity/".concat(t),a).then((function(e){console.log(e.data.data),S()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e)}))},o.state={title:"",image:"",selectedName:"",selectedFile:null,editorState:O.EditorState.createEmpty(),desc:""},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("/admin/getoneOportunity/".concat(a)).then((function(a){console.log(a.data.data),e.setState({title:a.data.data.title,desc:a.data.data.desc,image:a.data.data.image})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/explore/Trupee/opportunity",tag:"a"},"Opportunity List"),i.a.createElement(p.a,{active:!0},"Edit Opportunity"))))),i.a.createElement(h.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Opportunity")),i.a.createElement(d.a,null,i.a.createElement(C.b,{render:function(e){var a=e.history;return i.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/explore/Trupee/opportunity")}},"Back")}}))),i.a.createElement(E.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Title"),i.a.createElement(y.a,{required:!0,type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Image"),i.a.createElement(y.a,{type:"file",name:"image",onChange:this.onChangeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a,null,"Descripition"),i.a.createElement(k.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}))),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(c.Component))},804:function(e,a,t){}}]);
//# sourceMappingURL=176.a4585b82.chunk.js.map