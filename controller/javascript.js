/* terser controller/*.js -o terser/controller.min.js -c -m */
/* terser model/*.js -o terser/model.min.js -c -m */

import { count, countdown, home, onClick, resetProfessionMenu } from
  '../terser/model.min.js';

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
/* Agony Impedance */
let agonyImpedance = 20;
/* Attribute */
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
let anguishedTearOfAlba = 10;
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
/* Sigil of Accuracy */
let minorSigilOfAccuracy = 0;
let majorSigilOfAccuracy = 0;
let superiorSigilOfAccuracy = 0;
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

function precisionCalulator () {
  document.title = 'Precision Calculator - Fiery Greatsword';
  loadPrecisionCalculator();
  calculate();
  $(($) => {
    /* Profession */
    $('#engineer').on('click', () => {
      $('#trait').load('view/precisionCalculator/engineer.html', () => {
        resetTrait();
        engineerMenu();
      }).hide().fadeIn();
    });
    $('#ranger').on('click', () => {
      $('#trait').load('view/precisionCalculator/ranger.html', () => {
        resetTrait();
        rangerMenu();
      }).hide().fadeIn();
    });
    $('#thief').on('click', () => {
      $('#trait').load('view/precisionCalculator/thief.html', () => {
        resetTrait();
        thiefMenu();
      }).hide().fadeIn();
    });
    $('#elementalist').on('click', () => {
      $('#trait').load('view/precisionCalculator/elementalist.html', () => {
        resetTrait();
        elementalistMenu();
      }).hide().fadeIn();
    });
    $('#mesmer').on('click', () => {
      $('#trait').load('view/precisionCalculator/mesmer.html', () => {
        resetTrait();
        mesmerMenu();
      }).hide().fadeIn();
    });
    $('#necromancer').on('click', () => {
      $('#trait').load('view/precisionCalculator/necromancer.html', () => {
        resetTrait();
        necromancerMenu();
      }).hide().fadeIn();
    });
    $('#guardian').on('click', () => {
      $('#trait').load('view/precisionCalculator/guardian.html', () => {
        resetTrait();
        guardianMenu();
      }).hide().fadeIn();
    });
    $('#revenant').on('click', () => {
      $('#trait').load('view/precisionCalculator/revenant.html', () => {
        resetTrait();
        revenantMenu();
      }).hide().fadeIn();
    });
    $('#warrior').on('click', () => {
      $('#trait').load('view/precisionCalculator/warrior.html', () => {
        resetTrait();
        warriorMenu();
      }).hide().fadeIn();
    });
    /* Agony Impedance */
    const $AGONY_IMPEDANCE = $('#agonyImpedance');
    $AGONY_IMPEDANCE.on('keypress', (e) => {
      e.preventDefault();
    });
    $AGONY_IMPEDANCE.on('change', () => {
      agonyImpedance = 5 * document.getElementById('agonyImpedance').value;
      calculate();
    });
    /* Buff */
    $('#fury').on('click', () => {
      fury = onClick(1, 'fury');
      calculate();
    });
    $('#retaliation').on('click', () => {
      retaliation = onClick(1, 'retaliation');
      calculate();
    });
    /* Condition */
    $('#bleeding').on('click', () => {
      bleeding = onClick(1, 'bleeding');
      calculate();
    });
    $('#burning').on('click', () => {
      burning = onClick(1, 'burning');
      calculate();
    });
    $('#slow').on('click', () => {
      slow = onClick(1, 'slow');
      calculate();
    });
    $('#vulnerability').on('click', () => {
      vulnerability = onClick(25, 'vulnerability');
      calculate();
    });
    $('#weakness').on('click', () => {
      weakness = onClick(1, 'weakness');
      calculate();
    });
    /* Consumable */
    $('#anguishedTearOfAlba').on('click', () => {
      anguishedTearOfAlba = onClick(10, 'anguishedTearOfAlba');
      calculate();
    });
    /* Fractal Attunement */
    $('#agonyChanneler').on('click', () => {
      resetFractalAttunement();
      agonyChanneler = onClick(10, 'agonyChanneler', 'recursiveResourcing',
        'mistlockSingularities');
      calculate();
    });
    $('#recursiveResourcing').on('click', () => {
      resetFractalAttunement();
      recursiveResourcing = onClick(25, 'recursiveResourcing', 'agonyChanneler',
        'mistlockSingularities');
      calculate();
    });
    $('#mistlockSingularities').on('click', () => {
      resetFractalAttunement();
      mistlockSingularities = onClick(30, 'mistlockSingularities',
        'agonyChanneler', 'recursiveResourcing');
      calculate();
    });
    /* Gizmo */
    $('#infiniteMistOmnipotion').on('click', () => {
      infiniteMistOmnipotion = onClick(5, 'infiniteMistOmnipotion');
      calculate();
    });
    /* Mist Attunement */
    $('#mistAttunement1').on('click', () => {
      resetMistAttunement();
      mistAttunement1 = onClick(5, 'mistAttunement1', 'mistAttunement2',
        'mistAttunement3', 'mistAttunement4');
      calculate();
    });
    $('#mistAttunement2').on('click', () => {
      resetMistAttunement();
      mistAttunement2 = onClick(10, 'mistAttunement2', 'mistAttunement1',
        'mistAttunement3', 'mistAttunement4');
      calculate();
    });
    $('#mistAttunement3').on('click', () => {
      resetMistAttunement();
      mistAttunement3 = onClick(15, 'mistAttunement3', 'mistAttunement1',
        'mistAttunement2', 'mistAttunement4');
      calculate();
    });
    $('#mistAttunement4').on('click', () => {
      resetMistAttunement();
      mistAttunement4 = onClick(25, 'mistAttunement4', 'mistAttunement1',
        'mistAttunement2', 'mistAttunement3');
      calculate();
    });
    /* Sigil of Accuracy */
    $('#minorSigilOfAccuracy').on('click', () => {
      resetSigilOfAccuracy();
      minorSigilOfAccuracy = onClick(3, 'minorSigilOfAccuracy',
        'majorSigilOfAccuracy', 'superiorSigilOfAccuracy');
      calculate();
    });
    $('#majorSigilOfAccuracy').on('click', () => {
      resetSigilOfAccuracy();
      majorSigilOfAccuracy = onClick(5, 'majorSigilOfAccuracy',
        'minorSigilOfAccuracy', 'superiorSigilOfAccuracy');
      calculate();
    });
    $('#superiorSigilOfAccuracy').on('click', () => {
      resetSigilOfAccuracy();
      superiorSigilOfAccuracy = onClick(7, 'superiorSigilOfAccuracy',
        'minorSigilOfAccuracy', 'majorSigilOfAccuracy');
      calculate();
    });
    /* Utility skill */
    $('#bannerOfDiscipline').on('click', () => {
      bannerOfDiscipline = onClick(100, 'bannerOfDiscipline');
      calculate();
    });
    $('#conjureLightningHammer').on('click', () => {
      conjureLightningHammer = onClick(180, 'conjureLightningHammer');
      calculate();
    });
    $('#signetOfAgility').on('click', () => {
      signetOfAgility = onClick(180, 'signetOfAgility');
      calculate();
    });
    $('#signetOfFire').on('click', () => {
      signetOfFire = onClick(180, 'signetOfFire');
      calculate();
    });
    $('#signetOfFury').on('click', () => {
      signetOfFury = onClick(180, 'signetOfFury');
      calculate();
    });
    /* Attribute */
    $('#vitality').on('change', () => {
      vitality = document.getElementById('vitality').value;
      calculate();
    });
    /* Equipment */
    $('#headSlot').on('click', () => {
      headSlot = equipment('headSlot', [45, 63, 30, 54]);
      calculate();
    });
    $('#shoulderSlot').on('click', () => {
      shoulderSlot = equipment('shoulderSlot', [34, 47, 22, 40]);
      calculate();
    });
    $('#chestSlot').on('click', () => {
      chestSlot = equipment('chestSlot', [101, 141, 67, 121]);
      calculate();
    });
    $('#handSlot').on('click', () => {
      handSlot = equipment('handSlot', [34, 47, 22, 40]);
      calculate();
    });
    $('#legSlot').on('click', () => {
      legSlot = equipment('legSlot', [67, 94, 44, 81]);
      calculate();
    });
    $('#feetSlot').on('click', () => {
      feetSlot = equipment('feetSlot', [34, 47, 22, 40]);
      calculate();
    });
    $('#swordSlot').on('click', () => {
      swordSlot = equipment('swordSlot', [90, 125, 59, 108, 179, 251, 118, 215])
      ;
      calculate();
    });
    $('#shieldSlot').on('click', () => {
      shieldSlot = equipment('shieldSlot', [90, 125, 59, 108, 0]);
      calculate();
    });
    $('#backSlot').on('click', () => {
      backSlot = equipment('backSlot', [40, 63, 27, 52]);
      calculate();
    });
    $('#bearTrinketSlot').on('click', () => {
      bearTrinketSlot = equipment('bearTrinketSlot', [74, 110, 49, 92]);
      calculate();
    });
    $('#cubeTrinketSlot').on('click', () => {
      cubeTrinketSlot = equipment('cubeTrinketSlot', [74, 110, 49, 92]);
      calculate();
    });
    $('#amuletSlot').on('click', () => {
      amuletSlot = equipment('amuletSlot', [108, 157, 71, 133]);
      calculate();
    });
    $('#rightRingSlot').on('click', () => {
      rightRingSlot = equipment('rightRingSlot', [85, 126, 56, 106]);
      calculate();
    });
    $('#leftRingSlot').on('click', () => {
      leftRingSlot = equipment('leftRingSlot', [85, 126, 56, 106]);
      calculate();
    });
  });
}

