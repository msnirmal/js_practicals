const primaryButton = document.querySelector('#primary-action-btn');
let hasRun = false;
primaryButton.addEventListener('click', () => {
  
  if (hasRun) return;  
  primaryButton.textContent = 'Action Completed';  
  primaryButton.classList.remove('btn-primary');
  primaryButton.classList.add('btn-success');  
  hasRun = true;
});

