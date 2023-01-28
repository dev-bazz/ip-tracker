import React from 'react'
import backgroundImage from "../images/pattern-bg.png"
import "./ip.scss"

function IPTracker() {
  return (
    <div className="ipTracker">
      <div className="ip-container">
        <img src={backgroundImage} alt="Pattern Image" srcset="" />
        <div className="input-area">
          <div className="input"><input type="text" /> <button>Send</button></div>
        </div>
      </div>
    </div>
  )
}

export { IPTracker }