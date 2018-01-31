<template>
	<div>
		<div class="leaguer_top"> 
		   	<div class="headPic">
				<img src="../assets/images/leaguercenter/default_head.png" />
		   	</div> 
		   	<div class="headInfo"> 
			    <p class="nickname">游客</p> 
			    <p class="identify"><span>ID：</span><span class="leaguer_uid">{{ accountDetail.uid }}</span></p> 
		   	</div> 
		   	<div class="headGameInfo"> 
			    <p class="level">等级：<span class="level_count">列兵</span></p> 
			    <p class="intergration">积分：<span class="intergration_count">{{ accountDetail.currentPoint }}</span></p> 
			    <p class="platform_currency">平台币：<span class="platform_currency_count">{{ accountDetail.gbBalance }}</span></p> 
		   	</div> 
		   	<div class="signin" @click="sign(signflag,$event)" v-if="accountDetail.sign_status==1">
		    	已签到
		   	</div> 
		   	<div class="signin" @click="sign(signflag,$event)" v-else>
		    	签到
		   	</div> 
		</div>
		<div class="content leaguer_content"> 
			<div class="leaguerList" id="myinfo"> 
			    <div class="underline-wrap"> 
			     <div class="leaguerList_icon ">
			      <img src="../assets/images/leaguercenter/type.png" />
			     </div> 
			     <div class="leaguerList_desc ">
			      我的消息
			     </div> 
			     <div class="leaguerList_arrow "></div> 
			    </div> 
			</div> 
			<div class="leaguerList" id="charge"> 
			    <div class="underline-wrap"> 
			     <div class="leaguerList_icon ">
			      <img src="../assets/images/leaguercenter/charge.png" />
			     </div> 
			     <div class="leaguerList_desc ">
			      平台充值
			     </div> 
			     <div class="leaguerList_arrow "></div> 
			    </div> 
			</div> 
			<div class="leaguerList" id="certification" style="display: none;"> 
			    <div class="underline-wrap"> 
			     <div class="leaguerList_icon ">
			      <img src="../assets/images/leaguercenter/certification.png" />
			     </div> 
			     <div class="leaguerList_desc ">
			      实名认证
			     </div> 
			     <div class="leaguerList_arrow "></div> 
			    </div> 
			</div> 
			<router-link tag="div" to="/register" class="leaguerList" id="register"> 
			    <div class="underline-wrap"> 
			     <div class="leaguerList_icon ">
			      <img src="../assets/images/leaguercenter/bind.png" />
			     </div> 
			     <div class="leaguerList_desc ">
			      注册绑定
			     </div> 
			     <div class="leaguerList_arrow "></div> 
			    </div> 
			</router-link> 
			<router-link tag="div" to="/helper" class="leaguerList" id="helper"> 
			    <div class="underline-wrap"> 
			     <div class="leaguerList_icon ">
			      <img src="../assets/images/leaguercenter/help.png" />
			     </div> 
			     <div class="leaguerList_desc ">
			      帮助指引
			     </div> 
			     <div class="leaguerList_arrow "></div> 
			    </div> 
			</router-link> 
		</div>
		<div class="leaguer_switchBtn" @click="changeAccountStatus($event)">退出帐号</div>
		<my-sign :sign-show="isSignShow" @on-close="closeSign()"></my-sign>
		<login-modal :is-show-login-modal="isShowLoginModal" @on-close="closeLoginModal()" @show-quick-login="showQuickLogin()"></login-modal>
		<quick-login-modal :is-quick-login-show="isQuickLoginShow" @close-qucik-login-modal="closeQucikLoginModal()"></quick-login-modal>
	</div>
</template>

<style>
@import '../assets/css/leaguercenter/leaguercenter.css'
</style>

<script>
import mySign from '../components/modal/sign'
import loginModal from '../components/modal/loginModal'
import quickLoginModal from '../components/modal/quickLoginModal'

export default{
	data(){
		return {
			signflag:true,
			isSignShow:false,
			accountDetail:{},
			isShowLoginModal:false,
			isQuickLoginShow:false
		}
	},
	components:{
		mySign,
		loginModal,
		quickLoginModal
	},
	methods:{
		sign(flag,$event){
			var el = $event.currentTarget;
			if(flag == true && $.trim($(el).html()) =="签到"){
				this.isSignShow = true
				this.signflag = false
				$(el).html("已签到")
			}else{
				alert("已签到");
			}
		},
		closeSign(){
			this.isSignShow = false
		},
		changeAccountStatus($event){
			var el = $event.currentTarget
			if($(el).html().indexOf("退出")>=0){
				if(window.localStorage.getItem('uid')){
	               localStorage.removeItem('uid');
	               localStorage.removeItem('access_token');
	                //不刷新页面，不然url中记录的信息会导致成功登录
	                $(".nickname").html("游客");
	                $(".headPic").children('img').attr('src',require("../assets/images/leaguercenter/default_head.png"));
	                $('.level_count').text("列兵");
	                $('.intergration_count').text("");
	                $(".platform_currency_count").text("");
	                $(".leaguer_uid").text("");
	                $('.leaguer_switchBtn').text("登录");
	                $(".signin").html('签到');
	                //window.location.href='leaguerIndex.html';
	            }
			}else{
				this.isShowLoginModal = true
			}
		},
		closeLoginModal(){
			this.isShowLoginModal = false;
		},
		showQuickLogin(){
			this.isQuickLoginShow = true
		},
		closeQucikLoginModal(){
			this.isQuickLoginShow = false	
		}
	},
	created(){
		this.$http.get('/apis/Account/accountDetail',{ params:{ uid: window.localStorage.getItem("uid")}, headers: { Authorization: window.localStorage.getItem('access_token') } })
		.then((res)=>{
			this.accountDetail = res.data.result
		},(err)=>{
			alert(err)
		})
	}
}
</script>