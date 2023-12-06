import type { Todo } from "../typesData";

export const getTodos = async () => {
    try {
        const response = await fetch('http://localhost:3000/todos');

        if (!response.ok) {
            throw new Error(
                `Status ${response.status}: ${response.statusText}`
            )
        }

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error('There was an error while retrieving the task list. Try again later');
    }
}

export const addNewTodo = async (newTodo: Todo) => {
    try {
        const response = await fetch('http://localhost:3000/todos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        })

        if (!response.ok) {
            throw new Error(`Status ${response.status}: ${response.statusText}`)
        }

        return response.json();
    } catch (error) {
        console.log(error)
        throw new Error(
            'There was an error while creating a new task. Try again later'
        )
    }
}