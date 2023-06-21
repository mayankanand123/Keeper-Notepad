import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p style={{padding: "12px"}}>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
