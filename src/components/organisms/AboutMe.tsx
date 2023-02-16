import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { MaxFrameCss } from "../../css/default";

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
  font-size: 2rem;
  color: palevioletred;
  font-weight: bolder;
  display: inline-block;
  margin-bottom: 0%;
`;

const H2Detail = styled.h2`
  font-size: 1.3rem;
  color: palevioletred;
  font-weight: bolder;
  margin-top: 0px;
  padding-top: 0px;
  display: inline-block;
`;

class AboutMe extends React.Component<IProps, {}> {
  render() {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={3} />
          <Grid item xs={3}>
            <H1>Name :</H1>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={5}>
            <H1>Date of Birth :</H1>
          </Grid>
          <Grid item xs={2}>
            <div style={{ transform: "translate(30%, -30%)" }}>
              <img
                src="./../../asset/TopicMe.jpg"
                style={{
                  width: "130px",
                  height: "130px",
                  border: "3px solid #000000",
                  borderRadius: "50%",
                  backgroundSize: "160px 160px",
                }}
              />
            </div>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={4}>
            <H1Impact>Sota Higuchi</H1Impact>
          </Grid>
          <Grid item xs={5}>
            <H1Impact>26th October 1995</H1Impact>
          </Grid>
          <H1>Detail: </H1>
          <Grid item xs={1} />
          <Grid item xs={11}>
            <H2Detail>
              First of all, Takoyaki is my soul food. It is no exaggeration to
              say that I was born to eat Takoyaki. Two years ago, I had the
              strongest love for Takoyaki and made and ate them at least once a
              week. Please give me a call when you have a Takoyaki party. I look
              forward to working with you. Thank you.
            </H2Detail>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default AboutMe;
