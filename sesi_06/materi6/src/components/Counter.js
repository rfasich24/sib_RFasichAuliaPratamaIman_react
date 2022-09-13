import { useState } from "react";

function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);

    return (
        <>
            Count : {Count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                +
            </button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>
                -
            </button>
        </>
    );
}

export default Counter;
