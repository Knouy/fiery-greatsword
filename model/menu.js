export function menu (string) {
  switch (string) {
    case 'home':
      home();
      break;
    case 'precisionCalculator':
      precisionCalculator();
      break;
    case 'uceCounter':
      uceCounter();
      break;
    case 'temp':
      temp();
      break;
    default:
      break;
  }
}
