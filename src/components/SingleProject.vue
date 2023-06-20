<template>
  <div class="project">
    <div class="actions">
      <h3 @click="toggleDetail">{{project.title}}</h3>
    </div>
    <div v-if="showDetail" class="detail">
      <p>{{project.details}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProject",
  props: ["project"],
  data(){
    return{
      showDetail: false
    }
  },
  methods: {
    toggleDetail(){
      this.showDetail = !this.showDetail
    }
  }
}
</script>

<style scoped>
.project{
  background: white;
  padding: 10px 20px;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 1px 2px 2px rgba(0,0,0,0.5);
  border-left: 4px solid #e90074;
}
h3{
  cursor: pointer;
}
</style>