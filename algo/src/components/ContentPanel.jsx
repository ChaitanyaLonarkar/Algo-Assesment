import React from "react";
import "./ContentPanel.css";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { MdOutlineCopyAll } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { TbAlignBoxBottomCenter } from "react-icons/tb";
function ContentPanel() {
  return (
    <div className="content-panel">
      <div className="panel-1">
        <div className="head head-b">
          <div className="head-left">
              <div className="color">PART 1</div>
            <h3>
              <div>Lorem Ipsum Dolor Sit Amet</div>
            </h3>
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
            </div>
            <div className="progress">45% Completed</div>
          </div>
        </div>
        <div className="lesson">
          <span className="flex">
            <div className="icon color">
              <MdOutlineSlowMotionVideo />
            </div>
            Video 1
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
            Article 1
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
            Quiz 1
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
            Coding Exercise 1
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
            Combined Resource 1
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
        <div className="head">
          <div className="head-left">
              <div className="color">PART   2</div>
            <h3>
              <div>Lorem Ipsum Dolor Sit Amet</div>
            </h3>
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
              </div>
            </div>
            <div className="progress">20% Completed</div>
          </div>
        </div>
      </div>
      <div className="panel-3">
        <div className="head">
          <div className="head-left">
              <div className="color">PART 3</div>
            <h3>
              <div>Lorem Ipsum Dolor Sit Amet</div>
            </h3>
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
            </div>
            <div className="progress">0% Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPanel;
