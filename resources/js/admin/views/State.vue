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
                    @searchData="searchStates"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/state/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='state'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getStates" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="states.data"
                    request="states"
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
                                    :lengthData="states.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="state in states.data" :key="state.id">
                                    <td>
                                        <DeleteCheck v-if="actions.delete"
                                        :objectData="state"
                                        :deleteArrayData="deleteData"
                                        :objectArrayData="multipleData"
                                        ref="deleteCheck"
                                        />
                                    </td>
                                    <td>{{ state.name }}</td>
                                    <td>{{ state.country_name }}</td>
                                    <td>{{ state.deleted_at }}</td>
                                    <td class="text-left">
                                        <ViewButton :data_name="state.name" :data_model="content" :data_id="state.id" />
                                        <EditButton v-if="actions.update && state.deleted_at==null" :content="content" link="state.edit" :dataId="state.id" />
                                        <Delete v-if="actions.delete" :content="content" :deleteAt="state.deleted_at" :deleteLink="'states/'+state.id" :restoreLink="'state_restore/'+state.id"
                                        :id="state.id" :objectData="state" @update="updateData" />
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <Pagination :page="currentPage" :lastPage="states.last_page" @getData="getStates" @searchData="searchStates" 
                    :search="search" :from="states.from" :to="states.to" :total="states.total" />
                </div>
            </template>
        </div>
        <!-- /.card -->
    </div>
</div>
<!-- /.row -->
<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
 <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for state" />
</div>
</div>
</section>
</template>
<script >

    import { errorResponse , checkContentPermission , makeRoute , showPageNumber } from '../helpers/check';

    import { mixin } from '../common/data_list';

    export default {
        data () {
           return {
            content : 'State',
            mainData : 'states',
            getMethod : 'getStates',
            states : {}
        }
    },
    mixins: [mixin],
    methods :{
        getStates(page){
            window.axios.get(makeRoute(this,page,'state') + page ).then(( response ) =>  {
                this.getMainData(response)
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchStates(page){
        window.axios.get(makeRoute(this,page,'state','search') + this.search + '&page=' + page ).then( (response) => {
         this.getMainData(response)
 } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
mounted : function(){
   this.getStates(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
},
}
</script>