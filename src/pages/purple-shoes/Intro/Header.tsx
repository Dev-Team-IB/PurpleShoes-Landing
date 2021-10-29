import React from "react";
import { Container, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import TitleImg from "../img/intro-title.png";
import ChannelService from "./ChannelService";

ChannelService.boot({
  "pluginKey": process.env.REACT_APP_CHANNEL_SERVICE_PLUGIN
});

// Boot channel service with user info
/*
ChannelService.boot({
  "pluginKey": "YOUR_PLUGIN_KEY", //please fill with your plugin key
  "profile": {
    "name": "YOUR_USER_NAME", //fill with user name
    "mobileNumber": "YOUR_USER_MOBILE_NUMBER", //fill with user phone number
    "CUSTOM_VALUE_1": "VALUE_1", //any other custom meta data
    "CUSTOM_VALUE_2": "VALUE_2"
  }
});
*/

const Header = () => {
  return (
    // 작성시 주의 점
    // style 문은 맨 뒤에 써주세요.
    // 나중에 Styled-Component로 작업시 제거해야함.
    <header>
      <Container
        style={{
          backgroundColor: "#022fff",
          justifyContent: "space-between",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Grid container style={{ backgroundColor: "yellow" }}>
          <Grid item xs={1} style={{ backgroundColor: "red" }}>
            <input type="button" value="Profile Icon" />
          </Grid>
          <Grid item xs={10} style={{ justifyContent: "center" }}>
            <img src={TitleImg} style={{ height: "50px" }} />
          </Grid>
          <Grid item xs={1} style={{ backgroundColor: "red" }}>
            <input type="button" />
            <MenuIcon style={{ fill: "white" }} />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
