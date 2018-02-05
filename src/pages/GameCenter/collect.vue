<template>
	<div>
		<div class="content-part active" style="height: 100%;position: absolute;left: 0;top: 0;right: 0;bottom: 0;background: #ffffff;">
			<section class="plat-part">
				<div class="plat-focus">
					<h4 class="game_collect_name" v-if="isCollected">您已经收藏了{{ game_name }}</h4>
					<h4 class="game_collect_name" v-else>您已经取消收藏了{{ game_name }}</h4>
					<h3>请关注公众号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一对一客服</h3>
					<ul>
						<li>
							<img class="logo-a" src="../../assets/images/plat/plat_img_logo-a.png" alt="">
							<img class="logo-b" src="../../assets/images/plat/plat_img_logo-b.png" alt="">
						</li>
						<li>
							<img class="QR" src="../../assets/images/plat/plat_img_QR.png" alt="">
							<figure>
								<p>1、长按上方二维码，选择识别图中二维码</p>
								<p>2、点击关注公众号</p>
							</figure>
						</li>
					</ul>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			game_name:'',
			isCollected: this.$route.query.isCollected
		}
	},
	created(){
		/*获取游戏名称*/
		this.$http.get('/apis/gamestore/gamedetail',{ params:{ game_id: window.localStorage.getItem("game_id") }, headers:{'Content-Type':'application/x-www-form-urlencoded'} })
		.then((res)=>{
			console.log(res)
			this.game_name = res.data.result.name
		},(err)=>{
			alert(err)
		})
	}
}
</script>