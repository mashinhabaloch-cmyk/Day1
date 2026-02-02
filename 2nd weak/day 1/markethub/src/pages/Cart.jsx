const Cart = ({ cart, setCart }) => (
  <div className="cart">
    🛒 {cart.reduce((a, c) => a + c.qty, 0)}
    {cart.map(c => (
      <div key={c.id}>
        <button onClick={() =>
          setCart(cart.map(i =>
            i.id === c.id ? { ...i, qty: i.qty - 1 } : i
          ).filter(i => i.qty > 0))
        }>-</button>
        {c.qty}
        <button onClick={() =>
          setCart(cart.map(i =>
            i.id === c.id ? { ...i, qty: i.qty + 1 } : i
          ))
        }>+</button>
      </div>
    ))}
  </div>
);

export default Cart;
