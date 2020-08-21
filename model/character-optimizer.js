export function characterOptimizer () {
  resetMenu();
  document.getElementById('menuCharacterOptimizer').style.borderBottomColor =
    '#FFFFFF';
  fetchCharacters();
  /* global $ */
  $(() => {
    $('#fetchButton').on('click', () => fetchCharacters());
  });
}
