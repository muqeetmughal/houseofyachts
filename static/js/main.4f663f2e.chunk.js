(this["webpackJsonpfinn-frontend"]=this["webpackJsonpfinn-frontend"]||[]).push([[0],{31:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(18),s=c.n(n),i=c(8),l=c.n(i),r=c(12),o=c(7),d=c(10),h=c(0);var j=function(e){var t=e.data,c=e.onDelete;return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("table",{className:"table table-hover",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"bg-info",style:{height:"30%"},children:[Object(h.jsx)("th",{children:"Code"}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:"Model"}),Object(h.jsx)("th",{children:"Price"}),Object(h.jsx)("th",{children:"Engine"}),Object(h.jsx)("th",{children:"State"}),Object(h.jsx)("th",{children:"Location"}),Object(h.jsx)("th",{children:"Link"}),Object(h.jsx)("th",{children:"View"}),Object(h.jsx)("th",{children:"Status"}),Object(h.jsx)("th",{children:"Action"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.finn_code}),Object(h.jsx)("td",{children:e.title}),Object(h.jsx)("td",{children:e.Model}),Object(h.jsx)("td",{children:e.orignal_price}),Object(h.jsx)("td",{children:e.Engine_Included}),Object(h.jsx)("td",{children:e.State}),Object(h.jsx)("td",{children:e.Boat_location}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("i",{className:"fas fa-link"})})}),Object(h.jsx)("td",{children:Object(h.jsx)(d.b,{to:"/details/".concat(e.finn_code),children:Object(h.jsx)("i",{className:"fa fa-eye","aria-hidden":"true"})})}),Object(h.jsxs)("td",{children:["Active"===e.status?Object(h.jsx)("span",{className:"badge bg-success",children:e.status}):"Sold"===e.status?Object(h.jsx)("span",{className:"badge bg-warning",children:e.status}):Object(h.jsx)("span",{className:"badge bg-secondary",children:e.status})," "]}),Object(h.jsx)("td",{style:{cursor:"pointer"},onClick:function(){c(e.finn_code)},children:Object(h.jsx)("i",{className:"text-danger font-weight-bold text-center far fa-trash-alt"})})]},e.finn_code)}))})]})})};var b=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("div",{className:"spinner-border text-info",role:"status",children:Object(h.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})};var p=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)({total_records:0,current_page:1,previous_page:0,next_page:0,total_pages:0}),i=Object(o.a)(s,2),d=i[0],p=i[1],u=Object(a.useState)(!1),m=Object(o.a)(u,2),_=m[0],g=m[1],x=Object(a.useState)({finn_code:"",title:"",brand:"",color:"",boat_location:"",depth:"",engine_included:"",engine_manufacturer:"",engine_type:"",fuel:"",length_cm:"",length_feet:"",material:"",max_speed:"",modelstr:"",seating:"",sleeps:"",state:"",type:"",weight:"",width:"",description:"",last_updated:"",model:"",model_year:"",price:"",status:""}),f=Object(o.a)(x,2),O=f[0],v=f[1],y=Object(a.useState)("/api/listings/?page=".concat(d.current_page,"&finn_code=").concat(O.finn_code,"&title=").concat(O.title,"&description=").concat(O.description,"&Boat_location=").concat(O.boat_location,"&State=").concat(O.state,"&Type=").concat(O.type,"&Brand=").concat(O.brand,"&Model=").concat(O.model,"&Model_Year=").concat(O.model_year,"&Length_feet=").concat(O.length_feet,"&Length_cm=").concat(O.length_cm,"&Width=").concat(O.width,"&Depth=").concat(O.depth,"&Engine_Included=").concat(O.engine_included,"&Engine_Manufacturer=").concat(O.engine_manufacturer,"&Engine_Type=").concat(O.engine_type,"&Motorstr=").concat(O.modelstr,"&Max_Speed=").concat(O.max_speed,"&Fuel=").concat(O.fuel,"&Weight=").concat(O.weight,"&Material=").concat(O.material,"&Color=").concat(O.color,"&Seating=").concat(O.seating,"&Sleeps=").concat(O.sleeps,"&orignal_price=").concat(O.price,"&image=&last_updated=").concat(O.last_updated,"&status=").concat(O.status)),N=Object(o.a)(y,2),w=N[0],S=N[1];Object(a.useEffect)((function(){document.title="Finn-Page:".concat(d.current_page),M()}),[w]);var M=function(){var e=Object(r.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!1),e.next=3,fetch(w);case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n(c.records),p({total_records:c.total_records,current_page:c.current_page,previous_page:c.previous_page,next_page:c.next_page,total_pages:c.total_pages}),g(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function C(e){var t=e.target.value,c=e.target.name;v((function(e){return"title"===c?{finn_code:e.finn_code,title:t,brand:e.brand,color:e.color,boat_location:e.boat_location,depth:e.depth,engine_included:e.engine_included,engine_manufacturer:e.engine_manufacturer,engine_type:e.engine_type,fuel:e.fuel,length_cm:e.length_cm,length_feet:e.length_feet,material:e.material,max_speed:e.max_speed,modelstr:e.modelstr,seating:e.seating,sleeps:e.sleeps,state:e.state,type:e.type,weight:e.weight,width:e.width,description:e.description,last_updated:e.last_updated,model:e.model,model_year:e.model_year,price:e.price,status:e.status}:"finn_code"===c?{finn_code:t,title:e.title,brand:e.brand,color:e.color,boat_location:e.boat_location,depth:e.depth,engine_included:e.engine_included,engine_manufacturer:e.engine_manufacturer,engine_type:e.engine_type,fuel:e.fuel,length_cm:e.length_cm,length_feet:e.length_feet,material:e.material,max_speed:e.max_speed,modelstr:e.modelstr,seating:e.seating,sleeps:e.sleeps,state:e.state,type:e.type,weight:e.weight,width:e.width,description:e.description,last_updated:e.last_updated,model:e.model,model_year:e.model_year,price:e.price,status:e.status}:"status"===c?{finn_code:e.finn_code,title:e.title,brand:e.brand,color:e.color,boat_location:e.boat_location,depth:e.depth,engine_included:e.engine_included,engine_manufacturer:e.engine_manufacturer,engine_type:e.engine_type,fuel:e.fuel,length_cm:e.length_cm,length_feet:e.length_feet,material:e.material,max_speed:e.max_speed,modelstr:e.modelstr,seating:e.seating,sleeps:e.sleeps,state:e.state,type:e.type,weight:e.weight,width:e.width,description:e.description,last_updated:e.last_updated,model:e.model,model_year:e.model_year,price:e.price,status:t}:"description"===c?{finn_code:e.finn_code,title:e.title,brand:e.brand,color:e.color,boat_location:e.boat_location,depth:e.depth,engine_included:e.engine_included,engine_manufacturer:e.engine_manufacturer,engine_type:e.engine_type,fuel:e.fuel,length_cm:e.length_cm,length_feet:e.length_feet,material:e.material,max_speed:e.max_speed,modelstr:e.modelstr,seating:e.seating,sleeps:e.sleeps,state:e.state,type:e.type,weight:e.weight,width:e.width,description:t,last_updated:e.last_updated,model:e.model,model_year:e.model_year,price:e.price,status:e.status}:void 0}))}var E=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/delete/".concat(t));case 2:M(),console.log("Deleted",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"Home",children:[Object(h.jsx)("header",{children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"/",children:Object(h.jsxs)("svg",{focusable:"false",width:"92",height:"32",viewBox:"0 0 184 64",children:[Object(h.jsx)("title",{children:"FINN.NO"}),Object(h.jsx)("path",{fill:"#06bffc",d:"M179.8 58V6c0-1-.8-1.9-1.9-1.9H66c-1 0-1.9.8-1.9 1.9v53.8H178c1 0 1.8-.8 1.8-1.8"}),Object(h.jsx)("path",{fill:"#0063fc",d:"M22.5 4.2H6C5 4.2 4.2 5 4.2 6v52c0 1 .8 1.9 1.9 1.9H60V41.5C59.9 20.9 43.2 4.2 22.5 4.2"}),Object(h.jsx)("path",{fill:"#fff",d:"M178 0H66c-3.3 0-6 2.7-6 6v17.4C53.2 9.6 38.9 0 22.5 0H6C2.7 0 0 2.7 0 6v52c0 3.3 2.7 6 6 6h172c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6m1.8 58c0 1-.8 1.9-1.9 1.9H64.1V6c0-1 .8-1.9 1.9-1.9h112c1 0 1.9.8 1.9 1.9v52zM4.2 58V6C4.2 5 5 4.2 6 4.2h16.5c20.6 0 37.4 16.8 37.4 37.4v18.3H6c-1-.1-1.8-.9-1.8-1.9"}),Object(h.jsx)("path",{fill:"#fff",d:"M110.1 21.1h-4.2c-.7 0-1.2.5-1.2 1.2v19.3c0 .7.5 1.2 1.2 1.2h4.2c.7 0 1.2-.5 1.2-1.2V22.3c0-.6-.6-1.2-1.2-1.2m-12 0H83c-.7 0-1.2.5-1.2 1.2v19.3c0 .7.5 1.2 1.2 1.2h4.2c.7 0 1.2-.5 1.2-1.2v-4h7.7c.7 0 1.2-.5 1.2-1.2v-3.2c0-.7-.5-1.2-1.2-1.2h-7.7v-4.9h9.7c.7 0 1.2-.5 1.2-1.2v-3.7c0-.5-.6-1.1-1.2-1.1m62.8 0h-4.2c-.7 0-1.2.5-1.2 1.2v9.5l-6.6-10c-.3-.4-.8-.7-1.3-.7h-3.2c-.7 0-1.2.5-1.2 1.2v19.3c0 .7.5 1.2 1.2 1.2h4.2c.7 0 1.2-.5 1.2-1.2v-9.4l6.5 9.8c.3.4.8.7 1.3.7h3.4c.7 0 1.2-.5 1.2-1.2V22.3c-.1-.6-.6-1.2-1.3-1.2m-25.4 0h-4.2c-.7 0-1.2.5-1.2 1.2v9.5l-6.6-10c-.3-.4-.8-.7-1.3-.7H119c-.7 0-1.2.5-1.2 1.2v19.3c0 .7.5 1.2 1.2 1.2h4.2c.7 0 1.2-.5 1.2-1.2v-9.4l6.5 9.8c.3.4.8.7 1.3.7h3.4c.7 0 1.2-.5 1.2-1.2V22.3c-.1-.6-.6-1.2-1.3-1.2"})]})}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("i",{className:"fas fa-bars"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{href:"/api/export/",className:"btn btn-success",tabIndex:"-1","aria-disabled":"true",children:"Export to Excel"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)("span",{className:"nav-link disabled",tabIndex:"-1","aria-disabled":"true",children:["Current Page: ",d.current_page]})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)("span",{className:"nav-link disabled",tabIndex:"-1","aria-disabled":"true",children:["Total: ",d.total_records]})})]}),Object(h.jsxs)("ul",{className:"pagination pagination-circle",children:[Object(h.jsx)("li",{className:"page-item",children:Object(h.jsx)("button",{onClick:function(){S("/api/listings/?page=".concat(d.previous_page,"&finn_code=").concat(O.finn_code,"&title=").concat(O.title,"&description=").concat(O.description,"&Boat_location=").concat(O.boat_location,"&State=").concat(O.state,"&Type=").concat(O.type,"&Brand=").concat(O.brand,"&Model=").concat(O.model,"&Model_Year=").concat(O.model_year,"&Length_feet=").concat(O.length_feet,"&Length_cm=").concat(O.length_cm,"&Width=").concat(O.width,"&Depth=").concat(O.depth,"&Engine_Included=").concat(O.engine_included,"&Engine_Manufacturer=").concat(O.engine_manufacturer,"&Engine_Type=").concat(O.engine_type,"&Motorstr=").concat(O.modelstr,"&Max_Speed=").concat(O.max_speed,"&Fuel=").concat(O.fuel,"&Weight=").concat(O.weight,"&Material=").concat(O.material,"&Color=").concat(O.color,"&Seating=").concat(O.seating,"&Sleeps=").concat(O.sleeps,"&orignal_price=").concat(O.price,"&image=&last_updated=").concat(O.last_updated,"&status=").concat(O.status))},className:"btn btn-danger",href:"#",tabIndex:"-1","aria-disabled":"true",children:Object(h.jsx)("i",{className:"fas fa-chevron-left"})})}),Object(h.jsx)("li",{className:"page-item",children:Object(h.jsx)("button",{onClick:function(){S("/api/listings/?page=".concat(d.next_page,"&finn_code=").concat(O.finn_code,"&title=").concat(O.title,"&description=").concat(O.description,"&Boat_location=").concat(O.boat_location,"&State=").concat(O.state,"&Type=").concat(O.type,"&Brand=").concat(O.brand,"&Model=").concat(O.model,"&Model_Year=").concat(O.model_year,"&Length_feet=").concat(O.length_feet,"&Length_cm=").concat(O.length_cm,"&Width=").concat(O.width,"&Depth=").concat(O.depth,"&Engine_Included=").concat(O.engine_included,"&Engine_Manufacturer=").concat(O.engine_manufacturer,"&Engine_Type=").concat(O.engine_type,"&Motorstr=").concat(O.modelstr,"&Max_Speed=").concat(O.max_speed,"&Fuel=").concat(O.fuel,"&Weight=").concat(O.weight,"&Material=").concat(O.material,"&Color=").concat(O.color,"&Seating=").concat(O.seating,"&Sleeps=").concat(O.sleeps,"&orignal_price=").concat(O.price,"&image=&last_updated=").concat(O.last_updated,"&status=").concat(O.status))},className:"btn btn-primary",children:Object(h.jsx)("i",{className:"fas fa-chevron-right"})})})]})]})]})})}),Object(h.jsx)("div",{className:"container mt-4 mb-4",children:Object(h.jsxs)("div",{className:"d-flex input-group w-auto",children:[Object(h.jsx)("input",{type:"text",name:"finn_code",onChange:C,value:O.finn_code,className:"form-control",placeholder:"Search Finn Code","aria-label":"Search"}),Object(h.jsx)("input",{type:"text",name:"title",onChange:C,value:O.title,className:"form-control",placeholder:"Search Title","aria-label":"Search"}),Object(h.jsx)("input",{type:"text",name:"description",onChange:C,value:O.description,className:"form-control",placeholder:"Search in Description","aria-label":"Search"}),Object(h.jsx)("input",{type:"text",name:"status",onChange:C,value:O.status,className:"form-control",placeholder:"Search Status","aria-label":"Search"}),Object(h.jsx)("button",{onClick:function(){S("/api/listings/?page=".concat(d.current_page,"&finn_code=").concat(O.finn_code,"&title=").concat(O.title,"&description=").concat(O.description,"&Boat_location=").concat(O.boat_location,"&State=").concat(O.state,"&Type=").concat(O.type,"&Brand=").concat(O.brand,"&Model=").concat(O.model,"&Model_Year=").concat(O.model_year,"&Length_feet=").concat(O.length_feet,"&Length_cm=").concat(O.length_cm,"&Width=").concat(O.width,"&Depth=").concat(O.depth,"&Engine_Included=").concat(O.engine_included,"&Engine_Manufacturer=").concat(O.engine_manufacturer,"&Engine_Type=").concat(O.engine_type,"&Motorstr=").concat(O.modelstr,"&Max_Speed=").concat(O.max_speed,"&Fuel=").concat(O.fuel,"&Weight=").concat(O.weight,"&Material=").concat(O.material,"&Color=").concat(O.color,"&Seating=").concat(O.seating,"&Sleeps=").concat(O.sleeps,"&orignal_price=").concat(O.price,"&image=&last_updated=").concat(O.last_updated,"&status=").concat(O.status))},className:"btn btn-primary",children:"Search"})]})}),_?Object(h.jsx)(j,{data:c,onDelete:E}):Object(h.jsx)(b,{})]})};var u=function(e){var t=e.data,c=t.prices;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6 col-sm-12 col-lg-4 fill",children:Object(h.jsx)("img",{src:t.image,width:"300px",height:"300px",alt:t.title})}),Object(h.jsxs)("div",{className:"col-md-6 col-sm-12 col-lg-8",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-3",children:[Object(h.jsx)("label",{children:t.Boat_location}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{className:"col-md-3",children:[Object(h.jsx)("label",{children:"FIND CODE:"}),Object(h.jsx)("h6",{children:t.finn_code})]}),Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsx)("label",{children:"Last changed :"}),Object(h.jsx)("h6",{children:t.last_changed})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-3",children:[Object(h.jsx)("label",{children:"Contact Person:"}),Object(h.jsx)("h6",{children:t.contact_name})]}),Object(h.jsxs)("div",{className:"col-md-3",children:[Object(h.jsx)("label",{children:"Phones:"}),Object(h.jsx)("h6",{children:t.phone_number})]}),Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsx)("label",{children:"Address:"}),Object(h.jsx)("h6",{children:t.address})]}),Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsx)("label",{children:"Price:"}),Object(h.jsx)("h4",{children:t.orignal_price})]})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsx)("h4",{children:t.title})})})]})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:t.description},className:"col-md-6 col-sm-12"}),Object(h.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(h.jsxs)("table",{className:"table table-hover",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Changed Price"}),Object(h.jsx)("th",{children:"Date Changed"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.finn_code}),Object(h.jsx)("td",{children:e.changed_price}),Object(h.jsx)("td",{children:e.price_changed_date})]})}))})]})})]})]})},m=c(2);var _=function(e){var t=e.match,c=Object(m.f)(),n=t.params.finn_code,s=Object(a.useState)(!1),i=Object(o.a)(s,2),d=i[0],j=i[1],p=Object(a.useState)({}),_=Object(o.a)(p,2),g=_[0],x=_[1],f="/api/detail/".concat(n),O=function(){var e=Object(r.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!1),e.next=3,fetch(f);case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,x(c),console.log(c),j(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){document.title="Finn-Details:".concat(n),O()}),[f]),Object(h.jsxs)("div",{className:"container",style:{marginTop:10},children:[Object(h.jsx)("button",{onClick:function(){return c.goBack()},className:"btn btn-primary",children:"Back"}),d?Object(h.jsx)(u,{data:g}):Object(h.jsx)(b,{})]})};var g=function(){return Object(h.jsx)(d.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{path:"/",exact:!0,component:p}),Object(h.jsx)(m.a,{path:"/details/:finn_code",component:_})]})})})};s.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4f663f2e.chunk.js.map