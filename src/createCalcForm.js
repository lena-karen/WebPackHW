export const dateForm = document.createElement('form');
export const resultEl = document.createElement('p');

dateForm.classList.add('date-calc-form');
resultEl.classList.add('date-calc-res');

dateForm.innerHTML = `
        <label>Enter the first date
            <input type="date" name="firstDate">
        </label>
        <label>Enter the second date
            <input type="date" name="secondDate">
        </label>
        <button class="calc-btn btn">Calculate</button>
    `;

dateForm.append(resultEl);