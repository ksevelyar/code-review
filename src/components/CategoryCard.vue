<template lang="pug">
.column.my-2.col-md-12.col-xs-12.col-lg-6.col-4
  .card.category-card
    .card-header
      .card-title 
        .columns
          .column
            CategoryCardScore(:score='category.score')
          .column.col-6.text-center  
            mark.category-card__name(v-show='!isNameEditable'
              @click="editName") {{ category.name }}
            input.form-input.input-sm.text-center(v-show='isNameEditable' ref="categoryName" 
              v-on:keyup.enter="saveName" @blur="saveName" v-model="category.name")  
          .column.text-right
            a.category-card__delete(@click.prevent='destroyCard' href='#delete')
              i.icon.icon-cross  
    .card-body
      .columns
        .column.col-auto
          .vertical-slider-wrapper 
            input.slider.vertical-slider(
              v-model.number="category.score" type="range" step="10" min="0" max="100")
        .column 
          CategoryCardStatement(v-for="statement in category.statements" 
            :key="statement.id" :statement="statement" @destroyStatement="destroyStatement")
          .add-new-statement
            a.icon.icon-plus.float-right(href="#add" @click.prevent="addStatement")
</template>

<script>
import CategoryCardStatement from "./CategoryCardStatement.vue";
import CategoryCardScore from "./CategoryCardScore.vue";

export default {
  name: "CategoryCard",
  data: () => ({
    isNameEditable: false
  }),
  components: {
    CategoryCardStatement,
    CategoryCardScore
  },
  methods: {
    newId() {
      return new Date().getTime();
    },
    addStatement() {
      this.category.statements.push({
        name: `Example #${this.statementsCount}`,
        id: this.newId()
      });
    },
    destroyCard() {
      this.$emit("destroyCard", this.category.id);
    },
    destroyStatement(id) {
      this.category.statements = this.category.statements.filter(
        statement => statement.id !== id
      );
    },
    editName() {
      this.isNameEditable = true;
      this.$nextTick(() => this.$refs.categoryName.focus());
    },
    saveName() {
      this.isNameEditable = false;
    }
  },
  computed: {
    statementsCount() {
      return this.category.statements.length + 1;
    }
  },
  props: {
    category: {
      type: Object,
      default: () => ({
        id: 0,
        name: "Best Practices Category",
        score: 0,
        statements: []
      })
    }
  }
};
</script>

<style lang="sass">
.category-card
  height: 100%
  min-height: 230px
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
  margin-top: 0.2rem
</style>
