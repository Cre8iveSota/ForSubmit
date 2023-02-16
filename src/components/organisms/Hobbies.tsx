import { Grid } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { PaddingDiv, PaddingDivSmall } from "../../css/default";

const H1 = styled.h1`
  font-weight: bolder;
  color: palevioletred;
  margin-bottom: 0px;
  margin-top: 0;
`;

const H1Impact = styled.h1`
  font-size: 6rem;
  color: palevioletred;
  font-weight: bolder;
`;

const H2DetailCustom = styled.h2`
  font-size: 2rem;
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

export default function Hobbies() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <H1>Free Sttyle Foot Ball :</H1>
        </Grid>
        <Grid item xs={6}>
          <H1>Electric Works :</H1>
        </Grid>
        <Grid item xs={6} style={{ paddingTop: "0px" }}>
          <H3>
            I participated in Japanese competitions but failed to qualify in all
            of them. However, I was sometimes invited by the organizers of the
            competitions.
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
        <Grid item xs={1} />
        <Grid item xs={11}>
          <H2DetailCustom>Others: </H2DetailCustom>
          <H3>
            My hobbies include: karaoke, billiards, bowling, reading,
            skateboard, violin, board game, etc...
          </H3>
        </Grid>
      </Grid>
    </>
  );
}
