import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./use-cases";
import { renderPendingCount } from "./use-cases/render-pending-count";

const Selectors = {
    TodoList: ".todo-list",
    NewTodoInput: "#new-todo-input",
    ClearCompleted: ".clear-completed",
    Filters: ".filters",
    SelectedFilter: ".selected",
    PendingCount: "#pending-count",
};

/**
 * 
 * @param {string} elementId 
 */
export const App = (elementId) => {
    const displayTodos = () => renderTodos(todoStore.getTodos(todoStore.getCurrentFilter()), Selectors.TodoList);

    const setPendingCount = () => renderPendingCount(Selectors.PendingCount);

    (() => {
        const app = document.createElement("div");
        app.innerHTML = html;
        document.querySelector(elementId).append(app);

        displayTodos();

        // Add "selected" class to anchor with data-filter = todoStore.getCurrentFilter()
        document.querySelector(`.filters a[data-filter=${todoStore.getCurrentFilter()}]`)
            .classList
            .add(Selectors.SelectedFilter);

        setPendingCount();
    })();

    // HTML references
    const newTodoInput = document.querySelector(Selectors.NewTodoInput),
        todoList = document.querySelector(Selectors.TodoList),
        clearCompletedBtn = document.querySelector(Selectors.ClearCompleted),
        filtersUl = document.querySelector(Selectors.Filters);

    // Listeners
    newTodoInput.addEventListener("keyup", (/** @type {KeyboardEvent} event */ event) => {
        if (event.key !== "Enter") return;
        if (newTodoInput.value.trim().length === 0) return;

        todoStore.addTodo(newTodoInput.value);
        displayTodos();
        newTodoInput.value = "";

        setPendingCount();
    });

    todoList.addEventListener("click", (event) => {
        const element = event.target;
        const todoId = element.closest("[data-id]").getAttribute("data-id");
        const isDestroyerBtn = element.classList.contains("destroy");

        isDestroyerBtn ? todoStore.deleteTodo(todoId) : todoStore.toggleTodoStatus(todoId);

        displayTodos();
        setPendingCount();
    });

    clearCompletedBtn.addEventListener("click", () => {
        todoStore.deletedCompleted();

        displayTodos();
    });

    filtersUl.addEventListener("click", (event) => {
        if (!(event.target instanceof HTMLAnchorElement)) return;

        filtersUl.querySelector(`a.${Selectors.SelectedFilter}`).classList.remove(Selectors.SelectedFilter);
        const a = event.target;
        a.classList.add(Selectors.SelectedFilter);

        try {
            todoStore.setFilter(todoStore.Filters[a.getAttribute("data-filter")]);
        } catch (err) {
            console.log(err);
        }

        displayTodos();
    });
};
