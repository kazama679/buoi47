import Bai1Interface from "../../components/interface/Bai1";

const bai1:Bai1Interface[]=[
    {
        id:1, 
        userName:"Nguyễn Xuân Quang",
        gender:"Nam",
        dateBirth:"02/07/2005", 
        address:"Hà Nội"
    },
    {
        id:2, 
        userName:"Nguyễn Xuân Quang2",
        gender:"Nam",
        dateBirth:"02/07/2005", 
        address:"Hà Nội"
    }
]

const Bai1Reducer=(state=bai1)=>{
    return state;
}
export default Bai1Reducer;