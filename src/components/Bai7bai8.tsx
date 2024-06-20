import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Bai7bai8() {
    const colorBai7bai8:any=useSelector(state=>{
        return state
    })
    console.log("bai8",colorBai7bai8);
    const dispatch=useDispatch();
    const handleChange=()=>{
        dispatch({
            type:"changeColor"
        })
    }
  return (
    <div style={{background:`${colorBai7bai8.Bai7bai8 ? "black" : "white"}`}}>
        <input type="checkbox" onChange={handleChange}/>
        <p style={{color:`${colorBai7bai8.Bai7bai8 ? "white" : "black"}`}}>
            {colorBai7bai8.Bai7bai8 ? "Tối" : "Sáng"}
        </p>
    </div>
  )
}
