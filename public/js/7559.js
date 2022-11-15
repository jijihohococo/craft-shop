/*! For license information please see 7559.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7559],{681:(t,e,r)=>{r.d(e,{Lf:()=>g,Mg:()=>s,OT:()=>f,P9:()=>w,PD:()=>b,Pi:()=>v,T9:()=>l,VR:()=>y,b6:()=>h,mR:()=>m,nv:()=>u,s2:()=>i,vc:()=>a,xZ:()=>c,y1:()=>p});var n=r(4775);function a(t){return t.getFullYear()+"-"+o(t.getMonth()+1)+"-"+o(t.getDate())+" "+o(t.getHours())+":"+o(t.getMinutes())+":00"}function o(t){return(t<10?"0":"")+t}function i(t){return t.item_variant.item_name+"'s "+t.item_variant.color_name}function c(t){var e=[];return t.length>0&&Object.keys(t).map((function(r){e.push(t[r].id)})),e}function s(t){var e=t-1;return 0==e?1:e}function u(t){return 1==t.create||1==t.read||1==t.update||1==t.delete}function l(t){return 0==t.create&&0==t.read&&0==t.update&&0==t.delete}function d(t){switch(t.slice(-1)){case"y":return t.slice(0,-1)+"ies";case"h":case"x":return t+"es";default:return t+"s"}}function h(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;switch(t.currentPage=e,n){case null:t.search=null,void 0!==t.$refs.deleteAll&&(t.$refs.searchModal.searchData=null,t.$refs.deleteAll.$el.checked=!1);var a=d(r),o=t.$route.name==r?a:"trash_"+a;return o+"?page=";case"search":t.search=t.$refs.searchModal.searchData;var i=t.$route.name==r?r+"_search":r+"_trash_search";return i+"?search="}}function f(t,e){t.map((function(t){t.$el.checked=e,t.$el.dispatchEvent(new Event("change"))}))}function p(t,e,r,n){switch(t){case!0:r.includes(e.id)||r.push(e.id),n.includes(e)||n.push(e);break;case!1:m(r,e.id),m(n,e)}}function v(t){t.length=0}function m(t,e){var r=t.indexOf(e);r>-1&&t.splice(r,1)}function g(t,e,r){window.axios.get("check_permission/"+t+"/"+e).then((function(t){"Loading"==t.data.message?(0,n.e)(r):r.actions[e]=!0})).catch((function(t){y(t,r)}))}function w(t,e,r){switch(t.name){case r:e.push("/admin/"+r+"_bin"),t.name=r+"_bin";break;case r+"_bin":e.push("/admin/"+r),t.name=r}}function y(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t.response)switch(t.response.status){case 401:e.$swal("Unauthenticated","You are not login","error"),setTimeout((function(){window.location.href="/admin/login"}),2e3);break;case 403:e.actions[r]=!1,e.errors&&(e.errors.error_status=403,e.errors.error_title="Permission Denied",e.errors.error_description="You are not allowed to "+r+" "+e.current);break;case 404:e.actions[r]=!1,e.errors.error_status=404,e.errors.error_title="Page Not Found",e.errors.error_description="You are in the wrong page"}}function b(t){return t[0].toLowerCase()+t.substring(1)}},4775:(t,e,r)=>{function n(t){t.$swal({title:"Now loading",html:'<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',allowEscapeKey:!1,allowOutsideClick:!1,timer:2e3,onOpen:function(){swal.showLoading()}}).then((function(){}),(function(e){"timer"===e&&t.$swal.close}))}r.d(e,{e:()=>n})},3406:(t,e,r)=>{r.d(e,{Ri:()=>i,SA:()=>c,VK:()=>s,lE:()=>o,n$:()=>a});var n=r(821);r(7333);var a=(0,n.qj)({data:!!window.cookies.get("access_token")}),o=(0,n.qj)({data:window.cookies.get("lang")?window.cookies.get("lang"):"en",changeData:function(t){this.data=t,window.cookies.set("lang",t,"1D",null,null,null,"Lax")}}),i=(0,n.qj)({data:window.shop,changeData:function(t){this.data=t}}),c=(0,n.qj)({data:{},changeData:function(t){this.data=t}}),s=((0,n.qj)({data:{},changeData:function(t){this.data=t}}),(new Date).getFullYear())},8154:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(3645),a=r.n(n)()((function(t){return t[1]}));a.push([t.id,".page-loader[data-v-15402de4]{align-items:center;background-color:#333;display:flex;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:999}.cube[data-v-15402de4]{height:40px;margin-right:10px;width:40px}.cube[data-v-15402de4]:first-child{background-color:#8cc271}.cube[data-v-15402de4]:nth-child(2){background-color:#69beeb}.cube[data-v-15402de4]:nth-child(3){background-color:#f5aa39}.cube[data-v-15402de4]:nth-child(4){background-color:#e9643b}.cube[data-v-15402de4]:first-child{-webkit-animation:left-15402de4 1s infinite;animation:left-15402de4 1s infinite}.cube[data-v-15402de4]:last-child{-webkit-animation:right-15402de4 1s .5s infinite;animation:right-15402de4 1s .5s infinite}@-webkit-keyframes left-15402de4{40%{transform:translateX(-60px)}50%{transform:translateX(0)}}@keyframes left-15402de4{40%{transform:translateX(-60px)}50%{transform:translateX(0)}}@-webkit-keyframes right-15402de4{40%{transform:translateX(60px)}50%{transform:translateX(0)}}@keyframes right-15402de4{40%{transform:translateX(60px)}50%{transform:translateX(0)}}",""]);const o=a},7559:(t,e,r)=>{r.r(e),r.d(e,{default:()=>ut});var n=r(821),a={key:1,class:"wrapper"},o={class:"content-wrapper"},i={class:"main-footer"},c=(0,n.Uk)("."),s=(0,n.Uk)(" All rights reserved. ");var u=(0,n.Uk)(' .toggle { --width: 50px; --height: calc(var(--width) / 3); position: relative; display: inline-block; width: var(--width); height: var(--height); box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3); border-radius: var(--height); cursor: pointer; margin-top:10px; } .toggle input { display: none; } .toggle .slider { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: var(--height); background-color: #ccc; transition: all 0.4s ease-in-out; } .toggle .slider::before { content: ""; position: absolute; top: 0; left: 0; width: calc(var(--height)); height: calc(var(--height)); border-radius: calc(var(--height) / 2); background-color: #fff; box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3); transition: all 0.4s ease-in-out; } .toggle input:checked+.slider { background-color: #1FA13D; } .toggle input:checked+.slider::before { transform: translateX(calc(var(--width) - var(--height))); } '),l={class:"main-header navbar navbar-expand navbar-white navbar-light"},d={class:"navbar-nav"},h=(0,n._)("li",{class:"nav-item"},[(0,n._)("a",{class:"nav-link","data-widget":"pushmenu",href:"#",role:"button"},[(0,n._)("i",{class:"fas fa-bars"})])],-1),f={class:"nav-item d-none d-sm-inline-block"},p=(0,n.Uk)("Home"),v=(0,n._)("li",{class:"nav-item d-none d-sm-inline-block"},[(0,n._)("a",{href:"#",class:"nav-link"},"Contact")],-1),m={class:"navbar-nav ml-auto"},g=(0,n._)("li",{class:"nav-item"},[(0,n._)("a",{class:"nav-link","data-widget":"fullscreen",href:"#",role:"button"},[(0,n._)("i",{class:"fas fa-expand-arrows-alt"})])],-1),w={class:"nav-item"},y={class:"toggle"},b=(0,n._)("span",{class:"slider"},null,-1);const k={data:function(){return{dark:!1}},methods:{switchDarkMode:function(t){1==this.dark?(document.body.classList.add("dark-mode"),window.cookies.set("admin_dark","true","1D",null,null,null,"Lax")):(document.body.classList.remove("dark-mode"),window.cookies.remove("admin_dark"))},turnToDarkMode:function(){"true"==window.cookies.get("admin_dark")&&(this.dark=!0,document.body.classList.add("dark-mode"),window.cookies.set("admin_dark","true","1D",null,null,null,"Lax"))}},created:function(){this.turnToDarkMode()}};var _=r(3744);const R=(0,_.Z)(k,[["render",function(t,e,r,a,o,i){var c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[((0,n.wg)(),(0,n.j4)((0,n.LL)("style"),null,{default:(0,n.w5)((function(){return[u]})),_:1})),(0,n._)("nav",l,[(0,n._)("ul",d,[h,(0,n._)("li",f,[(0,n.Wm)(c,{to:"/admin/dashboard",class:"nav-link"},{default:(0,n.w5)((function(){return[p]})),_:1})]),v]),(0,n._)("ul",m,[g,(0,n._)("li",w,[(0,n._)("label",y,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.dark=t}),onChange:e[1]||(e[1]=function(e){return i.switchDarkMode(t.event)})},null,544),[[n.e8,o.dark]]),b])])])])],64)}]]);var x={class:"main-sidebar sidebar-dark-primary elevation-4"},L={href:"index3.html",class:"brand-link"},$={class:"brand-text font-weight-light"},D={class:"sidebar"},E={class:"user-panel mt-3 pb-3 mb-3 d-flex"},S={class:"image"},j=["src"],P={class:"info"},C={href:"#",class:"d-block"},A={class:"mt-2"},O={class:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false"},M={class:"nav-item"},T=(0,n._)("i",{class:"nav-icon fas fa-tachometer-alt"},null,-1),N=(0,n._)("p",null," Dashboard ",-1),W={class:"nav-item"},Y=[(0,n._)("i",{class:"nav-icon fas fa-sign-out-alt"},null,-1),(0,n._)("p",null," Logout ",-1)];var F=(0,n._)("i",{class:"nav-icon fas fa-table"},null,-1),U=(0,n._)("i",{class:"right far fa-circle text-info"},null,-1),X={class:"nav-item"};var Z=r(681);const G={props:{dataRoutes:{type:Object},currentRoute:{type:String},title:{type:String}},data:function(){return{menu:""}},watch:{currentRoute:function(t,e){this.menu=this.checkMenus(t)}},created:function(){this.menu=this.checkMenus(this.$props.currentRoute)},methods:{checkMenus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t in this.$props.dataRoutes||t.replace("_bin","")in this.$props.dataRoutes||t.replace(".edit","")in this.$props.dataRoutes||t.replace(".create","")in this.$props.dataRoutes||t.replace(".variant","")in this.$props.dataRoutes||t.replace(".stock","")in this.$props.dataRoutes||t.replace(".stock.create","")in this.$props.dataRoutes||t.replace(".stock.edit","")in this.$props.dataRoutes||t.replace(".price","")in this.$props.dataRoutes||t.replace(".price.create","")in this.$props.dataRoutes||t.replace(".price.edit","")in this.$props.dataRoutes||t.replace(".currency_rate","")in this.$props.dataRoutes||t.replace(".currency_rate.create","")in this.$props.dataRoutes||t.replace(".currency_rate.edit","")in this.$props.dataRoutes||t.replace(".currency_rate_transaction","")in this.$props.dataRoutes||t.replace(".transaction","")in this.$props.dataRoutes||void 0!==this.$route.params.model&&(0,Z.PD)(this.$route.params.model)in this.$props.dataRoutes}}},V=(0,_.Z)(G,[["render",function(t,e,r,a,o,i){var c=this,s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("li",{class:(0,n.C_)([1==o.menu?"nav-item menu-open":"nav-item"])},[(0,n._)("a",{href:"#",class:(0,n.C_)([1==o.menu?"nav-link active":"nav-link"])},[F,(0,n._)("p",null,[(0,n.Uk)((0,n.zw)(r.title)+" ",1),U])],2),(0,n._)("ul",{class:"nav nav-treeview",style:(0,n.j5)([1==o.menu?"display : block":"display : none"])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.dataRoutes,(function(t,e){return(0,n.wg)(),(0,n.iD)("li",X,[(0,n.Wm)(s,{to:"/admin/"+e,class:(0,n.C_)([r.currentRoute==e||e+"_bin"==r.currentRoute||e+".variant"==r.currentRoute||e+".stock"==r.currentRoute||e+".stock.create"==r.currentRoute||e+".stock.edit"==r.currentRoute||e+".price"==r.currentRoute||e+".price.create"==r.currentRoute||e+".price.edit"==r.currentRoute||e+".currency_rate"==r.currentRoute||e+".currency_rate.create"==r.currentRoute||e+".currency_rate.edit"==r.currentRoute||e+".currency_rate_transaction"==r.currentRoute||e+".edit"==r.currentRoute||e+".create"==r.currentRoute||e+".transaction"==r.currentRoute||void 0!==c.$route.params.model&&c.$route.params.model==t?"nav-link active":"nav-link"])},{default:(0,n.w5)((function(){return[(0,n._)("p",null,(0,n.zw)(t),1)]})),_:2},1032,["to","class"])])})),256))],4)],2)}]]);var q=r(4775),z=r(3406);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function H(){H=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new R(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function d(){}function h(){}function f(){}var p={};c(p,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(x([])));m&&m!==e&&r.call(m,a)&&(p=m);var g=f.prototype=d.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){function n(a,o,i,c){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==I(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=f,c(g,"constructor",f),c(f,"constructor",h),h.displayName=c(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(y.prototype),c(y.prototype,o,(function(){return this})),t.AsyncIterator=y,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new y(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function K(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,a)}function B(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){K(o,n,a,i,c,"next",t)}function c(t){K(o,n,a,i,c,"throw",t)}i(void 0)}))}}const Q={components:{SubMenu:V},data:function(){return{shop:z.Ri,admin:z.SA,dataRoutes:{shop:"Shop",admin:"Admin",social_media:"Social Media",page:"Page",blog:"Blog",faq:"FAQ",user:"User",attribute:"Attribute",category:"Category",subcategory:"Subcategory",brand:"Brand",color:"Color",tax:"Tax",target:"Target",currency:"Currency"},countryAndStateRoutes:{country:"Country",state:"State",city:"City"},productRoutes:{item:"Item",collection:"Collection",banner:"Banner",promotion:"Promotion"},roleAndPermissionRoutes:{role:"Role",permission:"Permission"},processRoutes:{order:"Order"}}},methods:{logout:function(){var t=this;window.axios.post("logout").then((function(e){"Loading"==e.data.message?(0,q.e)(t):window.location.href="dashboard"})).catch((function(e){(0,Z.VR)(e,t)}))},getAdmin:function(){var t=this;return B(H().mark((function e(){return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.axios.get("admin").then((function(e){"Loading"==e.data.message?(0,q.e)(t):t.admin.changeData(e.data.admin)})).catch((function(e){(0,Z.VR)(e,t)}));case 1:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return B(H().mark((function e(){return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAdmin();case 2:case"end":return e.stop()}}),e)})))()},computed:{checkValue:function(){return!!this.preference},currentRoute:function(){return this.$route.name}}},J=(0,_.Z)(Q,[["render",function(t,e,r,a,o,i){var c=(0,n.up)("router-link"),s=(0,n.up)("SubMenu");return(0,n.wg)(),(0,n.iD)("aside",x,[(0,n._)("a",L,[(0,n._)("span",$,(0,n.zw)(o.shop.data.name),1)]),(0,n._)("div",D,[(0,n._)("div",E,[(0,n._)("div",S,[(0,n._)("img",{src:"/dist/img/user2-160x160.jpg",class:"img-circle elevation-2",alt:"User Image"},null,8,j)]),(0,n._)("div",P,[(0,n._)("a",C,(0,n.zw)(o.admin.data.name),1)])]),(0,n._)("nav",A,[(0,n._)("ul",O,[(0,n._)("li",M,[(0,n.Wm)(c,{to:"/admin/dashboard",class:(0,n.C_)(["dashboard"==i.currentRoute?"nav-link active":"nav-link"])},{default:(0,n.w5)((function(){return[T,N]})),_:1},8,["class"])]),(0,n.Wm)(s,{currentRoute:i.currentRoute,dataRoutes:o.dataRoutes,title:"Data"},null,8,["currentRoute","dataRoutes"]),(0,n.Wm)(s,{currentRoute:i.currentRoute,dataRoutes:o.countryAndStateRoutes,title:"Countries And States"},null,8,["currentRoute","dataRoutes"]),(0,n.Wm)(s,{currentRoute:i.currentRoute,dataRoutes:o.productRoutes,title:"Product"},null,8,["currentRoute","dataRoutes"]),(0,n.Wm)(s,{currentRoute:i.currentRoute,dataRoutes:o.roleAndPermissionRoutes,title:"Role And Permission"},null,8,["currentRoute","dataRoutes"]),(0,n.Wm)(s,{currentRoute:i.currentRoute,dataRoutes:o.processRoutes,title:"Process"},null,8,["currentRoute","dataRoutes"]),(0,n._)("li",W,[(0,n._)("a",{role:"button",onClick:e[0]||(e[0]=function(){return i.logout&&i.logout.apply(i,arguments)}),class:"nav-link"},Y)])])])])])}]]);var tt=function(t){return(0,n.dD)("data-v-15402de4"),t=t(),(0,n.Cn)(),t},et={key:0,class:"page-loader"},rt=[tt((function(){return(0,n._)("div",{class:"cube"},null,-1)})),tt((function(){return(0,n._)("div",{class:"cube"},null,-1)})),tt((function(){return(0,n._)("div",{class:"cube"},null,-1)})),tt((function(){return(0,n._)("div",{class:"cube"},null,-1)}))];const nt={data:function(){return{isloaded:!1}},watch:{$route:{deep:!0,handler:function(){var t=this;this.isloaded=!1,setTimeout((function(){t.isloaded=!0}),1500)}}},mounted:function(){var t=this;setTimeout((function(){t.isloaded=!0}),1500)}};var at=r(3379),ot=r.n(at),it=r(8154),ct={insert:"head",singleton:!1};ot()(it.Z,ct);it.Z.locals;const st={data:function(){return{shop:z.Ri,currentYear:z.VK}},components:{Navigation:R,Menu:J,Loading:(0,_.Z)(nt,[["render",function(t,e,r,a,o,i){return t.isloaded?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",et,rt))}],["__scopeId","data-v-15402de4"]])},computed:{checkValue:function(){return!!this.preference},currentRoute:function(){return this.$route.name}}},ut=(0,_.Z)(st,[["render",function(t,e,r,u,l,d){var h=(0,n.up)("router-view"),f=(0,n.up)("Navigation"),p=(0,n.up)("Menu"),v=(0,n.up)("Loading");return"login"==d.currentRoute?((0,n.wg)(),(0,n.j4)(h,{key:0})):((0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(f),(0,n.Wm)(p),(0,n._)("div",o,[(0,n.Wm)(v),(0,n.Wm)(h)]),(0,n._)("footer",i,[(0,n._)("strong",null,[(0,n.Uk)("Copyright © "+(0,n.zw)(l.currentYear)+" ",1),(0,n._)("a",null,(0,n.zw)(l.shop.data.name),1),c]),s])]))}]])}}]);