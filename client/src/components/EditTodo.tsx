import { useMutation } from "@tanstack/react-query";
import { Todo } from "../typesData";
import { useSubmit } from "../hooks/useSubmit";
import type { EditTodoProps, ModalWindowProps } from "../typesData";

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
                    <div className="absolute w-[400px] h-40 bg-white border-2 border-green-300 rounded-md left-1/2 -translate-x-1/2 top-20" >
                        <button className="absolute right-1 top-1 px-2 bg-red-300 rounded-full" onClick={closeModal}>X</button>
                        <form
                            onSubmit={onCloseModal}
                            className="flex flex-col justify-center items-center h-full gap-7">
                                <input name="content" type="text" defaultValue={todo.content} className="p-2 outline-none border-2 border-green-800 rounded-md focus:border-blue-500 focus:scale-105"/>
                                <button type="submit" className="bg-green-500 px-2 rounded-lg text-gray-700 hover:scale-110">Save</button>
                        </form>
                    </div>
                </div> : null}
        </>
    )
}