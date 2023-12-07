import { useCallback } from "react";
import { Todo, OnSubmitHandlerProps, UseSubmit } from "../typesData";

export const useSubmit: UseSubmit<OnSubmitHandlerProps> = () => {
    const onSubmitHandler = useCallback(({event, mutate, action, currentData} : OnSubmitHandlerProps): void => {
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