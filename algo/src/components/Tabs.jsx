import React from "react";
import "./Tabs.css";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi2";
function Tabs() {
  return (
    <div className="dotabs">
      <div className="tabs">
        <button className="active tab">
          <div className="icon">
            <HiOutlineCalendar />
          </div>
          Mentor Sessions
        </button>
        <button className="tab shadow">
          <div className="icon">
            <IoBagRemoveOutline />
          </div>{" "}
          Learning Material
        </button>
      </div>
      <div className="ta">
        <button className="tab">
          <div className="icon">
            <IoIosInformationCircleOutline />
          </div>
          How it's works
        </button>
      </div>
    </div>
  );
}

export default Tabs;
