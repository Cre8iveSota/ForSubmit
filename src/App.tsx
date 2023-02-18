import {
  Background1,
  Background1SM,
  BackgroundColor,
  MainTitleCss,
  MainTitleCssSM,
  PaddingDivSmall,
  RowFooter,
  RowFooterSM,
  RowMain,
  RowMainSM,
} from "./css/default";
import React, { useState, useEffect, useRef } from "react";
import CircleButton from "./components/atoms/CircleButton";
import Hobbies from "./components/organisms/Hobbies";
import AboutMe from "./components/organisms/AboutMe";
import { TodoContainer } from "./components/pages/TodoPresenter/feature";
import Title from "./components/atoms/Title";
import OptionCard from "./components/molecules/OptionCard";
import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Workes from "./components/organisms/Workes";
import MediaQuery from "react-responsive";
import TextAnimation from "./components/atoms/TextAnimation";
import styled from "styled-components";
import { gsap } from "gsap";

interface IProps {
  id: string;
}

interface IState {
  name: string;
  title: string;
}

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);

  const changeContentIndex = (index: number) => {
    setContentIndex(index);
  };
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBackgroundImage = () => {
    // if (window.innerWidth <= 100) {
    //   return "./../../../asset/MainBoard_small.jpg";
    // } else {
    //   return "./../../../asset/MainBoard.jpg";
    // }

    return "./../../../asset/MainBoard.jpg";

    // return scrollPosition > 20
    //   ? "./../../../asset/MainBoard.jpg"
    //   : "../../../../asset/FrontView.jpg";
  };

  const getBackgroundStyle = () => {
    return {
      backgroundImage: `url(${getBackgroundImage()})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
  };

  const [title, setTitle] = useState("Sota Welcome");

  const changeTitle = (title: string) => {
    setTitle(title);
  };

  const scrollToContainer = () => {
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const theme = createTheme({
    components: {
      //`MuiCssBaseline`になっているが`CssBaseLine`ても同様に作用した
      MuiCssBaseline: {
        styleOverrides: `
            ::-webkit-scrollbar{
                width: 15px;
            },
            ::-webkit-scrollbar-thumb {
                background-color: palevioletred;
                border-radius: 10px;
            }
            ::-webkit-scrollbar-track {
              background-color: black;
            }
            `,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MediaQuery query="(max-width: 850px)">
          <BackgroundColor>
            <Background1SM>
              <MainTitleCssSM>
                <section id="souseki">
                  <TextAnimation section="souseki">
                    Welcome to
                    <br /> Sota <br /> Self Introduction Page
                  </TextAnimation>
                </section>
              </MainTitleCssSM>
            </Background1SM>
            <Grid container spacing={2}>
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                <RowMainSM>
                  <Title countNum={contentIndex} />
                  {contentIndex === 0 && <AboutMe />}
                  {contentIndex === 1 && <Workes />}
                  {contentIndex === 2 && <Hobbies />}
                </RowMainSM>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <RowFooterSM>
              <Grid container spacing={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                  <Grid
                    container
                    spacing={2}
                    // style={{ transform: "translate(0%, -35)" }}
                  >
                    <Grid item xs={4}>
                      <OptionCard
                        cardTitle={"About Me"}
                        cardText={` Let me
 introduce
 myself.`}
                        buttonText={"Click"}
                        onClick={() => changeContentIndex(0)}
                        imgSrc={"./../../../asset/AboutMe.jpg"}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <OptionCard
                        cardTitle={"Workes"}
                        cardText={` illustrator, photoshop and simple games.`}
                        buttonText={"Click"}
                        onClick={() => changeContentIndex(1)}
                        imgSrc={"./../../../asset/Workes.jpg"}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <OptionCard
                        cardTitle={"Hobbies"}
                        cardText={` freestyle foot ball and electric workes.`}
                        buttonText={"Click"}
                        onClick={() => changeContentIndex(2)}
                        imgSrc={"./../../../asset/Hobbies.jpg"}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={2}
                  style={{
                    backgroundColor: "#ffffff",
                    height: "100px",
                    transform: "translate(0%, 50%)",
                  }}
                >
                  <Grid
                    item
                    xs={4}
                    style={{
                      marginRight: "0%",
                      transform: "translate(10%, -10%)",
                    }}
                  >
                    <h3
                      style={{
                        textAlign: "center",
                      }}
                    >
                      Thank<br></br>You
                    </h3>
                  </Grid>
                  <Grid item xs={4}>
                    <img
                      src="./../../../asset/SotaHiguchi.svg"
                      style={{
                        height: "80px",
                        transform: "translate(20%,-8%)",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      transform: "translate(0%, -10%)",
                    }}
                  >
                    <h3
                      style={{
                        textAlign: "center",
                      }}
                    >
                      For<br></br> Coming
                    </h3>
                  </Grid>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "white",
                      textAlign: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                      transform: "translate(15% , 0%)",
                    }}
                  >
                    © 2023 Sota Higuchi
                  </div>
                </Grid>
              </Grid>
            </RowFooterSM>
          </BackgroundColor>
        </MediaQuery>
        <MediaQuery query="(min-width: 850px)">
          <BackgroundColor>
            <Background1>
              <MainTitleCss>
                <section id="souseki">
                  <TextAnimation section="souseki">
                    Welcome to
                    <br /> Sota <br /> Self Introduction Page
                  </TextAnimation>
                </section>
              </MainTitleCss>
              <Grid container spacing={2}>
                <Grid style={{ margin: "5% auto 0% auto" }}>
                  <CircleButton
                    handleButtonClick={scrollToContainer}
                  ></CircleButton>
                </Grid>
              </Grid>
            </Background1>
            <div ref={containerRef} style={getBackgroundStyle()}>
              <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                  <RowMain>
                    <Title countNum={contentIndex} />
                    {contentIndex === 0 && <AboutMe />}
                    {contentIndex === 1 && <Workes />}
                    {contentIndex === 2 && <Hobbies />}
                  </RowMain>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
              <RowFooter>
                <Grid container spacing={2}>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={8}>
                    <Grid
                      container
                      spacing={2}
                      style={{ transform: "translate(0%, -35)" }}
                    >
                      <Grid item xs={4}>
                        <OptionCard
                          cardTitle={"About Me"}
                          cardText={` Let me introduce myself,
  I am 27 years old. By the
  way, I like takoyaki.`}
                          buttonText={"Go to details"}
                          onClick={() => changeContentIndex(0)}
                          imgSrc={"./../../../asset/AboutMe.jpg"}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <OptionCard
                          cardTitle={"Workes"}
                          cardText={`  I illustrator and photoshop
  works and simple games
  made as a hobby.`}
                          buttonText={"Go to details"}
                          onClick={() => changeContentIndex(1)}
                          imgSrc={"./../../../asset/Workes.jpg"}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <OptionCard
                          cardTitle={"Hobbies"}
                          cardText={` I have many hobbies,
  but I will introduce
  only two.`}
                          buttonText={"Go to details"}
                          onClick={() => changeContentIndex(2)}
                          imgSrc={"./../../../asset/Hobbies.jpg"}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        style={{
                          transform: "translate(20%, 55%)",
                          height: "150px",
                        }}
                      >
                        © 2023 Sota Higuchi
                      </Grid>
                      <Grid item xs={4}>
                        <PaddingDivSmall />
                        <img
                          src="./../../../asset/SotaHiguchi.svg"
                          style={{
                            transform: "translate(55%, 5%)",
                            height: "150px",
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        style={{
                          transform: "translate(15%, 55%)",
                          height: "150px",
                        }}
                      >
                        Thank you for visiting.
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2}></Grid>
                </Grid>
              </RowFooter>
            </div>
          </BackgroundColor>
        </MediaQuery>
      </ThemeProvider>
    </>
  );
}
