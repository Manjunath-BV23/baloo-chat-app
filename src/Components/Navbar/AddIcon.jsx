import { borderRadius } from "@mui/system"
import { Link } from "react-router-dom"

export const AddIcon = () => {
    return(
        <div style={{
            width: "70px",
            height:"70px",
            borderRadius: "35px",
            display:"flex",
            flexFlow:"y",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor: "blue",
            position: "fixed",
            bottom: "100px",
            marginLeft: "75%",
            right: "0",
            zIndex:"2"
        }}>
            <Link to="/adduser">
            <svg width="28"  height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.1667" cy="9.33334" r="4.66667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M18.928 23.8549C18.5292 22.3665 17.6503 21.0513 16.4278 20.1132C15.2053 19.1751 13.7074 18.6667 12.1665 18.6667C10.6256 18.6667 9.12769 19.1751 7.90518 20.1132C6.68267 21.0513 5.80385 22.3665 5.40502 23.8549" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M22.6665 11.6667L22.6665 18.6667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M26.1665 15.1667L19.1665 15.1667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            </Link>
        {/* <img src="../Icons/User_add" alt="icon" /> */}
      </div>
    )
}