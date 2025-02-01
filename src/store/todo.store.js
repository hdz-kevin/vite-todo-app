import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending',
};

const state = {
    todos: [
        new Todo("Arm Wrestling workout"),
        new Todo("Talk with my friend"),
        new Todo("Take a bath"),
    ],
    filter: Filters.All,
};

const initStore = () => {
    console.log(state);
};

const loadStore = () => { throw new Error("Not implemented"); };

const getTodos = (filter = Filters.All) => { throw new Error("Not implemented") };

/**
 * 
 * @param {string} description Todo descriptions
 */
const addTodo = (description) => { throw new Error("Not implemented"); }

/**
 * 
 * @param {string} todoId
 */
const toggleTodoStatus = (todoId) => { throw new Error("Not implemented"); }

/**
 * 
 * @param {string} todoId
 */
const deleteTodo = (todoId) => { throw new Error("Not implemented"); }

/**
 * Delete all completed `todos` objects.
 */
const deletedCompleted = () => { throw new Error("Not implemented"); }

const setFilter = (filter = Filters.All) => { throw new Error("Not implemented"); };

const getCurrentFilter = () => { throw new Error("Not implemented"); };


export default {
    addTodo,
    deletedCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodoStatus,
};
