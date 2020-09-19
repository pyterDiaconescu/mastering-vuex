<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>This was an event created by {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapState([
      'user',
      'categories'
    ])
  }
}
</script>

<style scoped>

</style>