<template lang="pug">
	#experiencias
		el-container
			el-row(type="flex" justify="center")
				el-col(span="24")
					.titulo Experiencias
</template>

<script>
export default {
	name: 'Experiencias',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import "../styles/variables";
	#experiencias {
		height: 100vh;
		padding: 100px 0 0 0!important;
		background-color: $--color-primary-lighter;

		.el-row {

			width: 100%;

			.el-col {

				.titulo {
					text-align: center;
					width: 100%;
					font-size: 50px;
				}
			}
		}
	}


</style>
