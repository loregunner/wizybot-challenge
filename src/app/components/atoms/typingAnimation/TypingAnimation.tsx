import React from 'react'

import animation from "../../../../images/animation.gif";
import Image from 'next/image'
import { BotMessageBubble } from '../../molecules/messagesList/MessageList.style';

const TypingAnimation = () => {
  return (
    <BotMessageBubble msg={"exist"}>
    <div className="typing">
      <Image
        src={animation}
        alt="typing"
        width={50}
        height={50}
        unoptimized
      />
    </div>
  </BotMessageBubble>
  )
}

export default TypingAnimation