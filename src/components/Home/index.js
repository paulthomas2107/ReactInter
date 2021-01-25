import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const h1Ref = useRef();
  const [counter, setCounter] = useState(0);

  //setTimeout(() => {
   // console.log(h1Ref.current.innerHTML);
  //}, 10);

  useEffect(() => {
    console.log(h1Ref);
  }, []);

  return (
    <h1 ref={h1Ref} onClick={() => setCounter((counter) => counter + 1)}>
      Home {counter}. Go to <Link to="/about">About</Link>
    </h1>
  );
}
