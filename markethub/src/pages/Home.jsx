import { useState } from "react";
import products from "../data/products";
import ProductList from "../components/ProductList";
import ProductDetails from "../components/ProductDetails";
import Navbar from "../components/Navbar";

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <div className="home-container">
        <div className="left">
          <ProductList
            products={filtered}
            onSelect={setSelected}
          />
        </div>

        <div className="right">
          {selected && <ProductDetails product={selected} />}
        </div>
      </div>
    </>
  );
}
