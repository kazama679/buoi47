import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Bai5() {
    const countState:any= useSelector(state=>{
        return state
    })
    console.log(111111111,countState);
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch({
            type: "themSo"
        })
    }
  return (
    <div>
        <p>[{countState.Bai5}]</p>
        <button onClick={handleClick}>số ngẫu nhiên</button>
    </div>
  )
}