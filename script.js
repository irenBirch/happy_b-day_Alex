window.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('happy-title');
  const audio = document.getElementById('birthday-audio');
  const intro = document.getElementById('intro');
  const congrats = document.getElementById('congrats-page');

  // Запуск музыки и показ пуш-уведомления
  const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

playBtn.addEventListener('click', () => {
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
});
  setTimeout(() => {
    showNotification();
  }, 5000);

  // Переход на поздравление по клику на надпись
  title.addEventListener('click', () => {
    intro.classList.add('hidden');
    congrats.classList.remove('hidden');
  });

  // Генерация шариков
  generateBalloons(30);
  
});

function showNotification() {
  alert('Нажми на надпись "Happy Birthday Mr. President" а ну и песенку послушай:))');
}

function generateBalloons(count = 20) {
  const container = document.querySelector('.balloons-container');
  for (let i = 0; i < count; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${4 + Math.random() * 4}s`;
    balloon.style.animationDelay = `${Math.random() * 3}s`;
    container.appendChild(balloon);
  }
}
