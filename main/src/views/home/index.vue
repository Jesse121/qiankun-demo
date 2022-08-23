<template>
	<div>home</div>
	<button @click="goSubApp">go vue3-demo</button>
</template>

<script setup lang="ts">
const goSubApp = () => {
	history.pushState(null, "vue3-demo/about", "/vue3-demo/about");
};
</script>

<style scoped></style>
