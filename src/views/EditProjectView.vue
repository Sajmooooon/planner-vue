<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required>
    <label>Details:</label>
    <textarea v-model="details" required/>
    <button>Edit Project</button>
  </form>
</template>

<script>
export default {
  name: "EditProjectView",
  props: ['id'],
  data(){
    return{
      title: "",
      details: "",
      uri: "http://localhost:3000/projects/" + this.id
    }
  },
  mounted() {
    fetch(this.uri).then(project => project.json())
        .then(data=>{
          this.title = data.title
          this.details = data.details
        })
  },
  methods: {
    handleSubmit(){
      fetch(this.uri, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          title: this.title,
          details: this.details
        }),
      }).then(() => this.$router.push('/'))
          .catch((err) => console.log(err.message))
    }
  }
}
</script>

<style scoped>
form{
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label{
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
  font-weight: bold;
}
input, select, textarea{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

textarea{
  height: 100%;
}

form button{
  display: block;
  cursor: pointer;
  background: #2c3e50;
  border: 0;
  font-size: 16px;
  padding: 10px 20px;
  margin: 20px auto 0;
  color: aquamarine;
  border-radius: 20px;
}

</style>