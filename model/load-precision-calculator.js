export function loadPrecisionCalculator () {
  document.getElementById('P.AGONY_IMPEDANCE').value = P.AGONY_IMPEDANCE / 5;
  document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
  document.getElementById('P.VITALITY').value = P.VITALITY;
  const PRECISION_CALCULATOR = [['P.FURY', 1], ['P.RETALIATION', 1],
    ['P.BLEEDING', 1], ['P.BURNING', 1], ['P.SLOW', 1], ['P.VULNERABILITY', 25],
    ['P.WEAKNESS', 1], ['P.ANGUISHED_TEAR_OF_ALBA', 1], ['P.RIGOROUS_CERTAINTY',
      5], ['P.AGONY_CHANNELER', 10], ['P.RECURSIVE_RESOURCING', 25],
    ['P.MISTLOCK_SINGULARITIES', 30], ['P.INFINITE_MIST_OMNIPOTION', 5],
    ['P.MIST_ATTUNEMENT_1', 5], ['P.MIST_ATTUNEMENT_2', 10],
    ['P.MIST_ATTUNEMENT_3', 15], ['P.MIST_ATTUNEMENT_4', 25],
    ['P.MAJOR_SIGIL_OF_ACCURACY', 5], ['P.MINOR_SIGIL_OF_ACCURACY', 3],
    ['P.SUPERIOR_SIGIL_OF_ACCURACY', 7], ['P.SUPERIOR_SIGIL_OF_VISION', 1],
    ['P.SPOTTER', 100], ['P.BANNER_OF_DISCIPLINE', 100],
    ['P.CONJURE_LIGHTNING_HAMMER', 180], ['P.SIGNET_OF_AGILITY', 180],
    ['P.SIGNET_OF_FIRE', 180], ['P.SIGNET_OF_FURY', 180]];
  const PROFESSION = [['P.ELEMENTALIST', ['P.ELEMENTS_OF_RAGE', 0.13],
    ['P.SUPERIOR_ELEMENTS', 10]], ['P.ENGINEER', ['P.HEMATIC.FOCUS', 10],
    ['P.HIGH_CALIBER', 15]], ['P.GUARDIAN', ['P.RADIANT_POWER', 10],
    ['P.RIGHT_HAND_STRENGTH', 80], ['P.RIGHTEAOUS_INSTINCTS', 25]], ['P.MESMER',
    ['P.DANGER_TIME', 15]], ['P.NECROMANCER', ['P.DEATH_PERCEPTION', 33],
    ['P.DECIMATE_DEFENSES', 2], ['P.FURIOUS_DEMISE', 180], ['P.TARGET_THE_WEAK',
      28]], ['P.RANGER', ['P.HUNTERS_TACTICS', 10], ['P.PRECISE_STRIKE', 1],
    ['P.VICIOUS_QUARRY', 10]], ['P.REVENANT', ['P.BRUTAL_MOMENTUM', 33]],
  ['P.THIEF', ['P.BE_QUICK_OR_BE_KILLED', 200], ['P.HIDDEN_KILLER', 1],
    ['P.KEEN_OBSERVER', 5], ['P.SILENT_SCOPE', 240], ['P.TWIN_FANGS', 7]],
  ['P.WARRIOR', ['P.BURST_PRECISION', 1], ['P.DOUBLED_STANDARDS', 1],
    ['P.UNSUSPECTING_FOE', 50]]];
  let temp = null;
  PROFESSION.forEach(element => {
    if (eval(element[0]) === 1) {
      for (let i = 1; i < element.length; i++) {
        PRECISION_CALCULATOR.push(element[i]);
      }
      temp = element[0];
    }
  });
  if (temp != null) {
    /* global $ */
    $('#trait').load('view/precisionCalculator/trait/' + temp.substring(2)
      .toLowerCase() + '.html', () => {
      document.getElementById(temp).style.borderColor = '#00FF00';
      PRECISION_CALCULATOR.forEach(element => {
        if (eval(element[0]) === 0) {
          document.getElementById(element[0]).style.borderColor = 'transparent';
        } else if (eval(element[0]) === element[1]) {
          document.getElementById(element[0]).style.borderColor = '#00FF00';
        } else {
          document.getElementById(element[0]).style.borderColor = '#ED7F10';
        }
      });
      setTraitOnClick();
      setTraitTooltipBox();
    });
  } else {
    PRECISION_CALCULATOR.forEach(element => {
      if (eval(element[0]) === 0) {
        document.getElementById(element[0]).style.borderColor = 'transparent';
      } else if (eval(element[0]) === element[1]) {
        document.getElementById(element[0]).style.borderColor = '#00FF00';
      } else {
        document.getElementById(element[0]).style.borderColor = '#ED7F10';
      }
    });
  }
  const EQUIPMENT = ['P.AMULET_SLOT', 'P.BACK_SLOT', 'P.BEAR_TRINKET_SLOT',
    'P.CHEST_SLOT', 'P.CUBE_TRINKET_SLOT', 'P.FEET_SLOT', 'P.HAND_SLOT',
    'P.HEAD_SLOT', 'P.LEFT_RING_SLOT', 'P.LEG_SLOT', 'P.RIGHT_RING_SLOT',
    'P.SHIELD_SLOT', 'P.SHOULDER_SLOT', 'P.SWORD_SLOT'];
  EQUIPMENT.forEach(element => {
    document.getElementById(element + '_PRECISION').innerText = eval(element);
  });
}
