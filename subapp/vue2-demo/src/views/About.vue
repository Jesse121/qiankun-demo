<template>
	<div class="about">
		<h1>This is an about page</h1>
		<button @click="goMain">go main</button>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "Home",
	methods: {
		goMain() {
			history.pushState(null, "home", "/home");
		}
	}
});
</script>
