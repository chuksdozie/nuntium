import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 18,
  padding: "12px",
  color: "#cc0a21",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#fff",
  fontFamily: '"Segoe UI"',
  borderRadius: "35px",
  borderColor: "#ffffff",
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#ffffff",
    boxShadow: "none",
  },
});

const PrimaryButton = (props) => {
  const { text, onClick } = props;
  return (
    <div>
      <Grid item xs={12}>
        <MyButton fullWidth onClick={onClick}>
          {text || "insert a text"}
        </MyButton>
      </Grid>
    </div>
  );
};

export default PrimaryButton;
