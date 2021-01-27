import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const h1Ref = useRef();
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log(h1Ref);
  }, []);

  return (
    <div ref={h1Ref}>
      <h1>{counter}</h1>
      <h1>{counter2}</h1>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Counter 1
      </button>
      <button onClick={() => setCounter2((counter2) => counter2 + 1)}>
        Counter 2
      </button>
    </div>
  );
}
