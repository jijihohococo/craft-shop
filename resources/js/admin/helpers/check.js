export function checkToDelete($event,deleteData){
    switch($event.target.checked){
        case true:
        deleteData.push($event.target.value)
        break;

        case false:
        deleteFromArray(deleteData,$event.target.value)
        break;
    }
}
export function deleteMultipleData(mainArray,deleteArray) {
    for (var i = 0; i < mainArray.length; i++) {
                if(deleteArray.includes(mainArray[i].id.toString())){
                    mainArray[i].deleted_at='not null';
                    deleteFromArray(deleteArray,mainArray[i].id.toString())
                }
            }
}
export function deleteFromArray(array,value) {
    const index = array.indexOf(value);
        if (index > -1) {
            array.splice(index, 1);
        }
}
export function showWithTrashData(route,object,pageName){
    return ((route.name==pageName && object.deleted_at==null)||
                    (route.name==pageName+'_bin' && object.deleted_at!==null));
}
export function checkContentPermission(content,permission,object){
	window.axios.get('check_permission/'+content+'/'+permission).then( (response) => {
        if(response.data.message=='Loading'){
            showSwalLoading(object);
        }else{
            object.actions[permission]=true;
        }
    } ).catch( (error) => {
      errorResponse(error,object)
  } )
}

export function showTrashPage(route,router,pageName){
    switch(route.name){
        case pageName:
        router.push('/admin/'+pageName+'_bin');
        route.name=pageName+'_bin';
        break;

        case pageName+'_bin':
        router.push('/admin/'+pageName);
        route.name=pageName;
        break;
    }
}

export function errorResponse(error,object,action=null){
	if(error.response){
        switch(error.response.status){
            case 401:
            object.$swal( 'Unauthenticated' ,
                "You are not login" ,
                'error'  );
            setTimeout(function () {

                window.location.href="/admin/login"
            }, 2000);
            
            break;

            case 403:
            object.actions[action]=false;
            if(object.errors){
                object.errors.error_status=403;
                object.errors.error_title="Permission Denied";
                object.errors.error_description="You are not allowed to "+action+" "+object.current;
            }
            break;

            case 404:
            object.actions[action]=false;
            object.errors.error_status=404;
            object.errors.error_title="Page Not Found";
            object.errors.error_description="You are in the wrong page";
            break;

        }
    }
}

export function checkAuthorize(object,method) {
    if(object.actions[object.current]==true && object.count==0){
        object.count=1;
        if(!isNaN(object.$route.params.id)){
            object[method](object.$route.params.id);
        }
    }

}

export function checkCreateEditPermission(object){
    let checkStage=isNaN(object.$route.params.id) ? 'create' : 'update';
    checkContentPermission(object.content, checkStage ,object);
    object.current=checkStage
}

export function showSwalLoading(object) {
    object.$swal({
        title: 'Now loading',
        html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 2000,
        onOpen: () => {
          swal.showLoading();
      }
  }).then(
  () => {},
  (dismiss) => {
      if (dismiss === 'timer') {
        object.$swal.close;
    }
} )
  location.reload();
}

export function getModel(model){
    return model[0].toLowerCase()+model.substring(1)
}