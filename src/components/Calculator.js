import { useState } from "react";
import "./Calculator.scss";

const Calculator = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [circleColor, setCircleColor] = useState("calculator-main__circle");
  const [numColor, setNumColor] = useState("calculator-main__circle--num");
  const [calcInput, setCalcInput] = useState();
  const [calcOperator, setCalcOperator] = useState();


  const solve = () => {
    (calcInput) (calcOperator) (calcInput)
  }

  const changeMode = () => {
    if (darkMode) {
      setDarkMode(false);
      setCircleColor("calculator-main__circle--light");
      setNumColor("calculator-main__circle--num-light");
    } else {
      setDarkMode(true);
      setCircleColor("calculator-main__circle");
      setNumColor("calculator-main__circle--num");
    }
    console.log("now");
  };

  return (
    <>
      <div className="calculator">
        <div className="calculator-header">
          <div
            className="calculator-header__mode"
            style={{ backgroundColor: !darkMode ? "black" : "white" }}
            onClick={changeMode}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M11.5 20.125C9.10417 20.125 7.06771 19.2865 5.39062 17.6094C3.71354 15.9323 2.875 13.8958 2.875 11.5C2.875 9.10417 3.71354 7.06771 5.39062 5.39062C7.06771 3.71354 9.10417 2.875 11.5 2.875C11.7236 2.875 11.9434 2.88299 12.1593 2.89896C12.3753 2.91493 12.5868 2.93889 12.7938 2.97083C12.1389 3.43403 11.6156 4.03714 11.224 4.78017C10.8324 5.52319 10.6369 6.32564 10.6375 7.1875C10.6375 8.625 11.1406 9.84687 12.1469 10.8531C13.1531 11.8594 14.375 12.3625 15.8125 12.3625C16.691 12.3625 17.4976 12.1667 18.2323 11.775C18.967 11.3834 19.566 10.8605 20.0292 10.2062C20.0611 10.4139 20.0851 10.6254 20.101 10.8407C20.117 11.056 20.125 11.2757 20.125 11.5C20.125 13.8958 19.2865 15.9323 17.6094 17.6094C15.9323 19.2865 13.8958 20.125 11.5 20.125Z"
                fill={!darkMode ? "white" : "black"}
              />
            </svg>
          </div>
          <div className="calculator-header__input">49 + 1</div>
        </div>

        <div
          className="calculator-main"
          style={{ backgroundColor: !darkMode ? "white" : "black" }}
        >
          <div className="calculator-main__container">
            <div className={`calculator-main__circle ${circleColor}`}>C</div>
            <div className={`calculator-main__circle ${circleColor}`}>+/-</div>
            <div className={`calculator-main__circle ${circleColor}`}>%</div>
            <div className={`calculator-main__circle ${circleColor}`}>÷</div>
          </div>

          <div className="calculator-main__container">
            <div className={`calculator-main__circle ${numColor}`}>7</div>
            <div className={`calculator-main__circle ${numColor}`}>8</div>
            <div className={`calculator-main__circle ${numColor}`}>9</div>
            <div className={`calculator-main__circle ${circleColor}`}>x</div>
          </div>

          <div className="calculator-main__container">
            <div className={`calculator-main__circle ${numColor}`}>4</div>
            <div className={`calculator-main__circle ${numColor}`}>5</div>
            <div className={`calculator-main__circle ${numColor}`}>6</div>
            <div className={`calculator-main__circle ${circleColor}`}>-</div>
          </div>

          <div className="calculator-main__container">
            <div className={`calculator-main__circle ${numColor}`}>1</div>
            <div className={`calculator-main__circle ${numColor}`}>2</div>
            <div className={`calculator-main__circle ${numColor}`}>3</div>
            <div className={`calculator-main__circle ${circleColor}`}>+</div>
          </div>

          <div className="calculator-main__container">
            <div className={`calculator-main__circle ${numColor}`}>0</div>
            <div className={`calculator-main__circle ${numColor}`}>.</div>
            <div className={`calculator-main__circle ${numColor}`}></div>
            <div className="calculator-main__circle calculator-main__circle--equals">
              =
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
