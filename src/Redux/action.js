import axios from "axios";

export const GET_FRIEND = "GET_FRIEND";

export const getFriend = (payload) => ({ type: GET_FRIEND, payload})


export const getFriendData = (id) => async (dispatch) => {
    
    const res = await axios.get(`http://localhost:8081/users/${id}`)
    dispatch(getFriend(res.data))
    
}