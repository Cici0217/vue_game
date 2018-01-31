<template>
	<div>
		<div class="listDivTop">
			<div class="line_left"></div>
			<div class="title_blue">话费流量</div>
		</div>
		<div class="clearfix"></div>
		<a href="javascript:void(0)" data-id="161" class="go_game_package">
			<div class="pkg_list_item">
				<img src="http://gametest.phicomm.com:80/gamepic/welfare/welfare_head_161.png" class="list_show_item_img gift_package">
				<div class="clearfix">
					<p class="list_show_item_title ellipsis">小白菜</p>
					<p class="list_show_item_title_blue">剩余:</p>
				</div>
				<div class="clearfix">
					<p class="list_show_item_title2">2</p>
					<p class="list_show_item_title_blue2">4</p>
				</div>
			</div>
		</a>
		<div class="clearfix"></div>
	</div>
</template>

<script>
/*
export _ from 'lodash'
*/
export default{
	data(){
		return {
			virtualGift:[]
		}
	},
	created(){
 		this.$http.get('/apis/Welfare/gift/list',{ params:{ giftType:1, startNumber:0, endNumber:-1, uid: window.localStorage.getItem("uid") } })
 		.then((res)=>{
 			this.virtualGift = res.data.result.virtualGift
 			/*
 			_.sortBy(this.virtualGift, function(item) {
			  return item.giftType;
			})
			*/

 		},(err)=>{
 			alert(err)
 		})
	},
	methods:{
 
	}
}
</script>