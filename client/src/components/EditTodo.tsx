import { useMutation } from "@tanstack/react-query";
import { Todo } from "../typesData";
import { useSubmit } from "../hooks/useSubmit";

type EditTodoProps ={
    todo: Todo,
    onEditHandler: () => void,
    status: boolean
}

type ModalWindowProps = {
    isOpen: boolean;
    todo: Todo;
    closeModal: () => void
}

export const EditTodo = ({todo, onEditHandler, status}: EditTodoProps) => {
    return (
        <>
        <button 
            onClick={onEditHandler}
            className="bg-green-500 px-2 rounded-lg text-gray-700">
                Edit
        </button>
        <ModalWindow isOpen={status} todo={todo} closeModal={onEditHandler}/>
        </>
    )
}

const ModalWindow = ({ isOpen, todo, closeModal }: ModalWindowProps) => {
    const { mutate } = useMutation<boolean, Error, Todo, void>({ mutationKey: ['updateTodo'] });
    const { onSubmitHandler } = useSubmit();

    const onCloseModal = (event: React.FormEvent<HTMLFormElement>) => {
        onSubmitHandler({ event, mutate, action: 'edit', currentData: todo });
        closeModal();
    }

    return (
        <>
            {isOpen ? 
                <div className="absolute w-screen h-screen top-0 left-0">
                    <div className="absolute w-[400px] h-40 bg-slate-400 border-2 border-green-300 rounded-md left-1/2 -translate-x-1/2 top-20" >
                        <form
                            onSubmit={onCloseModal}
                            className="flex flex-col justify-center items-center h-full gap-7">
                                <input name="content" type="text" defaultValue={todo.content} className="p-2 outline-none focus:border-4 border-green-900 rounded-md"/>
                                <button type="submit" className="bg-green-500 px-2 rounded-lg text-gray-700">Save</button>
                        </form>
                    </div>
                </div> : null}
        </>
    )
}