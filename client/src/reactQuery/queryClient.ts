import { QueryClient } from "@tanstack/react-query";
import { addNewTodo, getAllTodos, deleteTodo, setTodoCompleted, updateTodo } from "../services/todo.service";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchInterval: 1000*60*15
        }
    }
});

/*------------------------------------------------------*/
//Defaults for queries and mutations

queryClient.setQueryDefaults(['getAllTodos'], {
    queryFn: getAllTodos
})

queryClient.setMutationDefaults(['addTodo'], {
    mutationFn: addNewTodo,
    onSuccess: () => queryClient.invalidateQueries({
        queryKey: ['getAllTodos']
    })
})

queryClient.setMutationDefaults(['deleteTodo'], {
    mutationFn: deleteTodo,
    onSuccess: () => queryClient.invalidateQueries({
        queryKey: ['getAllTodos']
    })
})

queryClient.setMutationDefaults(['setTodoCompleted'], {
    mutationFn: setTodoCompleted,
    onSuccess: () => queryClient.invalidateQueries({
        queryKey: ['getAllTodos']
    })
})

queryClient.setMutationDefaults(['updateTodo'], {
    mutationFn: updateTodo,
    onSuccess: () => queryClient.invalidateQueries({
        queryKey: ['getAllTodos']
    })
})

/*------------------------------------------------------*/

export {
    queryClient
}