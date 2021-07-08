import { CalcService } from "../../service/CalcService";
import "./index.css";

export function Home() {
  const { handleOperator, handleNumber, screenValue } = CalcService();

  return (
    <div className="container mx-auto my-5">
      <div className="calc">
        <div className="calc-screen-div row ">
          <input
            type="text"
            className="calc-screen col"
            value={screenValue}
            placeholder="0"
            disabled
          />
        </div>

        <div className="calc-button">
          <button
            type="button"
            className="btn btn-primary"
            value="+"
            onClick={(event) => handleOperator(event.target.value)}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-primary"
            value="-"
            onClick={(event) => handleOperator(event.target.value)}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-primary"
            value="*"
            onClick={(event) => handleOperator(event.target.value)}
          >
            &times;
          </button>
          <button
            type="button"
            className="btn btn-primary"
            value="/"
            onClick={(event) => handleOperator(event.target.value)}
          >
            &divide;
          </button>

          <button
            type="button"
            className="btn btn-light"
            value="1"
            onClick={(event) => handleNumber(event.target.value)}
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-light"
            value="2"
            onClick={(event) => handleNumber(event.target.value)}
          >
            2
          </button>
          <button
            type="button"
            className="btn btn-light"
            value="3"
            onClick={(event) => handleNumber(event.target.value)}
          >
            3
          </button>
          <button
            type="button"
            className="btn btn-light"
            value="4"
            onClick={(event) => handleNumber(event.target.value)}
          >
            4
          </button>
          <button
            type="button"
            className="btn btn-light"
            value="5"
            onClick={(event) => handleNumber(event.target.value)}
          >
            5
          </button>
          <button
            type="button"
            className="btn btn-light"
            value="6"
            onClick={(event) => handleNumber(event.target.value)}
          >
            6
          </button>
          <button
            type="button"
            className="btn btn-light"
            value="7"
            onClick={(event) => handleNumber(event.target.value)}
          >
            7
          </button>
          <button
            type="button"
            className="btn btn-light"
            value="8"
            onClick={(event) => handleNumber(event.target.value)}
          >
            8
          </button>
          <button
            type="button"
            className="btn btn-light"
            value="9"
            onClick={(event) => handleNumber(event.target.value)}
          >
            9
          </button>

          <button
            type="button"
            className="btn btn-light"
            value="0"
            onClick={(event) => handleNumber(event.target.value)}
          >
            0
          </button>
          <button
            type="button"
            className="btn btn-light"
            value="."
            onClick={(event) => handleNumber(event.target.value)}
          >
            .
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            value="-/+"
            onClick={(event) => handleNumber(event.target.value)}
          >
            -/+
          </button>
          <button
            type="button"
            className=" btn btn-danger"
            value="AC"
            onClick={(event) => handleOperator(event.target.value)}
          >
            AC
          </button>
          <button
            type="button"
            className=" equil-sign btn btn-success "
            value="="
            onClick={(event) => handleOperator(event.target.value)}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
