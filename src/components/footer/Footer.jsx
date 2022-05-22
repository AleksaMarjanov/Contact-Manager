import "./footer.scss";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <InstagramIcon className="instagram" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <TwitterIcon className="twitter" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
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
