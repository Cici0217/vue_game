<template>
	<div class="content">
		<div class="detailTitle">{{ getUserMsg.msg_title }}</div>
	    <div class="detailDesc">{{ getUserMsg.msg_content }}</div>
	</div>
</template>

<style>
@import '../assets/css/leaguercenter/leaguercenter.css'
</style>

<script>
export default{
	data(){
		return{
			getUserMsg:{}
		}
	},
	created(){
		this.$http.get('/apis/Account/getUserMsg',{ params:{ msgId: this.$route.query.id }, headers:{ Authorization: window.localStorage.getItem("access_token")} })
		.then((res)=>{
			this.getUserMsg = res.data.result
		},(err)=>{
			alert(err)
		})
	},
	methods:{
		goForward(id){
			this.$router.push({path:'/myinfoDetail', query:{ id:id }})
		}
	}
}
</script>