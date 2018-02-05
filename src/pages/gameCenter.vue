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
		            <div class="plat-left-content-main"> 
		                <div class="content-part active">
		                    <section class="game-part" style="border-bottom:none;">
		                        <div class="game-part-title">
		                            <h5>普通礼包</h5>
		                        </div>
		                        <div class="list_game_d" id="js-packageList" style="padding-bottom: 0.4rem;">
		                            
		                        <p class="nomore-info">暂无数据</p></div>
		                    </section>
		                </div>
		                
		                <div class="content-part">
		                    <section class="game-part" style="border-bottom:none;">
		                        <div class="list_game_e" id="js_todayServiceList"><p class="nomore-info">暂无数据</p></div>
		                    </section>
		                </div>
		                <div class="content-part">
		                    <section class="game-part" id="activePopup">
		                        <div class="game-part-title">
		                            <h5>活动</h5>
		                        </div>
		                        <div class="word_list_a" id="activeList" style="padding-bottom: 0.4rem;">
		                            
		                        <p class="nomore-info">暂无数据</p></div>
		                    </section>
		                    <section class="game-part" id="noticePopup" style="border-bottom:none;">
		                        <div class="game-part-title">
		                            <h5>游戏公告</h5>
		                        </div>
		                        <div class="word_list_b" id="noticeList" style="padding-bottom: 0.4rem;">
		                            
		                        <p class="nomore-info">暂无数据</p></div>
		                    </section>
		                    <section class="game-part" id="popup" style="display: none;border-bottom:none;">
		                        <div class="word_list_a" style="font-size:initial;padding:0.4rem;">
		                            <h4 class="game_center_title"></h4>
		                            <img src="" style="width:100%;margin-top:.4rem;margin-bottom:.46rem;" class="game_center_img">
		                            <p class="game_center_desc"></p>
		                        </div>
		                        
		                    </section>
		                </div>
		                <div class="content-part" id="getMoreGameList">
		                	<section class="game-part">     
		                		<div class="game-part-title">         
		                			<h5>排行榜</h5>     
		                		</div>     
		                		<div class="list_game_2" style="padding-bottom: 0.4rem;">         
		                			<ul>  
		                				<li>
		                					<a href="game-center.html?game_id=185">                     
			                					<div class="game_list_img">                         
			                						<img src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573805673758.png" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573805673758.png" alt="" style="opacity: 1;">                     
			                					</div>                     
			                					<figure>                        
			                						<h6>  
			                							<span class="game-name">汪汪队1</span>                         
			                						</h6>                          
			                						<div class="game-tag-group">  
			                							<span class="game-tag">莱德1</span>  
			                						</div>  
			                						<p>新游戏，快快加入1</p>                     
			                					</figure>                     
			                					<div class="list_game_btn">                         
			                						<input type="button" data-gamename="排行榜" data-url="game-center.html?game_id=185" value="开始" class="app-btn app-btn-default">          
			                					</div> 
		                					</a>             
		                				</li>               
		                			</ul>          
		                		</div>
		                	</section>
		                </div>
		                <div class="content-part" style="height: 100%;position: absolute;left: 0;top: 0;right: 0;bottom: 0;background: #ffffff;">
		                    <section class="plat-part">
		                        <div class="plat-focus">
		                            <h4 class="game_collect_name"></h4>
		                            <h3>请关注公众号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一对一客服</h3>
		                            <ul>
		                                <li>
		                                    <img class="logo-a" src="../assets/images/plat/plat_img_logo-a.png" alt="">
		                                    <img class="logo-b" src="../assets/images/plat/plat_img_logo-b.png" alt="">
		                                </li>
		                                <li>
		                                    <img class="QR" src="../assets/images/plat/plat_img_QR.png" alt="">
		                                    <figure>
		                                        <p>1、长按上方二维码，选择识别图中二维码</p>
		                                        <p>2、点击关注公众号</p>
		                                    </figure>
		                                </li>
		                            </ul>
		                        </div>
		                    </section>
		                </div>
		            </div>
		        </div>
		    </section>
		    <quit-game :is-quit-gmae-model-show="isQuitGameModelShow"  close-quit-game-model="closeQuitGameModel()"></quit-game>
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