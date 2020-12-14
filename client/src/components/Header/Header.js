import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <Link to="/">[Kyle Jensen]</Link>
      </div>
      <div>
        <Link to="/pictures">Pictures</Link>
      </div>
      <div>
        <Link to="/about">About Me</Link>
      </div>
      <div>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Header;
