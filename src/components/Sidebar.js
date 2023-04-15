import React from 'react'
import "./Sidebar.css"
import { Avatar,IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SidebarChat from './SidebarChat';
import { purple } from "@mui/material/colors";
function sidebar() {
  const user_name = localStorage.getItem("user");

  return (
    <>
      <div className="sidebar">
        <div className="header">
          <div className="avatar">
            <Avatar />
            <h3>{user_name}</h3>
          </div>
          <div className="left_header">
            <IconButton>
              <VideoCallIcon />
            </IconButton>
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar_search">
          <div className="sidebar_searchcontainer">
            <SearchOutlinedIcon sx={{ color: purple[800] }} />
            <input className="searchbox" type="text" placeholder="search" />
          </div>
        </div>
        <div className="sidebar_chat">
          <SidebarChat />
          <SidebarChat />                  
        </div>
      </div>
    </>
  );
}

export default sidebar