import type { Todo } from "../typesData";
import { MutationFunction } from "@tanstack/react-query";

const URL = 'http://localhost:3001/todos';

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
export const addNewTodo: MutationFunction<boolean, Todo> = async (variables) => {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(variables)
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
export const updateTodo: MutationFunction<boolean, Todo> = async (variables) => {
    try {
        const response = await fetch(`${URL}/${variables.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(variables),
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
export const deleteTodo: MutationFunction<boolean, string | number> = async (variables) => {
    try {
        const response = await fetch(`${URL}/${variables}`, {
        method: "DELETE",
    });

        if (!response.ok) {
            throw new Error(`Status ${response.status}: ${response.statusText}`);
        }

      return true;
    } catch (error) {
        console.log(error);
        throw new Error('There was an error while deleting the task. Try again later');
    }
};

//Mark a todo as completed and vice versa
export const setTodoCompleted: MutationFunction<boolean, Todo> = async (variables) => {
    try {
        const response = await fetch(`${URL}/${variables.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                ...variables,
                completed: !variables.completed
            }),
        });

        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error('There was an error while updating the task. Try again later');
    }
}