import React from "react";
import "./App.css";
import { useState } from "react";
import App from './App';

const BottomRow = () => {
  const Quarter_initial=0;
  const [quarter__value,SetQuaterValue]=useState(Quarter_initial);
  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
  <div className="quarter__value">{quarter__value}</div>
      </div>
      <button onClick={() =>SetQuaterValue(quarter__value+1)} className="homeButtons__touchdown">Quarter</button>
      
    </div>
  );
};

export default BottomRow;
