import { useState } from "react";

useState;
function Hamburger({ isOpen }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`hamburger-icon ${isOpen ? "open" : ""}`}
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </>
  );
}

export default Hamburger;
