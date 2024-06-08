import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [isError, setIsError] = useState(false);
  const [keyA, setkeyA] = useState('');
  const [keyB, setkeyB] = useState('');
  const [outPut, setOutPut] = useState('');

  /* You will need some function to handle the key pressed and button events */
  const onA = (event) => {
    setkeyA(event.target.value);
  }

  const onB = (event) => {
    setkeyB(event.target.value);
  }

  const handleCompute = () => {
    if (isNaN(keyA) || isNaN(keyB) || keyA === '' || keyB === '') {
      setIsError(true);
      setOutPut("A and B shall be numbers!");
    } else {
      setIsError(false);
      setOutPut(parseInt(keyA) + parseInt(keyB));
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input className={isError? "error" : ''} value={outPut} disabled />
      <button onClick={handleCompute} >Compute</button>
    </main>
  );
}

export default App;
