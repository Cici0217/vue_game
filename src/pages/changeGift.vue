<template>
	<div class="content">
	    <div class="content_tab">
	        <div class="content_tab_menue active" @click="changeTab($event,1)">
	            虚拟物品 
	        </div>
	        <div class="content_tab_menue" @click="changeTab($event,2)">
	            实物礼品
	        </div>
	    </div>
	    <router-view/>
	</div>
</template>

<script>
export default{
	data(){
		return {
			 
		}
	},
	created(){
 
	},
	methods:{
		changeTab($event,index){
			$(".content_tab_menue").removeClass("active");
			var el = $event.currentTarget;
			$(el).addClass("active");
			if( index==1 ){
				this.$router.push('/echangeVirtualGift')
			}else{
				this.$router.push('/echangeEntityGift')
			}
		}
	}
}
</script>