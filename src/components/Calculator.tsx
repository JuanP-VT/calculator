import CalculatorDisplay from "./CalculatorDisplay";
import { useState } from "react";
function Calculator() {
  const [screenValue, setScreenValue] = useState(0);
  return (
    <>
      <CalculatorDisplay
        screenValue={screenValue}
        setScreenValue={setScreenValue}
      />
    </>
  );
}

export default Calculator;
