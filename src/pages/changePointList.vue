<template>
 	<div>
		<div class="list2" v-for="(item,index) in getPointListData">
			<div class="list_content2">
				<p class="list_content_title2">{{ item.createTime }}</p>
				<p class="list_content_label2">{{ item.pointTask }}</p>
			</div>
			<div class="list_button2">
				<input type="button" name="share" :value="getVal(index)" class="button1">
			</div> 
		</div>
		<div class="list2 first" v-show='getPointListData == null'>
			<div class="list_content3">暂无记录</div> 
		</div>
 	</div>
</template>

<script>
export default{
	data(){
		return {
			getPointListData: [],
			uid: window.localStorage.getItem("uid"),
			pointValue: 0
		}
	},
	created(){
 		this.$http.get('/apis/Welfare/point/detail',{ params:{ timeOrder:0, pointDetailType:2, uid: this.uid }})
 		.then((res)=>{
 			this.getPointListData = res.data.result.earnRecord;
 		},(err)=>{
 			alert(err)
 		})
	},
	methods:{
		getVal(index){
			return "+"+ this.getPointListData[index].value +"分"
		}
	}
}
</script>