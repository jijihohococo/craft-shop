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

export function errorResponse(error,object,action){
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