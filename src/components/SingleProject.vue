<template>
  <div class="project" :class="{complete : project.complete}">
    <div class="actions">
      <h3 @click="toggleDetail">{{project.title}}</h3>
      <div class="icons">
        <span @click="toggleComplete" class="material-symbols-outlined tick">done</span>
        <router-link :to="{name: 'editProject', params: {id: project.id}}">
          <span class="material-symbols-outlined">edit</span>
        </router-link>
        <span @click="deleteProject" class="material-symbols-outlined">delete</span>
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
      showDetail: false,
      uri: "http://localhost:3000/projects/" + this.project.id
    }
  },
  methods: {
    toggleDetail(){
      this.showDetail = !this.showDetail
    },
    deleteProject(){
      fetch(this.uri, {method: "DELETE"})
          .then(() => this.$emit('delete',this.project.id))
          .catch(err => console.log(err.message))
    },
    toggleComplete(){
      fetch(this.uri, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({complete: !this.project.complete})
      })
          .then(() => this.$emit("complete", this.project.id))
          .catch(err => console.log(err.message))
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
.project.complete{
  border-left: 4px solid forestgreen;
}
.project.complete .tick{
  color: forestgreen;
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
  font-weight: bold;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
  font-size: 24px;
}
.material-symbols-outlined:hover{
  color: #888;
}
</style>