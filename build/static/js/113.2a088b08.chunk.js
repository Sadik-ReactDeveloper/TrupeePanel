(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[113],{2516:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),o=a(16),l=a(15),i=a(0),s=a.n(i),c=a(811),m=a(1141),u=a(1142),d=a(1143),p=a(1144),b=a(1145),E=a(1146),h=a(837),f=a(838),v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={editorState:h.EditorState.createEmpty()},e.onEditorStateChange=function(t){e.setState({editorState:t})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.editorState;return s.a.createElement(d.a,null,s.a.createElement(p.a,null,s.a.createElement(b.a,null,"Controlled")),s.a.createElement(E.a,null,s.a.createElement(f.Editor,{editorState:e,wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange})))}}]),a}(s.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).addStar=function(){var t=e.props,a=t.editorState,n=t.onChange,r=h.Modifier.replaceText(a.getCurrentContent(),a.getSelection(),"\u2b50",a.getCurrentInlineStyle());n(h.EditorState.push(a,r,"insert-characters"))},e}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"custom-tool"},s.a.createElement("span",{"aria-label":"star",role:"img",onClick:this.addStar},"\u2b50"))}}]),a}(s.a.Component),C=function(){return s.a.createElement(d.a,null,s.a.createElement(p.a,null,s.a.createElement(b.a,null,"Custom Toolbar Option - Insert Star")),s.a.createElement(E.a,null,s.a.createElement(f.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",toolbarCustomButtons:[s.a.createElement(y,null)]})))},g=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},e}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(p.a,null,s.a.createElement(b.a,null,"Image Upload & Preview")),s.a.createElement(E.a,null,s.a.createElement(f.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}})))}}]),a}(s.a.Component),O=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={editorState:h.EditorState.createEmpty()},e.onEditorStateChange=function(t){e.setState({editorState:t})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.editorState;return s.a.createElement(d.a,null,s.a.createElement(p.a,null,s.a.createElement(b.a,null,"Inline Editor Only Visible When Focused")),s.a.createElement(E.a,null,s.a.createElement(f.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",defaultEditorState:e,toolbarOnFocus:!0,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})))}}]),a}(s.a.Component),S=(a(847),a(804),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{title:"Wysiwyg Editor",subTitle:"A Wysiwyg editor is build on top of ReactJS and DraftJS",link:"https://github.com/jpuri/react-draft-wysiwyg"}),s.a.createElement(m.a,null,s.a.createElement(u.a,{sm:"12"},s.a.createElement(v,null)),s.a.createElement(u.a,{sm:"12"},s.a.createElement(C,null)),s.a.createElement(u.a,{sm:"12"},s.a.createElement(g,null)),s.a.createElement(u.a,{sm:"12"},s.a.createElement(O,null))))}}]),a}(s.a.Component));t.default=S},804:function(e,t,a){},811:function(e,t,a){"use strict";var n=a(13),r=a(14),o=a(16),l=a(15),i=a(0),s=a.n(i),c=a(1141),m=a(1142),u=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(c.a,{className:"mb-2"},s.a.createElement(m.a,{sm:"12",className:"ml-50"},s.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?s.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):s.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(s.a.Component);t.a=u}}]);
//# sourceMappingURL=113.2a088b08.chunk.js.map