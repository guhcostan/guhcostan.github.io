<template lang="pug">
	el-header#header(:height='height + "px"' ref="header")
		img.logo(src="../assets/logo.png")
		el-button-group
			el-button.scrollactive-item(@click="$vuetify.goTo('#capacidades', options)") Capacidades
			el-button.scrollactive-item(@click="$vuetify.goTo('#experiencias')") Experiencias
			el-button.scrollactive-item(@click="$vuetify.goTo('#sobre')") Sobre
			el-button.scrollactive-item(@click="$vuetify.goTo('#contato')") Contato
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			options: {
				offset: 100
			},
			height: 100
		}
	},
	created() {
		window.addEventListener('scroll', this.handleSCroll);
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleSCroll);
	},
	methods: {
		handleSCroll() {
			let header = document.querySelector('#header');
			if (window.scrollY > 1 && !header.className.includes('positionFixed')) {
				this.$emit("headerFixed");
				header.classList.add('positionFixed');
			} else if (window.scrollY < 1) {
				this.$emit("headerNotFixed");
				header.classList.remove('positionFixed');
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	#header {
		z-index: 1;
		display: flex;
		vertical-align: middle;
		width: 100%;
		justify-content: space-between;

		.logo {
			height: 100%;
			margin: 0 20px;
		}

		.el-button {
			height: 100%;
			font-weight: bold;
			background-color: transparent;
			border: none;
		}
	}

	.positionFixed {
		position: fixed;
	}


</style>
