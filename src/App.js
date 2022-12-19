import React, { useState } from "react";
import AbilitytoPress from "./Components/AbilityToPress";
import DisplayPostResponse from "./Components/DisplayPostResponse";
import "./App.css";

function App() {
  const [UserId, setUserId] = useState([{ name: [""], post: [""] }]);

  function actualuserinput(user) {
    let tempUserId = [user, ...UserId];

    setUserId(tempUserId);
  }

  return (
    <div className="container-fluid">
      <div className="app">
        <hi>{"Social Feed"}</hi>
      </div>
      <div className="row justify-content-md-center mb-3">
        <div className="col-md-6">
          <div className="border-box">
            <AbilitytoPress AbilitytoPressproperty={actualuserinput} />
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center">
          <div className="col-md-6">
            <div className="border-box">
              <DisplayPostResponse DisplayPostResponseProperty={UserId} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
