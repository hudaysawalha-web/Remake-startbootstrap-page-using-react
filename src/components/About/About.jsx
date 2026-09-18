import React from "react";
import downloadIcon from "../../assets/download-svgrepo-com.svg";
import DividerCustom from "../Divider/dividerCustome";
import { FaDownload } from "react-icons/fa";
import { Button } from "react-bootstrap";
import "../About/About.css";

export default function About() {
  return (
    <div className="About-section page-section">
      <div className="container">
        <h2>About</h2>

        <DividerCustom />
        <div className="row justify-content-center ">
          <div className="col-12 col-lg-4 ms-auto">
            <p className="lead">
              Freelancer is a free bootstrap theme created by Start Bootstrap.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-12 col-lg-4 me-auto">
            <p className="lead">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
        <div className="about-button">
          <a className="btn-about" href="#downloadpage">
            <FaDownload className="btn-about-icon" />
            Free Download!
          </a>
        </div>
      </div>
    </div>
  );
}
