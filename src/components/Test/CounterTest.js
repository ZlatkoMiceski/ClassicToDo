import { useEffect, useState } from "react";

function CounterTest() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            return setCounter(prevState => prevState + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    return <div>
        <h2>This is counter: {counter}</h2>
    </div>
}

export default CounterTest;