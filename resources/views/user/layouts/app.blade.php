<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="Anil z" name="author">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Shopwise is Powerful features and You Can Use The Perfect Build this Template For Any eCommerce Website. The template is built for sell Fashion Products, Shoes, Bags, Cosmetics, Clothes, Sunglasses, Furniture, Kids Products, Electronics, Stationery Products and Sporting Goods.">
  <meta name="keywords" content="ecommerce, electronics store, Fashion store, furniture store,  bootstrap 4, clean, minimal, modern, online store, responsive, retail, shopping, ecommerce store">

  <!-- SITE TITLE -->
  <title>{{ $shop->name }}</title>
  <!-- Favicon Icon -->
  <link rel="shortcut icon" type="image/x-icon" 
  href="{{ $shop->pic=='logo_dark.png' ? 
  asset('images/logo_dark.png') :
  asset('storage/shop_images/'.$shop->pic) }}">
  <!-- Animation CSS -->
  <link rel="stylesheet" href="{{ asset('user/css/animate.css') }}">  
  <!-- Latest Bootstrap min CSS -->
  <link rel="stylesheet" href="{{ asset('user/bootstrap/css/bootstrap.min.css') }}">
  <!-- Google Font -->
  <link href="{{ asset('user/fonts/Roboto.css') }}" rel="stylesheet"> 
  <link href="{{ asset('user/fonts/Poppins.css') }}" rel="stylesheet"> 
  <!-- Icon Font CSS -->
  <link rel="stylesheet" href="{{ asset('user/css/all.min.css') }}">
  <link rel="stylesheet" href="{{ asset('user/css/ionicons.min.css') }}">
  <link rel="stylesheet" href="{{ asset('user/css/themify-icons.css') }}">
  <link rel="stylesheet" href="{{ asset('user/css/linearicons.css') }}">
  <link rel="stylesheet" href="{{ asset('user/css/flaticon.css') }}">
  <link rel="stylesheet" href="{{ asset('user/css/simple-line-icons.css') }}">
  <!--- owl carousel CSS-->
  <link rel="stylesheet" href="{{ asset('user/owlcarousel/css/owl.carousel.min.css') }}">
  <link rel="stylesheet" href="{{ asset('user/owlcarousel/css/owl.theme.css') }}">
  <link rel="stylesheet" href="{{ asset('user/owlcarousel/css/owl.theme.default.min.css') }}">
  <!-- Magnific Popup CSS -->
  <link rel="stylesheet" href="{{ asset('user/css/magnific-popup.css') }}">
  <!-- jquery-ui CSS -->
  <link rel="stylesheet" href="{{ asset('user/css/jquery-ui.css') }}">
  <!-- Slick CSS -->
  <link rel="stylesheet" href="{{ asset('user/css/slick.css') }}">
  <link rel="stylesheet" href="{{ asset('user/css/slick-theme.css') }}">
  <!-- Style CSS -->
  <link rel="stylesheet" href="{{ asset('user/css/style.css') }}">
  <link rel="stylesheet" href="{{ asset('user/css/responsive.css') }}">

</head>

<body>
  <div id="app">
    @yield('content')
  </div>
</body>
<a href="#" class="scrollup" style="display: none;"><i class="ion-ios-arrow-up"></i></a> 


<!-- Latest jQuery --> 
<script src="{{ asset('user/js/jquery-3.6.0.min.js') }}"></script>
<script src="{{ asset('user/js/jquery-migrate-3.0.0.min.js') }}"></script>

<!-- jquery-ui --> 
<script src="{{ asset('user/js/jquery-ui.js') }}"></script>
<!-- popper min js -->
<script src="{{ asset('user/js/popper.min.js') }}"></script>
<!-- Latest compiled and minified Bootstrap --> 
<script src="{{ asset('user/bootstrap/js/bootstrap.min.js') }}"></script> 
<!-- owl-carousel min js  --> 
<!-- <script src="{{ asset('user/owlcarousel/js/owl.carousel.min.js') }}"></script>  -->
<!-- magnific-popup min js  --> 
<script src="{{ asset('user/js/magnific-popup.min.js') }}"></script>
<!-- waypoints min js  --> 
<script src="{{ asset('user/js/waypoints.min.js') }}"></script> 
<!-- parallax js  --> 
<script src="{{ asset('user/js/parallax.js') }}"></script> 
<!-- countdown js  --> 
<script src="{{ asset('user/js/jquery.countdown.min.js') }}"></script> 
<!-- imagesloaded js --> 
<script src="{{ asset('user/js/imagesloaded.pkgd.min.js') }}"></script>
<!-- isotope min js --> 
<script src="{{ asset('user/js/isotope.min.js') }}"></script>
<!-- jquery.dd.min js -->
<script src="{{ asset('user/js/jquery.dd.min.js') }}"></script>
<!-- slick js -->
<script src="{{ asset('user/js/slick.min.js') }}"></script>
<!-- elevatezoom js -->
<script src="{{ asset('user/js/jquery.elevatezoom.js') }}"></script>
<!-- scripts js -->
<script >
  window.shop={!! json_encode($shop) !!};

  window.Laravel = {!! json_encode([
   'csrfToken' => csrf_token(),
   ])!!}

  window.Urls = {!!json_encode([
    'baseURL' => '/api/',
        //'login' => url('login'),
        //'logout' => url('logout'),
        ])!!}
      </script>
      <script src="{{ asset('js/main.js') }}"></script>
    </body>
    </html>