@extends('user.layouts.app')
@section('content')
<script type="text/javascript">
	window.error_code={!! json_encode($error_code) !!};
</script>
@endsection
