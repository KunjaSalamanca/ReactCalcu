import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <div className="Calculator">
        <form>
          <div className="display">
            <input type="text" name="display" value={result} readOnly />
          </div>
          <div>
            <input
              type="button"
              value="AC"
              onClick={handleClear}
              className="operator"
            />

            <input
              type="button"
              value="DEL"
              onClick={handleDelete}
              className="operator"
            />

            <input
              type="button"
              value="."
              onClick={handleClick}
              className="operator"
            />

            <input
              type="button"
              value="/"
              onClick={handleClick}
              className="operator"
            />
          </div>
          <div>
            <input type="button" value="7" onClick={handleClick} />

            <input type="button" value="8" onClick={handleClick} />

            <input type="button" value="9" onClick={handleClick} />

            <input
              type="button"
              value="*"
              onClick={handleClick}
              className="operator"
            />
          </div>
          <div>
            <input type="button" value="4" onClick={handleClick} />

            <input type="button" value="5" onClick={handleClick} />

            <input type="button" value="6" onClick={handleClick} />

            <input
              type="button"
              value="-"
              onClick={handleClick}
              className="operator"
            />
          </div>
          <div>
            <input type="button" value="1" onClick={handleClick} />

            <input type="button" value="2" onClick={handleClick} />

            <input type="button" value="3" onClick={handleClick} />

            <input
              type="button"
              value="+"
              onClick={handleClick}
              className="operator"
            />
          </div>
          <div>
            <input type="button" value="00" onClick={handleClick} />

            <input type="button" value="0" onClick={handleClick} />

            <input
              type="button"
              value="="
              onClick={handleEqual}
              className="equal operator"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;