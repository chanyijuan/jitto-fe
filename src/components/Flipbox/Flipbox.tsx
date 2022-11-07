import React, { useState } from "react";
// Components
import { Tabs, Tab, Grid } from "@mui/material";
import TabPanel from "../TabPanel/TabPanel";
import LoginPanel from "../TabPanel/LoginPanel/LoginPanel";
import DetailPanel from "../TabPanel/DetailPanel/DetailPanel";
import { FlipboxProps } from "./interfaces";

const Flipbox = (props: FlipboxProps) => {
  const { setIsAuth } = props
  const [value, setValue] = useState("login");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      direction="column"
      sx={{ backgroundColor: "lavender", margin: "50px", borderRadius: "10px", boxShadow: "10px" }}
    >
      <Grid
        item
        sx={{
          color: "wheat",
          backgroundColor: "rebeccapurple",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Login" value="login" />
          <Tab label="Detail" value="detail" />
        </Tabs>
      </Grid>
      <Grid item container justifyContent="center" alignItems="center">
        <TabPanel
          hidden={value !== "login"}
          children={<LoginPanel setIsAuth = {setIsAuth} />}
          value={value}
          index={"login"}
        />
        <TabPanel
          hidden={value !== "detail"}
          children={<DetailPanel />}
          value={value}
          index={"detail"}
        />
      </Grid>
    </Grid>
  );
};

export default Flipbox;
