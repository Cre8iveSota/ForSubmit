import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { AnimationContainer, MaxFrameCss } from "../../css/default";
import BasicTabs from "../molecules/BasicTabs";

interface IProps {
  title?: string;
}

const H1 = styled.h1`
  font-size: 5 rem;
  font-weight: bolder;
  color: palevioletred;
  display: inline-block;
  margin: 0%;
`;

const H1Impact = styled.h1`
  font-size: 3rem;
  color: palevioletred;
  font-weight: bolder;
  display: inline-block;
  margin-bottom: 0%;
`;

const H2Detail = styled.h2`
  font-size: 1.8rem;
  color: palevioletred;
  font-weight: bolder;
  margin-top: 0px;
  display: inline-block;
`;

class Workes extends React.Component<IProps, {}> {
  render() {
    return (
      <AnimationContainer>
        <BasicTabs />
      </AnimationContainer>
    );
  }
}

export default Workes;
