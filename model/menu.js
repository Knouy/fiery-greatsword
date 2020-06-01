export function menu (string) {
  switch (string) {
    case 'home':
      /* global home */
      home();
      break;
    case 'precisionCalculator':
      /* global precisionCalculator */
      precisionCalculator();
      break;
    case 'uceCounter':
      /* global uceCounter */
      uceCounter();
      break;
  }
}
