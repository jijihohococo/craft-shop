"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9616],{681:(e,t,r)=>{r.d(t,{Lf:()=>b,Mg:()=>c,OT:()=>p,P9:()=>_,PD:()=>w,Pi:()=>h,T9:()=>u,VR:()=>g,b6:()=>f,mR:()=>v,nv:()=>l,s2:()=>i,vc:()=>a,xZ:()=>o,y1:()=>m});var n=r(4775);function a(e){return e.getFullYear()+"-"+s(e.getMonth()+1)+"-"+s(e.getDate())+" "+s(e.getHours())+":"+s(e.getMinutes())+":00"}function s(e){return(e<10?"0":"")+e}function i(e){return e.item_variant.item_name+"'s "+e.item_variant.color_name}function o(e){var t=[];return e.length>0&&Object.keys(e).map((function(r){t.push(e[r].id)})),t}function c(e){var t=e-1;return 0==t?1:t}function l(e){return 1==e.create||1==e.read||1==e.update||1==e.delete}function u(e){return 0==e.create&&0==e.read&&0==e.update&&0==e.delete}function d(e){switch(e.slice(-1)){case"y":return e.slice(0,-1)+"ies";case"h":case"x":return e+"es";default:return e+"s"}}function f(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;switch(e.currentPage=t,n){case null:e.search=null,void 0!==e.$refs.deleteAll&&(e.$refs.searchModal.searchData=null,e.$refs.deleteAll.$el.checked=!1);var a=d(r),s=e.$route.name==r?a:"trash_"+a;return s+"?page=";case"search":e.search=e.$refs.searchModal.searchData;var i=e.$route.name==r?r+"_search":r+"_trash_search";return i+"?search="}}function p(e,t){e.map((function(e){e.$el.checked=t,e.$el.dispatchEvent(new Event("change"))}))}function m(e,t,r,n){switch(e){case!0:r.includes(t.id)||r.push(t.id),n.includes(t)||n.push(t);break;case!1:v(r,t.id),v(n,t)}}function h(e){e.length=0}function v(e,t){var r=e.indexOf(t);r>-1&&e.splice(r,1)}function b(e,t,r){window.axios.get("check_permission/"+e+"/"+t).then((function(e){"Loading"==e.data.message?(0,n.e)(r):r.actions[t]=!0})).catch((function(e){g(e,r)}))}function _(e,t,r){switch(e.name){case r:t.push("/admin/"+r+"_bin"),e.name=r+"_bin";break;case r+"_bin":t.push("/admin/"+r),e.name=r}}function g(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e.response)switch(e.response.status){case 401:t.$swal("Unauthenticated","You are not login","error"),setTimeout((function(){window.location.href="/admin/login"}),2e3);break;case 403:t.actions[r]=!1,t.errors&&(t.errors.error_status=403,t.errors.error_title="Permission Denied",t.errors.error_description="You are not allowed to "+r+" "+t.current);break;case 404:t.actions[r]=!1,t.errors.error_status=404,t.errors.error_title="Page Not Found",t.errors.error_description="You are in the wrong page"}}function w(e){return e[0].toLowerCase()+e.substring(1)}},4775:(e,t,r)=>{function n(e){e.$swal({title:"Now loading",html:'<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',allowEscapeKey:!1,allowOutsideClick:!1,timer:2e3,onOpen:function(){swal.showLoading()}}).then((function(){}),(function(t){"timer"===t&&e.$swal.close}))}r.d(t,{e:()=>n})},4843:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(821),a={class:"content-header"},s={class:"container-fluid"},i={class:"row mb-2"},o={class:"col-sm-6"},c={class:"m-0"},l={class:"col-sm-6"},u={class:"breadcrumb float-sm-right"},d={class:"breadcrumb-item"},f=(0,n.Uk)("Home"),p={class:"breadcrumb-item"},m={key:0,class:"breadcrumb-item active"};const h={name:"ContentHeader",props:{header:{type:String},back_links:{type:Array}}};const v=(0,r(3744).Z)(h,[["render",function(e,t,r,h,v,b){var _=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",s,[(0,n._)("div",i,[(0,n._)("div",o,[(0,n._)("h1",c,(0,n.zw)(r.header),1)]),(0,n._)("div",l,[(0,n._)("ol",u,[(0,n._)("li",d,[(0,n.Wm)(_,{to:"/admin/dashboard"},{default:(0,n.w5)((function(){return[f]})),_:1})]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.back_links,(function(e){return(0,n.wg)(),(0,n.iD)("li",p,[(0,n.Wm)(_,{to:e.route},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(e.title),1)]})),_:2},1032,["to"])])})),256)),"Dashboard"!==r.header?((0,n.wg)(),(0,n.iD)("li",m,(0,n.zw)(r.header),1)):(0,n.kq)("",!0)])])])])])}]])},2758:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(821),a=(0,n._)("i",{class:"fas fa-pencil-alt"},null,-1),s=(0,n.Uk)(" Edit ");const i={props:{content:{type:String},link:{type:String},dataId:{type:Number}}};const o=(0,r(3744).Z)(i,[["render",function(e,t,r,i,o,c){var l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(l,{class:"btn btn-info btn-sm mr-3",to:{name:r.link,params:{id:r.dataId}}},{default:(0,n.w5)((function(){return[a,s]})),_:1},8,["to"])}]])},7116:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(821),a={class:"error-page"},s=(0,n._)("h2",{class:"headline text-warning"},"404",-1),i={class:"error-content"},o=(0,n._)("i",{class:"fas fa-exclamation-triangle text-warning"},null,-1);const c={props:{httpStatus:{type:Number},title:{type:String},description:{type:String}}};const l=(0,r(3744).Z)(c,[["render",function(e,t,r,c,l,u){return(0,n.wg)(),(0,n.iD)("div",a,[s,(0,n._)("div",i,[(0,n._)("h3",null,[o,(0,n.Uk)((0,n.zw)(r.title),1)]),(0,n._)("p",null,(0,n.zw)(r.description),1)])])}]])},618:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(821),a=(0,n._)("i",{class:"fas fa-folder"},null,-1),s=(0,n.Uk)(" View "),i=(0,n._)("i",{class:"fas fa-folder"},null,-1),o=(0,n.Uk)(" View ");const c={props:{data_name:{type:String},data_model:{type:String},data_id:{type:Number},variant_id:{type:Number,default:0,useDefaultForNull:!0}}};const l=(0,r(3744).Z)(c,[["render",function(e,t,r,c,l,u){var d=(0,n.up)("router-link");return""!==r.variant_id?((0,n.wg)(),(0,n.j4)(d,{key:0,class:"btn btn-primary btn-sm mr-3",to:{name:"transaction",params:{name:r.data_name,model:r.data_model,model_id:r.data_id,variant_id:r.variant_id}}},{default:(0,n.w5)((function(){return[a,s]})),_:1},8,["to"])):((0,n.wg)(),(0,n.j4)(d,{key:1,class:"btn btn-primary btn-sm mr-3",to:{name:"transaction",params:{name:r.data_name,model:r.data_model,model_id:r.data_id}}},{default:(0,n.w5)((function(){return[i,o]})),_:1},8,["to"]))}]])},9616:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(821),a={class:"content"},s={class:"container-fluid"},i={key:0,class:"row"},o={class:"col-12"},c={class:"card"},l={key:0,class:"card-body table-responsive p-0"},u={class:"table table-hover text-nowrap"},d=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Name"),(0,n._)("th",null,"Operation")])],-1),f=(0,n._)("td",null,"FAQ",-1),p={class:"text-left"},m=(0,n._)("i",{class:"fas fa-pencil-alt"},null,-1),h=(0,n.Uk)(" Edit "),v={key:1,class:"card card-default"};var b=r(4843),_=r(2758),g=r(618),w=r(7116),y=r(4176),k=r(681),A=r(4775);const O={components:{ContentHeader:b.Z,EditButton:_.Z,ViewButton:g.Z,Error:w.Z,VLazyImage:y.Z},data:function(){return{main_content:"FAQ",content:"Faq",actions:{read:"",update:""}}},methods:{checkAuthorizeActions:function(e){return(0,k.nv)(e)},checkUnauthorizeActions:function(e){return 0==e.read&&0==e.update},getFaqs:function(){var e=this;window.axios.get("faqs").then((function(t){"Loading"==t.data.message?(0,A.e)(e):e.actions.read=!0})).catch((function(t){(0,k.VR)(t,e,"read")}))}},created:function(){this.getFaqs(),(0,k.Lf)(this.content,"update",this)}};const D=(0,r(3744).Z)(O,[["render",function(e,t,r,b,_,g){var w=(0,n.up)("ContentHeader"),y=(0,n.up)("router-link"),k=(0,n.up)("Error");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(w,{header:_.main_content},null,8,["header"]),(0,n._)("section",a,[(0,n._)("div",s,[g.checkAuthorizeActions(_.actions)?((0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",o,[(0,n._)("div",c,[_.actions.read?((0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("table",u,[d,(0,n._)("tbody",null,[(0,n._)("tr",null,[f,(0,n._)("td",p,[(0,n.Wm)(y,{class:"btn btn-primary btn-sm mr-3",to:{name:"faq.edit"}},{default:(0,n.w5)((function(){return[m,h]})),_:1},8,["to"])])])])])])):(0,n.kq)("",!0)])])])):g.checkUnauthorizeActions(_.actions)?((0,n.wg)(),(0,n.iD)("div",v,[(0,n.Wm)(k,{httpStatus:403,title:"Permission Denied",description:"You are not allowed to do any permissions for Faq"})])):(0,n.kq)("",!0)])])],64)}]])},4176:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(821),a=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},srcset:{type:String},intersectionOptions:{type:Object,default:()=>({})},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,setup(e,{attrs:t,slots:r,emit:a}){const d=(0,n.iH)(null),f=(0,n.qj)({observer:null,intersected:!1,loaded:!1}),p=(0,n.Fl)((()=>f.intersected&&e.src?e.src:e.srcPlaceholder)),m=(0,n.Fl)((()=>!(!f.intersected||!e.srcset)&&e.srcset)),h=()=>{d.value&&d.value.getAttribute("src")!==e.srcPlaceholder&&(f.loaded=!0,a("load",d.value))},v=()=>a("error",d.value);return(0,n.bv)((()=>{"IntersectionObserver"in window&&(f.observer=new IntersectionObserver((e=>{e[0].isIntersecting&&(f.intersected=!0,f.observer.disconnect(),a("intersect"))}),e.intersectionOptions),f.observer.observe(d.value))})),(0,n.Jd)((()=>{"IntersectionObserver"in window&&f.observer&&f.observer.disconnect()})),()=>{const a=(0,n.h)("img",(b=((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&u(e,r,t[r]);return e})({ref:d,src:p.value,srcset:m.value||null},t),_={class:[t.class,"v-lazy-image",{"v-lazy-image-loaded":f.loaded}],onLoad:h,onError:v},s(b,i(_))));var b,_;return e.usePicture?(0,n.h)("picture",{ref:d,onLoad:h},f.intersected?[r.default,a]:[a]):a}}}}}]);