const userInput = document.querySelector('input[type=text]');
const submit = document.querySelector('input[type=submit]');
const form = document.querySelector('form');

function submitToDo(event) {

  // Capture user input
  event.preventDefault();
  let submission = userInput.value;

  // Check for input
  if(submission !== "" && document.querySelector('ul') === null) {
    const list = document.createElement('ul');
    form.insertAdjacentElement('beforebegin', list);
    const li = document.createElement('li');
    li.textContent = `${submission}`;
    list.appendChild(li);
  } else if(submission !== "") {
    const list = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = `${submission}`;
    list.appendChild(li);
  } else {
    alert('Write yourself a reminder :)');
  }

  // Clear input
  userInput.value = '';
};

submit.addEventListener('click', submitToDo);
