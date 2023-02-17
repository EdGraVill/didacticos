const chatElement = document.getElementById('chat');

const person1Element = document.getElementById('person1');
const person2Element = document.getElementById('person2');

const buttonPerson1Element = document.getElementById('buttonPerson1');
const buttonPerson2Element = document.getElementById('buttonPerson2');

buttonPerson1.addEventListener('click', () => {
  const text = person1Element.value;
  const emoji1 =  '&#x261b';
  person1Element.value = '';
  chatElement.innerHTML += `<div class="person1">${emoji1}:${text}</div>`;
});

buttonPerson2.addEventListener('click', () => {
  const text = person2Element.value;
  const emoji2 =  '&#x261a';
  person2Element.value = '';
  chatElement.innerHTML += `<div class="person2">${text}:${emoji2}</div>`;
});
