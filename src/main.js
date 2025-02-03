import './style.css'
import { App } from "./todos/app";
import todoStore from "./store/todo.store";

todoStore.initStore();

console.log(todoStore.getTodos(todoStore.Filters.All));
console.log(todoStore.getTodos(todoStore.Filters.Completed));
console.log(todoStore.getTodos(todoStore.Filters.Pending));
console.log(todoStore.getTodos("pepe"));

App("#app");
