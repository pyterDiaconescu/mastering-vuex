<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'user',
    'categories'
  ])
}
</script>

<style scoped>

</style>