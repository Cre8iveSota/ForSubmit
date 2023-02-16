import React from "react";

interface IProps {
  image: string;
  style: any;
}

const BackgroundImage = (props: IProps) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    ...props.style,
  };

  return <div style={backgroundImageStyle} />;
};

export default BackgroundImage;
