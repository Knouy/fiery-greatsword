export function resetMenu () {
  const MENU = ['menuCharacterOptimizer', 'menuHome', 'menuPrecisionCalculator',
    'menuUceCounter'];
  for (const A_MENU in MENU) {
    if (Object.prototype.hasOwnProperty.call(MENU, A_MENU)) {
      document.getElementById(MENU[A_MENU]).style.borderColor = 'transparent';
    }
  }
}
