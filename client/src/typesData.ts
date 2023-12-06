export type Todo = {
    id: number;
    content: string;
    completed: boolean;
}

export type TodosListProps = {
    todos: Todo[];
}