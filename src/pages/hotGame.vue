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
			<!--
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
		    -->
		    <section class="game-banner banner-slide">
		    	<div class="banner-slide-wrap">
		            <div class="swiper-container banner-swiper swiper-container-horizontal">
					    <div class="swiper">  
						    <swiper :options="swiperOption">  
						    	<swiper-slide v-for="(item, index) in slides" :key="index">
						    		<img :src="item">
						    	</swiper-slide> 
						    </swiper> 
						</div>
					</div>
				</div>
			</section>

			<!-- 游戏页分类 -->
			<game-category></game-category>
			<!--
			<section class="game-mine"> 
				<div class="mygame-slide-wrap"> 
				    <div class="swiper-container mygame-swiper swiper-container-horizontal"> 
				    	<div class="swiper-wrapper" id="js_mygameList"> 
					      	<div class="swiper-slide mygame-item swiper-slide-active" style="width: 76.5px;" v-for="item in mygameList"> 
						       	<router-link tag="a" :to="{ path:'/gameCenter', query:{ game_id: item.id }}"> 
						       		<img :src="item.icon_url" alt="" style="opacity: 1;" /> 
						       	</router-link>
					      	</div>					
				    	</div> 
				    </div> 
			   </div> 
			   <div class="mygame-slide-ctl"></div> 
			</section>
			-->
			<section class="game-mine"> 
				<div class="mygame-slide-wrap"> 
				    <div class="swiper-container mygame-swiper swiper-container-horizontal"> 
				    	<div class="swiper-wrapper" id="js_mygameList"> 
					      	<div class="swiper-slide mygame-item swiper-slide-active"> 
							    <div class="swiper">  
								    <swiper :options="swiperOption2">  
								    	<swiper-slide v-for="(item, index) in slides2" :key="index">
								    		<img :src="item">
								    	</swiper-slide> 
								    </swiper> 
								</div>
					      	</div>					
				    	</div> 
				    </div> 
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
							<infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
						    </infinite-loading>   
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
import { swiper, swiperSlide } from 'vue-awesome-swiper' 
import InfiniteLoading from 'vue-infinite-loading'

export default{
	components:{
		GameCategory,
		swiper,  
      	swiperSlide,
      	InfiniteLoading  	
	},
	data(){
		return {
			hotGameData1:[],
			hotGameData2:[],
			classicGameData3:[],
			page_no_hotGameData3:1,   //默认显示第一页数据
          	page_size_hotGameData3:7, //每次请求7条
			search:'一世之尊',
			mygameList:[],
			slides: [  
        		'http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901444503645800.jpg',  
          		'http://www.joy84.com:80/gamepic/images/2018/1/15/2018011509260408664713.png'
        	], 
        	slides2:[
        	    'http://www.joy84.com:80/gamepic/images/2018/1/17/2018011702124109984839.png',  
          		'http://www.joy84.com:80/gamepic/images/2018/1/17/2018011702202905781636.png',
          		'http://www.joy84.com:80/gamepic/images/2018/1/17/2018011702201403042424.png',
          		'http://www.joy84.com:80/gamepic/images/2018/1/17/2018011702125803429138.png',
          		'http://www.joy84.com:80/gamepic/images/2018/1/17/2018011702124109984839.png',  
          		'http://www.joy84.com:80/gamepic/images/2018/1/17/2018011702202905781636.png',
          		'http://www.joy84.com:80/gamepic/images/2018/1/17/2018011702201403042424.png',
        	], 
        	swiperOption: {  
          		debugger: false,    
          		autoplay: true,          
          		slidesPerView: "auto" 
        	},
        	swiperOption2: {  
          		debugger: false,    
          		autoplay: false,          
		 		slidesPerView: 4,
		      	spaceBetween: 13,
  				loopFillGroupWithBlank: true,
          		navigation: {
				    nextEl: '.mygame-slide-ctl'
				}, 
        	}   
		}
	},
	created(){		
		this.$http.get('/apis/gamestore/recommendedgame',{ params:{ position:1,label:1}})
		.then((res)=>{
			this.hotGameData1 = res.data.result[0].game;
			this.hotGameData2 = res.data.result[1].game;
			//this.classicGameData3 = res.data.result[2].game;
	 
		})
		this.getClassicGameData3()  //获取经典游戏列表
		/* 我的游戏 */
		this.$http.get('/apis/gamestore/mygame',{ params:{ uid: window.localStorage.getItem("uid") }})
		.then((res)=>{
			this.mygameList = res.data.result
		},(err)=>{
			alert(err)
		})
	},
	methods:{
		gameCol(index){
			return 'game-col-' + index
		},
		goForwardGame(id){
			this.$router.push({ path:'/gameCenter', query:{ game_id: id } })
		},
		getClassicGameData3(){
			this.$http.get('/apis/gamestore/recommendedgame',{ params:{ position:1,label:1,page_no:this.page_no_hotGameData3,page_size:this.page_size_hotGameData3  }})
						//page_no和page_size是假设使用的两个参数,后台暂未使用
			.then((res)=>{
				if (res.data.result[2].game.length) {
					// 如果有数据则进入将新的数据与老的数据拼接
					this.classicGameData3 = this.classicGameData3.concat(res.data.result[2].game);
					this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
					this.page_no_hotGameData3+=1;  //将页码加1
				}else{
					this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete'); //没有数据显示没有更多
				}
			})
		},
		onInfinite() {
			if(this.page_no_hotGameData3!=1){  //是因为我在页面初始化时请求了第一页的数据，所以当页面等于2时才请求数据
            	this.getClassicGameData3()
        	}
	    }
	}
}
</script>