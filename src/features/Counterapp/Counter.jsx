import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementbyamount, reset } from "./Counterslice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const resetall = () => {
    dispatch(reset());
  };
  const Handleinput = (event) =>{
    setAmount(Number(event.target.value)?Number(event.target.value):0)
  }
  const Addcost=() =>{
    setAmount(0)
    dispatch(incrementbyamount(amount))
  }
  return (
    <div>
      <input type="text" value={amount} placeholder="Enter Amount" onChange={Handleinput}/>
      <h2>{count}</h2>
      <br></br>
      <button className="btn btn-success" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
        -
      </button>
      <button className="btn btn-warning" onClick={resetall}>
        Reset
      </button>
      <button className="btn btn-secondary" onClick={Addcost}>
        Add amount
      </button>
    </div>
  );
};

export default Counter;
