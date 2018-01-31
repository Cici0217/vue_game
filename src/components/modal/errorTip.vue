<template>
	<div v-if="isShow">
		<div class="modal_error_mask"></div>
		<div class="modal_error">
			<div class="modal_error_title">温馨提示</div>
			<hr class="modal_error_line">
			<div class="modal_error_content">
				{{ tip }}
			</div>
			<div class="modal_error_footer">
				确定
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props:["tip","isShow"]
}
</script>