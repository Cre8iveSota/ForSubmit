import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";

interface IProps {
  handleButtonClick?: any;
}

// ボタンのスタイルを定義
const StyledButton = styled(Button)`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// ボタングループのスタイルを定義
const StyledButtonGroup = styled(ButtonGroup)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  opacity: 0.5;
`;

function CircleButton(props: IProps) {
  return (
    <StyledButtonGroup>
      <StyledButton onClick={props.handleButtonClick}>
        <div>Push</div>
        <div>↓</div>
      </StyledButton>
    </StyledButtonGroup>
  );
}

export default CircleButton;
