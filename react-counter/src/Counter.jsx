import React,{useState} from "react";
export default function Counter(){
    useState
    const [count, setCount] = useState(0)


    const increment=() => {
        // setCount(count=>count+1)
        setCount(c=>c+1)
    }

    const reset=() => {
        setCount(c=>c=0)
    }

    const decrement=() => {
        setCount(c=>c-1)
    }



    return(
        <>
        <div className="container">
            <p className="counter-container">
                Counter: <br />
                {count}
            </p>
             

            <button className="button-container-decrement" onClick={decrement}>Decrement</button>
            <button className="button-container-reset" onClick={reset}>Reset</button>
            <button className="button-container-increment" onClick={increment}>Increment</button>
        </div>
        </>
    )
}