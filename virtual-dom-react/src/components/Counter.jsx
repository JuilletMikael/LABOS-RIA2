import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount((count) => count + 1)}>click</button>
        </div>
    );
}

export default Counter;
