import React from "react";
import { jmain, jleft, jright, jrtop, jrbottom, side, top } from "./Style";
import MainText from "../../atoms/text/MainText";

const JustDetails = (props) => {
  const { category, time, details, title } = props;
  return (
    <div style={jmain}>
      <div style={jleft}>
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
        <MainText
          text={title || "Biden Announces the Plans to fight Omnicron"}
          size="22px"
          color="black"
          weight="600"
        />
        <MainText
          text={
            details
              ? `${details.substring(0, 200)}...`
              : "MOSCOW (AP) — Presidents Joe Biden and Vladimir Putin will speak in a video call Tuesday, the White House and Kremlin said, as tensions Presidents Joe Biden and Vladimir Putin will speak in a video call Tuesday, the White House..."
          }
          size="15px"
          color="grey"
          weight="normal"
        />
      </div>
      <div style={jright}>
        <div style={jrtop}>
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
          <MainText
            text={title || "Biden Announces the Plans to fight Omnicron"}
            size="22px"
            color="black"
            weight="600"
          />
        </div>
        <div style={jrbottom}>
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
          <MainText
            text={title || "Biden Announces the Plans to fight Omnicron"}
            size="22px"
            color="black"
            weight="600"
          />
        </div>
      </div>
    </div>
  );
};

export default JustDetails;
