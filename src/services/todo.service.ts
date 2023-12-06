import type { Todo } from "../typesData";

const URL = 'http://localhost:3000/todos';

//Get an up-to-date list of tasks
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

//Create new todo
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

        return response.json();
    } catch (error) {
        console.log(error)
        throw new Error(
            'There was an error while creating a new task. Try again later'
        )
    }
}

//Edit an existing task
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

//Delete an existing task
export const deleteTodo = async (todoId: number) => {
    try {
        const response = await fetch(`${URL}/${todoId}`, {
        method: "DELETE",
    });

        if (!response.ok) {
            throw new Error(`Status ${response.status}: ${response.statusText}`);
        }

      return response.json();
    } catch (error) {
        console.log(error);
        throw new Error('There was an error while deleting the task. Try again later');
    }
};

export const setTodoCompeted = async (todo: Todo) => {
    try {
        const response = await fetch(`${URL}/${todo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                ...todo,
                completed: !todo.completed
            }),
        });

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error('There was an error while updating the task. Try again later');
    }
}