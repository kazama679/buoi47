import { Job } from "../../components/interface/index";

const list:Job[]=[
    {
        id:1,
        name:"hoc redux",
        status:false
    },
    {
        id:2,
        name:"hoc redux",
        status:false
    },
    {
        id:3,
        name:"hoc redux",
        status:false
    }
];

// khởi tạo hàm reducer
const jobReducer=(state=list,action:any)=>{
    switch (action.type) {
        case "ADD":
            return [...state];
        case "DELETE":
            // lay id
            return [...state];
        case "UPDATE":
            // lay id
            return [...state];
        default:
            return state;
    }
}
export default jobReducer;