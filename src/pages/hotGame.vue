<template>
	<div>
		<!-- 搜索 -->
		<div class="game_search_wrap" id="js-search">
		    <div class="search_group">
		        <div class="search-btn"></div>
		        <input id="js-searchInput" class="app-input" placeholder="请输入游戏名称" type="text" v-model="search">
		    </div>
		    <router-link :to="{ path:'/gameCatogry', query:{ gameInfo: search } }" tag="div" class="search-begin">
		        <input id="js-searchBtn" type="button" name="share" value="搜索" class="app-btn app-btn-text">
		    </router-link>
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
			<section class="game-mine"> 
				<div class="mygame-slide-wrap"> 
				    <div class="swiper-container mygame-swiper swiper-container-horizontal"> 
				    	<div class="swiper-wrapper" id="js_mygameList"> 
					      	<div class="swiper-slide mygame-item swiper-slide-active" style="width: 76.5px;"> 
						       	<a href="game-center.html?game_id=197"> 
						       		<img src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011910223809457787.png" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011910223809457787.png" alt="" style="opacity: 1;" /> 
						       	</a>
					      	</div>
					      	<div class="swiper-slide mygame-item swiper-slide-next" style="width: 76.5px;"> 
					       		<a href="game-center.html?game_id=185"> <img src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573805673758.png" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573805673758.png" alt="" style="opacity: 1;" /> 
					       		</a>
					      	</div>
					      	<div class="swiper-slide mygame-item" style="width: 76.5px;"> 
					       		<a href="game-center.html?game_id=199"> 
					       			<img src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011910265209987764.png" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011910265209987764.png" alt="" style="opacity: 1;" /> 
					       		</a>
					      	</div>
					      	<div class="swiper-slide mygame-item" style="width: 76.5px;"> 
					       		<a href="game-center.html?game_id=203"> 
					       			<img src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/201801191032040414726.png" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/201801191032040414726.png" alt="" style="opacity: 1;" /> 
					       		</a>
					      	</div>
					      	<div class="swiper-slide mygame-item" style="width: 76.5px;"> 
						       	<a href="game-center.html?game_id=201"> 
						       		<img src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/201801191029500711499.png" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/201801191029500711499.png" alt="" style="opacity: 1;" /> 
						       	</a>
					      	</div>
				    	</div> 
				    </div> 
				    <!-- <div class="pagination"></div> --> 
			   </div> 
			   <div class="mygame-slide-ctl"></div> 
			</section>
			<div id="js_recommendList">
				<section class="game-part"> 
					<div class="game-part-title"> 
						<h5>排行榜</h5> 
					</div>  
					<div class="game-col"> 
						<ul>                               
							<li v-for="(item,index) in hotGameData1"> 
								<router-link class="game-col-item" :class="gameCol(index+1)"  
								:to="{ path:'/gamedetail', query:{ game_id: item.id } }"
								> 
									<div class="game-col-mask"></div> 
									<div class="game-top-img"> 
										<img :src="item.icon_url" alt="" style="opacity: 1;">                         
									</div> 
									<div class="game-big-img"> 
										<img :src="item.bg_img_url" alt="" style="opacity: 1;">                         
									</div>                         
									<div class="game-info"> 
										<h5>{{ item.name }}</h5> 
										<p>{{ item.short_sentence }}</p> 
									</div>                     
								</router-link>                    
								<div class="game-begin"> 
									<input type="button"  value="开始" class="app-btn app-btn-white" 
									@click="goForwardGame( item.id )"> 
								</div> 
							</li>                                
						</ul> 
						<div class="list_game" style="padding-bottom: 0.4rem;">  
							<ul> </ul>  
						</div> 
					</div>
				</section>
				<section class="game-part"> 
					<div class="game-part-title"> 
						<h5>热门游戏</h5> 
					</div>  
					<div class="list_game" style="padding-bottom: 0.4rem;">  
						<ul>                       
							<li v-for="(item,index) in hotGameData2"> 
								<router-link :to="{ path:'/gamedetail', query:{ game_id: item.id } }"> 
									<div class="game_list_img"> 
										<img :src="item.icon_url" alt="" style="opacity: 1;">       
									</div> 
									<figure> 
										<h6>
											<span class="game-name">{{ item.name}}</span> 
											<span class="game-tag" v-for="tag in item.tag">
												{{ tag.name }}
											</span>                           
										</h6> 
										<p>{{ item.short_sentence }}</p> 
									</figure> 
								</router-link> 
								<div class="list_game_btn"> 
									<input type="button" value="开始" class="app-btn app-btn-default" @click="goForwardGame(item.id)"> 
								</div> 
							</li>                      
						</ul>  
					</div>
				</section>
				<section class="game-part"> 
					<div class="game-part-title"> 
						<h5>经典游戏</h5> 
					</div>  
					<div class="list_game" style="padding-bottom: 0.4rem;">  
						<ul>                       
							<li v-for="item in classicGameData3"> 
								<router-link :to="{ path:'/gamedetail', query:{ game_id: item.id } }"> 
								 	<div class="game_list_img"> 
								 		<img :src="item.icon_url" alt="" style="opacity: 1;">                             
								 	</div> 
								 	<figure> 
								 		<h6>
								 			<span class="game-name">{{item.name}}</span>                                      
								 			<span class="game-tag" v-for="tag in item.tag">
												{{ tag.name }}
											</span>                                      
								 		</h6> 
								 		<p>{{ item.short_sentence }}</p> 
								 	</figure> 
								 </router-link> 
								<div class="list_game_btn"> 
								 	<input type="button"  value="开始" class="app-btn app-btn-default" @click="goForwardGame(item.id)"> 
								</div> 
							</li>   
						</ul>  
					</div>
				</section>
			</div>
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
	components:{
		GameCategory	
	},
	data(){
		return {
			hotGameData1:[],
			hotGameData2:[],
			classicGameData3:[],
			search:'一世之尊'
		}
	},
	created(){
		this.$http.get('/apis/gamestore/recommendedgame',{ params:{ position:1,label:1 }})
		.then((res)=>{
			this.hotGameData1 = res.data.result[0].game;
			this.hotGameData2 = res.data.result[1].game;
			this.classicGameData3 = res.data.result[2].game;
	 
		})
	},
	methods:{
		gameCol(index){
			return 'game-col-' + index
		},
		goForwardGame(id){
			this.$router.push({ path:'/gameCenter', query:{ game_id: id } })
		}
	}
}
</script>