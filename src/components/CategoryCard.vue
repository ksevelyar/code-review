<template lang="pug">
.column.my-2.col-md-12.col-xs-12.col-lg-6.col-4
  .card.category-card
    .card-header
      .card-title 
        .columns
          .column.col-2
            span.chip
              figure.avatar.avatar-sm(:data-initial="icon")
              | {{ category.score }}
          .column.col-8.text-center  
            mark {{ category.name }}
          .column.col-2
            a.float-right    
              i.icon.icon-delete  
    .card-body
      .columns
        .column.col-auto
          .vertical-slider-wrapper 
            input.slider.vertical-slider(
              v-model.number="category.score" type="range" step="10" min="0" max="100")
        .column 
          CategoryStatement(v-for="statement in category.statements" :statement="statement")
          .add-new-statement
            a.icon.icon-plus.float-right
</template>

<script>
import CategoryStatement from "./CategoryStatement.vue";
export default {
  components: {
    CategoryStatement
  },
  name: "CategoryCard",
  data: () => ({
    icons: {
      0: "💀",
      100: "🤖"
    }
  }),
  props: {
    category: {
      type: Object,
      default: () => ({
        name: "Hello World",
        statements: [],
        score: 0
      })
    }
  },
  computed: {
    icon() {
      return this.icons[this.category.score] || "💩";
    }
  }
};
</script>

<style lang="sass">
.category-card
  height: 100%
  min-height: 235px
  border-radius: 10px !important

.vertical-slider-wrapper
  width: 10px
  height: 1px
  padding: 0

.vertical-slider
  width: 150px !important
  height: 28px !important
  transform-origin: 75px 75px
  transform: rotate(-90deg)

  &:focus
    box-shadow: none !important

  &::-moz-focus-outer
    border: 0

.add-new-statement
  margin-top: 1.2rem
</style>
