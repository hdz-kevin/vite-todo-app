import todoStore from "../../store/todo.store";

/** @type {HTMLElement|null} */
let element = null;

export const renderPendingCount = (selector) => {
    if (!element)
        element = document.querySelector(selector);

    element.textContent = todoStore.getTodos(todoStore.Filters.Pending).length;
};
