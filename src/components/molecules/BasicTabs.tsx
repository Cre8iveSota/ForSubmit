import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import StandardImageList from "./StandardImageList";
import { Grid } from "@mui/material";
import StandardImageListMov from "./StandardImageListMov";

const H2Detail = styled.h2`
  font-size: 1.8rem;
  color: palevioletred;
  font-weight: bolder;
  margin-top: 0px;
  display: inline-block;
`;

const H3Detail = styled.h3`
  font-size: 1.3rem;
  color: palevioletred;
  font-weight: bolder;
  margin-top: 0px;
  display: inline-block;
`;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        Please select the tab that interests you.↓
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="illustrator / photoshop" {...a11yProps(0)} />
            <Tab label="Games" {...a11yProps(1)} />
            <Tab label="Web" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <H2Detail>illustrator/photoshop:</H2Detail>
            </Grid>
            <Grid item xs={8}>
              <H3Detail style={{ transform: "translate(-10%, 30%)" }}>
                The following pieces were created using the book as a reference.
              </H3Detail>
            </Grid>
            <StandardImageList />
            <Grid item xs={10} />
            <Grid item xs={2}>
              <H3Detail>etc..</H3Detail>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <H2Detail>Games</H2Detail>
            </Grid>
            <Grid item xs={8}>
              <H3Detail style={{ transform: "translate(-10%, 30%)" }}>
                The following pieces were created using the book as a reference.
              </H3Detail>
            </Grid>
            <StandardImageListMov />
            <Grid item xs={10} />
            <Grid item xs={2}>
              <H3Detail>etc..</H3Detail>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <H3Detail>
            This is the only page available.
            <br />
            This page was created primarily with React, Typescript, Redux, Move
            faster with intuitive React UI tools.
            <br />
            Also, this page was created in a hurry to enroll in Torrens and will
            need to be adjusted significantly.
            <br />
            <br />
            In terms of functionality, the biggest problem is that the site is
            currently not responsive, so it can only be displayed accurately on
            a limited number of devices.
            <br />
            Also, the circular button labeled "Push" needs to be adjusted as it
            only has a scrolling function.
            <br />
            <br />
            I recognize that the works in the Works tab are just lined up, which
            is an area for improvement in the future.
            <br />
            <br />
            <br />
            And thank you for checking my page.
            <br />
          </H3Detail>
        </TabPanel>
      </Box>
    </>
  );
}
