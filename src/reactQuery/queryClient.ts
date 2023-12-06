import { QueryClient } from "@tanstack/react-query";
import { addNewTodo, getAllTodos, deleteTodo } from "../services/todo.service";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchInterval: 1000*60*15
        }
    }
});

//Defaults for queries and mutations

queryClient.setQueryDefaults(['todos'], {
    queryFn: getAllTodos
})

queryClient.setMutationDefaults(['addTodo'], {
    mutationFn: addNewTodo,
    onSuccess: () => queryClient.invalidateQueries({
        queryKey: ["todos"]
    })
})

queryClient.setMutationDefaults(['deleteTodo'], {
    mutationFn: deleteTodo,
    onSuccess: () => queryClient.invalidateQueries({
        queryKey: ["todos"]
    })
})

export {
    queryClient
}