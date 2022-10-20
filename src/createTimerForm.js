export const timerForm = document.createElement('div');
export const startBtn = document.createElement('button'); 
export const stopBtn = document.createElement('button'); 
export const timerInput = document.createElement('input');

timerForm.classList.add('timer-form');
startBtn.classList.add('btn');
stopBtn.classList.add('btn');
timerInput.classList.add('time');

startBtn.innerText = "Start";
stopBtn.innerText = "Stop";
  
const label = document.createElement('p');
label.innerText = 'Enter interval';
timerForm.append(label, timerInput, startBtn, stopBtn);


