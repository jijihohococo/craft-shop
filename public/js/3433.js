/*! For license information please see 3433.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3433],{681:(t,e,n)=>{n.d(e,{Lf:()=>g,Mg:()=>c,OT:()=>h,P9:()=>y,PD:()=>b,Pi:()=>v,T9:()=>l,VR:()=>w,b6:()=>f,mR:()=>m,nv:()=>u,s2:()=>i,vc:()=>o,xZ:()=>s,y1:()=>p});var r=n(4775);function o(t){return t.getFullYear()+"-"+a(t.getMonth()+1)+"-"+a(t.getDate())+" "+a(t.getHours())+":"+a(t.getMinutes())+":00"}function a(t){return(t<10?"0":"")+t}function i(t){return t.item_variant.item_name+"'s "+t.item_variant.color_name}function s(t){var e=[];return t.length>0&&Object.keys(t).map((function(n){e.push(t[n].id)})),e}function c(t){var e=t-1;return 0==e?1:e}function u(t){return 1==t.create||1==t.read||1==t.update||1==t.delete}function l(t){return 0==t.create&&0==t.read&&0==t.update&&0==t.delete}function d(t){switch(t.slice(-1)){case"y":return t.slice(0,-1)+"ies";case"h":case"x":return t+"es";default:return t+"s"}}function f(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;switch(t.currentPage=e,r){case null:t.search=null,void 0!==t.$refs.deleteAll&&(t.$refs.searchModal.searchData=null,t.$refs.deleteAll.$el.checked=!1);var o=d(n),a=t.$route.name==n?o:"trash_"+o;return a+"?page=";case"search":t.search=t.$refs.searchModal.searchData;var i=t.$route.name==n?n+"_search":n+"_trash_search";return i+"?search="}}function h(t,e){t.map((function(t){t.$el.checked=e,t.$el.dispatchEvent(new Event("change"))}))}function p(t,e,n,r){switch(t){case!0:n.includes(e.id)||n.push(e.id),r.includes(e)||r.push(e);break;case!1:m(n,e.id),m(r,e)}}function v(t){t.length=0}function m(t,e){var n=t.indexOf(e);n>-1&&t.splice(n,1)}function g(t,e,n){window.axios.get("check_permission/"+t+"/"+e).then((function(t){"Loading"==t.data.message?(0,r.e)(n):n.actions[e]=!0})).catch((function(t){w(t,n)}))}function y(t,e,n){switch(t.name){case n:e.push("/admin/"+n+"_bin"),t.name=n+"_bin";break;case n+"_bin":e.push("/admin/"+n),t.name=n}}function w(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t.response)switch(t.response.status){case 401:e.$swal("Unauthenticated","You are not login","error"),setTimeout((function(){window.location.href="/admin/login"}),2e3);break;case 403:e.actions[n]=!1,e.errors&&(e.errors.error_status=403,e.errors.error_title="Permission Denied",e.errors.error_description="You are not allowed to "+n+" "+e.current);break;case 404:e.actions[n]=!1,e.errors.error_status=404,e.errors.error_title="Page Not Found",e.errors.error_description="You are in the wrong page"}}function b(t){return t[0].toLowerCase()+t.substring(1)}},4775:(t,e,n)=>{function r(t){t.$swal({title:"Now loading",html:'<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',allowEscapeKey:!1,allowOutsideClick:!1,timer:2e3,onOpen:function(){swal.showLoading()}}).then((function(){}),(function(e){"timer"===e&&t.$swal.close}))}n.d(e,{e:()=>r})},3795:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(821),o={class:"inner"},a={class:"icon"},i=(0,r._)("a",{class:"small-box-footer"},null,-1);const s={name:"ContentButton",props:{boxClass:{type:String},content:{type:String},subContent:{type:String},ionClass:{type:String}},methods:{clickFun:function(t){this.$emit("clickData",t)}}};const c=(0,n(3744).Z)(s,[["render",function(t,e,n,s,c,u){return(0,r.wg)(),(0,r.iD)("div",{class:"col-lg-3 col-6",style:{cursor:"pointer"},onClick:e[0]||(e[0]=function(e){return u.clickFun(t.e)})},[(0,r._)("div",{class:(0,r.C_)("small-box "+n.boxClass)},[(0,r._)("div",o,[(0,r._)("h3",null,(0,r.zw)(n.content),1),(0,r._)("p",null,(0,r.zw)(n.subContent),1)]),(0,r._)("div",a,[(0,r._)("i",{class:(0,r.C_)("ion "+n.ionClass)},null,2)]),i],2)])}]])},4843:(t,e,n)=>{n.d(e,{Z:()=>m});var r=n(821),o={class:"content-header"},a={class:"container-fluid"},i={class:"row mb-2"},s={class:"col-sm-6"},c={class:"m-0"},u={class:"col-sm-6"},l={class:"breadcrumb float-sm-right"},d={class:"breadcrumb-item"},f=(0,r.Uk)("Home"),h={class:"breadcrumb-item"},p={key:0,class:"breadcrumb-item active"};const v={name:"ContentHeader",props:{header:{type:String},back_links:{type:Array}}};const m=(0,n(3744).Z)(v,[["render",function(t,e,n,v,m,g){var y=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",a,[(0,r._)("div",i,[(0,r._)("div",s,[(0,r._)("h1",c,(0,r.zw)(n.header),1)]),(0,r._)("div",u,[(0,r._)("ol",l,[(0,r._)("li",d,[(0,r.Wm)(y,{to:"/admin/dashboard"},{default:(0,r.w5)((function(){return[f]})),_:1})]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.back_links,(function(t){return(0,r.wg)(),(0,r.iD)("li",h,[(0,r.Wm)(y,{to:t.route},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,r.zw)(t.title),1)]})),_:2},1032,["to"])])})),256)),"Dashboard"!==n.header?((0,r.wg)(),(0,r.iD)("li",p,(0,r.zw)(n.header),1)):(0,r.kq)("",!0)])])])])])}]])},3433:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var r=n(821),o={class:"content"},a={class:"container-fluid"},i={class:"row"},s={class:"row"},c={class:"col-lg-5 connectedSortable"};var u=n(4843),l=n(3795),d={class:"card bg-gradient-success"},f=(0,r.uE)('<div class="card-header border-0"><h3 class="card-title"><i class="far fa-calendar-alt"></i> Calendar </h3><div class="card-tools"><button type="button" class="btn btn-success btn-sm" data-card-widget="collapse"><i class="fas fa-minus"></i></button><button type="button" class="btn btn-success btn-sm" data-card-widget="remove"><i class="fas fa-times"></i></button></div></div>',1),h={class:"card-body pt-0"};var p={id:"calendar",style:{width:"100%"}};const v={mounted:function(){$(this.$el).datetimepicker({format:"L",inline:!0})}};var m=n(3744);const g={components:{Calendar:(0,m.Z)(v,[["render",function(t,e,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",p)}]])}},y=(0,m.Z)(g,[["render",function(t,e,n,o,a,i){var s=(0,r.up)("Calendar");return(0,r.wg)(),(0,r.iD)("div",d,[f,(0,r._)("div",h,[(0,r.Wm)(s)])])}]]);var w=n(681),b=n(4775);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function x(){x=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=b(i,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function d(){}function f(){}function h(){}var p={};s(p,o,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(E([])));m&&m!==e&&n.call(m,o)&&(p=m);var g=h.prototype=d.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(o,a,i,s){var c=u(t[o],t,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==_(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return f.prototype=h,s(g,"constructor",h),s(h,"constructor",f),f.displayName=s(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new w(c(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(g),s(g,i,"Generator"),s(g,o,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}function k(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function C(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){k(a,r,o,i,s,"next",t)}function s(t){k(a,r,o,i,s,"throw",t)}i(void 0)}))}}const L={components:{ContentHeader:u.Z,ContentButton:l.Z,CalendarCard:y},data:function(){return{content:"Dashboard",totalUsers:"0",totalItems:"0",todayTotalOrders:"0"}},methods:{goToOrder:function(){this.$router.push({path:"/admin/order"})},goToUser:function(){this.$router.push({path:"/admin/user"})},goToItem:function(){this.$router.push({path:"/admin/item"})},getTotalUsers:function(){var t=this;return C(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.axios.get("total_users").then((function(e){"Loading"==e.data.message?(0,b.e)(t):t.totalUsers=e.data.total_users.toString()})).catch((function(e){(0,w.VR)(e,t,"read")}));case 1:case"end":return e.stop()}}),e)})))()},getTotalItems:function(){var t=this;return C(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.axios.get("total_items").then((function(e){"Loading"==e.data.message?(0,b.e)(t):t.totalItems=e.data.total_items.toString()})).catch((function(e){(0,w.VR)(e,t,"read")}));case 1:case"end":return e.stop()}}),e)})))()},getTodayTotalOrders:function(){var t=this;return C(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.axios.get("today_total_orders").then((function(e){"Loading"==e.data.message?(0,b.e)(t):t.todayTotalOrders=e.data.today_total_orders.toString()})).catch((function(e){(0,w.VR)(e,t,"read")}));case 1:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return C(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTotalUsers();case 2:return e.next=4,t.getTotalItems();case 4:return e.next=6,t.getTodayTotalOrders();case 6:case"end":return e.stop()}}),e)})))()}},E=(0,m.Z)(L,[["render",function(t,e,n,u,l,d){var f=(0,r.up)("ContentHeader"),h=(0,r.up)("ContentButton"),p=(0,r.up)("CalendarCard");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(f,{header:l.content},null,8,["header"]),(0,r._)("section",o,[(0,r._)("div",a,[(0,r._)("div",i,[(0,r.Wm)(h,{boxClass:"bg-info",content:l.todayTotalOrders,subContent:"Today Orders",ionClass:"ion-bag",onClickData:e[0]||(e[0]=function(t){return d.goToOrder()})},null,8,["content"]),(0,r.Wm)(h,{boxClass:"bg-warning",content:l.totalUsers,subContent:"User Registrations",ionClass:"ion-person-add",onClickData:e[1]||(e[1]=function(t){return d.goToUser()})},null,8,["content"]),(0,r.Wm)(h,{boxClass:"bg-success",content:l.totalItems,subContent:"Available Items",ionClass:"ion-briefcase",onClickData:e[2]||(e[2]=function(t){return d.goToItem()})},null,8,["content"])]),(0,r._)("div",s,[(0,r._)("section",c,[(0,r.Wm)(p)])])])])],64)}]])}}]);