import React, { useState } from "react";
import { ButtonInitial } from "../../atoms/buttonInitial/ButtonInitial";

export const ChaBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {isChatOpen
        ? <div>acá chat</div> 
        : <ButtonInitial isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
      }
    </>
  );
};
