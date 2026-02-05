import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar({ search, setSearch }) {
  const navigate = useNavigate();
  const { cart } = useCart();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="navbar">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>MarketHub</h1>

      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => navigate("/cart")}>
        🛒 Cart ({cart.length})
      </button>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
