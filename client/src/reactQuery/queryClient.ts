import { QueryClient } from "@tanstack/react-query";
import { addNewTodo, getAllTodos, deleteTodo, setTodoCompleted, updateTodo } from "../services/todo.service";

const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchInterval: 1000*60*15,
            queryKey: ['getAllTodos'],
            queryFn: getAllTodos
        },
        mutations: {
            onSuccess: () => queryClient.invalidateQueries({
                queryKey: ['getAllTodos']
            }),
            
        }
    }
});

/*------------------------------------------------------*/
//Defaults for queries and mutations

queryClient.setMutationDefaults(['addTodo'], {
    mutationFn: addNewTodo
})

queryClient.setMutationDefaults(['deleteTodo'], {
    mutationFn: deleteTodo
})

queryClient.setMutationDefaults(['setTodoCompleted'], {
    mutationFn: setTodoCompleted
})

queryClient.setMutationDefaults(['updateTodo'], {
    mutationFn: updateTodo
})

/*------------------------------------------------------*/

export {
    queryClient
}