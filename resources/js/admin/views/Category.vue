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
                    @searchData="searchCategories"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/category/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='category'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getCategories" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="categories.data"
                    request="categories"
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
                                    :lengthData="categories.data.length"
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
                            <tr v-for="category in categories.data" :key="category.id">
                                    <td>
                                        <DeleteCheck v-if="actions.delete"
                                        :objectData="category"
                                        :deleteArrayData="deleteData"
                                        :objectArrayData="multipleData"
                                        ref="deleteCheck"
                                        />
                                    </td>
                                    <td><div v-html="checkString(category.name)">
                                    </div></td>
                                    <td><div v-html="checkString(category.created_at)">
                                    </div></td>
                                    <td><div v-html="checkString(category.deleted_at)">
                                    </div></td>
                                    <td class="text-left">
                                        <ViewButton :data_name="category.name" :data_model="content" :data_id="category.id" />
                                        <EditButton v-if="actions.update && category.deleted_at==null" :content="content" link="category.edit" :dataId="category.id" />
                                        <Delete v-if="actions.delete" :content="content" :deleteAt="category.deleted_at" :deleteLink="'categories/'+category.id" :restoreLink="'category_restore/'+category.id"
                                        :id="category.id" :objectData="category" @update="updateData" />
                                        <EditSeoButton 
                                        :content="content"
                                        :content_id="category.id"/>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <Pagination :page="currentPage" :lastPage="categories.last_page" @getData="getCategories" @searchData="searchCategories" 
                    :search="search" :from="categories.from" :to="categories.to" :total="categories.total" />
                </div>
            </template>
        </div>
        <!-- /.card -->
    </div>
</div>
<!-- /.row -->
<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
 <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Category" />
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
            content : 'Category',
            mainData : 'categories',
            getMethod : 'getCategories',
            categories : {}
        }
    },
    mixins: [mixin],
    methods :{
        getCategories(page){
            window.axios.get(makeRoute(this,page,'category') + page ).then(( response ) =>  {
                this.getMainData(response)
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchCategories(page){
        window.axios.get(makeRoute(this,page,'category','search') + this.search + '&page=' + page ).then( (response) => {
         this.getMainData(response)
 } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
mounted : function(){
   this.getCategories(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
},
}
</script>