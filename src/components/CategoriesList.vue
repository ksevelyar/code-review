<template lang="pug">
.columns.categories
  CategoryCard(v-for="category in categories" :key="category.id" :category="category")
  .column.my-2.col-md-12.col-xs-12.col-lg-6.col-4
    .add-new-category
      a.icon.icon-plus(href="#add")     
</template>

<script>
import CategoryCard from "./CategoryCard.vue";

export default {
  props: {
    categories: {
      type: Array,
      default: () => [
        {
          name: "Auto Tests",
          id: 0,
          score: 0,
          statements: [
            { name: "Test Driven Development" },
            { name: "Factories" }
          ]
        },
        {
          name: "Static Analyzers",
          id: 1,
          score: 0,
          statements: [{ name: "Rubocop" }, { name: "ESLint" }]
        },
        {
          name: "Bundle Size",
          id: 2,
          score: 0,
          statements: [{ name: "ES Modules" }, { name: "Brotli, Zopfli" }]
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
    }
  },
  components: {
    CategoryCard
  }
};
</script>

<style lang="sass">
.add-new-category
  min-height: 235px
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  border: 1px solid #e1e1ff
  border-radius: 10px
</style>
