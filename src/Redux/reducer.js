import { GET_FRIEND } from "./action"


const initialState = {
    friend:[]
}

export const friendReducer = (store=initialState,{type,payload}) => {
    switch(type) {
        case GET_FRIEND:
            return {
                ...store,
                friend: payload
            }
        default :
            return store    
    }
}