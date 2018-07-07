<template>
	<div id="app">
		<introduction></introduction>
		<fallingBricks></fallingBricks>

	</div>
</template>

<script>
import introduction from './components/introduction.vue';
import fallingBricks from './components/falling-bricks.vue';

export default {
	name: 'app',
	components: {
		introduction,
		fallingBricks
	}
};
</script>

<style>
#app {
	font-family: Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: rgb(30, 30, 30);
	font-size: 16px;
}

html,
body {
	margin: 0px;
	padding: 0px;
}


</style>
