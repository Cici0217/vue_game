<template>
	<section class="game-part" style="border-bottom:none">
            <div class="game-part-title">
                  <h5>普通礼包</h5>
            </div>
            <div class="list_game_d" id="js-packageList" style="padding-bottom:.4rem">
                  <ul v-if="gameGiftList.length>0"> 
                        <li v-for="item in gameGiftList"> 
                              <a href="javascript:;"> 
                                    <figure> 
                                          <h6>
                                                <span class="game-name">{{ item.giftName }}</span>
                                                <span class="game-tag">{{ item.giftTag }}</span>
                                          </h6> 
                                          <p>{{ item.giftDesc }}</p> 
                                    </figure> 
                              </a> 
                              <div class="list_game_btn">     
                                    <input type="button" data-gameid="125" data-giftid="59" value="领取" class="app-btn app-btn-default">     
                              </div>
                        </li>  
                  </ul>
                  <p class="nomore-info" v-else>暂无数据</p> 
            </div>
	</section>
</template>

<script>
export default{
	data(){
		return{
 			gameGiftList:[]
		}
	},
	created(){
 		this.$http.get('/apis/giftpackage/gameGift',{ params:{ gameId: this.$route.query.game_id}, headers:{ Authorization: window.localStorage.getItem("access_token") } })
 		.then((res)=>{
 			this.gameGiftList = res.data.result.giftList
 		},(err)=>{
 			alert(err)
 		})
	},
	methods:{
		goForwardGame(id){
                  alert(id)
                  this.$router.push({ path:'/gameCenter', query:{ game_id: id } });
		}
	}
}
</script>