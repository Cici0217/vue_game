<template>
	<div v-if="isShow">
		<div class="mask" style="display: block;"></div>
		<div class="modal_div receive_modal" style="display: block;">
		    <div class="modal_banner receive_banner"></div>
		    <div class="modal_content">
		        <div class="modal_code" data-clipboard-text="398  413">{{ receiveModalData.giftContent ? receiveModalData.giftContent : ' '}}</div>
		        <div class="modal_code_des">
		            长按虚线上方复制礼包码
		        </div>
		        <div class="modal_text">{{ receiveModalData.contentDesc ? receiveModalData.contentDesc : ' ' }}</div>
		        <div class="modal_footer">
		            <div class="modal_btn cancel" @click="closeModal()">现在不玩</div>
		            <div class="modal_btn confirm" @click="goFoward(gameId)">去玩游戏</div>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			game_id: 1
		}
	},
	props:{
		isShow:{
			type: Boolean,
			default: false
		},
		gameId:{
			type: Number
		},
		receiveModalData: {}
	},
	methods:{
		closeModal(){
			this.$emit("on-close")
		},
		goFoward(id){
			this.game_id = id
			this.$router.push({ path: '/gameCenter', query:{ game_id: this.game_id }})
		}
	}
}
</script>