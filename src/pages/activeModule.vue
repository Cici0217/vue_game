<template>
	<div>
		<!--顶部导航栏-->
		<div class="topTab">
		    <router-link  to="/activity" class="topTab__item" id="activity">
		        <p class="topTab__label active" @click="changeTab($event)">活动</p>
		    </router-link>
		    <router-link  to="/notice" class="topTab__item" id="notice">
		        <p class="topTab__label" @click="changeTab($event)">公告</p>
		    </router-link>
		</div>
		<router-view/>
	</div>
</template>

<script>
export default{
	methods: {
		changeTab($event){
			$(".topTab__label").removeClass("active");
			$event.currentTarget.className = 'topTab__label active';
		}
	}
}
</script>