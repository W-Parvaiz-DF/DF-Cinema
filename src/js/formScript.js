class Validator {
  validateName(str) {
    const validFormat = /^[A-Za-z]+$/.test(str);
    const validLength = str.length > 1 && str.length < 15;
    return validFormat && validLength;
  }
  validateEmail(str) {
    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return regex.test(str);
  }
}

const firstNameInput = document.querySelector("input#firstname");
const lastNameInput = document.querySelector("input#lastname");
const emailInput = document.querySelector("input#email");
const submit = document.querySelector('input[type="submit"]');

const validator = new Validator();

let firstNameValid = false;
let lastNameValid = false;
let emailValid = false;

const allValid = () => firstNameValid && lastNameValid && emailValid;

const controlErrorClass = (element, isError) => {
  if (isError) return element.classList.add("is-invalid");
  element.classList.remove("is-invalid");
};

firstNameInput.addEventListener("change", () => {
  firstNameValid = validator.validateName(firstNameInput.value);
  controlErrorClass(firstNameInput, !firstNameValid);
  submit.disabled = !allValid();
});

lastNameInput.addEventListener("change", () => {
  lastNameValid = validator.validateName(lastNameInput.value);
  controlErrorClass(lastNameInput, !lastNameValid);
  submit.disabled = !allValid();
});

emailInput.addEventListener("change", () => {
  emailValid = validator.validateEmail(emailInput.value);
  controlErrorClass(emailInput, !emailValid);
  submit.disabled = !allValid();
});
