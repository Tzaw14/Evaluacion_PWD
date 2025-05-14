let result = document.getElementById('result');

function calculate(value) {
  if (value === 'clear') {
    result.value = '';
  } else if (value === 'calculate') {
    try {
      result.value = eval(result.value);
    } catch {
      result.value = 'Error';
    }
  } else if (value === '%') {
    try {
      result.value = eval(result.value + "/100");
    } catch {
      result.value = 'Error';
    }
  } else if (value === '**2') {
    try {
      result.value = eval("(" + result.value + ")**2");
    } catch {
      result.value = 'Error';
    }
  } else if (value === '**3') {
    try {
      result.value = eval("(" + result.value + ")**3");
    } catch {
      result.value = 'Error';
    }
  } else {
    result.value += value;
  }
}

function calculateFunction(type) {
  try {
    let input = result.value;
    if (input === '') {
      result.value = 'Error';
      return;
    }

    let value = eval(input);

    switch (type) {
      case 'sqrt':
        result.value = Math.sqrt(value);
        break;
      case 'log':
        result.value = Math.log10(value);
        break;
      case 'sin':
        result.value = Math.sin(value * Math.PI / 180);
        break;
      case 'cos':
        result.value = Math.cos(value * Math.PI / 180);
        break;
      case 'tan':
        result.value = Math.tan(value * Math.PI / 180);
        break;
      default:
        result.value = 'Error';
    }
  } catch {
    result.value = 'Error';
  }
}
    