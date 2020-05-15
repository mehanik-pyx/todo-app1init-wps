<template lang="pug">
  div
    button.visible(
    v-for="filter in filters"
    type="button"
    :class="{active: currentFilter === filter}"
    @click="filterCurrentTodos(filter)"
    ) {{filter}}
    button(
      type="button"
      :class="{visible: completedTodos.length > 0}"
      @click="clearCompletedTodos"
      ) Clear completed
</template>
// ----------------script-------------------------------
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      filters: ["All", "Active", "Completed"],
      currentFilter: 'All'
    };
  },
  props: {
    completedTodos: Array
  },
  methods: {
    conlog() {
      console.log("click");
    },
    ...mapMutations(['filterTodos', 'clearCompleted']),
    filterCurrentTodos(filter) {
      this.currentFilter = filter;
      this.filterTodos(filter);
    },
    clearCompletedTodos(todos, completedTodos) {
      this.clearCompleted(this.completedTodos);
    },
  }
};
</script>
// ----------------style-------------------------------
<style lang="scss" scoped>
button {
  margin-right: 20px;
  background: transparent;
  font-weight: 300;
  color: inherit;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  &.active {
    border-color: rgba(175, 47, 47, 0.2);
  }
  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }
  &:last-child {
    margin-right: 0;
    float: right;
    visibility: hidden;
    border: none;
    &:hover {
      text-decoration: underline;
    }
  }
  &.visible {
    visibility: visible;
  }
}
</style>