/* eslint-disable @typescript-eslint/no-redeclare */
import { TypesLibsSVG } from "./models";

import user from "../images/user.svg";
import shoppe from "../images/shoppe.svg";
import expandedArrow from "../images/expandedArrow.svg";
import happy from "../images/happy.svg";
import send from "../images/send.svg";


export const LibsSVG = {
  user,
  shoppe,
  expandedArrow,
  happy,
  send
};

export type TypesLibsSVG = keyof typeof LibsSVG;
