// Layout.jsx
import React from "react";
import Navbar from "../Navbar/NavBar";


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      
    </div>
  );
};

export default Layout;
