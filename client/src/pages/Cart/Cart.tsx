import { AddCircle, Delete, RemoveCircle } from "@mui/icons-material"
import axios from "axios";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header"
import "./Cart.css"


export default function Cart(props:any) {
    
    const cartItems=useSelector((state:any)=>state.cart);
    let navigate=useNavigate();
    const User=useSelector((state:any)=>state.user.user);
   // console.log(User);
   // console.log(cartItems);
    const handleClick=async ()=>{
        const orderData={
            userId:User.user[0].id,
            Price:cartItems.TotalPrice,
            Quantity:cartItems.Quantity,
            Ingredients:cartItems.Ingredient
        }
        console.log(orderData);
        try{
            const res = await axios.post("http://localhost:3001/api/order",orderData);
            console.log(res);
            navigate("/myOrders");
        }catch(err){
            console.log(err);
        }
    }
    
    return (
    <div className="Cart">
          <Header />
          <div className="C-container">
            <h1>Your Order </h1>
            <div className="Order-Container" >
                <div className="Order">
                    {
                     cartItems.Ingredient.map((Item:any)=>(
                        <div className="Order-item">
                           <div className="Order-item-left" >
                               <span>ID:{Item.id}</span>
                               <img src={Item.Img} alt="" />
                               <p>{Item.Name}</p>
                            </div>
                            <div  className="Order-item-right" >
                                <div>
                                    <span>Price: {Item.Price}</span>
                                </div>
                               <Delete style={{"marginLeft":"50px"}} />
                             </div>
                         </div>
                     ))   
                    }

                    
                </div>
                <div className="Order-Summary">
                       <h2>Order Summary</h2>
                       <div className="Summary-item" >
                           <p>Quantity</p>
                            <div className="Quantity-div">
                               <RemoveCircle /> <span>{cartItems.Quantity}</span><AddCircle />
                            </div>
                            
                       </div>
                       <div  className="Summary-item">
                           <p>Toppings</p>
                           <span>Ing1, Ing2</span>
                       </div>
                       <div  className="Summary-item">
                          <p>Total Price</p>
                          <span>RS: {cartItems.TotalPrice}</span>
                       </div>
                       <div  className="Summary-item">
                           <button onClick={handleClick} >Checkout Now</button>
                       </div>
                </div>
            </div>
          </div>
    </div>
  )
}
