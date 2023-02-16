import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function StandardImageListMov() {
  return (
    <ImageList sx={{ width: 1200, height: 200 }} cols={7} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <video
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            autoPlay
            loop
            muted
            style={{
              height: "20vh",
              border: "0.2rem solid #000000",
              transform: "rotateZ(45deg), translate(30%, 0%)",
            }}
          ></video>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "./../../../../asset/apple.mp4",
    title: "Breakfast",
  },
  {
    img: "./../../../../asset/block.mp4",
    title: "Breakfast",
  },
  {
    img: "./../../../../asset/cat.mp4",
    title: "Burger",
  },
  {
    img: "./../../../../asset/clound.mp4",
    title: "Camera",
  },
  {
    img: "./../../../../asset/maron.mp4",
    title: "Coffee",
  },
  {
    img: "./../../../../asset/run.mp4",
    title: "Hats",
  },
];
