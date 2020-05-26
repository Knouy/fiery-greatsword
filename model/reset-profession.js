export function resetProfession () {
  const PROFESSION = ['P.ELEMENTALIST', 'P.ENGINEER', 'P.GUARDIAN', 'P.MESMER',
    'P.NECROMANCER', 'P.RANGER', 'P.REVENANT', 'P.THIEF', 'P.WARRIOR'];
  for (const A_PROFESSION in PROFESSION) {
    if (Object.prototype.hasOwnProperty.call(PROFESSION, A_PROFESSION)) {
      document.getElementById(PROFESSION[A_PROFESSION]).style.borderColor =
        'transparent';
    }
  }
  /* global setTooltipBox */
  setTooltipBox();
  /* global P */
  P.ELEMENTALIST = P.ENGINEER = P.GUARDIAN = P.MESMER = P.NECROMANCER = P
    .RANGER = P.REVENANT = P.THIEF = P.WARRIOR = 0;
}
