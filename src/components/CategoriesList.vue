<template lang="pug">
.columns.categories
  CategoryCard(v-for="category in categories" :key="category.id"
    @destroyCard="destroyCard" :category="category")
  .column.my-2.col-md-12.col-xs-12.col-lg-6.col-4
    a.add-new-category.c-hand(@click="addCategory")
      i.icon.icon-plus     
</template>

<script>
import CategoryCard from "./CategoryCard.vue";

export default {
  data() {
    return {
      categories: this.defaultCategories
    };
  },
  props: {
    defaultCategories: {
      type: Array,
      default: () => [
        {
          name: "Testing Pyramid",
          id: 0,
          score: 0,
          statements: [
            { id: 0, name: "~10% E2E tests" },
            { id: 1, name: "~30% Snapshots tests" },
            { id: 2, name: "~60% Unit tests" }
          ]
        },
        {
          name: "Testing Methodology",
          id: 0,
          score: 0,
          statements: [
            { id: 11, name: "Decide the components I need" },
            { id: 12, name: "Write unit tests and source code" },
            { id: 13, name: "Style the components" },
            { id: 14, name: "Add snapshot tests" },
            { id: 15, name: "Test the code manually" },
            { id: 16, name: "Write an end-to-end test" }
          ]
        },
        {
          name: "SOLID",
          id: 3,
          score: 0,
          statements: [
            { id: 21, name: "Single responsibility" },
            { id: 22, name: "Open/closed" },
            { id: 23, name: "Liskov substitution" },
            { id: 24, name: "Interface segregation" },
            { id: 25, name: "Dependency inversion" }
          ]
        }
      ]
    }
  },
  computed: {
    categoriesLength() {
      return this.categories.length + 1;
    }
  },
  methods: {
    destroyCard(id) {
      this.categories = this.categories.filter(cat => cat.id !== id);
    },
    newId() {
      return new Date().getTime();
    },
    addCategory() {
      this.categories.push({
        id: this.newId(),
        name: `Category #${this.categoriesLength}`,
        score: 0,
        statements: [{ name: "Example #1" }]
      });
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

  &:hover
    border-color: #302ecd
</style>
