import "./Card.css"
import ing from "../../img/pizza.png";

export default function Card() {
  return (
    <div className="Card">
       <img src={ing} alt="img" />
       <p>Ingredient</p>
       <p>$ 40</p>
    </div>
  )
}
