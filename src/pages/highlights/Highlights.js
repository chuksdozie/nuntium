import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiTwotoneHome } from "react-icons/ai";
import NewsCard from "../../components/molecules/newsCards/NewsCard";
import JustDetails from "../../components/molecules/newsCards/JustDetails";

import { main, daily, header, searchCont, search } from "./Style";

const Highlights = () => {
  return (
    <div style={main}>
      <div style={header}>
        <GiHamburgerMenu
          style={{ color: "red", width: "25px", height: "25px" }}
        />
        <div style={searchCont}>
          <BiSearchAlt2
            style={{ color: "red", width: "25px", height: "25px" }}
          />
          <input style={search} type="text" placeholder="search ..." />
        </div>
        <Link to="/highlights">
          <AiTwotoneHome
            style={{ color: "red", width: "25px", height: "25px" }}
          />
        </Link>
      </div>
      <div style={daily}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div style={daily}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <JustDetails />
      <div style={daily}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div style={daily}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default Highlights;
