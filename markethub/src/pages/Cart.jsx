import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, increment, decrement, removeItem, total } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.map(i => (
        <div className="cart-item" key={i.id}>
          <h4>{i.title}</h4>
          <p>₹ {i.price}</p>

          <button onClick={() => decrement(i.id)}>-</button>
          <span>{i.qty}</span>
          <button onClick={() => increment(i.id)}>+</button>

          <button onClick={() => removeItem(i.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹ {total}</h3>
    </div>
  );
}
