import Bai3Interface from "../../components/interface/Bai3";

const bai3:Bai3Interface[]=[
    {
        id:1, 
        productName:'bưởi', 
        price:50.000, 
        quantity:100
    },
    {
        id:2, 
        productName:'cam', 
        price:60.000, 
        quantity:23
    }
]

const Bai3Reducer=(state=bai3)=>{
    return state;
}
export default Bai3Reducer;