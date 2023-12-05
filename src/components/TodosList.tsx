import { useQuery } from "@tanstack/react-query";

import type { Todo, TodosListProps } from "../typesData";
import { TodoItem } from "./TodoItem";
import { getTodos } from "../utils";
import { useEffect } from "react";

export const TodosList: React.FC<TodosListProps> = () => {

    const {data, error, isLoading} = useQuery({
        queryKey: ['todos'],
        queryFn: () => 
            getTodos()
            .then(r => r),
        refetchOnWindowFocus: true
    })

    useEffect(() => {}, [data])
    
    if (isLoading) {
        return (
            <div>Loading data...</div>
        )
    }

    if (error) {
        <div>
            Something went wrong: {error.message}
        </div>
    }

    return (
        <div>
            <ul>
                {
                    data.map((item: Todo, index: number) => (
                        <TodoItem key={item.id} todo={item} className={index % 2 ? undefined : 'bg-yellow-50'}/>
                    ))
                }
            </ul>
        </div>
    )
}