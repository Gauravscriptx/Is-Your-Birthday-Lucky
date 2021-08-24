const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#calculate-number');
const displayMessage = document.querySelector('#output-container');

const calculateSum = (date) => {
  let sum = 0;
  date = date.replaceAll('-', '');
  for (let digit of date) {
    sum = sum + Number(digit);
  }
  return sum;
};
