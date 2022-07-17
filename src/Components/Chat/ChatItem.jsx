import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ChatItem.css"
import { useDispatch, useSelector } from "react-redux";
import { getFriendData } from "../../Redux/action";


export const ChatItem = (e) => {
    const [friend, setFriend] = useState({
        id : "",
        name: "",
        photo: "",
        messages: [],
        lastTime: ""

    });
    const [text, setText] = useState("");
    const [chat, setChat] = useState([])
    const [messages,setMessages] = useState([])
    const { id } = useParams();

    const dispatch = useDispatch()
    const fri = useSelector((store) => store.friend.friend);
    // console.log("FRI: ", fri)
  
    useEffect(() => {
      axios.get(`https://baloo-json.herokuapp.com/users/${id}`).then((res) => {
        setFriend({ ...res.data });
      });
      dispatch(getFriendData(id))
    }, []);

    const handleChange = (e) => {
        setText(e.target.value)
        // console.log("Target", e.target.value)
        setChat(["me", e.target.value]);
    }
 

    const handleSubmit = (e) => {
        e.preventDefault();
        setFriend({...friend, messages: [...friend.messages, chat]})
        console.log("UpFri:", friend.messages)
        updateMsg()

    }

    const updateMsg = () => {
        axios.patch(`https://baloo-json.herokuapp.com/users/${id}`, friend).then((res) => console.log("Hello"))
        console.log("Friend", friend.messages)

        dispatch(getFriendData(id))
    }

    // console.log("MSGFir: ", friend.messages)

    return(
        <div className = "main">
            Welcome to Chatting...
            <div className="top">
                <img className="topImg" src={friend.photo} alt="" />
                <h1 className="navName">
                    {friend.name}
                </h1>
            </div>
            <div className="chatDiv">
                {friend.messages.map((e,i) => (
                    <div>{e[0] == "frd" ? <div className="left">{e[1]}</div>:<div className="right">{e[1]}</div>
                        }
                    </div>
                ))}
            </div>
            <div className="formDiv">
                <form onSubmit={handleSubmit} className="form" action="">
                    <input onChange={handleChange} className="msg" type="text" placeholder="Type a message..."/>
                    <input type="submit" className="send" value = "Send"/>
                </form>

            </div>
        </div>
    )
}