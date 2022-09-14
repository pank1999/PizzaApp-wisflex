import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyOrders from "./pages/MyOrders/MyOrders";



function App() {

   const loggedInUser=useSelector((state:any)=>state.user.user);
  // console.log(loggedInUser);
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                 <Route  path="/" element={<Login />} />
                 <Route path="/Home"  element ={<Home /> }/>
                 <Route  path="/register" element={<Register />} />
                 <Route path="/cart"  element={<Cart /> } />
                 <Route path="/myOrders" element={<MyOrders /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
