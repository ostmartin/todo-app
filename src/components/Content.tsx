import { TodosList } from "./TodosList";
import { Form } from "./Form";
import type { TodosListProps } from "./TodosList";

export const Content: React.FC<TodosListProps> = ({todos}) => {
    return (
        <div className="border-[1px] border-gray-300 p-4 flex flex-col gap-6">
            <Form/>
            <TodosList todos={todos}/>
        </div>
    )
}