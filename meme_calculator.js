const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button_class > div');

let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent.trim();

    switch (value) {
      case 'DEL':
        expression = expression.slice(0, -1);
        break;

      case 'RESULT':
        try {
          const result = eval(expression.replace(/x/g, '*').replace(/÷/g, '/'));
          expression = (Math.round(result * 1000) / 1000).toString();
        } catch (err) {
          expression = 'Error';
        }
        break;

      case 'LOG':
        try {
          const number = parseFloat(expression);
          const logResult = Math.log10(number);
          expression = (Math.round(logResult * 1000) / 1000).toString();
        } catch {
          expression = 'Error';
        }
        break;

      case '?':
        expression = Math.floor(Math.random() * 100).toString();
        break;

      case ',':
        expression += '.';
        break;

      default:
        expression += value;
    }

    display.textContent = expression;
  });
});
