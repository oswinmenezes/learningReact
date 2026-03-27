import Card from "./cards";

export default function CardCollection({list,setCategory}) {

    return (
        <div className="cardCollectionGrid">
            {list.map((value, index) => {
                return <Card key={index} num={value} setCategory={setCategory}/>;
            })}
        </div>
    );
}