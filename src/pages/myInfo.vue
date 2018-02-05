<template>
	<div class="content" id="contentList">
		<div v-for="item in getUserMsgList" @click="goForward(item.id)" :to="{ path:'/myinfoDetail', query:{ id:item.id } }" class="myInfoList">
			<p class="no-read" v-if="item.msg_status===0"></p>
			<div class="desc">恭喜你充值成功</div>
				<span id="infoId" style="display: none">6799</span>
				<img src="../assets/images/leaguercenter/arrow.png">
				<span class="info-time">2018.01.26 14:50:35</span>
			</div>
		</div>
	</div>
</template>

<style>
@import '../assets/css/leaguercenter/leaguercenter.css'
</style>

<script>
export default{
	data(){
		return{
			getUserMsgList:[]
		}
	},
	created(){
		this.$http.get('/apis/Account/getUserMsgList',{ params:{ msgType:0, msgCount:50 }, headers:{ Authorization: window.localStorage.getItem("access_token")} })
		.then((res)=>{
			this.getUserMsgList = res.data.result
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