import styled from "styled-components";
import AboutMe from "../components/organisms/AboutMe";
import { Container, Row } from "react-bootstrap";

// Title コンポーネントの定義
export const TitleCss = styled.h1`
  font-size: 5rem;
  text-align: left;
  color: palevioletred;
  font-weight: bolder;
  margin-bottom: 0%;
`;

export const MaxFrameCss = styled.video`
  // width: 100%;
  height: 50vh;
  width: 25vw;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  background-color: black;
  border-radius: 50%; /*角丸*/
  animation: element 2s infinite;
`;

// styled.video 動画が再生されなかった場合の代替画像を準備次第追加
// background: url(../img/kv-alternative.jpg) no-repeat center/cover;

export const RowMain = styled(Row)`
  height: 600px;
  opacity: 1;
  background-position: center;
  z-index: ;
`;
export const RowFooter = styled(Row)`
  // background-color: lightgray;
  border-bottom: medium green;
  height: 330px;
  // opacity: 0.5;
  padding: 0;
`;

export const ContainerTagNoMargin = styled(Container)`
  margin: 0%;
`;

export const ContainerWithinBackGroundColor = styled(Container)`
background-color: background-color: rgba(255, 255, 128, .5);`;

export const BackGroundImgStyledDiv = styled.div`
  background-image: url(src/asset/MainBoard.jpg);
  height: 100vh;
`;

export const Background2 = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(./../asset/MainBoard.jpg);
`;

export const Background1 = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(./../asset/FrontView.jpg);
  margin: 0;
`;

export const Background = styled.div`
  height: 100vh;
  background-image: url("your-background-image-url-here");
  background-size: cover;
  background-position: center;
`;

export const BackgroundColor = styled.div`
  background-color: black;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const DivCenter = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10em;
  font-size: 15em;
`;

export const MainTitleCss = styled.h1`
  font-size: 10em;
  text-align: center;
  color: palevioletred;
  margin-top: 0;
  font-family: "Source Serif Pro", serif;
  font-weight: bolder;
  padding-top: 5%;
`;

export const PaddingDiv = styled.div`
  padding-top: 10%;
`;

export const PaddingDivSmall = styled.div`
  padding-top: 3%;
`;
