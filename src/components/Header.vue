<template lang="pug">
	#header
		el-header
			el-button-group
				el-button Capacidades
				el-button Experiencias
			el-button-group
				el-button GitHub
				el-button Facebook
				el-button Contato
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	#header{
		width: 100%;
		.el-header {
			display: flex;
			width: 100%;
			justify-content: space-between;
		}
	}
</style>
