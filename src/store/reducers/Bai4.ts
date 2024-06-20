const bai4:number=0;
const Bai4=(state=bai4, action:any)=>{
    switch (action.type) {
        case "tang":
            return state+1;
        case "giam":
            return state-1;
        default:
            return state
    }
}
export default Bai4;