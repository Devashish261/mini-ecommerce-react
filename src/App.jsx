import { useState } from "react";
import { products } from "./data/products.js";

export default function App() {
  // CART STATE
  const [cart, setCart] = useState([]);

  // FILTER STATES
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  // UNIQUE CATEGORIES
  const categories = ["All", ...new Set(products.map(p => p.category))];

  // ADD TO CART
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      if (existingItem.qty < product.stock) {
        setCart(
          cart.map(item =>
            item.id === product.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        );
      }
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // TOTALS
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  // FILTER + SEARCH + SORT
  let filteredProducts = products
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(p =>
      category === "All" ? true : p.category === category
    );

  // SAFE SORT (no mutation)
  if (sort === "low-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sort === "high-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mini E-Commerce</h1>

      {/* SEARCH & FILTERS */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>

        <button onClick={() => {
          setSearch("");
          setCategory("All");
          setSort("");
        }}>
          Clear
        </button>
      </div>

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 && <p>No products found</p>}

      {/* PRODUCTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px"
        }}
      >
        {filteredProducts.map(product => (
          <div
            key={product.id}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <h4>{product.title}</h4>
            <p>₹{product.price}</p>
            <p>{product.category}</p>
            <p>{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>

            <button
              disabled={product.stock === 0}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      <h2>Cart</h2>
      {cart.length === 0 && <p>Empty cart</p>}

      {cart.map(item => (
        <div key={item.id}>
          {item.title} × {item.qty} = ₹{item.qty * item.price}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <hr />
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹{totalPrice}</p>
    </div>
  );
}
