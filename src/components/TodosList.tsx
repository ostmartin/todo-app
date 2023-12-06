import { useQuery } from "@tanstack/react-query";

import type { Todo, TodosListProps } from "../typesData";
import { TodoItem } from "./TodoItem";
import { getTodos } from "../utils";

export const TodosList: React.FC<TodosListProps> = () => {

    const {data, error, isLoading} = useQuery({
        queryKey: ['todos'],
        queryFn: () => 
            getTodos()
            .then(r => r)
    })
    
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
                        data.map((item: Todo, index: number) => (
                            <TodoItem key={item.id} todo={item} className={index % 2 ? undefined : 'bg-yellow-50'}/>
                        )) :
                        <div>
                            {error.message}
                        </div>
                }
            </ul>
        </div>
    )
}