import React from "react";
import "./Header.css";
import { HiBell } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
function Header() {
  return (
    <div className="header">
      <div className="header-buttons">
      
        <div className="notifications">
          <div className="icon">
            <HiBell />
          </div>
        </div>
        <div className="user-icon">
          <div className="icon">
            <FaUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
