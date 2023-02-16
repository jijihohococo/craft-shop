/*! For license information please see 2703.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2703],{3268:(t,e,r)=>{r.d(e,{j:()=>o});var n=r(7282),i=r(4775),a=r(681),o={mixins:[n.B],data:function(){return{return_link:"",errors:{error_status:0,error_title:"",error_description:""},actions:{create:"",update:""},current:null}},methods:{returnBack:function(t){"Loading"==t.data.message?(0,i.eQ)(this):(this.$swal("Success",t.data.message,"success"),this.$router.push({path:"/admin/"+this.return_link}))},getLink:function(t){return"/admin/"+(0,a.PD)(t).replace(/([A-Z])/g,"_$1").trim().toLowerCase()}}}},7282:(t,e,r)=>{r.d(e,{B:()=>a});var n=r(4843),i=r(7116),a={components:{ContentHeader:n.Z,Error:i.Z},methods:{checkString:function(t){if(null==t||0===/^\s*$/.test(t))return e;var e=t.toString(),r=e.toLowerCase(),n='<span class="text-primary">',i="</span>";if(null!==this.search){var a=this.search,o=this.search.toLowerCase();if(r==o)return n+e.slice(0,a.length)+i;if(r.includes(o)){var s=e.toLowerCase().indexOf(o),c="";return 0==s?c=n+e.slice(s,a.length)+i+e.slice(s+a.length,e.length):s+1<=e.length&&(c=e.slice(0,s)+n+e.slice(s,s+a.length)+e.slice(s+a.length,a.length)+i+e.slice(s+a.length,e.length)),c}}return e}}}},681:(t,e,r)=>{r.d(e,{Lf:()=>v,Mg:()=>c,OT:()=>h,P9:()=>w,PD:()=>b,Pi:()=>m,T9:()=>l,VR:()=>y,b6:()=>f,mR:()=>g,nv:()=>u,s2:()=>o,vc:()=>i,xZ:()=>s,y1:()=>p});var n=r(4775);function i(t){return t.getFullYear()+"-"+a(t.getMonth()+1)+"-"+a(t.getDate())+" "+a(t.getHours())+":"+a(t.getMinutes())+":00"}function a(t){return(t<10?"0":"")+t}function o(t){return t.item_variant.item_name+"'s "+t.item_variant.color_name}function s(t){var e=[];return t.length>0&&Object.keys(t).map((function(r){e.push(t[r].id)})),e}function c(t){var e=t-1;return 0==e?1:e}function u(t){return 1==t.create||1==t.read||1==t.update||1==t.delete}function l(t){return 0==t.create&&0==t.read&&0==t.update&&0==t.delete}function d(t){switch(t.slice(-1)){case"y":return t.slice(0,-1)+"ies";case"h":case"x":return t+"es";default:return t+"s"}}function f(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;switch(t.currentPage=e,n){case null:t.search=null,void 0!==t.$refs.deleteAll&&(t.$refs.searchModal.searchData=null,t.$refs.deleteAll.$el.checked=!1);var i=d(r),a=t.$route.name==r?i:"trash_"+i;return a+"?page=";case"search":t.search=t.$refs.searchModal.searchData;var o=t.$route.name==r?r+"_search":r+"_trash_search";return o+"?search="}}function h(t,e){t.map((function(t){t.$el.checked=e,t.$el.dispatchEvent(new Event("change"))}))}function p(t,e,r,n){switch(t){case!0:r.includes(e.id)||r.push(e.id),n.includes(e)||n.push(e);break;case!1:g(r,e.id),g(n,e)}}function m(t){t.length=0}function g(t,e){var r=t.indexOf(e);r>-1&&t.splice(r,1)}function v(t,e,r){window.axios.get("check_permission/"+t+"/"+e).then((function(t){"Loading"==t.data.message?(0,n.eQ)(r):r.actions[e]=!0})).catch((function(t){y(t,r)}))}function w(t,e,r){switch(t.name){case r:e.push("/admin/"+r+"_bin"),t.name=r+"_bin";break;case r+"_bin":e.push("/admin/"+r),t.name=r}}function y(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t.response)switch(t.response.status){case 401:e.$swal("Unauthenticated","You are not login","error"),setTimeout((function(){window.location.href="/admin/login"}),2e3);break;case 403:e.actions[r]=!1,e.errors&&(e.errors.error_status=403,e.errors.error_title="Permission Denied",e.errors.error_description="You are not allowed to "+r+" "+e.current);break;case 404:e.actions[r]=!1,e.errors.error_status=404,e.errors.error_title="Page Not Found",e.errors.error_description="You are in the wrong page"}}function b(t){return t[0].toLowerCase()+t.substring(1)}},4775:(t,e,r)=>{function n(t){return parseInt(t).toString()}function i(t){t.$swal({title:"Now loading",html:'<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',allowEscapeKey:!1,allowOutsideClick:!1,timer:2e3,onOpen:function(){swal.showLoading()}}).then((function(){}),(function(e){"timer"===e&&t.$swal.close}))}r.d(e,{S2:()=>n,eQ:()=>i})},4843:(t,e,r)=>{r.d(e,{Z:()=>m});var n=r(821),i={class:"content-header"},a={class:"container-fluid"},o={class:"row mb-2"},s={class:"col-sm-6"},c={class:"m-0"},u={class:"col-sm-6"},l={class:"breadcrumb float-sm-right"},d={class:"breadcrumb-item"},f={class:"breadcrumb-item"},h={key:0,class:"breadcrumb-item active"};const p={name:"ContentHeader",props:{header:{type:String},back_links:{type:Array}}};const m=(0,r(3744).Z)(p,[["render",function(t,e,r,p,m,g){var v=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",a,[(0,n._)("div",o,[(0,n._)("div",s,[(0,n._)("h1",c,(0,n.zw)(r.header),1)]),(0,n._)("div",u,[(0,n._)("ol",l,[(0,n._)("li",d,[(0,n.Wm)(v,{to:"/admin/dashboard"},{default:(0,n.w5)((function(){return[(0,n.Uk)("Home")]})),_:1})]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.back_links,(function(t){return(0,n.wg)(),(0,n.iD)("li",f,[(0,n.Wm)(v,{to:t.route},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(t.title),1)]})),_:2},1032,["to"])])})),256)),"Dashboard"!==r.header?((0,n.wg)(),(0,n.iD)("li",h,(0,n.zw)(r.header),1)):(0,n.kq)("",!0)])])])])])}]])},7116:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(821),i={class:"error-page"},a=(0,n._)("h2",{class:"headline text-warning"},"404",-1),o={class:"error-content"},s=(0,n._)("i",{class:"fas fa-exclamation-triangle text-warning"},null,-1);const c={props:{httpStatus:{type:Number},title:{type:String},description:{type:String}}};const u=(0,r(3744).Z)(c,[["render",function(t,e,r,c,u,l){return(0,n.wg)(),(0,n.iD)("div",i,[a,(0,n._)("div",o,[(0,n._)("h3",null,[s,(0,n.Uk)((0,n.zw)(r.title),1)]),(0,n._)("p",null,(0,n.zw)(r.description),1)])])}]])},7170:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(821),i={type:"file",name:"multiple"};var a=r(681);const o={data:function(){return{array:[],picArray:[],actions:{delete:""}}},props:{pics:{type:Array},multiple:{type:Boolean,default:!1},storage_path:{type:String,default:""},delete_path:{type:String,default:""},delete_all_path:{type:String,default:""}},watch:{pics:{deep:!0,handler:function(){var t=this,e=this.$props.pics;this.picArray.length=0,this.array.length=0,e.length>0&&this.addPics(e,t),this.changeFileInput(t),$(t.$el).on("fileclear",(function(){var e=this;t.array.length>0&&($(t.$el).fileinput("refresh",{initialPreview:[],initialPreviewAsData:!0,initialPreviewConfig:[],theme:"fa",overwriteInitial:!0,maxFileSize:22048,maxFilesNum:10,allowedFileExtensions:["jpg","gif","png","jpeg","webp"]}),window.axios.delete(t.$props.delete_all_path+t.$route.params.id).then((function(t){console.log(t.data.message)})).catch((function(t){(0,a.VR)(t,e,"delete")}))),t.array=[],t.picArray=[],t.$emit("removed")}))}}},methods:{changeFileInput:function(t){$(t.$el).fileinput("destroy"),$(t.$el).fileinput({initialPreview:t.picArray,initialPreviewAsData:!0,initialPreviewConfig:t.array,theme:"fa",overwriteInitial:1!=t.$props.multiple,maxFileSize:22048,maxFilesNum:10,allowedFileExtensions:["jpg","gif","png","jpeg","webp"]})},addPics:function(t,e){var r=window.location.pathname.substring(1);t.map((function(t){var n=window.location.href.replace(r,e.$props.storage_path+t.filename);e.picArray.push(n),e.array.push({caption:t.filename,width:"35px",url:window.location.href.replace(r,e.$props.delete_path+t.id),key:t.id,downloadURL:n})}))},checkExtension:function(t){switch(t.substring(t.lastIndexOf(".")+1)){case"pdf":return"pdf";case"jpg":case"jpeg":case"png":case"webp":case"gif":return"image";case"webm":case"mkv":case"flv":case"vob":case"ogv":case"ogg":case"drc":case"gif":case"gifv":case"mng":case"avi":case"MTS":case"M2TS":case"mov":case"qt":case"wmv":return"movie";default:return"object"}}},mounted:function(){var t=this;this.$props.multiple&&$(t.$el).attr("multiple",!0),isNaN(t.$route.params.id)&&$(t.$el).fileinput({initialPreviewAsData:!0,theme:"fa",overwriteInitial:!0,maxFileSize:22048,maxFilesNum:10,allowedFileExtensions:["jpg","gif","png","jpeg","webp"]})}};const s=(0,r(3744).Z)(o,[["render",function(t,e,r,a,o,s){return(0,n.wg)(),(0,n.iD)("input",i)}]])},2703:(t,e,r)=>{r.r(e),r.d(e,{default:()=>S});var n=r(821),i={class:"content"},a={class:"container-fluid"},o={class:"card card-default"},s={class:"card-body"},c={class:"row"},u={class:"col-md-12"},l={class:"form-group"},d=(0,n._)("label",null,"Name",-1),f={key:0,class:"invalid-feedback"},h={class:"form-group"},p=(0,n._)("label",null,"Picture",-1),m={key:0,class:"invalid-feedback",style:{display:"block!important"}},g=(0,n._)("div",{class:"card-footer"},[(0,n._)("button",{type:"submit",class:"btn btn-primary"},"Submit")],-1);var v=r(681),w=r(4775),y=r(7170),b=r(3268);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function k(){k=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),o=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return D()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=b(o,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,o),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function d(){}function f(){}function h(){}var p={};s(p,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==e&&r.call(g,i)&&(p=g);var v=h.prototype=d.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){function n(i,a,o,s){var c=u(t[i],t,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==_(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(d).then((function(t){l.value=t,o(l)}),(function(t){return n("throw",t,o,s)}))}s(c.arg)}var i;this._invoke=function(t,r){function a(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:D}}function D(){return{value:void 0,done:!0}}return f.prototype=h,s(v,"constructor",h),s(h,"constructor",f),f.displayName=s(h,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,o,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},w(y.prototype),s(y.prototype,a,(function(){return this})),t.AsyncIterator=y,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new y(c(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(v),s(v,o,"Generator"),s(v,i,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function x(t,e,r,n,i,a,o){try{var s=t[a](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,i)}function $(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function o(t){x(a,n,i,o,s,"next",t)}function s(t){x(a,n,i,o,s,"throw",t)}o(void 0)}))}}const L={components:{File:y.Z},mixins:[b.j],data:function(){return{content:"Brand",return_link:"brand",fields:{name:"",pic:"",pics:[],count:0},formData:new FormData}},created:function(){var t=this;return $(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.current=isNaN(t.$route.params.id)?"create":"update",(0,v.Lf)(t.content,t.current,t),"update"!=t.current){e.next=5;break}return e.next=5,t.getBrandData(t.$route.params.id);case 5:case"end":return e.stop()}}),e)})))()},methods:{removePic:function(){this.fields.pic=""},setPic:function(t){this.fields.pic=t.target.files[0],0==this.count&&(this.fields.pics=[]),this.count++},getFormData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e="string"!=typeof this.fields.pic||isNaN(this.$route.params.id)?this.fields.pic:"";return this.formData.set("name",this.fields.name),this.formData.set("pic",e),null!==t&&this.formData.append("_method","PATCH"),this.formData},createBrand:function(){var t=this;window.axios.post("brands",this.getFormData()).then((function(e){t.returnBack(e)})).catch((function(e){422==e.response.status?t.errors=e.response.data.errors:(0,v.VR)(e,t,"create")}))},updateBrand:function(){var t=this;window.axios.post("brands/".concat(this.$route.params.id),this.getFormData("update")).then((function(e){t.returnBack(e)})).catch((function(e){422==e.response.status?t.errors=e.response.data.errors:(0,v.VR)(e,t,"update")}))},getBrandData:function(t){var e=this;return $(k().mark((function r(){return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,window.axios.get("brands/"+t+"/edit").then((function(t){"Loading"==t.data.message?(0,w.eQ)(e):(e.fields=t.data.brand,e.fields.pics=[{filename:e.fields.pic,id:isNaN(e.$route.params.id)?null:e.$route.params.id}])})).catch((function(t){(0,v.VR)(t,e,"update")}));case 2:case"end":return r.stop()}}),r)})))()}}};const S=(0,r(3744).Z)(L,[["render",function(t,e,r,v,w,y){var b=this,_=(0,n.up)("ContentHeader"),k=(0,n.up)("Error"),x=(0,n.up)("File");return(0,n.wg)(),(0,n.iD)(n.HY,null,[((0,n.wg)(),(0,n.j4)((0,n.LL)("style"),null,{default:(0,n.w5)((function(){return[(0,n.Uk)(" .fileinput-upload-button, .kv-file-upload, .fileinput-remove, .kv-file-remove{ display: none !important; } ")]})),_:1})),(0,n.Wm)(_,{header:isNaN(this.$route.params.id)?"Create "+w.content:"Update "+w.content,back_links:[{route:"/admin/brand",title:w.content}]},null,8,["header","back_links"]),(0,n._)("section",i,[(0,n._)("div",a,[(0,n._)("div",o,[0==t.actions[t.current]?((0,n.wg)(),(0,n.j4)(k,{key:0,httpStatus:t.errors.error_status,title:t.errors.error_title,description:t.errors.error_description},null,8,["httpStatus","title","description"])):t.actions[t.current]?((0,n.wg)(),(0,n.iD)("form",{key:1,enctype:"multipart/form-data",onSubmit:e[1]||(e[1]=(0,n.iM)((function(t){return isNaN(b.$route.params.id)?y.createBrand():y.updateBrand()}),["prevent"]))},[(0,n._)("div",s,[(0,n._)("div",c,[(0,n._)("div",u,[(0,n._)("div",l,[d,(0,n.wy)((0,n._)("input",{type:"text",class:(0,n.C_)([t.errors&&t.errors.name?"form-control is-invalid":"form-control"]),placeholder:"Name","onUpdate:modelValue":e[0]||(e[0]=function(t){return w.fields.name=t})},null,2),[[n.nr,w.fields.name]]),t.errors&&t.errors.name?((0,n.wg)(),(0,n.iD)("strong",f,(0,n.zw)(t.errors.name[0]),1)):(0,n.kq)("",!0)]),(0,n._)("div",h,[p,(0,n.Wm)(x,{onChange:y.setPic,pics:this.fields.pics,onRemoved:y.removePic,storage_path:"image/brand_images/"},null,8,["onChange","pics","onRemoved"]),t.errors&&t.errors.pic?((0,n.wg)(),(0,n.iD)("strong",m,(0,n.zw)(t.errors.pic[0]),1)):(0,n.kq)("",!0)])])])]),g],32)):(0,n.kq)("",!0)])])])],64)}]])}}]);