<template>
	<div>
		<div class="click_list" v-for="item in taklistData" v-if="item.taskid<4" @click="task(item.taskid, item.taskState)">
			<div class="list">
				<div class="list_icon">
					<img src="../assets/images/welfare/pointtask_1.png" class="list_icon_img" />
				</div>
				<div class="list_content">
					<p class="list_content_title" data-taskid="1">{{ item.name }}</p>
					<p class="list_content_label">{{ item.description }}</p>
				</div>
				<div class="list_button" v-if="item.taskState === 0">
					<input type="button" name="share" value="+50分" class="button1" v-if="item.taskid<3"/>
					<input type="button" name="share" value="去充值" class="button1" v-else/>
				</div>
				<div class="list_button" v-else="item.taskState === 1">
					<input type="button" name="share" value="已完成" class="button1 finish" />
				</div>
			</div>
		</div>
		<my-sign :sign-show="isSignShow" @on-close="closeSign()"></my-sign>
	</div>
</template>

<script>
import mySign from '../components/modal/sign'
export default{
	data(){
		return {
			taklistData:[],
			isSignShow: false
		}
	},
	components:{
		mySign
	},
	created(){
		this.$http.get('/apis/Welfare/point/tasklist', { headers: { Authorization:window.localStorage.getItem('access_token')}, params: { "uid": window.localStorage.getItem('uid') } })
		.then( (res)=> {
			this.taklistData = res.data.result.pointTaskList
		})
	},
	methods:{
		closeSign(){
			this.isSignShow = false;
		},
		task(taskId,taskState){
			if(taskState == 0){
				if(taskId == 1){
					this.isSignShow = true;
				}else if(taskId == 3){
					this.$router.push('/charge')
				}
			}
		}
	}
}
</script>