import React from "react";
import { Link } from "react-router-dom";
import StyledHeader from "./header";

function MedDetailHeader() {
  return (
    <StyledHeader style={{ textAlign: "center" }}>
      <Link to="/">
        <img
          className="rxguide-logo"
          src="https://i.imgur.com/O014jTc.png"
          width="350px"
          height="300"
          alt="Logo"
        />
      </Link>
    </StyledHeader>
  );
}

export default MedDetailHeader;
