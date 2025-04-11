import styled from "styled-components";

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 5px;
  right: 20px;
  width: 20rem;
  height: 35rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
  @media (min-width: 1280px) {
    width: 25rem;
    height: 35rem;
  }

  .footer-container {
    background-color: #eff0f0d0;
    margin-top: -0.5rem;
    display: flex;
    justify-content: center;
    font-size: 12px;
    padding: 3px 0;
    color: #a9a9a9;
    text-decoration: underline;
  }
`;
