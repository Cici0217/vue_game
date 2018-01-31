<template>
	<div class="app-conten-wrap setting-bottom">
	    <section class="game-details-header">
	        <header>
	            <img id="js-detailsBigImg" :src="gamedetailData.image[0].img_url" style="opacity: 1;">
	            <div class="details-mask"></div>
	            <div class="details-info">
	                <ul>
	                    <li>
	                        <div>
	                            <img id="js-gameImg" :src="gamedetailData.icon_url" data="" alt="" style="opacity: 1;">
	                        </div>
	                    </li>
	                    <li id="js-gameHeadInfo">
	                    	<h4>{{ gamedetailData.name }}</h4> 
	                    	<p class="game-type">  
	                    		<span v-for="tag in gamedetailData.tag">{{ tag.name }}</span>  
	                    	</p> 
	                    	<p>{{ gamedetailData.players }}人在玩儿</p>
	                    </li>
	                </ul>
	                <input id="js-beginGame" type="button" name="share" value="开始" class="app-btn app-btn-white" @click="goForwardGame(gamedetailData.id)">
	            </div>
	        </header>
	        <div class="details-slide-wrap">
	            <div class="swiper-container swiper-container-horizontal">
	                <div class="swiper-wrapper" id="js_gameImgList">
	                	<div class="swiper-slide swiper-slide-active" data-index="0" style="margin-right: 10px;">     
	                		<a href="javascript:;"> 
	                			<img style="opacity: 1;" src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573806492908.png" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573806492908.png" class="swiper-slide-img"> 
	                		</a>
	                	</div> 
	                	<div class="swiper-slide swiper-slide-next" data-index="1" style="margin-right: 10px;">     
	                		<a href="javascript:;"> 
	                			<img style="opacity: 1;" src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573806671695.jpg" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573806671695.jpg" class="swiper-slide-img">
	                		</a>
	                	</div> 
	                	<div class="swiper-slide" data-index="2" style="margin-right: 10px;">     
	                		<a href="javascript:;"> 
	                			<img style="opacity: 1;" src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573807002103.jpg" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573807002103.jpg" class="swiper-slide-img">
	                		</a>
	                	</div> 
	                	<div class="swiper-slide" data-index="3" style="margin-right: 10px;">     
	                		<a href="javascript:;"> 
	                			<img style="opacity: 1;" src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573807338387.png" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573807338387.png" class="swiper-slide-img">
	                		</a>
	                	</div> 
	                	<div class="swiper-slide" data-index="4" style="margin-right: 10px;">     
	                		<a href="javascript:;"> 
	                			<img style="opacity: 1;" src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573807456307.jpg" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573807456307.jpg" class="swiper-slide-img">
	                		</a>
	                	</div> 
	                	<div class="swiper-slide" data-index="5" style="margin-right: 10px;">     
	                		<a href="javascript:;"> 
	                			<img style="opacity: 1;" src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573807803428.jpg" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011901573807803428.jpg" class="swiper-slide-img">
	                		</a>
	                	</div>
	                </div>
	            </div>
	        </div>
	    </section>
	    <section class="details-content">
	        <div class="game-part">
	            <div class="game-part-title">
	                <h5>礼包</h5>
	            </div>
	            <div class="list_game_c" style="padding-bottom: 0.4rem;" id="js_giftList">
	            	<p class="nomore-info">暂无数据</p>
	            </div>
	        </div>
	        <div class="game-part">
	            <div class="game-part-title">
	                <h5>游戏介绍</h5>
	            </div>
	            <div class="game-info-text game-more-info" id="js-gameDetails">
	              <span class="details-more">更多&gt;&gt;</span>  
	            	<div class="game-introInfo" id="js-introInfo"> 
		            	<p id="js-introText">小白菜（学名：普通白菜）
						拉丁学名：Brassica campestris L. ssp. chinensis Makino (...
						</p> 
					</div>
				</div>
	        </div>
	        <div class="game-part no-border">
	            <div class="game-part-title">
	                <h5>游戏信息</h5>
	            </div>
	            <div class="game-info-list" id="js-gameCompany">
		            <ul> 
		            	<li> 
		            		<span>发行公司：</span> 
		            		<p>{{ gamedetailData.cp.name }}</p> 
		            	</li> 
		            	<li> 
		            		<span>备案号：</span> 
		            		<p>{{ gamedetailData.record_num }}</p> 
		            	</li>
		            </ul>
	            </div>
	        </div>
	    </section>
	</div>
</template>

<script>
export default{
	data(){
		return{
			gamedetailData: {}
		}
	},
	created(){
		this.$http.get('/apis/gamestore/gamedetail',{ params:{ game_id: this.$route.query.game_id}})
		.then((res)=>{
			this.gamedetailData = res.data.result
		})
	},
	methods:{
		goForwardGame(id){
			this.$router.push({ path:'/gameCenter', query:{ game_id: id } })
		}
	}
}
</script>