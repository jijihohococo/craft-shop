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
                    @searchData="searchBlogs"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/blog/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='blog'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getBlogs" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="blogs.data"
                    request="blogs"
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
                                    :lengthData="blogs.data.length"
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
                            <tr v-for="blog in blogs.data" :key="blog.id">
                                    <td>
                                        <DeleteCheck v-if="actions.delete"
                                        :objectData="blog"
                                        :deleteArrayData="deleteData"
                                        :objectArrayData="multipleData"
                                        ref="deleteCheck"
                                        />
                                    </td>
                                    <td><div v-html="checkString(blog.name)">
                                    </div></td>
                                    <td><div v-html="checkString(blog.created_at)">
                                    </div></td>
                                    <td><div v-html="checkString(blog.deleted_at)">
                                    </div></td>
                                    <td class="text-left">
                                        <ViewButton :data_name="blog.name" :data_model="content" :data_id="blog.id" />
                                        <EditButton v-if="actions.update && blog.deleted_at==null" :content="content" link="blog.edit" :dataId="blog.id" />
                                        <Delete v-if="actions.delete" :content="content" :deleteAt="blog.deleted_at" :deleteLink="'blogs/'+blog.id" :restoreLink="'blog_restore/'+blog.id"
                                        :id="blog.id" :objectData="blog" @update="updateData" />
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <Pagination :page="currentPage" :lastPage="blogs.last_page" @getData="getBlogs" @searchData="searchBlogs" 
                    :search="search" :from="blogs.from" :to="blogs.to" :total="blogs.total" />
                </div>
            </template>
        </div>
        <!-- /.card -->
    </div>
</div>
<!-- /.row -->
<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
 <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Blog" />
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
            content : 'Blog',
            mainData : 'blogs',
            getMethod : 'getBlogs',
            blogs : {}
        }
    },
    mixins: [mixin],
    methods :{
        getBlogs(page){
            window.axios.get(makeRoute(this,page,'blog') + page ).then(( response ) =>  {
                this.getMainData(response)
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchBlogs(page){
        window.axios.get(makeRoute(this,page,'blog','search') + this.search + '&page=' + page ).then( (response) => {
         this.getMainData(response)
 } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
mounted : function(){
   this.getBlogs(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
},
}
</script>