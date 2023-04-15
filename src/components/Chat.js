import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import React, { useState } from "react";
import axios from "axios";
import "./Chat.css";
import { purple } from "@mui/material/colors";
import Navbar from './Navbar.js'


const url ='http://localhost:8080/api/messages/sync'
const token = localStorage.getItem("token");

axios.interceptors.request.use(
    config =>{
        config.headers.authorization =`Bearer ${token}`
        return config
    },
    error=>{
        return Promise.reject(error);
    }
)
function Chat({ messages }) {
  const user_name = localStorage.getItem("user");

  const [input, setinput] = useState("");
  const [data, setData] = useState({ message: input, roomid: "642c721cdaeaa06385f8c5c4",name:"me",received:false });

  const sendMessage = async (e) => {
    // setData({ message: input, roomid: "642c721cdaeaa06385f8c5c4",name:"me",received:false });
    // console.log(data)

    e.preventDefault();
    await axios.post("http://localhost:8080/api/messages/new", { message: input, roomid: "642c721cdaeaa06385f8c5c4",name:user_name,received:false });
    setinput("");
  };
  return (
    <>
      <div className="chat">
        <Navbar/>
        <div className="chat_header">
          <Avatar  src="https://contentstatic.techgig.com/photo/80158672/top-4-web-development-trends-in-2021.jpg?119426"/>
          <div className="header_info">
            <h2>WEB DEVELOPMENT</h2>
            <p>Instrctor : XXX , IIT Madras</p>
          </div>
          <div className="header_right">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="chat_body">
          {messages.map((messages) => (
            <p
              className={`chat_message  ${
                !messages.received && "chat_reciver"
              }`}
            >
              <span className="chat_name">{messages.name}</span>
              {messages.message}
              <span className="chat_timestamp">{messages.timestamp}</span>
            </p>
          ))}

        </div>

        <div className="chat_footer">
          <IconButton>
            <InsertEmoticonIcon sx={{ color: purple[800] }} />
          </IconButton>
          <form action="">
            <input
              value={input}
              onChange={(e) => setinput(e.target.value)}
              type="text"
              placeholder="Type a Message"
            />
            <button onClick={sendMessage} type="submit">
                <SendSharpIcon sx={{ color: purple[800] }} />
            </button>
          </form>
          <IconButton>
            <MicIcon sx={{ color: purple[800] }} />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Chat;
