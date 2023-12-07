import { useMutation } from "@tanstack/react-query";
import { useSubmit } from "../hooks/useSubmit";
import type { Todo } from "../typesData";

export const Form = () => {
    /*
        Here I decided not to useState because there is no need to store the state and re-render the component
    */

    const {error, isError, isPending, mutate} = useMutation<boolean, Error, Todo, void>({ mutationKey: ['addTodo'] });
    const { onSubmitHandler } = useSubmit();

    return (
        <div className=" w-full">
            <form 
                onSubmit={(event) => onSubmitHandler({ event, mutate, action: 'addNew' })} 
                className="rounded-sm overflow-hidden w-full flex border-[1px] border-gray-300">
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