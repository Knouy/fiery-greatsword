export function home () {
  resetMenu();
  document.getElementById('menuHome').style.borderBottomColor = '#FFFFFF';
  for (let i = 0; i < 18; i++) {
    new FadedText('home' + i).charFadeIn(1000, 1000, 1000);
  }
}
