export default function Navbar({setCartVisibility}){
    return <div className="navbar">
        <div>Shop4u</div>
        <button className="cartBtn" onClick={()=>{
            setCartVisibility(true);
            console.log("cart set to visible")
        }}>Cart</button>
    </div>
}