<template>
	<div id="app">

		<animated-hex-pattern></animated-hex-pattern>

		<transition name="content" appear>
			<div class="content">
				<div class="content-container">
					<introduction></introduction>
					
					<!-- <div class="triple-column">
						<falling-bricks-settings></falling-bricks-settings>
						<div></div>
						<div></div>
					</div>

					<button @click="AnimateBricks()">
						Test
					</button> -->
				</div>

				<div class="section-container">
					<div class="experience-section-2">
						<div class="section-header-container">
							<div class="section-header">
								Technical Skills
							</div>
							<div class="divider-block"></div>
							<div class="section-subheader">
								My hobbies include web programming and game development.
								I love working in JavaScript, both frontend and backend.
							</div>
						</div>
						<div class="technical-skills">
							<div class="technical-skills-body">
								<div class="skill-block-1">
									<div class="skill">
										&bull; JavaScript
									</div>
									<div class="skill">
										&bull; C#
									</div>
									<div class="skill">
										&bull; C++
									</div>
									<div class="skill">
										&bull; Python
									</div>
									<div class="skill">
										&bull; Java
									</div>
								</div>

								<div class="skill-block-2">
									<div class="skill">
										&bull; Vue.js
									</div>
									<div class="skill">
										&bull; Angular.js 1.X, 4			
									</div>
									<div class="skill">
										&bull; WebGL / OpenGL
									</div>
									<div class="skill">
										&bull; UnityEngine
									</div>
								</div>

								<div class="skill-block-3">
									<div class="skill">
										&bull; Node.js
									</div>
									<div class="skill">
										&bull; MongoDB
									</div>
									<div class="skill">
										&bull; SQLite
									</div>
								</div>
							</div>
						</div>

						<!-- <div class="experience">
							<div class="experience-header">
								Angular.js ServiceNow Portal Developer
							</div>
							<div class="experience-subheader">
								<div class="name">
									The Joint Commission
								</div>
								<div class="date">
									June 2017 - June 2018
								</div>
							</div>
							<div class="experience-details">
								At The Joint Commission, I worked extensively with the enterprise technician team to create a better user experience for both the end users of the helpdesk Service Portal and the IT teams that utilized the ServiceNow system for incident, service request, and change management.
							</div>
							<div class="experience-details">
								During my time there, I constructed the user-facing ServiceNow helpdesk portal from the using HTML5, SCSS, Angular.js, and the ServiceNow JavaScript backend API.
								The portal was heavily customized for the company's needs and was utilized as a self-service portal for the helpdesk.
							</div>
						</div> -->
					</div>

					<div class="experience-section-2">
						<div class="section-header-container">
							<div class="section-header">
								Education
							</div>
							<div class="divider-block"></div>
						</div>
						
						<div class="experience">
							<div class="experience-header">
								University of Illinois at Urbana Champaign
							</div>
							<div class="experience-subheader">
								B.S. in Electrical Engineering, minor in Computer Science
							</div>
							<div class="experience-date">
								August 2014 - May 2018
							</div>
						</div>
					</div>

					<div class="experience-section-2">
						<div class="section-header-container">
							<div class="section-header">
								Work Experience
							</div>
							<div class="divider-block"></div>
						</div>

						<div class="experience">
							<div class="experience-header">
								The Joint Commission
							</div>
							<div class="experience-subheader">
								Angular.js ServiceNow Portal Developer
							</div>
							<div class="experience-date">
								June 2017 - June 2018
							</div>
						</div>
					</div>

					<div class="experience-section-2">
						<div class="section-header-container">
							<div class="section-header">
								Personal Projects
							</div>
							<div class="divider-block"></div>
							<div class="section-subheader">
								I enjoy programming not only as a career path, but as a hobby. Here are some of the projects I have started.
							</div>
						</div>

						<div class="project-display">
							<div class="project" v-for="project in projects" :key="project.header" :style="project.style">
								<div class="project-header">
									{{project.header}}
								</div>
								<div class="project-subheader">
									{{project.subheader}}
								</div>
								<div class="project-divider"></div>
								<div class="project-subheader">
									{{project.tools}}
								</div>
								<div class="project-date">
									{{project.date}}
								</div>
								<div v-if="project.link">
									<a :href="project.link" target="_blank" class="project-link">{{project.link}}</a>
								</div>
							</div>
						</div>
					</div>

					<div class="experience-section-2">
						<div class="section-header-container">
							<div class="section-header">
								This Portfolio
							</div>
							<div class="divider-block"></div>
							<div class="section-subheader">
								This portfolio was made with Vue.js and GitHub Pages.
							</div>
						</div>
						<div class="vue-image">
							<img src="./assets/logo.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</transition>
		
	</div>
