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
    filterTodos(state, filter) {
      state.filter = filter;
    },
    testMutation(state, payload) {
      console.log('testMutation', payload);
    },
  },
  actions: {
    fetchItems(store) {
      store.commit('testMutation', 42);
      store.dispatch('anotherAction', 66);
      //??? как передать "66" в anotherAction ???
      console.log(store);
    },
    anotherAction(store) {
      console.log('another action');
    }
  },
  getters: {
    todoByID:(state) => (id) => {
    return state.todos.filter(item => item.id === id)
    }
  },
}
export default todos;