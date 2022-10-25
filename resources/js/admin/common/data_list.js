import { checkActions , unauthorizedActions , makeSelect , deleteFromArray } from '../helpers/check';

import { mainMixinData } from './main';

import Pagination from '../../components/Pagination';

import Delete from '../components/Delete';

import DeleteAllCheck from '../components/DeleteAllCheck';

import CreateButton from '../components/CreateButton';

import EditButton from '../components/EditButton';

import ViewButton from '../components/ViewButton';

import DeleteCheck from '../components/DeleteCheck';

import Trash from '../components/Trash';

import DeleteMultiple from '../components/DeleteMultiple';

import Search from '../components/Search';

export var mixin = {
	mixins: [mainMixinData],
    components : {
        Search,
        Pagination,
        Delete,
        CreateButton,
        EditButton,
        ViewButton,
        DeleteCheck,
        Trash,
        DeleteMultiple,
        DeleteAllCheck
    },
    data(){
      return {
         deleteData : [],
         multipleData : [] ,
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
methods: {
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
    deleteFromArray(this.admins.data,object)
},
}
}