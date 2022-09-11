import Header from "../../components/Header/Header";
import "./Home.css";
import img from "../../img/pizza.png"
import Card from "../../components/IngredientCard/Card";

export default function Home() {
  return (
    <div className="Home" >
        <Header />
        <div className="H-container" >
            <div className="H-left" >
                 <div className="H-img-container" >
                    <img src={img} className="H-img" alt="" />
                 </div>  
            </div>
            <div className="H-right" >
                <div className="H-right-text-container" >
                    <h1 className="H-right-text" >We have the best pizza for you. </h1>
                </div>
                <div>
                   <button className="H-right-button">Order Now</button>
                </div>
            </div>
        </div>
        <div className="Card-Container" >
          <div style={{"position":"relative"}} >
              <Card />
              <div className="Add-Button">
                +
              </div>
          </div>
          <div style={{"position":"relative"}}>
              <Card />
              <div className="Add-Button">
                +
              </div>
          </div>
          <div style={{"position":"relative"}}>
              <Card />
              <div className="Add-Button">
                +
              </div>
          </div>
          <div style={{"position":"relative"}}>
              <Card />
              <div className="Add-Button">
                +
              </div>
          </div>

        </div>
    </div>
  )
}
