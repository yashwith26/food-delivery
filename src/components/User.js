import { useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  // const [count2] = useState(0);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button
        style={{ padding: "7px", margin: "6px", borderRadius: "5px" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        style={{ padding: "7px", margin: "6px", borderRadius: "5px" }}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        style={{ padding: "7px", margin: "6px", borderRadius: "5px" }}
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      {/* <h1>Count2: {count2}</h1> */}
      <h2>Name: {name}</h2>
      <h3>Location: Bengaluru</h3>
      <h4>Contact: yashwithsalian1999@gmail.com</h4>
    </div>
  );
};

export default User;
