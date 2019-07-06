<template lang="pug">
#app.container.grid-xl
  .columns.categories
    CategoryCard(v-for="category in categories" :key="category.id" :category="category")
    .column.my-2.col-md-12.col-xs-12.col-lg-6.col-4
      .add-new-category
        .btn
          a.icon.icon-plus     
</template>

<script>
import CategoryCard from "./components/CategoryCard.vue";

export default {
  name: "app",
  data: () => ({
    categories: [
      {
        name: "Auto Tests",
        id: 0,
        score: 0,
        statements: [{ name: "Test Driven Development" }, { name: "Factories" }]
      },
      {
        name: "Static Analyzers",
        id: 1,
        score: 0,
        statements: [{ name: "Rubocop" }, { name: "ESLint" }]
      },
      {
        name: "Perfomance",
        id: 2,
        score: 0,
        statements: [
          { name: "Avoid n^2 algorithms" },
          { name: "Use greedy algorihms" }
        ]
      },
      {
        name: "SOLID",
        id: 3,
        score: 0,
        statements: [
          { name: "Single responsibility" },
          { name: "Open/closed" },
          { name: "Liskov substitution" },
          { name: "Interface segregation" },
          { name: "Dependency inversion" }
        ]
      }
    ]
  }),
  components: {
    CategoryCard
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

.add-new-category
  min-height: 235px
  height: 100%
  display: flex
  justify-content: center
  align-items: center
</style>
