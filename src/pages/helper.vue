<template>
	<div class="content" id="helpContentList">
		<router-link tag="div" :to="{ path:'/helperDetail', query:{ id: item.guideId }}" class="helpList" v-for="item in userGuide">
			<div class="desc">{{ item.title }}</div> 
			<img src="../assets/images/leaguercenter/arrow.png"> 
			<div class="guideId" style="display: none">29</div>
		</router-link>
		<div class="common_loadmore "></div>
	</div>
</template>

<style>
@import "../assets/css/leaguercenter/leaguercenter"
</style>
<script>
export default{
	data(){
		return{
			userGuide:[]
		}
	},
	created(){
		this.$http.get('/apis/Account/userGuide')
		.then((res)=>{
			this.userGuide = res.data.result
		},(err)=>{
			alert(err)
		})
	}
}
</script>