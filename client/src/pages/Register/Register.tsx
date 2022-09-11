import { AddLocation } from "@mui/icons-material"
import { useState } from "react";
import Header from "../../components/Header/Header"
import "./Register.css"

export default function Register() {

    interface UserRegData{
          firstName:string;
          lastName:string;
          mobileNumber:string;
          password:string;
    }
    const [UserData,setUserData]=useState<UserRegData>({
            firstName:"",
            lastName:"",
            mobileNumber:"",
            password:""
    });

    const handleChange=(e:any)=>{
        setUserData({
           ...UserData,[e.target.name]:e.target.value
        })
    }
    const handleSubmit=()=>{
          console.log(UserData);
    }
  return ( 
    <div className="Register" >
        <Header />
        <div className="R_Container" >
              <h1>Register</h1>
              <div className="item" >
                   <input type="text"  value={UserData.firstName}  name="firstName" onChange={handleChange} placeholder="First Name" />
              </div>
              <div className="item">
                   <input type="text"  value={UserData.lastName}  name="lastName" onChange={handleChange}  placeholder="Last Name" />
              </div>
              <div className="item">
                   <input type="text"  value={UserData.mobileNumber}  name="mobileNumber" onChange={handleChange} placeholder="Mobile Number" />
              </div>
              <div className="item">
                   <input type="password"  value={UserData.password}  name="password" onChange={handleChange} placeholder="password" />
              </div>
              <button className="R_Button"  onClick={handleSubmit} >Submit</button>
        </div>
    </div>
  )
}
