import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./use-cases";

const Selectors = {
    TodoList: ".todo-list",
    NewTodoInput: "#new-todo-input",
    ClearCompleted: ".clear-completed",
};

/**
 * 
 * @param {string} elementId 
 */
export const App = (elementId) => {
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(todos, Selectors.TodoList);
    };

    (() => {
        const app = document.createElement("div");
        app.innerHTML = html;
        document.querySelector(elementId).append(app);

        displayTodos();
    })();

    // HTML element references
    const newTodoInput = document.querySelector(Selectors.NewTodoInput),
          todoList = document.querySelector(Selectors.TodoList),
          clearCompletedBtn = document.querySelector(Selectors.ClearCompleted);

    // Listeners
    newTodoInput.addEventListener("keyup", (/** @type {KeyboardEvent} event */ event) => {
        if (event.key !== "Enter") return;
        if (newTodoInput.value.trim().length === 0) return;

        todoStore.addTodo(newTodoInput.value);
        displayTodos();
        newTodoInput.value = "";
    });

    todoList.addEventListener("click", (event) => {
        const element = event.target;
        const todoId = element.closest("[data-id]").getAttribute("data-id");
        const isDestroyerBtn = element.classList.contains("destroy");

        isDestroyerBtn ? todoStore.deleteTodo(todoId) : todoStore.toggleTodoStatus(todoId);

        displayTodos();
    });

    clearCompletedBtn.addEventListener("click", () => {
        todoStore.deletedCompleted();

        displayTodos();
    });
};
