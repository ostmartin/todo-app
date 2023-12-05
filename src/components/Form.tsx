import { FormEvent, useCallback } from "react";
import { addNewTodo } from "../utils";
import { useMutation } from "@tanstack/react-query";
import { Todo } from "../typesData";

export const Form = () => {

    /*
        Here I decided not to useState because there is no need to store the state and re-render the component
    */

    const todosMutation = useMutation({
        mutationKey: ['todos'],
        mutationFn: (newTodo: Todo) => addNewTodo(newTodo)
    })

    const onSubmitHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;

        const formData = new FormData(form);

        todosMutation.mutate({
            id: Date.now(),
            content: Object.fromEntries(formData.entries()).content as string,
            checked: false
        });

        form.reset();
    }, []);

    return (
        <div className="border-[1px] border-gray-300 w-full">
            <form onSubmit={(event) => onSubmitHandler(event)} className="rounded-sm overflow-hidden w-full flex">
                <input name="content" type="text" placeholder="Enter todo here" className="p-2 grow border-none" required/>
                <button 
                    type="submit"
                    className="bg-blue-600 text-white p-2"
                    disabled={todosMutation.isPending}
                >
                    {todosMutation.isPending ? "Please wait..." : "Submit"}
                </button>
            </form>
        </div>
    )
}