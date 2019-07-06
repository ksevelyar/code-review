<template lang="pug">
#app.container.grid-xl
  CategoriesList
</template>

<script>
import CategoriesList from "./components/CategoriesList.vue";

export default {
  name: "app",
  components: {
    CategoriesList
  }
};
</script>

<style lang="sass">
@import "./node_modules/spectre.css/src/spectre"
@import "./node_modules/spectre.css/src/spectre-icons"
@import "./node_modules/spectre.css/src/spectre-exp"

#app
  display: flex
  align-items: center
  justify-content: center
  min-height: 100vh

body
  min-width: 300px
</style>
