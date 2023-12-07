import type { UseMutateFunction } from "@tanstack/react-query";

export type Todo = {
    id: number;
    content: string;
    completed: boolean;
}

export type TodosListProps = {
    todos: Todo[];
}

export type EditTodoProps ={
    todo: Todo,
    onEditHandler: () => void,
    status: boolean
}

export type ModalWindowProps = {
    isOpen: boolean;
    todo: Todo;
    closeModal: () => void
}


export type TodoItemProps = {
    todo: Todo;
    className?: string;
}

export type OnSubmitHandlerProps = {
    event: React.FormEvent<HTMLFormElement>,
    mutate: UseMutateFunction<boolean, Error, Todo, void>,
    action: 'edit' | 'addNew',
    currentData?: Todo
}

export type UseSubmit<T> = () => {
    onSubmitHandler: (props: T) => void;
};