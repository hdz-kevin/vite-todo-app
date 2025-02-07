import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending',
};

const state = {
    todos: [],
    filter: Filters.All,
};

const initStore = () => {
    loadStore();

    console.log(state);
};

const loadStore = () => {
    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem("state") ?? "{}");
    
    state.todos = todos;
    state.filter = filter;
};

const persistState = () => {
    localStorage.setItem("state", JSON.stringify(state));
};

const getTodos = (filter = Filters.All) => {
    if (Filters[filter] === undefined)
        throw new Error(`"${filter}" is not a valid filter.`);

    const filterTodos = {
        [Filters.All]: [...state.todos],
        [Filters.Completed]: state.todos.filter(todo => todo.done),
        [Filters.Pending]: state.todos.filter(todo => !todo.done),
    };

                              // break the reference for each individual "todo".
    return filterTodos[filter];//.map(todo => ({ ...todo }));
};

/**
 * 
 * @param {string} description Todo descriptions
 */
const addTodo = (description) => {
    if (description.length == 0)
        throw new Error("Description is required.");

    state.todos.push(new Todo(description));

    persistState();
};

/**
 * @param {string} todoId
 */
const toggleTodoStatus = (todoId) => {
    // Gets all todo ids and check if `todoId` is among them.
    if (!state.todos.map(todo => todo.id).includes(todoId))
        throw new Error(`There is no task with id '${todoId}'`);
    
    for (const todo of state.todos) {
        if (todo.id === todoId) {
            todo.toggleStatus();
            break;
        }
    }

    persistState();
};

/**
 * 
 * @param {string} todoId
 */
const deleteTodo = (todoId) => {
    if (!state.todos.map(todo => todo.id).includes(todoId))
        throw new Error(`There is no task with id '${todoId}'`);

    state.todos = state.todos.filter(todo => todo.id !== todoId);

    persistState();
};

/**
 * Delete all completed `todo` objects.
 */
const deletedCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);

    persistState();
}

/**
 * @param {string} filter Posible values: [Filters.All | FIlters.Completed | Filters.Pending]
 */
const setFilter = (filter = Filters.All) => {
    if (Filters[filter] === undefined)
        throw new Error(`"${filter}" is not a valid filter.`);

    state.filter = filter;

    persistState();
};

const getCurrentFilter = () => state.filter;

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
