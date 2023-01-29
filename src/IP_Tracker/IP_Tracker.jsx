import React from 'react';
import backgroundImage from "../images/pattern-bg.png";
import "./ip.scss"


const out = 3 / 16
function IPTracker() {
  return (
    <div className="ipTracker">
      <div className="ip-container">
        <img src={backgroundImage} alt="Pattern" />
        <div className="input-area">
          <div className="input">
            <input type="text" placeholder="Place An IP Address here" />
            <button><svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="0.68rem" height="0.8rem"><path fill="none" stroke="#FFF" strokeWidth="0.18em" d="M2 1l6 6-6 6" /></svg></button>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="stats-content">
          <div className="stats-items">
            <div className="items">
              <h4>IP Address</h4>
              <p>000000</p>
            </div>
            <div className="items">
              <h4>Location</h4>
              <p>000000</p>
            </div>
            <div className="items">
              <h4>Time Zone</h4>
              <p>000000</p>
            </div>
            <div className="items">
              <h4>ISP</h4>
              <p>000000</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export { IPTracker }