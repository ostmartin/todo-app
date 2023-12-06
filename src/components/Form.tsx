import { FormEvent, useCallback } from "react";
import { addNewTodo } from "../utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../typesData";

export const Form = () => {
    const queryClient = useQueryClient();

    /*
        Here I decided not to useState because there is no need to store the state and re-render the component
    */

    const {error, isError, isPending, mutate} = useMutation({
        mutationKey: ['todos'],
        mutationFn: (newTodo: Todo) => addNewTodo(newTodo),
        onSuccess: () => queryClient.invalidateQueries({
            queryKey: ["todos"]
        })
    })

    const onSubmitHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;

        const formData = new FormData(form);

        mutate({

            id: Date.now(), //Date.now() because it is sufficient in this case

            content: Object.fromEntries(formData.entries()).content as string,
            checked: false
        });

        form.reset();
    }, []);

    return (
        <div className=" w-full">
            <form onSubmit={(event) => onSubmitHandler(event)} className="rounded-sm overflow-hidden w-full flex border-[1px] border-gray-300">
                <input name="content" type="text" placeholder="Enter todo here" className="p-2 grow border-none" required/>
                <button 
                    type="submit"
                    className="bg-blue-600 text-white p-2"
                    disabled={isPending}
                >
                    {isPending ? "Please wait..." : "Submit"}
                </button>
            </form>
            {
                isError ? 
                <p className="text-center py-2 text-red-600">{error.message}</p> : null
            }
        </div>
    )
}