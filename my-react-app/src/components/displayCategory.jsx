import Card from "./cards";

const list=["Groceries", "Electronics", "Fruits and Vegetables"]

export default function CardCollection({setCategory}) {

    return (
        <div className="cardCollectionGrid">
            {list.map((value, index) => {
                return <div className="Card" key={index} onClick={()=>{setCategory(value)}}>
                      {value}
                      </div>;
            })}
        </div>
    );
}