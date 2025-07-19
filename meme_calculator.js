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
          // Replace × with * and ÷ with / if you use symbols
          const result = eval(expression.replace('x', '*'));
          expression = result.toString();
        } catch (err) {
          expression = 'Error';
        }
        break;

      case 'LOG':
        try {
          const number = parseFloat(expression);
          expression = Math.log10(number).toString();
        } catch {
          expression = 'Error';
        }
        break;

      case '?':
        expression = Math.floor(Math.random() * 100).toString(); // random fun
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
