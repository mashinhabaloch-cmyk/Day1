import useGlobalContext from "../hooks/useGlobalContext";

const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalContext();

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        ₹{Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;
