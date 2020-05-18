<template lang="pug">
  div
    div.todo
      todo-input
      todo-list(
        v-if="todos.length > 0"
        :todos="filteredTodos"
        :completedTodos="completedTodos"
      )
    pre todos: {{todos.length}}
    //- pre todo: {{todo}}
    //- pre filter: {{filter}}
    //- pre state: {{state}}
    pre completedTodos: {{completedTodos.length}}
    pre todos.length - completedTodos.length: {{todos.length - completedTodos.length}}
    //- pre filteredTodos: {{filteredTodos}}
    //- pre todos - filteredTodos: {{todos - filteredTodos}}
    //- pre todos-completedTodos: {{todos.filter(el => !completedTodos.includes(el))}}
</template>
// ----------------script----------------------------------------
<script>
import todoInput from "./todoInput";
import todoList from "./todoList";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
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
    
    // this.fetchItems();
  },
  methods: {
    // ...mapActions(['fetchItems'])
  },
  computed: {
    // ...mapGetters(['todoByID']),
    ...mapState({
      todos: state => state.todos.todos,
      filter: state => state.todos.filter,
      // state: state => state
    }),
    filteredTodos() {
      switch(this.filter) {
        case 'All' :
          return this.todos;
        case 'Active' :
          return this.todos.filter(item => item.checked === false);
        case 'Completed' :
          return this.todos.filter(item => item.checked);
      }
    },
    completedTodos(){
       return this.todos.filter(item => item.checked);
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

