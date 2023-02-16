import React from "react";
import { TitleCss } from "../../css/default";

interface IProps {
  countNum?: number;
}

function Title(props: IProps) {
  let displayName = "";
  if (props.countNum == 0) displayName = "About Me";
  if (props.countNum === 1) displayName = "Workes";
  if (props.countNum === 2) displayName = "Hobbies";
  return <TitleCss>{displayName}</TitleCss>;
}

export default Title;
