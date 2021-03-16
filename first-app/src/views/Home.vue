<template>
  <div class="home">
      <h4>VUE JS</h4>
      <div v-for="item in editorEmployees" :key="item.id" >
          <p > {{item.name}} {{item.age}} </p>
      </div>
          <button v-on:click="addedS">Add</button> | 
          <button v-on:click="sub">Sub</button> | 


      <h4>NODE JS</h4>
      <div v-for="item in employees" :key="item.id">
          <p v-if="item.department === 'nodejs'"> {{item.name}} </p>
      </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  computed:{
      employees(){
          return this.$store.state.names
      },
      editorEmployees(){
          return this.$store.getters.mydata
      }
  },
  methods:{
      addedS(){
          return this.$store.commit('added')
      },
      sub(){
          return this.$store.dispatch('sub')
      }
  }
}
</script>
