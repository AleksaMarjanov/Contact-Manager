import "./footer.scss";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <InstagramIcon className="instagram" />
      <TwitterIcon className="twitter" />
      <LinkedInIcon className="linkedin" />
      <div className="p-3 copyright">
        © Copyright {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
