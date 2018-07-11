<template>
	<div class="animated-hex-pattern">
		<transition appear name="instant">
			<svg viewBox="0 0 100 100" class="visual">
				<g v-for="layer in layers" :key="layer.id">
					<g v-for="(side, sideIndex) in layer.sides" :key="side.id">
						<g :transform="`rotate(${sideIndex * 60 + side.rotation} 50 50)`">
							<polygon :transform="`translate(${polygon.translation})`" :points="polygon.points" v-for="polygon in side.polygons" :key="polygon.id" :fill="polygon.color"></polygon>
						</g>
					</g>
				</g>
			</svg>
		</transition>
	</div>
</template>

<script>
import { EventBus } from '../EventBus';
var TWEEN = require('@tweenjs/tween.js')

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

var GenerateID = (function() {
	var count = 0;
	return function() {
		return count++;
	}
}());

export default {
	name: 'falling-bricks',
	data: function() {
		return {
			animated: false,
			layers: []
		}
	},
	methods: {
		CreateLayers: function(count) {
			for (var i = 0; i < count; i++) {
				this.layers.push({
					id: GenerateID(),
					sides: []
				});
			}
		},
		AnimateHex: function() {
			console.log('testing');

			var t = this;
			var translation = { translation: 0 }
			new TWEEN.Tween(translation)
				.to({ translation: 10 }, 2000)
				.easing(TWEEN.Easing.Quadratic.Out)
				.onUpdate(function() {
					for (var i = 1; i < 3; i++) {
						t.layers[0].sides[i].polygons.forEach(p => p.translation = translation.translation);
					}
				})
				.start();
		},
		Animate: function() {
			this.CreateLayers(4);

			for (var i = 0; i < 6; i ++) {
				this.layers[0].sides.push(CreateCenter(60));
				this.layers[1].sides.push(CreateLayer2(180));
				this.layers[2].sides.push(CreateLayer3(60));
				this.layers[3].sides.push(CreateLayer4(60));
			}

			var t = this;
			
			var centerTranslation = {
				translation: 20
			}
			new TWEEN.Tween(centerTranslation)
				.to({ translation: 0 }, 2000)
				.easing(TWEEN.Easing.Quadratic.Out)
				.onUpdate(function() {
					for (var i = 0; i < 6; i++) {
						t.layers[0].sides[i].polygons.forEach(p => p.translation = centerTranslation.translation);
					}
				})
				.delay(1000)
				.start();

			var centerRotation = { rotation: 60 }
			new TWEEN.Tween(centerRotation)
				.to({ rotation: 0 }, 1000)
				.easing(TWEEN.Easing.Quadratic.Out)
				.onUpdate(function() {
					t.layers[0].sides.forEach(s => s.rotation = centerRotation.rotation)
				})
				.delay(1000)
				.start();

			var layer2translation = { translation: 40 };
			new TWEEN.Tween(layer2translation)
				.to({ translation: 0 }, 1000)
				.easing(TWEEN.Easing.Quadratic.Out)
				.onUpdate(function() {
					t.layers[1].sides.forEach(s => s.polygons.forEach(p => p.translation = layer2translation.translation));
				})
				.start();

			var layer2rotation = { rotation: 180 };
			new TWEEN.Tween(layer2rotation)
				.to({ rotation: 0 }, 3000)
				.easing(TWEEN.Easing.Quadratic.Out)
				.onUpdate(function() {
					t.layers[1].sides.forEach(s => s.rotation = layer2rotation.rotation)
				})
				.start();

			var layer3translation = { translation: 30 };
			new TWEEN.Tween(layer3translation)
				.to({ translation: 10 }, 1000)
				.easing(TWEEN.Easing.Quadratic.Out)
				.onUpdate(function() {
					t.layers[2].sides.forEach(s => s.polygons.forEach(p => p.translation = layer3translation.translation));
				})
				.start();

			var layer4translation = { translation: 10 };
			new TWEEN.Tween(layer4translation)
				.to({ translation: 30 }, 1500)
				.easing(TWEEN.Easing.Quadratic.Out)
				.onUpdate(function() {
					t.layers[3].sides.forEach(s => s.polygons.forEach(p => p.translation = layer4translation.translation));
				})
				.start();
		}
	},
	created: function() {

		if (document.hidden) {
			document.addEventListener("visibilitychange", () => {				
				if (!document.hidden && !this.animated)  {
					this.animated = true;
					this.Animate();
				}
			});
		} else {
			this.Animate();
		}

		EventBus.$on('animate-hex', this.AnimateHex);

		
	}
}

