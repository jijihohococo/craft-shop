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
                    @searchData="searchAttributes"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/attribute/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='attribute'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getAttributes" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="attributes.data"
                    request="data_attributes"
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
                                    :lengthData="attributes.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="attribute in attributes.data" :key="attribute.id">
                                <td>
                                    <DeleteCheck
                                    v-if="actions.delete"
                                    :objectData="attribute"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    />
                                </td>
                                <td>{{ attribute.name }}</td>
                                <td>{{ attribute.deleted_at }}</td>
                                <td class="text-left">
                                    <ViewButton :data_name="attribute.name" :data_model="content" :data_id="attribute.id" />
                                    <EditButton v-if="actions.update && attribute.deleted_at==null" :content="content" link="attribute.edit" :dataId="attribute.id" />
                                    <Delete v-if="actions.delete" :content="content" :deleteAt="attribute.deleted_at" :deleteLink="'attributes/'+attribute.id" :restoreLink="'attribute_restore/'+attribute.id"
                                    :id="attribute.id" :objectData="attribute" @update="updateData" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <Pagination :page="currentPage" :lastPage="attributes.last_page" @getData="getAttributes" @searchData="searchAttributes" :search="search" :from="attributes.from" :to="attributes.to" :total="attributes.total" />
                </div>
            </template>
        </div>
        <!-- /.card -->
    </div>
</div>
<!-- /.row -->
<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
 <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Attribute" />
</div>
</div>
</section>
</template>
<script >

    import { errorResponse , checkContentPermission , makeRoute , showPageNumber } from '../helpers/check';

    import { showSwalLoading } from  '../../helpers/general'

    import { mixin } from '../common/data_list';

    export default {
        mixins: [mixin],
        data () {
           return {
            content : 'Attribute',
            attributes : {},
        }
    },
    methods :{
        freshPage(){
            this.getAttributes( showPageNumber(this.currentPage) )
        },
        getAttributes(page){
            window.axios.get(makeRoute(this,page,'attribute') + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                 this.attributes=response.data.attributes
                 this.actions.read=true;
             }
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchAttributes(page){
        window.axios.get(makeRoute(this,page,'attribute','search') + this.search + '&page=' + page ).then( (response) => {
         if(response.data.message=='Loading'){

            showSwalLoading(this);
        }else{
         this.attributes=response.data.attributes
         this.actions.read=true;
     }
 } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
mounted : function(){
   this.getAttributes(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
},
}
</script>