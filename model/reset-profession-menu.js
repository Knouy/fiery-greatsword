export function resetProfessionMenu () {
  const PROFESSION = ['engineer', 'ranger', 'thief', 'elementalist', 'mesmer',
    'necromancer', 'guardian', 'revenant', 'warrior'];
  for (const profession in PROFESSION) {
    document.getElementById(PROFESSION[profession]).style.borderColor =
      'transparent';
  }
}
