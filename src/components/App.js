import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [input, setinputt] = useState();

  setInterval(() => {
    if (input > 0) {
      setinputt(parseInt(input) - 1);
    }
  }, 1000);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(e) => {
              if (e.keyCode == 13) {
                setinputt(e.target.value);
              }
            }}
          />
          {""}
          sec.
        </h1>
      </div>
      <div id="current-time">
        {/* remaining time */ input < 6 ? input : null}
      </div>
    </div>
  );
};

export default App;
