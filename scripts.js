const input = document.querySelector('input[type=text]');
const submit = document.querySelector('span');
const form = document.querySelector('.post-reminder');

const checkbox = document.createElement('input');


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
    // const finish = document.createElement('input');
    const finish = checkbox;
    finish.type = "checkbox";
    finish.classList.add('close');
    li.appendChild(finish);
  }

  function createReminder() {
    const list = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = `${submission}`;
    list.appendChild(li);
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
    alert('Write yourself a reminder :)');
  }

  // Clear input
  input.value = '';
};

function removeReminder(event) {
  const li = event.target.closest('li');
  li.remove();
  // console.log('changed');
}

submit.addEventListener('click', submitToDo);

document.addEventListener('change', function(event) {
  if(event.target.classList.contains('close')) {
    setTimeout(removeReminder, 500, (event));
  }
})
