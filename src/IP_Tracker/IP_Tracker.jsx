import { useMachine } from "@xstate/react";
import React, { useRef } from "react";
import backgroundImage from "../images/pattern-bg.png";
import appState from "../machines/machine";
import "./ip.scss";

const me = `1.2.3.4.56`;

function IPTracker() {
  const [state, send] = useMachine(appState);
  const { value, context } = state;
  const inputElement = useRef();
  console.log(JSON.stringify(value));
  return (
    <div className="ipTracker">
      <div className="ip-container">
        <img
          src={backgroundImage}
          alt="Pattern"
        />
        <div className="input-area">
          <div className="input">
            <input
              ref={inputElement}
              type="text"
              placeholder={context.placeholder}
            />
            <button
              onClick={() => {
                const {
                  current: { value },
                } = inputElement,
                  val = value;
                send({
                  type: "Search",
                  val,
                  errorMsg: `🙃 Please Put a Valid IP Address `,
                  defaultPlacerHolder: `Place An IP Address here`,
                });
              }}>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="0.68rem"
                height="0.8rem">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="0.18em"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="stats-content">
          <div className="stats-items">
            <div className="item">
              <h4>IP Address</h4>
              <p>N/A</p>
            </div>
            <div className="item">
              <h4>Location</h4>
              <p>000000</p>
            </div>
            <div className="item">
              <h4>Time Zone</h4>
              <p>000000</p>
            </div>
            <div className="item">
              <h4>ISP</h4>
              <p>000000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { IPTracker };
