function CalculatorDisplay() {
  return (
    <>
      <div className="body">
        <div className="screen">
          <div className="top">top</div>
          <div className="bot">bot</div>
        </div>
        <div className="numPad">
          <div className="topButtons">
            <div className="clear">CLEAR</div>
            <div className="delete">DELETE</div>
          </div>
          <div className="mainButtons">
            <div className="a">7</div>
            <div className="a">8</div>
            <div className="a">9</div>
            <div className="a">/</div>
            <div className="a">4</div>
            <div className="a">5</div>
            <div className="a">6</div>
            <div className="a">x</div>
            <div className="a">1</div>
            <div className="a">2</div>
            <div className="a">3</div>
            <div className="a">-</div>
            <div className="a">.</div>
            <div className="a">0</div>
            <div className="a">=</div>
            <div className="a">+</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorDisplay;
