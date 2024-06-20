import { combineReducers, createStore } from "redux";
import countReducer from "./reducers/countReducer";
import jobReducer from "./reducers/todoList";
import Bai1 from "./reducers/Bai1";
import Bai3 from "./reducers/Bai3";
import Bai4 from "./reducers/Bai4";
import Bai5 from "./reducers/Bai5";
import Bai6 from "./reducers/Bai6";
import Bai7bai8 from "./reducers/Bai7bai8";
import Bai9 from "./reducers/Bai9";

const rootReducer=combineReducers({
    countReducer,
    jobReducer,
    Bai1,
    Bai3,
    Bai4,
    Bai5,
    Bai6,
    Bai7bai8,
    Bai9,
});
const store = createStore(rootReducer);
export default store;