import "./footer.scss";
import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer>
        <a href="https://www.github.com/AleksaMarjanov" target="_blank" rel="noreferrer">
          <GithubIcon className="instagram" />
        </a>
        <a href="https://twitter.com/beli1337" target="_blank" rel="noreferrer">
          <TwitterIcon className="twitter" />
        </a>
        <a href="https://linkedin.com/in/AleksaMarjanov" target="_blank" rel="noreferrer">
          <LinkedInIcon className="linkedin" />
        </a>
        <div className="p-3 copyright">
          © Copyright {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
