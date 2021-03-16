<template>
  <div class="home">
      <h4>VUE JS</h4>
      <div v-for="item in employees" :key="item.id" >
          <p v-if="item.department === 'vuejs'"> {{item.name}} </p>
      </div>
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
      }
  }
}
</script>
