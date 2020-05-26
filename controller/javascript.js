/* terser controller/*.js -o dist/controller.min.js -c -m */
/* terser model/*.js -o dist/model.min.js -c -m */

import {
  P, count, countdown, demoStart, menu, onClick, resetMenu, resetProfession,
  resetTooltipBox, setTooltipBox
} from '../dist/model.min.js';

/* index.html */

/* global VANTA */
VANTA.FOG({
  el: '#fog',
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xb341e3,
  midtoneColor: 0xa400ff,
  lowlightColor: 0x6325bb,
  baseColor: 0xfcfcfc,
  zoom: 1.80
});

const PAGE = $('#page');

/* global $ */
$(() => {
  $('.menu').on('click', function () {
    PAGE.fadeOut(400, () => PAGE.load('view/' + $(this).data('menu') + '.html',
      () => menu($(this).data('menu'))).hide().fadeIn());
  });
});

setInterval(() => countdown(), 1000);

/* home.html */

PAGE.load('view/home.html').hide().fadeIn();

/* precisionCalculator.html */

export function precisionCalculator () {
  resetMenu();
  document.getElementById('menuPrecisionCalculator').style.borderBottomColor =
    '#FFFFFF';
  loadPrecisionCalculator();
  calculate();
  resetTooltipBox();
  $(() => {
    setTooltipBox();
    /* Agony Impedance */
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
    /* Boon */
    /* Fury */
    $('#P\\.FURY').on('click', () => {
      P.FURY = onClick(1, 'P.FURY');
      calculate();
    });
    /* Retaliation */
    $('#P\\.RETALIATION').on('click', () => {
      P.RETALIATION = onClick(1, 'P.RETALIATION');
      calculate();
    });
    /* Condition */
    /* Bleeding */
    $('#P\\.BLEEDING').on('click', () => {
      P.BLEEDING = onClick(1, 'P.BLEEDING');
      calculate();
    });
    /* Burning */
    $('#P\\.BURNING').on('click', () => {
      P.BURNING = onClick(1, 'P.BURNING');
      calculate();
    });
    /* Slow */
    $('#P\\.SLOW').on('click', () => {
      P.SLOW = onClick(1, 'P.SLOW');
      calculate();
    });
    /* Vulnerability */
    $('#P\\.VULNERABILITY').on('click', () => {
      P.VULNERABILITY = onClick(25, 'P.VULNERABILITY');
      calculate();
    });
    /* Weakness */
    $('#P\\.WEAKNESS').on('click', () => {
      P.WEAKNESS = onClick(1, 'P.WEAKNESS');
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
      document.getElementById('agonyResistance').value = P.AGONY_RESISTANCE;
      calculate();
    });
    /* Effect */
    /* Rigorous Certainty */
    $('#P\\.RIGOROUS_CERTAINTY').on('click', () => {
      P.AGONY_RESISTANCE -= P.RIGOROUS_CERTAINTY;
      P.RIGOROUS_CERTAINTY = onClick(5, 'P.RIGOROUS_CERTAINTY');
      P.AGONY_RESISTANCE += P.RIGOROUS_CERTAINTY;
      document.getElementById('agonyResistance').value = P.AGONY_RESISTANCE;
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
    /* Gizmo */
    /* Infinite Mist Omnipotion */
    $('#P\\.INFINITE_MIST_OMNIPOTION').on('click', () => {
      P.INFINITE_MIST_OMNIPOTION = onClick(5, 'P.INFINITE_MIST_OMNIPOTION');
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
    /* Elementalist */
    $('#P\\.ELEMENTALIST').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/elementalist.html',
        () => {
          resetTrait();
          elementalistMenu();
        });
    });
    /* Engineer */
    $('#P\\.ENGINEER').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/engineer.html', () => {
        resetTrait();
        engineerMenu();
      });
    });
    /* Guardian */
    $('#P\\.GUARDIAN').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/guardian.html', () => {
        resetTrait();
        guardianMenu();
      });
    });
    /* Mesmer */
    $('#P\\.MESMER').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/mesmer.html', () => {
        resetTrait();
        mesmerMenu();
      });
    });
    /* Necromancer */
    $('#P\\.NECROMANCER').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/necromancer.html',
        () => {
          resetTrait();
          necromancerMenu();
        });
    });
    /* Ranger */
    $('#P\\.RANGER').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/ranger.html', () => {
        resetTrait();
        rangerMenu();
      });
    });
    /* Revenant */
    $('#P\\.REVENANT').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/revenant.html', () => {
        resetTrait();
        revenantMenu();
      });
    });
    /* Thief */
    $('#P\\.THIEF').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/thief.html', () => {
        resetTrait();
        thiefMenu();
      });
    });
    /* Warrior */
    $('#P\\.WARRIOR').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/warrior.html', () => {
        resetTrait();
        warriorMenu();
      });
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
    /* Superior Sigil of Vision */
    $('#P\\.SUPERIOR_SIGIL_OF_VISION').on('click', () => {
      P.SUPERIOR_SIGIL_OF_VISION = onClick(1, 'P.SUPERIOR_SIGIL_OF_VISION');
      calculate();
    });
    /* Trait */
    /* Spotter */
    $('#P\\.SPOTTER').on('click', () => {
      P.SPOTTER = onClick(100, 'P.SPOTTER');
      calculate();
    });
    /* Utility skill */
    /* Banner of Discipline */
    $('#P.BANNER_OF_DISCIPLINE').on('click', () => {
      P.BANNER_OF_DISCIPLINE = onClick(100, 'P.BANNER_OF_DISCIPLINE');
      calculate();
    });
    /* Conjure Lightning Hammer */
    $('#P\\.CONJURE_LIGHTNING_HAMMER').on('click', () => {
      P.CONJURE_LIGHTNING_HAMMER = onClick(180, 'P.CONJURE_LIGHTNING_HAMMER');
      calculate();
    });
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

