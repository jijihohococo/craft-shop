     @php
     $currentURL=getCurrentURL();
     $loginURL=adminLogin();
     @endphp
     <!DOCTYPE html>
     <html lang="en">
     <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>{{ $shop->name }}</title>

      <!-- Google Font: Source Sans Pro -->
      <link rel="stylesheet" href="/css/google-font.css">
      <!-- Font Awesome -->
      <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css">
      <!-- Theme style -->
      <link rel="stylesheet" href="/dist/css/adminlte.min.css">
      <!-- iCheck -->
      <link rel="stylesheet" href="/plugins/icheck-bootstrap/icheck-bootstrap.min.css">


      
      @if($currentURL!==$loginURL)
      <!-- Ionicons -->
      <link rel="stylesheet" href="/css/ionicons.min.css">
      <!-- Tempusdominus Bootstrap 4 -->
      <link rel="stylesheet" href="/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
      <!-- Select2 -->
      <link rel="stylesheet" href="/plugins/select2/css/select2.min.css">
      <link rel="stylesheet" href="/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">
      <!-- JQVMap -->
      <link rel="stylesheet" href="/plugins/jqvmap/jqvmap.min.css">
      <!-- overlayScrollbars -->
      <link rel="stylesheet" href="/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
      <!-- Daterange picker -->
      <link rel="stylesheet" href="/plugins/daterangepicker/daterangepicker.css">
      <!-- summernote -->
      <link rel="stylesheet" href="/plugins/summernote/summernote-bs4.min.css">

      <link href="/css/bootstrap-fileinput/fileinput.css" media="all" rel="stylesheet" type="text/css"/>
      <link rel="stylesheet" type="text/css" href="{{ asset('css/custom.css') }}">
      @endif
    </head>
    <body class="hold-transition {{ $currentURL==$loginURL ? 'login-page' : 'sidebar-mini layout-fixed' }}">
      <div id="app">
      </div>

      <!-- jQuery -->
      <script src="/plugins/jquery/jquery.min.js"></script>
      <!-- Bootstrap 4 -->
      <script src="/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <!-- Select2 -->
      <script src="/plugins/select2/js/select2.full.min.js"></script>
      <!-- AdminLTE App -->
      <script src="/dist/js/adminlte.js"></script>

      @if($currentURL!==$loginURL)
      <!-- jQuery UI 1.11.4 -->
      <script src="/plugins/jquery-ui/jquery-ui.min.js"></script>
      <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
      <script>
        $.widget.bridge('uibutton', $.ui.button)
      </script>

      <!-- ChartJS -->
      <script src="/plugins/chart.js/Chart.min.js"></script>
      <!-- Sparkline -->
      <!-- <script src="/plugins/sparklines/sparkline.js"></script> -->
      <!-- JQVMap -->
      <script src="/plugins/jqvmap/jquery.vmap.min.js"></script>
      <script src="/plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
      <!-- jQuery Knob Chart -->
      <script src="/plugins/jquery-knob/jquery.knob.min.js"></script>
      <!-- daterangepicker -->
      <script src="/plugins/moment/moment.min.js"></script>
      <script src="/plugins/daterangepicker/daterangepicker.js"></script>
      <!-- Tempusdominus Bootstrap 4 -->
      <script src="/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
      <!-- Summernote -->
      <script src="/plugins/summernote/summernote-bs4.min.js"></script>
      <!-- overlayScrollbars -->
      <script src="/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>


      <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
      <!-- <script src="/dist/js/pages/dashboard.js"></script> -->

      <script src="/js/bootstrap-fileinput/fileinput.js" type="text/javascript"></script>
      <script src="/js/bootstrap-fileinput/theme.js" type="text/javascript"></script>
      @endif
      <script >
        window.shop={!! json_encode($shop) !!};
        
        window.Laravel = {!! json_encode([
         'csrfToken' => csrf_token(),
         ])!!}

        window.Urls = {!!json_encode([
          'baseURL' => '/admin_api/',
        //'login' => url('login'),
        //'logout' => url('logout'),
        ])!!}
      </script>
      <script src="/js/main.js"></script>
    </body>
    </html>
