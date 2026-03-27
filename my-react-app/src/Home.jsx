import Navbar from "./components/navbar"
import DisplayItems from "./components/displayItems"
import CardCollection from "./components/displayCategory"
import Cart from "./components/cart"
import { useState } from "react"

function Home() {
    // State to track the currently selected category
    const [category, setCategory] = useState("");
    // State to toggle the visibility of the shopping cart
    const [cartVisibility, setCartVisibility] = useState(false);
    // State to manage the list of items in the cart
    const [cartitems, setcartitems] = useState([])

    // Sample data for different product categories
    const groceries = ["Rice", "Milk", "Eggs", "Bread", "Sugar", "Cooking Oil"]
    const fruitandveg = ["Apple", "Banana", "Carrot", "Tomato", "Potato", "Spinach", "Mango"]
    const electronics = ["Smartphone", "Laptop", "Headphones", "Smartwatch", "Bluetooth Speaker", "Power Bank", "Table Fan"]

    return (
        <div>
            {/* Navigation bar with cart toggle functionality */}
            <Navbar setCartVisibility={setCartVisibility} cartVisibility={cartVisibility} />

            {/* Component to display and select product categories */}
            <CardCollection setCategory={setCategory} />

            {/* Conditionally render product items based on the selected category */}
            {category === "Groceries" ? <DisplayItems listType={"Groceries"} list={groceries} cartitems={cartitems} setcartitems={setcartitems} /> : null}
            {category === "Fruits and Vegetables" ? <DisplayItems listType={"Fruits and Vegetables"} list={fruitandveg} cartitems={cartitems} setcartitems={setcartitems} /> : null}
            {category === "Electronics" ? <DisplayItems listType={"Electronics"} list={electronics} cartitems={cartitems} setcartitems={setcartitems} /> : null}

            {/* Show cart overlay if cartVisibility is true */}
            {cartVisibility ? <Cart cartList={cartitems} setcartitems={setcartitems} /> : null}
        </div>
    )
}

export default Home