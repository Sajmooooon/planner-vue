<template>
<nav class="filter-nav">
  <button @click="updateFilter('all')" :class="{active: current==='all'}">View All</button>
  <button @click="updateFilter('completed')" :class="{active: current==='completed'}">View Completed</button>
  <button @click="updateFilter('ongoing')" :class="{active: current==='ongoing'}">View Ongoing</button>
</nav>
</template>

<script>
export default {
  name: "FilterNav",
  props: ["current"],
  methods:{
    updateFilter(reason){
      this.$emit('filterChange', reason)
    }
  }
}
</script>

<style scoped>
.filter-nav button{
  background: none;
  border: none;
  outline: none;
  /*font-size: 12px;*/
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;
  color: #bbb ;
}
button.active{
  color: #555555;
}
</style>