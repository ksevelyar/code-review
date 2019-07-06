<template lang="pug">
.statement.columns
  .column
    .statement__text {{ statement.name }}
  .column.col-auto.text-right 
    i.icon.icon-delete
</template>

<script>
export default {
  name: "CategoryStatement",
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
