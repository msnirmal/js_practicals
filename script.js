// Task 1: Button Click Interaction
const primaryButton = document.getElementById('primary-action-btn');

function buttonClick() {
    primaryButton.textContent = 'Task1 Completed';
    primaryButton.classList.remove('btn-primary');
    primaryButton.classList.add('btn-success');      
}

primaryButton.addEventListener('click', buttonClick);

// Task 2: Counter Logic

const incrementButton = document.getElementById('increment-btn');
const decrementButton = document.getElementById('decrement-btn');
const counterValue = document.getElementById('counter-value');

let count = 0;

function increaseCount() {
    count++;
    counterValue.textContent = count;
}

function decreaseCount() {
    if (count > 0) {
        count--;
        counterValue.textContent = count;
    }
}

incrementButton.addEventListener('click', increaseCount);
decrementButton.addEventListener('click', decreaseCount);

// Task 3: Toggle the Alert

const toggleButton = document.getElementById('toggle-alert-btn');
const alertBox = document.getElementById('alert-box');

function showAlert() {
  alertBox.classList.remove('d-none');
  toggleButton.textContent = 'Hide Alert';
}

function hideAlert() {
  alertBox.classList.add('d-none');
  toggleButton.textContent = 'Show Alert';
}

function toggleAlert() {
  if (alertBox.classList.contains('d-none')) {
    showAlert();
  } else {
    hideAlert();
  }
}

toggleButton.addEventListener('click', toggleAlert);








