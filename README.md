# Mini E-Commerce React App

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

A performance-focused mini e-commerce web application built using **React + Vite**. This project demonstrates a production-ready approach to frontend development, featuring a scalable component architecture, efficient state management, and a responsive custom UI.

---

## 🚀 Features

### Product Listing
- **Dynamic Grid Layout**: Responsive product display adapting to all screen sizes.
- **Rich Product Details**: Clear visibility of images, pricing, categories, and real-time stock status.

### Advanced Search & Filtering
- **Real-time Search**: Instant product filtering by name.
- **Category Filtering**: Seamlessly toggle between product categories.
- **Smart Sorting**: Price sorting (High ↔ Low) working in tandem with active filters.

### Cart & State Management
- **Persistent Cart Logic**: Add/Remove items with automatic total calculation.
- **Stock Validation**: Prevents adding items beyond available stock.
- **Reactive UI**: Immediate visual feedback for all user actions.

### Mock Checkout Flow
- **Interactive Modal**: Simulates a complete checkout experience.
- **Order Summary**: Detailed breakdown of selected items and total cost.

---

## 🛠️ Getting Started

Follow these steps to run the application locally.

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Devashish261/mini-ecommerce-react.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd mini-ecommerce-react
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Project

Start the development server:
```bash
npm run dev
```

The application will typically run on `http://localhost:5173`.

---

## 🧠 Technical Highlights & Engineering Practices

This project goes beyond basics to demonstrate professional engineering practices:

- **Clean Component Architecture**: UI is broken down into atomic, reusable components (`ProductCard`, `Cart`, `Navbar`) to ensure maintainability.
- **Optimized State Management**: effectively uses `useState` and `useEffect` hooks to manage complex application states (filtering, cart updates) without unnecessary re-renders.
- **Responsive Design System**: Built with modern CSS (Flexbox, Grid, CSS Variables) ensuring a seamless experience across Mobile, Tablet, and Desktop.
- **Defensive Programming**: Handles edge cases like empty states, out-of-stock items, and zero search results gratefully.

---

## 🔮 Future Roadmap

Potential improvements planned for the next iteration:

- [ ] **Backend Integration**: Connect to a Node.js/Express API for real data persistence.
- [ ] **State Management**: Migrate to Redux Toolkit or Context API for global state scaling.
- [ ] **Payment Gateway**: Integrate Stripe or Razorpay for actual payment processing.
- [ ] **Unit Testing**: Add Jest/Vitest for component reliability.

---

## 🧩 Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Vanilla CSS (Custom Design System)
- **Language**: JavaScript (ES6+)

---

## 📁 Project Structure

```bash
mini-ecommerce-react/
├── src/
│   ├── components/     # Reusable UI components
│   ├── data/          # Mock data layer
│   └── App.jsx        # Main controller logic
└── public/            # Static assets
```

---

## 👤 Author

**Devashish Patel**  
*B.Tech (Information Technology) Student*

[GitHub Profile](https://github.com/Devashish261)
