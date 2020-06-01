export function profession (property) {
  /* global P */
  P.BE_QUICK_OR_BE_KILLED = P.BRUTAL_MOMENTUM = P.BURST_PRECISION = P
    .DANGER_TIME = P.DEATH_PERCEPTION = P.DECIMATE_DEFENSES = P
      .DOUBLED_STANDARDS = P.ELEMENTS_OF_RAGE = P.FURIOUS_DEMISE = P
        .HEMATIC_FOCUS = P.HIDDEN_KILLER = P.HIGH_CALIBER = P.HUNTERS_TACTICS =
    P.KEEN_OBSERVER = P.PRECISE_STRIKE = P.RADIANT_POWER = P
      .RIGHTEOUS_INSTINCTS = P.RIGHT_HAND_STRENGTH = P.SILENT_SCOPE = P
        .SUPERIOR_ELEMENTS = P.TARGET_THE_WEAK = P.TWIN_FANGS = P
          .UNSUSPECTING_FOE = P.VICIOUS_QUARRY = 0;
  /* global calculate */
  calculate();
  const PROFESSION = ['P.ELEMENTALIST', 'P.ENGINEER', 'P.GUARDIAN', 'P.MESMER',
    'P.NECROMANCER', 'P.RANGER', 'P.REVENANT', 'P.THIEF', 'P.WARRIOR'];
  for (const A_PROFESSION in PROFESSION) {
    if (Object.prototype.hasOwnProperty.call(PROFESSION, A_PROFESSION) &&
      PROFESSION[A_PROFESSION] !== property) {
      document.getElementById(PROFESSION[A_PROFESSION]).style.borderColor =
        'transparent';
      P[PROFESSION[A_PROFESSION].substring(2)] = 0;
    } else {
      document.getElementById(property).style.borderColor = '#00FF00';
      P[PROFESSION[A_PROFESSION].substring(2)] = 1;
    }
  }
}
