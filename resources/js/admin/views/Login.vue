<template>
	<div class="login-box">
		<div class="login-logo">
			<a><b>Craft Shop</b></a>
		</div>
		<!-- /.login-logo -->
		<div class="card">
			<div class="card-body login-card-body">
				<p class="login-box-msg">Login</p>

				<form v-on:submit.prevent="login">
					<div class="input-group mb-3">
						<input type="email" :class="[errors && (errors.email || errors.account) ? 'form-control is-invalid' : 'form-control']" placeholder="Email" v-model="fields.email">
						<div class="input-group-append">
							<div class="input-group-text">
								<span class="fas fa-envelope"></span>
							</div>
						</div>
						<strong v-if="errors && errors.email" class="invalid-feedback">{{ errors.email[0] }}</strong>
					</div>
					<div class="input-group mb-3">
						<input  ref="password" type="password" :class="[errors && (errors.password || errors.account) ? 'form-control is-invalid' : 'form-control']" placeholder="Password" v-model="fields.password">
						<div class="input-group-append">
							<div class="input-group-text">
								<span role="button" v-on:click="showAndHidePassword" :class="password"></span>
							</div>
						</div>
						<strong v-if="errors && errors.password" class="invalid-feedback">{{ errors.password[0] }}</strong>
						<strong v-if="errors && errors.account" class="invalid-feedback">{{ errors.account[0] }}</strong>
					</div>
					<div class="row">
						<div class="col-8">
							<div class="icheck-primary">
								<input type="checkbox" id="remember" v-model="fields.remember">
								<label for="remember">
									Remember Me
								</label>
							</div>
						</div>
						<!-- /.col -->
						<div class="col-4">
							<button type="submit" class="btn btn-primary btn-block" >Sign In</button>
						</div>
						<!-- /.col -->
					</div>
				</form>
				<!-- /.social-auth-links -->
			</div>
			<!-- /.login-card-body -->
		</div>
	</div>
	<!-- /.login-box -->
</template>

<script>
	export default {
		data(){
			return {
				password : 'fas fa-eye-slash',
				fields : {
					email : '',
					password : '',
					_token : window.Laravel.csrfToken,
					remember : false
				},
				errors : {}
			}
		},
		methods : {
			showAndHidePassword(){
				let eyeSlash='fas fa-eye-slash';
				let currentPassword=this.password==eyeSlash ? "fas fa-eye" : eyeSlash ;
				this.password=currentPassword;
				this.$refs.password.type=currentPassword == eyeSlash ? 'password' : 'text'

			},
			login(){
				
				window.axios.post('login',this.fields).then( (response) => {
					if(this.fields.remember==true){
						window.cookies.set("admin_email",this.fields.email,"1D", null, null, null, "Lax");
					}
					window.location.href="dashboard";
				}).catch( (error) => {
					
					if(error.response.status==422 || error.response.status==401 ){
						this.errors= error.response.data.errors
					}

				} )
			}
		},
		created(){
			if(window.cookies.get('admin_dark')=="true"){
				document.body.classList.add("dark-mode");
			}
			const adminEmail=window.cookies.get('admin_email');
			if(adminEmail!==null){
				this.fields.email=adminEmail;
				this.fields.remember=true;
			}
		}
	}
</script>