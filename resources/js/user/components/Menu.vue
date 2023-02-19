<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-3">
      <div class="categories_wrap">
        <button v-if="mobile.data==false" type="button" data-toggle="collapse" data-target="#navCatContent" aria-expanded="false" class="categories_btn" v-on:click="menu_show.changeShow()">
            <i class="linearicons-menu"></i><span>{{ translateLang('Categories') }}</span>
        </button>
        <button v-else type="button" data-toggle="collapse" data-target="#navCatContent" aria-expanded="false" class="categories_btn" >
            <i class="linearicons-menu"></i><span>{{ translateLang('Categories') }}</span>
        </button>
        <div id="navCatContent" class="nav_cat navbar collapse" v-if="menu_show.data" >
            <ul> 
                <li class="dropdown dropdown-mega-menu" v-for="category in categories">
                    <a class="dropdown-item nav-link dropdown-toggler" data-toggle="dropdown">
                      <span v-on:click="goToContent('category',category.link)">  {{ category.name }}</span>
                  </a>
                  <div class="dropdown-menu">
                    <ul class="mega-menu d-lg-flex">
                        <li class="mega-menu-col col-lg-7">
                            <ul class="d-lg-flex">
                                <li class="mega-menu-col col-lg-6">
                                    <ul v-if="category.subcategories!==null">
                                        <li v-for="(subcategory,key) in category.subcategories.split(',')">
                                            <a v-on:click="goToContent('subcategory',category.subcategory_links.split(',')[key])" class="dropdown-item nav-link nav_item">
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
    import { common_mixin } from '../../common/'
    import { menu_show , mobile } from '../store';
    export default {
        props : {
            categories : {
                type : Object ,
            default : {}
            }
        },
        data(){
            return {
                menu_show,
                mobile
            }
        },
        mixins: [common_mixin],
        mounted : function(){
            $("html").on('click', function (e) {
                if($(e.target).is('a.dropdown-item.nav-link.dropdown-toggler')==false
                    ){
                    $('.categories_btn').addClass('collapsed');
                $('.categories_btn,.side_navbar_toggler').attr('aria-expanded', 'false');
                $('#navCatContent,#navbarSidetoggle').removeClass('show');
            }
        });
        },
        methods : {
          goToContent(content,contentId){
            //this.changeShow()
            if(this.mobile.data==false ){
                this.menu_show.data=false
            }
            this.$router.push({path: '/shop/'+content + '/' + contentId })

        }
    }
}
</script>