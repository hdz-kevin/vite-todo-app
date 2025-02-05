// @ts-ignore
import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./use-cases";

const ElementSelectors = {
    TodoList: ".todo-list",
};

/**
 * 
 * @param {string} elementId 
 */
export const App = (elementId) => {
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(todos, ElementSelectors.TodoList);
    };

    (() => {
        const app = document.createElement("div");
        app.innerHTML = html;
        document.querySelector(elementId).append(app);

        displayTodos();
    })();
};
