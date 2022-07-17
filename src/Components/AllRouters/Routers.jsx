import { Route, Routes } from "react-router-dom"
import { ChatList } from "../Home/Home"
import { ChatItem } from "../Chat/ChatItem"
import BottomAppBar from "../Navbar/Navbar"
import { AddUser } from "../User/AddUser"

export const AllRouters = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<ChatList/>} ></Route>
            <Route path="/users/:id" exact element={<ChatItem/>}/>
            <Route path="/adduser" element={<AddUser/>} ></Route>
        </Routes>
        <BottomAppBar/>
        </>
    )
}