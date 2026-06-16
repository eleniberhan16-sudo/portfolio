const projectCards = document.querySelectorAll('.project-card');
const projectDetail = document.getElementById('projectDetail');
const copyEmailBtn = document.getElementById('copyEmailBtn');
const copyStatus = document.getElementById('copyStatus');

projectCards.forEach((card) => {
  const button = card.querySelector('.project-button');
  button.addEventListener('click', () => {
    const title = card.dataset.title;
    const detail = card.dataset.detail;
    projectDetail.innerHTML = `
      <h3>${title}</h3>
      <p>${detail}</p>
    `;
  });
});

copyEmailBtn.addEventListener('click', async () => {
  const email = 'eleniberhan12@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = 'Email copied to clipboard!';
  } catch (error) {
    copyStatus.textContent = 'Copy failed. Please copy manually.';
  }
  setTimeout(() => {
    copyStatus.textContent = '';
  }, 3000);
});
