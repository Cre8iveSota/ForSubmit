import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { fontSize } from "@mui/system";
import React, { useState } from "react";
import MediaQuery from "react-responsive";

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
      <MediaQuery query="(max-width: 850px)">
        <Card
          sx={{ maxWidth: 100, maxHeight: 190 }}
          style={{ border: "0.07rem solid #000000", borderRadius: "5%" }}
        >
          <Grid
            container
            spacing={2}
            style={{
              justifyContent: "center",
              textAlign: "center",
              whiteSpace: "pre-wrap",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="80"
                image={props.imgSrc}
                alt="test"
                style={{
                  transform: "translate(5%, 0%)",
                }}
              />
              <CardContent>
                <Grid item xs={12}>
                  <Typography
                    gutterBottom
                    component="div"
                    style={{ textAlign: "center", fontSize: "16px" }}
                  >
                    <div
                      style={{
                        transform: "translate(10%, -30%)",
                      }}
                    >
                      {props.cardTitle}
                    </div>
                  </Typography>
                  <Typography
                    color="text.secondary"
                    style={{
                      textAlign: "center",
                      fontSize: "10px",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1 px",
                        transform: "translate(10%, -35%)",
                      }}
                    >
                      {props.cardText}
                    </div>
                  </Typography>
                </Grid>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Grid item xs={12}>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => props.onClick()}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    transform: "translate(10%, -100%)",
                    fontSize: "12 px",
                    border: "solid #3F7FBF",
                  }}
                >
                  {props.buttonText}
                </Button>
              </Grid>
            </CardActions>
          </Grid>
        </Card>
      </MediaQuery>

      <MediaQuery query="(min-width: 850px)">
        <Card
          sx={{ maxWidth: 340, maxHeight: 300 }}
          style={{ border: "0.07rem solid #000000", borderRadius: "5%" }}
        >
          <Grid
            container
            spacing={2}
            style={{
              justifyContent: "center",
              textAlign: "center",
              whiteSpace: "pre-wrap",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={props.imgSrc}
                alt="test"
              />
              <CardContent>
                <Grid item xs={12}>
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
                </Grid>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Grid item xs={12}>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => props.onClick()}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    transform: "translate(0%, -60%)",
                    border: "solid #3F7FBF",
                  }}
                >
                  {props.buttonText}
                </Button>
              </Grid>
            </CardActions>
          </Grid>
        </Card>
      </MediaQuery>
    </>
  );
}

export default OptionCard;