function loadPrecisionCalculator () {
  const PROFESSION = [['engineer', ['hematicFocus', 10], ['highCaliber', 15]],
    ['ranger', ['huntersTactics', 10], ['preciseStrike', 100], ['spotter', 100],
      ['viciousQuarry', 10]], ['thief', ['beQuickOrBeKilled', 200],
      ['hiddenKiller', 100], ['keenObserver', 5], ['silentScope', 240],
      ['twinFangs', 7]], ['elementalist', ['elementsOfRage', 0.13],
      ['superiorElements', 10]], ['mesmer', ['dangerTime', 15]], ['necromancer',
      ['deathPerception', 33], ['decimateDefenses', 2], ['furiousDemise', 180],
      ['targetTheWeak', 28]], ['guardian', ['radiantPower', 10],
      ['rightHandStrength', 80], ['righteousInstinct', 25]], ['revenant',
      ['brutalMomentum', 33]], ['warrior', ['burstPrecision', 100],
      ['doubledStandards', 1], ['unsuspectingFoe', 50]]];
  const PRECISION_CALCULATOR = [['fury', 1], ['retaliation', 1], ['bleeding',
    1], ['burning', 1], ['slow', 1], ['vulnerability', 25], ['weakness', 1],
  ['agonyChanneler', 10], ['recursiveResourcing', 25],
  ['mistlockSingularities', 30], ['infiniteMistOmnipotion', 5],
  ['mistAttunement1', 5], ['mistAttunement2', 10], ['mistAttunement3', 15],
  ['mistAttunement4', 25], ['minorSigilOfAccuracy', 3],
  ['majorSigilOfAccuracy', 5], ['superiorSigilOfAccuracy', 7],
  ['bannerOfDiscipline', 100], ['conjureLightningHammer', 180],
  ['signetOfAgility', 180], ['signetOfFire', 180], ['signetOfFury', 180]];
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
  document.getElementById('precision').innerText = (1000 + ((162 +
    agonyImpedance + (anguishedTearOfAlba / 10 * (anguishedTearOfAlba + (5 *
      (agonyChanneler + recursiveResourcing + mistlockSingularities > 0 ? 1
        : 0)))) + mistAttunement1 + mistAttunement2 + mistAttunement3 +
    mistAttunement4) * (agonyChanneler + recursiveResourcing +
    mistlockSingularities) / 100) * infiniteMistOmnipotion + spotter +
    beQuickOrBeKilled + silentScope + (elementsOfRage * vitality) +
    furiousDemise + rightHandStrength + ((doubledStandards + 1) *
      bannerOfDiscipline) + conjureLightningHammer + signetOfAgility +
    signetOfFire + signetOfFury + headSlot + shoulderSlot + chestSlot +
    handSlot + legSlot + feetSlot + swordSlot + shieldSlot + backSlot +
    bearTrinketSlot + cubeTrinketSlot + amuletSlot + rightRingSlot +
    leftRingSlot).toString();
  document.getElementById('criticalChance').innerText = (5 +
    ((document.getElementById('precision').innerText - 1000) / 21) + (fury *
      20) + minorSigilOfAccuracy + majorSigilOfAccuracy +
    superiorSigilOfAccuracy + (hematicFocus * bleeding) + highCaliber +
    huntersTactics + preciseStrike + (viciousQuarry * fury) + hiddenKiller +
    keenObserver + twinFangs + (superiorElements * weakness) + (dangerTime *
      slow) + deathPerception + (decimateDefenses * vulnerability) +
    targetTheWeak + (radiantPower * burning) + (retaliation *
      righteousInstinct) + brutalMomentum + burstPrecision + unsuspectingFoe)
    .toString();
}

