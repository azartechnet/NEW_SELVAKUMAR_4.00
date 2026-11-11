
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<h1>About Page</h1>} />
                <Route path="/services" element={<h1>Services Page</h1>} />
                <Route path="/products" element={<h1>Products Page</h1>} />
                <Route path="/contact" element={<h1>Contact Page</h1>} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
