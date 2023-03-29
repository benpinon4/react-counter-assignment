import React, { useEffect } from "react";
import { useState, useReducer } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [star, setStar] = useState([]);

  useEffect(() => {
    switch (count) {
      case 0:
        setStar([]);
        break;
      case 1:
        setStar(["*"]);
        break;
      case 2:
        setStar(["*", "*"]);
        break;
      case 3:
        setStar(["*", "*", "*"]);
        break;
      case 4:
        setStar(["*", "*", "*", "*"]);
        break;
      case 5:
        setStar(["*", "*", "*", "*", "*"]);
        break;
      default:
        break;
    }
  }, [count]);

  return (
    <>
      <div className="counterDiv">
        <button
          onClick={() => {
            if (count > 0 && count <= 5) {
              setCount(count - 1);
            }
          }}
        >
          {" "}
          subtract 1{" "}
        </button>
      
      <p>Count: {count}</p>
      <button
        onClick={() => {
          if (count >= 0 && count < 5) {
            setCount(count + 1);
          }
        }}
      >
        {" "}
        add 1{" "}
      </button>
      </div>
      <div className="starDiv">
        {star.map((element) => {
          return <div className="star">{element}</div>;
        })}
      </div>
    </>
  );
};

export default Counter;
