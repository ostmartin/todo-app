import { TodosList } from "./TodosList";
import { Form } from "./Form";

export const Content: React.FC = () => {
    return (
        <div className="border-[1px] border-gray-300 p-4 flex flex-col gap-6">
            <Form/>
            <TodosList/>
        </div>
    )
}