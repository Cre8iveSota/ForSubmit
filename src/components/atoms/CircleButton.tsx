import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface IProps {
  handleButtonClick?: any;
}

const ButtonFrame = styled.div`
  color: white;
  padding-top: 1.8rem;
  display: inline-block; /* or block */
  text-decoration: none;

  text-align: center;
  font-size: 100%;
  margin: 2em;
  font-family: Calibri, arial, sans-serif;
`;

const ButtonTextPosition = styled.div`
  transform: translate(10%, 250%);
`;

// ボタンのスタイルを定義
const StyledButton = styled(Button)`
  :before {
    content: "↓";
    font-size: 3em;
    position: absolute;
    left: 50%;
    margin-left: -0.7em;
    border: solid 0.13em white;
    border-radius: 10em;
    width: 1.4em;
    height: 1.4em;
    line-height: 1.3em;
    border-color: pink;
    color: pink;
    transition: transform 0.5s ease-in;
  }
  :hover {
    color: pink;
    border-color: pink;
  }
  :hover:before {
    transform: rotate(720deg);
  }
`;

function CircleButton(props: IProps) {
  return (
    <ButtonFrame>
      <StyledButton onClick={props.handleButtonClick}></StyledButton>
    </ButtonFrame>
  );
}

export default CircleButton;
