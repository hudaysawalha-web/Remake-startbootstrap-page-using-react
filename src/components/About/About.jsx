import React from "react";
import downloadIcon from "../../assets/download-svgrepo-com.svg";
import { Button } from "react-bootstrap";

export default function About() {
  return (
    <>
      <div>
        <div>
          <h1>About</h1>
        </div>
        <div>
          <p>
            Freelancer is a free bootstrap theme created by Start Bootstrap. The
            download includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!
          </p>
        </div>
        <div>
          <Button>
            <img src={downloadIcon} alt="Download" width="20" height="20" />
            Free Download!
          </Button>
       
        </div>
      </div>
    </>
  );
}
