import useGlobalContext from "../hooks/useGlobalContext";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const { transactions } = useGlobalContext();

  return (
    <>
      <h3 className="section-title">Expense Transactions</h3>

      <ul className="list">
        {transactions.map((txn) => (
          <TransactionItem key={txn.id} transaction={txn} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
