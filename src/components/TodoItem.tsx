import type { Todo } from "../typesData";
import { useMutation } from "@tanstack/react-query";

type TodoItemProps = {
    todo: Todo;
    className?: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, className }: { todo: Todo, className?: string }) => {

    const mutationDelete = useMutation<boolean, Error, string | number, void>({ mutationKey: ['deleteTodo'] })

    const classes = className ? className : "";

    return (
        <li className={`border-[1px] border-gray-300 ${classes}`}>
            <div className="flex flex-row p-4 gap-3 items-center">
                <input type="checkbox" name="check" defaultChecked={todo.checked} />
                <div className="overflow-hidden text-ellipsis">{todo.content}</div>
                <div className="flex flex-row gap-2 ms-auto">
                    <button 
                        className="bg-green-500 px-2 rounded-lg text-gray-700"
                        >Edit</button>
                    <button
                        className="bg-red-500 px-2 rounded-lg text-white"
                        onClick={() => mutationDelete.mutate(todo.id)}
                        >Delete</button>
                </div>
            </div>
        </li>
    )
}