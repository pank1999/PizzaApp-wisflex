import axios from "axios";
import {loginStart,loginSuccess,loginFailure} from "../redux/UserRedux"

interface userLogin{
    mobileNumber:string,
    password:string
}

export const login=async (dispatch:any,user:userLogin)=>{
    dispatch(loginStart());
    try{
        const res= await axios.post("http://localhost:3001/api/user/login",user);
        dispatch(loginSuccess(res.data));
       
    }catch(error){
        dispatch(loginFailure());
    }
}