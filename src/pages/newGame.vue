<template>
	<div>
		<!-- 搜索 -->
		<div class="game_search_wrap" id="js-search">
		    <div class="search_group">
		        <div class="search-btn"></div>
		        <input id="js-searchInput" class="app-input" placeholder="请输入游戏名称" type="text">
		    </div>
		    <div class="search-begin">
		        <input id="js-searchBtn" type="button" name="share" value="搜索" class="app-btn app-btn-text">        
		    </div>
		</div>
		<div class="app-conten-wrap setting-bottom">
			<section class="game-banner banner-slide">
		        <div class="banner-slide-wrap">
		            <div class="swiper-container banner-swiper swiper-container-horizontal">
		              	<div class="swiper-wrapper" id="js_bannerList" style="transform: translate3d(19px, 0px, 0px); transition-duration: 0ms;">
			              <div class="swiper-slide swiper-slide-active" style="opacity: 1; transform: translate3d(0px, 0px, 0px);">  
			              	<a href="http://www.qq.com/"> 
			              		<img src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901444503645800.jpg" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901444503645800.jpg" class="swiper-slide-img" style="opacity: 1;">
			              	</a>
			              </div>
		              	</div>
		            </div>
		        </div>
		    </section>
		    <!-- 游戏页分类 -->
			<game-category></game-category>
			<section class="game-part no-border">
		        <div class="list_game" id="newgameWrap">
			        <ul id="js_newgameUl_T">
			        	<li v-for="item in newGameList"> 
			        		<router-link  :to="{ path:'/gamedetail', query:{ game_id: item.id } }"> 
			        			<div class="game_list_img"> 
			        				<img :src="item.icon_url" alt="" style="opacity: 1;">  
			        			</div> 
			        			<figure> 
			        				<h6>
			        					<span class="game-name">{{ item.name }}</span>                  
			        					<span class="game-tag" v-for="tag in item.tag">{{ tag.name }}</span>                  
			        				</h6> 
			        				<p>{{ item.short_sentence }}</p> 
			        			</figure> 
			        		</router-link> 
			        		<div class="list_game_btn"> 
			        			<input type="button"  value="开始" class="app-btn app-btn-default" @click="goForwardGame(item.id)"> 
			        		</div>
			        	</li>
			        </ul>
			        <div class="app-loading-more"> 
			        	<div class="app-laoding-btn" id="js-laodingMoreBtn" style="">暂无更多</div> 
			        	<div class="app-loading-icon" id="js-laodingMoreIcon" style="display: none;">
				        	<!--style="display:none;"--> 
				        	<i class="app-icon app-icon-loading-more"></i> 
				        	<span>加载中...</span> 
			        	</div>
			        </div>
			    </div>
    		</section>
		</div>
	</div>
</template>

<style>
@import '../assets/css/swiper.css';
@import '../assets/css/game_styles.css'
</style>

<script>
import GameCategory from '../components/game/gameCategory'
export default{
	data(){
		return {
			newGameList: []
		}
	},
	components:{
		GameCategory
	},
	created(){
		this.$http.get('/apis/gamestore/newgame',{ params:{ pageNo:1 } })
		.then((res)=>{
			this.newGameList = res.data.pageData
		})
	},
	methods:{
		gameCol(index){
			return 'game-col-' + index
		},
		goForwardGame(id){
			this.$router.push({ path:'/gamedetail', query:{ game_id: id } })
		}
	}
}
</script>