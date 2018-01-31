<template>
	<div>
		gameCenter
	</div>
</template>

<script>
export default{
	created() {
		console.log(this.$route.query.game_id)
	}
}
</script>