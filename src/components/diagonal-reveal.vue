<template>
	<div class="diagonal-reveal">
		<svg viewBox="0 0 100 100" preserveAspectRatio="none">
			<polygon :points="`100,0 0,0 0,${100 - height}`" fill="rgb(50, 50, 50)"></polygon>
			<polygon :points="`0,100 100,100 100,${height}`" fill="rgb(50, 50, 50)"></polygon>
		</svg>
	</div>
</template>

<script>
var TWEEN = require('@tweenjs/tween.js')

export default {
	name: 'diagonal-reveal',
	data: function() {
		return {
			height: 0
		}
	},
	created: function() {
		var t = this;
		var params = { height: 0 };
		new TWEEN.Tween(params)
			.to({ height: 100 }, 1000)
			.easing(TWEEN.Easing.Quadratic.Out)
			.onUpdate(function() {
				t.height = params.height;
			})
			.start();
	}
}
</script>

<style scoped lang="scss">
	.diagonal-reveal {
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;

		.visual {
			width: 100%;
			height: 100%;
		}
	}
</style>
