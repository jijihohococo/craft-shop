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
                    @searchData="searchCollections"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/collection/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='collection'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getCollections" />
                    <DeleteMultiple
                    v-if="actions.delete"  
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="collections.data"
                    request="collections"
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
                                    :lengthData="collections.data.length"
                                    ref="deleteAll"
                                    /></th>
                                    <th>Name</th>
                                    <th>Picture</th>
                                    <th>Deleted At</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="collection in collections.data" :key="collection.id">
                                    <td><DeleteCheck
                                        v-if="actions.delete" 
                                        :objectData="collection"
                                        :deleteArrayData="deleteData"
                                        :objectArrayData="multipleData"
                                        ref="deleteCheck"
                                        /></td>
                                        <td>{{ collection.name }}</td>
                                        <td>
                                            <v-lazy-image
                                            class="img-fluid"
                                            :src="'/image/collection_images/'+collection.pic" />
                                        </td>
                                        <td>{{ collection.deleted_at }}</td>
                                        <td class="text-left">
                                            <ViewButton :data_name="collection.name" :data_model="content" :data_id="collection.id" />
                                            <EditButton v-if="actions.update && collection.deleted_at==null" :content="content" link="collection.edit" :dataId="collection.id" />
                                            <Delete v-if="actions.delete" :content="content" :deleteAt="collection.deleted_at" :deleteLink="'collections/'+collection.id" :restoreLink="'collection_restore/'+collection.id" :id="collection.id" :objectData="collection" @update="updateData" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer clearfix">
                            <Pagination :page="currentPage" :lastPage="collections.last_page" @getData="getCollections" @searchData="searchCollections" :search="search" :from="collections.from" :to="collections.to" :total="collections.total" />
                        </div>
                    </template>
                </div>
                <!-- /.card -->
            </div>
        </div>
        <!-- /.row -->
        <div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
            <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Collection" />
     </div>
 </div>
</section>
</template>
<script >

    import VLazyImage from "v-lazy-image"

    import { errorResponse , checkContentPermission , makeRoute , showPageNumber } from '../helpers/check';

    import { showSwalLoading } from  '../../helpers/general'

    import { mixin } from '../common/data_list';

    export default {
        components: {
            VLazyImage
        },
        mixins: [mixin],
        data () {
           return {
            content : 'Collection' ,
            collections : {},
        }
    },
    methods :{
        freshPage(){
            this.getCollections( showPageNumber(this.currentPage) )
        },
        getCollections(page){
            window.axios.get(makeRoute(this,page,'collection') + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                   this.collections=response.data.collections
                   this.actions.read=true;
               }
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchCollections(page){
        window.axios.get(makeRoute(this,page,'collection','search') + this.search + '&page=' + page ).then( (response) => {
            if(response.data.message=='Loading'){

                showSwalLoading(this);
            }else{
             this.collections=response.data.collections
             this.actions.read=true;
         }
     } ).catch( (error) => {
        errorResponse(error,this,'read')
    } )
 }
},
mounted : function(){
   this.getCollections(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
}
}
</script>