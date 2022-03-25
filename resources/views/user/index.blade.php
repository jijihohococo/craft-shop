     @php
     $currentURL=getCurrentURL();
     $loginURL=adminLogin();
     @endphp
     <!DOCTYPE html>
     <html lang="en">
     <head>
     	<meta charset="utf-8">
     	<meta name="viewport" content="width=device-width, initial-scale=1">
     	<!-- <title>Craft Shop</title> -->

     	<!-- Google Font: Source Sans Pro -->
     	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
     	<!-- Font Awesome -->
     	<link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css">
     	<!-- Theme style -->
     	<link rel="stylesheet" href="/dist/css/adminlte.min.css">
     	<!-- iCheck -->
     	<link rel="stylesheet" href="/plugins/icheck-bootstrap/icheck-bootstrap.min.css">




     </head>
     <body >
     	<div id="app">
     	</div>


     	<script >
     		window.Laravel = {!! json_encode([
     			'csrfToken' => csrf_token(),
     			])!!}

     		window.Urls = {!!json_encode([
     			'baseURL' => '/api/'
     			])!!}
     		</script>
     		<script src="/js/main.js"></script>
     	</body>
     	</html>
