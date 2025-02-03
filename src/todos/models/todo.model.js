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
}
