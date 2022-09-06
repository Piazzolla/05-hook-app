import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {


    const { counter, increment, decrease, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //no puedo desestructurar de null porque da error, pero si de false aunque me asigna undefined a la variable
    const { author, quote} = !!data && data[0]; // null es falsy, !null es true, !!null entonces es false.
    //!!undefined es false
    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading ? <LoadingQuote />  : <Quote quote={ quote } author={ author }/> 
            }

            <button 
                className="btn btn-primary" 
                onClick={() => increment(1)}
                disabled={isLoading}>
                Next quote
            </button>

        </>
    )
}


//https://www.breakingbadapi.com/api/quotes/1