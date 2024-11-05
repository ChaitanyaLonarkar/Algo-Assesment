import React from "react";
import "./ChaptersList.css";
import { GoClock } from "react-icons/go";
function ChaptersList() {
  return (
    <div className="chapters-list">
      <h3 className="active">
        <div>Chapter 1 </div>{" "}
        <div className="timer">
          <GoClock className="icon" />
          05:00:00
        </div>
      </h3>
      <h3>Chapter 2</h3>
      <h3>Chapter 3</h3>
      <h3>Chapter 4</h3>
      <h3>Chapter 5</h3>
    </div>
  );
}

export default ChaptersList;
