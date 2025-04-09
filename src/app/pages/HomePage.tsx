"use client"

import React from "react";
import { ContainerChat } from "./HomePage.style";
import { ChaBot } from "../components/templates/chatBot/ChaBot";
const HomePage = () => {
  return (
    <ContainerChat>
      <div className="title">👋 Welcome to Wizybot! How can we help you today?</div>
      <ChaBot/>
    </ContainerChat>
  );
};

export default HomePage;
