<template>
	<div class="falling-bricks-settings">
		
		<div class="settings-header">
			Like the Background?
		</div>
		<div class="settings-subheader">
			Play with it
		</div>
		<input type="range">
		<input type="range">
		<input type="range">
		<input type="range">
		<input type="range">
		<input type="range">
		<input type="range">
		<input type="range">
		<input type="range">
		<input type="range">
		<input type="range">
		<input type="range">
	</div>
</template>

<script>
export default {
	name: 'falling-bricks-settings'
}
</script>

<style lang="scss">
	.falling-bricks-settings {
		padding: 20px;
		background-color: rgba(255, 255, 255, .6);

		.settings-header {
			font-size: 24px;
		}
		.settings-subheader {
			font-size: 20px;
		}
	}
</style>
