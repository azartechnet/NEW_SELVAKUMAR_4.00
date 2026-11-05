import React from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
    return (
        <CartProvider>
            <Navbar />
            <Products />
        </CartProvider>
    );
}
export default App;