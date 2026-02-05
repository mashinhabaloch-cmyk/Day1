import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("amazonUser") ? true : false
  );

  const login = (email, pass) => {
    const saved = JSON.parse(localStorage.getItem("amazonUser"));
    if (saved && saved.email === email && saved.pass === pass) {
      setUser(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const signup = (email, pass) => {
    localStorage.setItem("amazonUser", JSON.stringify({ email, pass }));
    setUser(true);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
