import React from 'react';
import backgroundImage from "../images/pattern-bg.png";
import "./ip.scss"


const out = 14 / 16
function IPTracker() {
  return (
    <div className="ipTracker">
      <div className="ip-container">
        <img src={backgroundImage} alt="Pattern" />
        <div className="input-area">
          <div className="input">
            <input type="text" placeholder="Place An IP Address here" />
            <button><svg xmlns="http://www.w3.org/2000/svg" width="0.68em" height="0.8em"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { IPTracker }