function loadPrecisionCalculator () {
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
    $('#trait').load('view/precisionCalculator/trait/' + temp.substring(2)
      .toLowerCase() + '.html', () => {
      PRECISION_CALCULATOR.forEach(element => {
        if (eval(element[0]) === 0) {
          document.getElementById(element[0]).style.borderColor = 'transparent';
        } else if (eval(element[0]) === element[1]) {
          document.getElementById(element[0]).style.borderColor = '#00FF00';
        } else {
          document.getElementById(element[0]).style.borderColor = '#ED7F10';
        }
      });
      eval(temp.substring(2).toLowerCase() + 'Menu()');
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

function calculate () {
  const AGONY_RESISTANCE_PRECISION = P.AGONY_RESISTANCE * (P.AGONY_CHANNELER + P
    .RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES) / 100 * P
    .INFINITE_MIST_OMNIPOTION;
  const EQUIPMENT = P.AMULET_SLOT + P.BACK_SLOT + P.BEAR_TRINKET_SLOT + P
    .CHEST_SLOT + P.CUBE_TRINKET_SLOT + P.FEET_SLOT + P.HAND_SLOT + P
    .HEAD_SLOT + P.LEFT_RING_SLOT + P.LEG_SLOT + P.RIGHT_RING_SLOT + P
    .SHIELD_SLOT + P.SHOULDER_SLOT + P.SWORD_SLOT;
  const TRAIT_RANGER_PRECISION = P.SPOTTER;
  const TRAIT_THIEF_PRECISION = P.BE_QUICK_OR_BE_KILLED + P.SILENT_SCOPE;
  const TRAIT_ELEMENTALIST_PRECISION = P.ELEMENTS_OF_RAGE * P.VITALITY;
  const TRAIT_NECROMANCER_PRECISION = P.FURIOUS_DEMISE;
  const TRAIT_GUARDIAN_PRECISION = P.RIGHT_HAND_STRENGTH;
  const UTILITY_SKILL = (P.DOUBLED_STANDARDS + 1) * P.BANNER_OF_DISCIPLINE + P
    .CONJURE_LIGHTNING_HAMMER + P.SIGNET_OF_AGILITY + P.SIGNET_OF_FIRE + P
    .SIGNET_OF_FURY;
  const PRECISION = 1000 + AGONY_RESISTANCE_PRECISION + EQUIPMENT +
    TRAIT_RANGER_PRECISION + TRAIT_THIEF_PRECISION +
    TRAIT_ELEMENTALIST_PRECISION + TRAIT_NECROMANCER_PRECISION +
    TRAIT_GUARDIAN_PRECISION + UTILITY_SKILL;
  demoStart(parseInt(document.getElementById('P.PRECISION').innerText.replace(
    ',', '')), 0, '', '', 'P.PRECISION', PRECISION);
  const BUFF = P.FURY * 20;
  const SIGIL_OF_ACCURACY = P.MAJOR_SIGIL_OF_ACCURACY + P
    .MINOR_SIGIL_OF_ACCURACY + P.SUPERIOR_SIGIL_OF_ACCURACY;
  const TRAIT_ENGINEER_CRITICAL_CHANCE = P.HEMATIC_FOCUS * P.BLEEDING + P
    .HIGH_CALIBER;
  const TRAIT_RANGER_CRITICAL_CHANCE = P.HUNTERS_TACTICS + P.VICIOUS_QUARRY * P
    .FURY;
  const TRAIT_THIEF_CRITICAL_CHANCE = P.KEEN_OBSERVER + P.TWIN_FANGS;
  const TRAIT_ELEMENTALIST_CRITICAL_CHANCE = P.SUPERIOR_ELEMENTS * P.WEAKNESS;
  const TRAIT_MESMER_CRITICAL_CHANCE = P.DANGER_TIME * P.SLOW;
  const TRAIT_NECROMANCER_CRITICAL_CHANCE = P.DEATH_PERCEPTION + P
    .DECIMATE_DEFENSES * P.VULNERABILITY + P.TARGET_THE_WEAK;
  const TRAIT_GUARDIAN_CRITICAL_CHANCE = P.RADIANT_POWER * P.BURNING + P
    .RIGHTEOUS_INSTINCTS * P.RETALIATION;
  let CRITICAL_CHANCE = 5 + (PRECISION - 1000) / 21 + BUFF + SIGIL_OF_ACCURACY +
    TRAIT_ENGINEER_CRITICAL_CHANCE + TRAIT_RANGER_CRITICAL_CHANCE +
    TRAIT_THIEF_CRITICAL_CHANCE + TRAIT_ELEMENTALIST_CRITICAL_CHANCE +
    TRAIT_MESMER_CRITICAL_CHANCE + TRAIT_NECROMANCER_CRITICAL_CHANCE +
    TRAIT_GUARDIAN_CRITICAL_CHANCE + P.BRUTAL_MOMENTUM + P.UNSUSPECTING_FOE;
  if (P.BURST_PRECISION === 1 || P.HIDDEN_KILLER === 1 || P.PRECISE_STRIKE ===
    1 || P.SUPERIOR_SIGIL_OF_VISION === 1) {
    CRITICAL_CHANCE = 100;
  }
  demoStart(parseFloat(document.getElementById('P.CRITICAL_CHANCE').innerText
    .substring(0, document.getElementById('P.CRITICAL_CHANCE').innerText
      .length - 2)), 2, '', ' %', 'P.CRITICAL_CHANCE', CRITICAL_CHANCE.toFixed(2
  ));
}

function resetTrait () {
  P.BE_QUICK_OR_BE_KILLED = P.BRUTAL_MOMENTUM = P.BURST_PRECISION = P
    .DANGER_TIME = P.DEATH_PERCEPTION = P.DECIMATE_DEFENSES = P
      .DOUBLED_STANDARDS = P.ELEMENTS_OF_RAGE = P.FURIOUS_DEMISE = P
        .HEMATIC_FOCUS = P.HIDDEN_KILLER = P.HIGH_CALIBER = P.HUNTERS_TACTICS =
    P.KEEN_OBSERVER = P.PRECISE_STRIKE = P.RADIANT_POWER = P
      .RIGHTEOUS_INSTINCTS = P.RIGHT_HAND_STRENGTH = P.SILENT_SCOPE = P
        .SUPERIOR_ELEMENTS = P.TARGET_THE_WEAK = P.TWIN_FANGS = P
          .UNSUSPECTING_FOE = P.VICIOUS_QUARRY = 0;
  calculate();
}

function elementalistMenu () {
  resetProfession();
  document.getElementById('P.ELEMENTALIST').style.borderColor = '#00FF00';
  P.ELEMENTALIST = 1;
  $(() => {
    /* Elements of Rage */
    $('#P\\.ELEMENTS_OF_RAGE').on('click', () => {
      P.ELEMENTS_OF_RAGE = onClick(0.13, 'P.ELEMENTS_OF_RAGE');
      calculate();
    });
    /* Superior Elements */
    $('#P\\.SUPERIOR_ELEMENTS').on('click', () => {
      P.SUPERIOR_ELEMENTS = onClick(10, 'P.SUPERIOR_ELEMENTS');
      calculate();
    });
  });
}

function engineerMenu () {
  resetProfession();
  document.getElementById('P.ENGINEER').style.borderColor = '#00FF00';
  P.ENGINEER = 1;
  $(() => {
    /* Hematic Focus */
    $('#P\\.HEMATIC_FOCUS').on('click', () => {
      P.HEMATIC_FOCUS = onClick(10, 'P.HEMATIC_FOCUS');
      calculate();
    });
    /* High Caliber */
    $('#P\\.HIGH_CALIBER').on('click', () => {
      P.HIGH_CALIBER = onClick(15, 'P.HIGH_CALIBER');
      calculate();
    });
  });
}

function guardianMenu () {
  resetProfession();
  document.getElementById('P.GUARDIAN').style.borderColor = '#00FF00';
  P.GUARDIAN = 1;
  $(() => {
    /* Radiant Power */
    $('#P\\.RADIANT_POWER').on('click', () => {
      P.RADIANT_POWER = onClick(10, 'P.RADIANT_POWER');
      calculate();
    });
    /* Right-Hand Strength */
    $('#P\\.RIGHT_HAND_STRENGTH').on('click', () => {
      P.RIGHT_HAND_STRENGTH = onClick(80, 'P.RIGHT_HAND_STRENGTH');
      calculate();
    });
    /* Righteous Instinct */
    $('#P\\.RIGHTEOUS_INSTINCTS').on('click', () => {
      P.RIGHTEOUS_INSTINCTS = onClick(25, 'P.RIGHTEOUS_INSTINCTS');
      calculate();
    });
  });
}

function mesmerMenu () {
  resetProfession();
  document.getElementById('P.MESMER').style.borderColor = '#00FF00';
  P.MESMER = 1;
  $(() => {
    /* Danger Time */
    $('#P\\.DANGER_TIME').on('click', () => {
      P.DANGER_TIME = onClick(15, 'P.DANGER_TIME');
      calculate();
    });
  });
}

function necromancerMenu () {
  resetProfession();
  document.getElementById('P.NECROMANCER').style.borderColor = '#00FF00';
  P.NECROMANCER = 1;
  $(() => {
    /* Death Perception */
    $('#P\\.DEATH_PERCEPTION').on('click', () => {
      P.DEATH_PERCEPTION = onClick(33, 'P.DEATH_PERCEPTION');
      calculate();
    });
    /* Decimate Defenses */
    $('#P\\.DECIMATE_DEFENSES').on('click', () => {
      P.DECIMATE_DEFENSES = onClick(2, 'P.DECIMATE_DEFENSES');
      calculate();
    });
    /* Furious Demise */
    $('#P\\.FURIOUS_DEMISE').on('click', () => {
      P.FURIOUS_DEMISE = onClick(180, 'P.FURIOUS_DEMISE');
      calculate();
    });
    /* Target the Weak */
    $('#P\\.TARGET_THE_WEAK').on('click', () => {
      P.TARGET_THE_WEAK = onClick(28, 'P.TARGET_THE_WEAK');
      calculate();
    });
  });
}

function rangerMenu () {
  resetProfession();
  document.getElementById('P.RANGER').style.borderColor = '#00FF00';
  P.RANGER = 1;
  $(() => {
    /* Hunter's Tactics */
    $('#P\\.HUNTERS_TACTICS').on('click', () => {
      P.HUNTERS_TACTICS = onClick(10, 'P.HUNTERS_TACTICS');
      calculate();
    });
    /* Precise Strike */
    $('#P\\.PRECISE_STRIKE').on('click', () => {
      P.PRECISE_STRIKE = onClick(1, 'P.PRECISE_STRIKE');
      calculate();
    });
    /* Vicious Quarry */
    $('#P\\.VICIOUS_QUARRY').on('click', () => {
      P.VICIOUS_QUARRY = onClick(10, 'P.VICIOUS_QUARRY');
      calculate();
    });
  });
}

function revenantMenu () {
  resetProfession();
  document.getElementById('P.REVENANT').style.borderColor = '#00FF00';
  P.REVENANT = 1;
  $(() => {
    /* Brutal Momentum */
    $('#P\\.BRUTAL_MOMENTUM').on('click', () => {
      P.BRUTAL_MOMENTUM = onClick(33, 'P.BRUTAL_MOMENTUM');
      calculate();
    });
  });
}

function thiefMenu () {
  resetProfession();
  document.getElementById('P.THIEF').style.borderColor = '#00FF00';
  P.THIEF = 1;
  $(() => {
    /* Be Quick or Be Killed */
    $('#P\\.BE_QUICK_OR_BE_KILLED').on('click', () => {
      P.BE_QUICK_OR_BE_KILLED = onClick(200, 'P.BE_QUICK_OR_BE_KILLED');
      calculate();
    });
    /* Hidden Killer */
    $('#P\\.HIDDEN_KILLER').on('click', () => {
      P.HIDDEN_KILLER = onClick(1, 'P.HIDDEN_KILLER');
      calculate();
    });
    /* Keen Observer */
    $('#P\\.KEEN_OBSERVER').on('click', () => {
      P.KEEN_OBSERVER = onClick(5, 'P.KEEN_OBSERVER');
      calculate();
    });
    /* Silent Scope */
    $('#P\\.SILENT_SCOPE').on('click', () => {
      P.SILENT_SCOPE = onClick(240, 'P.SILENT_SCOPE');
      calculate();
    });
    /* Twin Fangs */
    $('#P\\.TWIN_FANGS').on('click', () => {
      P.TWIN_FANGS = onClick(7, 'P.TWIN_FANGS');
      calculate();
    });
  });
}

function warriorMenu () {
  resetProfession();
  document.getElementById('P.WARRIOR').style.borderColor = '#00FF00';
  P.WARRIOR = 1;
  $(() => {
    /* Burst Precision */
    $('#P\\.BURST_PRECISION').on('click', () => {
      P.BURST_PRECISION = onClick(1, 'P.BURST_PRECISION');
      calculate();
    });
    /* Doubled Standards */
    $('#P\\.DOUBLED_STANDARDS').on('click', () => {
      P.DOUBLED_STANDARDS = onClick(1, 'P.DOUBLED_STANDARDS');
      calculate();
    });
    /* Unsuspecting Foe */
    $('#P\\.UNSUSPECTING_FOE').on('click', () => {
      P.UNSUSPECTING_FOE = onClick(50, 'P.UNSUSPECTING_FOE');
      calculate();
    });
  });
}

function equipment (id, int) {
  let precision = int[0];
  for (let i = 0; i < int.length; i++) {
    if (eval(id) === int[i] && i !== int.length - 1) {
      precision = int[i + 1];
    }
  }
  document.getElementById(id + '_PRECISION').innerText = precision;
  return precision;
}

function resetFractalAttunement () {
  P.AGONY_RESISTANCE -= (P.ANGUISHED_TEAR_OF_ALBA * (10 + (P.AGONY_CHANNELER +
  P.RECURSIVE_RESOURCING + P.MISTLOCK_SINGULARITIES > 0 ? 5 : 0)));
  P.AGONY_CHANNELER = P.RECURSIVE_RESOURCING = P.MISTLOCK_SINGULARITIES = 0;
}

function resetMistAttunement () {
  P.AGONY_RESISTANCE -= P.MIST_ATTUNEMENT_1 + P.MIST_ATTUNEMENT_2 + P
    .MIST_ATTUNEMENT_3 + P.MIST_ATTUNEMENT_4;
  P.MIST_ATTUNEMENT_1 = P.MIST_ATTUNEMENT_2 = P.MIST_ATTUNEMENT_3 = P
    .MIST_ATTUNEMENT_4 = 0;
}

function checkRadio (array, property) {
  for (const PROPERTY in array) {
    if (Object.prototype.hasOwnProperty.call(array, PROPERTY) && array[PROPERTY
    ] !== property) {
      document.getElementById(array[PROPERTY]).style.borderColor = 'transparent'
      ;
      P[array[PROPERTY].substring(2)] = 0;
    }
  }
}

/* uceCounter.html */

let apiKey = '?access_token=74C4807F-4E95-5B4F-A649-2C47D7F54965C4414169-033B' +
  '-405A-BE36-5A638C14C1D2';

export function uceCounter () {
  resetMenu();
  document.getElementById('menuUceCounter').style.borderBottomColor = '#FFFFFF';
  const UCE = document.getElementById('uce');
  const REQUEST = 'https://api.guildwars2.com/v2/';
  const S = document.getElementById('s');
  const GOLD = document.getElementById('gold');
  const SILVER = document.getElementById('silver');
  apiKey = (document.getElementById('apiKey').value.length !== 0
    ? '?access_token=' + document.getElementById('apiKey').value : apiKey);
  document.getElementById('apiKey').value = '';
  UCE.innerText = '0';
  GOLD.innerHTML = '0&nbsp';
  SILVER.innerHTML = '&nbsp&nbsp0&nbsp';
  fetch(REQUEST + 'account/bank' + apiKey)
    .then(response => response.json())
    .then(responseJson => responseJson.forEach(element => {
      count(element, UCE, S, GOLD, SILVER);
    }));
  fetch(REQUEST + 'account/inventory' + apiKey)
    .then(response => response.json())
    .then(responseJson => responseJson.forEach(element => {
      count(element, UCE, S, GOLD, SILVER);
    }));
  fetch(REQUEST + 'characters' + apiKey)
    .then(response => response.json())
    .then(responseJson => responseJson.toString().split(',').forEach(
      element => {
        fetch(REQUEST + 'characters/' + element + '/inventory' + apiKey)
          .then(response0 => response0.json())
          /**
           * @namespace response0Json.bags */
          .then(response0Json => response0Json.bags.forEach(bag => {
            /**
             * @namespace bag.inventory */
            if (bag !== null) {
              bag.inventory.forEach(bagInventory => {
                count(bagInventory, UCE, S, GOLD, SILVER);
              });
            }
          }));
      }
    ));
}
