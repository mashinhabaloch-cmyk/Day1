import { createContext, useContext } from "react";
import useGlobalContext from "../hooks/useGlobalContext";

const CalculateContext = createContext();

export const CalculateProvider = ({ children }) => {
  const { transactions } = useGlobalContext();

  const amounts = transactions.map((t) => t.amount);

  const income = amounts
    .filter((a) => a > 0)
    .reduce((acc, a) => acc + a, 0);

  const expense = amounts
    .filter((a) => a < 0)
    .reduce((acc, a) => acc + a, 0);

  const balance = income + expense;

  return (
    <CalculateContext.Provider
      value={{
        income,
        expense: Math.abs(expense),
        balance
      }}
    >
      {children}
    </CalculateContext.Provider>
  );
};

export const useCalculateContext = () => {
  return useContext(CalculateContext);
};
