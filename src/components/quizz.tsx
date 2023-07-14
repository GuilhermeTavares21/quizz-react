type Props = {
    key: number;
    answer: string;
    isCorrect: boolean;
    onClick: () => void;
    className?: string;
}

export const Question = ({ key, answer, onClick, className }: Props) => {

    return (
        <div onClick={onClick} className= {`hover:opacity-80 cursor-pointer p-2 md:p-3 w-[93%] bg-blue-200 ml-3 my-2 rounded-md border-black border-[1px] ${className}` } key= {key}>{answer}</div>
    )
}
