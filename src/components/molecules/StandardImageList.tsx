import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 1200, height: 200 }} cols={7} rowHeight={164}>
      {videoData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const videoData = [
  {
    img: "./../../../../asset/bumyself.jpg",
    title: "Breakfast",
  },
  {
    img: "./../../../../asset/clothes.jpg",
    title: "Breakfast",
  },
  {
    img: "./../../../../asset/fireworks.jpg",
    title: "Burger",
  },
  {
    img: "./../../../../asset/fish.jpg",
    title: "Camera",
  },
  {
    img: "./../../../../asset/mountain.jpg",
    title: "Coffee",
  },
  {
    img: "./../../../../asset/reverse.jpg",
    title: "Hats",
  },
  {
    img: "./../../../../asset/surf.jpg",
    title: "Honey",
  },
];
