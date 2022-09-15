import { AddCircle, Delete, RemoveCircle } from "@mui/icons-material"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header"
import "./Cart.css"
import {resetIng,deleteProductSuccess} from "../../redux/CartRedux";

export default function Cart(props:any) {
    
    const cartItems=useSelector((state:any)=>state.cart);
    let navigate=useNavigate();
    const User=useSelector((state:any)=>state.user.user);
     const dispatch = useDispatch();
    // const Array=[{}];
    // cartItems.Ingredient.map((Item:any)=>(
    //     IngredientArray.push(Item.id)
    //  ));
   // console.log(User);
   // console.log(cartItems);
    const handleClick=async ()=>{
        const orderData={
            userId:User.user[0].id,
            TotalPrice:cartItems.TotalPrice,
            Quantity:cartItems.Quantity,
            Products:cartItems.Products
        }
        console.log(orderData);
        try{
            const res = await axios.post("http://localhost:3001/api/order",orderData);
            console.log(res);
            //dispatch(resetIng);
            navigate("/myOrders");

        }catch(err){
            console.log(err);
        }
    }
    
    console.log(cartItems.Products[0]);
    
    const  handleDelete=(id:number)=>{
           dispatch(deleteProductSuccess(id)) ;    
    }

    return (
    <div className="Cart">
          <Header />
          <div className="C-container">
            <h1>Your Order </h1>
            <div className="Order-Container" >
                <div className="Order">
                    <div>
                        <p>Item 1</p>
                        <div>
                            <p>Ingredients</p>
                            <table>
                                <tr>
                                    <th>Id</th>
                                    <th>Img</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>ing</td>
                                    <td>Ig1</td>
                                    <td>100</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    {
                    //  cartItems.Products.map((Item:any)=>(
                    //     Item.map((ItemCart:any)=>(
                    //     <div className="Order-item">
                    //        <div className="Order-item-left" >
                    //            <span>Item ID:{ItemCart.id}</span>
                    //            <img src={ItemCart.Img} alt="" />
                    //            <p>{Item.Name}</p>
                    //         </div>
                    //         <div  className="Order-item-right" >
                    //             <div>
                    //                 <span>Price: {ItemCart.Price}</span>
                    //             </div>
                    //            <Delete   onClick={()=>handleDelete(Item.id)} style={{"marginLeft":"50px"}} />
                    //          </div>
                    //      </div>
                    //   ))
                    // ))   
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
