/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { Dispatch, useState } from "react";
import { InputContainer } from "./InputText.style";
import Image from "next/image";
import { LibsSVG } from "@/utils/libsSVG";

interface IInputText{
  setMessages: Dispatch<any>;
  setIsTyping: Dispatch<boolean>;
}

const InputText = ({ setMessages, setIsTyping }: IInputText) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
  
    const now = new Date();
    const userMessage = { text: input, sender: "user", timestamp: now };
    setMessages((prev: any) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
  
    setTimeout(() => {
      setIsTyping(false);
  
      const normalizedInput = input.trim().toLowerCase();
  
      const botMessage = {
        text:
          normalizedInput === "i want product recommendations"
            ? "I want product recommendations"
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        sender: "bot",
        timestamp: new Date(),
      };
  
      setMessages((prev: any) => [...prev, botMessage]);
    }, 1500);
  };
  return (
    <InputContainer>
      <Image src={LibsSVG.happy} alt="happy" style={{ width: "20px" }} />
      <input
        type="text"
        placeholder="Write a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend}>
        <Image src={LibsSVG.send} alt={"send"} />
      </button>
    </InputContainer>
  );
};

export default InputText;
