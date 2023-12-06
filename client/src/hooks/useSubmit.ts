import { useCallback } from "react";
import { Todo } from "../typesData";
import { UseMutateFunction } from "@tanstack/react-query";

type OnSubmitHandlerProps = {
    event: React.FormEvent<HTMLFormElement>,
    mutate: UseMutateFunction<boolean, Error, Todo, void>,
    action: 'edit' | 'addNew',
    currentData?: Todo
}

export const useSubmit = () => {
    const onSubmitHandler = useCallback(({event, mutate, action, currentData} : OnSubmitHandlerProps) => {
        event.preventDefault();
    
        const form = event.target as HTMLFormElement;
    
        const formData = new FormData(form);
    
        let todo;
    
        if (action === 'addNew') {
            todo = {
                id: Date.now(), //Date.now() because it is sufficient in this case
                content: Object.fromEntries(formData.entries()).content as string,
                completed: false
            }
        }
    
        if (action === 'edit') {
            todo = {
                ...currentData,
                content: Object.fromEntries(formData.entries()).content as string
            }
        }
    
        mutate(todo as Todo, {
            onSettled: () => form.reset()
        })
    }, []);

    return {
        onSubmitHandler
    }
}