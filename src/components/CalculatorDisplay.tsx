import numPad from "./numPad";
import { useRef } from "react";
type Props = {
  screenValue: number;
  setScreenValue: React.Dispatch<React.SetStateAction<number>>;
};
function CalculatorDisplay({ screenValue, setScreenValue }: Props) {
  return (
    <>
      <div className="body">
        <div className="screen">
          <div className="top">top</div>
          <div className="bot">{screenValue}</div>
        </div>
        <div className="numPad">
          <div className="topButtons">
            <div className="clear">CLEAR</div>
            <div className="delete">DELETE</div>
          </div>
          <div className="mainButtons">
            <div onClick={() => numPad(7, screenValue, setScreenValue)}>7</div>
            <div onClick={() => numPad(8, screenValue, setScreenValue)}>8</div>
            <div onClick={() => numPad(9, screenValue, setScreenValue)}>9</div>
            <div>/</div>
            <div onClick={() => numPad(4, screenValue, setScreenValue)}>4</div>
            <div onClick={() => numPad(5, screenValue, setScreenValue)}>5</div>
            <div onClick={() => numPad(6, screenValue, setScreenValue)}>6</div>
            <div>x</div>
            <div onClick={() => numPad(1, screenValue, setScreenValue)}>1</div>
            <div onClick={() => numPad(2, screenValue, setScreenValue)}>2</div>
            <div onClick={() => numPad(3, screenValue, setScreenValue)}>3</div>
            <div>-</div>
            <div>.</div>
            <div onClick={() => numPad(0, screenValue, setScreenValue)}>0</div>
            <div>=</div>
            <div>+</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorDisplay;