function resetTrait () {
  hematicFocus = highCaliber = preciseStrike = huntersTactics = spotter =
    viciousQuarry = beQuickOrBeKilled = hiddenKiller = keenObserver =
      silentScope = twinFangs = elementsOfRage = superiorElements = dangerTime =
        deathPerception = decimateDefenses = furiousDemise = targetTheWeak =
          radiantPower = rightHandStrength = righteousInstinct =
            brutalMomentum = burstPrecision = doubledStandards =
              unsuspectingFoe = 0;
  calculate();
}

function engineerMenu () {
  document.title = 'Engineer - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('engineer').style.borderColor = '#00FF00';
  engineer = 1;
  $(($) => {
    $('#hematicFocus').on('click', () => {
      hematicFocus = onClick(10, 'hematicFocus');
      calculate();
    });
    $('#highCaliber').on('click', () => {
      highCaliber = onClick(15, 'highCaliber');
      calculate();
    });
  });
}

function rangerMenu () {
  document.title = 'Ranger - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('ranger').style.borderColor = '#00FF00';
  ranger = 1;
  $(($) => {
    $('#huntersTactics').on('click', () => {
      huntersTactics = onClick(10, 'huntersTactics');
      calculate();
    });
    $('#preciseStrike').on('click', () => {
      preciseStrike = onClick(100, 'preciseStrike');
      calculate();
    });
    $('#spotter').on('click', () => {
      spotter = onClick(100, 'spotter');
      calculate();
    });
    $('#viciousQuarry').on('click', () => {
      viciousQuarry = onClick(10, 'viciousQuarry');
      calculate();
    });
  });
}

