import { useQuery } from "@tanstack/react-query";

import type { Todo } from "../typesData";
import { TodoItem } from "./TodoItem";

export const TodosList: React.FC = () => {

    const { data, error, isLoading } = useQuery({ queryKey: ['todos'] })
    
    if (isLoading) {
        return (
            <div>Loading data...</div>
        )
    }

    return (
        <div>
            <ul>
                {
                    !error ?
                        (Array.isArray(data) ? data.map((item: Todo, index: number) => (
                            <TodoItem key={item.id} todo={item} className={index % 2 ? undefined : 'bg-yellow-50'}/>
                        )) : null) 
                        :   <div>
                                {error.message}
                            </div>
                }
            </ul>
        </div>
    )
}