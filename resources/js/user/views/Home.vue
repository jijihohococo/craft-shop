<template>
	<Topbar />
	<Navbar />
	<p>Home Page</p>
</template>
<script>

	import Topbar from '../components/Topbar';
	import Navbar from '../components/Navbar';
	export default {
		components: {
            Topbar,
            Navbar
        }
	}
</script>