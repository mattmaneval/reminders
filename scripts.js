const input = document.querySelector('input[type=text]');
const submit = document.querySelector('button');
const form = document.querySelector('form');
const checkbox = document.createElement('input');

function submitToDo(event) {

  // Get input
  event.preventDefault();
  let submission = input.value;

  function createFirstReminder() {
    const list = document.createElement('ul');
    form.insertAdjacentElement('beforebegin', list);
    const li = document.createElement('li');
    list.appendChild(li);
    const p = document.createElement('p');
    li.appendChild(p);
    p.textContent = `${submission}`;
    const finish = checkbox;
    finish.type = "checkbox";
    finish.classList.add('close');
    li.appendChild(finish);
  }

  function createReminder() {
    const list = document.querySelector('ul');
    const li = document.createElement('li');
    list.appendChild(li);
    const p = document.createElement('p');
    li.appendChild(p);
    p.textContent = `${submission}`;
    const finish = document.createElement('input');
    finish.type = "checkbox";
    finish.classList.add('close');
    li.appendChild(finish);
  }

  if(submission !== "" && document.querySelector('ul') === null) {
    createFirstReminder();
  } else if(submission !== "") {
    createReminder();
  } else {
    return;
  }

  // Clear input
  input.value = '';
};

function removeReminder(event) {
  const li = event.target.closest('li');
  li.remove();
}

submit.addEventListener('click', submitToDo);

document.addEventListener('change', function(event) {
  if(event.target.classList.contains('close')) {
    setTimeout(removeReminder, 750, (event));
  }
})
