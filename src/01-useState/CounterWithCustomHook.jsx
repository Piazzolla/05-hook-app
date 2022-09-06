import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, increment, decrease, reset } = useCounter();

    return (
        <>
            <h1>Counter With Custom Hook: {counter}</h1>
            <hr />

            <button onClick={() => increment(2)} className="btn btn-primary">+2</button>
            <button onClick={reset} className="btn btn-primary">Reset</button>
            <button onClick={()  => decrease(2)} className="btn btn-primary">-2</button>
        </>
    )
}
