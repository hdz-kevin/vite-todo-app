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
    console.log("Itzel ♥");
};

export default { initStore };
