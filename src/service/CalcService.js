import { useState } from "react";
export function CalcService() {
  const [screenValue, setScreenValue] = useState("");
  const [number, setNumber] = useState("");
  const [actualOperator, setActualOperator] = useState("");
  const [firstNumber, setFirstNumber] = useState(0.0);

  const result = (value) => {
    switch (value) {
      case "+":
        console.log("jestem w dodawanie");
        setFirstNumber((firstNumber + parseFloat(number)).toPrecision(8));
        setScreenValue((firstNumber + parseFloat(number)).toPrecision(8));
        setNumber("");
        break;

      case "-":
        setScreenValue((firstNumber - parseFloat(number)).toPrecision(8));
        setFirstNumber((firstNumber - parseFloat(number)).toPrecision(8));
        setNumber("");
        break;

      case "/":
        const secondNumber = parseFloat(number).toPrecision(8);
        if (secondNumber !== 0.0.toPrecision(8)) {
          setScreenValue((firstNumber / secondNumber).toPrecision(8));
          setFirstNumber((firstNumber / secondNumber).toPrecision(8));
        } else {
          setScreenValue("Don't divide by zero!");
        }
        setNumber("");
        break;

      case "*":
        setScreenValue((firstNumber * parseFloat(number)).toPrecision(8));
        setFirstNumber((firstNumber * parseFloat(number)).toPrecision(8));
        setNumber("");
        break;
      case "=":
        setScreenValue(firstNumber);
        break;
      case "AC":
        setNumber("");
        setFirstNumber(0);
        setScreenValue("");
        setActualOperator("");
        break;

      default:
        setFirstNumber(parseFloat(number).toPrecision(8));
        setNumber("");
        setScreenValue("");
    }
  };
  const handleOperator = (value) => {
    if (number !== "") {
      if (value === "=") {
        result(actualOperator);
        setActualOperator("");
      } else if (value === "AC") {
        result(value);
      } else {
        result(actualOperator);
        setActualOperator(value);
      }
    } else {
      setActualOperator(value);
      if (value === "=" || value === "AC") {
        result(value);
      }
    }
  };
  const handleNumber = (value) => {
    if (value === "-/+") {
      if (number !== "") {
        setNumber((-number).toString());
        setScreenValue((-number).toString());
      } else {
        setFirstNumber(-firstNumber);
        setScreenValue(-firstNumber);
      }
    } else {
      if (value === ".") {
        if (!number.includes(".")) {
          setNumber(number + value);
          setScreenValue(number + value);
        }
      } else {
        setScreenValue(number + value);
        setNumber(number + value);
      }
    }
  };
  return { handleOperator, handleNumber, screenValue };
}
