import './styles/style.css';
import { calcDates, renderCalcDates } from "./calcdate.js";
import * as createDate from './createCalcForm';
import * as createTimer from './createTimerForm.js';
import * as changeTab from './changeTabs.js';
import { Howl, Howler } from 'howler';

const root = document.querySelector('#root');

root.append(changeTab.calculationTab, changeTab.timerTab, createDate.dateForm, createTimer.timerForm);

createDate.dateForm.addEventListener('submit', (event) => {
    createDate.resultEl.innerText = '';
    event.preventDefault();

    let {firstDate, secondDate} = event.target.elements;

    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if ( firstDate && secondDate) {
        const res = calcDates(firstDate, secondDate);
        createDate.resultEl.innerHTML = renderCalcDates(res);
    } else {
        createDate.resultEl.innerHTML = formatError('Enter both dates');
    }
});

let isStoped = true;
let startTime;

window.setInterval(() => {
    if (!isStoped) {
        startTime--;
        createTimer.timerInput.value = startTime;
    } 
    if (startTime == 0) {
        isStoped = true;
        let audio = new Howl({
            src: ['sound.wav']
        });
        audio.play();
    }
}, 1000);

const startTimer = () => {
    startTime = createTimer.timerInput.value;
    if (startTime != 0) {
        isStoped = false;
    }
};

const stopTimer = () => {
    isStoped = true;
}

createTimer.startBtn.addEventListener('click', startTimer);
createTimer.stopBtn.addEventListener('click', stopTimer);