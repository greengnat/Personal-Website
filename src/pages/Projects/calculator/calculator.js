import React from "react";

import Output from "./output/output";
import CalculatorStyles from "./styles.js";

export default function calculator() {
  const clear = () => {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  };

  const deleteLast = () => {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  };

  const appendNumber = (number) => {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  };
  const chooseOperation = (operation) => {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  };
  const compute = () => {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  };
  const updateDisplay = () => {
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
  };

  return (
    <CalculatorStyles message="hello">
      <Output />
      <div>Hello</div>
      <button data-delete>DEL</button>
      <button data-operation>÷</button>
      <button data-number>1</button>
      <button data-number>2</button>
      <button data-number>3</button>
      <button data-operation>*</button>
      <button data-number>4</button>
      <button data-number>5</button>
      <button data-number>6</button>
      <button data-operation>+</button>
      <button data-number>7</button>
      <button data-number>8</button>
      <button data-number>9</button>
      <button data-operation>-</button>
      <button data-number>.</button>
      <button data-number>0</button>
      <button data-equals className="span-two">
        =
      </button>
    </CalculatorStyles>
  );
}
