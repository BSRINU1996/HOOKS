import React, { useState } from 'react';

 
const Counter = () => {
  const [count, setCounter] = useState(4);
 
  return (
    <>
      <button onClick={() => setCounter(count +2)}> Increment by 2</button>
      &nbsp;&nbsp;
      <button onClick={() => setCounter(count -2)}> Decrement by 2 </button>
      <h1>{count}</h1> 
    </>
  );
};
 
export default Counter;


