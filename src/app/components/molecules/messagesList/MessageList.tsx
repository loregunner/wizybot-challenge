/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  BotMessageBubble,
  MessagesContainer,
  UserMessageBubble,
} from "./MessageList.style";
import TypingAnimation from "../../atoms/typingAnimation/TypingAnimation";
import RecommendationCarousel from "../recommendationCarrousel/RecommendationCarruousel";

interface IMessages {
  messages: any;
  isTyping: boolean;
}

const MessageList = ({ messages, isTyping }: IMessages) => {
  const formatDateTime = (date: Date) => {
    const time = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    })
      .format(date)
      .replace(",", " |");

    return `${time} | ${formattedDate}`;
  };

  return (
    <MessagesContainer>
      {messages.map((msg: any, index: number) => (
        <div key={index}>
          {msg.text === "I want product recommendations" &&
          msg.sender === "bot" ? (
            <BotMessageBubble carrousel="exist">
              <RecommendationCarousel />
            </BotMessageBubble>
          ) : msg.sender === "user" ? (
            <UserMessageBubble>
              <p>{msg.text}</p>
              <span className="timestamp">
                {formatDateTime(new Date(msg.timestamp))}
              </span>
            </UserMessageBubble>
          ) : (
            <BotMessageBubble>
              <p>{msg.text}</p>
              <span className="timestamp">
                {formatDateTime(new Date(msg.timestamp))}
              </span>
            </BotMessageBubble>
          )}
        </div>
      ))}
      {isTyping && <TypingAnimation />}
    </MessagesContainer>
  );
};

export default MessageList;
