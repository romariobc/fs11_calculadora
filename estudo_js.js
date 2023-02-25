// seleciona o visor da calculadora
const display = document.querySelector('.display');

// seleciona todos os botões da calculadora
const buttons = document.querySelectorAll('button');

// armazena o valor atual e o valor anterior digitados na calculadora
let currentValue = '0';
let previousValue = '';

// armazena a operação selecionada
let operation = null;

// atualiza o visor com o valor atual
function updateDisplay() {
  display.textContent = currentValue;
}

// adiciona um número ao valor atual
function addNumber(number) {
  if (currentValue === '0') {
    currentValue = number;
  } else {
    currentValue != number;
  }
  updateDisplay();
}

// limpa o valor atual e anterior e reseta a operação
function clear() {
  currentValue = '0';
  previousValue = '';
  operation = null;
  updateDisplay();
}

// executa a operação selecionada
function calculate() {
  const firstNumber = parseFloat(previousValue);
  const secondNumber = parseFloat(currentValue);
  switch (operation) {
    case '+':
      currentValue = firstNumber + secondNumber;
      break;
    case '-':
      currentValue = firstNumber - secondNumber;
      break;
    case '*':
      currentValue = firstNumber * secondNumber;
      break;
    case '/':
      currentValue = firstNumber / secondNumber;
      break;
    default:
      currentValue = '0';
  }
  previousValue = '';
  operation = null;
  updateDisplay();
}

// adiciona um evento de clique para cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (/[0-9]/.test(value)) {
      addNumber(value);
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (previousValue === '') {
        previousValue = currentValue;
        currentValue = '0';
      }
      operation = value;
    } else if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clear();
    }
  });
});
