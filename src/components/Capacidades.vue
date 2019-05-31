<template lang="pug">
	#capacidades
		el-container
			el-row(type="flex" justify="center")
				el-col(span="24")
					.titulo Capacidades
</template>

<script>
export default {
	name: 'Capacidades'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import "../styles/variables";
	#capacidades {
		height: 100vh;

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
