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
	    <section class="catogry-tag">
	        <ul class="tag-list-a" id="recommendList">
	        	<li style="width:25%;" v-for="recommendItem in recommendList"> 
	        		<span class="recommendGame" @click="goFowardGameCenter(recommendItem.id)">{{ recommendItem.name }}</span> 
	        	</li>
	        </ul>
	        <ul class="tag-list-b" id="catogryList">
	        	<li v-for="item in classificationsofgame"> 
	        		<span class="catid" style="display: none">4</span> 
	        		<router-link :to="{ path:'/gameinclassification', query:{ classification_id: item.id }}"> 
	        			<h4>{{ item.name }}</h4> 
		        		<div> 
		        			<img :src=" item.icon_url " alt=""> 
		        		</div> 
	        			<p>{{ item.game_count }}款</p> 
	        		</router-link>
	        	</li>
	        </ul>
	    </section>
	    <section class="catogry-result-list">
	        <div class="list_game">
	            <ul class="search_list" id="searchList">
	            	<li v-for="item in searchList"> 
	            		<a href="game-details.html?game_id=203"> 
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
	            			<span class="gameId" style="display: none;">203</span> 
	            		</div>
	            	</li>
	            </ul>
	            <div class="app-loading-more" style="">
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
</template>

<script>
export default{
	data(){
		return{
			search:'一世之尊',
			searchList:[],
			classificationsofgame:[],
			recommendList:[]	
		}
	},
	created(){
		this.$http.get('/apis/gamestore/search',{ params:{ pageNo:1, pageSize:10, key: this.search}})
		.then((res)=>{
			this.searchList = res.data.pageData
		},(err)=>{
			alert(22)
		})

		this.$http.get('/apis/gamestore/recommendedgame',{ params:{ position:3, label:0, column_id: 0}})
		.then((res)=>{
			this.recommendList = res.data.result
		},(err)=>{
			alert(22)
		})

		this.$http.get('/apis/gamestore/classificationsofgame')
		.then((res)=>{
			this.classificationsofgame = res.data.result
		},(err)=>{
			alert(err)
		})	
	},
	methods:{
		goFowardGameCenter(id){
			this.$router.push({ path:'/gameCenter', query:{ activityId: id }})
		},
		getClassificationsofgame(){
			this.$http.get('/apis/gamestore/classificationsofgame')
			.then((res)=>{
				this.classificationsofgame = res.data.result
			},(err)=>{
				alert(err)
			})	
		}
	}
}
</script>