</template>

<script>
import introduction from './components/introduction.vue';
import animatedHexPattern from './components/animated-hex-pattern.vue';
//import fallingBricksSettings from './components/falling-bricks-settings.vue';
//import diagonalReveal from './components/diagonal-reveal.vue';

import { EventBus } from './EventBus';

export default {
	name: 'app',
	components: {
		introduction,
		animatedHexPattern,
		//fallingBricksSettings,
		//diagonalReveal
	},
	data: function() {
		return {
			projects: [
				{
					header: 'Lift Keep - Full Stack Progressive Web Application',
					subheader: `
					A tool for logging weightlifting workouts. 
					Developed over a period of 6 months using iterative development and deployed onto a remote Ubuntu server.
					The application is designed for mobile input (at the gym) and desktop view (for workout history).
					Scores 100% coverage of Lighthouse audit metrics for performance, progressive web app, best practices, and SEO.`,
					tools: 'Vue.js, Express.js, Node.js, MongoDB',
					date: 'January 2018 - present',
					link: 'https://liftkeep.com',
					style: ''
				},
				{
					header: 'Socket.io Chat App - Full Stack Web Application',
					subheader: `
					A chat application developed using a combination of Socket.io and Express.js.
					Features user registration, JWT authentication, user defined member groups, and creation of multiple chat rooms within groups`,
					tools: 'Vue.js, Socket.io, Express.js, Node.js, MongoDB',
					date: 'June 2018 - present',
					link: 'https://github.com/jaekwak02/chatting-with-websockets',
					style: ''
				},
				{
					header: 'Minecraft Rendering Engine in Unity',
					subheader: `
					A simple replication of the Minecraft block system in C# using UnityEngine.
					Renders blocks in 32x32x32 chunks, which is generated using layers of 2D and 3D noise and saved to encoded binary files.
					Blocks are textured using a texture map, and are generated, loaded, and saved in a separate thread to avoid blocking Unity's render thread.`,
					tools: 'C# in UnityEngine',
					date: 'January 2018 - March 2018',
					style: ''
				},
				{
					header: 'CalendarTracker for Google Calendar',
					subheader: `
					A C# project using the .NET framework and SQLite to pull data from your Google Calendar schedule and analyze how you use your day.`,
					tools: 'C# in .NET Framework',
					date: 'April 2017 - June 2017',
					link: 'https://github.com/jaekwak02/CalendarTracker-for-Google-Calendar',
					style: ''
				},
				{
					header: 'Binder - Chrome Extension',
					subheader: `
					My first ever project in web development - a Chrome Extension for saving sets of tabs, written in vanilla HTML5, CSS3, and JavaScript.
					I designed a custom drag + drop bookmark manager as a way to create the tab sets.
					It was poorly designed and the code was terribly written, but it served as a great learning experience for me.`,
					tools: 'HTML5, CSS3, JavaScript',
					date: 'March 2017 - April 2017',
					link: 'https://github.com/jaekwak02/Binder',
					style: ''
				},
				{
					header: '2D Platformer in Unity',
					subheader: `
					An action platformer written in C# using UnityEngine, and my first ever programming project outside of class.
					This project required me to think critically about character control, the game lifecycle, scene transitions, interactable game objects, and editor tooling for faster development.
					I never created a full game, but I created the basics including items and inventory, a development flow for creating skills, and rudimentary enemy AI.`,
					tools: 'C# in UnityEngine',
					date: 'January 2016 - December 2017'
				}
			]
		}
	},
	methods: {
		AnimateBricks: function() {
			EventBus.$emit('animate-hex');
		}
	},
	created: function() {
		for (var i = 0; i < this.projects.length; i++) {
			this.projects[i].style = GenerateProjectStyle(i, this.projects.length);
		}
	}

};

