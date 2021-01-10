const input = document.querySelector('input[type=text]');
const submit = document.querySelector('input[type=submit]');
const form = document.querySelector('form');

function submitToDo(event) {

  // Get input
  event.preventDefault();
  let submission = input.value;

  function createFirstReminder() {
    const list = document.createElement('ul');
    form.insertAdjacentElement('beforebegin', list);
    const li = document.createElement('li');
    li.textContent = `${submission}`;

    list.appendChild(li);
    const finish = document.createElement('input');
    finish.type = "checkbox";
    li.appendChild(finish);
  }

  function createReminder() {
    const list = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = `${submission}`;
    list.appendChild(li);
    const finish = document.createElement('input');
    finish.type = "checkbox";
    li.appendChild(finish);
  }

  if(submission !== "" && document.querySelector('ul') === null) {
    createFirstReminder();
  } else if(submission !== "") {
    createReminder();
  } else {
    alert('Write yourself a reminder :)');
  }

  // Clear input
  input.value = '';
};

submit.addEventListener('click', submitToDo);
