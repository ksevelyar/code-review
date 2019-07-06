<template lang="pug">
.statement.columns
  .column
    .statement__text
      i.icon.icon-flag
      |&nbsp;  
      | {{ statement.name }}
  .column.col-auto.text-right 
    a.icon.icon-delete(href='#delete')
</template>

<script>
export default {
  name: "CategoryCardStatement",
  props: {
    statement: {
      type: Object,
      default: () => ({
        name: "Statement"
      })
    }
  }
};
</script>

<style lang="sass">
.statement__text
  padding-left: 20px
</style>
