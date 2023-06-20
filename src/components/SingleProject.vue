<template>
  <div class="project">
    <div class="actions">
      <h3 @click="toggleDetail">{{project.title}}</h3>
      <div class="icons">
        <span class="material-symbols-outlined">done</span>
        <span class="material-symbols-outlined">edit</span>
        <span class="material-symbols-outlined">delete</span>
      </div>
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
.actions{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.material-symbols-outlined{
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
  font-size: 24px;
}
.material-symbols-outlined:hover{
  color: #888;
}
</style>