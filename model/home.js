export function home () {
  resetMenu();
  document.getElementById('menuHome').style.borderBottomColor = '#FFFFFF';
  randomVisibility(78, 'home', 2000, 1000);
}
