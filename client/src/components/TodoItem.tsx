import type { Todo } from "../typesData";
import { useMutation } from "@tanstack/react-query";
import { EditTodo } from "./EditTodo";
import { useState } from "react";

type TodoItemProps = {
    todo: Todo;
    className?: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, className }: TodoItemProps) => {
    const [isTodoEditing, setIsTodoEditing] = useState<boolean>(false);
  
    const onEditHandler = () => {
      setIsTodoEditing(!isTodoEditing);
    }

    const mutationDelete = useMutation<boolean, Error, string | number, void>({ mutationKey: ['deleteTodo'] });
    const mutationCompleted = useMutation<any, Error, Todo, void>({ mutationKey: ['setTodoCompleted'] });

    const classes = className ? className : "";

    return (
        <li className={`border-[1px] border-gray-300 ${classes}`}>
            <div className="flex flex-row p-4 gap-3 items-center">
                <input onChange={() => mutationCompleted.mutate(todo)} type="checkbox" name="check" defaultChecked={todo.completed} />
                <div className="overflow-hidden text-ellipsis">{todo.content}</div>
                <div className="flex flex-row gap-2 ms-auto">
                    <EditTodo todo={todo} onEditHandler={onEditHandler} status={isTodoEditing}/>
                    <button
                        className="bg-red-500 px-2 rounded-lg text-white"
                        onClick={() => mutationDelete.mutate(todo.id)}>
                            Delete
                    </button>
                </div>
            </div>
        </li>
    )
}