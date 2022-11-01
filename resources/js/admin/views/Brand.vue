<template>
    <ContentHeader :header="content" />
    <section class="content">
        <div class="container-fluid">
            <!-- /.row -->
            <div v-if="checkAuthorizeActions(actions)" class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header row">
                    <Search 
                    :read="actions.read"
                    ref="searchModal"
                    @searchData="searchBrands"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/brand/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='brand'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getBrands" />
                    <DeleteMultiple
                    v-if="actions.delete"  
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="brands.data"
                    request="brands"
                    @freshData="freshPage" />
                </div>
                <!-- /.card-header -->
                <template v-if="actions.read">
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                          <thead>
                            <tr>
                                <th><DeleteAllCheck
                                    v-if="actions.delete" 
                                    :deleteArrayData="deleteData"
                                    @selectAll="selectChecks"
                                    @cancelAll="cancelChecks"
                                    :lengthData="brands.data.length"
                                    ref="deleteAll"
                                    /></th>
                                    <th>Name</th>
                                    <th>Picture</th>
                                    <th>Created At</th>
                                    <th>Deleted At</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="brand in brands.data" :key="brand.id">
                                    <td><DeleteCheck
                                        v-if="actions.delete" 
                                        :objectData="brand"
                                        :deleteArrayData="deleteData"
                                        :objectArrayData="multipleData"
                                        ref="deleteCheck"
                                        /></td>
                                        <td><div v-html="checkString(brand.name)">
                                    </div></td>
                                        <td><v-lazy-image :src="'/image/brand_images/'+brand.pic" /></td>
                                        <td><div v-html="checkString(brand.created_at)">
                                    </div></td>
                                        <td><div v-html="checkString(brand.deleted_at)">
                                    </div></td>
                                        <td class="text-left">
                                            <ViewButton :data_name="brand.name" :data_model="content" :data_id="brand.id" />
                                            <EditButton v-if="actions.update && brand.deleted_at==null" :content="content" link="brand.edit" :dataId="brand.id" />
                                            <Delete v-if="actions.delete" :content="content" :deleteAt="brand.deleted_at" :deleteLink="'brands/'+brand.id" :restoreLink="'brand_restore/'+brand.id" :id="brand.id" :objectData="brand" @update="updateData" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer clearfix">
                            <Pagination :page="currentPage" :lastPage="brands.last_page" @getData="getBrands" @searchData="searchBrands" :search="search" :from="brands.from" :to="brands.to" :total="brands.total" />
                        </div>
                    </template>
                </div>
                <!-- /.card -->
            </div>
        </div>
        <!-- /.row -->
        <div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
            <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Brand" />
     </div>
 </div>
</section>
</template>
<script >

    import VLazyImage from "v-lazy-image"

    import { errorResponse , checkContentPermission , makeRoute } from '../helpers/check';

    import { mixin } from '../common/data_list';

    export default {
        components: {
            VLazyImage
        },
        mixins: [mixin],
        data () {
           return {
            content : 'Brand' ,
            mainData : 'brands',
            getMethod : 'getBrands',
            brands : {}
        }
    },
    methods :{
        getBrands(page){
            window.axios.get(makeRoute(this,page,'brand') + page ).then(( response ) =>  {
                this.getMainData(response)
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchBrands(page){
        window.axios.get(makeRoute(this,page,'brand','search') + this.search + '&page=' + page ).then( (response) => {
            this.getMainData(response)
     } ).catch( (error) => {
        errorResponse(error,this,'read')
    } )
 }
},
mounted : function(){
   this.getBrands(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
}
}
</script>