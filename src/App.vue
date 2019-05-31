<template lang="pug">
	#app
		el-container(direction="vertical")
			Header(@headerFixed="addMarginTopMain(true)" @headerNotFixed="addMarginTopMain(false)")
			el-main#main
				Capacidades
				Experiencias
				Sobre
				Contato

</template>

<script>
import Header from './components/Header';
import Capacidades from './components/Capacidades';
import Experiencias from './components/Experiencias';
import Sobre from './components/Sobre';
import Contato from './components/Contato';

export default {
	name: 'app',
	components: { Contato, Sobre, Experiencias, Capacidades, Header },
	methods: {
		addMarginTopMain(addClass){
			let main = document.querySelector('#main');
			if (addClass && !main.className.includes('headerFixed')) {
				main.classList.add('headerFixed');
			} else {
				main.classList.remove('headerFixed');
			}

		}
	}
}
</script>

<style lang="scss">
	@import "styles/variables";

	.headerFixed{
		margin-top: 100px
	}

	#main{
		padding: 0;
	}
	@font-face {
		font-family: computer-font;
		src: url(./fonts/Computerfont.ttf);
	}

	* {
		font-family: computer-font, serif;
		font-size: 20px;
		color: $--color-text-primary;
	}

	body {
		margin: 0;
	}

	#app {
		min-height: 100vh;
		background-color: $--background-color-base;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		text-align: center;
	}
</style>
