const input = document.querySelector('input[type=text]');
const submit = document.querySelector('button');
const form = document.querySelector('form');
const checkbox = document.createElement('input');

// Creates ul for all reminders
function createList() {
  const list = document.createElement('ul');
  form.insertAdjacentElement('beforebegin', list);
}

// Creates li with reminder content
function createReminder(submission) {
  const list = document.querySelector('ul');
  const li = document.createElement('li');
  li.classList.add('reminder');
  list.appendChild(li);
  const p = document.createElement('p');
  li.appendChild(p);
  p.textContent = `${submission}`;
  const finish = document.createElement('input');
  finish.type = "checkbox";
  finish.classList.add('close');
  li.appendChild(finish);
}

// Submits reminder conditionally
function handleClick(event) {
  event.preventDefault();
  let submission = input.value;

  if(submission !== '' && document.querySelector('ul') === null) {
    createList();
    createReminder(submission);
  } else if(submission !== '') {
    createReminder(submission);
  } else {
    return;
  }

  // Clear input
  input.value = '';
};

// Removes completed reminders
function removeReminder(event) {
  const li = event.target.closest('li');
  li.remove();
}

// Listens to submit reminder
submit.addEventListener('click', handleClick);

// Listens to remove reminder
document.addEventListener('change', function(event) {
  if(event.target.classList.contains('close')) {
    setTimeout(removeReminder, 750, (event));

  }
})
