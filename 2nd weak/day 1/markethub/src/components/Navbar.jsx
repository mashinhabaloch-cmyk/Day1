import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ search, setSearch, category, setCategory, cart }) => {
  const { logout } = useAuth();

  return (
    <div className="navbar">
      <h2>MarketHub</h2>

      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Fashion">Fashion</option>
        <option value="Accessories">Accessories</option>
        <option value="Electronics">Electronics</option>
      </select>

      <Link to="/cart">🛒 {cart.length}</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
