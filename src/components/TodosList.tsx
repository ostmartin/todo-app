import type { Todo } from "../App";
import { TodoItem } from "./TodoItem";

export type TodosListProps = {
    todos: Todo[];
}

export const TodosList: React.FC<TodosListProps> = (
    { todos } :
    { todos: Todo[] }
    ) => {

    return (
        <div>
            <ul>
                {
                    todos.map((item, index) => (
                        <TodoItem key={item.id} todo={item} className={index % 2 ? undefined : 'bg-yellow-50'}/>
                    ))
                }
            </ul>
        </div>
    )
}