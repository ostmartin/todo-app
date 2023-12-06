import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../utils";

export const Header: React.FC = () => {
    /*
        Here I useQery as in the TodosList component,
        so that I don't need to feed the App props through the Content component,
        although it's also possible to do so

    */
    const { data } = useQuery({
        queryKey: ['todos'],
        queryFn: () => 
            getTodos()
            .then(r => r)
    })

    return (
        <div className="border-gray-300 border-[1px] px-4 py-2 bg-yellow-50">
            <h1>Todos ({`${data ? data.length : 0}`})</h1>
        </div>
    )
}