var startColor = [25, 25, 100]
var endColor = [0, 180, 220]
function GenerateProjectStyle(index, length) {
	var backgroundColor = [0,0,0]
	var interpolated = Math.abs(index / length);
	for (var i = 0; i < 3; i++) {
		backgroundColor[i] = Math.round(startColor[i] + (endColor[i] - startColor[i]) * interpolated);
	}
	return `background-color: rgb(${backgroundColor[0]},${backgroundColor[1]},${backgroundColor[2]})`;
}
</script>

<style lang="scss">
@font-face { font-family: Quicksand; src: url('assets/Quicksand-Regular.otf'); }

#app {
	font-family: "Helvetica Neue", Arial, sans-serif;
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

.content {
	position: fixed;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;

	overflow-y: scroll;
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;

	display: grid;
	grid-gap: 100px;
	align-content: start;

	.content-container {
		position: relative;

		// width: 1200px;
		// margin: auto;

		padding: 20px;

		display: grid;
		grid-gap: 20px;
		align-content: start;
	}

	.section-container {
		background-color: rgba(0, 0, 0, .5);

		display: grid;
		grid-gap: 100px;
	}
	.experience-section-1 {
		padding: 50px 0px;
		background-color: rgb(245, 245, 245);
		box-shadow: 0px 0px 15px rgba(0,0, 0, .2);
	}
	.experience-section-2 {
		padding: 50px 0px;
		background-color: rgb(220, 220, 220);
		box-shadow: 0px 0px 15px rgba(0,0, 0, .2);
	}
}
.content-enter {
	opacity: 0;
}
.content-enter-to {
	opacity: 1;
}
.content-enter-active {
	transition: all 2s 2.5s;
}

.section-header-container {
	padding: 0px 10px;

	.section-header {
		margin-bottom: 10px;

		font-size: 36px;
		text-align: center;
		font-family: Quicksand, "Helvetica Neue", Arial, sans-serif;
	}
	.section-subheader {
		font-size: 18px;
		text-align: center;
	}
	.divider-block {
		width: 160px;
		margin: auto;
		margin-top: 10px;
		margin-bottom: 40px;
		height: 4px;
		background-color: rgb(40, 100, 160);
	}
}

.triple-column {
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr 1fr;
	align-content: start;
}

.technical-skills {
	max-width: 1000px;
	margin: auto;

	.technical-skills-body {
		padding: 20px 0px;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;

		text-align: left;
		font-size: 18px;

		.skill-block-1 {
			padding: 15px;
			background-color: rgb(210, 255, 255);
		}
		.skill-block-2 {
			padding: 15px;
			background-color: rgb(255, 220, 255);
		}
		.skill-block-3 {
			padding: 15px;
			background-color: rgb(220, 255, 230);
		}
	}
}
.experience {
	max-width: 1000px;
	margin: auto;

	.experience-header {
		font-size: 26px;
		margin-bottom: 10px;
	}
	.experience-subheader {
		font-size: 20px;
		margin-bottom: 5px;
	}
	.experience-date {
		font-size: 16px;
	}
}
.project-display {
	max-width: 1000px;
	margin: auto;
	margin-top: 30px;
	margin-bottom: 30px;

	background-color: rgb(50, 50, 50);

	display: grid;
	grid-gap: 30px;

	.project {
		padding: 10px;
		background-color: rgb(100, 100, 100);
		
		display: grid;
		grid-gap: 10px;

		color: white;
		text-align: left;

		.project-link {
			color: white;
			&:visited {
				color: rgb(80, 240, 240);
			}
		}

		.project-divider {
			width: 200px;
			height: 3px;
			background-color: rgb(200, 200, 200);
		}

		.project-header {
			font-size: 24px;
		}
		.project-subheader {
			font-size: 16px;
		}
	}
}

@media screen and (max-width: 500px) {
	.section-header {
		font-size: 30px;
	}
	.section-subheader {
		font-size: 16px;
	}

	.technical-skills {
		.technical-skills-body {
			padding: 20px 0px;

			display: grid;
			grid-template-columns: auto;
			grid-gap: 20px;
		}
	}

	.experience {
		.experience-header {
			font-size: 22px;
		}
		.experience-subheader {
			font-size: 16px;
		}
		.experience-date {
			font-size: 16px;
		}
	}

	.project-display {
		.project {
			.project-header {
				font-size: 20px;
			}
			.project-subheader {
				font-size: 16px;
			}
		}
	}
}

.vue-image {
	margin: 30px 0px;
}
</style>
