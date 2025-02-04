import './style.css'
import { App } from "./todos/app";
import todoStore from "./store/todo.store";

todoStore.initStore();

const todos = todoStore.getTodos();
let first = todos[0];
console.log(todos);
console.log("Before toggling status...");
console.log(first);
todoStore.toggleTodoStatus(first.id);
console.log("After toggling status...");
console.log(first);
todoStore.toggleTodoStatus("xd");

App("#app");
