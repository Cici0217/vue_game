<template>
	<div class="content">
		<div class="helpDetailTitle">{{ userGuide.title }}</div>
	    <div class="helpDetailShortDesc" style="display: none;">
	        <font style="line-height: .2rem;"></font>
	    </div>
	    <div class="helpDetailDesc" v-html="userGuide.guideMsg">
	    </div>
	</div>
</template>

<style>
@import "../assets/css/leaguercenter/leaguercenter"
</style>
<script>
export default{
	data(){
		return{
			userGuide:[
				{
					"guideId": 29,
					"guideMsg": "11",
					"title": "新用户使用帮助001"
				}
			]
		}
	},
	created(){
		this.$http.get('/apis/Account/userGuide',{ params:{ msgId: this.$route.query.id }})
		.then((res)=>{
			this.userGuide = res.data.result[0]
		},(err)=>{
			alert(err)
		})
	}
}
</script>