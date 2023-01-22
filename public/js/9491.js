"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9491],{681:(e,a,t)=>{t.d(a,{Lf:()=>w,Mg:()=>c,OT:()=>h,P9:()=>v,PD:()=>y,Pi:()=>m,T9:()=>u,VR:()=>_,b6:()=>d,mR:()=>g,nv:()=>l,s2:()=>s,vc:()=>n,xZ:()=>o,y1:()=>f});var i=t(4775);function n(e){return e.getFullYear()+"-"+r(e.getMonth()+1)+"-"+r(e.getDate())+" "+r(e.getHours())+":"+r(e.getMinutes())+":00"}function r(e){return(e<10?"0":"")+e}function s(e){return e.item_variant.item_name+"'s "+e.item_variant.color_name}function o(e){var a=[];return e.length>0&&Object.keys(e).map((function(t){a.push(e[t].id)})),a}function c(e){var a=e-1;return 0==a?1:a}function l(e){return 1==e.create||1==e.read||1==e.update||1==e.delete}function u(e){return 0==e.create&&0==e.read&&0==e.update&&0==e.delete}function p(e){switch(e.slice(-1)){case"y":return e.slice(0,-1)+"ies";case"h":case"x":return e+"es";default:return e+"s"}}function d(e,a,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;switch(e.currentPage=a,i){case null:e.search=null,void 0!==e.$refs.deleteAll&&(e.$refs.searchModal.searchData=null,e.$refs.deleteAll.$el.checked=!1);var n=p(t),r=e.$route.name==t?n:"trash_"+n;return r+"?page=";case"search":e.search=e.$refs.searchModal.searchData;var s=e.$route.name==t?t+"_search":t+"_trash_search";return s+"?search="}}function h(e,a){e.map((function(e){e.$el.checked=a,e.$el.dispatchEvent(new Event("change"))}))}function f(e,a,t,i){switch(e){case!0:t.includes(a.id)||t.push(a.id),i.includes(a)||i.push(a);break;case!1:g(t,a.id),g(i,a)}}function m(e){e.length=0}function g(e,a){var t=e.indexOf(a);t>-1&&e.splice(t,1)}function w(e,a,t){window.axios.get("check_permission/"+e+"/"+a).then((function(e){"Loading"==e.data.message?(0,i.eQ)(t):t.actions[a]=!0})).catch((function(e){_(e,t)}))}function v(e,a,t){switch(e.name){case t:a.push("/admin/"+t+"_bin"),e.name=t+"_bin";break;case t+"_bin":a.push("/admin/"+t),e.name=t}}function _(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e.response)switch(e.response.status){case 401:a.$swal("Unauthenticated","You are not login","error"),setTimeout((function(){window.location.href="/admin/login"}),2e3);break;case 403:a.actions[t]=!1,a.errors&&(a.errors.error_status=403,a.errors.error_title="Permission Denied",a.errors.error_description="You are not allowed to "+t+" "+a.current);break;case 404:a.actions[t]=!1,a.errors.error_status=404,a.errors.error_title="Page Not Found",a.errors.error_description="You are in the wrong page"}}function y(e){return e[0].toLowerCase()+e.substring(1)}},1006:(e,a,t)=>{t.d(a,{Z:()=>o});var i=t(821),n={type:"file",name:"multiple"};var r=t(681);const s={data:function(){return{array:[],picArray:[],actions:{delete:""}}},props:{pics:{type:Array},multiple:{type:Boolean,default:!1},storage_path:{type:String,default:""},delete_path:{type:String,default:""},delete_all_path:{type:String,default:""},changeData:{type:Number,default:0}},watch:{changeData:{handler:function(){$(this.$el).fileinput("destroy"),this.picArray=[],this.array=[]}},pics:{deep:!0,handler:function(){var e=this,a=this.$props.pics,t=window.location.pathname.substring(1);if(0===a.length)e.picArray=[],e.array=[];else a.map((function(a){var i=window.location.href.replace(t,e.$props.storage_path+a.filename);e.picArray.push(i),e.array.push({caption:a.filename,width:"35px",url:window.location.href.replace(t,e.$props.delete_path+a.id),key:a.id,downloadURL:i,type:e.checkExtension(a.filename)})}));!function(e){$(e.$el).fileinput({initialPreview:e.picArray,initialPreviewAsData:!0,initialPreviewConfig:e.array,theme:"fa",overwriteInitial:1!=e.$props.multiple,maxFileSize:22048,maxFilesNum:10,allowedFileExtensions:["jpg","gif","png","jpeg","webp"]})}(e),$(e.$el).on("fileclear",(function(){var a=this;e.array.length>0&&($(e.$el).fileinput("refresh",{initialPreview:[],initialPreviewAsData:!0,initialPreviewConfig:[],theme:"fa",overwriteInitial:!0,maxFileSize:22048,maxFilesNum:10,allowedFileExtensions:["jpg","gif","png","jpeg","webp"]}),window.axios.delete(e.$props.delete_all_path+e.$route.params.id).then((function(e){console.log(e.data.message)})).catch((function(e){(0,r.VR)(e,a,"delete")}))),e.array=[],e.picArray=[],e.$emit("removed")}))}}},methods:{checkExtension:function(e){switch(e.substring(e.lastIndexOf(".")+1)){case"pdf":return"pdf";case"jpg":case"jpeg":case"png":case"webp":case"gif":return"image";case"webm":case"mkv":case"flv":case"vob":case"ogv":case"ogg":case"drc":case"gif":case"gifv":case"mng":case"avi":case"MTS":case"M2TS":case"mov":case"qt":case"wmv":return"movie";default:return"object"}}},mounted:function(){var e=this;this.$props.multiple&&$(e.$el).attr("multiple",!0),isNaN(e.$route.params.id)&&$(e.$el).fileinput({initialPreviewAsData:!0,theme:"fa",overwriteInitial:!0,maxFileSize:22048,maxFilesNum:10,allowedFileExtensions:["jpg","gif","png","jpeg","webp"]})}};const o=(0,t(3744).Z)(s,[["render",function(e,a,t,r,s,o){return(0,i.wg)(),(0,i.iD)("input",n)}]])},9491:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var i=t(821),n={class:"modal-content"},r=(0,i._)("div",{class:"modal-header"},[(0,i._)("h4",{class:"modal-title"},"Images Upload")],-1),s={class:"modal-body"},o={class:"modal-footer"},c=(0,i._)("i",{class:"ion ion-upload"},null,-1);var l=t(681);const u={components:{File:t(1006).Z},data:function(){return{pics:[],formData:new FormData,fileChange:0}},mounted:function(){var e=this,a=this.$route.params.id;window.axios.get("item_variant_images/"+a).then((function(a){e.pics=a.data.images})).catch((function(a){(0,l.VR)(a,e,"read")}))},methods:{removePics:function(){this.pics=[]},setPic:function(e){var a=this;this.formData.getAll("pics[]").length>0&&this.formData.delete("pics[]"),Array.from(e.target.files).forEach((function(e){a.formData.append("pics[]",e)}))},uploadPics:function(){var e=this;window.axios.post("upload_item_variant_images/"+this.$route.params.id,this.formData).then((function(a){"Loading"==a.data.message?showSwalLoading(e):(e.$swal("Success",a.data.message,"success"),e.pics=a.data.images,e.fileChange++)})).catch((function(a){(0,l.VR)(a,e,"read")}))}}};const p=(0,t(3744).Z)(u,[["render",function(e,a,t,l,u,p){var d=(0,i.up)("File");return(0,i.wg)(),(0,i.iD)(i.HY,null,[((0,i.wg)(),(0,i.j4)((0,i.LL)("style"),null,{default:(0,i.w5)((function(){return[(0,i.Uk)(" .modal-dialog-person { width: 80% !important; height: 100% !important; padding: 0 !important; max-width: none !important; } .fileinput-upload-button, .kv-file-upload{ display: none !important; } ")]})),_:1})),(0,i._)("div",n,[r,(0,i._)("div",s,[(0,i.Wm)(d,{changeData:u.fileChange,onChange:p.setPic,pics:u.pics,onRemoved:p.removePics,multiple:!0,storage_path:"image/item_images/",delete_path:"admin_api/item_image_delete/",delete_all_path:"delete_item_images/"},null,8,["changeData","onChange","pics","onRemoved"])]),(0,i._)("div",o,[(0,i._)("button",{type:"button",class:"btn btn-primary",style:{"margin-right":"50%"},onClick:a[0]||(a[0]=function(){return p.uploadPics&&p.uploadPics.apply(p,arguments)})},[c,(0,i.Uk)(" Upload")])])])],64)}]])}}]);