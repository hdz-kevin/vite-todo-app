import './style.css'
import todoStore from "./store/todo.store";
import { App } from "./todos/app";

todoStore.initStore();

App("#app");
