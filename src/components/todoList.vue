<template lang="pug">
  .todo-list
    input(
      type="checkbox"
      title="toggle-all"
      @change="toggleAll"
      ).toggle-all
    .content
      ul.list
        li.item(v-for="todo in todos")
          //- pre {{todos}}
          todo-list-item(
            :todo="todo"
          )
    .footer
      .footer-content
        .counter {{todos.length - completedTodos.length > 0 ? todos.length - completedTodos.length : 0}} items left to do
         //- это костыль, надо написать это нормально
        .filter
          todo-list-filter(:completedTodos="completedTodos")
</template>
// ----------------script-------------------------------
<script>
import { mapMutations } from "vuex";
import todoListFilter from "./todoListFilter";
import todoListItem from "./todoListItem";
export default {
  props: {
    todos: Array,
    completedTodos: Array
    
  },
  components: {
    todoListFilter,
    todoListItem
  },
  methods: {
    ...mapMutations(['toggleAllTodos', 'checkTodo']),
    toggleAll(e) {
      // console.log(e.target.value);
      // console.log('before', e.target.checked);
      this.toggleAllTodos(e.target.checked);
      // console.log('after', e.target.checked);
    },
  },
};
</script>
// ----------------style-------------------------------
<style lang="scss" scoped>
.todo-list {
  position: relative;
}
.toggle-all {
  position: absolute;
  top: -42px;
  left: 20px;
}
.list {
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}
.item {
  border-bottom: 1px solid #ededed;
  &:last-child {
    border-bottom: none;
  }
}
.footer {
  color: #777;
  padding: 10px 15px;
  text-align: center;
  position: relative;
  font-size: 14px;
  &:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
}
.footer-content {
  display: flex;
  align-items: center;
  position: relative;
}
.filter {
  flex: 1;
}
</style>