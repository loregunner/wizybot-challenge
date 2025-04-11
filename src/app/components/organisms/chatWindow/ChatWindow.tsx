import React, { Dispatch, useState } from "react";
import { ChatContainer } from "./ChatWindow.style";
import Headerprofile from "../../molecules/headerProfile/Headerprofile";
import InputText from "../../atoms/inputText/InputText";
import MessageList from "../../molecules/messagesList/MessageList";

interface IChatwindow {
  isChatOpen: boolean;
  setIsChatOpen: Dispatch<boolean>;
}

const ChatWindow = ({ isChatOpen, setIsChatOpen }: IChatwindow) => {
  const [messages, setMessages] = useState([
    {
      text: "Hello there! Do you need any help?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  return (
    <ChatContainer>
      <Headerprofile isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
        <MessageList messages={messages} isTyping={isTyping} />
      <InputText setMessages={setMessages} setIsTyping={setIsTyping} />
      <div className="footer-container">Powered By Wizybot</div>
    </ChatContainer>
  );
};

export default ChatWindow;
