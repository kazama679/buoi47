import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Bai6() {
    const textBai6:any= useSelector(state=>{
        return state
    })
    console.log(111111111,textBai6);
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch({
            type: "RikkeiSoft"
        })
    }
  return (
    <div>
        <p>{textBai6.Bai6}</p>
        <button onClick={handleClick}>Thay đổi chữ</button>
    </div>
  )
}