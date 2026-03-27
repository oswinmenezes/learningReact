export default function Cart({cartList}){
    return <div className="cartContainer">
        <div className="cart">
            <p>My Cart :</p>
            <div className="cartList">
                {cartList.map((value,index)=>{
                    return <div key={index} className="cartItem">
                        <div>{value}</div>
                        <button>Remove</button>
                    </div>
                })}
            </div>
            <div className="totalPrice">
                <div>Total :</div>
                <div>900</div>
            </div>
            <button className="buyNow">Buy Now</button>
        </div>
    </div>
}