<template>
	<div>
		<!-- 退出游戏弹框 -->
	    <div class="dialog-wrap" id="quitGameDialog" v-if="isQuitGmaeModelShow">
	        <div class="dialog-content has-footer">
	            <header>
	                <h3>更多好游戏向你推荐</h3>
	            </header>
	            <div class="main">
	                <div class="more-game">
	                    <div id="more-game-list">
	                    	<ul>
	                    		<li v-for="(item,index) in recommendedgameList">
	                    			<a href="game-center.html?game_id=199">
	                    				<div class="game_img">
	                    					<img style="opacity: 1;" :src="item.icon_url" alt="">
	                    				</div>
	                    				<p>{{ item.name }}</p>
	                    			</a>
	                    		</li>
	                    	</ul>
	                    </div>
	                    <div class="more-bame-banner" id="more-bame-banner">
	                       	<img style="opacity: 1;" :src="adbannerList.images[0].img_url"/>  
	                    </div>
	                </div>
	            </div>
	            <footer>
	                <a href="javascript:;" id="canceQuitDialog" @click="canceQuitDialog()">再玩一会儿</a>
	                <a href="javascript:;" id="quitGame" @click="quitGame()">退出游戏</a>
	            </footer>
	        </div>
	    </div>
	</div>
</template>

<script>
export default{
	props:{
		isQuitGmaeModelShow:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return {
			recommendedgameList:[],
			adbannerList:[]
		}
	},
	created(){
		this.$http.get('/apis/gamestore/recommendedgame',{ params:{ position:2, label:0, column_id:0 }})
		.then((res)=>{
			this.recommendedgameList = res.data.result
		},(err)=>{
			alert(err)
		})

		this.$http.get('/apis/gamestore/adbanner',{ params:{ position:2, label:0, column_id:0 }})
		.then((res)=>{
			this.adbannerList = res.data.result
		},(err)=>{
			alert(err)
		})
	},
	methods:{
		canceQuitDialog(){
			this.$emit('close-quit-game-model')
		},
		quitGame(){
			this.$router.push('/gameHome')
		}
	}
}
</script>