import { useState } from "react";
import { products } from "../data/products";

const Home = () => {
  const [selected, setSelected] = useState(products[0]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const found = cart.find((c) => c.id === product.id);
    if (found) {
      setCart(
        cart.map((c) =>
          c.id === product.id ? { ...c, qty: c.qty + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const inc = (id) =>
    setCart(cart.map(c => c.id === id ? { ...c, qty: c.qty + 1 } : c));

  const dec = (id) =>
    setCart(
      cart
        .map(c => c.id === id ? { ...c, qty: c.qty - 1 } : c)
        .filter(c => c.qty > 0)
    );

  return (
    <div className="home-wrapper">
      <div className="home-card">

        <h1 className="home-title">My Store</h1>

        <div className="home-top">
          <input
            className="home-search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="home-cart">
            🛒 {cart.reduce((a, c) => a + c.qty, 0)}
            {cart.map(c => (
              <div key={c.id} className="cart-row">
                <button onClick={() => dec(c.id)}>-</button>
                <span>{c.qty}</span>
                <button onClick={() => inc(c.id)}>+</button>
              </div>
            ))}
          </div>
        </div>

        <div className="home-content">
          {/* LEFT PRODUCT LIST */}
          <div className="home-left">
            {products
              .filter(p =>
                p.title.toLowerCase().includes(search.toLowerCase())
              )
              .map(p => (
                <div
                  key={p.id}
                  className="product-item"
                  onClick={() => setSelected(p)}
                >
                  <img src={p.image} referrerPolicy="no-referrer" />
                  <p>{p.title}</p>
                </div>
              ))}
          </div>

          {/* RIGHT PRODUCT DETAILS */}
          <div className="home-right">
            {selected && (
              <>
                <img src={selected.image} referrerPolicy="no-referrer" />
                <h2>{selected.title}</h2>
                <p>{selected.description}</p>
                <h3>₹{selected.price}</h3>
                <button onClick={() => addToCart(selected)}>
                  Add to Cart
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
