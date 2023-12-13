function validator(number) {
  const cleanSpace = number.replace(/\s/g, '');
  if (!/^\d+$/.test(cleanSpace)) {
    return false;
  }

  if (cleanSpace.length < 13 || cleanSpace.length > 19) {
    return false;
  }

  let cardType = 'Unknown';
  const firstNumber = parseInt(cleanSpace.charAt(0), 10);
  const twoNumbers = parseInt(cleanSpace.substring(0, 2), 10);
  let img;
  const hidden = document.querySelector('.visible');
  if (hidden !== null) {
    hidden.classList.remove('visible');
    hidden.classList.add('hidden');
  }

  if (firstNumber === 4) {
    cardType = 'Visa';
    img = document.querySelector('.visa');
    img.classList.remove('hidden');
    img.classList.add('visible');
  } else if (twoNumbers >= 51 && twoNumbers <= 55) {
    cardType = 'Mastercard';
    img = document.querySelector('.mastercard');
    img.classList.remove('hidden');
    img.classList.add('visible');
  } else if (
    twoNumbers === 50 || twoNumbers === 56 || (twoNumbers >= 57 && twoNumbers <= 59)) {
    cardType = 'Maestro';
    img = document.querySelector('.maestro');
    img.classList.remove('hidden');
    img.classList.add('visible');
  } else if (firstNumber === 2) {
    cardType = 'MIR';
    img = document.querySelector('.mir');
    img.classList.remove('hidden');
    img.classList.add('visible');
  }

  return { valid: true, type: cardType };
}

function onSubmit() {
  const number = document.querySelector('.card-number__data').value;
  const result = validator(number);
  if (result.valid) {
    console.log('Номер карты действителен.');
    console.log(`Тип карты: ${result.type}`);
  } else {
    console.log('Номер карты недействителен.');
  }
}

const clickButton = document.querySelector('.button');

clickButton.addEventListener('click', onSubmit);
