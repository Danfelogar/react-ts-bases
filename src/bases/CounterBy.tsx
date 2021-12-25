import { useState } from "react";

interface Props {
    //con esto hago que el inicialValue sea opcional
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {

    const [{counter, clicks}, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    });

    //Mi respuesta
    // const handleClick = (value: number)=>{
    //     setCounter({
    //         singleCounter: singleCounter + value,
    //         clicks: clicks + 1,
    //     })
    // }

    const handleClick = (value: number)=>{
        setCounterState(({counter,clicks}) =>({
            counter: counter + value,
            clicks: clicks + 1,
        }));
    }

    return (
        <>
            <h1>CounterBy: { counter }</h1>
            <h1>Clicks: { clicks }</h1>

            <button onClick={ () => handleClick(1) }>
                +1
            </button>
            <button onClick={ () => handleClick(5) }>
                +5
            </button>
        </>
    )
}
