/*! For license information please see 2003.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2003],{3268:(t,e,r)=>{r.d(e,{j:()=>i});var n=r(7282),o=r(4775),i={mixins:[n.B],data:function(){return{return_link:"",errors:{error_status:0,error_title:"",error_description:""},actions:{create:"",update:""},current:null}},methods:{returnBack:function(t){"Loading"==t.data.message?(0,o.eQ)(this):(this.$swal("Success",t.data.message,"success"),this.$router.push({path:"/admin/"+this.return_link}))}}}},7282:(t,e,r)=>{r.d(e,{B:()=>i});var n=r(4843),o=r(7116),i={components:{ContentHeader:n.Z,Error:o.Z},methods:{checkString:function(t){if(null==t||0===/^\s*$/.test(t))return e;var e=t.toString(),r=e.toLowerCase(),n='<span class="text-primary">',o="</span>";if(null!==this.search){var i=this.search,a=this.search.toLowerCase();if(r==a)return n+e.slice(0,i.length)+o;if(r.includes(a)){var s=e.toLowerCase().indexOf(a),c="";return 0==s?c=n+e.slice(s,i.length)+o+e.slice(s+i.length,e.length):s+1<=e.length&&(c=e.slice(0,s)+n+e.slice(s,s+i.length)+e.slice(s+i.length,i.length)+o+e.slice(s+i.length,e.length)),c}}return e}}}},681:(t,e,r)=>{r.d(e,{Lf:()=>w,Mg:()=>c,OT:()=>f,P9:()=>g,PD:()=>_,Pi:()=>v,T9:()=>l,VR:()=>y,b6:()=>h,mR:()=>m,nv:()=>u,s2:()=>a,vc:()=>o,xZ:()=>s,y1:()=>p});var n=r(4775);function o(t){return t.getFullYear()+"-"+i(t.getMonth()+1)+"-"+i(t.getDate())+" "+i(t.getHours())+":"+i(t.getMinutes())+":00"}function i(t){return(t<10?"0":"")+t}function a(t){return t.item_variant.item_name+"'s "+t.item_variant.color_name}function s(t){var e=[];return t.length>0&&Object.keys(t).map((function(r){e.push(t[r].id)})),e}function c(t){var e=t-1;return 0==e?1:e}function u(t){return 1==t.create||1==t.read||1==t.update||1==t.delete}function l(t){return 0==t.create&&0==t.read&&0==t.update&&0==t.delete}function d(t){switch(t.slice(-1)){case"y":return t.slice(0,-1)+"ies";case"h":case"x":return t+"es";default:return t+"s"}}function h(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;switch(t.currentPage=e,n){case null:t.search=null,void 0!==t.$refs.deleteAll&&(t.$refs.searchModal.searchData=null,t.$refs.deleteAll.$el.checked=!1);var o=d(r),i=t.$route.name==r?o:"trash_"+o;return i+"?page=";case"search":t.search=t.$refs.searchModal.searchData;var a=t.$route.name==r?r+"_search":r+"_trash_search";return a+"?search="}}function f(t,e){t.map((function(t){t.$el.checked=e,t.$el.dispatchEvent(new Event("change"))}))}function p(t,e,r,n){switch(t){case!0:r.includes(e.id)||r.push(e.id),n.includes(e)||n.push(e);break;case!1:m(r,e.id),m(n,e)}}function v(t){t.length=0}function m(t,e){var r=t.indexOf(e);r>-1&&t.splice(r,1)}function w(t,e,r){window.axios.get("check_permission/"+t+"/"+e).then((function(t){"Loading"==t.data.message?(0,n.eQ)(r):r.actions[e]=!0})).catch((function(t){y(t,r)}))}function g(t,e,r){switch(t.name){case r:e.push("/admin/"+r+"_bin"),t.name=r+"_bin";break;case r+"_bin":e.push("/admin/"+r),t.name=r}}function y(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t.response)switch(t.response.status){case 401:e.$swal("Unauthenticated","You are not login","error"),setTimeout((function(){window.location.href="/admin/login"}),2e3);break;case 403:e.actions[r]=!1,e.errors&&(e.errors.error_status=403,e.errors.error_title="Permission Denied",e.errors.error_description="You are not allowed to "+r+" "+e.current);break;case 404:e.actions[r]=!1,e.errors.error_status=404,e.errors.error_title="Page Not Found",e.errors.error_description="You are in the wrong page"}}function _(t){return t[0].toLowerCase()+t.substring(1)}},4775:(t,e,r)=>{function n(t){return parseInt(t).toString()}function o(t){t.$swal({title:"Now loading",html:'<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',allowEscapeKey:!1,allowOutsideClick:!1,timer:2e3,onOpen:function(){swal.showLoading()}}).then((function(){}),(function(e){"timer"===e&&t.$swal.close}))}r.d(e,{S2:()=>n,eQ:()=>o})},4843:(t,e,r)=>{r.d(e,{Z:()=>v});var n=r(821),o={class:"content-header"},i={class:"container-fluid"},a={class:"row mb-2"},s={class:"col-sm-6"},c={class:"m-0"},u={class:"col-sm-6"},l={class:"breadcrumb float-sm-right"},d={class:"breadcrumb-item"},h={class:"breadcrumb-item"},f={key:0,class:"breadcrumb-item active"};const p={name:"ContentHeader",props:{header:{type:String},back_links:{type:Array}}};const v=(0,r(3744).Z)(p,[["render",function(t,e,r,p,v,m){var w=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",i,[(0,n._)("div",a,[(0,n._)("div",s,[(0,n._)("h1",c,(0,n.zw)(r.header),1)]),(0,n._)("div",u,[(0,n._)("ol",l,[(0,n._)("li",d,[(0,n.Wm)(w,{to:"/admin/dashboard"},{default:(0,n.w5)((function(){return[(0,n.Uk)("Home")]})),_:1})]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.back_links,(function(t){return(0,n.wg)(),(0,n.iD)("li",h,[(0,n.Wm)(w,{to:t.route},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(t.title),1)]})),_:2},1032,["to"])])})),256)),"Dashboard"!==r.header?((0,n.wg)(),(0,n.iD)("li",f,(0,n.zw)(r.header),1)):(0,n.kq)("",!0)])])])])])}]])},7116:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(821),o={class:"error-page"},i=(0,n._)("h2",{class:"headline text-warning"},"404",-1),a={class:"error-content"},s=(0,n._)("i",{class:"fas fa-exclamation-triangle text-warning"},null,-1);const c={props:{httpStatus:{type:Number},title:{type:String},description:{type:String}}};const u=(0,r(3744).Z)(c,[["render",function(t,e,r,c,u,l){return(0,n.wg)(),(0,n.iD)("div",o,[i,(0,n._)("div",a,[(0,n._)("h3",null,[s,(0,n.Uk)((0,n.zw)(r.title),1)]),(0,n._)("p",null,(0,n.zw)(r.description),1)])])}]])},2003:(t,e,r)=>{r.r(e),r.d(e,{default:()=>P});var n=r(821),o={class:"content"},i={class:"container-fluid"},a={class:"card card-default"},s={class:"card-body"},c={class:"row"},u={class:"col-md-12"},l={class:"form-group"},d=(0,n._)("label",null,"Answers & Questions",-1),h=(0,n._)("div",{class:"card-footer"},[(0,n._)("button",{type:"submit",class:"btn btn-primary"},"Submit")],-1);var f=r(4843),p=r(681),v=r(4775),m=r(7116),w={class:"row mb-3"},g={class:"col-8"},y={class:"form-group"},_=["id","onUpdate:modelValue"],b={class:"form-group"},k=["id","onUpdate:modelValue"],x={class:"col-4"},L=["onClick"];const q={data:function(){return{question:[""],answer:[""]}},watch:{questionData:{deep:!0,handler:function(t,e){this.question=this.$props.questionData}},answerData:{deep:!0,handler:function(t,e){this.answer=this.$props.answerData}}},props:{questionData:{type:Array},answerData:{type:Array}},mounted:function(){var t=this;this.$props.questionData.map((function(e,r){document.getElementById("question-"+r).value=e,t.question[r]=e})),this.$props.answerData.map((function(e,r){document.getElementById("answer-"+r).value=e,t.answer[r]=e}))},methods:{add:function(){this.question.push(""),this.answer.push("")},remove:function(t){this.question.splice(t,1),this.answer.splice(t,1)}}};var D=r(3744);const E=(0,D.Z)(q,[["render",function(t,e,r,o,i,a){return(0,n.wg)(),(0,n.iD)(n.HY,null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.question,(function(t,e){return(0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("div",g,[(0,n._)("div",y,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Question",id:"question-"+e,class:"form-control","onUpdate:modelValue":function(t){return i.question[e]=t}},null,8,_),[[n.nr,i.question[e]]])]),(0,n._)("div",b,[(0,n.wy)((0,n._)("textarea",{class:"form-control",placeholder:"Answer",id:"answer-"+e,"onUpdate:modelValue":function(t){return i.answer[e]=t}},"\n\t\t\t",8,k),[[n.nr,i.answer[e]]])])]),(0,n._)("div",x,[(0,n.wy)((0,n._)("a",{class:"btn btn-danger",onClick:function(t){return a.remove(e)}}," Remove ",8,L),[[n.F8,i.question.length>1&&e>0]])])])})),256)),(0,n._)("a",{class:"btn btn-success",onClick:e[0]||(e[0]=function(t){return a.add()})}," Add ")],64)}]]);var S=r(3268);function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function A(){A=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return q()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function d(){}function h(){}function f(){}var p={};s(p,o,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(L([])));m&&m!==e&&r.call(m,o)&&(p=m);var w=f.prototype=d.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){function n(o,i,a,s){var c=u(t[o],t,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==$(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:q}}function q(){return{value:void 0,done:!0}}return h.prototype=f,s(w,"constructor",f),s(f,"constructor",h),h.displayName=s(f,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,s(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},g(y.prototype),s(y.prototype,i,(function(){return this})),t.AsyncIterator=y,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new y(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(w),s(w,a,"Generator"),s(w,o,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function O(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function j(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){O(i,n,o,a,s,"next",t)}function s(t){O(i,n,o,a,s,"throw",t)}a(void 0)}))}}const C={components:{ContentHeader:f.Z,Error:m.Z,QuestionAndAnswer:E},mixins:[S.j],data:function(){return{main_content:"FAQ",content:"Faq",return_link:"faq",fields:{questions:[],answers:[]},formData:new FormData}},created:function(){var t=this;return j(A().mark((function e(){return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,p.Lf)(t.content,"update",t),e.next=3,t.getFaqData();case 3:case"end":return e.stop()}}),e)})))()},methods:{getQuestionsAndAnswers:function(){this.fields.questions=this.$refs.qans.question,this.fields.answers=this.$refs.qans.answer},updateQuans:function(){var t=this;this.getQuestionsAndAnswers(),window.axios.put("faqs/",this.fields).then((function(e){t.returnBack(e)})).catch((function(e){422==e.response.status?t.errors=e.response.data.errors:(0,p.VR)(e,t,"update")}))},getFaqData:function(){var t=this;return j(A().mark((function e(){return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.axios.get("faqs/edit").then((function(e){"Loading"==e.data.message?(0,v.eQ)(t):(t.fields.questions=e.data.questions,t.fields.answers=e.data.answers)})).catch((function(e){(0,p.VR)(e,t,"update")}));case 2:case"end":return e.stop()}}),e)})))()}}},P=(0,D.Z)(C,[["render",function(t,e,r,f,p,v){var m=(0,n.up)("ContentHeader"),w=(0,n.up)("Error"),g=(0,n.up)("QuestionAndAnswer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(m,{header:"Update "+p.main_content,back_links:[{route:"/admin/faq",title:p.main_content}]},null,8,["header","back_links"]),(0,n._)("section",o,[(0,n._)("div",i,[(0,n._)("div",a,[0==t.actions.update?((0,n.wg)(),(0,n.j4)(w,{key:0,httpStatus:t.errors.error_status,title:t.errors.error_title,description:t.errors.error_description},null,8,["httpStatus","title","description"])):t.actions.update?((0,n.wg)(),(0,n.iD)("form",{key:1,onSubmit:e[0]||(e[0]=(0,n.iM)((function(t){return v.updateQuans()}),["prevent"]))},[(0,n._)("div",s,[(0,n._)("div",c,[(0,n._)("div",u,[(0,n._)("div",l,[d,(0,n.Wm)(g,{questionData:p.fields.questions,answerData:p.fields.answers,ref:"qans"},null,8,["questionData","answerData"])])])])]),h],32)):(0,n.kq)("",!0)])])])],64)}]])}}]);