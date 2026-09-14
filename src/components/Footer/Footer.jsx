import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div>
        <h2>LOCATION</h2>
        <h2>2215 John Daniel Drive Clark, MO 65243</h2>
      </div>
      <div>
        <h1>AROUND THE WEB</h1>
        <div>
          <a href="https://www.facebook.com/">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com/">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="https://www.dribbble.com/">
            <FaDribbble />
          </a>
        </div>
      </div>
      <div>
        <h2>About Freelancer</h2>
        <h2>
          Freelance is a free to use, MIT licensed Bootstrap theme created by
         <a href="https://startbootstrap.com/"> Start Bootstrap</a> .
        </h2>
      </div>
    </div>
  );
}
