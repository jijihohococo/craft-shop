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
                    @searchData="searchCountries"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/country/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='country'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getCountries" />
                    <DeleteMultiple
                    v-if="actions.delete" 
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="countries.data"
                    request="countries"
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
                                    :lengthData="countries.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Created At</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="country in countries.data" :key="country.id">
                                    <td>
                                        <DeleteCheck v-if="actions.delete"
                                        :objectData="country"
                                        :deleteArrayData="deleteData"
                                        :objectArrayData="multipleData"
                                        ref="deleteCheck"
                                        />
                                    </td>
                                    <td><div v-html="checkString(country.name)">
                                    </div></td>
                                    <td><div v-html="checkString(country.code)">
                                    </div></td>
                                    <td><div v-html="checkString(country.created_at)">
                                    </div></td>
                                    <td><div v-html="checkString(country.deleted_at)">
                                    </div></td>
                                    <td class="text-left">
                                        <ViewButton :data_name="country.name" :data_model="content" :data_id="country.id" />
                                        <EditButton v-if="actions.update && country.deleted_at==null" :content="content" link="country.edit" :dataId="country.id" />
                                        <Delete v-if="actions.delete" :content="content" :deleteAt="country.deleted_at" :deleteLink="'countries/'+country.id" :restoreLink="'country_restore/'+country.id"
                                        :id="country.id" :objectData="country" @update="updateData" />
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <Pagination :page="currentPage" :lastPage="countries.last_page" @getData="getCountries" @searchData="searchCountries" 
                    :search="search" :from="countries.from" :to="countries.to" :total="countries.total" />
                </div>
            </template>
        </div>
        <!-- /.card -->
    </div>
</div>
<!-- /.row -->
<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
 <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for country" />
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
            content : 'Country',
            mainData : 'countries',
            getMethod : 'getCountries',
            countries : {}
        }
    },
    mixins: [mixin],
    methods :{
        getCountries(page){
            window.axios.get(makeRoute(this,page,'country') + page ).then(( response ) =>  {
                this.getMainData(response)
         } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
     },
     searchCountries(page){
        window.axios.get(makeRoute(this,page,'country','search') + this.search + '&page=' + page ).then( (response) => {
         this.getMainData(response)
 } ).catch( (error) => {
    errorResponse(error,this,'read');
} )
}
},
mounted : function(){
   this.getCountries(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
},
}
</script>