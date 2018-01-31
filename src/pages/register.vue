<template>
	<div class="registerContent">
		<div class="registerContentBanner">
			 <div class="registerLogo">
				<img src="../assets/images/leaguercenter/logo.png">
			 </div>
			<div class="registerPlatformName">
				元气兄弟游戏平台
			</div>
			<div class="registerFormContent">
				<div class="registerFormBold">
					<div class="registerFormElem">
						<img src="../assets/images/leaguercenter/phone.png">
						<input type="text" name="uPhone" class="uPhone" placeholder="请输入您的手机号码" readonly="readonly">
					</div>
					<div class="registerFormElem">
						<img src="../assets/images/leaguercenter/verifycode.png">
						<input type="text" name="uCode" class="formCode uCode" placeholder="请输入短信验证码">
						<!-- <input type="button" value="获取验证码" name="getCode" class="formVerify" onclick="common.getVerifyCode();"> -->
						
						<!-- 原样式：a标签写的-->
						<!-- <a href="javascript:;" onclick="common.getVerifyCode()" class="formVerify">获取验证码</a> -->
						<!-- 禁用样式：'input-disabled' -->
						<input class="formVerify" onclick="common.getVerifyCode()" type="button" value="获取验证码">
					</div>
					<div class="registerFormElem">
						<img src="../assets/images/leaguercenter/passwd.png">
						<input type="password" name="uPass" class="uPass" placeholder="请输入密码">
					</div>
					<div class="registerFormElem againCode">
						<input type="password" name="uPassAgain" class=" uPassAgain" placeholder="请再次输入密码">
					</div>
					<div class="registerDesc">
						已注册用户，可以通过提交新密码修改密码
					</div>
					<div class="registerBtnSubmit">
						<div class="registerBtnPic" @click="submit()">
							提交
						</div>
					</div>
				</div>
			</div>
		</div>
		<error-tip :tip="123" :is-show="isShow"></error-tip>
	</div>
</template>

<style>
@import '../assets/css/leaguercenter/leaguercenter.css'
</style>

<script>
import ErrorTip from '../components/modal/errorTip'
export default{
	data(){
		return{
			isShow:false
		}
	},
	components:{
		ErrorTip
	},
	methods:{
		submit(){
			this.isShow = true
		}
	}
}
</script>