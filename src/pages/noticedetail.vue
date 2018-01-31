<template>
	<div class="content announcementDetail" style="padding-top: 0;">
        <div class="title">
              <p class="title_p"> </p>
        </div>
        <div class="desc" style="display: none;">
              <p class="desc_p"></p>
        </div>
        <div class="pic" style="display: none;">
        </div>
        <div class="detail_desc desc" v-html="noticedetailData.desc">
        </div>
    </div>
</template>

<script>
export default{
	data(){
		return {
			noticedetailData: {}
		}
	},
	created(){
		this.$http.get('/apis/activitycenter/noticedetail',{ params: { noticeId: this.$route.query.noticeId } })
		.then((res)=>{
			this.noticedetailData = res.data.result
		},(err)=>{
			alert(22)
		})
	}
}
</script>