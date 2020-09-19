<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>This was an event created by {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <p>{{ getEventById(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState([
      'user',
      'categories'
    ])
  }
}
</script>

<style scoped>

</style>