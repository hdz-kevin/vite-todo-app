import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo
 */
export const createTodoHTML = (todo) => {
    const innerHTML = `
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.done ? "checked" : ""}>
            <label>${todo.description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const li = document.createElement("li");
    li.setAttribute("data-id", todo.id);
    if (todo.done)
        li.classList.add("completed");
    li.innerHTML = innerHTML;

    return li;
};
