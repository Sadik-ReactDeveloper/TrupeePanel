(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[184],{1e3:function(e,a,t){},2360:function(e,a,t){"use strict";t.r(a);var n=t(13),s=t(14),l=t(16),r=t(15),c=t(0),m=t.n(c),i=t(1141),o=t(1142),u=t(1139),d=t(1140),E=t(1143),f=t(172),h=t(1146),v=(t(27),t(1e3),t(563),t(169)),p=(t(42),t(56)),b=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).state={data:{}},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/admin/getoneuser/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,m.a.createElement(i.a,null,m.a.createElement(o.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(u.a,{listTag:"div"},m.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(d.a,{href:"/app/users/usersList",tag:"a"},"User List"),m.a.createElement(d.a,{active:!0},"View Users"))))),m.a.createElement(E.a,{className:"overflow-hidden app-ecommerce-details"},m.a.createElement(i.a,{className:"m-2"},m.a.createElement(o.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Users")),m.a.createElement(o.a,null,m.a.createElement(p.b,{render:function(e){var a=e.history;return m.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/users/usersList")}},"Back")}}))),m.a.createElement(h.a,{className:"pb-0"},m.a.createElement(i.a,{className:"ml-4"},m.a.createElement(o.a,{sm:"9",md:"12",lg:"12"},m.a.createElement("div",{className:"users-page-view-table"},m.a.createElement("div",{className:"d-flex user-info"}),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Mobile"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.mobile))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},"Status"),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.status))))))))))}}]),t}(m.a.Component);a.default=b}}]);
//# sourceMappingURL=184.f337c6c9.chunk.js.map