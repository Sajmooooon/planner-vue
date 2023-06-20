<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"></SingleProject>
      </div>
    </div>
    <div v-else>
      Loading data...
    </div>
  </div>
</template>

<script>


import SingleProject from "@/components/SingleProject";
export default {
  name: 'HomeView',
  components: {SingleProject},
  data(){
    return{
      projects: [],
    }
  },
  methods: {
    handleDelete(id){
      this.projects = this.projects.filter(project => project.id!==id)
    },
    handleComplete(id){
      let project = this.projects.find(p => p.id === id)
      project.complete = !project.complete
    }
  },

  mounted() {
    fetch('http://localhost:3000/projects')
        .then(res=>res.json())
        .then(data=>this.projects = data)
        .catch(err=>console.log(err.message))
  }
}
</script>
