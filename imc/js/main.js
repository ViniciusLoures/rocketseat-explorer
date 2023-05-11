import { Modal } from "./modal.js";
import { AlertError } from './alert-error.js'
import { calculateImc, notNumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#inputWeight");
const inputHeight = document.querySelector("#inputHeight");

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNaN = notNumber(weight) || notNumber(height)

  if(weightOrHeightIsNaN){
    AlertError.open();
    return;
  }

  AlertError.close()

  const result = calculateImc(weight, height);
  showResultMessage(result);
};

function showResultMessage(result){
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}
