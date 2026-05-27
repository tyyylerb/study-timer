const display = document.getElementById('stopwatch-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');

let intervalId = null;
let elapsedSeconds = 0;

const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [hrs, mins, secs]
        .map((value) => String(value).padStart(2, '0'))
        .join(':');
};

const updateDisplay = () => {
    display.textContent = formatTime(elapsedSeconds);
};

const tick = () => {
    elapsedSeconds += 1;
    updateDisplay();
};

const startStopwatch = () => {
    if (intervalId !== null) return;
    intervalId = setInterval(tick, 1000);
};

const pauseStopwatch = () => {
    if (intervalId === null) return;
    clearInterval(intervalId);
    intervalId = null;
};

const stopStopwatch = () => {
    pauseStopwatch();
    elapsedSeconds = 0;
    updateDisplay();
};

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
stopBtn.addEventListener('click', stopStopwatch);

updateDisplay();
