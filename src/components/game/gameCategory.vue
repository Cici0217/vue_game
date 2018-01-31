<!-- 游戏页分类 -->
<template>
	<section class="game-category"> 
	   	<router-link  class="active" to="/gameHome"> 
	   		<i class="app-icon app-icon-gameCategory app-icon-hot"></i> 
	   		<span>热门</span> 
	   	</router-link> 
	   	<router-link to="/newGame"> 
	   		<i class="app-icon app-icon-gameCategory app-icon-newGame"></i> 
	   		<span>新游戏</span> 
	   	</router-link> 
	    <router-link to="/NewService"> 
	    	<i class="app-icon app-icon-gameCategory app-icon-openService"></i> 
	    	<span>新开服</span> 
	    </router-link> 
	    <router-link to="/GameCatogry"> 
	    	<i class="app-icon app-icon-gameCategory app-icon-category"></i> 
	    	<span>分类</span> 
	    </router-link> 
	</section>
</template>