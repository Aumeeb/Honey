import { combineReducers } from "redux";
import { HomeInfo } from './homeReducer'


 const  rootReducer =  combineReducers({
    home:HomeInfo
})

export  default rootReducer;





