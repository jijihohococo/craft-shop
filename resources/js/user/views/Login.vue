<template>
	<div class="main_content">
		<PageTitle :title="translateLang('Login')" />
		<!-- START LOGIN SECTION -->
		<div class="login_register_wrap section">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-6 col-md-10">
						<div class="login_wrap">
							<div class="padding_eight_all bg-white">
								<div class="heading_s1">
									<h3>{{ translateLang("Login") }}</h3>
								</div>
								<form @submit.prevent="login()" >
									<div class="form-group">
										<input type="text"
										v-model="fields.email"
										:class="[errors && errors.email ? 'form-control is-invalid' : 'form-control']" 
										:placeholder="translateLang('Placeholder Email')">
										<strong style="display:block"
										v-if="errors && errors.email" class="invalid-feedback">{{ errors.email[0] }}</strong>
									</div>
									<div class="form-group">
										<input
										type="password"
										v-model="fields.password"
										:class="[errors && errors.password ? 'form-control is-invalid' : 'form-control']"
										:placeholder="translateLang('Placeholder Password')">
										<strong style="display:block"
										v-if="errors && errors.password" class="invalid-feedback">{{ errors.password[0] }}</strong>
										<strong style="display:block"
										v-if="errors && errors.account" class="invalid-feedback">{{ errors.account[0] }}</strong>
									</div>
									<div class="form-group">
										<button type="submit" class="btn btn-fill-out btn-block" name="register">{{ translateLang('Login') }}</button>
									</div>
								</form>
								<div class="different_login">
									<span> or</span>
								</div>
								<ul class="btn-login list_none text-center">
									<li><a href="#" class="btn btn-facebook"><i class="ion-social-facebook"></i>Facebook</a></li>
									<li><a href="#" class="btn btn-google"><i class="ion-social-googleplus"></i>Google</a></li>
								</ul>
								<div class="form-note text-center">{{ translateLang("Have Account") }}
									<router-link to="/login">Log in</router-link></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END LOGIN SECTION -->
	</div>
	<!-- <component is="script" src="user/js/scripts.js" /> -->
</template>
<script >
	import PageTitle from '../components/PageTitle'
	import { translate } from '../../helpers/general.js'
	export default {
		components : {
			PageTitle
		},
		data(){
			return {
				fields : {
					email : '',
					password : '',
				},
				errors : {}
			}
		},
		methods : {
			login(){
				window.axios.post('login',this.fields).then( (response) => {
					window.location.href='/'
				} ).catch( (error) => {
					if(error.response.status==422 || error.response.status==401 ){
						this.errors= error.response.data.errors
					}
				} )
			},
			translateLang(data){
				return  translate(data);
			}
		}

	}
</script>