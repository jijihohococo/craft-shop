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
                    @searchData="searchSocialMedias"
                    />
                    <CreateButton v-if="actions.create" :content="content" link="/admin/social_media/create" />
                </div>
                <div class="card-header row">
                    <Trash :route="this.$route"
                    :router="this.$router"
                    content='social_media'
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    @getData="getSocialMedias" />
                    <DeleteMultiple
                    v-if="actions.delete"
                    :deleteArrayData="deleteData"
                    :objectArrayData="multipleData"
                    :routeName="this.$route.name"
                    :mainData="social_medias.data"
                    request="social_medias"
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
                                    :lengthData="social_medias.data.length"
                                    ref="deleteAll"
                                    />
                                </th>
                                <th>Name</th>
                                <th>Picture</th>
                                <th>Deleted At</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="social_media in social_medias.data" :key="social_media.id">
                                <td>
                                    <DeleteCheck
                                    v-if="actions.delete"
                                    :objectData="social_media"
                                    :deleteArrayData="deleteData"
                                    :objectArrayData="multipleData"
                                    ref="deleteCheck"
                                    />
                                </td>
                                <td>{{ social_media.name }}</td>
                                <td><v-lazy-image class="img-fluid" 
                                    :src="'/image/social_media_images/'+social_media.pic" /></td>
                                <td>{{ social_media.deleted_at }}</td>
                                <td class="text-left">
                                    <ViewButton :data_name="social_media.name" :data_model="content" :data_id="social_media.id" />
                                    <EditButton v-if="actions.update && social_media.deleted_at==null" :content="content" link="social_media.edit" :dataId="social_media.id" />
                                    <Delete v-if="actions.delete" :content="content" :deleteAt="social_media.deleted_at" :deleteLink="'social_medias/'+social_media.id" :restoreLink="'social_media_restore/'+social_media.id" :id="social_media.id" :objectData="social_media" @update="updateData" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <Pagination :page="currentPage" :lastPage="social_medias.last_page" @getData="getSocialMedias" @searchData="searchSocialMedias" :search="search" :from="social_medias.from" :to="social_medias.to" :total="social_medias.total" />
                </div>
            </template>
        </div>
        <!-- /.card -->
    </div>
</div>
<!-- /.row -->
<div v-else-if="checkUnauthorizeActions(actions)" class="card card-default">
 <Error :httpStatus="403" title="Permission Denied" description="You are not allowed to do any permissions for Social Media" />
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

    import VLazyImage from "v-lazy-image";

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
            DeleteAllCheck,
            VLazyImage
        },
        data () {
           return {
            content : 'SocialMedia' ,
            deleteData : [],
            multipleData : [] ,
            social_medias : {},
            search : null ,
            currentPage : 1,
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
            this.getSocialMedias( showPageNumber(this.currentPage) )
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
            deleteFromArray(this.social_medias.data,object)
        },
        getSocialMedias(page){
            window.axios.get(makeRoute(this,page,'social_media') + page ).then(( response ) =>  {
                if(response.data.message=='Loading'){

                    showSwalLoading(this);
                }else{
                   this.social_medias=response.data.social_medias
                   this.actions.read=true;
               }
           } ).catch( (error) => {
            errorResponse(error,this,'read')
        } );
       },
       searchSocialMedias(page){
        window.axios.get(makeRoute(this,page,'social_media','search') + this.search + '&page=' + page ).then( (response) => {
            if(response.data.message=='Loading'){

                showSwalLoading(this);
            }else{
             this.social_medias=response.data.social_medias
             this.actions.read=true;
         }
     } ).catch( (error) => {
        errorResponse(error,this,'read')
    } )
 }
},
mounted : function(){
   this.getSocialMedias(1);
   checkContentPermission(this.content,'create',this);
   checkContentPermission(this.content,'update',this);
   checkContentPermission(this.content,'delete',this);
}
}
</script>