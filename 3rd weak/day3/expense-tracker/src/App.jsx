import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalContext";
import { CalculateProvider } from "./context/CalculateContext";
import useGlobalContext from "./hooks/useGlobalContext";

const Content = () => {
  const { transactions } = useGlobalContext();

  return (
    <div className="card">
      <AddTransaction />

      {transactions.length > 0 && (
        <>
          <Balance />
          <IncomeExpense />
          <TransactionList />
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <GlobalProvider>
      <CalculateProvider>
        <Header />
        <div className="app-wrapper">
          <Content />
        </div>
      </CalculateProvider>
    </GlobalProvider>
  );
};

export default App;
