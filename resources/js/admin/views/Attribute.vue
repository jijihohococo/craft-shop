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
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    request="attributes" />
                </div>
                <!-- /.card-header -->
                <template v-if="actions.read">
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                          <thead>
                            <tr>
                                <th>
                                    <DeleteAllCheck
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
                                <template v-if="showData(this.$route,attribute,'attribute')">
                                <td>
                                    <DeleteCheck :objectData="attribute"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    />
                                </td>
                                <td>{{ attribute.name }}</td>
                                <td>{{ attribute.deleted_at }}</td>
                                <td class="text-left">
                                    <ViewButton :data_name="attribute.name" :data_model="content" :data_id="attribute.id" />
                                    <EditButton v-if="actions.update && attribute.deleted_at==null" :content="content" :link="'attribute.edit'" :dataId="attribute.id" />
                                    <Delete v-if="actions.delete" :content="content" :deleteAt="attribute.deleted_at" :deleteLink="'attributes/'+attribute.id" :restoreLink="'attribute_restore/'+attribute.id"
                                    :id="attribute.id" :objectData="attribute" @update="updateData" />
                                </td>
                            </template>
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
<div v-else-if="actions.create==false && actions.read==false && actions.update==false && actions.delete==false" class="card card-default">
 <Error :httpStatus="403" :title="'Permission Denied'" :description="'You are not allowed to do any permissions for Attribute'" />
</div>
</div>
</section>
</template>
<script >

    import Pagination from '../components/Pagination';

    import Delete from '../components/Delete';

    import DeleteAllCheck from '../components/DeleteAllCheck';

    import DeleteCheck from '../components/DeleteCheck';

    import Trash from '../components/Trash';

    import DeleteMultiple from '../components/DeleteMultiple';

    import ContentHeader from '../components/ContentHeader';

    import CreateButton from '../components/CreateButton';

    import EditButton from '../components/EditButton';

    import ViewButton from '../components/ViewButton';

    import Error from '../components/Error';

    import Loading from '../components/Loading';

    import Search from '../components/Search';

    import { errorResponse , checkContentPermission , showSwalLoading , showWithTrashData , makeSelect } from '../helpers/check.js';

    export default {
        components: {
            Pagination,
            ContentHeader,
            Delete,
            DeleteAllCheck,
            DeleteCheck,
            CreateButton,
            EditButton,
            ViewButton,
            Error,
            Loading,
            Trash,
            DeleteMultiple,
            Search
        },
        data () {
           return {
            content : 'Attribute',
            deleteData : [],
            multipleData : [] ,
            attributes : {},
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
        showData(route,object,pageName){
            return showWithTrashData(route,object,pageName)
        },
        updateData(object,deletedTime){
            object.deleted_at=deletedTime;
        },
        getAttributes(page){
            if(this.$refs.deleteAll!==undefined){
                this.$refs.deleteAll.$el.checked=false
                this.search=null;
            }
            this.currentPage=page;
            let route=this.$route.name=='attribute' ? 'attributes' : 'trash_attributes';
            window.axios.get(route+"?page=" + page ).then(( response ) =>  {
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
        this.currentPage=page;
        this.search=this.$refs.searchModal.searchData;
        let route=this.$route.name=='attribute' ? 'attribute_search' : 'attribute_trash_search';
        window.axios.get(route+'?search=' + this.search + '&page=' + page ).then( (response) => {
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
created(){
   this.getAttributes(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
},
}
</script>