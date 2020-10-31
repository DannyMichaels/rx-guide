import React from "react";
import { Link, withRouter } from "react-router-dom";
import StyledHeader from "./header";
import MoveInLeft from "./animation";

function Header(props) {
  const whiteList = ["/about", "/", "/custom-medication", "/medication/"];

  return whiteList.includes(props.location.pathname) ? (
    <MoveInLeft>
      <StyledHeader className="rxguide-logo">
        <Link to="/">
          <img
            className=""
            src="https://i.imgur.com/O014jTc.png"
            width="350px"
            height="300"
            alt="Logo"
          />
        </Link>
      </StyledHeader>
    </MoveInLeft>
  ) : (
    <></>
  );
}

export default withRouter(Header);
