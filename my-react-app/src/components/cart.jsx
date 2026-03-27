export default function Cart({ cartList, setcartitems }) {

    // Function to remove an item from the cart based on its index
    const removeItem = (index) => {
        const newCart = cartList.filter((_, indx) => indx !== index);
        setcartitems(newCart);
    };

    return (
        <div className="cartContainer">
            <div className="cart">
                <p>My Cart :</p>
                <div className="cartList">
                    {/* Map through the items in the cart and display them */}
                    {cartList.map((value, index) => {
                        return (
                            <div key={index} className="cartItem">
                                <div>{value}</div>
                                {/* Button to trigger item removal */}
                                <button onClick={() => removeItem(index)}>Remove</button>
                            </div>
                        );
                    })}
                </div>
                <div className="totalPrice">
                    <div>Total Items :</div>
                    <div>{cartList.length}</div>
                </div>
                {/* Buy Now button that clears the cart after alerting the user */}
                <button className="buyNow" onClick={() => {
                    alert("Purchased Successfully");
                    setcartitems([]);
                }}>Buy Now</button>
            </div>
        </div>
    );
}
