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

module.exports = Validator;
