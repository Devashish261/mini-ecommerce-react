# 🛒 Mini E-Commerce React App

A mini e-commerce web application built using **React + Vite**, demonstrating core frontend concepts such as component-based architecture, state management, filtering, and cart functionality.

This project was developed as part of an assignment to showcase clean React fundamentals and UI/UX clarity.

---

## 🚀 Features

### Product Listing
- Displays multiple products in a responsive grid
- Each product shows:
  - Product image
  - Name
  - Price
  - Category
  - Stock status (In Stock / Out of Stock)
  - Add to Cart button (disabled if out of stock)

### Search, Filter & Sort
- Search products by name
- Filter products by category
- Sort products by price:
  - Low → High
  - High → Low
- Clear all filters with a single click
- All filters work together (search + category + sort)

### Cart Management
- Add products to cart
- Increase / decrease quantity (within available stock)
- Remove items from cart
- View:
  - Total items in cart
  - Total price
- Instant UI updates on cart changes
- Empty cart state handled properly

### Checkout (Mocked)
- Checkout button opens a modal
- Displays order summary
- Simulates order placement (no backend)

---

## 🧩 Tech Stack

- **React** (Functional Components)
- **Vite** (Fast development & build)
- **JavaScript (ES6+)**
- **CSS (custom styling, no UI libraries)**

> No backend is used. All data is mocked locally.

---

## 📁 Project Structure

mini-ecommerce-react/
├── public/
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation with search & filters
│   │   ├── ProductCard.jsx     # Individual product display card
│   │   ├── Cart.jsx            # Shopping cart section
│   │   └── CheckoutModal.jsx   # Mock checkout modal
│   │
│   ├── data/
│   │   └── products.js         # Mock product data
│   │
│   ├── App.jsx                 # Main application logic
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

## 🧠 Key Design Decisions

## Key Design Decisions

- Used functional components only, following modern React practices
- Centralized cart state in the root component for clean and predictable data flow
- Split UI into reusable components to improve readability and maintainability
- Avoided UI libraries to focus on core React and CSS fundamentals
- Ensured immediate UI updates on state changes for a responsive user experience

## Constraints Followed

- No backend integration
- No external UI libraries (Material UI, Ant Design, etc.)
- Product data mocked locally
- Focused on clarity, correctness, and clean, maintainable code

---

## 📚 Learning Objectives

- Mastering React fundamentals (components, state, props)
- Understanding state management in React
- Implementing responsive UI with CSS
- Learning about component composition
- Understanding the importance of clean code
- Getting comfortable with Vite for React development

---

## 📝 License

MIT License

## Submitted By

Devashish Patel  
B.Tech (Information Technology) Student  

GitHub Repository:  
https://github.com/Devashish261/mini-ecommerce-react

