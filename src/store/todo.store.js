import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending',
};

const state = {
    todos: [
        new Todo("Arm Wrestling workout"),
        new Todo("Talk with my friend"),
        new Todo("Take a bath"),
    ],
    filter: Filters.All,
};

const initStore = () => console.log(state);

const loadStore = () => { throw new Error("Not implemented."); };

const getTodos = (filter = Filters.All) => {
    if (Filters[filter] === undefined) {
        throw new Error(`"${filter}" is not a valid filter.`);
    }

    const filterTodos = {
        [Filters.All]: [...state.todos],
        [Filters.Completed]: state.todos.filter(todo => todo.done),
        [Filters.Pending]: state.todos.filter(todo => !todo.done),
    };

                              // break the reference for each individual "todo".
    return filterTodos[filter].map(todo => ({ ...todo }));
};

/**
 * 
 * @param {string} description Todo descriptions
 */
const addTodo = (description) => {
    if (description.length == 0) {
        throw new Error("Description is required.");
    }
    
    state.todos.push(new Todo(description));
};

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
    Filters,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodoStatus,
};
