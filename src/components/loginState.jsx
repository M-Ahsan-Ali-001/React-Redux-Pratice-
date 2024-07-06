import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { login,logout,setId} from "../features/loginState/loginState";

export default function LoginState(){

    const loginValue = useSelector((state)=>state.loginState.loginStatis)
    const id = useSelector((state)=>state.loginState.id)
    const dispatch = useDispatch()
    return(
        <div>
            <h1>loginState:{loginValue}</h1>
            
            <h1>id:{id}</h1>
            <input id="id-box"/>

            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <button onClick={()=>dispatch( login())}>in</button>
                
                <button onClick={()=>dispatch(logout())}>out</button>
                <button onClick={()=>{
                    const value =document.getElementById('id-box');
                    dispatch(setId("#"+value.value))
                }}>set</button>


            </div>
        </div>
    )
}