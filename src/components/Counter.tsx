"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className="w-2xl mx-auto mt-20">
      <h2 className="5xl">{count}</h2>
      <div>
        <button
          className="bg-amber-400 w-10 h-10 text-center text-2xl"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          className="bg-green-400 w-20 h-10 text-center text-2xl"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="bg-red-400 w-10 h-10 text-center text-2xl"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
