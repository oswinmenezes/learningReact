export default function Navbar({setCartVisibility,cartVisibility}){
    return <div className="navbar">
        <div>Kapikad Shoping Mall</div>
        <button className="cartBtn" onClick={()=>{
            setCartVisibility(!cartVisibility);
            console.log("cart set to visible")
        }}>Cart</button>
    </div>
}