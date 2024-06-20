const text:number='Rikkei Academy';
const Bai6=(state=text, action:any)=>{
    switch (action.type) {
        case "RikkeiSoft":
            return 'Rikkei Soft';
        default:
            return state
    }
}
export default Bai6;