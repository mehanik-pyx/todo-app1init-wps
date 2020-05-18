const todos = {
  state: {
    todos: [],
    filter: 'All'
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, todoID) {
      state.todos = state.todos.filter(item => item.id !== todoID);
    },
    checkTodo(state, todo) {
      state.todos = state.todos.map(item => (item.id === todo.id ? todo : item));
    },
    toggleAllTodos(state, checked) {
      // console.log('before state', checked);
      // console.log('before state', state);
      state.todos.forEach(item => {
        // console.log(todo);
        // console.log(todo.checked);
        // console.log(checked);
        item.checked = checked;
        // todo.checked = checked;
      })
      // console.log('after state', checked);
    },
    filterTodos(state, filter) {
      state.filter = filter;
    },
    clearCompleted(state, completedTodos) {
      state.todos = state.todos.filter(el => !completedTodos.includes(el))
    },
    // testMutation(state, payload) {
    //   console.log('testMutation', payload);
    // },
  },
  actions: {
    // fetchItems(store) {
    //   store.commit('testMutation', 42);
    //   store.dispatch('anotherAction', 66);
    //   //??? как передать "66" в anotherAction ???
    //   console.log(store);
    // },
    // anotherAction(store) {
    //   console.log('another action');
    // }
  },
  getters: {
    // todoByID:(state) => (id) => {
    // return state.todos.filter(item => item.id === id)
    // }
  },
}
export default todos;