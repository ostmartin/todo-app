import express from 'express';
import cors from 'cors';
import { addNewTodo, deleteTodo, getAllTodos, updateTodo } from './api/todosApi.js';

const PORT = process.env.PORT || 3001;
const server = express();

server.use(cors());
server.use(express.json());

server.listen(PORT, () => {
    console.log('Listening port: ' + PORT);
})

server.get('/todos', getAllTodos);
server.post('/todos', addNewTodo);
server.put('/todos/:id', updateTodo);
server.delete('/todos/:id', deleteTodo);