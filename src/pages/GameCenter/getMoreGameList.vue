<template>
	<div>
		<div class="content-part active" id="getMoreGameList">
            <section class="game-part" v-for="item in getMoreGameList">     
             	<div class="game-part-title">         
             		<h5>{{ item.name }}</h5>     
             	</div>     
             	<div class="list_game_2" style="padding-bottom: 0.4rem;">          
             		<ul>  
             			<li v-for="item2 in item.game">                 
             				<a href="game-center.html?game_id=185">                     
             					<div class="game_list_img">                         
             						<img :src="item2.icon_url" alt="" style="opacity: 1;"> 
             					</div>                     
             					<figure>                          
             						<h6>  
             							<span class="game-name">{{ item2.name }}</span>                         
             						</h6>                          
             						<div class="game-tag-group">  
             							<span class="game-tag" v-for="tag in item2.tag">{{ tag.name }}</span>  
             						</div>  
             						<p>{{ item2.short_sentence }}</p>                     
             					</figure>                     
             					<div class="list_game_btn">                         
             						<input type="button" data-gamename="排行榜" data-url="game-center.html?game_id=185" value="开始" class="app-btn app-btn-default" @click="goForwardGame( item2.id )">                     
             					</div> 
             				</a>             
             			</li>             
             		</ul>          
             	</div>
            </section>
        </div>
	</div>
</template>

<script>
export default{
	data(){
		return{
 			getMoreGameList:[]
		}
	},
	created(){
 		this.$http.get('/apis/gamestore/recommendedgame',{ params:{ position:1,label:1} })
 		.then((res)=>{
 			this.getMoreGameList = res.data.result
 		},(err)=>{
 			alert(err)
 		})
	},
	methods:{
		goForwardGame(id){
			this.$router.push('/gameCenter')
		}
	}
}
</script>