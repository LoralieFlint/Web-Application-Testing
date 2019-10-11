import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [outs, setOuts] = useState(0);

  const displayReset = () => {
    setStrikes(0);
    setBalls(0);
  };

  const addStrikes = () => {
    if (strikes === 2 && outs === 2) {
      clear();
    } else if (strikes === 3) {
      setOuts(outs + 1);
      displayReset();
    } else {
      return setStrikes(strikes + 1);
    }
  };

  const addBall = () => {
    if (balls === 4) {
      setBalls(0);
      setOuts(outs + 1)
      displayReset();
    } else {
      return setBalls(balls + 1);
    }
  };

  const addFoul = () => {
    if (strikes === 0) {
     setStrikes(strikes + 1)
    } else if (strikes === 1) {
      setStrikes(strikes + 1);
    }else {
      return 2;
    }
  };

  const addOut = () => {
    if (outs === 3) {
      setOuts(0);
      displayReset();
    } else {
      setOuts(outs + 1);
      displayReset();
    }
  };

  const clear = () => {
    displayReset();
    setOuts(0);
  };

  return (
    <div className="App">
      <h1>Score Board</h1>
      <div className="scoreBoardWrapper">
        <div className="board">
          <Display strikes={strikes} balls={balls} outs={outs} />
        </div>
        <div className="boardDisplay">
          <Dashboard
            addStrike={addStrikes}
            addBall={addBall}
            addFoul={addFoul}
            addOut={addOut}
            reset={displayReset}
            clear={clear}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
