export function resetProfessionMenu () {
  const PROFESSION = ['engineer', 'ranger', 'thief', 'elementalist', 'mesmer',
    'necromancer', 'guardian', 'revenant', 'warrior'];
  for (const A_PROFESSION in PROFESSION) {
    document.getElementById(PROFESSION[A_PROFESSION]).style.borderColor =
      'transparent';
  }
}
