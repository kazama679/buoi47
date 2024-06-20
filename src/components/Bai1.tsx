import { useSelector } from "react-redux"

export default function Bai1() {
    const stateBai1 = useSelector((state:any)=>{
        return state
    })
  return (
    <div>
      {stateBai1.Bai1.map((item:any)=>{
        return <li key={item.id}>
          <br />Id: {item.id}
          <br />Họ và tên: {item.userName}
          <br />Giới tính: {item.gender} 
          <br />Ngày sinh: {item.dateBirth}
          <br />Địa chỉ: {item.address}
        </li>
      })}
    </div>
  )
}