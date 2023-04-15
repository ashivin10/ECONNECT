import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import axios from "axios";
import { useState, useEffect } from "react";
// import Pusher from "pusher-js";
import './Chatpage.css'

import Navbar from "./Navbar";


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
function Chatpage() {
    const [roomid, setRoomid] = useState({ "roomid":"642c721cdaeaa06385f8c5c4"});
    const [messages, setmessages] = useState([]);
  

  useEffect(() => {
    axios.get(url).then((response) => {
      setmessages(response.data);
    });
  }, []);

//   useEffect(() => {
//     const pusher = new Pusher('0e8079d6564aa16d7577', {
//         cluster: 'ap2'
//       });

//     const channel = pusher.subscribe("messages");
//     channel.bind("inserted", function (newmessages) {
//       setmessages([...messages, newmessages]);
//       console.log(messages)
//     });

//     return () => {
//       channel.unbind_all();
//       channel.unsubscribe();
//     };
//   }, [messages]);
  return (
    <div className='Chatpage'>
    <div className="Chatpage_body">
        <Navbar />
        <Sidebar />
        <Chat messages={messages}/>

    </div>
       
        
    </div>
  )
}

export default Chatpage