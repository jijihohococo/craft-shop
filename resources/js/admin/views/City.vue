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
                    @searchData="searchCities"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/city/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='city'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getCities" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="cities.data"
                    request="cities"
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
                                    :lengthData="cities.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>State</th>
                                <th>Country</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="city in cities.data" :key="city.id">
                                <td>
                                    <DeleteCheck v-if="actions.delete"
                                    :objectData="city"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    />
                                </td>
                                <td>{{ city.name }}</td>
                                <td>{{ city.state_name }}</td>
                                <td>{{ city.country_name }}</td>
                                <td>{{ city.deleted_at }}</td>
                                <td class="text-left">
                                    <ViewButton :data_name="city.name" :data_model="content" :data_id="city.id" />
                                    <EditButton v-if="actions.update && city.deleted_at==null" :content="content" link="city.edit" :dataId="city.id" />
                                    <Delete v-if="actions.delete" :content="content" :deleteAt="city.deleted_at" :deleteLink="'cities/'+city.id" :restoreLink="'city_restore/'+city.id"
                                    :id="city.id" :objectData="city" @update="updateData" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <Pagination :page="currentPage" :lastPage="cities.last_page" @getData="getCities" @searchData="searchCities" 
                    :search="search" :from="cities.from" :to="cities.to" :total="cities.total" />
                </div>
            </template>
        </div>
        <!-- /.card -->
    </div>
</div>
<!-- /.row -->
<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
   <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for city" />
</div>
</div>
</section>
</template>
<script >

    import { errorResponse , checkContentPermission , makeRoute , showPageNumber , deleteFromArray } from '../helpers/check';

    import { mixin } from '../common/data_list';

    export default {
        data () {
         return {
            content : 'City',
            mainData : 'cities',
            getMethod : 'getCities',
            cities : {}
        }
    },
    mixins: [mixin],
    methods :{
        getCities(page){
            window.axios.get(makeRoute(this,page,'city') + page ).then(( response ) =>  {
                this.getMainData(response)
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchCities(page){
        window.axios.get(makeRoute(this,page,'city','search') + this.search + '&page=' + page ).then( (response) => {
           this.getMainData(response)
   } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
mounted : function(){
 this.getCities(1);
 checkContentPermission(this.content,'create',this);
 checkContentPermission(this.content,'update',this);
 checkContentPermission(this.content,'delete',this);
},
}
</script>