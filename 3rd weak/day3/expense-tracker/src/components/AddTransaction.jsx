import { useState } from "react";
import useGlobalContext from "../hooks/useGlobalContext";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      id: Date.now(),
      text,
      amount: +amount
    });

    setText("");
    setAmount("");
  };

  return (
    <>
      <h3 className="section-title">Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter description"
          value={text}
          autoFocus
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter amount (+ income, - expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
