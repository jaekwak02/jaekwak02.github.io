<template>
	<div class="introduction-container" :style="{ 'min-height' : `${height}px` }">
		<div class="introduction">
			<div class="introduction-header">
				Jae Young Kwak
			</div>
			<div class="introduction-subheader">
				Software Engineer
			</div>
			<div class="contact-info">
				<div class="phone-number">
					224-715-2871
				</div>
				<div class="email">
					jaekwak02@gmail.com
				</div>
				<div class="contact-links">
					<div>
						<a href="https://www.linkedin.com/in/jae-young-kwak/" target="_blank">My LinkedIn</a>
					</div>
					<div>
						<a href="https://github.com/jaekwak02" target="_blank">My GitHub</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'introduction',
	data: function() {
		return {
			height: 0,
		}
	},
	created: function() {
		this.height = window.innerHeight - 300;
	}
}
</script>

<style lang="scss">
	.contact-links {
		padding: 10px 0px;
	}
	.introduction {
		padding: 20px 0px;
		background-color: rgba(255, 255, 255, .7);
		
		.introduction-header {
			font-family: Quicksand, Arial, Helvetica, sans-serif;
			font-size: 30px;
		}
		.introduction-subheader {
			font-family: Quicksand, Arial, Helvetica, sans-serif;
			font-size: 24px;
			margin-bottom: 30px;
		}
		.contact-info {
			font-size: 16px;
		}
	}
	
	@media screen and (min-width: 500px) {
		.introduction {
			.introduction-header {
				font-size: 46px;
			}
			.introduction-subheader {
				font-size: 32px;
			}
			.contact-info {
				font-size: 18px;
			}
		}
	}

</style>
