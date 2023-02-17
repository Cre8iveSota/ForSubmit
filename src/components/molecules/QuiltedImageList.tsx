import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import MediaQuery from "react-responsive";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <>
      <MediaQuery query="(max-width: 850px)">
        <ImageList
          sx={{ width: 260, height: 170 }}
          variant="quilted"
          cols={5}
          rowHeight={70}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 10, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </MediaQuery>
      <MediaQuery query="(min-width: 850px)">
        <ImageList
          sx={{ width: 900, height: 220 }}
          variant="quilted"
          cols={5}
          rowHeight={250}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 10, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </MediaQuery>
    </>
  );
}

const itemData = [
  {
    img: "./../../../../asset/bumyself.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "./../../../../asset/clothes.jpg",
    title: "Breakfast",
    rows: 1,
    cols: 1,
  },
  {
    img: "./../../../../asset/flower.jpg",
    title: "Hats",
    rows: 1,
    cols: 1,
  },
  {
    img: "./../../../../asset/fireworks.jpg",
    title: "Burger",
    rows: 1,
    cols: 1,
  },
  {
    img: "./../../../../asset/fish.jpg",
    title: "Camera",
    rows: 1,
    cols: 1,
  },
  {
    img: "./../../../../asset/surf.jpg",
    title: "Honey",
    rows: 1,
    cols: 2,
  },
  {
    img: "./../../../../asset/mountain.jpg",
    title: "Coffee",
    rows: 1,
    cols: 1,
  },
  {
    img: "./../../../../asset/reverse.jpg",
    title: "Hats",
    rows: 1,
    cols: 1,
  },
  {
    img: "./../../../../asset/cafe.jpg",
    title: "Hats",
    rows: 1,
    cols: 1,
  },
  {
    img: "./../../../../asset/cake.jpg",
    title: "Hats",
    rows: 1,
    cols: 1,
  },
  {
    img: "./../../../../asset/marry.jpg",
    title: "Hats",
    rows: 1,
    cols: 1,
  },
  {
    img: "./../../../../asset/bintage.jpg",
    title: "Hats",
    rows: 1,
    cols: 2,
  },
  {
    img: "./../../../../asset/mother.jpg",
    title: "Hats",
    rows: 1,
    cols: 1,
  },
  {
    img: "./../../../../asset/pie.jpg",
    title: "Hats",
    rows: 1,
    cols: 1,
  },
  {
    img: "./../../../../asset/poster.jpg",
    title: "Hats",
    rows: 1,
    cols: 1,
  },
];
