export default function Card({category,setCategory}){
    return <div className="Card" onClick={()=>{setCategory(category)}}>
        {category}
        </div>
}