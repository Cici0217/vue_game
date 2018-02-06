<template>
	<div class="app-conten-wrap setting-bottom" style="padding-bottom: 3rem;">
	    <!-- 搜索 -->
		<div class="game_search_wrap" id="js-search">
		    <div class="search_group">
		        <div class="search-btn"></div>
		        <input id="js-searchInput"	class="app-input" v-model="search" placeholder="请输入游戏名称" type="text">
		    </div>
		    <div class="search-begin">
		        <input id="js-searchBtn" type="button" name="share" value="搜索" class="app-btn app-btn-text"  
		        @click="searchGameCatogry(true)">       
		    </div>
		</div>
	    <section class="catogry-tag" v-if="isDefaultShow">
	        <ul class="tag-list-a" id="recommendList">
	        	<li style="width:25%;" v-for="recommendItem in recommendList"> 
	        		<span class="recommendGame" @click="goFowardGameDetail(recommendItem.id)">{{ recommendItem.name }}</span> 
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
	            <ul class="search_list" id="searchList" v-if="isSearchListShow">
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
	                <div class="app-laoding-btn" id="js-laodingMoreBtn" style="" v-if="isSearchResultNoMore">暂无更多</div>
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
			search: this.$route.query.gameInfo||'',
			searchList:[],
			classificationsofgame:[],
			recommendList:[],
			isSearch:false,
			isSearchResultNoMore:false,
			isDefaultShow:true,
			isSearchListShow:false //搜索结果	
		}
	},
	created(){
		if($.trim(this.search)!=""){
			this.isSearch = true
		}
		/* 默认列表 */
		this.$options.methods.getClassificationsofgame.bind(this)()
		/* 推荐游戏 */
		this.$options.methods.searchGameCatogry.bind(this)(false)
	},
	methods:{
		/* 开始游戏 */
		goFowardGameCenter(id){
			this.$router.push({ path:'/gameCenter', query:{ game_id: id }})
		},
		/* 开始游戏详情 */
		goFowardGameDetail(id){
			this.$router.push({ path:'/gameDetail', query:{ game_id: id }})
		},
		/* 默认列表 */
		getClassificationsofgame(){
			this.$http.get('/apis/gamestore/classificationsofgame')
			.then((res)=>{
				this.classificationsofgame = res.data.result
			},(err)=>{
				alert(err)
			})	
	
		},
		inputFunc(){
			console.log(22)
		},
		/* 搜索游戏 */
		searchGameCatogry(tag){
			if(tag){
				if($.trim(this.search)==""){
					alert("请输入您要搜素的内容!");
					return false;
				}
				this.$http.get('/apis/gamestore/search',{ params:{ pageNo:1, pageSize:10, key:this.search }})
				.then((res)=>{
					this.searchList = res.data.pageData
					this.isDefaultShow = false
					this.isSearchResultNoMore = true
					this.isSearchListShow = false
					if( this.searchList.length == 0 ){
						alert("暂未搜索到您要的游戏!");
					}else{
						this.isSearchListShow = true
					}
				},(err)=>{
					alert(22)
				})
			}else{
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
			}
		}

	}
}
</script>