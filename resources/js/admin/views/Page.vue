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
                    @searchData="searchPages"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/page/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='page'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getPages" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="pages.data"
                    request="pages"
                    @freshData="freshPage"
                     />
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
                                    :lengthData="pages.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Created At</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="page in pages.data" :key="page.id">
                                    <td>
                                        <DeleteCheck v-if="actions.delete"
                                        :objectData="page"
                                        :deleteArrayData="deleteData"
                                        :objectArrayData="multipleData"
                                        ref="deleteCheck"
                                        />
                                    </td>
                                    <td><div v-html="checkString(page.name)">
                                    </div></td>
                                    <td><div v-html="checkString(page.created_at)">
                                    </div></td>
                                    <td><div v-html="checkString(page.deleted_at)">
                                    </div></td>
                                    <td class="text-left">
                                        <ViewButton :data_name="page.name" :data_model="content" :data_id="page.id" />
                                        <EditButton v-if="actions.update && page.deleted_at==null" :content="content" link="page.edit" :dataId="page.id" />
                                        <Delete v-if="actions.delete" :content="content" :deleteAt="page.deleted_at" :deleteLink="'pages/'+page.id" :restoreLink="'page_restore/'+page.id"
                                        :id="page.id" :objectData="page" @update="updateData" />
                                        <EditSeoButton 
                                        :content="content"
                                        :content_id="page.id"/>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <Pagination :page="currentPage" :lastPage="pages.last_page" @getData="getPages" @searchData="searchPages" 
                    :search="search" :from="pages.from" :to="pages.to" :total="pages.total" />
                </div>
            </template>
        </div>
        <!-- /.card -->
    </div>
</div>
<!-- /.row -->
<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
 <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Page" />
</div>
</div>
</section>
</template>
<script >

    import { errorResponse , checkContentPermission , makeRoute } from '../helpers/check';

    import { mixin } from '../common/data_list';

    export default {
        data () {
           return {
            content : 'Page',
            mainData : 'pages',
            getMethod : 'getPages',
            pages : {}
        }
    },
    mixins: [mixin],
    methods :{
        getPages(page){
            window.axios.get(makeRoute(this,page,'page') + page ).then(( response ) =>  {
                this.getMainData(response)
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchPages(page){
        window.axios.get(makeRoute(this,page,'page','search') + this.search + '&page=' + page ).then( (response) => {
         this.getMainData(response)
 } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
mounted : function(){
   this.getPages(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
},
}
</script>