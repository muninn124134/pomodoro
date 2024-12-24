const workTime = 25 * 60;

let currentTime = workTime;
let timerInterval = null;
let isRunning = false;

const timerNaTela = document.getElementById('timer');
const startButton = document.getElementById('start_button');
const pauseButton = document.getElementById('pause_button');
const resetButton = document.getElementById('reset_button');
const addButton = document.getElementById('plus_button');
const minusButton = document.getElementById('minus_button');

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
};

const atualizarTempo = (tempo) => document.getElementById('timer').innerHTML = formatTime(tempo);

function startTimer(){
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(() => {
        if (currentTime > 0){
            currentTime--;
            atualizarTempo(currentTime);
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            alert('Tempo acabou, hora de descansar');
        }
    }, 1000);
}

function pauseTimer(){
    isRunning = false;
    clearInterval(timerInterval);
}

function resetTimer(){
    clearInterval(timerInterval);
    isRunning = false;
    currentTime = workTime;
    atualizarTempo(currentTime)
}

function addTimer(){
    currentTime+=60;
    atualizarTempo(currentTime);
}

function minusTimer(){
    if (currentTime < 120){
        alert('Tempo muito pequeno, tente novamente');
        return
    }
    currentTime-=60;
    atualizarTempo(currentTime);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
addButton.addEventListener('click', addTimer);
minusButton.addEventListener('click', minusTimer);

atualizarTempo(currentTime);