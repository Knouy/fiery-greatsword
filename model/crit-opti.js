export const critOpti = _ => {
  // noinspection JSUnresolvedFunction
  resetMenu();
  document.getElementById('menuCritOpti').style.borderBottomColor = '#ffffff';
  // noinspection JSUnresolvedFunction
  loadCritOpti();
  // noinspection JSUnresolvedFunction
  calculate();
  $.get('view/critOpti/tooltipBox/critOpti.html', element => $('#tooltipBox')
    .html(element));
  /* global $ */
  $(_ => {
    // noinspection JSUnresolvedFunction
    setOnClick();
    // noinspection JSUnresolvedFunction
    setTooltipBox();
    /* Attribute */
    /* Agony Resistance */
    $('#P\\.AGONY_RESISTANCE').on('change', _ => {
      const AGONY_RESISTANCE = document.getElementById('P.AGONY_RESISTANCE');
      // noinspection JSIncompatibleTypesComparison
      if (AGONY_RESISTANCE.value === '' || AGONY_RESISTANCE.value.replace('.',
        '') < 0) {
        // noinspection JSUnresolvedVariable
        P.AGONY_RESISTANCE = 0;
      } else {
        // noinspection JSUnresolvedVariable
        P.AGONY_RESISTANCE = AGONY_RESISTANCE.value.replace('.', '') > 605 ? 605
          : parseInt(AGONY_RESISTANCE.value.replace('.', ''));
      }
      // noinspection JSUnresolvedVariable
      AGONY_RESISTANCE.value = P.AGONY_RESISTANCE;
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Vitality */
    $('#P\\.VITALITY').on('change', _ => {
      const VITALITY = document.getElementById('P.VITALITY');
      // noinspection JSIncompatibleTypesComparison
      if (VITALITY.value === '' || VITALITY.value.replace('.', '') < 1000) {
        // noinspection JSUnresolvedVariable
        P.VITALITY = 1000;
      } else {
        // noinspection JSUnresolvedVariable
        P.VITALITY = VITALITY.value.replace('.', '') > 9999 ? 9999 : VITALITY
          .value.replace('.', '');
      }
      // noinspection JSUnresolvedVariable
      VITALITY.value = P.VITALITY;
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Consumable */
    /* Anguished Tear of Alba */
    $('#P\\.ANGUISHED_TEAR_OF_ALBA').on('click', _ => {
      // noinspection JSUnresolvedVariable
      P.AGONY_RESISTANCE -= (P.ANGUISHED_TEAR_OF_ALBA * (10 + (P
        .AGONY_CHANNELER + P.RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES > 0
        ? 5 : 0)));
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.ANGUISHED_TEAR_OF_ALBA = onClick(1, 'P.ANGUISHED_TEAR_OF_ALBA');
      // noinspection JSUnresolvedVariable
      P.AGONY_RESISTANCE += (P.ANGUISHED_TEAR_OF_ALBA * (10 + (P
        .AGONY_CHANNELER + P.RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES > 0
        ? 5 : 0)));
      // noinspection JSUnresolvedVariable
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Effect */
    /* Rigorous Certainty */
    $('#P\\.RIGOROUS_CERTAINTY').on('click', _ => {
      // noinspection JSUnresolvedVariable
      P.AGONY_RESISTANCE -= P.RIGOROUS_CERTAINTY;
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.RIGOROUS_CERTAINTY = onClick(5, 'P.RIGOROUS_CERTAINTY');
      // noinspection JSUnresolvedVariable
      P.AGONY_RESISTANCE += P.RIGOROUS_CERTAINTY;
      // noinspection JSUnresolvedVariable
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Equipment */
    /* Amulet Slot */
    $('#P\\.AMULET_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.AMULET_SLOT = equipment('P.AMULET_SLOT', [108, 157, 71, 133, 72]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Back Slot */
    $('#P\\.BACK_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.BACK_SLOT = equipment('P.BACK_SLOT', [40, 63, 27, 52, 28]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Bear Trinket Slot */
    $('#P\\.BEAR_TRINKET_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.BEAR_TRINKET_SLOT = equipment('P.BEAR_TRINKET_SLOT', [74, 110, 49, 92,
        50]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Chest Slot */
    $('#P\\.CHEST_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.CHEST_SLOT = equipment('P.CHEST_SLOT', [101, 141, 67, 121]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Cube Trinket Slot */
    $('#P\\.CUBE_TRINKET_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.CUBE_TRINKET_SLOT = equipment('P.CUBE_TRINKET_SLOT', [74, 110, 49, 92,
        50]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Feet Slot */
    $('#P\\.FEET_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.FEET_SLOT = equipment('P.FEET_SLOT', [34, 47, 22, 40]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Hand Slot */
    $('#P\\.HAND_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.HAND_SLOT = equipment('P.HAND_SLOT', [34, 47, 22, 40]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Head Slot */
    $('#P\\.HEAD_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.HEAD_SLOT = equipment('P.HEAD_SLOT', [45, 63, 30, 54]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Left Ring Slot */
    $('#P\\.LEFT_RING_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.LEFT_RING_SLOT = equipment('P.LEFT_RING_SLOT', [85, 126, 56, 106, 57]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Leg Slot */
    $('#P\\.LEG_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.LEG_SLOT = equipment('P.LEG_SLOT', [67, 94, 44, 81]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Right Ring Slot */
    $('#P\\.RIGHT_RING_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.RIGHT_RING_SLOT = equipment('P.RIGHT_RING_SLOT', [85, 126, 56, 106, 57])
      ;
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Shield Slot */
    $('#P\\.SHIELD_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.SHIELD_SLOT = equipment('P.SHIELD_SLOT', [90, 125, 59, 108, 0]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Shoulder Slot */
    $('#P\\.SHOULDER_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.SHOULDER_SLOT = equipment('P.SHOULDER_SLOT', [34, 47, 22, 40]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Sword Slot */
    $('#P\\.SWORD_SLOT').on('click', _ => {
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.SWORD_SLOT = equipment('P.SWORD_SLOT', [90, 125, 59, 108, 179, 251, 118,
        215]);
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Fractal Attunement */
    /* Agony Channeler */
    $('#P\\.AGONY_CHANNELER').on('click', _ => {
      // noinspection JSUnresolvedFunction
      resetFractalAttunement();
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.AGONY_CHANNELER = onClick(10, 'P.AGONY_CHANNELER',
        'P.RECURSIVE_RESOURCING', 'P.MISTLOCK_SINGULARITIES');
      // noinspection JSUnresolvedVariable
      P.AGONY_RESISTANCE += (P.ANGUISHED_TEAR_OF_ALBA * (10 + (P
        .AGONY_CHANNELER + P.RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES > 0
        ? 5 : 0)));
      // noinspection JSUnresolvedVariable
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Recursive Resourcing */
    $('#P\\.RECURSIVE_RESOURCING').on('click', _ => {
      // noinspection JSUnresolvedFunction
      resetFractalAttunement();
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.RECURSIVE_RESOURCING = onClick(25, 'P.RECURSIVE_RESOURCING',
        'P.AGONY_CHANNELER', 'P.MISTLOCK_SINGULARITIES');
      // noinspection JSUnresolvedVariable
      P.AGONY_RESISTANCE += (P.ANGUISHED_TEAR_OF_ALBA * (10 + (P
        .AGONY_CHANNELER + P.RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES > 0
        ? 5 : 0)));
      // noinspection JSUnresolvedVariable
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Mistlock Singularities */
    $('#P\\.MISTLOCK_SINGULARITIES').on('click', _ => {
      // noinspection JSUnresolvedFunction
      resetFractalAttunement();
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.MISTLOCK_SINGULARITIES = onClick(30, 'P.MISTLOCK_SINGULARITIES',
        'P.AGONY_CHANNELER', 'P.RECURSIVE_RESOURCING');
      // noinspection JSUnresolvedVariable
      P.AGONY_RESISTANCE += (P.ANGUISHED_TEAR_OF_ALBA * (10 + (P
        .AGONY_CHANNELER + P.RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES > 0
        ? 5 : 0)));
      // noinspection JSUnresolvedVariable
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Profession */
    $('.profession').on('click', function () {
      $.get('view/critOpti/trait/' + this.id.substring(2).toLowerCase() +
        '.html', element => {
        $('#trait').html(element).hide().delay(1000).fadeIn();
        // noinspection JSUnresolvedFunction
        profession(this.id);
        // noinspection JSUnresolvedFunction
        setTraitOnClick();
        // noinspection JSUnresolvedFunction
        setTraitTooltipBox();
      });
    });
    /* Service */
    /* Agony Impedance */
    $('#P\\.AGONY_IMPEDANCE').on('change', _ => {
      const AGONY_IMPEDANCE = document.getElementById('P.AGONY_IMPEDANCE');
      if (AGONY_IMPEDANCE.value === '' || AGONY_IMPEDANCE.value.replace('.',
        '') < 0) {
        AGONY_IMPEDANCE.value = 0;
      } else {
        AGONY_IMPEDANCE.value = AGONY_IMPEDANCE.value.replace('.', '') > 4 ? 4
          : AGONY_IMPEDANCE.value.replace('.', '');
      }
      // noinspection JSUnresolvedVariable
      P.AGONY_RESISTANCE += 5 * AGONY_IMPEDANCE.value.replace('.', '') - P
        .AGONY_IMPEDANCE;
      // noinspection JSUnresolvedVariable
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      // noinspection JSUnresolvedVariable
      P.AGONY_IMPEDANCE = 5 * AGONY_IMPEDANCE.value.replace('.', '');
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Mist Attunement */
    /* Mist Attunement 1 */
    $('#P\\.MIST_ATTUNEMENT_1').on('click', _ => {
      // noinspection JSUnresolvedFunction
      resetMistAttunement();
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.MIST_ATTUNEMENT_1 = onClick(5, 'P.MIST_ATTUNEMENT_1',
        'P.MIST_ATTUNEMENT_2', 'P.MIST_ATTUNEMENT_3', 'P.MIST_ATTUNEMENT_4');
      // noinspection JSUnresolvedVariable
      P.AGONY_RESISTANCE += P.MIST_ATTUNEMENT_1;
      // noinspection JSUnresolvedVariable
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Mist Attunement 2 */
    $('#P\\.MIST_ATTUNEMENT_2').on('click', _ => {
      // noinspection JSUnresolvedFunction
      resetMistAttunement();
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.MIST_ATTUNEMENT_2 = onClick(10, 'P.MIST_ATTUNEMENT_2',
        'P.MIST_ATTUNEMENT_1', 'P.MIST_ATTUNEMENT_3', 'P.MIST_ATTUNEMENT_4');
      // noinspection JSUnresolvedVariable
      P.AGONY_RESISTANCE += P.MIST_ATTUNEMENT_2;
      // noinspection JSUnresolvedVariable
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Mist Attunement 3 */
    $('#P\\.MIST_ATTUNEMENT_3').on('click', _ => {
      // noinspection JSUnresolvedFunction
      resetMistAttunement();
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.MIST_ATTUNEMENT_3 = onClick(15, 'P.MIST_ATTUNEMENT_3',
        'P.MIST_ATTUNEMENT_1', 'P.MIST_ATTUNEMENT_2', 'P.MIST_ATTUNEMENT_4');
      // noinspection JSUnresolvedVariable
      P.AGONY_RESISTANCE += P.MIST_ATTUNEMENT_3;
      // noinspection JSUnresolvedVariable
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Mist Attunement 4 */
    $('#P\\.MIST_ATTUNEMENT_4').on('click', _ => {
      // noinspection JSUnresolvedFunction
      resetMistAttunement();
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.MIST_ATTUNEMENT_4 = onClick(25, 'P.MIST_ATTUNEMENT_4',
        'P.MIST_ATTUNEMENT_1', 'P.MIST_ATTUNEMENT_2', 'P.MIST_ATTUNEMENT_3');
      // noinspection JSUnresolvedVariable
      P.AGONY_RESISTANCE += P.MIST_ATTUNEMENT_4;
      // noinspection JSUnresolvedVariable
      document.getElementById('P.AGONY_RESISTANCE').value = P.AGONY_RESISTANCE;
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Sigil */
    const SIGIL_RADIO = ['P.MAJOR_SIGIL_OF_ACCURACY',
      'P.MINOR_SIGIL_OF_ACCURACY', 'P.SUPERIOR_SIGIL_OF_ACCURACY'];
    /* Major Sigil of Accuracy */
    $('#P\\.MAJOR_SIGIL_OF_ACCURACY').on('click', _ => {
      // noinspection JSUnresolvedFunction
      checkRadio(SIGIL_RADIO, 'P.MAJOR_SIGIL_OF_ACCURACY');
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.MAJOR_SIGIL_OF_ACCURACY = onClick(5, 'P.MAJOR_SIGIL_OF_ACCURACY',
        'P.MINOR_SIGIL_OF_ACCURACY', 'P.SUPERIOR_SIGIL_OF_ACCURACY');
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Minor Sigil of Accuracy */
    $('#P\\.MINOR_SIGIL_OF_ACCURACY').on('click', _ => {
      // noinspection JSUnresolvedFunction
      checkRadio(SIGIL_RADIO, 'P.MINOR_SIGIL_OF_ACCURACY');
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.MINOR_SIGIL_OF_ACCURACY = onClick(3, 'P.MINOR_SIGIL_OF_ACCURACY',
        'P.MAJOR_SIGIL_OF_ACCURACY', 'P.SUPERIOR_SIGIL_OF_ACCURACY');
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Superior Sigil of Accuracy */
    $('#P\\.SUPERIOR_SIGIL_OF_ACCURACY').on('click', _ => {
      // noinspection JSUnresolvedFunction
      checkRadio(SIGIL_RADIO, 'P.SUPERIOR_SIGIL_OF_ACCURACY');
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.SUPERIOR_SIGIL_OF_ACCURACY = onClick(7, 'P.SUPERIOR_SIGIL_OF_ACCURACY',
        'P.MAJOR_SIGIL_OF_ACCURACY', 'P.MINOR_SIGIL_OF_ACCURACY');
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Utility skill */
    const UTILITY_SKILL_RADIO = ['P.SIGNET_OF_AGILITY', 'P.SIGNET_OF_FIRE',
      'P.SIGNET_OF_FURY'];
    /* Signet of Agility */
    $('#P\\.SIGNET_OF_AGILITY').on('click', _ => {
      // noinspection JSUnresolvedFunction
      checkRadio(UTILITY_SKILL_RADIO, 'P.SIGNET_OF_AGILITY');
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.SIGNET_OF_AGILITY = onClick(180, 'P.SIGNET_OF_AGILITY');
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Signet of Fire */
    $('#P\\.SIGNET_OF_FIRE').on('click', _ => {
      // noinspection JSUnresolvedFunction
      checkRadio(UTILITY_SKILL_RADIO, 'P.SIGNET_OF_FIRE');
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.SIGNET_OF_FIRE = onClick(180, 'P.SIGNET_OF_FIRE');
      // noinspection JSUnresolvedFunction
      calculate();
    });
    /* Signet of Fury */
    $('#P\\.SIGNET_OF_FURY').on('click', _ => {
      // noinspection JSUnresolvedFunction
      checkRadio(UTILITY_SKILL_RADIO, 'P.SIGNET_OF_FURY');
      // noinspection JSUnresolvedVariable, JSUnresolvedFunction
      P.SIGNET_OF_FURY = onClick(180, 'P.SIGNET_OF_FURY');
      // noinspection JSUnresolvedFunction
      calculate();
    });
  });
};
