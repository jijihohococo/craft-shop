<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-3">
      <div class="categories_wrap">
        <button v-if="mobile==false" type="button" data-toggle="collapse" data-target="#navCatContent" aria-expanded="false" class="categories_btn" v-on:click="changeShow()">
            <i class="linearicons-menu"></i><span>{{ translateLang('Categories') }}</span>
        </button>
        <button v-else type="button" data-toggle="collapse" data-target="#navCatContent" aria-expanded="false" class="categories_btn" >
            <i class="linearicons-menu"></i><span>{{ translateLang('Categories') }}</span>
        </button>
        <div id="navCatContent" class="nav_cat navbar collapse" v-if="show" >
            <ul> 
                <li class="dropdown dropdown-mega-menu" v-for="category in categories">
                    <a class="dropdown-item nav-link dropdown-toggler" data-toggle="dropdown">
                        {{ category.name }}
                    </a>
                    <div class="dropdown-menu">
                        <ul class="mega-menu d-lg-flex">
                            <li class="mega-menu-col col-lg-7">
                                <ul class="d-lg-flex">
                                    <li class="mega-menu-col col-lg-6">
                                        <ul v-if="category.subcategories!==null">
                                                <li v-for="(subcategory,key) in category.subcategories.split(',')">
                                                    <a v-on:click="goToContent('subcategory',category.subcategory_ids.split(',')[key])" class="dropdown-item nav-link nav_item">
                                                        {{ subcategory }}
                                                    </a>
                                                </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="mega-menu-col col-lg-5">
                                <div class="header-banner2">
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul> 
        </div>
    </div>
</div>
<!-- <component is="script" src="user/js/scripts.js" /> -->
</template>
<script >
    import { translate } from '../../helpers/general.js'
    export default {
        props : {
            categories : {
                type : Object ,
                default : {}
            }
        },
        data(){
            return {
                show : true ,
                mobile : false
            }
        },
        created(){
            // we will use hide and show category menu UI feature if it is not mobile screen
            this.mobile=this.checkMobile() ? false : true
            this.show=(this.$route.name=='home') ||
                (this.$route.name!=='home' && this.mobile==true) ? 
                true : false
        },
        methods : {
            checkMobile(){
                return (window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth)>991;
            },
            translateLang(data){
                return  translate(data);
            },
            changeShow(){
              this.show = ! this.show 
          },
          goToContent(content,contentId){
            //this.changeShow()
            if(!this.checkMobile() && this.$route.name=='home' ){
                this.show=false
            }
            this.$router.push({path: '/shop/'+content + '/' + contentId })

          }
      }
  }
</script>