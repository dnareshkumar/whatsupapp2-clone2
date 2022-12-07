import React,{useEffect, useState} from "react";
import { Avatar,IconButton } from '@material-ui/core';
import "./Chat.css";
import { MoreVert, SearchOutlined, AttachFile } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat  () {
    const [input, setInput] = useState ("");

    const [seed, setSeed] = useState("");

  useEffect(()=> {
    setSeed (Math.floor(Math.random()*5000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed  >>>> ", input);
     setInput ('');
  };

 
  return (
    <div className="chat">
      <div className="chat_header">
      <Avatar  src={`http://avatars.dicebear.com/api/human/${seed}.svg`}/> 
      <div className="chat_headerInfo">
        <h3>Room Name</h3>
        <p>Last seen at...</p>
      </div>
      <div className="chat_headerRight">
        <IconButton>
            <SearchOutlined />
        </IconButton>
        <IconButton>
            <AttachFile />
        </IconButton>
        <IconButton>
            <MoreVert />
        </IconButton>

      </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_receiver"}`}>
        
        <span className="chat_name">Naresh</span>
        Hey Guys
        <span className="chat_timestamp">11.21 AM</span>
        </p>
        
      
    </div>
    <div className="chat_footer">
      <InsertEmoticonIcon  />
    <form>
        <input value={input} onChange = {e => setInput (e.target.value)} placeholder = "Type a message " type = "text"  />
        <button onClick= {sendMessage} type="submit">Send a message</button>
    </form>
      <MicIcon  />
    </div>
    </div>
  );
}

export default Chat;

