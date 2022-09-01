<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-3">
      <div class="categories_wrap">
        <button type="button" data-toggle="collapse" data-target="#navCatContent" aria-expanded="false" class="categories_btn" v-on:click="changeShow()">
            <i class="linearicons-menu"></i><span>All Categories </span>
        </button>
        <div id="navCatContent" class="nav_cat navbar collapse" v-if="show">
            <ul> 
                <li class="dropdown dropdown-mega-menu" v-for="category in categories">
                    <a class="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown">{{ category.name }}</a>
                    <div class="dropdown-menu">
                        <ul class="mega-menu d-lg-flex">
                            <li class="mega-menu-col col-lg-7">
                                <ul class="d-lg-flex">
                                    <li class="mega-menu-col col-lg-6">
                                        <ul v-if="category.subcategories!==null">
                                            <!-- <template v-if="category.subcategories.indexOf(',') > -1"> -->
                                                <li v-for="(subcategory,key) in category.subcategories.split(',')">
                                                    <a class="dropdown-item nav-link nav_item" href="#">
                                                        {{ subcategory }}
                                                    </a>
                                                </li>
                                            <!-- </template>
                                            <li v-else >
                                                <a class="dropdown-item nav-link nav_item" href="#">
                                                    {{ category.subcategories }}
                                                </a>
                                            </li> -->
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="mega-menu-col col-lg-5">
                                <div class="header-banner2">
                                    <!-- <a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/menu_banner4.jpg" alt="menu_banner4"></a> -->
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul> 
        </div>
    </div>
</div>
<component is="script" src="user/js/scripts.js" />
</template>
<script >
    export default {
        props : {
            categories : {
                type : Object ,
                default : {}
            }
        },
        data(){
            return {
                show : false
            }
        },
        created(){
            this.show=this.$route.name == 'home' ? true : false
        },
        methods : {
            changeShow(){
              this.show = ! this.show 
          }
      }
  }
</script>