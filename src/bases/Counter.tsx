import { useState } from "react";

interface Props {
    //con esto hago que el inicialValue sea opcional
    initialValue?: number,
}

export const Counter = ({ initialValue = 0 }: Props) => {

    const [counter, setCounter] = useState(initialValue)

    const handleClick = ()=>{
        setCounter(prev => prev + 1)
    }

    return (
        <>
            <h1>Counter: { counter }</h1>

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}
