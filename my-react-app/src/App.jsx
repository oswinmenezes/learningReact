import Navbar from "./components/navbar"
import DisplayItems from "./components/displayItems"
import CardCollection from "./components/displayCategory"
import Cart from "./components/cart"
import Footer from "./components/footer"
import { useState } from "react"

export default  function App(){
  const [category,setCategory]=useState("");
  const [cartVisibility,setCartVisibility]=useState(false);
  return <div>
    <Navbar setCartVisibility={setCartVisibility}/>
    <CardCollection setCategory={setCategory} list= {["Groceries", "Electronics", "Fruits and Vegetables"]}/>
    {category==="Groceries"?<DisplayItems listType={"Groceries"}  list={["Rice", "Milk", "Eggs", "Bread", "Sugar", "Cooking Oil"]}/>:null}
    {category==="Fruits and Vegetables"?<DisplayItems listType={"Fruits and Vegetables"} list={["Apple", "Banana", "Carrot", "Tomato", "Potato", "Spinach"]}/>:null}
    {category==="Electronics"?<DisplayItems listType={"Electronics"} list={["Smartphone", "Laptop", "Headphones", "Smartwatch", "Bluetooth Speaker", "Power Bank"]}/>:null}
    {cartVisibility?<Cart cartList={["Smartphone", "Laptop", "Headphones", "Power Bank"]}/>:null}
    <Footer />
  </div>
}