<template>
	<div class="middle-header dark_skin">
      <div class="container">
          <div class="nav_block">
            <ShopImage :pic="shop.data.pic" />
            <div class="contact_phone order-md-last">
                <i class="linearicons-phone-wave"></i>
                <span>{{ shop.data.phone }}</span>
            </div>
            <div class="product_search_form">
                <form>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="custom_select">
                                <select class="first_null">
                                    <option value="">{{ translateLang("Categories") }} </option>
                                    <option :value="category.id" v-for="category in categories">{{ category.name }} </option>
                                </select>
                            </div>
                        </div>
                        <input class="form-control" placeholder="Search Product..." required=""  type="text">
                        <button type="submit" class="search_btn"><i class="linearicons-magnifier"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- <component is="script" src="user/js/scripts.js" /> -->
</template>
<script >
    import ShopImage from './ShopImage';
    import { shop } from '../../store';
    import { common_mixin } from '../../common/'
    export default {
        components : {
            ShopImage
        },
        data(){
            return {
                shop
            }
        },
        mixins: [common_mixin],
        props : {
            categories : {
                type : Object ,
                default : {}
            }
        }
    }
</script>