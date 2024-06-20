import { useSelector } from "react-redux"

export default function Bai2() {
    const stateBai1 = useSelector((state:any)=>{
        return state
    })
  return (
    <div>
        <table border={2}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Tên</td>
                    <td>Giới tính</td>
                    <td>Ngày sinh</td>
                    <td>Địa chỉ</td>
                    <td>Chức năng</td>
                </tr>
            </thead>
            <tbody>
                    {stateBai1.Bai1.map((item:any)=>{
                        return  <tr>
                                    <td>{item.id}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.dateBirth}</td>
                                    <td>{item.address}</td>
                                    <td><button>sửa</button><button>xóa</button></td>
                                </tr>
                    })}
            </tbody>
        </table>
      
    </div>
  )
}