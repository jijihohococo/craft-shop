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
                                <th>Created At</th>
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
                                    <td><div v-html="checkString(target.name)">
                                    </div></td>
                                    <td><div v-html="checkString(target.duration)">
                                    </div></td>
                                    <td><div v-html="checkString(target.created_at)">
                                    </div></td>
                                    <td><div v-html="checkString(target.deleted_at)">
                                    </div></td>
                                    <td class="text-left">
                                        <ViewButton :data_name="target.name" :data_model="content" :data_id="target.id" />
                                        <EditButton v-if="actions.update && target.deleted_at==null" :content="content" link="target.edit" :dataId="target.id" />
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

    import { errorResponse , checkContentPermission , makeRoute } from '../helpers/check';

    import { mixin } from '../common/data_list';

    export default {
        data () {
           return {
            content : 'Target',
            mainData : 'targets',
            getMethod : 'getTargets',
            targets : {}
        }
    },
    mixins: [mixin],
    methods :{
        getTargets(page){
            window.axios.get(makeRoute(this,page,'target') + page ).then(( response ) =>  {
                this.getMainData(response)
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchTargets(page){
        window.axios.get(makeRoute(this,page,'target','search') + this.search + '&page=' + page ).then( (response) => {
            this.getMainData(response)
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