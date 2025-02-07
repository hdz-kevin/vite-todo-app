import { v4 as uuidv4 } from "uuid";

export class Todo {
    /**
     * @param {string} description 
     */
    constructor(description) {
        /** @type {string} */
        this.id = uuidv4();

        /** @type {string} */
        this.description = description;

        /** @type {boolean} */
        this.done = false;

        /** @type {Date} */
        this.createdAt = new Date();
    }

    toggleStatus() {
        this.done = !this.done;
    }

    /**
     * Creates a new Todo instance from a plain object.
     * 
     * @param {{ id: string, description: string, done: boolean, createdAt: string | Date }} todo
     * @returns {Todo}
     */
    static fromLiteralObj(todo) {
        const { id, description, done, createdAt } = todo;
        const instance = new Todo(description);
        instance.id = id;
        instance.done = done;
        instance.createdAt = new Date(createdAt);

        return instance;
    }
}
