import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MyButton from "../../components/atoms/buttons/PrimaryButton";
import MainText from "../../components/atoms/text/MainText";
import Logo from "../../resources/nuntium2.png";
import { main, buttonCont, imgCont, imgSize } from "./Style";

const Home = () => {
  return (
    <div style={main}>
      <div style={imgCont}>
        <img style={imgSize} src={Logo} alt="logo" />
        <MainText
          text={"Get Daily and Consistent News Updates"}
          fontSize="25px"
          color="white"
          weight="normal"
        />
      </div>
      <div style={buttonCont}>
        <Grid item xs={9}>
          <Link style={{ textDecoration: "none" }} to="/highlights">
            <MyButton
              text="Get Started"
              onClick={() => window.navigator.vibrate(500)}
            />
          </Link>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
