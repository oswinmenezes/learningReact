export default function DisplayItems({ list, listType, cartitems, setcartitems }) {

    // Function to add a selected item to the cart
    const addItem = (item) => {
        setcartitems([...cartitems, item]);
    }

    return <div>
        <h1 className="itemListType">{listType}</h1>
        <div className="itemsContainer">
            {
                // Iterate through the list of items for the selected category
                list.map((value, index) => {
                    return <div key={index} className="itemCard">
                        <div className="itemName">{value}</div>
                        <div className="itemBtns">
                            {/* Button to add the specific item to the cart */}
                            <button onClick={() => addItem(value)}>Add</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}