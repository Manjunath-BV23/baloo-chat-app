import { friendReducer } from "./reducer";
import { applyMiddleware, createStore, } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    friend: friendReducer,
})

const loggerMiddleware = (store)=>(next)=>(action) =>{
    console.log("action: ", action)
    if(typeof action == "function"){
        return action(store.dispatch)
    }
    next(action);
}

export const store = createStore (
    rootReducer,
    applyMiddleware(thunk)
    // compose(applyMiddleware(thunk), window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())
    
    
)

console.log("initial",store.getState());