import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header/Header"
import "../Register/Register.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

export default function Login() {


    interface UserLogData{
          mobileNumber:string;
          password:string;
    }
    const [UserData,setUserData]=useState<UserLogData>({
            mobileNumber:"",
            password:""
    });

    const dispatch=useDispatch();

    const handleChange=(e:any)=>{
        setUserData({
           ...UserData,[e.target.name]:e.target.value
        })
    }
    let navigate=useNavigate();
    const handleSubmit=()=>{
          login(dispatch,UserData);
         
          navigate("/Home");
          console.log(UserData);
    }
  return ( 
    <div className="Register" >
        <Header />
        <div className="R_Container" >
              <h1>Login</h1>
              <div className="item">
                   <input type="text"  value={UserData.mobileNumber}  name="mobileNumber" onChange={handleChange} placeholder="Mobile Number" />
              </div>
              <div className="item">
                   <input type="password"  value={UserData.password}  name="password" onChange={handleChange} placeholder="password" />
              </div>
              <button className="R_Button"  onClick={handleSubmit} >Submit</button>
              <div style={{"marginTop":"50px"}} >
                  
                  <p>Don't have an account ? <Link to="/register" >Register</Link> </p>
              </div>
        </div>
    </div>
  )
}
