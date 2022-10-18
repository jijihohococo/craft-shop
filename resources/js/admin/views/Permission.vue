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
                    @searchData="searchPermissions"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/permission/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='permission'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getPermissions" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="permissions.data"
                    request="permissions"
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
                                    :lengthData="permissions.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Content</th>
                                <th>Access</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="permission in permissions.data" :key="permission.id">
                                <td><DeleteCheck
                                    v-if="actions.delete"
                                    :objectData="permission"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    /></td>
                                    <td>{{ permission.name }}</td>
                                    <td>{{ permission.model }}</td>
                                    <td>
                                     <template v-for="access in ['create','update','read','delete']">
                                       <template v-if="permission[access]==true" >
                                        {{ access }},
                                    </template>
                                </template>
                            </td>
                            <td>{{ permission.deleted_at }}</td>
                            <td class="text-left">
                                <ViewButton :data_name="permission.name" :data_model="content" :data_id="permission.id" />
                                <EditButton v-if="actions.update && permission.deleted_at==null" :content="content" link="permission.edit" :dataId="permission.id" />

                                <Delete v-if="actions.delete" :content="content" :deleteAt="permission.deleted_at" :deleteLink="'permissions/'+permission.id" :restoreLink="'permission_restore/'+permission.id" :id="permission.id" :objectData="permission" @update="updateData" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- /.card-body -->
            <div class="card-footer clearfix">
                <Pagination :page="currentPage" :lastPage="permissions.last_page"  @getData="getPermissions" @searchData="searchPermissions" :search="search" :from="permissions.from" :to="permissions.to" :total="permissions.total" />
            </div>
        </template>
    </div>
    <!-- /.card -->
</div>
</div>
<!-- /.row -->
<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
   <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Permission" />
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
            content : 'Permission',
            deleteData : [],
            multipleData : [] ,
            permissions : {},
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
        freshPage(){
            this.getPermissions( showPageNumber(this.currentPage) )
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
            deleteFromArray(this.permissions.data,object)
        },
        getPermissions(page){
            window.axios.get(makeRoute(this,page,'permission') + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                   this.permissions=response.data.permissions
                   this.actions.read=true
               }
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchPermissions(page){
        window.axios.get(makeRoute(this,page,'permission','search') + this.search + '&page=' + page ).then( (response) => {
            if(response.data.message=='Loading'){

                showSwalLoading(this);
            }else{
               this.permissions=response.data.permissions
               this.actions.read=true
           }
       } ).catch( (error) => {
        errorResponse(error,this,'read')
    } )
   }
},
mounted : function(){
 this.getPermissions(1);
 checkContentPermission(this.content,'create',this);
 checkContentPermission(this.content,'update',this);
 checkContentPermission(this.content,'delete',this);
}
}
</script>