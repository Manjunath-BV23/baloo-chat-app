import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import data from "../../db.json"
import { ChatItem } from "../Chat/ChatItem"
import "./Home.css"

export const ChatList = () => {
    // console.log("Data", data.users)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://baloo-json.herokuapp.com/users").then((res) => setData(res.data))

    }, [])
    
    console.log("DATATA:", data)
    return(
        <div className="main">
        <div className="top">
            <img className="topImg" src="https://www.menshairstyletrends.com/wp-content/uploads/2021/06/Short-fade-haircut-number-1-jelle.vissers.jpg" alt="" />
            <p className="navName">Baloo Chat App</p>
        </div>
        <div className="listDiv">{
            data.map((e) => (
                <Link key={e.id} to={`users/${e.id}`} style={{
                    textDecoration:"none"
                }}>
                <div className="list">
                    <div className="imgDiv">

                    <img src={e.photo} alt="" className="userImg"/>
                    </div>
                    <div className="nameAndMsg">
                    <p className="name">{e.name}</p>
                    <p className="lastMsg">{e.messages.length > 0 ? e.messages[e.messages.length-1][1]:""}</p>

                    </div>
                    <div className="timeAndNote">
                        <p className="time">{e.lastTime}</p>
                        <div className="noti">2</div>
                    </div>
                </div>
                </Link>
            ))
        }</div>
        </div>
    )

}