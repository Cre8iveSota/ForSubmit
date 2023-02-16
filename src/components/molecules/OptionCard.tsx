import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface IProps {
  cardTitle: string;
  cardText: string;
  buttonText: string;
  onClick: any;
  imgSrc: string;
}

function OptionCard(props: IProps) {
  const [contentIndex, setContentIndex] = useState(0);

  return (
    <>
      <Card
        sx={{ maxWidth: 340, maxHeight: 300 }}
        style={{ border: "0.07rem solid #000000", borderRadius: "5%" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.imgSrc}
            alt="test"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: "center" }}
            >
              {props.cardTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.cardText}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => props.onClick()}
            style={{
              display: "block",
              margin: "0 auto",
              transform: "translate(0%, -60%)",
            }}
          >
            {props.buttonText}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default OptionCard;
