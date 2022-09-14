import "./Card.css"
import ing from "../../img/pizza.png";

// interface Ing{
//   Name:string,
//   Price:number,
//   Img:string
// }

export default function Card(props:any) {
  return (
    <div className="Card">
       <img src={props.Ingre.Img} alt="img" />
       <p>{props.Ingre.Name}</p>
       <p>Price: {props.Ingre.Price}.rs</p>
    </div>
  )
}
