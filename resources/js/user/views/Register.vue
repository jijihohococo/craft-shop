<template>
	<div class="main_content">
		<PageTitle :title="translateLang('Register')" />
		<!-- START LOGIN SECTION -->
		<div class="login_register_wrap section">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-6 col-md-10">
						<div class="login_wrap">
							<div class="padding_eight_all bg-white">
								<div class="heading_s1">
									<h3>{{ translateLang("Create Account") }}</h3>
								</div>
								<form @submit.prevent="register()" >
									<div class="form-group">
										<input type="text"
										v-model="fields.name"
										:class="[errors && errors.name ? 'form-control is-invalid' : 'form-control']"
										:placeholder="translateLang('Placeholder Name')">
										<strong style="display:block"
										v-if="errors && errors.name" class="invalid-feedback">{{ errors.name[0] }}</strong>
									</div>
									<div class="form-group">
										<input type="text"
										v-model="fields.email"
										:class="[errors && errors.email ? 'form-control is-invalid' : 'form-control']"
										:placeholder="translateLang('Placeholder Email')">
										<strong style="display:block"
										v-if="errors && errors.email" class="invalid-feedback">{{ errors.email[0] }}</strong>
									</div>
									<div class="form-group">
										<input type="password"
										v-model="fields.password"
										:class="[errors && errors.password ? 'form-control is-invalid' : 'form-control']"
										:placeholder="translateLang('Placeholder Password')">
										<strong style="display:block"
										v-if="errors && errors.password" class="invalid-feedback">{{ errors.password[0] }}</strong>
										<strong v-if="errors && errors.account" class="invalid-feedback">{{ errors.account[0] }}</strong>
									</div>
									<div class="form-group">
										<input
										type="password"
										:class="[errors && errors.password ? 'form-control is-invalid' : 'form-control']"
										v-model="fields.password_confirmation"
										:placeholder="translateLang('Placeholder Confirm')">
									</div>
									<div class="login_footer form-group">
										<div class="chek-form">
											<div class="custome-checkbox">
												<input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox2" value="">
												<label class="form-check-label" for="exampleCheckbox2"><span>{{ translateLang("Agree Policy") }}</span></label>
											</div>
										</div>
									</div>
									<div class="form-group">
										<button type="submit" class="btn btn-fill-out btn-block" name="register">{{ translateLang('Register') }}</button>
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
									<router-link to="/login">{{ translateLang("Login") }}</router-link></div>
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
					name : '',
					email : '',
					password : '',
					password_confirmation : ''
				},
				errors : {}
			}
		},
		methods : {
			register(){
				window.axios.post('register',this.fields).then( (response) => {
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