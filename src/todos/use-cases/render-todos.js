import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./";

/** @type {HTMLElement | null} */
let todoListHTML = null;

/**
 * @param {Array<Todo>} todos "todo" objects to render.
 * @param {string} selector HTML element selector where todos will be rendered.
 */
export const renderTodos = (todos, selector) => {
    if (todoListHTML === null) todoListHTML = document.querySelector(selector);

    while (todoListHTML.firstChild) todoListHTML.removeChild(todoListHTML.firstChild);

    todos.forEach(todo => todoListHTML.appendChild(createTodoHTML(todo)));
};
