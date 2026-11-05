import React,{useContext} from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
    const {count}=useContext(CartContext);
    return (
        <div>
            <h1>Navbar</h1>
            <h2>Cart Count: {count}</h2>
        </div>
    );
}
export default Navbar;