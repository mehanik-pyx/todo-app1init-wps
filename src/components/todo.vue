<template lang="pug">
  div
    div.todo
      todo-input
      todo-list(
        v-if="todos.length > 0"
        :todos="filteredTodos"
      )
    pre {{todos}}
    pre {{filter}}
</template>
// ----------------script----------------------------------------
<script>
import todoInput from "./todoInput";
import todoList from "./todoList";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      // todos: [],
      // filter: 'all'
    };
  },
  components: {
    todoInput,
    todoList
  },
  mounted() {
    // setTimeout(() => {
    //   console.log(this.todoByID(3));
    // }, 6000);
    
    this.fetchItems();
  },
  methods: {
    ...mapActions(['fetchItems'])
  },
  computed: {
    ...mapState({
      todos: state => state.todos.todos,
      filter: state => state.todos.filter
    }),
    ...mapGetters(['todoByID']),
    filteredTodos() {
      switch(this.filter) {
        case 'all' :
          return this.todos;
        case 'active' :
          return this.todos.filter(item => item.checked === false);
        case 'completed' :
          return this.todos.filter(item => item.checked);
      }
    }
  },
};
</script>
// ----------------style----------------------------------------------
<style lang="scss" scoped>
.todo {
  margin-top: 40px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  color: #4d4d4d;
}
</style>

