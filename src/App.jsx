import { useState } from "react";
import { products } from "./data/products.js";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";

export default function App() {
  // CART STATE
  const [cart, setCart] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

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

  // DECREMENT FROM CART
  const decrementFromCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      if (existingItem.qty > 1) {
        setCart(
          cart.map(item =>
            item.id === product.id
              ? { ...item, qty: item.qty - 1 }
              : item
          )
        );
      } else {
        // If qty is 1, remove it
        removeFromCart(product.id);
      }
    }
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // CHECKOUT HANDLERS
  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const confirmOrder = () => {
    setCart([]);
    setIsCheckoutOpen(false);
    alert("Order Placed Successfully!");
  };

  // TOTALS
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  // CLEAR FILTERS
  const handleClear = () => {
    setSearch("");
    setCategory("All");
    setSort("");
  };

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
    <div className="container">
      <h1>Mini E-Commerce</h1>

      {/* NAVBAR (Search & Filters) */}
      <Navbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
        sort={sort}
        setSort={setSort}
        onClear={handleClear}
      />

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
          <h3>No products found</h3>
          <p>Try adjusting your search or filters.</p>
        </div>
      )}

      {/* PRODUCTS GRID */}
      <div className="grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* CART SECTION */}
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        decrementFromCart={decrementFromCart}
        totalItems={totalItems}
        totalPrice={totalPrice}
        onCheckout={handleCheckout}
      />

      {/* CHECKOUT MODAL */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onConfirm={confirmOrder}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
    </div>
  );
}
