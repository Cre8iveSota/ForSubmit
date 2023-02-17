import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import QuiltedImageList from "./QuiltedImageList";
import { Grid } from "@mui/material";
import StandardImageListMov from "./StandardImageListMov";
import MediaQuery from "react-responsive";

const H2Detail = styled.h2`
  font-size: 1.8rem;
  color: palevioletred;
  font-weight: bolder;
  margin-top: 0px;
  margin-bottom: 0px;
  display: inline-block;
  transform: translate(0%, -10%);
`;

const H3Detail = styled.h3`
  font-size: 1.3rem;
  color: palevioletred;
  font-weight: bolder;
  margin-top: 0px;
  display: inline-block;
`;

const H3DetailSM = styled.div`
  font-size: 0.5rem;
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
      <MediaQuery query="(max-width: 850px)">
        <Box sx={{ width: "100%", color: "white" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label={`Design`}
                {...a11yProps(0)}
                style={{
                  fontWeight: "bolder",
                  fontSize: "0.3rem",
                  color: "#0084EA",
                }}
              />
              <Tab
                label="Games"
                {...a11yProps(1)}
                style={{
                  fontWeight: "bolder",
                  fontSize: "0.3rem",
                  color: "#0084EA",
                }}
              />
              <Tab
                label="Web"
                {...a11yProps(2)}
                style={{
                  fontWeight: "bolder",
                  fontSize: "0.3rem",
                  color: "#0084EA",
                }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <QuiltedImageList />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <StandardImageListMov />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <H3DetailSM>
              This is the only page available.
              <br />
              This page was created primarily with React, Typescript, Redux,
              Move faster with intuitive React UI tools.
              <br />
              Also, this page was created in a hurry to enroll in Torrens and
              will need to be adjusted significantly.
              <br />
              <br />
              And thank you for checking my page.
              <br />
            </H3DetailSM>
          </TabPanel>
        </Box>
      </MediaQuery>
      <MediaQuery query="(min-width: 850px)">
        <Box sx={{ width: "100%" }}>
          Please select the tab that interests you.↓
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="illustrator / photoshop"
                {...a11yProps(0)}
                style={{
                  fontWeight: "bolder",
                  fontSize: "1.3rem",
                  color: "#0084EA",
                }}
              />
              <Tab
                label="Games"
                {...a11yProps(1)}
                style={{
                  fontWeight: "bolder",
                  fontSize: "1.3rem",
                  color: "#0084EA",
                }}
              />
              <Tab
                label="Web"
                {...a11yProps(2)}
                style={{
                  fontWeight: "bolder",
                  fontSize: "1.3rem",
                  color: "#0084EA",
                }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <QuiltedImageList />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <StandardImageListMov />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <H3Detail>
              This is the only page available.
              <br />
              This page was created primarily with React, Typescript, Redux,
              Move faster with intuitive React UI tools.
              <br />
              Also, this page was created in a hurry to enroll in Torrens and
              will need to be adjusted significantly.
              <br />
              <br />
              And thank you for checking my page.
              <br />
            </H3Detail>
          </TabPanel>
        </Box>
      </MediaQuery>
    </>
  );
}
