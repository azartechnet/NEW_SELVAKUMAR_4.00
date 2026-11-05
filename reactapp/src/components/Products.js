import React,{useContext} from "react";
import { CartContext } from "../context/CartContext";

function Products() {
    const {addToCart}=useContext(CartContext);
    return (
        <div>
            <h1>Products</h1>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Products;