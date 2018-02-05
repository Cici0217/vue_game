<template>
	<div>
		<div class="gamePlay-wrap">
		    <iframe class="game-ifram" id="js-gameIfram" 
		    	src="" frameborder="0" allowfullscreen=""></iframe>
		    <span class="see-platform" @click="showPlatWrap()">
		        <img src="../assets/images/plat/plat-icon-playform.png" alt="">
		    </span>
		</div>
		<div class="plat-wrap" v-if="isPlatWrapShow">
		    <section class="plat-left-wrap">
		        <div class="plat-left-head">
		            <header id="js-userInfo">
		                <div class="user-headImg">
		                    <img id="js-userHeadImg" src="../assets/images/leaguercenter/default_head.png">                
		                </div>
		                <div class="user-id" id="js-userIDGCorn">
		                    <h4>ID:77908989</h4>
		                    <p>G币:2500</p>
		                </div>
		                <div class="user-like" @click="collect()">
		                    <input type="button" name="share" value="收藏" class="app-btn app-btn-white" v-if="isCollected">
		                    <input type="button" name="share" value="已收藏" class="app-btn app-btn-white" v-else>
		                </div>
		                <div class="user-signOut" @click="quitGame()">
		                    退出<br>游戏
		                </div>
		            </header>
		            <nav class="plat-left-nav" id="js-platNav">
		                <a class="active" href="javascript:;">
		                    <i class="app-icon plat-left-nav plat-icon-package"></i>
		                    <p>礼包</p>
		                </a>
		                <a href="javascript:;">
		                    <i class="app-icon plat-left-nav plat-icon-service"></i>
		                    <p>开服</p>
		                </a>
		                <a href="javascript:;">
		                    <i class="app-icon plat-left-nav plat-icon-news"></i>
		                    <p>资讯</p>
		                </a>
		                <a href="javascript:;">
		                    <i class="app-icon plat-left-nav plat-icon-more"></i>
		                    <p>更多游戏</p>
		                </a>
		            </nav>
		        </div>
		    
		        <div class="plat-left-content" id="js-navPart">
		        	<router-view />
		        </div>
		    </section>
		    <quit-game :is-quit-gmae-model-show="isQuitGameModelShow"  @close-quit-game-model="closeQuitGameModel()"></quit-game>
		    <section class="plat-right-wrap">
		        <ul>
		            <li id="js-closePlatform" @click="closePlatWrap()">
		                <i class="app-icon plat-right-nav plat-icon-close"></i>
		                <p>关闭</p>
		            </li>
		            <li id="js-freshGame" @click="refreshPage()">
		                <i class="app-icon plat-right-nav plat-icon-fresh"></i>
		                <p>刷新<br>游戏</p>
		            </li>
		            <li class="save-home" id="js-saveHome" style="opacity:0;">
		                <i class="app-icon plat-right-nav plat-icon-save"></i>
		                <p>保存到<br>桌面</p>
		            </li>
		        </ul>
		    </section>
		</div>
	</div>
</template>

<style>
@import '../assets/css/layer.css';
@import '../assets/css/common.css';
@import '../assets/css/game_plat.css'
</style>

<script>
import quitGame from './quitGame'

export default{
	created() {
		console.log(this.$route.query.game_id)
	},
	components:{
		quitGame
	},
	data(){
		return{
			isPlatWrapShow:false,
			isCollected:true,
			isQuitGameModelShow:false
		}
	},
	methods:{
		showPlatWrap(){
			this.isPlatWrapShow = true
		},
		closePlatWrap(){
			this.isPlatWrapShow = false	
		},
		refreshPage(){
			this.$router.go(0)
		},
		collect(){
			this.isCollected = !this.isCollected
			this.$router.push('/collect')
		},
		quitGame(){
			this.isQuitGameModelShow = true
		},
		closeQuitGameModel(){
			this.isQuitGameModelShow = false	
		}
	}
}
</script>