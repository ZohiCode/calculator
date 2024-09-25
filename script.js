// Değişkenler
let display = document.getElementById('display');// Ekran
let operationHistory = document.getElementById('operation-history');// Geçmiş
let currentInput = '';
let operator = '';
let previousInput = '';
let history = '';

function appendNumber(number) {
  currentInput += number.toString(); 
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '') return; 
  currentInput += op; 
  updateDisplay();
}


function appendDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

// Tüm girdi temizle
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay();
  updateHistory('');
}


function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function appendParenthesis(paren) {
  currentInput += paren;
  updateDisplay();
}


function calculateResult() {
  try {
    const sanitizedInput = currentInput
      .replace(/×/g, '*')
      .replace(/÷/g, '/');

    const result = eval(sanitizedInput);
    currentInput = result.toString(); 
    updateDisplay();
    updateHistory(currentInput); 
  } catch (error) {
    display.value = "Error"; 
    currentInput = '';
  }
}

function updateDisplay() {
  display.value = currentInput;
}

function updateHistory(value) {
  operationHistory.innerText = value;
}
