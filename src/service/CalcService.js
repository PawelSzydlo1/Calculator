import { useState } from "react";
export function CalcService() {
  const [screenValue, setScreenValue] = useState("");
  const [number, setNumber] = useState("");
  const [actualOperator, setActualOperator] = useState("");
  const [firstNumber, setFirstNumber] = useState(0);

  const result = (value) => {
    switch (value) {
      case "+":
        console.log("jestem w dodawanie");
        setFirstNumber(firstNumber + parseFloat(number));
        setScreenValue(firstNumber + parseFloat(number));
        setNumber("");
        break;

      case "-":
        setScreenValue(firstNumber - parseFloat(number));
        setFirstNumber(firstNumber - parseFloat(number));
        setNumber("");
        break;

      case "/":
        const secendNumber = parseFloat(number);
        if (secendNumber != 0) {
          setScreenValue(firstNumber / secendNumber);
          setFirstNumber(firstNumber / secendNumber);
        }
        setNumber("");
        break;

      case "*":
        setScreenValue(firstNumber * parseFloat(number));
        setFirstNumber(firstNumber * parseFloat(number));
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
        setFirstNumber(parseFloat(number));
        setNumber("");
        setScreenValue("");
    }
  };
  const handleOperator = (value) => {
    if (number != "") {
      if (value == "=") {
        result(actualOperator);
        setActualOperator("");
      } else if (value == "AC") {
        console.log("czysto ");
        result(value);
      } else {
        result(actualOperator);
        setActualOperator(value);
      }
    } else {
      setActualOperator(value);
      if (value == "=" || value == "AC") {
        result(value);
      }
    }
  };
  const handleNumber = (value) => {
    if (value == "-/+") {
      if (number != "") {
        const tmp = parseFloat(number);
        setNumber(-tmp);
        setScreenValue(-tmp);
      } else {
        const tmp = parseFloat(firstNumber);
        setFirstNumber(-tmp);
        setScreenValue(-tmp);
      }
    } else {
      setScreenValue(number + value);
      setNumber(number + value);
    }
  };
  return { handleOperator, handleNumber, screenValue };
}
