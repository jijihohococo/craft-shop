<template>
    <ContentHeader :header="content" />
    <section class="content">
        <div class="container-fluid">
            <!-- /.row -->
            <div v-if="checkAuthorizeActions(actions)" class="row">
              <div class="col-12">
                <div class="card">
                    <!-- /.card-header -->
                    <template v-if="actions.read">
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                              <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Picture</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>{{ shop.data.name }}</td>
                                    <td>
                                        <v-lazy-image :src="showImage()" />
                                    </td>
                                    <td class="text-left">
                                        <ViewButton 
                                        :data_name="shop.data.name" 
                                        :data_model="content"
                                        :data_id="shop.data.id" />
                                        <EditButton 
                                        v-if="actions.update" 
                                        :content="content" 
                                        link="shop.edit" 
                                        :dataId="shop.data.id" />
                                        <EditSeoButton 
                                        :content="content"
                                        :content_id="shop.data.id"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </template>
            </div>
            <!-- /.card -->
        </div>
    </div>
    <!-- /.row -->
    <div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
        <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Shop" />
    </div>
</div>
</section>
</template>
<script >

    import ContentHeader from '../components/ContentHeader';

    import EditButton from '../components/EditButton';

    import ViewButton from '../components/ViewButton';

    import EditSeoButton from '../components/EditSeoButton';

    import Error from '../components/Error';

    import VLazyImage from "v-lazy-image";

    import { errorResponse , checkContentPermission , checkActions , unauthorizedActions } from '../helpers/check';

    import { showSwalLoading } from  '../../helpers/general'

    import { shop } from '../../store';

    export default {
        components: {
            ContentHeader,
            EditButton,
            ViewButton,
            EditSeoButton,
            Error,
            VLazyImage
        },
        data () {
           return {
            shop ,
            content : 'Shop' ,
            actions : {
                read : '' ,
                update : ''
            }
        }
    },
    methods :{
        showImage(){
            return this.shop.data.pic=='logo_dark.png' ?
            '/images/logo_dark.png' :
            '/image/shop_images/'+this.shop.data.pic
        },
        checkAuthorizeActions(actions){
            return checkActions(actions);
        },
        checkUnauthorizeActions(actions){
            return unauthorizedActions(actions);
        },
        getShops(){
            window.axios.get( 'shops' ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                  // this.shops=response.data.shops
                   this.actions.read=true;
               }
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },

   },
   created(){
       this.getShops();
       checkContentPermission(this.content,'update',this);
   }
}
</script>