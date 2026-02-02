const ProductList = ({ products, onSelect }) => (
  <div className="left">
    {products.map(p => (
      <div className="item" key={p.id} onClick={() => onSelect(p)}>
        <img src={p.image} referrerPolicy="no-referrer" />
        <p>{p.title}</p>
      </div>
    ))}
  </div>
);

export default ProductList;
