import { useCallback } from "react";
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);


    const incrementar = useCallback(
      (value) => {
        setCounter( (c) => c + value );
      },
      [],
    )



    
//    const incrementar = () => { 
    /*cada vez que se redibuja este componente la funcion va a estar
        en un espacio de memoria diferente, asi que si se la paso como argumento a ShowIncrement
        este se vuelve a dibujar aunque le ponga memo(fn,[])*/ 
 //       setCounter( counter + 1 );
//    }
    return (
        <>
            <h1>Callback Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ incrementar }/>
        </>

    )
}
