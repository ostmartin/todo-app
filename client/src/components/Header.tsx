import { useQuery } from "@tanstack/react-query";
import { getAllTodos } from "../services/todo.service";

export const Header: React.FC = () => {
    /*
        Here I useQuery as in the TodosList component,
        so that I don't need to feed the App props through the Content component,
        although it's also possible to do so

    */
    const { data } = useQuery({
        queryKey: ['getAllTodos'],
        queryFn: () => 
            getAllTodos()
            .then(r => r)
    })

    return (
        <div className="border-gray-300 border-[1px] px-4 py-2 bg-yellow-50">
            <h1>Todos ({`${data ? data.length : 0}`})</h1>
        </div>
    )
}