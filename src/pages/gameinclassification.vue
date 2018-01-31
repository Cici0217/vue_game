<template>
	<div class="app-conten-wrap setting-bottom" style="padding-bottom: 3rem;">
	    <!-- 搜索 -->
		<div class="game_search_wrap" id="js-search">
		    <div class="search_group">
		        <div class="search-btn"></div>
		        <input id="js-searchInput" class="app-input" v-model="search" placeholder="请输入游戏名称" type="text">
		    </div>
		    <div class="search-begin">
		        <input id="js-searchBtn" type="button" name="share"  value="搜索" class="app-btn app-btn-text">        
		    </div>
		</div>
		<section class="catogry-result-list" style="">
	        <div class="list_game">
	            <ul class="search_list" id="searchList">
	            	<li v-for="item in gameinclassification"> 
	            		<a href="game-details.html?game_id=187"> 
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
	            		</a> 
	            		<div class="list_game_btn"> 
	            			<input type="button" name="share" value="开始" class="app-btn app-btn-default" @click="goFowardGameCenter(item.id)"> 
	            				<span class="gameId" style="display: none;">187</span> 
	            		</div>
	            	</li>
	            </ul>
	            <div class="app-loading-more" style="">
	                <div class="app-laoding-btn" id="js-laodingMoreBtn" style="">暂无更多</div>
	                <div class="app-loading-icon" id="js-laodingMoreIcon" style="display: none;"><!--style="display:none;"-->
	                    <i class="app-icon app-icon-loading-more"></i>
	                    <span>加载中...</span>
	                </div>
	            </div>
	        </div>
	    </section>
	</div>
</template>

<script>
export default{
	data(){
		return{
			gameinclassification:[],
			search:'一世之尊'
		}
	},
	created(){
		this.$http.get('/apis/gamestore/gameinclassification',{ params:{ pageNo:1, pageSize:10, classification_id: this.$route.query.classification_id}})
		.then((res)=>{
			this.gameinclassification = res.data.pageData
		},(err)=>{
			alert(22)
		})
	},
	methods:{
		goFowardGameCenter(id){
			this.$router.push({ path:'/gameCenter', query:{ activityId: id }})
		}
	}
}
</script>