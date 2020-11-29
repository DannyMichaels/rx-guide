import React from "react";
import { Link, withRouter } from "react-router-dom";

function FooterLinks(props) {
  return (
    <div>
      <Link to="/about">
        {props.location.pathname === "/about" ? null : (
          <img
            src="https://i.imgur.com/Zhlm6SD.png"
            width="150"
            height="150"
            className="about"
            alt="About-Page Icon"
          />
        )}
      </Link>
      {props.location.pathname !== "/about" ? null : (
        <a
          href="https://github.com/DannyMichaels/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://svgur.com/i/Qug.svg"
            width="150"
            height="150"
            className="about"
            alt="github"
          />
        </a>
      )}

      <Link to="/">
        {props.location.pathname === "/" ? null : (
          <img
            src="https://i.imgur.com/yM56ZTA.png"
            width="100"
            height="100"
            className="custom-link"
            alt="Home Page"
          />
        )}
      </Link>

      <Link to="/custom-medication">
        {props.location.pathname === "/custom-medication" ? null : (
          <img
            src="https://i.imgur.com/BZOV6FC.png"
            width="100"
            height="100"
            className="custom-link"
            alt="Add custom RX"
          />
        )}
      </Link>
    </div>
  );
}

export default withRouter(FooterLinks);
