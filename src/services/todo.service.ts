import type { Todo } from "../typesData";

const URL = 'http://localhost:3000/todos';

export const getAllTodos = async () => {
    try {
        const response = await fetch(URL);

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
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        })

        if (!response.ok) {
            throw new Error(`Status ${response.status}: ${response.statusText}`)
        }

        return true;
    } catch (error) {
        console.log(error)
        throw new Error(
            'There was an error while creating a new task. Try again later'
        )
    }
}

export const updateTodo = async (updatedTodo: Todo) => {
    try {
        const response = await fetch(`${URL}/${updatedTodo.id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTodo),
        });
  
        if (!response.ok) {
            throw new Error(`Status ${response.status}: ${response.statusText}`);
        }
  
        return true;
    } catch (error) {
        console.log(error);
        throw new Error('There was an error while updating the task. Try again later');
    }
};

export const deleteTodo = async (todoId: string | number) => {
    try {
        const response = await fetch(`${URL}/${todoId}`, {
        method: "DELETE",
    });

        if (!response.ok) {
            throw new Error(`Status ${response.status}: ${response.statusText}`);
        }

      return true; // Возвращаем true, чтобы указать успешное удаление
    } catch (error) {
        console.log(error);
        throw new Error('There was an error while deleting the task. Try again later');
    }
};