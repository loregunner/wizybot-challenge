import React, { Dispatch } from "react";
import { ToggleButton } from "./ButtonInitial.style";

interface IButton {
  isChatOpen: boolean;
  setIsChatOpen: Dispatch<boolean>;
}

export const ButtonInitial = ({isChatOpen, setIsChatOpen}: IButton) => {
  return (
    <ToggleButton onClick={() => setIsChatOpen(!isChatOpen)}>💬</ToggleButton>
  );
};
