document.addEventListener('DOMContentLoaded', () => {
  const actionBtn = document.getElementById('actionBtn');
  const statusMsg = document.getElementById('statusMsg');

  actionBtn.addEventListener('click', () => {
    // Add micro-animation
    actionBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      actionBtn.style.transform = 'scale(1)';
    }, 150);

    // Toggle message visibility
    statusMsg.classList.remove('hidden');
    statusMsg.classList.add('visible');
    
    // Auto hide after 3 seconds
    setTimeout(() => {
      statusMsg.classList.remove('visible');
      statusMsg.classList.add('hidden');
    }, 3000);
  });
});
