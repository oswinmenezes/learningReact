export default function Card({num,setCategory}){
    return <div className="Card" onClick={()=>{
        setCategory(num);
        console.log(num);
    }}>{num}</div>
}