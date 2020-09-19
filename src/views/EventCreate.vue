<template>
  <div>
    <h1>Create an event, {{ userName }}</h1>
    <p>This event was created by {{ username }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    userName: state => state.user.name,
    userID: state => state.user.id,
    categories: state => state.categories
  })
}
</script>

<style scoped>

</style>