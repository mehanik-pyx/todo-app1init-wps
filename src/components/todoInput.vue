<template lang="pug">
  .todo-input
    div.error {{validation.firstError('todo.name')}}
    input(
      type="text",
      placeholder="Todo Name",
      autofocus
      v-model="todo.name"
      @keydown.enter="addTodo"
    ).input
</template>
// ----------------script-------------------------------
<script>
import { Validator } from "simple-vue-validator";
let uniqId = 0;
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "todo.name"(value) {
      return Validator.value(value).required("Поле не может быть пустым!");
    }
  },
  data() {
    return {
      todo: {
        id: 0,
        name: "",
        checked: false
      }
    };
  },
  methods: {
    addTodo() {
      uniqId++;
      this.todo.id = uniqId;
      this.$emit("addTodo", { ...this.todo });
      this.todo.name = "";
    }
  }
};
</script>
// ----------------style-------------------------------
<style lang="scss" scoped>
.input {
  font-size: 24px;
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.003);
  line-height: 1.4;
  outline: none;
  color: inherit;
  width: 100%;
}
</style>