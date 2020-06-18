import { createStore, combineReducers } from "redux";
import addServiceReducer from "../reducers/addServiceReducer";
import listServiceReducer from "../reducers/listServiceReducer";
import filterServiceReducer from "../reducers/filterServiceReducer";

const rootReducer = combineReducers(
    {
        addService: addServiceReducer,
        listService: listServiceReducer,
        filterService: filterServiceReducer
    }
)

const store = createStore(rootReducer)

export default store