import React from "react";
import MediaQuery from "react-responsive";
import { TitleCss, TitleCssSM } from "../../css/default";

interface IProps {
  countNum?: number;
}

function Title(props: IProps) {
  let displayName = "";
  if (props.countNum == 0) displayName = "About Me";
  if (props.countNum === 1) displayName = "Workes";
  if (props.countNum === 2) displayName = "Hobbies";
  return (
    <>
      <MediaQuery query="(max-width: 850px)">
        <TitleCssSM>{displayName}</TitleCssSM>
      </MediaQuery>
      <MediaQuery query="(min-width: 850px)">
        <TitleCss>{displayName}</TitleCss>
      </MediaQuery>
    </>
  );
}

export default Title;
