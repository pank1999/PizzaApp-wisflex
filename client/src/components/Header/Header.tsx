import { LocationOn ,ShoppingCart} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";


export default function Header() {
  //const loggedInUser=useSelector((state:any)=>state.user.user.token);
  const size=useSelector((state:any)=>state.cart.Quantity);

  return (
    <div className="Header">
        <div className="h-left">
             <LocationOn style={{"fontSize":"60px"}} />
             <div className="logo" >
                <span className="logo-title">Pizza</span>
                <span className="logo-tagline">Delivery APP</span>
             </div>
        </div>
        <div className="h-right">

             <Link to="/myOrders" style={{"textDecoration":"none"}} >
                 <button className="h-signinButton" >my orders </button>
             </Link>
    
            <Link to="/cart"style={{"textDecoration":"none"}} >
                <div className="cartIconContainer">
                   <ShoppingCart style={{"fontSize":"30px","marginRight":"30px"}}  />
                   <span className="cartSize" >{size}</span>
                </div>
            </Link>
            
             

        </div>
    </div>
  )
}
