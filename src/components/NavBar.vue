<template>
<nav class="main-nav">
  <router-link :to="{name: 'home'}">Projects</router-link>
  <router-link :to="{name: 'addProject'}">Add Project</router-link>
</nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.main-nav{
  text-align: center;
  margin: 30px auto;
}
.main-nav a{
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #2c3e50;
  font-size: 20px;
}

a.router-link-active{
  border-bottom: 2px solid darkturquoise;
  padding-bottom: 3px;
}
</style>