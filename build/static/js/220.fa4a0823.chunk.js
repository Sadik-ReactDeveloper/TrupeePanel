(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[220],{2345:function(e,a,t){"use strict";t.r(a);var r=t(13),n=t(14),i=t(16),l=t(15),c=t(0),s=t.n(c),d=t(1143),o=t(1146),m=t(786),u=t(789),p=t(787),g=t(785),h=t(794),f=t(172),v=t(169),b=t(801),w=t(170),E=t(301),N=t(437),S=t(259),z=(t(800),t(793)),k=t(56),D=t(797),x=t.n(D),P=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100},{headerName:"First Name",field:"firstname",width:150,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===(a=e.data.userid)||void 0===a?void 0:a.firstname))}},{headerName:"Last Name",field:"lastname",width:150,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===(a=e.data.userid)||void 0===a?void 0:a.lastname))}},{headerName:"Mobile",field:"mobile",width:120,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===(a=e.data.userid)||void 0===a?void 0:a.mobile))}},{headerName:"Email",field:"email",width:120,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===(a=e.data.userid)||void 0===a?void 0:a.email))}},{headerName:"Date Of Birth",field:"dob",width:150,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===(a=e.data.userid)||void 0===a?void 0:a.dob))}},{headerName:"Gender",field:"gender",width:120,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===(a=e.data.userid)||void 0===a?void 0:a.gender))}},{headerName:"Membership",field:"pack_name",width:150,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===(a=e.data.planId)||void 0===a?void 0:a.pack_name))}},{headerName:"Start Date",field:"date",width:150,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===(a=e.data.userid)||void 0===a?void 0:a.start_date))}},{headerName:"Expire Date",field:"expdate",width:150,cellRendererFramework:function(e){var a;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===(a=e.data.userid)||void 0===a?void 0:a.expdate))}},{headerName:"Status",field:"status",width:130,cellRendererFramework:function(e){return"Active"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Deactive"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"sortorder",width:150,pinned:window.innerWidth>992&&"right",cellRendererFramework:function(a){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(k.b,{render:function(e){var t=e.history;return s.a.createElement(E.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return t.push("/app/membership/editMembership/".concat(a.data._id))}})}}),s.a.createElement(N.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){e.runthisfunction(a.data._id)}}))}}]},e.membershipDataList=function(){v.a.get("/admin/allmembership").then((function(a){var t=a.data.data;console.log(t),e.setState({rowData:t})}))},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.membershipDataList()}},{key:"runthisfunction",value:function(e){var a=this;x()("Do You Want To Delete Permanently","This item will be deleted immediately",{buttons:{cancel:"Cancel",catch:{text:"Delete ",value:"catch"}}}).then((function(t){switch(t){case"cancel":break;case"catch":v.a.get("/admin/dlt_membership/".concat(e)).then((function(e){a.membershipDataList()}))}}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return s.a.createElement(s.a.Fragment,null,s.a.createElement(z.a,{breadCrumbTitle:"Membership List",breadCrumbParent:"Membership",breadCrumbActive:"Membership List"}),s.a.createElement(d.a,{className:"overflow-hidden agGrid-card"},s.a.createElement(o.a,{className:"py-0"},null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(m.a,{className:"p-1 ag-dropdown"},s.a.createElement(u.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(S.a,{className:"ml-50",size:15})),s.a.createElement(p.a,{right:!0},s.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(h.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(f.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(w.a.Consumer,null,(function(a){return s.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(s.a.Component);a.default=P}}]);
//# sourceMappingURL=220.fa4a0823.chunk.js.map