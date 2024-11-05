import React from "react";
import "./ContentPanel.css";

function ContentPanel() {
  return (
    <div className="content-panel">
      <div className="panel-1">
        <div className="head head-b">
          <div className="head-left">
            <h3>
              <div>Part 1</div>
              <div>Lorem Ipsum Dolor Sit Amet</div>
            </h3>
          </div>
          <div className="head-right">
            <div className="timer-level">
              <div>02:00:00</div>
              <div>Medium</div>
              <div>5</div>
            </div>
            <div className="progress">45% Completed</div>
          </div>
        </div>
        <div className="lesson">
          <span>Video 1</span>
          <span>10:00</span>
        </div>
        <div className="lesson">
          <span>Article 1</span>
          <span>10:00</span>
        </div>
        <div className="lesson">
          <span>Quiz 1</span>
          <span>10:00</span>
        </div>
        <div className="lesson">
          <span>Coding Exercise 1</span>
          <span>10:00</span>
        </div>
        <div className="lesson">
          <span>Combined Resource 1</span>
          <span>10:00</span>
        </div>
      </div>
      <div className="panel-2">
        <div className="head">
          <div className="head-left">
            <h3>
              <div>Part 2</div>
              <div>Lorem Ipsum Dolor Sit Amet</div>
            </h3>
          </div>
          <div className="head-right">
            <div className="timer-level">
              <div>02:00:00</div>
              <div>Medium</div>
              <div>5</div>
            </div>
            <div className="progress">20% Completed</div>
          </div>
        </div>
      </div>
      <div className="panel-3">
        <div className="head">
          <div className="head-left">
            <h3>
              <div>Part 3</div>
              <div>Lorem Ipsum Dolor Sit Amet</div>
            </h3>
          </div>
          <div className="head-right">
            <div className="timer-level">
              <div>02:00:00</div>
              <div>Medium</div>
              <div>5</div>
            </div>
            <div className="progress">0% Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPanel;
