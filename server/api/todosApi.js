import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dbPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../db', 'todos.json');

export const getAllTodos = async (req, res) => {
    try {
        const rawData = await fs.readFile(dbPath, 'utf-8');
        const todos = JSON.parse(rawData).todos;
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Faild to get todos list, server-side');
    }
}

export const addNewTodo = async (req, res) => {
    try {
        const rawData = await fs.readFile(dbPath, 'utf-8');
        const data = JSON.parse(rawData);

        const newTodo = req.body;
        data.todos.push(newTodo);

        await fs.writeFile(dbPath, JSON.stringify(data));

        res.json(newTodo);
    } catch (error) {
        console.log(error);
        res.status(500).send('Fault during todo creation, server-side');
    }
}

export const updateTodo = async (req, res) => {
    try {
        const rawData = await fs.readFile(dbPath, 'utf-8');
        const data = JSON.parse(rawData);

        const todoId = req.params.id;
        const updatedTodo = req.body;

        const existingTodoIndex = data.todos.findIndex(todo => todo.id == todoId);

        if (existingTodoIndex !== -1) {
            data.todos[existingTodoIndex] = updatedTodo;

            await fs.writeFile(dbPath, JSON.stringify(data));

            res.json(updatedTodo);
        } else {
            res.status(404).send('Todo not found');
        }

    } catch (error) {
        console.error(error);
        res.status(500).send('Fault during todo updating, server-side');
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const rawData = await fs.readFile(dbPath, 'utf-8');
        const data = JSON.parse(rawData);

        const todoId = req.params.id;
        
        data.todos = data.todos.filter(todo => todo.id != todoId);
        console.log(data)

        await fs.writeFile(dbPath, JSON.stringify(data));

        res.status(204).send('Todo successfully deleted');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to delete todo');
    }
}