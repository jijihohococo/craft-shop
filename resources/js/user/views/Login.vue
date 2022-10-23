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
									<h3>Login Account</h3>
								</div>
								<form @submit.prevent="login()" >
									<div class="form-group">
										<input type="text" class="form-control" v-model="fields.email" 
										:placeholder="translateLang('Placeholder Email')">
									</div>
									<div class="form-group">
										<input class="form-control" 
										type="password"
										v-model="fields.password"
										:placeholder="translateLang('Placeholder Password')">
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
				}
			}
		},
		methods : {
			login(){
				window.axios.post('login',this.fields).then( (response) => {
					console.log(response.data.message)
				} )
			},
			translateLang(data){
				return  translate(data);
			}
		}

	}
</script>