export default function DisplayItems({ list, listType, cartitems, setcartitems }) {
    const addItem = (item) => {
        setcartitems([...cartitems, item]);
    }

    const removeItem = (item) => {
        setcartitems(cartitems.filter(i => i !== item));
    }

    return <div>
        <h1 className="itemListType">{listType}</h1>
        <div className="itemsContainer">
            {
                list.map((value, index) => {
                    return <div key={index} className="itemCard">
                        <div className="itemName">{value}</div>
                        <div className="itemBtns">
                            <button onClick={() => addItem(value)}>Add</button>
                            <button onClick={() => removeItem(value)}>Remove</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}