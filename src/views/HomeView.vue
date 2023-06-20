<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current"></FilterNav>
    <div v-if="projects.length">
      <div v-for="project in filteredProject" :key="project.id">
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
import FilterNav from "@/components/FilterNav";

export default {
  name: 'HomeView',
  components: {SingleProject, FilterNav},
  data(){
    return{
      projects: [],
      current: 'all'
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
  },
  computed: {
    filteredProject(){
      if(this.current==='all'){
        return  this.projects
      }
      else if(this.current === 'completed'){
        return this.projects.filter(project => project.complete)
      }
      else{
        return this.projects.filter(project => !project.complete)
      }
    }
  }
}
</script>