function thiefMenu () {
  document.title = 'Thief - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('thief').style.borderColor = '#00FF00';
  thief = 1;
  $(($) => {
    $('#beQuickOrBeKilled').on('click', () => {
      beQuickOrBeKilled = onClick(200, 'beQuickOrBeKilled');
      calculate();
    });
    $('#hiddenKiller').on('click', () => {
      hiddenKiller = onClick(100, 'hiddenKiller');
      calculate();
    });
    $('#keenObserver').on('click', () => {
      keenObserver = onClick(5, 'keenObserver');
      calculate();
    });
    $('#silentScope').on('click', () => {
      silentScope = onClick(240, 'silentScope');
      calculate();
    });
    $('#twinFangs').on('click', () => {
      twinFangs = onClick(7, 'twinFangs');
      calculate();
    });
  });
}

function elementalistMenu () {
  document.title = 'Elementalist - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('elementalist').style.borderColor = '#00FF00';
  elementalist = 1;
  $(($) => {
    $('#elementsOfRage').on('click', () => {
      elementsOfRage = onClick(0.13, 'elementsOfRage');
      calculate();
    });
    $('#superiorElements').on('click', () => {
      superiorElements = onClick(10, 'superiorElements');
      calculate();
    });
  });
}

function mesmerMenu () {
  document.title = 'Mesmer - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('mesmer').style.borderColor = '#00FF00';
  mesmer = 1;
  $(($) => {
    $('#dangerTime').on('click', () => {
      dangerTime = onClick(15, 'dangerTime');
      calculate();
    });
  });
}

function necromancerMenu () {
  document.title = 'Necromancer - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('necromancer').style.borderColor = '#00FF00';
  necromancer = 1;
  $(($) => {
    $('#deathPerception').on('click', () => {
      deathPerception = onClick(33, 'deathPerception');
      calculate();
    });
    $('#decimateDefenses').on('click', () => {
      decimateDefenses = onClick(2, 'decimateDefenses');
      calculate();
    });
    $('#furiousDemise').on('click', () => {
      furiousDemise = onClick(180, 'furiousDemise');
      calculate();
    });
    $('#targetTheWeak').on('click', () => {
      targetTheWeak = onClick(28, 'targetTheWeak');
      calculate();
    });
  });
}

function guardianMenu () {
  document.title = 'Guardian - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('guardian').style.borderColor = '#00FF00';
  guardian = 1;
  $(($) => {
    $('#radiantPower').on('click', () => {
      radiantPower = onClick(10, 'radiantPower');
      calculate();
    });
    $('#rightHandStrength').on('click', () => {
      rightHandStrength = onClick(80, 'rightHandStrength');
      calculate();
    });
    $('#righteousInstinct').on('click', () => {
      righteousInstinct = onClick(25, 'righteousInstinct');
      calculate();
    });
  });
}

function revenantMenu () {
  document.title = 'Revenant - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('revenant').style.borderColor = '#00FF00';
  revenant = 1;
  $(($) => {
    $('#brutalMomentum').on('click', () => {
      brutalMomentum = onClick(33, 'brutalMomentum');
      calculate();
    });
  });
}

function warriorMenu () {
  document.title = 'Warrior - Precision Calculator - Fiery Greatsword';
  resetProfession();
  document.getElementById('warrior').style.borderColor = '#00FF00';
  warrior = 1;
  $(($) => {
    $('#burstPrecision').on('click', () => {
      burstPrecision = onClick(100, 'burstPrecision');
      calculate();
    });
    $('#doubledStandards').on('click', () => {
      doubledStandards = onClick(1, 'doubledStandards');
      calculate();
    });
    $('#unsuspectingFoe').on('click', () => {
      unsuspectingFoe = onClick(50, 'unsuspectingFoe');
      calculate();
    });
  });
}

function resetFractalAttunement () {
  agonyChanneler = recursiveResourcing = mistlockSingularities = 0;
}

function resetMistAttunement () {
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
