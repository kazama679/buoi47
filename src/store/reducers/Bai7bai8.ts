const color = false;
const Bai7bai8Reducer = (state = color, action: any) => {
    switch (action.type) {
        case 'changeColor':
            return !state;
        default:
            return state;
    }
};
export default Bai7bai8Reducer;