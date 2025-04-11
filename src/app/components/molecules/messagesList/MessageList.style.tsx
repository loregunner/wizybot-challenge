import styled from "styled-components";

export interface IMsg {
  msg?: string;
  carrousel?: string;
}

export const MessagesContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1rem;
  .timestamp {
    font-weight: bold;
    color: gray;
    font-size: 0.75rem;
    margin-top: 4px;
    display: inline-block;
    font-family: 'Atlassian Sans';
  }
`;

export const SystemMessageBubble = styled.div`
  align-self: flex-start;
  background-color: #f0f0f0;
  color: #333;
  padding: 12px 16px;
  border-radius: 20px 20px 20px 0;
  max-width: 80%;
  font-size: 14px;
  line-height: 1.4;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const UserMessageBubble = styled.div`
  float: inline-end;
  background-color: #64c8d7;
  padding: 17px 16px;
  border-radius: 8px;
  width: 80%;
  font-size: 14px;
  p {
    font-size: 14px;
    margin-bottom: 0.5rem;
  }
`;

export const BotMessageBubble = styled.div<IMsg>`
  float: inline-start;
  background-color: ${(props) => (props.msg === "exist" ? "#f0f0f0" : props.carrousel === 'exist' ? "transparent" : "#f0f0f0")};
  color: #333;
  padding: ${(props) => (props.msg === "exist" || props.carrousel === "exist" ? "0px" : "25px 16px")};
  border-radius: 8px;
  width: ${(props) => (props.msg === "exist" ? "0" : props.carrousel === 'exist' ? "100%" : "80%")};
  font-size: 14px;
  p {
    font-size: 14px;
    margin-bottom: 0.5rem;
  }
  span {
    font-size: ${(props) => (props.msg === "exist" ? "0px" : "14px")};
  }
`;

export const TypingBubble = styled.div`
  align-self: flex-start;
  background-color: #f0f0f0;
  padding: 10px 14px;
  border-radius: 16px 16px 16px 0;
  max-width: 70%;
  display: flex;
  gap: 4px;

  span {
    width: 6px;
    height: 6px;
    background-color: #888;
    border-radius: 100%;
    animation: blink 1.2s infinite;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes blink {
    0%,
    80%,
    100% {
      opacity: 0.3;
      transform: scale(1);
    }
    40% {
      opacity: 1;
      transform: scale(1.3);
    }
  }
`;
