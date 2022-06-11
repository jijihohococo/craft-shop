<template>
    <ContentHeader :header="content" />
    <Loading />
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
                                    <td>{{ category.name }}</td>
                                    <td>{{ category.deleted_at }}</td>
                                    <td class="text-left">
                                        <ViewButton :data_name="category.name" :data_model="content" :data_id="category.id" />
                                        <EditButton v-if="actions.update && category.deleted_at==null" :content="content" link="category.edit" :dataId="category.id" />
                                        <Delete v-if="actions.delete" :content="content" :deleteAt="category.deleted_at" :deleteLink="'categories/'+category.id" :restoreLink="'category_restore/'+category.id"
                                        :id="category.id" :objectData="category" @update="updateData" />
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

    import Pagination from '../components/Pagination';

    import Delete from '../components/Delete';

    import DeleteAllCheck from '../components/DeleteAllCheck';

    import ContentHeader from '../components/ContentHeader';

    import CreateButton from '../components/CreateButton';

    import EditButton from '../components/EditButton';

    import ViewButton from '../components/ViewButton';

    import Error from '../components/Error';

    import Loading from '../components/Loading';

    import DeleteCheck from '../components/DeleteCheck';

    import Trash from '../components/Trash';

    import DeleteMultiple from '../components/DeleteMultiple';

    import Search from '../components/Search';

    import { errorResponse , checkContentPermission , showSwalLoading , makeSelect , makeRoute , checkActions , deleteFromArray , unauthorizedActions , showPageNumber } from '../helpers/check.js';

    export default {
        components: {
            Search,
            Pagination,
            ContentHeader,
            Delete,
            CreateButton,
            EditButton,
            ViewButton,
            Error,
            Loading,
            DeleteCheck,
            Trash,
            DeleteMultiple,
            DeleteAllCheck
        },
        data () {
           return {
            content : 'Category',
            deleteData : [],
            multipleData : [] ,
            categories : {},
            currentPage : 1 ,
            search : null ,
            actions : {
                create : '' ,
                read : '' ,
                update : '' ,
                delete : ''
            }
        }
    },
    methods :{
        freshPage(){
            this.getCategories( showPageNumber(this.currentPage) )
        },
        checkAuthorizeActions(actions){
            return checkActions(actions);
        },
        checkUnauthorizeActions(actions){
            return unauthorizedActions(actions);
        },
        selectChecks(){
            if(this.$refs.deleteCheck!==undefined){
                makeSelect(this.$refs.deleteCheck,true)
            }
        },
        cancelChecks(){
            if(this.$refs.deleteCheck!==undefined){
                makeSelect(this.$refs.deleteCheck,false)
            }
        },
        updateData(object){
            deleteFromArray(this.categories.data,object)
        },
        getCategories(page){
            window.axios.get(makeRoute(this,page,'category') + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                 this.categories=response.data.categories
                 this.actions.read=true;
             }
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchCategories(page){
        window.axios.get(makeRoute(this,page,'category','search') + this.search + '&page=' + page ).then( (response) => {
         if(response.data.message=='Loading'){

            showSwalLoading(this);
        }else{
         this.categories=response.data.categories
         this.actions.read=true;
     }
 } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
created(){
   this.getCategories(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
},
}
</script>