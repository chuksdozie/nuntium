import React from "react";
import Typography from "@mui/material/Typography";

const MainText = (props) => {
  const { color, size, text, weight } = props;
  return (
    <Typography color={color} fontSize={size} fontWeight={weight}>
      {text}
    </Typography>
  );
};

export default MainText;
