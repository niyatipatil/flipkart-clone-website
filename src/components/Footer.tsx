import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-center items-center space-x-4">
          <span>About</span>
          <span>Group Companies</span>
          <span>Help</span>
          <span>Consumer Policy</span>
          <span>|</span>
          <span>Mail Us</span>
          <span>Registered Office Address</span>
        </div>
      </div>
      <div className="container text-center mx-auto mt-2">
        <span>&copy; 2024 Flipkart Clone by Niyati. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
