import {
  Background1,
  BackgroundColor,
  MainTitleCss,
  PaddingDivSmall,
  RowFooter,
  RowMain,
} from "./css/default";
import React, { useState, useEffect, useRef } from "react";
import CircleButton from "./components/atoms/CircleButton";
import Hobbies from "./components/organisms/Hobbies";
import AboutMe from "./components/organisms/AboutMe";
import { TodoContainer } from "./components/pages/TodoPresenter/feature";
import Title from "./components/atoms/Title";
import OptionCard from "./components/molecules/OptionCard";
import { Grid } from "@mui/material";
import Workes from "./components/organisms/Workes";

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

  return (
    <BackgroundColor>
      <Background1>
        <MainTitleCss>
          Welcome to
          <br /> Sota <br /> Self Introduction Page{" "}
        </MainTitleCss>
        <CircleButton handleButtonClick={scrollToContainer}></CircleButton>{" "}
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
                <Grid item xs={3}>
                  <OptionCard
                    cardTitle={"About Me"}
                    cardText={`
                    Let me introduce myself, I am 27 years old. By the way, I like takoyaki.
                       `}
                    buttonText={"Go to details"}
                    onClick={() => changeContentIndex(0)}
                    imgSrc={"./../../../asset/AboutMe.jpg"}
                  />
                </Grid>
                <Grid item xs={3}>
                  <OptionCard
                    cardTitle={"Workes"}
                    cardText={`
                    I present illustrator/photoshop works , as well as a few game pieces.
                    `}
                    buttonText={"Go to details"}
                    onClick={() => changeContentIndex(1)}
                    imgSrc={"./../../../asset/Workes.jpg"}
                  />
                </Grid>
                <Grid item xs={3}>
                  <OptionCard
                    cardTitle={"Hobbies"}
                    cardText={`
                    I have many hobbies, but I will introduce only two.
                      `}
                    buttonText={"Go to details"}
                    onClick={() => changeContentIndex(2)}
                    imgSrc={"./../../../asset/Hobbies.jpg"}
                  />
                </Grid>
                <Grid item xs={3}>
                  <PaddingDivSmall />
                  <img
                    src="./../../../asset/SotaHiguchi.svg"
                    style={{ transform: "translate(10%, 5%)" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </RowFooter>
      </div>
    </BackgroundColor>
  );
}
