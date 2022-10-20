import * as createTimer from './createTimerForm';
import * as createDate from './createCalcForm';

export const calculationTab = document.createElement('button');
export const timerTab = document.createElement('button');

calculationTab.classList.add('date-calc-btn');
calculationTab.innerText = "Date Calculation";

timerTab.classList.add('timer-btn');
timerTab.innerText = "Timer";

calculationTab.addEventListener('click', () => {
    createTimer.timerForm.style.display = 'none';
    createDate.dateForm.style.display = 'flex';
    
});

timerTab.addEventListener('click', () => {
    createTimer.timerForm.style.display = 'block';
    createDate.dateForm.style.display = 'none';
    
});