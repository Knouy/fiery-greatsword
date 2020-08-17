export function precisionCalculator () {
  resetMenu();
  document.getElementById('menuPrecisionCalculator').style.borderBottomColor =
    '#FFFFFF';
  loadPrecisionCalculator();
  calculate();
  $('#tooltipBox').load(
    'view/precisionCalculator/tooltipBox/precisionCalculator.html');
  /* global $ */
  $(() => {
    setOnClick();
    setTooltipBox();
    $('#P\\.AGONY_IMPEDANCE').on('change', () => {
      const AGONY_IMPEDANCE = document.getElementById('P.AGONY_IMPEDANCE');
      if (AGONY_IMPEDANCE.value === '' || AGONY_IMPEDANCE.value.replace('.', ''
      ) < 0) {
        AGONY_IMPEDANCE.value = 0;
      } else if (AGONY_IMPEDANCE.value.replace('.', '') > 4) {
        AGONY_IMPEDANCE.value = 4;
      } else {
        AGONY_IMPEDANCE.value = AGONY_IMPEDANCE.value.replace('.', '');
      }
      P.AGONY_RESISTANCE += 5 * AGONY_IMPEDANCE.value.replace('.', '') - P
        .AGONY_IMPEDANCE;
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      P.AGONY_IMPEDANCE = 5 * AGONY_IMPEDANCE.value.replace('.', '');
      calculate();
    });
    /* Attribute */
    /* Agony Resistance */
    $('#P\\.AGONY_RESISTANCE').on('change', () => {
      const AGONY_RESISTANCE = document.getElementById('P.AGONY_RESISTANCE');
      // noinspection JSIncompatibleTypesComparison
      if (AGONY_RESISTANCE.value === '' || AGONY_RESISTANCE.value.replace('.',
        '') < 0) {
        P.AGONY_RESISTANCE = 0;
      } else if (AGONY_RESISTANCE.value.replace('.', '') > 605) {
        P.AGONY_RESISTANCE = 605;
      } else {
        P.AGONY_RESISTANCE = parseInt(AGONY_RESISTANCE.value.replace('.', ''));
      }
      AGONY_RESISTANCE.value = P.AGONY_RESISTANCE;
      calculate();
    });
    /* Vitality */
    $('#P\\.VITALITY').on('change', () => {
      const VITALITY = document.getElementById('P.VITALITY');
      // noinspection JSIncompatibleTypesComparison
      if (VITALITY.value === '' || VITALITY.value.replace('.', '') < 1000) {
        P.VITALITY = 1000;
      } else if (VITALITY.value.replace('.', '') > 9999) {
        P.VITALITY = 9999;
      } else {
        P.VITALITY = VITALITY.value.replace('.', '');
      }
      VITALITY.value = P.VITALITY;
      calculate();
    });
    /* Consumable */
    /* Anguished Tear of Alba */
    $('#P\\.ANGUISHED_TEAR_OF_ALBA').on('click', () => {
      P.AGONY_RESISTANCE -= (P.ANGUISHED_TEAR_OF_ALBA * (10 + (P
        .AGONY_CHANNELER + P.RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES > 0
        ? 5 : 0)));
      P.ANGUISHED_TEAR_OF_ALBA = onClick(1, 'P.ANGUISHED_TEAR_OF_ALBA');
      P.AGONY_RESISTANCE += (P.ANGUISHED_TEAR_OF_ALBA * (10 + (P
        .AGONY_CHANNELER + P.RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES > 0
        ? 5 : 0)));
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      calculate();
    });
    /* Effect */
    /* Rigorous Certainty */
    $('#P\\.RIGOROUS_CERTAINTY').on('click', () => {
      P.AGONY_RESISTANCE -= P.RIGOROUS_CERTAINTY;
      P.RIGOROUS_CERTAINTY = onClick(5, 'P.RIGOROUS_CERTAINTY');
      P.AGONY_RESISTANCE += P.RIGOROUS_CERTAINTY;
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      calculate();
    });
    /* Equipment */
    /* Amulet Slot */
    $('#P\\.AMULET_SLOT').on('click', () => {
      P.AMULET_SLOT = equipment('P.AMULET_SLOT', [108, 157, 71, 133, 72]);
      calculate();
    });
    /* Back Slot */
    $('#P\\.BACK_SLOT').on('click', () => {
      P.BACK_SLOT = equipment('P.BACK_SLOT', [40, 63, 27, 52, 28]);
      calculate();
    });
    /* Bear Trinket Slot */
    $('#P\\.BEAR_TRINKET_SLOT').on('click', () => {
      P.BEAR_TRINKET_SLOT = equipment('P.BEAR_TRINKET_SLOT', [74, 110, 49, 92,
        50]);
      calculate();
    });
    /* Chest Slot */
    $('#P\\.CHEST_SLOT').on('click', () => {
      P.CHEST_SLOT = equipment('P.CHEST_SLOT', [101, 141, 67, 121]);
      calculate();
    });
    /* Cube Trinket Slot */
    $('#P\\.CUBE_TRINKET_SLOT').on('click', () => {
      P.CUBE_TRINKET_SLOT = equipment('P.CUBE_TRINKET_SLOT', [74, 110, 49, 92,
        50]);
      calculate();
    });
    /* Feet Slot */
    $('#P\\.FEET_SLOT').on('click', () => {
      P.FEET_SLOT = equipment('P.FEET_SLOT', [34, 47, 22, 40]);
      calculate();
    });
    /* Hand Slot */
    $('#P\\.HAND_SLOT').on('click', () => {
      P.HAND_SLOT = equipment('P.HAND_SLOT', [34, 47, 22, 40]);
      calculate();
    });
    /* Head Slot */
    $('#P\\.HEAD_SLOT').on('click', () => {
      P.HEAD_SLOT = equipment('P.HEAD_SLOT', [45, 63, 30, 54]);
      calculate();
    });
    /* Left Ring Slot */
    $('#P\\.LEFT_RING_SLOT').on('click', () => {
      P.LEFT_RING_SLOT = equipment('P.LEFT_RING_SLOT', [85, 126, 56, 106, 57]);
      calculate();
    });
    /* Leg Slot */
    $('#P\\.LEG_SLOT').on('click', () => {
      P.LEG_SLOT = equipment('P.LEG_SLOT', [67, 94, 44, 81]);
      calculate();
    });
    /* Right Ring Slot */
    $('#P\\.RIGHT_RING_SLOT').on('click', () => {
      P.RIGHT_RING_SLOT = equipment('P.RIGHT_RING_SLOT', [85, 126, 56, 106, 57])
      ;
      calculate();
    });
    /* Shield Slot */
    $('#P\\.SHIELD_SLOT').on('click', () => {
      P.SHIELD_SLOT = equipment('P.SHIELD_SLOT', [90, 125, 59, 108, 0]);
      calculate();
    });
    /* Shoulder Slot */
    $('#P\\.SHOULDER_SLOT').on('click', () => {
      P.SHOULDER_SLOT = equipment('P.SHOULDER_SLOT', [34, 47, 22, 40]);
      calculate();
    });
    /* Sword Slot */
    $('#P\\.SWORD_SLOT').on('click', () => {
      P.SWORD_SLOT = equipment('P.SWORD_SLOT', [90, 125, 59, 108, 179, 251, 118,
        215]);
      calculate();
    });
    /* Fractal Attunement */
    /* Agony Channeler */
    $('#P\\.AGONY_CHANNELER').on('click', () => {
      resetFractalAttunement();
      P.AGONY_CHANNELER = onClick(10, 'P.AGONY_CHANNELER',
        'P.RECURSIVE_RESOURCING', 'P.MISTLOCK_SINGULARITIES');
      P.AGONY_RESISTANCE += (P.ANGUISHED_TEAR_OF_ALBA * (10 + (P
        .AGONY_CHANNELER + P.RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES > 0
        ? 5 : 0)));
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      calculate();
    });
    /* Recursive Resourcing */
    $('#P\\.RECURSIVE_RESOURCING').on('click', () => {
      resetFractalAttunement();
      P.RECURSIVE_RESOURCING = onClick(25, 'P.RECURSIVE_RESOURCING',
        'P.AGONY_CHANNELER', 'P.MISTLOCK_SINGULARITIES');
      P.AGONY_RESISTANCE += (P.ANGUISHED_TEAR_OF_ALBA * (10 + (P
        .AGONY_CHANNELER + P.RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES > 0
        ? 5 : 0)));
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      calculate();
    });
    /* Mistlock Singularities */
    $('#P\\.MISTLOCK_SINGULARITIES').on('click', () => {
      resetFractalAttunement();
      P.MISTLOCK_SINGULARITIES = onClick(30, 'P.MISTLOCK_SINGULARITIES',
        'P.AGONY_CHANNELER', 'P.RECURSIVE_RESOURCING');
      P.AGONY_RESISTANCE += (P.ANGUISHED_TEAR_OF_ALBA * (10 + (P
        .AGONY_CHANNELER + P.RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES > 0
        ? 5 : 0)));
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      calculate();
    });
    /* Mist Attunement */
    /* Mist Attunement 1 */
    $('#P\\.MIST_ATTUNEMENT_1').on('click', () => {
      resetMistAttunement();
      P.MIST_ATTUNEMENT_1 = onClick(5, 'P.MIST_ATTUNEMENT_1',
        'P.MIST_ATTUNEMENT_2', 'P.MIST_ATTUNEMENT_3', 'P.MIST_ATTUNEMENT_4');
      P.AGONY_RESISTANCE += P.MIST_ATTUNEMENT_1;
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      calculate();
    });
    /* Mist Attunement 2 */
    $('#P\\.MIST_ATTUNEMENT_2').on('click', () => {
      resetMistAttunement();
      P.MIST_ATTUNEMENT_2 = onClick(10, 'P.MIST_ATTUNEMENT_2',
        'P.MIST_ATTUNEMENT_1', 'P.MIST_ATTUNEMENT_3', 'P.MIST_ATTUNEMENT_4');
      P.AGONY_RESISTANCE += P.MIST_ATTUNEMENT_2;
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      calculate();
    });
    /* Mist Attunement 3 */
    $('#P\\.MIST_ATTUNEMENT_3').on('click', () => {
      resetMistAttunement();
      P.MIST_ATTUNEMENT_3 = onClick(15, 'P.MIST_ATTUNEMENT_3',
        'P.MIST_ATTUNEMENT_1', 'P.MIST_ATTUNEMENT_2', 'P.MIST_ATTUNEMENT_4');
      P.AGONY_RESISTANCE += P.MIST_ATTUNEMENT_3;
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      calculate();
    });
    /* Mist Attunement 4 */
    $('#P\\.MIST_ATTUNEMENT_4').on('click', () => {
      resetMistAttunement();
      P.MIST_ATTUNEMENT_4 = onClick(25, 'P.MIST_ATTUNEMENT_4',
        'P.MIST_ATTUNEMENT_1', 'P.MIST_ATTUNEMENT_2', 'P.MIST_ATTUNEMENT_3');
      P.AGONY_RESISTANCE += P.MIST_ATTUNEMENT_4;
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      calculate();
    });
    /* Profession */
    $('.profession').on('click', function () {
      $('#trait').load('view/precisionCalculator/trait/' + this.id.substring(2)
        .toLowerCase() + '.html', () => {
        profession(this.id);
        setTraitOnClick();
        setTraitTooltipBox();
      }).hide().delay(1000).fadeIn();
    });
    /* Sigil */
    const SIGIL_RADIO = ['P.MAJOR_SIGIL_OF_ACCURACY',
      'P.MINOR_SIGIL_OF_ACCURACY', 'P.SUPERIOR_SIGIL_OF_ACCURACY'];
    /* Major Sigil of Accuracy */
    $('#P\\.MAJOR_SIGIL_OF_ACCURACY').on('click', () => {
      checkRadio(SIGIL_RADIO, 'P.MAJOR_SIGIL_OF_ACCURACY');
      P.MAJOR_SIGIL_OF_ACCURACY = onClick(5, 'P.MAJOR_SIGIL_OF_ACCURACY',
        'P.MINOR_SIGIL_OF_ACCURACY', 'P.SUPERIOR_SIGIL_OF_ACCURACY');
      calculate();
    });
    /* Minor Sigil of Accuracy */
    $('#P\\.MINOR_SIGIL_OF_ACCURACY').on('click', () => {
      checkRadio(SIGIL_RADIO, 'P.MINOR_SIGIL_OF_ACCURACY');
      P.MINOR_SIGIL_OF_ACCURACY = onClick(3, 'P.MINOR_SIGIL_OF_ACCURACY',
        'P.MAJOR_SIGIL_OF_ACCURACY', 'P.SUPERIOR_SIGIL_OF_ACCURACY');
      calculate();
    });
    /* Superior Sigil of Accuracy */
    $('#P\\.SUPERIOR_SIGIL_OF_ACCURACY').on('click', () => {
      checkRadio(SIGIL_RADIO, 'P.SUPERIOR_SIGIL_OF_ACCURACY');
      P.SUPERIOR_SIGIL_OF_ACCURACY = onClick(7, 'P.SUPERIOR_SIGIL_OF_ACCURACY',
        'P.MAJOR_SIGIL_OF_ACCURACY', 'P.MINOR_SIGIL_OF_ACCURACY');
      calculate();
    });
    /* Utility skill */
    const UTILITY_SKILL_RADIO = ['P.SIGNET_OF_AGILITY', 'P.SIGNET_OF_FIRE',
      'P.SIGNET_OF_FURY'];
    /* Signet of Agility */
    $('#P\\.SIGNET_OF_AGILITY').on('click', () => {
      checkRadio(UTILITY_SKILL_RADIO, 'P.SIGNET_OF_AGILITY');
      P.SIGNET_OF_AGILITY = onClick(180, 'P.SIGNET_OF_AGILITY');
      calculate();
    });
    /* Signet of Fire */
    $('#P\\.SIGNET_OF_FIRE').on('click', () => {
      checkRadio(UTILITY_SKILL_RADIO, 'P.SIGNET_OF_FIRE');
      P.SIGNET_OF_FIRE = onClick(180, 'P.SIGNET_OF_FIRE');
      calculate();
    });
    /* Signet of Fury */
    $('#P\\.SIGNET_OF_FURY').on('click', () => {
      checkRadio(UTILITY_SKILL_RADIO, 'P.SIGNET_OF_FURY');
      P.SIGNET_OF_FURY = onClick(180, 'P.SIGNET_OF_FURY');
      calculate();
    });
  });
}
