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
const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
  console.log(sumOfDate, numberToCheck);
  if (sumOfDate % numberToCheck === 0) {
    return showMessage(`${numberToCheck} is a lucky number!! 🥳 🥳 🥳 `);
  }
  showMessage(`${numberToCheck} is not that lucky 😕`);
};
