import axios from "axios";
import { useState } from "react"
import "./AddUser.css"

export const AddUser = () => {

    const [friend, setFriend] = useState({
        name: "",
        photo:"",
        messages: [],
        lastTime: "11:30 AM"
    })

    const handleChange = (e) => {
        const{name,value} = e.target;
        setFriend({...friend,[name]:value,})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(friend.name != "" && friend.photo != ""){

            axios.post("https://baloo-json.herokuapp.com/users", friend)
        }
        else{
            alert("Please fill the both the inputs")
        }
    }
    return(
        <div className="main">
            <div className="top">
                <img className="topImg" src="https://www.menshairstyletrends.com/wp-content/uploads/2021/06/Short-fade-haircut-number-1-jelle.vissers.jpg" alt="" />
                <p className="navName">Baloo Chat App</p>
            </div>
            <div className="listDiv">
                <h1>Add New Friend</h1>
                <div className="addDiv">
                    <form onSubmit={handleSubmit} action="">
                        <input type="text" className="addInput" name="name" onChange={handleChange} placeholder="Enter Your Name"/><br />
                        <input type="url" className="addInput" name="photo" onChange={handleChange} placeholder="Paste Photo URL"/><br />
                        <input type="submit" className="submit addInput" /><br />
                    </form>
                </div>

            </div>
        </div>
    )
}