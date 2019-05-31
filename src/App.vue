<template lang="pug">
	#app
		el-container
			Header

</template>

<script>
import Header from './components/Header';

export default {
	name: 'app',
	components: { Header }
}
</script>

<style lang="scss">
	@import "styles/variables";

	body{
		margin: 0;
	}
	#app {
		background-color: $--background-color-base;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		text-align: center;
	}
</style>
