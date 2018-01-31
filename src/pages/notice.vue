<template>
	<div class="content">
		<div class="notice" id="noticeContentList" style="display: block;">      
			<div class="noticeList" v-for="item in noticeListData" @click="goForwardNoticeDetail(item.noticeId)"> 
				<div class="noticeList_title">
					{{ item.title }}
				</div> 
				<div class="noticeList_time">
					{{ item.startTime }}
				</div> 
			</div>      
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			noticeListData: []
		}
	},
	created(){
		this.$http.get('/apis/activitycenter/notice')
		.then((res)=>{
			this.noticeListData = res.data.result.noticeList
		},(err)=>{
			alert(err)
		})
	},
	methods:{
		goForwardNoticeDetail(noticeId){
			this.$router.push({ path:'/noticedetail', query:{ noticeId: noticeId } })
		}
	}
}
</script>