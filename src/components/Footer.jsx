import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
   
      <p>
        &copy; {currentYear} <strong>Amad uddin</strong>
      </p>
    </footer>
  );
};

export default Footer;
