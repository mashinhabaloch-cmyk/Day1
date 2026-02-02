import { useCalculateContext } from "../context/CalculateContext";

const Balance = () => {
  const { balance } = useCalculateContext();

  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹{balance.toFixed(2)}</h1>
    </>
  );
};

export default Balance;
