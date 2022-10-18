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
                    @searchData="searchSubcategories"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/subcategory/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='subcategory'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getSubcategories" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="subcategories.data"
                    request="subcategories"
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
                                    :lengthData="subcategories.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="subcategory in subcategories.data" :key="subcategory.id">
                                    <td>
                                        <DeleteCheck v-if="actions.delete"
                                        :objectData="subcategory"
                                        :deleteArrayData="deleteData"
                                        :objectArrayData="multipleData"
                                        ref="deleteCheck"
                                        />
                                    </td>
                                    <td>{{ subcategory.name }}</td>
                                    <td>{{ subcategory.category_name }}</td>
                                    <td>{{ subcategory.deleted_at }}</td>
                                    <td class="text-left">
                                        <ViewButton :data_name="subcategory.name" :data_model="content" :data_id="subcategory.id" />
                                        <EditButton v-if="actions.update && subcategory.deleted_at==null" :content="content" link="subcategory.edit" :dataId="subcategory.id" />
                                        <Delete v-if="actions.delete" :content="content" :deleteAt="subcategory.deleted_at" :deleteLink="'subcategories/'+subcategory.id" :restoreLink="'subcategory_restore/'+subcategory.id"
                                        :id="subcategory.id" :objectData="subcategory" @update="updateData" />
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <Pagination :page="currentPage" :lastPage="subcategories.last_page" @getData="getSubcategories" @searchData="searchSubcategories" 
                    :search="search" :from="subcategories.from" :to="subcategories.to" :total="subcategories.total" />
                </div>
            </template>
        </div>
        <!-- /.card -->
    </div>
</div>
<!-- /.row -->
<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
 <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Subcategory" />
</div>
</div>
</section>
</template>
<script >

    import Pagination from '../../components/Pagination';

    import Delete from '../components/Delete';

    import DeleteAllCheck from '../components/DeleteAllCheck';

    import ContentHeader from '../components/ContentHeader';

    import CreateButton from '../components/CreateButton';

    import EditButton from '../components/EditButton';

    import ViewButton from '../components/ViewButton';

    import Error from '../components/Error';

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
            DeleteCheck,
            Trash,
            DeleteMultiple,
            DeleteAllCheck
        },
        data () {
           return {
            content : 'Subcategory',
            deleteData : [],
            multipleData : [] ,
            subcategories : {},
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
            this.getSubcategories( showPageNumber(this.currentPage) )
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
            deleteFromArray(this.subcategories.data,object)
        },
        getSubcategories(page){
            window.axios.get(makeRoute(this,page,'subcategory') + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                 this.subcategories=response.data.subcategories
                 this.actions.read=true;
             }
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchSubcategories(page){
        window.axios.get(makeRoute(this,page,'subcategory','search') + this.search + '&page=' + page ).then( (response) => {
         if(response.data.message=='Loading'){

            showSwalLoading(this);
        }else{
         this.subcategories=response.data.subcategories
         this.actions.read=true;
     }
 } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
mounted : function(){
   this.getSubcategories(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
},
}
</script>