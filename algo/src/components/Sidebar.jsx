import React from "react";
import "./Sidebar.css";
import { BiMenu } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoClipboardOutline } from "react-icons/io5";
import { CiAlignBottom } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>
        <div className="level">
          <HiOutlineMenu className="iconmenu" />
          <div className="name">AlgoZenith</div>
        </div>
      </h2>
      <ul>
        <li>
          <div className="level">
            <BsGrid className="icon" />
            Dashboard
          </div>
        </li>
        <li>
          <div className="level">
            <HiOutlineLightBulb className="icon" />
            Learn
          </div>
        </li>
        <li>
          <div className="level">
            <HiOutlineUserGroup className="icon" />
            Forums
          </div>
        </li>
        <li>
          <div className="level">
            <IoClipboardOutline className="icon" />
            Upskill
          </div>
        </li>
        <li>
          <div className="level">
            <CiAlignBottom className="icon" />
            Contest
          </div>
        </li>
        <li>
          <div className="level">
            <IoIosStarOutline className="icon" />
            Leaderboard
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
