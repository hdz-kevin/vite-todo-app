import './style.css'
import { App } from "./todos/app";
import todoStore from "./store/todo.store";

todoStore.initStore();

console.log(todoStore.getTodos(todoStore.Filters.All));
todoStore.addTodo("Buy a pillow");
console.log(todoStore.getTodos(todoStore.Filters.All));

App("#app");
