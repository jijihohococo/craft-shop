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
                    @searchData="searchColors"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/color/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='color'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getColors" />
                    <DeleteMultiple
                    v-if="actions.delete"  
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="colors.data"
                    request="colors"
                    @freshData="freshPage" />
                </div>
                <!-- /.card-header -->
                <template v-if="actions.read">
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover text-nowrap">
                          <thead>
                            <tr>
                                <th><DeleteAllCheck
                                    v-if="actions.delete"
                                    :deleteArrayData="deleteData"
                                    @selectAll="selectChecks"
                                    @cancelAll="cancelChecks"
                                    :lengthData="colors.data.length"
                                    ref="deleteAll"
                                    /></th>
                                    <th>Name</th>
                                    <th>Color Code</th>
                                    <th>Deleted At</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="color in colors.data" :key="color.id">
                                    <td><DeleteCheck 
                                        v-if="actions.delete"
                                        :objectData="color"
                                        :deleteArrayData="deleteData"
                                        :objectArrayData="multipleData"
                                        ref="deleteCheck"
                                        /></td>
                                        <td><div v-html="checkString(color.name)">
                                    </div></td>
                                        <td>
                                            <input type="color" :value="color.color_code" disabled>
                                        <div v-html="checkString(color.color_code)">
                                    </div></td>
                                        <td><div v-html="checkString(color.deleted_at)">
                                    </div></td>
                                        <td class="text-left">
                                            <ViewButton :data_name="color.name" :data_model="content" :data_id="color.id" />
                                            <EditButton v-if="actions.update && color.deleted_at==null" :content="content" link="color.edit" :dataId="color.id" />
                                            <Delete v-if="actions.delete" :content="content" :deleteAt="color.deleted_at" :deleteLink="'colors/'+color.id" :restoreLink="'color_restore/'+color.id"
                                            :id="color.id" :objectData="color" @update="updateData" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer clearfix">
                            <Pagination :page="currentPage" :lastPage="colors.last_page" @getData="getColors" @searchData="searchColors" :search="search" :from="colors.from" :to="colors.to" :total="colors.total" />
                        </div>
                    </template>
                </div>
                <!-- /.card -->
            </div>
        </div>
        <!-- /.row -->
        <div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
            <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Color" />
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
            content : 'Color',
            mainData : 'colors',
            getMethod : 'getColors',
            colors : {}
        }
    },
    mixins: [mixin],
    methods :{
        getColors(page){
            window.axios.get(makeRoute(this,page,'color') + page ).then(( response ) =>  {
                this.getMainData(response)
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchColors(page){
        window.axios.get(makeRoute(this,page,'color','search') + this.search + '&page=' + page ).then( (response) => {
         this.getMainData(response)
 } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
mounted : function(){
   this.getColors(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
},
}
</script>