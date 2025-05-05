
import { useState } from "react";

export default function home() {
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Play Score</p>
        <div>
          <div style={{display: "flex"}}>
            <p>John Cena</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>
      </div>
    );
  }