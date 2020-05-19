/* gulp minify-css */
/* terser controller/*.js -o dist/controller.min.js -c -m */
/* terser model/*.js -o dist/model.min.js -c -m */

import {
  count, countdown, demoStart, home, onClick, resetMenu, resetProfessionMenu
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

/* global $ */
$(($) => {
  const PAGE = $('#page');
  $('#menuHome').on('click', () => {
    PAGE.fadeOut(400, () => PAGE.load('view/home.html', () => home()).hide()
      .fadeIn());
  });
  $('#menuPrecisionCalculator').on('click', () => {
    PAGE.fadeOut(400, () => PAGE.load('view/precisionCalculator.html', () =>
      precisionCalulator()).hide().fadeIn());
  });
  $('#menuUceCounter').on('click', () => {
    PAGE.fadeOut(400, () => PAGE.load('view/uceCounter.html', () => {
      uceCounter();
      $('#fetch').on('click', () => uceCounter());
    }).hide().fadeIn());
  });
});

$('#page').load('view/home.html').hide().fadeIn();

setInterval(() => countdown(), 1000);

/* precisionCalculator.html */

/* Agony Impedance */
let agonyImpedance = 20;
/* Attribute */
let agonyResistance = 222;
let vitality = 1000;
/* Buff */
let fury = 1;
let retaliation = 0;
/* Condition */
let bleeding = 0;
let burning = 0;
let slow = 0;
let vulnerability = 0;
let weakness = 0;
/* Consumable */
let anguishedTearOfAlba = 1;
/* Equipment */
let headSlot = 45;
let shoulderSlot = 34;
let chestSlot = 101;
let handSlot = 34;
let legSlot = 67;
let feetSlot = 34;
let swordSlot = 90;
let shieldSlot = 90;
let backSlot = 40;
let bearTrinketSlot = 74;
let cubeTrinketSlot = 74;
let amuletSlot = 108;
let rightRingSlot = 85;
let leftRingSlot = 85;
/* Fractal Attunement */
let agonyChanneler = 0;
let recursiveResourcing = 0;
let mistlockSingularities = 30;
/* Gizmo */
let infiniteMistOmnipotion = 5;
/* Mist Attunement */
let mistAttunement1 = 0;
let mistAttunement2 = 0;
let mistAttunement3 = 0;
let mistAttunement4 = 25;
/* Profession */
let engineer = 0;
let ranger = 0;
let thief = 0;
let elementalist = 0;
let mesmer = 0;
let necromancer = 0;
let guardian = 0;
let revenant = 0;
let warrior = 0;
/* Sigil of Accuracy */
let minorSigilOfAccuracy = 0;
let majorSigilOfAccuracy = 0;
let superiorSigilOfAccuracy = 0;
/* Sigil of Vision */
let superiorSigilOfVision = 0;
/* Trait */
/* Engineer */
let hematicFocus = 0;
let highCaliber = 0;
/* Ranger */
let huntersTactics = 0;
let preciseStrike = 0;
let spotter = 0;
let viciousQuarry = 0;
/* Thief */
let beQuickOrBeKilled = 0;
let hiddenKiller = 0;
let keenObserver = 0;
let silentScope = 0;
let twinFangs = 0;
/* Elementalist */
let elementsOfRage = 0;
let superiorElements = 0;
/* Mesmer */
let dangerTime = 0;
/* Necromancer */
let deathPerception = 0;
let decimateDefenses = 0;
let furiousDemise = 0;
let targetTheWeak = 0;
/* Guardian */
let radiantPower = 0;
let rightHandStrength = 0;
let righteousInstinct = 0;
/* Revenant */
let brutalMomentum = 0;
/* Warrior */
let burstPrecision = 0;
let doubledStandards = 0;
let unsuspectingFoe = 0;
/* Utility skill */
let bannerOfDiscipline = 100;
let conjureLightningHammer = 0;
let signetOfAgility = 0;
let signetOfFire = 0;
let signetOfFury = 0;

function precisionCalulator () {
  document.title = 'Precision Calculator - Fiery Greatsword';
  resetMenu();
  document.getElementById('menuPrecisionCalculator').style.borderBottomColor =
    '#FFFFFF';
  loadPrecisionCalculator();
  calculate();
  $(($) => {
    /* Agony Impedance */
    $('#agonyImpedance').on('change', () => {
      if (document.getElementById('agonyImpedance').value === '' || document
        .getElementById('agonyImpedance').value.replace('.', '') < 0) {
        document.getElementById('agonyImpedance').value = 0;
      } else if (document.getElementById('agonyImpedance').value.replace('.', ''
      ) > 4) {
        document.getElementById('agonyImpedance').value = 4;
      } else {
        document.getElementById('agonyImpedance').value = document
          .getElementById('agonyImpedance').value.replace('.', '');
      }
      agonyResistance += 5 * document.getElementById('agonyImpedance').value
        .replace('.', '') - agonyImpedance;
      document.getElementById('agonyResistance').value = agonyResistance;
      agonyImpedance = 5 * document.getElementById('agonyImpedance').value
        .replace('.', '');
      calculate();
    });
    /* a Agony Impedance */
    $('#aAgonyImpedance').on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/agonyImpedance/agonyImpedance.html'
      );
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Attribute */
    /* Agony Resistance */
    $('#agonyResistance').on('change', () => {
      if (document.getElementById('agonyResistance').value === '' || document
        .getElementById('agonyResistance').value.replace('.', '') < 0) {
        agonyResistance = 0;
      } else if (document.getElementById('agonyResistance').value.replace('.',
        '') > 348) {
        agonyResistance = 348;
      } else {
        agonyResistance = parseInt(document.getElementById('agonyResistance')
          .value.replace('.', ''));
      }
      document.getElementById('agonyResistance').value = agonyResistance;
      calculate();
    });
    /* Vitality */
    $('#vitality').on('change', () => {
      if (document.getElementById('vitality').value === '' || document
        .getElementById('vitality').value.replace('.', '') < 1000) {
        vitality = 1000;
      } else if (document.getElementById('vitality').value.replace('.', '') >
        9999) {
        vitality = 9999;
      } else {
        vitality = document.getElementById('vitality').value.replace('.', '');
      }
      document.getElementById('vitality').value = vitality;
      calculate();
    });
    /* a Agony Resistance */
    $('#aAgonyResistance').on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/attribute/agonyResistance.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* a Critical Chance */
    $('#aCriticalChance').on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/attribute/criticalChance.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* a Precision */
    $('#aPrecision').on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/attribute/precision.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* a Vitality */
    $('#aVitality').on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/attribute/vitality.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Buff */
    /* Fury */
    $('#fury').on('click', () => {
      fury = onClick(1, 'fury');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/buff/fury.html'
      );
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Retaliation */
    $('#retaliation').on('click', () => {
      retaliation = onClick(1, 'retaliation');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/buff/retaliation.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Condition */
    /* Bleeding */
    $('#bleeding').on('click', () => {
      bleeding = onClick(1, 'bleeding');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/condition/bleeding.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Burning */
    $('#burning').on('click', () => {
      burning = onClick(1, 'burning');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/condition/burning.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Slow */
    $('#slow').on('click', () => {
      slow = onClick(1, 'slow');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/condition/slow.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Vulnerability */
    $('#vulnerability').on('click', () => {
      vulnerability = onClick(25, 'vulnerability');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/condition/vulnerability.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Weakness */
    $('#weakness').on('click', () => {
      weakness = onClick(1, 'weakness');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/condition/weakness.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Consumable */
    /* Anguished Tear of Alba */
    $('#anguishedTearOfAlba').on('click', () => {
      agonyResistance -= (anguishedTearOfAlba * (10 + (agonyChanneler +
      recursiveResourcing + mistlockSingularities > 0 ? 5 : 0)));
      anguishedTearOfAlba = onClick(1, 'anguishedTearOfAlba');
      agonyResistance += (anguishedTearOfAlba * (10 + (agonyChanneler +
      recursiveResourcing + mistlockSingularities > 0 ? 5 : 0)));
      document.getElementById('agonyResistance').value = agonyResistance;
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/consumable/a' +
        'nguishedTearOfAlba.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Equipment */
    /* Head Slot */
    $('#headSlot').on('click', () => {
      headSlot = equipment('headSlot', [45, 63, 30, 54]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/headSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Shoulder Slot */
    $('#shoulderSlot').on('click', () => {
      shoulderSlot = equipment('shoulderSlot', [34, 47, 22, 40]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/shoulderSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Chest Slot */
    $('#chestSlot').on('click', () => {
      chestSlot = equipment('chestSlot', [101, 141, 67, 121]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/chestSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Hand Slot */
    $('#handSlot').on('click', () => {
      handSlot = equipment('handSlot', [34, 47, 22, 40]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/handSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Leg Slot */
    $('#legSlot').on('click', () => {
      legSlot = equipment('legSlot', [67, 94, 44, 81]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/legSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Feet Slot */
    $('#feetSlot').on('click', () => {
      feetSlot = equipment('feetSlot', [34, 47, 22, 40]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/feetSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Sword Slot */
    $('#swordSlot').on('click', () => {
      swordSlot = equipment('swordSlot', [90, 125, 59, 108, 179, 251, 118, 215])
      ;
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/swordSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Shield Slot */
    $('#shieldSlot').on('click', () => {
      shieldSlot = equipment('shieldSlot', [90, 125, 59, 108, 0]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/shieldSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Back Slot */
    $('#backSlot').on('click', () => {
      backSlot = equipment('backSlot', [40, 63, 27, 52]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/backSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Bear Trinket Slot */
    $('#bearTrinketSlot').on('click', () => {
      bearTrinketSlot = equipment('bearTrinketSlot', [74, 110, 49, 92]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/bearTrinketSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Cube Trinket Slot */
    $('#cubeTrinketSlot').on('click', () => {
      cubeTrinketSlot = equipment('cubeTrinketSlot', [74, 110, 49, 92]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/cubeTrinketSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Amulet Slot */
    $('#amuletSlot').on('click', () => {
      amuletSlot = equipment('amuletSlot', [108, 157, 71, 133]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/amuletSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Right Ring Slot */
    $('#rightRingSlot').on('click', () => {
      rightRingSlot = equipment('rightRingSlot', [85, 126, 56, 106]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/rightRingSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Left Ring Slot */
    $('#leftRingSlot').on('click', () => {
      leftRingSlot = equipment('leftRingSlot', [85, 126, 56, 106]);
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/equipment/leftRingSlot.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Fractal Attunement */
    /* Agony Channeler */
    $('#agonyChanneler').on('click', () => {
      resetFractalAttunement();
      agonyChanneler = onClick(10, 'agonyChanneler', 'recursiveResourcing',
        'mistlockSingularities');
      agonyResistance += (anguishedTearOfAlba * (10 + (agonyChanneler +
      recursiveResourcing + mistlockSingularities > 0 ? 5 : 0)));
      document.getElementById('agonyResistance').value = agonyResistance;
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/fractalAttun' +
        'ement/agonyChanneler.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Recursive Resourcing */
    $('#recursiveResourcing').on('click', () => {
      resetFractalAttunement();
      recursiveResourcing = onClick(25, 'recursiveResourcing', 'agonyChanneler',
        'mistlockSingularities');
      agonyResistance += (anguishedTearOfAlba * (10 + (agonyChanneler +
      recursiveResourcing + mistlockSingularities > 0 ? 5 : 0)));
      document.getElementById('agonyResistance').value = agonyResistance;
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/fractalAttun' +
        'ement/recursiveResourcing.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Mistlock Singularities */
    $('#mistlockSingularities').on('click', () => {
      resetFractalAttunement();
      mistlockSingularities = onClick(30, 'mistlockSingularities',
        'agonyChanneler', 'recursiveResourcing');
      agonyResistance += (anguishedTearOfAlba * (10 + (agonyChanneler +
      recursiveResourcing + mistlockSingularities > 0 ? 5 : 0)));
      document.getElementById('agonyResistance').value = agonyResistance;
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/fractalAttun' +
        'ement/mistlockSingularities.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Gizmo */
    /* Infinite Mist Omnipotion */
    $('#infiniteMistOmnipotion').on('click', () => {
      infiniteMistOmnipotion = onClick(5, 'infiniteMistOmnipotion');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/gizmo/infiniteMistOmnipotion.html')
      ;
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Mist Attunement */
    /* Mist Attunement 1 */
    $('#mistAttunement1').on('click', () => {
      resetMistAttunement();
      mistAttunement1 = onClick(5, 'mistAttunement1', 'mistAttunement2',
        'mistAttunement3', 'mistAttunement4');
      agonyResistance += mistAttunement1;
      document.getElementById('agonyResistance').value = agonyResistance;
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/mistAttuneme' +
        'nt/mistAttunement1.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Mist Attunement 2 */
    $('#mistAttunement2').on('click', () => {
      resetMistAttunement();
      mistAttunement2 = onClick(10, 'mistAttunement2', 'mistAttunement1',
        'mistAttunement3', 'mistAttunement4');
      agonyResistance += mistAttunement2;
      document.getElementById('agonyResistance').value = agonyResistance;
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/mistAttuneme' +
        'nt/mistAttunement2.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Mist Attunement 3 */
    $('#mistAttunement3').on('click', () => {
      resetMistAttunement();
      mistAttunement3 = onClick(15, 'mistAttunement3', 'mistAttunement1',
        'mistAttunement2', 'mistAttunement4');
      agonyResistance += mistAttunement3;
      document.getElementById('agonyResistance').value = agonyResistance;
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/mistAttuneme' +
        'nt/mistAttunement3.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Mist Attunement 4 */
    $('#mistAttunement4').on('click', () => {
      resetMistAttunement();
      mistAttunement4 = onClick(25, 'mistAttunement4', 'mistAttunement1',
        'mistAttunement2', 'mistAttunement3');
      agonyResistance += mistAttunement4;
      document.getElementById('agonyResistance').value = agonyResistance;
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/mistAttuneme' +
        'nt/mistAttunement4.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Profession */
    /* Elementalist */
    $('#elementalist').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/elementalist.html',
        () => {
          resetTrait();
          elementalistMenu();
        });
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/profession/elementalist.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Engineer */
    $('#engineer').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/engineer.html', () => {
        resetTrait();
        engineerMenu();
      });
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/profession/engineer.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Guardian */
    $('#guardian').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/guardian.html', () => {
        resetTrait();
        guardianMenu();
      });
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/profession/guardian.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Mesmer */
    $('#mesmer').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/mesmer.html', () => {
        resetTrait();
        mesmerMenu();
      });
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/profession/mesmer.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Necromancer */
    $('#necromancer').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/necromancer.html',
        () => {
          resetTrait();
          necromancerMenu();
        });
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/profession/necromancer.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Ranger */
    $('#ranger').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/ranger.html', () => {
        resetTrait();
        rangerMenu();
      });
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/profession/ranger.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Revenant */
    $('#revenant').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/revenant.html', () => {
        resetTrait();
        revenantMenu();
      });
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/profession/revenant.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Thief */
    $('#thief').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/thief.html', () => {
        resetTrait();
        thiefMenu();
      });
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/profession/thief.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Warrior */
    $('#warrior').on('click', () => {
      $('#trait').load('view/precisionCalculator/trait/warrior.html', () => {
        resetTrait();
        warriorMenu();
      });
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/profession/warrior.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Sigil of Accuracy */
    /* Minor Sigil of Accuracy */
    $('#minorSigilOfAccuracy').on('click', () => {
      resetSigilOfAccuracy();
      minorSigilOfAccuracy = onClick(3, 'minorSigilOfAccuracy',
        'majorSigilOfAccuracy', 'superiorSigilOfAccuracy');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/sigilOfAccur' +
        'acy/minorSigilOfAccuracy.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Major Sigil of Accuracy */
    $('#majorSigilOfAccuracy').on('click', () => {
      resetSigilOfAccuracy();
      majorSigilOfAccuracy = onClick(5, 'majorSigilOfAccuracy',
        'minorSigilOfAccuracy', 'superiorSigilOfAccuracy');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/sigilOfAccur' +
        'acy/majorSigilOfAccuracy.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Superior Sigil of Accuracy */
    $('#superiorSigilOfAccuracy').on('click', () => {
      resetSigilOfAccuracy();
      superiorSigilOfAccuracy = onClick(7, 'superiorSigilOfAccuracy',
        'minorSigilOfAccuracy', 'majorSigilOfAccuracy');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/sigilOfAccur' +
        'acy/superiorSigilOfAccuracy.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Sigil of Vision */
    /* Superior Sigil of Vision */
    $('#superiorSigilOfVision').on('click', () => {
      superiorSigilOfVision = onClick(1, 'superiorSigilOfVision');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/sigilOfVisio' +
        'n/superiorSigilOfVision.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Trait */
    /* Spotter */
    $('#spotter').on('click', () => {
      spotter = onClick(100, 'spotter');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/ranger/spotter.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Utility skill */
    /* Banner of Discipline */
    $('#bannerOfDiscipline').on('click', () => {
      bannerOfDiscipline = onClick(100, 'bannerOfDiscipline');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/utilitySkill' +
        '/bannerOfDiscipline.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Conjure Lightning Hammer */
    $('#conjureLightningHammer').on('click', () => {
      conjureLightningHammer = onClick(180, 'conjureLightningHammer');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/utilitySkill' +
        '/conjureLightningHammer.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Signet of Agility */
    $('#signetOfAgility').on('click', () => {
      signetOfAgility = onClick(180, 'signetOfAgility');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/utilitySkill/signetOfAgility.html')
      ;
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Signet of Fire */
    $('#signetOfFire').on('click', () => {
      signetOfFire = onClick(180, 'signetOfFire');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/utilitySkill/signetOfFire.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Signet of Fury */
    $('#signetOfFury').on('click', () => {
      signetOfFury = onClick(180, 'signetOfFury');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/utilitySkill/signetOfFury.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
  });
}

function loadPrecisionCalculator () {
  document.getElementById('agonyImpedance').value = agonyImpedance / 5;
  document.getElementById('agonyResistance').value = agonyResistance;
  document.getElementById('vitality').value = vitality;
  const PROFESSION = [['engineer', ['hematicFocus', 10], ['highCaliber', 15]],
    ['ranger', ['huntersTactics', 10], ['preciseStrike', 100], ['viciousQuarry',
      10]], ['thief', ['beQuickOrBeKilled', 200], ['hiddenKiller', 100],
      ['keenObserver', 5], ['silentScope', 240], ['twinFangs', 7]],
    ['elementalist', ['elementsOfRage', 0.13], ['superiorElements', 10]],
    ['mesmer', ['dangerTime', 15]], ['necromancer', ['deathPerception', 33],
      ['decimateDefenses', 2], ['furiousDemise', 180], ['targetTheWeak', 28]],
    ['guardian', ['radiantPower', 10], ['rightHandStrength', 80],
      ['righteousInstinct', 25]], ['revenant', ['brutalMomentum', 33]],
    ['warrior', ['burstPrecision', 100], ['doubledStandards', 1],
      ['unsuspectingFoe', 50]]];
  const PRECISION_CALCULATOR = [['fury', 1], ['retaliation', 1], ['bleeding',
    1], ['burning', 1], ['slow', 1], ['vulnerability', 25], ['weakness', 1],
  ['anguishedTearOfAlba', 1], ['agonyChanneler', 10], ['recursiveResourcing',
    25], ['mistlockSingularities', 30], ['infiniteMistOmnipotion', 5],
  ['mistAttunement1', 5], ['mistAttunement2', 10], ['mistAttunement3', 15],
  ['mistAttunement4', 25], ['minorSigilOfAccuracy', 3], ['majorSigilOfAccuracy',
    5], ['superiorSigilOfAccuracy', 7], ['superiorSigilOfVision', 1],
  ['spotter', 100], ['bannerOfDiscipline', 100], ['conjureLightningHammer',
    180], ['signetOfAgility', 180], ['signetOfFire', 180], ['signetOfFury',
    180]];
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
    $('#trait').load('view/precisionCalculator/' + temp + '.html', () => {
      PRECISION_CALCULATOR.forEach(element => {
        if (eval(element[0]) === 0) {
          document.getElementById(element[0]).style.borderColor = 'transparent';
        } else if (eval(element[0]) === element[1]) {
          document.getElementById(element[0]).style.borderColor = '#00FF00';
        } else {
          document.getElementById(element[0]).style.borderColor = '#ED7F10';
        }
      });
      eval(temp + 'Menu()');
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
  const EQUIPMENT = ['headSlot', 'shoulderSlot', 'chestSlot', 'handSlot',
    'legSlot', 'feetSlot', 'swordSlot', 'shieldSlot', 'backSlot',
    'bearTrinketSlot', 'cubeTrinketSlot', 'amuletSlot', 'rightRingSlot',
    'leftRingSlot'];
  EQUIPMENT.forEach(element => {
    document.getElementById(element + 'Precision').innerText = eval(element);
  });
}

function calculate () {
  const AGONY_RESISTANCE_PRECISION = agonyResistance * (agonyChanneler +
    recursiveResourcing + mistlockSingularities) / 100 * infiniteMistOmnipotion;
  const EQUIPMENT = headSlot + shoulderSlot + chestSlot + handSlot + legSlot +
    feetSlot + swordSlot + shieldSlot + backSlot + bearTrinketSlot +
    cubeTrinketSlot + amuletSlot + rightRingSlot + leftRingSlot;
  const TRAIT_RANGER_PRECISION = spotter;
  const TRAIT_THIEF_PRECISION = beQuickOrBeKilled + silentScope;
  const TRAIT_ELEMENTALIST_PRECISION = elementsOfRage * vitality;
  const TRAIT_NECROMANCER_PRECISION = furiousDemise;
  const TRAIT_GUARDIAN_PRECISION = rightHandStrength;
  const UTILITY_SKILL = (doubledStandards + 1) * bannerOfDiscipline +
    conjureLightningHammer + signetOfAgility + signetOfFire + signetOfFury;
  const PRECISION = 1000 + AGONY_RESISTANCE_PRECISION + EQUIPMENT +
    TRAIT_RANGER_PRECISION + TRAIT_THIEF_PRECISION +
    TRAIT_ELEMENTALIST_PRECISION + TRAIT_NECROMANCER_PRECISION +
    TRAIT_GUARDIAN_PRECISION + UTILITY_SKILL;
  demoStart(parseInt(document.getElementById('precision').innerText.replace(',',
    '')), 0, '', '', 'precision', PRECISION);
  const BUFF = fury * 20;
  const SIGIL_OF_ACCURACY = minorSigilOfAccuracy + majorSigilOfAccuracy +
    superiorSigilOfAccuracy;
  const TRAIT_ENGINEER_CRITICAL_CHANCE = hematicFocus * bleeding + highCaliber;
  const TRAIT_RANGER_CRITICAL_CHANCE = huntersTactics + preciseStrike +
    viciousQuarry * fury;
  const TRAIT_THIEF_CRITICAL_CHANCE = hiddenKiller + keenObserver + twinFangs;
  const TRAIT_ELEMENTALIST_CRITICAL_CHANCE = superiorElements * weakness;
  const TRAIT_MESMER_CRITICAL_CHANCE = dangerTime * slow;
  const TRAIT_NECROMANCER_CRITICAL_CHANCE = deathPerception + decimateDefenses *
    vulnerability + targetTheWeak;
  const TRAIT_GUARDIAN_CRITICAL_CHANCE = radiantPower * burning +
    righteousInstinct * retaliation;
  const TRAIT_REVENANT_CRITICAL_CHANCE = brutalMomentum;
  const TRAIT_WARRIOR_CRITICAL_CHANCE = burstPrecision + unsuspectingFoe;
  let CRITICAL_CHANCE = 5 + (PRECISION - 1000) / 21 + BUFF + SIGIL_OF_ACCURACY +
    TRAIT_ENGINEER_CRITICAL_CHANCE + TRAIT_RANGER_CRITICAL_CHANCE +
    TRAIT_THIEF_CRITICAL_CHANCE + TRAIT_ELEMENTALIST_CRITICAL_CHANCE +
    TRAIT_MESMER_CRITICAL_CHANCE + TRAIT_NECROMANCER_CRITICAL_CHANCE +
    TRAIT_GUARDIAN_CRITICAL_CHANCE + TRAIT_REVENANT_CRITICAL_CHANCE +
    TRAIT_WARRIOR_CRITICAL_CHANCE;
  if (superiorSigilOfVision === 1) {
    CRITICAL_CHANCE = 100;
  }
  demoStart(parseFloat(document.getElementById('criticalChance').innerText
    .substring(0, document.getElementById('criticalChance').innerText.length -
      2)), 2, '', ' %', 'criticalChance', CRITICAL_CHANCE.toFixed(2));
}

function resetTrait () {
  hematicFocus = highCaliber = preciseStrike = huntersTactics = viciousQuarry =
    beQuickOrBeKilled = hiddenKiller = keenObserver = silentScope = twinFangs =
      elementsOfRage = superiorElements = dangerTime = deathPerception =
        decimateDefenses = furiousDemise = targetTheWeak = radiantPower =
          rightHandStrength = righteousInstinct = brutalMomentum =
            burstPrecision = doubledStandards = unsuspectingFoe = 0;
  calculate();
}

function elementalistMenu () {
  document.title = 'Elementalist - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('elementalist').style.borderColor = '#00FF00';
  elementalist = 1;
  $(($) => {
    /* Elements of Rage */
    $('#elementsOfRage').on('click', () => {
      elementsOfRage = onClick(0.13, 'elementsOfRage');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/trait/elemen' +
        'talist/elementsOfRage.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Superior Elements */
    $('#superiorElements').on('click', () => {
      superiorElements = onClick(10, 'superiorElements');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/trait/elemen' +
        'talist/superiorElements.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
  });
}

function engineerMenu () {
  document.title = 'Engineer - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('engineer').style.borderColor = '#00FF00';
  engineer = 1;
  $(($) => {
    /* Hematic Focus */
    $('#hematicFocus').on('click', () => {
      hematicFocus = onClick(10, 'hematicFocus');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/engineer/hematicFocus.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* High Caliber */
    $('#highCaliber').on('click', () => {
      highCaliber = onClick(15, 'highCaliber');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/engineer/highCaliber.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
  });
}

function guardianMenu () {
  document.title = 'Guardian - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('guardian').style.borderColor = '#00FF00';
  guardian = 1;
  $(($) => {
    /* Radiant Power */
    $('#radiantPower').on('click', () => {
      radiantPower = onClick(10, 'radiantPower');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/guardian/radiantPower.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Right-Hand Strength */
    $('#rightHandStrength').on('click', () => {
      rightHandStrength = onClick(80, 'rightHandStrength');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/trait/guardi' +
        'an/rightHandStrength.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Righteous Instinct */
    $('#righteousInstinct').on('click', () => {
      righteousInstinct = onClick(25, 'righteousInstinct');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/trait/guardi' +
        'an/righteousInstinct.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
  });
}

function mesmerMenu () {
  document.title = 'Mesmer - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('mesmer').style.borderColor = '#00FF00';
  mesmer = 1;
  $(($) => {
    /* Danger Time */
    $('#dangerTime').on('click', () => {
      dangerTime = onClick(15, 'dangerTime');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/mesmer/dangerTime.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
  });
}

function necromancerMenu () {
  document.title = 'Necromancer - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('necromancer').style.borderColor = '#00FF00';
  necromancer = 1;
  $(($) => {
    /* Death Perception */
    $('#deathPerception').on('click', () => {
      deathPerception = onClick(33, 'deathPerception');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/trait/necrom' +
        'ancer/deathPerception.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Decimate Defenses */
    $('#decimateDefenses').on('click', () => {
      decimateDefenses = onClick(2, 'decimateDefenses');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/trait/necrom' +
        'ancer/decimateDefenses.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Furious Demise */
    $('#furiousDemise').on('click', () => {
      furiousDemise = onClick(180, 'furiousDemise');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/trait/necrom' +
        'ancer/furiousDemise.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Target the Weak */
    $('#targetTheWeak').on('click', () => {
      targetTheWeak = onClick(28, 'targetTheWeak');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/trait/necrom' +
        'ancer/targetTheWeak.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
  });
}

function rangerMenu () {
  document.title = 'Ranger - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('ranger').style.borderColor = '#00FF00';
  ranger = 1;
  $(($) => {
    /* Hunter's Tactics */
    $('#huntersTactics').on('click', () => {
      huntersTactics = onClick(10, 'huntersTactics');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/ranger/huntersTactics.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Precise Strike */
    $('#preciseStrike').on('click', () => {
      preciseStrike = onClick(100, 'preciseStrike');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/ranger/preciseStrike.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Vicious Quarry */
    $('#viciousQuarry').on('click', () => {
      viciousQuarry = onClick(10, 'viciousQuarry');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/ranger/viciousQuarry.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
  });
}

function revenantMenu () {
  document.title = 'Revenant - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('revenant').style.borderColor = '#00FF00';
  revenant = 1;
  $(($) => {
    /* Brutal Momentum */
    $('#brutalMomentum').on('click', () => {
      brutalMomentum = onClick(33, 'brutalMomentum');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/revenant/brutalMomentum.html'
      );
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
  });
}

function thiefMenu () {
  document.title = 'Thief - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('thief').style.borderColor = '#00FF00';
  thief = 1;
  $(($) => {
    /* Be Quick or Be Killed */
    $('#beQuickOrBeKilled').on('click', () => {
      beQuickOrBeKilled = onClick(200, 'beQuickOrBeKilled');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/thief/beQuickOrBeKilled.html'
      );
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Hidden Killer */
    $('#hiddenKiller').on('click', () => {
      hiddenKiller = onClick(100, 'hiddenKiller');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/thief/hiddenKiller.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Keen Observer */
    $('#keenObserver').on('click', () => {
      keenObserver = onClick(5, 'keenObserver');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/thief/keenObserver.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Silent Scope */
    $('#silentScope').on('click', () => {
      silentScope = onClick(240, 'silentScope');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/thief/silentScope.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Twin Fangs */
    $('#twinFangs').on('click', () => {
      twinFangs = onClick(7, 'twinFangs');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/thief/twinFangs.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
  });
}

function warriorMenu () {
  document.title = 'Warrior - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('warrior').style.borderColor = '#00FF00';
  warrior = 1;
  $(($) => {
    /* Burst Precision */
    $('#burstPrecision').on('click', () => {
      burstPrecision = onClick(100, 'burstPrecision');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/warrior/burstPrecision.html')
      ;
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Doubled Standards */
    $('#doubledStandards').on('click', () => {
      doubledStandards = onClick(1, 'doubledStandards');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load('view/precisionCalculator/tooltipBox/trait/warrio' +
        'r/doubledStandards.html');
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
    /* Unsuspecting Foe */
    $('#unsuspectingFoe').on('click', () => {
      unsuspectingFoe = onClick(50, 'unsuspectingFoe');
      calculate();
    }).on('mouseenter', () => {
      $('#tooltipBox').load(
        'view/precisionCalculator/tooltipBox/trait/warrior/unsuspectingFoe.html'
      );
    }).on('mouseleave', () => {
      document.getElementById('tooltipBox').innerText = '';
    });
  });
}

function resetFractalAttunement () {
  agonyResistance -= (anguishedTearOfAlba * (10 + (agonyChanneler +
  recursiveResourcing + mistlockSingularities > 0 ? 5 : 0)));
  agonyChanneler = recursiveResourcing = mistlockSingularities = 0;
}

function resetMistAttunement () {
  agonyResistance -= mistAttunement1 + mistAttunement2 + mistAttunement3 +
    mistAttunement4;
  mistAttunement1 = mistAttunement2 = mistAttunement3 = mistAttunement4 = 0;
}

function resetSigilOfAccuracy () {
  minorSigilOfAccuracy = majorSigilOfAccuracy = superiorSigilOfAccuracy = 0;
}

function equipment (id, int) {
  let precision = int[0];
  for (let i = 0; i < int.length; i++) {
    if (eval(id) === int[i] && i !== int.length - 1) {
      precision = int[i + 1];
    }
  }
  document.getElementById(id + 'Precision').innerText = precision;
  return precision;
}

function resetProfession () {
  resetProfessionMenu();
  engineer = ranger = thief = elementalist = mesmer = necromancer = guardian =
    revenant = warrior = 0;
}

/* uceCounter.html */

let apiKey = '?access_token=74C4807F-4E95-5B4F-A649-2C47D7F54965C4414169-033B' +
  '-405A-BE36-5A638C14C1D2';

function uceCounter () {
  document.title = 'UCE Counter - Fiery Greatsword';
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
