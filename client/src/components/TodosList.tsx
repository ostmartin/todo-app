import { useQuery } from "@tanstack/react-query";

import type { Todo } from "../typesData";
import { TodoItem } from "./TodoItem";

export const TodosList: React.FC = () => {

    const { data, error, isLoading } = useQuery({ queryKey: ['getAllTodos'] })
    
    if (isLoading) {
        return (
            <div>Loading data...</div>
        )
    }

    const renderTodos = () => {
        if (!error) {
            return (
                (!!data && Array.isArray(data) && data.length > 0) ?
                <ul>
                    {
                       data.map((item: Todo, index: number) => (
                                <TodoItem key={item.id} todo={item} className={index % 2 ? undefined : 'bg-yellow-50'}/>
                        ))
                    }
                </ul> : <div className="w-full text-center text-gray-500">Create new todo</div>
            )
        } else {
            
        }
    }

    

    return (
        <div>
            {renderTodos()}
        </div>
    )
}