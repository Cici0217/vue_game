<!--登录弹窗 -->
<template>
	<div v-if="isShowLoginModal">
		<div class="certificationmask" style="display: block;"></div>
		<div class="modal_login_popup" style="display: block;">
		    <div class="closeModal" @click="closeMyself()">
		        <img src="../../assets/images/leaguercenter/close.png">
		    </div>
		    <div class="modal_login_desc">
		        <span>需要登录后才能继续操作</span>
		    </div>
		    
		    <hr class="modal_login_dot">
		    <div class="modal_login_content">
		        <div class="accountInfo">
		            <div class="accountInfo_title">帐号登录</div>
		            <div style="overflow: hidden;">
		        		<div style="float:left;display:block;" class="loginInput">
		           			<img src="../../assets/images/leaguercenter/loginperson.png">
		           		</div>
		           		<input type="text" name="uPhoneNumber" class="uPhoneNumber" placeholder="请输入手机号">
		           	</div>
		           	<div style="overflow: hidden;">
		           		<div style="float:left;display:block;" class="loginInput">
		           			<img src="../../assets/images/leaguercenter/loginpassword.png">
		           		</div>
		           		<input type="password" name="uPass" class="uPass" placeholder="请输入密码">
		           	</div>
		           	<div class="showLoginError" style="display: none;"></div>
		           	<div class="modal_login_btn">
		               登录
		           	</div>
		           	<div class="modal_login_footer">
		                <div class="registerLogin">注册帐号</div>
		                <div class="quickLogin" @click="quickLogin()">手机号快捷登录</div>
		           	</div>
		           	<div class="otherLogin">
		               <div class="other_line"></div>
		               <div class="other_desc">其他登录方式</div>
		               <div class="other_line"></div>
		           	</div>
		           	<div class="loginChoice">
		               <span class="loginWechat_choice"><img src="../../assets/images/leaguercenter/wechatlogin.png"></span>
		           	</div>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		isShowLoginModal:{
			type:Boolean,
			default:false
		}
	},
	methods:{
		closeMyself(){
			this.$emit("on-close")
		},
		quickLogin(){
			this.$emit("show-quick-login")
		}
	}
}
</script>