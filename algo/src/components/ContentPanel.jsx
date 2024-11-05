import React from "react";
import "./ContentPanel.css";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { MdOutlineCopyAll } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { TbAlignBoxBottomCenter } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import { FaAngleUp } from "react-icons/fa6";
function ContentPanel() {
  return (
    <div className="content-panel">
      <div className="panel-1">
        <div className=" head-b">
          <div className="head">
            <div className="head-left">
              <div className="color">PART 1</div>
              <h2>
                <div>Lorem Ipsum Dolor Sit Amet</div>
              </h2>
            </div>
            <div className="head-right">
              <div className="timer-level">
                <div className="flex color">
                  <div className="icon">
                    <LuClock4 />
                  </div>
                  02:00:00
                </div>
                <div className="flex color">
                  <div className="icon">
                    <TbAlignBoxBottomCenter />
                  </div>
                  Medium
                </div>
                <div className="flex color">
                  <div className="icon">
                    <MdOutlineCopyAll />
                  </div>
                  5
                </div>
                <div className="arrow">
                  <FaAngleUp />
                </div>
              </div>
              <div className="progress">45% Completed</div>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `45%` }}></div>
          </div>
        </div>
        <div className="lesson">
          <span className="flex">
            <div className="icon color">
              <MdOutlineSlowMotionVideo />
            </div>
            <b> Video 1</b>
          </span>
          <div className="flex color">
            <div className="icon">
              <LuClock4 />
            </div>
            10:00
          </div>
        </div>
        <div className="lesson">
          <span className="flex">
            <div className="icon color">
              <GoQuestion />
            </div>
            <b>Article 1</b>
          </span>
          <div className="flex color">
            <div className="icon">
              <LuClock4 />
            </div>
            10:00
          </div>
        </div>
        <div className="lesson">
          <span className="flex">
            <div className="icon color">
              <GoQuestion />
            </div>
            <b>Quiz 1</b>
          </span>
          <div className="flex color">
            <div className="icon">
              <LuClock4 />
            </div>
            10:00
          </div>
        </div>
        <div className="lesson">
          <span className="flex">
            <div className="icon color">
              <FaCode />
            </div>
            <b>Coding Exercise 1</b>
          </span>
          <div className="flex color">
            <div className="icon">
              <LuClock4 />
            </div>
            10:00
          </div>
        </div>
        <div className="lesson">
          <span className="flex">
            <div className="icon color">
              <MdOutlineCopyAll />
            </div>
            <b>Combined Resource 1</b>
          </span>
          <div className="flex color">
            <div className="icon color">
              <LuClock4 />
            </div>
            10:00
          </div>
        </div>
      </div>
      <div className="panel-2">
        <div className="">
          <div className="head">
            <div className="head-left">
              <div className="color">PART 2</div>
              <h2>
                <div>Lorem Ipsum Dolor Sit Amet</div>
              </h2>
            </div>
            <div className="head-right">
              <div className="head-right">
                <div className="timer-level">
                  <div className="flex color">
                    <div className="icon">
                      <LuClock4 />
                    </div>
                    02:00:00
                  </div>
                  <div className="flex color">
                    <div className="icon">
                      <TbAlignBoxBottomCenter />
                    </div>
                    Medium
                  </div>
                  <div className="flex color">
                    <div className="icon">
                      <MdOutlineCopyAll />
                    </div>
                    12
                  </div>
                  <div className="arrow">
                    <FiChevronDown />
                  </div>
                </div>
              </div>
              <div className="progress">20% Completed</div>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `20%` }}></div>
          </div>
        </div>
      </div>
      <div className="panel-3">
        <div className="">
          <div className="head">
            <div className="head-left">
              <div className="color">PART 3</div>
              <h2>
                <div>Lorem Ipsum Dolor Sit Amet</div>
              </h2>
            </div>
            <div className="head-right">
              <div className="timer-level">
                <div className="flex color">
                  <div className="icon">
                    <LuClock4 />
                  </div>
                  02:00:00
                </div>
                <div className="flex color">
                  <div className="icon">
                    <TbAlignBoxBottomCenter />
                  </div>
                  Medium
                </div>
                <div className="flex color">
                  <div className="icon">
                    <MdOutlineCopyAll />
                  </div>
                  12
                </div>
                <div className="arrow">
                  <FiChevronDown />
                </div>
              </div>
              <div className="progress">0% Completed</div>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `0%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPanel;
