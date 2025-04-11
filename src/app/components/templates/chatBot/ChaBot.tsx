import React, { useState } from "react";
import { ButtonInitial } from "../../atoms/buttonInitial/ButtonInitial";
import ChatWindow from "../../organisms/chatWindow/ChatWindow";

export const ChaBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {isChatOpen
        ? <ChatWindow isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen}/>
        : <ButtonInitial isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
      }
    </>
  );
};
