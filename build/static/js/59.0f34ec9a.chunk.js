(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[59],{1197:function(e,t){},1406:function(e,t,a){},1420:function(e,t){},1421:function(e,t){},2448:function(e,t,a){"use strict";a.r(t);var n=a(32),l=a(13),r=a(14),s=a(16),c=a(15),i=a(0),o=a.n(i),u=a(809),m=a(1139),h=a(1140),p=a(1141),f=a(1144),b=a(1142),E=a(1143),v=a(794),d=a(867),g=a(1419),y=a.n(g),D=a(296),x=a(403),j=a(1134),k=a(850);a(882),a(940),a(1406);function N(e){var t=Object(j.a)({accept:".xlsx, .xls, .csv",onDrop:function(t){var a=new FileReader;a.onload=function(){var n=a.result,l=y.a.read(n,{type:"binary"});l.SheetNames.forEach((function(a){var n=y.a.utils.sheet_to_row_object_array(l.Sheets[a]);e.getTableData(n,t[0].name)}))},t.length?a.readAsBinaryString(t[0]):k.f.error("You can only upload .xlsx, .xls, .csv Files!")}}),a=t.getRootProps,n=t.getInputProps;return o.a.createElement("section",{className:"pb-1"},o.a.createElement("div",a({className:"dropzone py-3 flex-column"}),o.a.createElement("input",n()),o.a.createElement(D.a,{className:"text-light",size:50}),o.a.createElement("h4",{className:"mb-0 mt-2"},"Drop Excel File or Browse")))}var w=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={tableData:[],filteredData:[],value:"",name:""},e.getTableData=function(t,a){e.setState({tableData:t,name:a})},e.handleFilter=function(t){var a=e.state.tableData,n=[],l=t.target.value;if(e.setState({value:l}),!l.length)return null;n=a.filter((function(e){var t=Object.keys(e),a=t.filter((function(t){return e[t].toString().toLowerCase().startsWith(l.toLowerCase())})),n=t.filter((function(t){return e[t].toString().toLowerCase().includes(l.toLowerCase())}));return a.length?e[a]:!a&&n.length?e[n]:null})),e.setState({value:l,filteredData:n})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state.tableData.length?this.state.tableData.map((function(e,t){return 0===t?Object(n.a)(Object.keys(e)):null})):[],a=this.state.value.length?this.state.filteredData:this.state.tableData.length&&!this.state.value.length?this.state.tableData:null,l=null!==a&&a.length?a.map((function(e,t){var a=Object.keys(e).map((function(t,a){return o.a.createElement("td",{key:a},e[t])}));return o.a.createElement("tr",{key:t},a)})):null,r=t.length?t[0].map((function(e,t){return o.a.createElement("th",{key:t},e)})):null;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/AdeleD/react-paginate"}),o.a.createElement(m.a,{className:"import-component"},o.a.createElement(h.a,{sm:"12"},o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement(m.a,null,o.a.createElement(h.a,{sm:"12"},o.a.createElement(N,{getTableData:this.getTableData})))))),this.state.tableData.length?o.a.createElement(h.a,{sm:"12"},o.a.createElement(p.a,null,o.a.createElement(b.a,{className:"justify-content-between flex-wrap"},o.a.createElement(E.a,null,this.state.name),o.a.createElement("div",{className:"filter position-relative has-icon-left"},o.a.createElement(v.a,{type:"text",value:this.state.value,onChange:function(t){return e.handleFilter(t)}}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(x.a,{size:15})))),o.a.createElement(f.a,null,o.a.createElement(d.a,{className:"table-hover-animation",responsive:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,r)),o.a.createElement("tbody",null,l))))):null,o.a.createElement(k.d,null)))}}]),a}(o.a.Component);t.default=w},809:function(e,t,a){"use strict";var n=a(13),l=a(14),r=a(16),s=a(15),c=a(0),i=a.n(c),o=a(1139),u=a(1140),m=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(o.a,{className:"mb-2"},i.a.createElement(u.a,{sm:"12",className:"ml-50"},i.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?i.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):i.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(i.a.Component);t.a=m},940:function(e,t,a){}}]);
//# sourceMappingURL=59.0f34ec9a.chunk.js.map