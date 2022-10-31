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
                    @searchData="searchBanners"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/banner/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='banner'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getBanners" />
                    <DeleteMultiple
                    v-if="actions.delete"
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="banners.data"
                    request="banners"
                    @freshData="freshPage" />
                </div>
                <!-- /.card-header -->
                <template v-if="actions.read">
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                          <thead>
                            <tr>
                                <th>
                                    <DeleteAllCheck
                                    v-if="actions.delete"
                                    :deleteArrayData="deleteData"
                                    @selectAll="selectChecks"
                                    @cancelAll="cancelChecks"
                                    :lengthData="banners.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Title</th>
                                <th>Picture</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="banner in banners.data" :key="banner.id">
                                <td>
                                    <DeleteCheck
                                    v-if="actions.delete"
                                    :objectData="banner"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    />
                                </td>
                                <td><div v-html="checkString(banner.title)">
                                    </div></td>
                                <td>
                                    <v-lazy-image 
                                    class="img-fluid"
                                    :src="'/image/banner_images/'+banner.pic"/>
                                </td>
                                <td><div v-html="checkString(banner.deleted_at)">
                                    </div></td>
                                <td class="text-left">
                                    <ViewButton :data_name="banner.title" :data_model="content" :data_id="banner.id" />
                                    <EditButton v-if="actions.update && banner.deleted_at==null" :content="content" link="banner.edit" :dataId="banner.id" />
                                    <Delete v-if="actions.delete" :content="content" :deleteAt="banner.deleted_at" :deleteLink="'banners/'+banner.id" :restoreLink="'banner_restore/'+banner.id" :id="banner.id" :objectData="banner" @update="updateData" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <Pagination :page="currentPage" :lastPage="banners.last_page" @getData="getBanners" @searchData="searchBanners" :search="search" :from="banners.from" :to="banners.to" :total="banners.total" />
                </div>
            </template>
        </div>
        <!-- /.card -->
    </div>
</div>
<!-- /.row -->
<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
   <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Banner" />
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
        mixins : [mixin],
        data () {
         return {
            content : 'Banner' ,
            mainData : 'banners',
            getMethod : 'getBanners',
            banners : {},
        }
    },
    methods :{
        getBanners(page){
            window.axios.get(makeRoute(this,page,'banner') + page ).then(( response ) =>  {
                this.getMainData(response)
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchBanners(page){
        window.axios.get(makeRoute(this,page,'banner','search') + this.search + '&page=' + page ).then( (response) => {
            this.getMainData(response)
       } ).catch( (error) => {
        errorResponse(error,this,'read')
    } )
   }
},
mounted : function(){
 this.getBanners(1);
 checkContentPermission(this.content,'create',this);
 checkContentPermission(this.content,'update',this);
 checkContentPermission(this.content,'delete',this);
}
}
</script>