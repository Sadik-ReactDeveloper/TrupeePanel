(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[223],{2387:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(14),r=a(16),l=a(15),c=a(0),o=a.n(c),s=a(1139),u=a(1140),d=a(1141),m=a(172),g=a(1144),f=a(786),h=a(789),p=a(787),E=a(785),w=a(794),v=a(169),S=a(797),N=a.n(S),z=a(170),b=a(801),P=a(437),D=a(259),y=(a(27),a(800),a(563),a(56)),k=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Title ",field:"title",filter:!0,width:200,cellRendererFramework:function(e){return o.a.createElement("div",null,o.a.createElement("span",null,e.data.title))}},{headerName:"Description ",field:"desc",filter:!0,width:350,cellRendererFramework:function(e){return o.a.createElement("div",null,o.a.createElement("span",null,e.data.desc))}},{headerName:"Upload Image",field:"img",width:300,cellRendererFramework:function(e){return o.a.createElement("div",{className:" "},o.a.createElement("img",{className:"w-50  rounded-0",src:e.data.img[0],alt:"No img",width:"100%"}))}},{headerName:"Actions",field:"sortorder",width:200,cellRendererFramework:function(t){return o.a.createElement("div",{className:"actions cursor-pointer"},o.a.createElement(P.a,{size:20,color:"red",onClick:function(){e.runthisfunction(t.data._id)}}))}}]},e.allNotificationList=function(){v.a.get("/admin/get_notification").then((function(t){var a=t.data.data;console.log(a),e.setState({rowData:a})}))},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.allNotificationList()}},{key:"runthisfunction",value:function(e){var t=this;N()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(a){switch(a){case"cancel":break;case"catch":v.a.get("/admin/dlt_notification/".concat(e)).then((function(e){t.allNotificationList()}))}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return o.a.createElement(s.a,{className:"app-user-list"},o.a.createElement(u.a,{sm:"12"}),o.a.createElement(u.a,{sm:"12"},o.a.createElement(d.a,null,o.a.createElement(s.a,{className:"m-2"},o.a.createElement(u.a,null,o.a.createElement("h1",{sm:"6",className:"float-left"},"General Notification List")),o.a.createElement(u.a,null,o.a.createElement(y.b,{render:function(e){var t=e.history;return o.a.createElement(m.a,{className:" btn btn-success float-right",onClick:function(){return t.push("/app/trade/addGeneralNotif")}},"Add General Notification")}}))),o.a.createElement(g.a,null,null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(f.a,{className:"p-1 ag-dropdown"},o.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(D.a,{className:"ml-50",size:15})),o.a.createElement(p.a,{right:!0},o.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(w.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(z.a.Consumer,null,(function(t){return o.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(o.a.Component);t.default=k}}]);
//# sourceMappingURL=223.cffda51e.chunk.js.map