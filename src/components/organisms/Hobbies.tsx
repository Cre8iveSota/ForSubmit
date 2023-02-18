import { Grid } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import {
  AnimationContainer,
  PaddingDiv,
  PaddingDivSmall,
} from "../../css/default";

const H1 = styled.h1`
  font-weight: bolder;
  color: palevioletred;
  margin-bottom: 0px;
  margin-top: 0;
`;

const H1SM = styled.div`
  color: palevioletred;
  margin-bottom: 0px;
  margin-top: 0;
  text-align: center;
`;

const H1Impact = styled.h1`
  font-size: 6rem;
  color: palevioletred;
  font-weight: bolder;
`;

const H2DetailCustom = styled.h2`
  font-size: 1.5rem;
  color: palevioletred;
  font-weight: bolder;
  margin-bottom: 0px;
  margin-top: 0;
`;
const H3 = styled.h3`
  font-size: 1.3rem;
  color: palevioletred;
  font-weight: bolder;
  padding-top: 0px;
  margin-top: 0;
  margin-bottom: 0px;
`;

const H3SpecialOrder = styled.h3`
  font-size: 1rem;
  color: palevioletred;
  font-weight: bolder;
  padding-top: 0px;
  margin-top: 0;
  margin-bottom: 10px;
`;

const H3DetailSM = styled.div`
  font-size: 0.5rem;
  color: palevioletred;
  font-weight: bolder;
  margin-top: 0px;
  display: inline-block;
`;

export default function Hobbies() {
  return (
    <AnimationContainer>
      <MediaQuery query="(max-width: 850px)">
        <Grid
          container
          spacing={0}
          style={{ transform: "translate(0%,  20%)" }}
        >
          <Grid item xs={6}>
            <br />
            <H1SM>Freesttyle Foot Ball→</H1SM>
          </Grid>
          <Grid item xs={6}>
            <video
              src="./../../../asset/portfolioFreestyle.mp4"
              autoPlay
              loop
              muted
              style={{
                height: "10vh",
                border: "0.2rem solid #000000",
                transform: "translate(0%, 0%)",
              }}
            ></video>
          </Grid>
          <Grid item xs={6} style={{ paddingTop: "0px" }}>
            <video
              src="./../../../asset/electricWorks.mp4"
              autoPlay
              loop
              muted
              style={{
                height: "10vh",
                border: "0.2rem solid #000000",
                transform: "translate(0%, 0%)",
              }}
            ></video>
          </Grid>
          <Grid item xs={6}>
            <br />

            <H1SM>← Electric Works</H1SM>
          </Grid>
          <H3DetailSM>
            Karaoke, bowling, billiards, reading, table tennis, and violin are
            also hobbies.
          </H3DetailSM>
        </Grid>
      </MediaQuery>
      <MediaQuery query="(min-width: 850px)">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <H1>Free Sttyle Foot Ball :</H1>
          </Grid>
          <Grid item xs={6}>
            <H1>Electric Works :</H1>
          </Grid>
          <Grid item xs={6} style={{ paddingTop: "0px" }}>
            <H3>
              I participated in Japanese competitions but failed to qualify in
              all of them. However, I was sometimes invited by the organizers of
              the competitions.
            </H3>
          </Grid>
          <Grid item xs={6} style={{ paddingTop: "0px" }}>
            <H3>
              I built an electronic piano using an Arudino and parts I had at
              home. Aluminum foil is stretched over the back of the keys to
              conduct electricity.
            </H3>
          </Grid>

          <Grid item xs={5}>
            <video
              src="./../../../asset/portfolioFreestyle.mp4"
              autoPlay
              loop
              muted
              style={{
                height: "20vh",
                border: "0.2rem solid #000000",
                transform: "translate(30%, 0%)",
              }}
            ></video>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={5}>
            <video
              src="./../../../asset/electricWorks.mp4"
              autoPlay
              loop
              muted
              style={{
                height: "20vh",
                border: "0.2rem solid #000000",
                transform: "translate(30%, 0%)",
              }}
            ></video>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </MediaQuery>
    </AnimationContainer>
  );
}
