import React, { Dispatch } from "react";
import { HeaderContainer } from "./HeaderProfile.style";
import Image from "next/image";
import { LibsSVG } from "@/utils/libsSVG";

interface IHeaderContainer {
  isChatOpen: boolean;
  setIsChatOpen: Dispatch<boolean>;
}

function Headerprofile({ isChatOpen, setIsChatOpen }: IHeaderContainer) {
  return (
    <HeaderContainer>
      <div className="profile">
        <div>
          <div className="container_image">
            <Image src={LibsSVG.user} alt={"user"} />
            <div>
              <span>Chat with</span>
              <p>[Chat Name]</p>
            </div>
          </div>
          <div className="status-indicator">
            <span className="status-indicator__dot"></span>
            <span className="status-indicator__text">
              We reply immediately!
            </span>
          </div>
        </div>
      </div>
      <div className="icons">
        <Image
          src={LibsSVG.shoppe}
          alt={"shoppe"}
          style={{ marginRight: "10px" }}
        />
        <Image
          src={LibsSVG.expandedArrow}
          alt={"expandedArrow"}
          onClick={() => setIsChatOpen(!isChatOpen)}
        />
      </div>
    </HeaderContainer>
  );
}

export default Headerprofile;
