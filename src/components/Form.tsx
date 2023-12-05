import { useRef } from "react";

export const Form = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onSubmitHandler = () => {
        const text = inputRef.current?.value;
        console.log(text);
    }

    return (
        <div className="border-[1px] border-gray-300 w-full">
            <form className="rounded-sm overflow-hidden w-full flex">
                <input ref={inputRef} type="text" placeholder="Enter todo here" className="p-2 grow border-none"/>
                <button 
                    type="button"
                    onClick={onSubmitHandler}
                    className="bg-blue-600 text-white p-2"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}