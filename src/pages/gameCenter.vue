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
		                    <h4>ID:{{ accountDetail.uid }}</h4>
		                    <p>G币:{{ accountDetail.gbBalance }}</p>
		                </div>
		                <div class="user-like" @click="collect(isCollected)">
		                    <input type="button" name="share" value="收藏" class="app-btn app-btn-white" v-if="isCollected">
		                    <input type="button" name="share" value="已收藏" class="app-btn app-btn-white" v-else>
		                </div>
		                <div class="user-signOut" @click="quitGame()">
		                    退出<br>游戏
		                </div>
		            </header>
		            <nav class="plat-left-nav" id="js-platNav">
		                <router-link tag="a" class="active" :to="{ path:'/giftPackage_gameCenter', query:{game_id: this.$route.query.game_id }}">
		                    <i class="app-icon plat-left-nav plat-icon-package"></i>
		                    <p>礼包</p>
		                </router-link>
		                <a href="javascript:;">
		                    <i class="app-icon plat-left-nav plat-icon-service"></i>
		                    <p>开服</p>
		                </a>
		                <a href="javascript:;">
		                    <i class="app-icon plat-left-nav plat-icon-news"></i>
		                    <p>资讯</p>
		                </a>
		                <router-link tag="a" :to="{ path:'/getMoreGameList', query:{game_id: this.$route.query.game_id }}">
		                    <i class="app-icon plat-left-nav plat-icon-more"></i>
		                    <p>更多游戏</p>
		                </router-link>
		            </nav>
		        </div>
		    
		        <div class="plat-left-content" id="js-navPart">
		        	<div class="plat-left-content-main"> 
		        		<router-view />
		        	</div>
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
		/* 获取用户信息 */
		this.$http.get('/apis/Account/accountDetail',{ params:{ uid: window.localStorage.getItem("uid") }, headers:{Authorization:window.localStorage.getItem('access_token')} })
		.then((res)=>{
			this.accountDetail = res.data.result
		},(err)=>{
			alert(err)
		})

		/* 设置收藏状态 * /
		if(accountDetail.sign_status===0){
			this.isCollected = false
		}else{
			this.isCollected = true
		}

		/* 初始化ifram游戏url */
		let postData={
            uid: window.localStorage.getItem("uid"),
            game_id: this.$route.query.game_id,
            channelid: window.localStorage.getItem('channelid')||1,
        };
        this.$http.post('/apis/gamestore/loadgame',{ params: postData, headers:{Authorization:window.localStorage.getItem('access_token'), 'Content-Type': 'application/x-www-form-urlencoded' } })
        .then((res)=>{
        	window.localStorage.setItem("gameUrl",res.data.result?res.data.result:'');
            $("#js-gameIfram").attr("src", data.result); 
        },(err)=>{
        	alert(err)
        })

	},
	components:{
		quitGame
	},
	data(){
		return{
			isPlatWrapShow:false,
			isCollected:true,
			isQuitGameModelShow:false,
			accountDetail:[]
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
		collect(tag){
			this.isCollected = !this.isCollected
			this.$router.push({ path:'/collect', query:{ isCollected: tag }})
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