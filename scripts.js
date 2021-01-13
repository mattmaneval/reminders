const input = document.querySelector('input[type=text]');
const submit = document.querySelector('button');
const form = document.querySelector('form');

// Creates ul for all reminders
const createList = () => {
  const list = document.createElement('ul');
  form.insertAdjacentElement('beforebegin', list);
}

// Create li for reminder
const createListItem = () => {

}

// Creates li with reminder content
const createReminder = (submission) => {
  const list = document.querySelector('ul');
  
  // Create and append li
  const listItem = document.createElement('li');
  list.appendChild(listItem);

  // Create and append paragraph
  const para = document.createElement('p');
  listItem.appendChild(para);
  para.textContent = `${submission}`;

  // Create and append checkbox
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.classList.add('close');
  listItem.appendChild(checkbox);
}

// Submits reminder conditionally
const handleClick = (event) => {
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
const removeReminder = (event) => {
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
