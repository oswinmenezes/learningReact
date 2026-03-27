export default function DisplayItems({list,listType,setcartitem}){
    return <div>
        <h1 className="itemListType">{listType}</h1>
        <div className="itemsContainer">
            {
                list.map((value,index)=>{
                    return <div key={index} className="itemCard">
                        <div className="itemName">{value}</div>
                        <div className="itemBtns">
                            <button onClick={setcartitem(value)}>Add</button>
                            <button>Remove</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}