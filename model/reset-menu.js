export const resetMenu = _ => {
  const MENU = ['menuHome', 'menuCritOpti'];
  for (const A_MENU in MENU) {
    if (Object.prototype.hasOwnProperty.call(MENU, A_MENU)) {
      document.getElementById(MENU[A_MENU]).style.borderColor = 'transparent';
    }
  }
};
