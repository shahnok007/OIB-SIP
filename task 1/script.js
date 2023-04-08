const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.buttons button');
const historyList = document.querySelector('.history ul');
const clearHistoryBtn = document.querySelector('.history button');

let history = [];

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText === 'C') {
      // Clear the display
      display.value = '';
    } 
    else if (button.innerText === 'CE') {
      // Evaluate the expression
      
      display.value = display.value.slice(0, -1);
      
    }else if (button.innerText === '%') {
      // Evaluate the expression
      
      display.value = display.value.slice(0, -1) / 10;
    
    }

    else if (button.innerText === '=') {
      // Evaluate the expression
      const result = eval(display.value);
      display.value = result;
      history.push(display.value);
      updateHistory();
    }
    
     else {
      // Append the button's value to the display
      display.value += button.innerText;
    }
  });
});

// Update the history list
function updateHistory() {
  // Clear the previous history
  historyList.innerHTML = '';

  // Add each entry to the history list
  history.forEach((entry, index) => {
    const li = document.createElement('li');
    li.innerText = `${index + 1}. ${entry}`;
    historyList.appendChild(li);
  });
}

// Add event listener to the clear history button
clearHistoryBtn.addEventListener('click', () => {
  // Clear the history array
  history = [];

  // Update the history list
  updateHistory();
});