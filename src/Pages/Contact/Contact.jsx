import React from "react";
import { Outlet } from "react-router-dom";
import ContactAside from "./ContactAside";
import Address from "./Address";
import AccountSetting from "./AccountSetting";

export default function Contact() {
  return (
      <div className="contact__page">
        <ContactAside />
        <Outlet />
      </div>
  );
}
