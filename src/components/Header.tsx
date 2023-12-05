type HeaderProps = {
    count: number;
}

export const Header: React.FC<HeaderProps> = (
    { count } :
    { count: number }
) => {
    return (
        <div className="border-gray-300 border-[1px] px-4 py-2 bg-yellow-50">
            <h1>Todos ({`${count}`})</h1>
        </div>
    )
}