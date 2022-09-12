import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                 <Route  path="/" element={<Home />} />
                 <Route  path="/register" element={<Register />} />
                 <Route path="/cart" element={<Cart /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
