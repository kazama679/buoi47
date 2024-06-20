const bai5:number[]=[];
const Bai5=(state=bai5, action:any)=>{
    switch (action.type) {
        case "themSo":{
            const NumberRandom=(Math.floor(Math.random()*9));
            state.push(NumberRandom);
            return [...state,NumberRandom,' ,']
        }
        default:
            return [...state];
    }
}
export default Bai5;