function CreateLayer4(rotation) {
	var polygons = [];
	var rt3 = Math.sqrt(3);

	polygons.push(CreatePolygon([
		{ x: 50 + rt3 * 50, y: 50 - 50 },
		{ x: 50 + rt3 * 30, y: 50 },
		{ x: 50 + rt3 * 20, y: 50 }
	]));
	polygons.push(CreatePolygon([
		{ x: 50 + rt3 * 50, y: 50 + 50 },
		{ x: 50 + rt3 * 30, y: 50 },
		{ x: 50 + rt3 * 20, y: 50 }
	]));

	return {
		id: GenerateID(),
		polygons,
		rotation: rotation || 0
	}
}
function CreateLayer3(rotation) {
	var polygons = [];
	var rt3 = Math.sqrt(3);

	polygons.push(CreatePolygon([
		{ x: 50 + rt3 * 14, y: 50 - 14 },
		{ x: 50 + rt3 * 14, y: 50 + 14 },
		{ x: 50 + rt3 * 20, y: 50 }
	]));
	polygons.push(CreatePolygon([
		{ x: 50 + rt3 * 50, y: 50 + 50 },
		{ x: 50 + rt3 * 14, y: 50 + 14 },
		{ x: 50 + rt3 * 20, y: 50 }
	]));
	polygons.push(CreatePolygon([
		{ x: 50 + rt3 * 50, y: 50 - 50 },
		{ x: 50 + rt3 * 14, y: 50 - 14 },
		{ x: 50 + rt3 * 20, y: 50 }
	]));

	return {
		id: GenerateID(),
		polygons,
		rotation: rotation || 0
	};
}
function CreateLayer2(rotation) {
	var polygons = [];
	var rt3 = Math.sqrt(3);

	polygons.push(CreatePolygon([
		{ x: 50 + rt3 * 10, y: 50 + 10 },
		{ x: 50 + rt3 * 10, y: 50 - 10 },
		{ x: 50 + rt3 * 14, y: 50 - 14 },
		{ x: 50 + rt3 * 14, y: 50 + 14 },
	]));
	return {
		id: GenerateID(),
		polygons,
		rotation: rotation || 0
	};
}
function CreateCenter(rotation) {
	var polygons = [];
	var rt3 = Math.sqrt(3);

	polygons.push(CreatePolygon([
		{ x: 50, y: 50 },
		{ x: 50 + rt3 * 80, y: 50 + 80},
		{ x: 50 + rt3 * 80, y: 50 - 80 },
	], 20));
	polygons.push(CreatePolygon([
		{ x: 50, y: 50 },
		{ x: 50 + rt3 * 10, y: 50 + 10},
		{ x: 50 + rt3 * 10, y: 50 - 10 },
	], 20));

	return {
		id: GenerateID(),
		polygons,
		rotation: rotation || 0
	};
}
function CreatePolygon(points, translation) {
	var polygon = {
		id: GenerateID(),
		points: CreatePolygonString(points),
		color: GenerateColor(),
		translation: translation || 0
	};
	return polygon;
}
function CreatePolygonString(points) {
	var s = '';
	for (var p of points) {
		s += `${p.x},${p.y} `
	}
	return s;
}


var minR = 50;
var maxR = 100;

var minG = 0;
var maxG = 255;

var minB = 150;
var maxB = 230;

function GenerateColor() {
	var r = Math.round(minR + (maxR - minR) * Math.random());
	var g = Math.round(minG + (maxG - minG) * Math.random());
	var b = Math.round(minB + (maxB - minB) * Math.random());
	return `rgb(${r}, ${g}, ${b})`;
}
</script>

<style scoped lang="scss">
.animated-hex-pattern {
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;

	background-color: rgb(30, 30, 30);

	.visual {
		width: 100%;
		height: 100%;
	}
}

.instant-enter {
	opacity: 0;
}
.instant-enter-to {
	opacity: 1;
}
.instant-enter-active {
	transition: all .5s;
}
</style>
