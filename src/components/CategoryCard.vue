<template lang="pug">
.column.my-2.col-md-12.col-xs-12.col-lg-6.col-4
  .card.category-card
    .card-header
      .card-title 
        .columns
          .column
            CategoryCardScore(:score='category.score')
          .column.col-6.text-center  
            mark.category-card__name {{ category.name }}
          .column.text-right
            a.category-card__delete
              i.icon.icon-delete(href='#delete')  
    .card-body
      .columns
        .column.col-auto
          .vertical-slider-wrapper 
            input.slider.vertical-slider(
              v-model.number="category.score" type="range" step="10" min="0" max="100")
        .column 
          CategoryCardStatement(v-for="statement in category.statements" :statement="statement")
          .add-new-statement
            a.icon.icon-plus.float-right(href="#add")
</template>

<script>
import CategoryCardStatement from "./CategoryCardStatement.vue";
import CategoryCardScore from "./CategoryCardScore.vue";
export default {
  components: {
    CategoryCardStatement,
    CategoryCardScore
  },
  name: "CategoryCard",
  props: {
    category: {
      type: Object,
      default: () => ({
        name: "Hello World",
        statements: []
      })
    }
  }
};
</script>

<style lang="sass">
.category-card
  height: 100%
  min-height: 240px
  border-radius: 10px !important

  &__chip, &__name, &__delete
    height: 1.6rem !important
    line-height: 1.6rem

.vertical-slider-wrapper
  width: 10px
  height: 1px
  padding: 0

.vertical-slider
  width: 120px !important
  transform-origin: 66px 60px
  transform: rotate(-90deg)

  &:focus
    box-shadow: none !important

  &::-moz-focus-outer
    border: 0

.add-new-statement
  margin-top: 1.2rem
</style>
