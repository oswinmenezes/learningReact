export default function Navbar({ setCartVisibility, cartVisibility }) {
    return <div className="navbar">
        {/* Brand Name */}
        <div>BuyMore</div>
        {/* Toggle button to show/hide the cart overlay */}
        <button className="cartBtn" onClick={() => {
            setCartVisibility(!cartVisibility);
            console.log("cart set to visible")
        }}>Cart</button>
    </div>
}