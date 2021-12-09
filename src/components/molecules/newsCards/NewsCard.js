import React from "react";
import { main, top, imager, side } from "./Style";
import MainText from "../../atoms/text/MainText";

const NewsCard = (props) => {
  const { category, time, title, details } = props;

  return (
    <div style={main}>
      <div style={top}>
        <div style={side}>
          {/* icon */}
          <MainText
            text={category || "Sports"}
            size="13px"
            color="black"
            weight="normal"
          />
        </div>
        <div>
          <MainText
            text={time || "today - 03:46pm"}
            size="11px"
            color="grey"
            weight="normal"
          />
        </div>
      </div>
      <img
        style={imager}
        src="https://cdn.cnn.com/cnnnext/dam/assets/211201131731-01-biden-supply-chain-remarks-1201-large-169.jpg"
        alt="news headline"
      />
      <MainText
        text={title || "Biden Announces the Plans to fight Omnicron"}
        size="22px"
        color="black"
        weight="600"
      />
      <MainText
        text={
          details
            ? `${details.substring(0, 120)}...`
            : "MOSCOW (AP) — Presidents Joe Biden and Vladimir Putin will speak in a video call Tuesday, the White House and Kremlin said, as tensions..."
        }
        size="15px"
        color="grey"
        weight="normal"
      />
    </div>
  );
};

export default NewsCard;
