<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goSubApp">go react</button>
    <button @click="goMain">go main</button>
    <input type="text" />
  </div>
</template>

<script setup lang="ts">
const goSubApp = () => {
  history.pushState(null, "react-demo", "/react-demo");
};

const goMain = () => {
  history.pushState(null, "home", "/home");
};
</script>
