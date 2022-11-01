"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9015],{3283:(r,e,a)=>{a.d(e,{Z:()=>n});var t=a(3645),o=a.n(t)()((function(r){return r[1]}));o.push([r.id,'.carousel{position:relative;text-align:center}.carousel,.carousel *{box-sizing:border-box}.carousel__track{display:flex;margin:0;padding:0;position:relative}.carousel__viewport{overflow:hidden}.carousel__sr-only{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.carousel__next,.carousel__prev{align-items:center;background:var(--vc-nav-background);border:0;border-radius:var(--vc-nav-border-radius);box-sizing:content-box;color:var(--vc-nav-color);cursor:pointer;display:flex;font-size:var(--vc-nav-height);height:var(--vc-nav-height);justify-content:center;margin:0 10px;padding:0;position:absolute;text-align:center;top:50%;transform:translateY(-50%);width:var(--vc-nav-width)}.carousel__next:hover,.carousel__prev:hover{color:var(--vc-nav-color-hover)}.carousel__next--disabled,.carousel__prev--disabled{cursor:not-allowed;opacity:.5}.carousel__prev{left:0}.carousel__next{right:0}.carousel--rtl .carousel__prev{left:auto;right:0}.carousel--rtl .carousel__next{left:0;right:auto}.carousel__pagination{display:flex;justify-content:center;line-height:0;list-style:none;margin:10px 0 0}.carousel__pagination-button{background:transparent;border:0;cursor:pointer;display:block;margin:0;padding:var(--vc-pgn-margin)}.carousel__pagination-button:after{background-color:var(--vc-pgn-background-color);border-radius:var(--vc-pgn-border-radius);content:"";display:block;height:var(--vc-pgn-height);width:var(--vc-pgn-width)}.carousel__pagination-button--active:after,.carousel__pagination-button:hover:after{background-color:var(--vc-pgn-active-color)}:root{--vc-clr-primary:#000;--vc-clr-secondary:#090f207f;--vc-clr-white:#fff;--vc-icn-width:1.2em;--vc-nav-width:30px;--vc-nav-height:30px;--vc-nav-border-radius:0;--vc-nav-color:var(--vc-clr-primary);--vc-nav-color-hover:var(--vc-clr-secondary);--vc-nav-background:transparent;--vc-pgn-width:12px;--vc-pgn-height:4px;--vc-pgn-margin:4px;--vc-pgn-border-radius:0;--vc-pgn-background-color:var(--vc-clr-secondary);--vc-pgn-active-color:var(--vc-clr-primary)}.carousel__icon{fill:currentColor;height:var(--vc-icn-width);width:var(--vc-icn-width)}.carousel__slide{align-items:center;display:flex;flex-shrink:0;justify-content:center;margin:0;position:relative;scroll-snap-stop:auto}',""]);const n=o},9015:(r,e,a)=>{a.r(e),a.d(e,{default:()=>j});var t=a(821),o=["id","aria-labelledby"],n={class:"product_slider carousel_slider nav_style1"},i=(0,t.Uk)(" .carousel__item { min-height: 200px; width: 100%; background-color: var(--vc-clr-primary); color: var(--vc-clr-white); font-size: 20px; border-radius: 8px; display: flex; justify-content: center; align-items: center; } .carousel__slide { padding: 10px; } ");var c={class:"product"},l={class:"product_img"},s={href:"shop-product-detail.html"},u={class:"product_action_box"},d={class:"list_none pr_action_btn"},p={class:"add-to-cart"},v=[(0,t._)("i",{class:"icon-basket-loaded"},null,-1),(0,t.Uk)(" Add To Cart")],g=(0,t.uE)('<li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li><li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li><li><a href="#"><i class="icon-heart"></i></a></li>',3);var h=a(4001),_=a(4176);const m={components:{ItemInfo:h.Z,VLazyImage:_.Z},data:function(){return{currentItemVariant:0}},props:{item:{type:Object}},methods:{showImage:function(r){return null==r?"/images/logo_dark.png":"/image/item_images/"+r},getColorKey:function(r){this.currentItemVariant=r},addToCart:function(){var r=this.$props.item.variants.split(",")[this.currentItemVariant];window.axios.post("add_item_to_shopping_cart/"+r).then((function(r){console.log(r.data.message)}))}}};var f=a(3744);const b=(0,f.Z)(m,[["render",function(r,e,a,o,n,i){var h=(0,t.up)("v-lazy-image"),_=(0,t.up)("ItemInfo");return(0,t.wg)(),(0,t.iD)("div",c,[(0,t._)("div",l,[(0,t._)("a",s,[(0,t.Wm)(h,{src:i.showImage(a.item.image),alt:a.item.name},null,8,["src","alt"])]),(0,t._)("div",u,[(0,t._)("ul",d,[(0,t._)("li",p,[(0,t._)("a",{onClick:e[0]||(e[0]=function(r){return i.addToCart()})},v)]),g])])]),(0,t.Wm)(_,{item:a.item,onGetData:i.getColorKey},null,8,["item","onGetData"])])}]]);var w=a(7410),x=a(3379),y=a.n(x),k=a(3283),C={insert:"head",singleton:!1};y()(k.Z,C);k.Z.locals;const I={name:"SliderDetail",components:{SliderItem:b,Carousel:w.lr,Slide:w.Mi},data:function(){return{run:!1,breakpoints:{0:{itemsToShow:1},481:{itemsToShow:2},768:{itemsToShow:3},1199:{itemsToShow:4}}}},props:{content:{type:String},tab_class:{type:String},items:{type:Object,default:{}}}},j=(0,f.Z)(I,[["render",function(r,e,a,c,l,s){var u=(0,t.up)("SliderItem"),d=(0,t.up)("Slide"),p=(0,t.up)("Carousel");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",{class:(0,t.C_)(a.tab_class),id:a.content,role:"tabpanel","aria-labelledby":a.content+"-tab"},[(0,t._)("div",n,[a.items.length>0?((0,t.wg)(),(0,t.j4)(p,{key:0,"items-to-show":3,wrapAround:!0,breakpoints:l.breakpoints,"snap-align":"center"},{default:(0,t.w5)((function(){return[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.items,(function(r,e){return(0,t.wg)(),(0,t.j4)(d,{key:r.id},{default:(0,t.w5)((function(){return[(0,t.Wm)(u,{item:r},null,8,["item"])]})),_:2},1024)})),128))]})),_:1},8,["breakpoints"])):(0,t.kq)("",!0)])],10,o),((0,t.wg)(),(0,t.j4)((0,t.LL)("style"),null,{default:(0,t.w5)((function(){return[i]})),_:1}))],64)}]])}}]);