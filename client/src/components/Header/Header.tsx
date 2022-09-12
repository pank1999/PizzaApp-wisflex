import { LocationOn ,ShoppingCart} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
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
             <Link to="/register" style={{"textDecoration":"none"}} >
                 <button className="h-signinButton" >sign in </button>
             </Link>
            <Link to="/cart"style={{"textDecoration":"none"}} >
                <span className="h-cart" >cart</span>
                <ShoppingCart style={{"fontSize":"30px","marginRight":"30px"}}  />
            </Link>
            
             

        </div>
    </div>
  )
}
