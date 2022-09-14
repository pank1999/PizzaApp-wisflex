import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import "./MyOrders.css";

export default function MyOrders() {
  const [Orders, setOrders] = useState([]);
  const User = useSelector((state: any) => state.user.user);
  console.log(User.user[0].id);
  useEffect(() => {
    const getOrders = async () => {
      const res = await axios.get(
        `http://localhost:3001/api/order/${1}`
      );
      console.log(res);
      setOrders(res.data);
    };
    getOrders();
  }, [User]);
  return (
    <div className="MyOrders">
      <Header />
      <div className="O-Container">
        <div className="O-title">
          <h1>My Orders</h1>
          <p>Hii Pankaj Pandey</p>
        </div>
        <div className="OrdersTable">
          <table>
            <tr>
              <th>Order ID</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {Orders.map((order:any) => (
              <tr>
                <td>{order.id}</td>
                <td>{order.Price}</td>
                <td>{order.Quantity}</td>
                <td>Delivered</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
            ))}
            <tr>
              <td>2</td>
              <td>147</td>
              <td>2</td>
              <td>Delivered</td>
              <td>
                <button>View</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
