"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1235],{681:(e,t,a)=>{a.d(t,{Lf:()=>h,Mg:()=>o,OT:()=>p,P9:()=>f,PD:()=>v,Pi:()=>_,T9:()=>u,VR:()=>w,b6:()=>g,mR:()=>k,nv:()=>c,s2:()=>s,vc:()=>i,xZ:()=>l,y1:()=>m});var n=a(4775);function i(e){return e.getFullYear()+"-"+r(e.getMonth()+1)+"-"+r(e.getDate())+" "+r(e.getHours())+":"+r(e.getMinutes())+":00"}function r(e){return(e<10?"0":"")+e}function s(e){return e.item_variant.item_name+"'s "+e.item_variant.color_name}function l(e){var t=[];return e.length>0&&Object.keys(e).map((function(a){t.push(e[a].id)})),t}function o(e){var t=e-1;return 0==t?1:t}function c(e){return 1==e.create||1==e.read||1==e.update||1==e.delete}function u(e){return 0==e.create&&0==e.read&&0==e.update&&0==e.delete}function d(e){switch(e.slice(-1)){case"y":return e.slice(0,-1)+"ies";case"h":case"x":return e+"es";default:return e+"s"}}function g(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;switch(e.currentPage=t,n){case null:e.search=null,void 0!==e.$refs.deleteAll&&(e.$refs.searchModal.searchData=null,e.$refs.deleteAll.$el.checked=!1);var i=d(a),r=e.$route.name==a?i:"trash_"+i;return r+"?page=";case"search":e.search=e.$refs.searchModal.searchData;var s=e.$route.name==a?a+"_search":a+"_trash_search";return s+"?search="}}function p(e,t){e.map((function(e){e.$el.checked=t,e.$el.dispatchEvent(new Event("change"))}))}function m(e,t,a,n){switch(e){case!0:a.includes(t.id)||a.push(t.id),n.includes(t)||n.push(t);break;case!1:k(a,t.id),k(n,t)}}function _(e){e.length=0}function k(e,t){var a=e.indexOf(t);a>-1&&e.splice(a,1)}function h(e,t,a){window.axios.get("check_permission/"+e+"/"+t).then((function(e){"Loading"==e.data.message?(0,n.e)(a):a.actions[t]=!0})).catch((function(e){w(e,a)}))}function f(e,t,a){switch(e.name){case a:t.push("/admin/"+a+"_bin"),e.name=a+"_bin";break;case a+"_bin":t.push("/admin/"+a),e.name=a}}function w(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e.response)switch(e.response.status){case 401:t.$swal("Unauthenticated","You are not login","error"),setTimeout((function(){window.location.href="/admin/login"}),2e3);break;case 403:t.actions[a]=!1,t.errors&&(t.errors.error_status=403,t.errors.error_title="Permission Denied",t.errors.error_description="You are not allowed to "+a+" "+t.current);break;case 404:t.actions[a]=!1,t.errors.error_status=404,t.errors.error_title="Page Not Found",t.errors.error_description="You are in the wrong page"}}function v(e){return e[0].toLowerCase()+e.substring(1)}},4775:(e,t,a)=>{function n(e){e.$swal({title:"Now loading",html:'<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',allowEscapeKey:!1,allowOutsideClick:!1,timer:2e3,onOpen:function(){swal.showLoading()}}).then((function(){}),(function(t){"timer"===t&&e.$swal.close}))}a.d(t,{e:()=>n})},4843:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(821),i={class:"content-header"},r={class:"container-fluid"},s={class:"row mb-2"},l={class:"col-sm-6"},o={class:"m-0"},c={class:"col-sm-6"},u={class:"breadcrumb float-sm-right"},d={class:"breadcrumb-item"},g=(0,n.Uk)("Home"),p={class:"breadcrumb-item"},m={key:0,class:"breadcrumb-item active"};const _={name:"ContentHeader",props:{header:{type:String},back_links:{type:Array}}};const k=(0,a(3744).Z)(_,[["render",function(e,t,a,_,k,h){var f=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",r,[(0,n._)("div",s,[(0,n._)("div",l,[(0,n._)("h1",o,(0,n.zw)(a.header),1)]),(0,n._)("div",c,[(0,n._)("ol",u,[(0,n._)("li",d,[(0,n.Wm)(f,{to:"/admin/dashboard"},{default:(0,n.w5)((function(){return[g]})),_:1})]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.back_links,(function(e){return(0,n.wg)(),(0,n.iD)("li",p,[(0,n.Wm)(f,{to:e.route},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(e.title),1)]})),_:2},1032,["to"])])})),256)),"Dashboard"!==a.header?((0,n.wg)(),(0,n.iD)("li",m,(0,n.zw)(a.header),1)):(0,n.kq)("",!0)])])])])])}]])},1271:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(821);const i={props:{content:{type:String},link:{type:String}}};const r=(0,a(3744).Z)(i,[["render",function(e,t,a,i,r,s){var l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(l,{to:a.link,class:"btn btn-primary ml-3 mb-2"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)("Create "+a.content),1)]})),_:1},8,["to"])}]])},2758:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(821),i=(0,n._)("i",{class:"fas fa-pencil-alt"},null,-1),r=(0,n.Uk)(" Edit ");const s={props:{content:{type:String},link:{type:String},dataId:{type:Number}}};const l=(0,a(3744).Z)(s,[["render",function(e,t,a,s,l,o){var c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(c,{class:"btn btn-info btn-sm mr-3",to:{name:a.link,params:{id:a.dataId}}},{default:(0,n.w5)((function(){return[i,r]})),_:1},8,["to"])}]])},7116:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(821),i={class:"error-page"},r=(0,n._)("h2",{class:"headline text-warning"},"404",-1),s={class:"error-content"},l=(0,n._)("i",{class:"fas fa-exclamation-triangle text-warning"},null,-1);const o={props:{httpStatus:{type:Number},title:{type:String},description:{type:String}}};const c=(0,a(3744).Z)(o,[["render",function(e,t,a,o,c,u){return(0,n.wg)(),(0,n.iD)("div",i,[r,(0,n._)("div",s,[(0,n._)("h3",null,[l,(0,n.Uk)((0,n.zw)(a.title),1)]),(0,n._)("p",null,(0,n.zw)(a.description),1)])])}]])},2625:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(821),i={key:0,class:"card-tools col-8 mt-1"},r={class:"input-group"},s=(0,n._)("div",{class:"input-group-append"},[(0,n._)("button",{type:"submit",class:"btn btn-default"},[(0,n._)("i",{class:"fas fa-search"})])],-1);const l={props:["read"],emits:["searchData"],data:function(){return{searchData:null}},methods:{searchFunc:function(){this.$emit("searchData",1)}}};const o=(0,a(3744).Z)(l,[["render",function(e,t,a,l,o,c){return a.read?((0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("form",{onSubmit:t[1]||(t[1]=(0,n.iM)((function(e){return c.searchFunc(1)}),["prevent"]))},[(0,n._)("div",r,[(0,n.wy)((0,n._)("input",{type:"text",name:"table_search","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.searchData=e}),class:"form-control float-right",placeholder:"Search"},null,512),[[n.nr,o.searchData]]),s])],32)])):(0,n.kq)("",!0)}]])},618:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(821),i=(0,n._)("i",{class:"fas fa-folder"},null,-1),r=(0,n.Uk)(" View "),s=(0,n._)("i",{class:"fas fa-folder"},null,-1),l=(0,n.Uk)(" View ");const o={props:{data_name:{type:String},data_model:{type:String},data_id:{type:Number},variant_id:{type:Number,default:0,useDefaultForNull:!0}}};const c=(0,a(3744).Z)(o,[["render",function(e,t,a,o,c,u){var d=(0,n.up)("router-link");return""!==a.variant_id?((0,n.wg)(),(0,n.j4)(d,{key:0,class:"btn btn-primary btn-sm mr-3",to:{name:"transaction",params:{name:a.data_name,model:a.data_model,model_id:a.data_id,variant_id:a.variant_id}}},{default:(0,n.w5)((function(){return[i,r]})),_:1},8,["to"])):((0,n.wg)(),(0,n.j4)(d,{key:1,class:"btn btn-primary btn-sm mr-3",to:{name:"transaction",params:{name:a.data_name,model:a.data_model,model_id:a.data_id}}},{default:(0,n.w5)((function(){return[s,l]})),_:1},8,["to"]))}]])},1235:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var n=a(821),i={class:"content"},r={class:"container-fluid"},s={key:0,class:"row"},l={class:"col-12"},o={class:"card"},c={class:"card-header row"},u={class:"card-body table-responsive p-0"},d={class:"table table-hover text-nowrap"},g=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Stock"),(0,n._)("th",null,"Available Stock"),(0,n._)("th",null,"Quantity"),(0,n._)("th",null,"Operation")])],-1),p={class:"card-footer clearfix"},m={key:1,class:"card card-default"};var _=a(9027),k=a(4843),h=a(1271),f=a(2758),w=a(2625),v=a(7116),b=a(618),y=a(681),D=a(4775);const C={components:{Pagination:_.Z,ContentHeader:k.Z,CreateButton:h.Z,EditButton:f.Z,ViewButton:b.Z,Error:v.Z,Search:w.Z},data:function(){return{mainContent:"ItemStock",content:null,item_stocks:{},itemColor:null,search:null,currentPage:1,actions:{create:"",read:"",update:""}}},methods:{getContent:function(e){return e+"'s Stock"},checkAuthorizeActions:function(e){return(0,y.nv)(e)},checkUnauthorizeActions:function(e){return(0,y.T9)(e)},getData:function(e){this.item_stocks=e.item_stocks,this.itemColor=(0,y.s2)(e),this.content=this.getContent(this.itemColor),this.actions.read=!0},searchItemStocks:function(e){var t=this;window.axios.get("search_item_variant_stocks/"+this.$route.params.item_varaint_id+"?page="+e).then((function(e){"Loading"==e.data.message?(0,D.e)(t):t.getData(e.data)}))},getItemStocks:function(e){var t=this;window.axios.get("item_variant_stocks/"+this.$route.params.item_varaint_id+"?page="+e).then((function(e){"Loading"==e.data.message?(0,D.e)(t):t.getData(e.data)})).catch((function(e){(0,y.VR)(e,t,"read")}))}},created:function(){this.getItemStocks(1),(0,y.Lf)("ItemStock","create",this),(0,y.Lf)("ItemStock","update",this)}};const P=(0,a(3744).Z)(C,[["render",function(e,t,a,_,k,h){var f=(0,n.up)("ContentHeader"),w=(0,n.up)("Search"),v=(0,n.up)("CreateButton"),b=(0,n.up)("ViewButton"),y=(0,n.up)("EditButton"),D=(0,n.up)("Pagination"),C=(0,n.up)("Error");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(f,{header:k.content,back_links:[{route:"/admin/item",title:"Item"},{route:"/admin/item/variant/"+this.$route.params.item_varaint_id,title:k.itemColor}]},null,8,["header","back_links"]),(0,n._)("section",i,[(0,n._)("div",r,[h.checkAuthorizeActions(k.actions)?((0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",l,[(0,n._)("div",o,[(0,n._)("div",c,[(0,n.Wm)(w,{read:k.actions.read,ref:"searchModal",onSearchData:h.searchItemStocks},null,8,["read","onSearchData"]),k.actions.create?((0,n.wg)(),(0,n.j4)(v,{key:0,content:k.content,link:"/admin/item/stock/create/"+this.$route.params.item_varaint_id},null,8,["content","link"])):(0,n.kq)("",!0)]),k.actions.read?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("div",u,[(0,n._)("table",d,[g,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.item_stocks.data,(function(e,t){return(0,n.wg)(),(0,n.iD)("tr",null,[(0,n._)("td",null,(0,n.zw)(e.stock),1),(0,n._)("td",null,(0,n.zw)(e.available_stock),1),(0,n._)("td",null,(0,n.zw)(e.qty),1),(0,n._)("td",null,[(0,n.Wm)(b,{data_name:k.itemColor,data_model:k.mainContent,data_id:e.id,variant_id:e.item_variant_id},null,8,["data_name","data_model","data_id","variant_id"]),k.actions.update&&0==t?((0,n.wg)(),(0,n.j4)(y,{key:0,content:k.content,link:"item.stock.edit",dataId:e.id},null,8,["content","dataId"])):(0,n.kq)("",!0)])])})),256))])])]),(0,n._)("div",p,[(0,n.Wm)(D,{page:k.currentPage,lastPage:k.item_stocks.last_page,onGetData:h.getItemStocks,onSearchData:h.searchItemStocks,search:k.search,from:k.item_stocks.from,to:k.item_stocks.to,total:k.item_stocks.total},null,8,["page","lastPage","onGetData","onSearchData","search","from","to","total"])])],64)):(0,n.kq)("",!0)])])])):h.checkUnauthorizeActions(k.actions)?((0,n.wg)(),(0,n.iD)("div",m,[(0,n.Wm)(C,{httpStatus:403,title:"Permission Denied",description:"You are not allowed to do any permissions for Item Stock"})])):(0,n.kq)("",!0)])])],64)}]])},9027:(e,t,a)=>{a.d(t,{Z:()=>I});var n=a(821),i={"aria-label":"Page navigation"},r={key:0,class:"page-item"},s=[(0,n._)("span",{"aria-hidden":"true"},"«",-1),(0,n._)("span",{class:"sr-only"},"Previous",-1)],l={class:"page-item"},o=["onClick"],c=(0,n._)("li",{class:"page-item disabled"},[(0,n._)("a",{class:"page-link"},"...")],-1),u={key:0,class:"page-item active"},d={class:"page-link"},g={key:1,class:"page-item"},p=["onClick"],m={key:0,class:"page-item active"},_={class:"page-link"},k={key:1,class:"page-item"},h=["onClick"],f={class:"page-item"},w=["onClick"],v={class:"page-item active"},b={class:"page-link"},y={class:"page-item"},D=["onClick"],C={class:"page-item"},P=["onClick"],S={key:7,class:"page-item"},z={key:0,class:"page-item disabled"},Z=[(0,n._)("a",{class:"page-link"},"...",-1)],H={class:"page-item"},Y={class:"page-item"},V={key:9,class:"page-item"},$=[(0,n._)("span",{"aria-hidden":"true"},"»",-1),(0,n._)("span",{class:"sr-only"},"Next",-1)];const q={name:"Pagination",emits:["getData","searchData"],props:{ulClass:{type:String,default:"pagination pagination-sm pg-blue"},lastPage:{type:Number},page:{type:Number,default:1},from:{type:Number,default:1},to:{type:Number},total:{type:Number},search:{type:String}},methods:{updateValue:function(e){this.$emit(this.$props.search?"searchData":"getData",e)}}};const I=(0,a(3744).Z)(q,[["render",function(e,t,a,q,I,x){return(0,n.wg)(),(0,n.iD)("nav",i,[(0,n._)("ul",{class:(0,n.C_)(a.ulClass)},[a.page>1?((0,n.wg)(),(0,n.iD)("li",r,[(0,n._)("a",{class:"page-link","aria-label":"Previous",onClick:t[0]||(t[0]=function(e){return x.updateValue(a.page-1)})},s)])):(0,n.kq)("",!0),a.lastPage>10&&a.page>=8?((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(2,(function(e){return(0,n._)("li",l,[(0,n._)("a",{class:"page-link",onClick:function(t){return x.updateValue(e)}},(0,n.zw)(e),9,o)])})),64)),c],64)):(0,n.kq)("",!0),a.lastPage<=10?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:2},(0,n.Ko)(a.lastPage,(function(e){return(0,n.wg)(),(0,n.iD)(n.HY,null,[e==a.page?((0,n.wg)(),(0,n.iD)("li",u,[(0,n._)("a",d,(0,n.zw)(e),1)])):((0,n.wg)(),(0,n.iD)("li",g,[(0,n._)("a",{class:"page-link",onClick:function(t){return x.updateValue(e)}},(0,n.zw)(e),9,p)]))],64)})),256)):(0,n.kq)("",!0),a.page<8&&a.lastPage>10?((0,n.wg)(),(0,n.iD)(n.HY,{key:3},(0,n.Ko)(10,(function(e){return(0,n.wg)(),(0,n.iD)(n.HY,null,[e==a.page?((0,n.wg)(),(0,n.iD)("li",m,[(0,n._)("a",_,(0,n.zw)(e),1)])):((0,n.wg)(),(0,n.iD)("li",k,[(0,n._)("a",{class:"page-link",onClick:function(t){return x.updateValue(e)}},(0,n.zw)(e),9,h)]))],64)})),64)):(0,n.kq)("",!0),a.page>=8&&a.lastPage>10?((0,n.wg)(),(0,n.iD)(n.HY,{key:4},[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)([3,2,1],(function(e){return(0,n._)("li",f,[(0,n._)("a",{class:"page-link",onClick:function(t){return x.updateValue(a.page-e)}},(0,n.zw)(a.page-e),9,w)])})),64)),(0,n._)("li",v,[(0,n._)("a",b,(0,n.zw)(a.page),1)])],64)):(0,n.kq)("",!0),a.page>=8&&a.page+3<a.lastPage-1&&a.lastPage>10?((0,n.wg)(),(0,n.iD)(n.HY,{key:5},(0,n.Ko)([1,2,3],(function(e){return(0,n._)("li",y,[(0,n._)("a",{class:"page-link",onClick:function(t){return x.updateValue(a.page+e)}},(0,n.zw)(a.page+e),9,D)])})),64)):(0,n.kq)("",!0),a.page+2==a.lastPage-2&&a.lastPage>10?((0,n.wg)(),(0,n.iD)(n.HY,{key:6},(0,n.Ko)([1,2],(function(e){return(0,n._)("li",C,[(0,n._)("a",{class:"page-link",onClick:function(t){return x.updateValue(a.page+e)}},(0,n.zw)(a.page+e),9,P)])})),64)):(0,n.kq)("",!0),(a.page+1==a.lastPage-2||a.page+1==a.lastPage)&&a.lastPage>10?((0,n.wg)(),(0,n.iD)("li",S,[(0,n._)("a",{class:"page-link",onClick:t[1]||(t[1]=function(e){return x.updateValue(a.page+1)})},(0,n.zw)(a.page+1),1)])):(0,n.kq)("",!0),a.page<a.lastPage-1&&a.lastPage>10?((0,n.wg)(),(0,n.iD)(n.HY,{key:8},[a.lastPage-5>a.page?((0,n.wg)(),(0,n.iD)("li",z,Z)):(0,n.kq)("",!0),(0,n._)("li",H,[(0,n._)("a",{class:"page-link",onClick:t[2]||(t[2]=function(e){return x.updateValue(a.lastPage-1)})},(0,n.zw)(a.lastPage-1),1)]),(0,n._)("li",Y,[(0,n._)("a",{class:"page-link",onClick:t[3]||(t[3]=function(e){return x.updateValue(a.lastPage)})},(0,n.zw)(a.lastPage),1)])],64)):(0,n.kq)("",!0),a.lastPage>1&&a.page+1<=a.lastPage?((0,n.wg)(),(0,n.iD)("li",V,[(0,n._)("a",{class:"page-link","aria-label":"Next",onClick:t[4]||(t[4]=function(e){return x.updateValue(a.page+1)})},$)])):(0,n.kq)("",!0)],2)])}]])}}]);