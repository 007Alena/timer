const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let timer;
  let remainingSeconds;

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const renderTime = () => {
    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = Math.floor(remainingSeconds % 60);

    timerEl.textContent = `${formatTime(hours)}:${formatTime(
      minutes
    )}:${formatTime(seconds)}`;
  };

  return (seconds) => {
    remainingSeconds = seconds;
    timer = setInterval(() => {
      if (remainingSeconds === 0) {
        clearInterval(timer);
        return;
      }
      
      remainingSeconds--;
      renderTime();
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

// Очистите input так, чтобы в значении оставались только числа
inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^\d]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
