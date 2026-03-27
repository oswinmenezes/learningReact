import Navbar from "./components/navbar"
import DisplayItems from "./components/displayItems"
import CardCollection from "./components/displayCategory"
import Cart from "./components/cart"

import { useState } from "react"

export default function App() {
  const [category, setCategory] = useState("");
  const [cartVisibility, setCartVisibility] = useState(false);
  const [cartitems, setcartitems] = useState([])

  const groceries=["Rice", "Milk", "Eggs", "Bread", "Sugar", "Cooking Oil"]
  const fruitandveg=["Apple", "Banana", "Carrot", "Tomato", "Potato", "Spinach"]
  const electronics=["Smartphone", "Laptop", "Headphones", "Smartwatch", "Bluetooth Speaker", "Power Bank","Table Fan","Ac for csds"] 
  
  return <div>
    <Navbar setCartVisibility={setCartVisibility} cartVisibility={cartVisibility} />

    <CardCollection setCategory={setCategory} />

    {category === "Groceries" ? <DisplayItems listType={"Groceries"} list={groceries} cartitems={cartitems} setcartitems={setcartitems} /> : null}
    {category === "Fruits and Vegetables" ? <DisplayItems listType={"Fruits and Vegetables"} list={fruitandveg} cartitems={cartitems} setcartitems={setcartitems} /> : null}
    {category === "Electronics" ? <DisplayItems listType={"Electronics"} list={electronics} cartitems={cartitems} setcartitems={setcartitems} /> : null}

    {cartVisibility ? <Cart cartList={cartitems} setcartitems={setcartitems} /> : null}

    
  </div>
}