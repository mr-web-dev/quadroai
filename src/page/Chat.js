import React from 'react'
import "../App.css"
import Sidebar from '../chat/Sidebar';
import ChatWindow from '../chat/ChatWindow';

export default function Chat() {
  return (
    <>

      {/* sidebar start */}
      <Sidebar/>
      {/* sidebar end */}
      
      {/* chat start */}
      <ChatWindow/>
      {/* chat end */}

    </>
  );
};