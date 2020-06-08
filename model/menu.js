export function menu (string) {
  switch (string) {
    case 'characterOptimizer':
      characterOptimizer();
      break;
    case 'home':
      home();
      break;
    case 'precisionCalculator':
      precisionCalculator();
      break;
    case 'uceCounter':
      uceCounter();
      break;
    default:
      break;
  }
}
