export type Todo = {
    id: number;
    content: string;
    checked: boolean;
}

export type TodosListProps = {
    todos: Todo[];
}