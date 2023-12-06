export type Todo = {
    id: string | number;
    content: string;
    checked: boolean;
}

export type TodosListProps = {
    todos: Todo[];
}