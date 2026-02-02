const ProductDetails = ({ product, addToCart }) => {
  if (!product) return null;

  return (
    <div className="right">
      <img src={product.image} referrerPolicy="no-referrer" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
