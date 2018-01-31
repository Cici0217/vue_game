<template>
	<div class="content">
        <div v-for="item in noticeList">
    		<div class="activeList" :id="item.activityId" @click="goFowardActiveDetail(item.activityId)"> 
    		    <div class="activeList_icon"> 
    		        <img 
    		        :src="item.iconUrl" 
    		        class="activeList_icon_img" 
    		        style="opacity: 1;" 
    		        /> 
    		    </div> 
    		    <div class="activeList_content"> 
    		        <div class="activeList_text"> 
    		            <div class="title">
    		                {{ item.title }}
    		            </div> 
    		            <div class="time">
    		                <span>活动时间</span>： 
    		                <span>{{ item.startTime }}-{{ item.endTime }}</span>
    		            </div> 
    		        </div> 
    		        <div class="activeList_button"> 
    		            <a href="javascript:;" class="active" v-if="item.revokeFlag===1 && item.status===1">即将开始</a> 
                        <a href="javascript:;" class="active" v-else="item.revokeFlag===1 && item.status===2">进行中</a> 
                        <a href="javascript:;" class="unactive" v-else="item.revokeFlag===1 && item.status===3">已结束</a>
    		        </div>
    		    </div> 
    		</div>
        </div>
	</div>
</template>

<script>
import 'jquery'
export default{
    props:{
        showItem:{
            type:'String'
        }
    },
	data(){
		return {
			noticeList: [],
            activityId: 0
		}
	},
    created(){
        this.$http.get('/apis/activitycenter/activity')
        .then((res)=>{
            this.noticeList = res.data.result.activityList;
        },(err)=>{
            alert("error")
        })
    },
    methods: {
        goFowardActiveDetail(param){
            this.activityId = param;
            this.$router.push({ path:'/ActiveDetail', query:{ activityId: this.activityId } });
        }
    }
}
</script>

<style>
@import '../assets/css/activity/active.css'
</style>