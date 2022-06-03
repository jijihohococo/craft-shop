<template>
    <ContentHeader :header="content" />
    <Loading />
    <section class="content">
        <div class="container-fluid">
            <!-- /.row -->
            <div v-if="actions.create==true || actions.read==true || actions.update==true || actions.delete==true" class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header row">
                    <div v-if="actions.read" class="card-tools col-8 mt-1">
                        <form v-on:submit.prevent="searchCategories(1)">
                          <div class="input-group" >
                            <input type="text" name="table_search" v-model="search" class="form-control float-right" placeholder="Search">

                            <div class="input-group-append">
                              <button type="submit" class="btn btn-default" >
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <CreateButton v-if="actions.create" :content="content" :link="'/admin/category/create'" />
        </div>
        <div class="card-header row">
            <a v-if="this.$route.name=='category'" v-on:click="changePage()" class="btn btn-secondary" >Trash</a>
            <a v-else v-on:click="changePage()" class="btn btn-primary" >No Trash</a>
            <a v-if="deleteData.length>0" class="btn btn-danger ml-3" v-on:click="deleteManyData()" >Delete</a>
        </div>
        <!-- /.card-header -->
        <template v-if="actions.read">
            <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Deleted At</th>
                      <th>Operation</th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="category in categories.data" :key="category.id">
                    <template v-if="showData(this.$route,category,'category')">
                  <td><input class="form-check-input" type="checkbox" :value="category.id" @change="check($event,deleteData)">{{ category.name }}</td>
                  <td>{{ category.deleted_at }}</td>
                  <td class="text-left">
                    <ViewButton :data_name="category.name" :data_model="content" :data_id="category.id" />
                    <EditButton v-if="actions.update && category.deleted_at==null" :content="content" :link="'category.edit'" :dataId="category.id" />
                    <Delete v-if="actions.delete" :content="content" :deleteAt="category.deleted_at" :deleteLink="'categories/'+category.id" :restoreLink="'category_restore/'+category.id"
                    :id="category.id" :objectData="category" @update="updateData" />
                </td>
            </template>
            </tr>
        </tbody>
    </table>
</div>
<!-- /.card-body -->
<div class="card-footer clearfix">
    <Pagination :page="currentPage" :lastPage="categories.last_page" @getData="getCategories" @searchData="searchCategories" :search="search" :from="categories.from" :to="categories.to" :total="categories.total" />
</div>
</template>
</div>
<!-- /.card -->
</div>
</div>
<!-- /.row -->
<div v-else-if="actions.create==false && actions.read==false && actions.update==false && actions.delete==false" class="card card-default">
 <Error :httpStatus="403" :title="'Permission Denied'" :description="'You are not allowed to do any permissions for Category'" />
</div>
</div>
</section>
</template>
<script >

    import Pagination from '../components/Pagination';

    import Delete from '../components/Delete';

    import ContentHeader from '../components/ContentHeader';

    import CreateButton from '../components/CreateButton';

    import EditButton from '../components/EditButton';

    import ViewButton from '../components/ViewButton';

    import Error from '../components/Error';

    import Loading from '../components/Loading';

    import { errorResponse , checkContentPermission , showSwalLoading , showTrashPage , checkToDelete , showWithTrashData , deleteMultipleData } from '../helpers/check.js';

    export default {
        components: {
            Pagination,
            ContentHeader,
            Delete,
            CreateButton,
            EditButton,
            ViewButton,
            Error,
            Loading
        },
        data () {
           return {
            content : 'Category',
            deleteData : [],
            categories : {},
            search : null ,
            currentPage : 1 ,
            actions : {
                create : '' ,
                read : '' ,
                update : '' ,
                delete : ''
            }
        }
    },
    methods :{
        deleteManyData(){
            deleteMultipleData(this.categories.data,this.deleteData)
        },
        showData(route,object,pageName){
            return showWithTrashData(route,object,pageName)
        },
        check($event,deleteData){
            checkToDelete($event,deleteData)
        },
        changePage(){
            showTrashPage(this.$route,this.$router,'category')
            this.getCategories(1);
        },
        updateData(object,deletedTime){
            object.deleted_at=deletedTime;
        },
        getCategories(page){
            this.currentPage=page;
            let route=this.$route.name=='category' ? 'categories' : 'trash_categories';
            window.axios.get(route+"?page=" + page ).then(( response ) =>  {
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
        this.currentPage=page;
        window.axios.get('category_search?search=' + this.search + '&page=' + page ).then( (response) => {
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