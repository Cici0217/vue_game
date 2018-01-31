<template>
	<div>
		<div class="list_game_b js-list">
			<div class="service-part" id="js_todayServiceList">
				<ul>  
					<li> 
						<a href="javascript:;"> 
							<div class="game_list_img"> 
								<img src="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011910143803057262.png" data-lazyload="http://gametest.phicomm.com:80/gamepic/images/2018/1/19/2018011910143803057262.png" data="" alt="" style="opacity: 1;"> 
							</div> 
							<div class="game_list_col"> 
								<figure> 
									<h6>
										<span class="game-name">西游记</span>
									</h6> 
									<p>一区001</p> 
								</figure> 
								<figure> 
									<span class="time">
										<i>已开服1天</i>
									</span> 
								</figure> 
							</div> 
						</a> 
						<div class="list_game_btn">  
							<input type="button" data-gamename="西游记" value="开始游戏" data-isbtn="2" data-isdisable="0" data-newserviceid="107" data-gameid="193" class="app-btn app-btn-blue">  
						</div> 
					</li> 
				</ul>
			</div>
			<div class="service-part" id="js_afterTodayServiceList" style="display:none;">
				<p class="nomore-info">暂无数据</p> 
			</div>
		</div>
	</div>
</template>

<script>
export default{
	created(){
		this.$http.get('/apis/gamestore/newopenservicegame',{ params: { uid: window.localStorage.getItem("uid") }})
		.then((res)=>{

		},(err)=>{
			alert(err)
		})
	}
}
</script>