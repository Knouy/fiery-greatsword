export const calculate = _ => {
  /* Attribute */
  /* Agony Resistance */
  // noinspection JSUnresolvedVariable
  const AGONY_RESISTANCE_PRECISION = P.AGONY_RESISTANCE * (P.AGONY_CHANNELER + P
    .RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES) / 100 * P
    .INFINITE_MIST_OMNIPOTION;
  /* Equipment */
  // noinspection JSUnresolvedVariable
  const EQUIPMENT = P.AMULET_SLOT + P.BACK_SLOT + P.BEAR_TRINKET_SLOT + P
    .CHEST_SLOT + P.CUBE_TRINKET_SLOT + P.FEET_SLOT + P.HAND_SLOT + P
    .HEAD_SLOT + P.LEFT_RING_SLOT + P.LEG_SLOT + P.RIGHT_RING_SLOT + P
    .SHIELD_SLOT + P.SHOULDER_SLOT + P.SWORD_SLOT;
  /* Trait */
  // noinspection JSUnresolvedVariable
  const TRAIT_RANGER_PRECISION = P.SPOTTER;
  // noinspection JSUnresolvedVariable
  const TRAIT_THIEF_PRECISION = P.BE_QUICK_OR_BE_KILLED + P.SILENT_SCOPE;
  // noinspection JSUnresolvedVariable
  const TRAIT_ELEMENTALIST_PRECISION = P.ELEMENTS_OF_RAGE * P.VITALITY;
  // noinspection JSUnresolvedVariable
  const TRAIT_NECROMANCER_PRECISION = P.FURIOUS_DEMISE;
  // noinspection JSUnresolvedVariable
  const TRAIT_GUARDIAN_PRECISION = P.RIGHT_HAND_STRENGTH;
  // noinspection JSUnresolvedVariable
  const UTILITY_SKILL = (P.DOUBLED_STANDARDS + 1) * P.BANNER_OF_DISCIPLINE + P
    .CONJURE_LIGHTNING_HAMMER + P.SIGNET_OF_AGILITY + P.SIGNET_OF_FIRE + P
    .SIGNET_OF_FURY;
  /* Precision */
  const PRECISION = 1000 + AGONY_RESISTANCE_PRECISION + EQUIPMENT +
    TRAIT_RANGER_PRECISION + TRAIT_THIEF_PRECISION +
    TRAIT_ELEMENTALIST_PRECISION + TRAIT_NECROMANCER_PRECISION +
    TRAIT_GUARDIAN_PRECISION + UTILITY_SKILL;
  // noinspection JSUnresolvedFunction
  demoStart(parseInt(document.getElementById('P.PRECISION').innerText.replace(
    ',', '')), 0, '', '', 'P.PRECISION', PRECISION);
  /* Boon */
  /* Fury */
  // noinspection JSUnresolvedVariable
  const BOON = P.FURY * 20;
  /* Sigil */
  /* Sigil of Accuracy */
  // noinspection JSUnresolvedVariable
  const SIGIL_OF_ACCURACY = P.MAJOR_SIGIL_OF_ACCURACY + P
    .MINOR_SIGIL_OF_ACCURACY + P.SUPERIOR_SIGIL_OF_ACCURACY;
  /* Trait */
  // noinspection JSUnresolvedVariable
  const TRAIT_ENGINEER_CRITICAL_CHANCE = P.HEMATIC_FOCUS * P.BLEEDING + P
    .HIGH_CALIBER;
  // noinspection JSUnresolvedVariable
  const TRAIT_RANGER_CRITICAL_CHANCE = P.HUNTERS_TACTICS + P.VICIOUS_QUARRY * P
    .FURY;
  // noinspection JSUnresolvedVariable
  const TRAIT_THIEF_CRITICAL_CHANCE = P.KEEN_OBSERVER + P.TWIN_FANGS;
  // noinspection JSUnresolvedVariable
  const TRAIT_ELEMENTALIST_CRITICAL_CHANCE = P.SUPERIOR_ELEMENTS * P.WEAKNESS;
  // noinspection JSUnresolvedVariable
  const TRAIT_MESMER_CRITICAL_CHANCE = P.DANGER_TIME * P.SLOW;
  // noinspection JSUnresolvedVariable
  const TRAIT_NECROMANCER_CRITICAL_CHANCE = P.DEATH_PERCEPTION + P
    .DECIMATE_DEFENSES * P.VULNERABILITY + P.TARGET_THE_WEAK;
  // noinspection JSUnresolvedVariable
  const TRAIT_GUARDIAN_CRITICAL_CHANCE = P.RADIANT_POWER * P.BURNING + P
    .RIGHTEOUS_INSTINCTS * P.RETALIATION;
  /* Critical Chance */
  // noinspection JSUnresolvedVariable
  let CRITICAL_CHANCE = 5 + (PRECISION - 1000) / 21 + BOON + SIGIL_OF_ACCURACY +
    TRAIT_ENGINEER_CRITICAL_CHANCE + TRAIT_RANGER_CRITICAL_CHANCE +
    TRAIT_THIEF_CRITICAL_CHANCE + TRAIT_ELEMENTALIST_CRITICAL_CHANCE +
    TRAIT_MESMER_CRITICAL_CHANCE + TRAIT_NECROMANCER_CRITICAL_CHANCE +
    TRAIT_GUARDIAN_CRITICAL_CHANCE + P.BRUTAL_MOMENTUM + P.UNSUSPECTING_FOE;
  // noinspection JSUnresolvedVariable
  if (P.BURST_PRECISION === 1 || P.HIDDEN_KILLER === 1 || P.PRECISE_STRIKE ===
    1 || P.SUPERIOR_SIGIL_OF_VISION === 1) {
    CRITICAL_CHANCE = 100;
  }
  // noinspection JSUnresolvedFunction
  demoStart(parseFloat(document.getElementById('P.CRITICAL_CHANCE').innerText
    .substring(0, document.getElementById('P.CRITICAL_CHANCE').innerText
      .length - 2)), 2, '', ' %', 'P.CRITICAL_CHANCE', CRITICAL_CHANCE.toFixed(2
  ));
};
