import { AddCircle, RemoveCircle } from "@mui/icons-material"
import Header from "../../components/Header/Header"
import "./Cart.css"

export default function Cart() {
  return (
    <div className="Cart">
          <Header />
          <div className="C-container">
            <h1>Your Order </h1>
            <div className="Order-Container" >
                <div className="Order">
                    <div className="Order-item">
                        <div className="Order-item-left" >
                            <span>ID:123</span>
                            <img src="https://letspizzaeu.com/wp-content/uploads/2020/09/pizza-topping-hd-png-transparent-png-transparent-png-image-popular-pizza-toppings-png-860_627.png" alt="" />
                            <p>Ingredient1</p>
                        </div>
                        <div  className="Order-item-right" >
                            <span>Price : $30</span>
                        </div>
                    </div>

                    <div className="Order-item">
                        <div className="Order-item-left" >
                            <span>ID:123</span>
                            <img src="https://letspizzaeu.com/wp-content/uploads/2020/09/pizza-topping-hd-png-transparent-png-transparent-png-image-popular-pizza-toppings-png-860_627.png" alt="" />
                            <p>Ingredient1</p>
                        </div>
                        <div  className="Order-item-right" >
                            <span>Price : $30</span>
                        </div>
                    </div>

                    <div className="Order-item">
                        <div className="Order-item-left" >
                            <span>ID:123</span>
                            <img src="https://letspizzaeu.com/wp-content/uploads/2020/09/pizza-topping-hd-png-transparent-png-transparent-png-image-popular-pizza-toppings-png-860_627.png" alt="" />
                            <p>Ingredient1</p>
                        </div>
                        <div  className="Order-item-right" >
                            <span>Price : $30</span>
                        </div>
                    </div>
                </div>
                <div className="Order-Summary">
                       <h2>Order Summary</h2>
                       <div className="Summary-item" >
                           <p>Quantity</p>
                            <div className="Quantity-div">
                               <RemoveCircle /> <span>2</span><AddCircle />
                            </div>
                            
                       </div>
                       <div  className="Summary-item">
                           <p>Toppings</p>
                           <span>Ing1, Ing2</span>
                       </div>
                       <div  className="Summary-item">
                          <p>Total Price</p>
                          <span>$ 329</span>
                       </div>
                       <div  className="Summary-item">
                           <button>Checkout Now</button>
                       </div>
                </div>
            </div>
          </div>
    </div>
  )
}
