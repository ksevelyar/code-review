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
          name: "Auto Tests",
          id: 0,
          score: 0,
          statements: [
            { id: 0, name: "Test Driven Development" },
            { id: 1, name: "Factories" }
          ]
        },
        {
          name: "SOLID",
          id: 3,
          score: 0,
          statements: [
            { id: 2, name: "Single responsibility" },
            { id: 3, name: "Open/closed" },
            { id: 4, name: "Liskov substitution" },
            { id: 5, name: "Interface segregation" },
            { id: 6, name: "Dependency inversion" }
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
