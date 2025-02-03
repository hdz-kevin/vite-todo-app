import './style.css'
import { App } from "./todos/app";
import todoStore from "./store/todo.store";

todoStore.initStore();

console.log(todoStore.getTodos(todoStore.Filters.All));
console.log(todoStore.getTodos(todoStore.Filters.All)[1].id);
todoStore.deleteTodo(todoStore.getTodos(todoStore.Filters.All)[1].id);
console.log(todoStore.getTodos(todoStore.Filters.All));
todoStore.deleteTodo("xd");

App("#app");
