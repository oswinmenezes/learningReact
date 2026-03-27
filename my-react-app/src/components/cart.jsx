export default function Cart({ cartList, setcartitems }) {
    
  const removeItem = (index) => {
    const newCart = [...cartList];
    newCart.splice(index, 1);
    setcartitems(newCart);
  };

  return (
    <div className="cartContainer">
      <div className="cart">
        <p>My Cart :</p>
        <div className="cartList">
          {cartList.map((value, index) => {
            return (
              <div key={index} className="cartItem">
                <div>{value}</div>
                <button onClick={() => removeItem(index)}>Remove</button>
              </div>
            );
          })}
        </div>
        <div className="totalPrice">
          <div>Total Items :</div>
          <div>{cartList.length}</div>
        </div>
        <button className="buyNow" onClick={()=>{
            alert("Purchased Successfully");setcartitems([])}}>Buy Now</button>
      </div>
    </div>
  );
}
