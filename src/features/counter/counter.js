import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {  increment,dec,incBA } from "./counterSlice";
export default function Counter(){
  const countValue = useSelector((state)=>state.counter.value) 
  const dispatch = useDispatch()

    return(
        <div>
                           
            <h1> Counter value: </h1>
            <p>{countValue}</p>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <button onClick={()=>dispatch( increment())}>+</button>
                
                <button onClick={()=>dispatch(dec())}>-</button>
                <button onClick={()=>dispatch(incBA(30))}>+30</button>


            </div>



                            


    
        
        </div>
    )
}