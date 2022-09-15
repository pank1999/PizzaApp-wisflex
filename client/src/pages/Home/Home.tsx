import Header from "../../components/Header/Header";
import "./Home.css";
import img from "../../img/pizza.png"
import Card from "../../components/IngredientCard/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { addProducts } from "../../redux/CartRedux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const loggedInUser=useSelector((state:any)=>state.user.user);
  console.log(loggedInUser.user[0].id);
  const cart=useSelector((state:any)=>state.cart);
  const dispatch = useDispatch();
  const [Ingredients,setIngredient]=useState([]);
  let navigate = useNavigate();
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


 

  interface pizzaIngType{
       id:number,
       Name:string,
       Price:number,
       Img:string  
  }
  interface pizzaIng extends Array<pizzaIngType>{}

  const PizzaIng :pizzaIng= [];
  const [countIng,setCountIng]=useState(0);

  const handleClick=(Ingredient:pizzaIngType)=>{
      setCountIng(countIng+1);
      console.log(Ingredient);
      PizzaIng.push(Ingredient);
  }

  const handleSubmit=async()=>{
    dispatch(addProducts(PizzaIng))
    if(countIng!=0){
      try{
         const res=await axios.post("http://localhost:3001/api/cart",{
            userId:loggedInUser.user[0].id,
            Quantity:cart.Size,
            Products:cart.Products
         });
         console.log(res);
      }catch(err){
         console.log(err);
      }
      navigate("/cart");
    }
  }

  
  console.log(PizzaIng);
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
            Ingredients.map((Ing)=>(
              <div style={{"position":"relative"}} >
                 <Card  Ingre={Ing} />
                 <div className="Add-Button" onClick={()=>handleClick(Ing)} >
                    +
                  </div>
              </div>
            ))

          }

        </div>
        <div>
          <button  className="H-right-button" onClick={handleSubmit} >Add to Cart</button>
        </div>
    </div>
  )
}
