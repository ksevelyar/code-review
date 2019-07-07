<template lang="pug">
.statement.columns
  .column
    .statement__text(v-show='!isNameEditable' @click="editName")
      i.icon.icon-flag
      |&nbsp;  
      | {{ statement.name }}
    .statement__input.has-icon-left(v-show='isNameEditable')  
      i.form-icon.icon.icon-flag.text-gray
      input.form-input.input-sm(ref="statementName" 
        v-on:keyup.enter="saveName" @blur="saveName" v-model="statement.name")
  .column.col-auto.text-right 
    a.icon.icon-delete(href='#delete' @click.prevent="destroyStatement")
</template>

<script>
export default {
  name: "CategoryCardStatement",
  data: () => ({
    isNameEditable: false
  }),
  props: {
    statement: {
      type: Object,
      default: () => ({
        name: "Statement"
      })
    }
  },
  methods: {
    destroyStatement() {
      this.$emit("destroyStatement", this.statement.id);
    },
    editName() {
      this.isNameEditable = true;
      this.$nextTick(() => this.$refs.statementName.focus());
    },
    saveName() {
      this.isNameEditable = false;
    }
  }
};
</script>

<style lang="sass">
.statement__text
  padding-left: 20px
  height: 28px

.statement__input
  margin-left: 20px
</style>
