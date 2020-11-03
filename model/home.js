export const home = _ => {
  // noinspection JSUnresolvedFunction
  resetMenu();
  document.getElementById('menuHome').style.borderBottomColor = '#ffffff';
  document.getElementById('title').style.marginTop = (window.screen.height -
    84 - window.screen.width * 896 / 3840) * 0.33 + 'px';
};
