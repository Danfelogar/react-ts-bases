import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const useCounter = ({maxCount = 10}) => {

    const [counter, setCounter] = useState(5);

    const elementeToAnimate = useRef<any>(null);
                    // tambien se le puede colocar como un <any>
    const tl = useRef( gsap.timeline() );

    const handleClick = ()=>{
        setCounter(prev => Math.min( prev + 1, maxCount));
    }

    useLayoutEffect(() => {

        if(!elementeToAnimate.current) return;

        tl.current.to( elementeToAnimate.current ,{ y: -10, duration: 0.2, ease: 'esae.out' } )
            .to( elementeToAnimate.current ,{ y: 0, duration: 1, ease: 'bounce.out' } )
            .pause()
            //para que la animacion no se dispare deinmediato
    }, [])

    useEffect(() => {
        // if( counter < maxCount ) return;
        tl.current.play(0);
    }, [counter])

    return {
        counter,
        elementeToAnimate,
        handleClick,
    }

}