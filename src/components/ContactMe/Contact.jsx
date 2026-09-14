import React from "react";
import DividerCustom from "../Divider/dividerCustome";

export default function Contact() {
  return (
    <div>
      <h2>Contact ME</h2>
      <DividerCustom theme="dark" />{" "}
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Phone number" />
        <textarea placeholder="Message"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
