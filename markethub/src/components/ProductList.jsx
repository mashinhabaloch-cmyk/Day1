export default function ProductList({ products, onSelect }) {
  return (
    <>
      {products.map(p => (
        <div
          key={p.id}
          className="product-card"
          onClick={() => onSelect(p)}
        >
          <img src={p.image} />
          <h4>{p.title}</h4>
          <p>₹ {p.price}</p>
        </div>
      ))}
    </>
  );
}
