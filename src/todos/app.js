// @ts-ignore
import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./use-cases";

const ElementSelectors = {
    TodoList: ".todo-list",
    NewTodoInput: "#new-todo-input",
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

    // HTML element references
    /** @type {HTMLInputElement} */
    const newTodoInput = document.querySelector(ElementSelectors.NewTodoInput);
    const todoList = document.querySelector(ElementSelectors.TodoList);

    // Listeners
    newTodoInput.addEventListener("keyup", (/** @type {KeyboardEvent} event */ event) => {
        if (event.key !== "Enter") return;
        if (newTodoInput.value.trim().length === 0) return;

        todoStore.addTodo(newTodoInput.value);
        displayTodos();
        newTodoInput.value = "";
    });

    todoList.addEventListener("click", (event) => {
        // @ts-ignore
        todoStore.toggleTodoStatus(event.target.closest('[data-id]').getAttribute("data-id"));
        displayTodos();
    });
};
