const chatElement = document.getElementById('chat');

const person1Element = document.getElementById('person1');
const person2Element = document.getElementById('person2');

const buttonPerson1Element = document.getElementById('buttonPerson1');
const buttonPerson2Element = document.getElementById('buttonPerson2');

buttonPerson1.addEventListener('click', () => {
  const text = person1Element.value;
  person1Element.value = '';
  chatElement.innerHTML += `<div class="person1">${text}</div>`;
});

buttonPerson2.addEventListener('click', () => {
  const text = person2Element.value;
  person2Element.value = '';
  chatElement.innerHTML += `<div class="person2">${text}</div>`;
});
