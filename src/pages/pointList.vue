<template>
	<div class="content">
	    <div class="content_tab">
	        <div class="content_tab_menue active" @click="changeTab($event,1)">
	            获取记录 
	        </div>
	        <div class="content_tab_menue" @click="changeTab($event,2)">
	            兑换记录
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
				this.$router.push('/getPointList')
			}else{
				this.$router.push('/changePointList')
			}
		}
	}
}
</script>