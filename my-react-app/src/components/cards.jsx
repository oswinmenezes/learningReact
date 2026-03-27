export default function Card({num,setCategory}){
    return <div className="Card" onClick={()=>{
        setCategory(num);
    }}>{num}</div>
}