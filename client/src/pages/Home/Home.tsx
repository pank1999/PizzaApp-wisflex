import Header from "../../components/Header/Header";
import "./Home.css";
import img from "../../img/pizza.png"
import Card from "../../components/IngredientCard/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { addIngredient } from "../../redux/CartRedux";
import { useDispatch } from "react-redux";

export default function Home() {

  interface Ing{
    Name:string,
    Price:number,
    Img:string
  }
  const dispatch = useDispatch();
  const [Ingredients,setIngredient]=useState([]);

  useEffect(()=>{
      const getIngredient=async ()=>{
         try{
           const res=await axios.get("http://localhost:3001/api/ingredient");
           //console.log(res);
           setIngredient(res.data);
         }catch(err){
           console.log(err);
         }
         
      }
      
      getIngredient();

  },[setIngredient]);
  //console.log(Ingredients);
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
        <h1 className="center-heading" >Choose your toppings..</h1>
        <div className="Card-Container" >
          {
            Ingredients.map((Ing:Ing)=>( 
              <div style={{"position":"relative"}} >
                 <Card  Ingre={Ing} />
                 <div className="Add-Button" onClick={()=>dispatch(addIngredient(Ing))} >
                    +
                  </div>
              </div>
            ))

          }
          {/* <div style={{"position":"relative"}}>
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
          </div> */}

        </div>
    </div>
  )
}
