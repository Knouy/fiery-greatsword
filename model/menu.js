import { precisionCalculator, uceCounter } from '../dist/controller.min.js';

export function menu (string) {
  switch (string) {
    case 'home':
      /* global home */
      home();
      break;
    case 'precisionCalculator':
      precisionCalculator();
      break;
    case 'uceCounter':
      uceCounter();
      break;
  }
}
