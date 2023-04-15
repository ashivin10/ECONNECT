import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@mui/material'
function SidebarChat() {
  return (
    <div className='SidebarChat'>
        <Avatar             src="https://contentstatic.techgig.com/photo/80158672/top-4-web-development-trends-in-2021.jpg?119426"
/>
        <div className="Chat_info">
            <h3>WEB DEVELOPMENT</h3>
            <p>Instrctor : XXX , IIT Madras</p>
        </div>
    </div>
  )
}

export default SidebarChat