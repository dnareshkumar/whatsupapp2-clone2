import React,{useEffect, useState} from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";


function SidebarChat ({id, name, addNewChat})  {
  const [seed, setSeed] = useState("");

  useEffect(()=> {
    setSeed (Math.floor(Math.random()*5000));
  }, []);
const createChat = () => {
  const roomName = prompt("Please enter name for chat");

  if(roomName){
    //do some clever database stuff...
  }
};

  return !addNewChat ? (
    <div className="sidebar_Chat">
      <Avatar  src={`http://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="sidebarChat_info">
        <h2>{name}</h2>
        <p> Last message...</p>
      </div>
    </div>
  ):(
    <div onClick ={createChat}
      className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>

  );
}

export default SidebarChat
