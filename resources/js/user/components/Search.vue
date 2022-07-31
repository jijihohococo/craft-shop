<template>
	<div class="middle-header dark_skin">
      <div class="container">
          <div class="nav_block">
            <a class="navbar-brand" href="index.html">
                <!-- <img class="logo_light" src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_light.png" alt="logo" /> -->
                <img class="logo_dark" 
                :src="'/image/shop_images/'+shop.data.pic" alt="logo" />
            </a>
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
                                    <option value="">All Category </option>
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
</template>
<script >
    import { shop } from '../../store';
	export default {
        data(){
            return {
                shop
            }
        },
        props : {
            categories : {
                type : Object ,
                default : {}
            }
        }
    }
</script>