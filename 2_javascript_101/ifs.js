function wrongInput(whatsNext) {
  alert('Please enter a valid age (only digits)');
  return whatsNext();
}

function amIAnAdult() {
  const stringAge = prompt('What is your age?');

  if (!stringAge) {
    return wrongInput(amIAnAdult);
  }

  const isAValidAge = /^[0-9]*$/.test(stringAge);

  // if (isAValidAge === false) {
  // if (isAValidAge !== true) {
  if (!isAValidAge) {
    return wrongInput(amIAnAdult);
  }

  const age = parseInt(stringAge);

  if (Number.isNaN(age)) {
    return wrongInput(amIAnAdult);
  }

  if (age < 0 || age > 60) {
    return wrongInput(amIAnAdult);
  }

  if (age >= 18) {
    alert('You are an adult');
  } else if (age >= 12) {
    alert('You are a teenager');
  } else {
    alert('You are a child');
  }

  return age;
}

console.log(amIAnAdult());
