import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Count() {
    const countState:any= useSelector(state=>{
        return state
    })
    const count1=useSelector((state)=>{
        return state
    })
    console.log('11111111',count1);  
    console.log('22222222',countState);
    
    const dispatch=useDispatch();
    const icrease=()=>{
        dispatch({
            type: "INCREASE"
        })
    }
    const derease=()=>{
        dispatch({
            type: "DECREASE"
        })
    }
  return (
    <div>
        <p>giá trị biến count: {countState.countReducer}</p>
        <button onClick={icrease}>tăng</button>
        <button onClick={derease}>giảm</button>
    </div>
  )
}
