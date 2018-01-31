<template>
	<div class="content">
		<div class="topTab">
		    <span  class="topTab__item" v-for="(item,index) in welfareTabData">
		        <p class="topTab__label active" @click="changeTab(index)" v-if="index===0">{{ item.name }}</p>
		        <p class="topTab__label" @click="changeTab(index)" v-else>{{ item.name }}</p>
		    </span>
		</div>
		<router-view/>
	</div>
</template>

<style scope>
@import '../assets/css/welfare/welfare.css'
</style>

<script>
import mySign from '../components/modal/sign'
export default{
	data(){
		return{
			welfareTabData:[
				{
					name: '积分任务',
					path: '/taskList'					
				},
				{
					name: '积分记录',
					path: '/pointList'					
				},
				{
					name: '兑换礼品',
					path: '/changeGift'					
				}
			]
		}
	},
	components:{
		mySign
	},
	methods:{
		changeTab(index){
			$(".topTab__label").removeClass("active");
			$(".topTab__label").eq(index).addClass("active");
			this.$router.push({ path: this.welfareTabData[index].path });
		}
	}
}
</script>