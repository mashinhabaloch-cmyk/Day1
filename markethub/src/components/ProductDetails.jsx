import { useCart } from "../context/CartContext";

export default function ProductDetails({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="details-card">
      <img src={product.image} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>₹ {product.price}</h3>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <button onClick={() => {
        addToCart(product);
        alert("Proceed to Checkout");
      }}>
        Buy Now
      </button>
    </div>
  );
}
