const primaryButton = document.querySelector('#primary-action-btn');

function buttonClick() {
    primaryButton.textContent = 'Action Completed';
    primaryButton.classList.remove('btn-primary');
    primaryButton.classList.add('btn-success');

    // Log to console
    console.log('Button was clicked!');
}

primaryButton.addEventListener('click', buttonClick);