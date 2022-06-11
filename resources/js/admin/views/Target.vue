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
                    @searchData="searchTargets"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/target/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='target'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getTargets" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="targets.data"
                    request="targets"
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
                                    :lengthData="targets.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Duration</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="target in targets.data" :key="target.id">
                                <td><DeleteCheck
                                    v-if="actions.delete"
                                    :objectData="target"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    /></td>
                                    <td>{{ target.name }}</td>
                                    <td>{{ target.duration }}</td>
                                    <td>{{ target.deleted_at }}</td>
                                    <td class="text-left">
                                        <ViewButton :data_name="target.name" :data_model="content" :data_id="target.id" />
                                        <EditButton v-if="actions.update && target.deleted_at==null" :content="content" :link="'target.edit'" :dataId="target.id" />
                                        <Delete v-if="actions.delete" :content="content" :deleteAt="target.deleted_at" :deleteLink="'targets/'+target.id" :restoreLink="'target_restore/'+target.id"  :id="target.id" :objectData="target" @update="updateData"  />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer clearfix">
                        <Pagination :page="currentPage" :lastPage="targets.last_page"  @getData="getTargets" @searchData="searchTargets" :search="search" :from="targets.from" :to="targets.to" :total="targets.total" />
                    </div>
                </template>
            </div>
            <!-- /.card -->
        </div>
    </div>
    <!-- /.row -->
    <div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
        <Error :httpStatus="403" title="Permission Denied'" description="You are not allowed to do any permissions for Target" />
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
            content : 'Target',
            deleteData : [],
            multipleData : [] ,
            targets : {},
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
            this.getTargets( showPageNumber(this.currentPage) )
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
            deleteFromArray(this.targets.data,object)
        },
        getTargets(page){
            window.axios.get(makeRoute(this,page,'target') + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                 this.targets=response.data.targets
                 this.actions.read=true;
             }
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchTargets(page){
        window.axios.get(makeRoute(this,page,'target','search') + this.search + '&page=' + page ).then( (response) => {
            if(response.data.message=='Loading'){

                showSwalLoading(this);
            }else{
             this.targets=response.data.targets
             this.actions.read=true;
         }
     } ).catch( (error) => {
        errorResponse(error,this,'read')
    } )
 }
},
created(){
   this.getTargets(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
}
}
</script>