import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 15;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);

    const counterElemet = useRef<HTMLHeadingElement>(null);

    // Mi respuesta
    // const handleClick = ()=>{
    //     if(MAXIMUN_COUNT === counter){
    //         return;
    //     }else{
    //         setCounter(prev => prev + 1);
    //     }
    // }

    const handleClick = ()=>{
        setCounter(prev => Math.min( prev + 1, MAXIMUN_COUNT));
    }

    useEffect(() => {
        if(counter < 10) return;

        console.log('%cSe llego al valor maximo', 'color:red; background-color:black;');


        // con timeline

        const tl = gsap.timeline();

        tl.to( counterElemet.current ,{ y: -10, duration: 0.2, ease: 'esae.out' } )
        tl.to( counterElemet.current ,{ y: 0, duration: 1, ease: 'bounce.out' } )

        // se coloca "counterElemet.current" para que apunte como tal a la referencia no al objeto
        // gsap.to( counterElemet.current ,{ y: -10, duration: 0.2, ease: 'esae.out' }).then( ()=>{
        //     gsap.to( counterElemet.current ,{ y: 0, duration: 1, ease: 'bounce.out' })
        // })

    }, [counter])

    return (
        <>
            <h1>CounterEffect:</h1>
            <h1 ref={ counterElemet } >{ counter }</h1>

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}
