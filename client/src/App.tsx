import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                 <Route  path="/" element={<Home />} />
                 <Route path="/login"  element={<Login />}/>
                 <Route  path="/register" element={<Register />} />
                 <Route path="/cart" element={<Cart /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
