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
        throw new Error('Unexpected error: ' + error)
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
        throw new Error(
            'Unexpected error: ' + error
        )
    }
}