export function temp () {
  resetMenu();
  document.getElementById('menuTemp').style.borderBottomColor = '#FFFFFF';
  temp1();
  /* global $ */
  $(() => {
    /* Button Listener */
    $('#fetchButton').on('click', () => temp1());
  });
}
