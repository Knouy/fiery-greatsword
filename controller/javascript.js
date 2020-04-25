import { home } from '../model/home.js';
import { onClick } from '../model/on-click.js';
import { resetProfessionMenu } from '../model/reset-profession-menu.js';
import { count } from '../model/count.js';

/* index.html */

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

$(($) => {
  $('#menuHome').on('click', () => {
    $('#page').load('view/home.html', () => home());
  });
  $('#menuPrecisionCalculator').on('click', () => {
    $('#page').load('view/precisionCalculator.html', () =>
      precisionCalulator());
  });
  $('#menuUceCounter').on('click', () => {
    $('#page').load('view/uceCounter.html', () => {
      uceCounter();
      $('#fetch').on('click', () => uceCounter());
    });
  });
});

setInterval(() => {
  const RESET = new Date();
  RESET.setUTCDate(new Date().getUTCDate() + 1);
  RESET.setUTCHours(0);
  RESET.setUTCMinutes(0);
  RESET.setUTCSeconds(0);
  RESET.setUTCMilliseconds(0);
  const COUNTDOWN = RESET.getTime() - new Date().getTime();
  const HOURS = Math.floor((COUNTDOWN % (1000 * 60 * 60 * 24)) / (1000 * 60 *
    60));
  const MINUTES = Math.floor((COUNTDOWN % (1000 * 60 * 60)) / (1000 * 60));
  const SECONDS = Math.floor((COUNTDOWN % (1000 * 60)) / 1000);
  document.getElementById('countdown').innerHTML = (HOURS.toString().length ===
  1 ? '0' + HOURS : HOURS) + ':' + (MINUTES.toString().length === 1 ? '0' +
    MINUTES : MINUTES) + ':' + (SECONDS.toString().length === 1 ? '0' +
    SECONDS : SECONDS);
}, 1000);

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
/* Buff */
let fury = 1;
let quickness = 0;
let retaliation = 0;
/* Condition */
let bleeding = 0;
let burning = 0;
let slow = 0;
let vulnerability = 0;
let weakness = 0;
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
let spotter = 0;
let viciousQuarry = 0;
/* Thief */
let beQuickOrBeKilled = 0;
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
let doubledStandards = 0;
let unsuspectingFoe = 0;
/* Utility skill */
let bannerOfDiscipline = 100;
let conjureLightningHammer = 0;
let signetOfAgility = 0;
let signetOfFire = 0;
let signetOfFury = 0;
/* Vitality */
let vitality = 1000;

function precisionCalulator () {
  document.title = 'Precision Calculator - Guild Wars 2 - Knouy';
  calculate();
  loadPrecisionCalculator();
  $(($) => {
    /* Profession */
    $('#engineer').on('click', () => {
      $('#trait').load('view/precisionCalculator/engineer.html', () => {
        resetTrait();
        engineerMenu();
      });
    });
    $('#ranger').on('click', () => {
      $('#trait').load('view/precisionCalculator/ranger.html', () => {
        resetTrait();
        rangerMenu();
      });
    });
    $('#thief').on('click', () => {
      $('#trait').load('view/precisionCalculator/thief.html', () => {
        resetTrait();
        thiefMenu();
      });
    });
    $('#elementalist').on('click', () => {
      $('#trait').load('view/precisionCalculator/elementalist.html', () => {
        resetTrait();
        elementalistMenu();
      });
    });
    $('#mesmer').on('click', () => {
      $('#trait').load('view/precisionCalculator/mesmer.html', () => {
        resetTrait();
        mesmerMenu();
      });
    });
    $('#necromancer').on('click', () => {
      $('#trait').load('view/precisionCalculator/necromancer.html', () => {
        resetTrait();
        necromancerMenu();
      });
    });
    $('#guardian').on('click', () => {
      $('#trait').load('view/precisionCalculator/guardian.html', () => {
        resetTrait();
        guardianMenu();
      });
    });
    $('#revenant').on('click', () => {
      $('#trait').load('view/precisionCalculator/revenant.html', () => {
        resetTrait();
        revenantMenu();
      });
    });
    $('#warrior').on('click', () => {
      $('#trait').load('view/precisionCalculator/warrior.html', () => {
        resetTrait();
        warriorMenu();
      });
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
    $('#quickness').on('click', () => {
      quickness = onClick(1, 'quickness');
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
    /* Vitality */
    $('#vitality').on('change', () => {
      vitality = document.getElementById('vitality').value;
      calculate();
    });
  });
}

function calculate () {
  document.getElementById('precision').innerText = (1000 + ((agonyImpedance +
    162 + mistAttunement1 + mistAttunement2 + mistAttunement3 +
    mistAttunement4) * (agonyChanneler + recursiveResourcing +
    mistlockSingularities) / 100) * infiniteMistOmnipotion + spotter +
    (beQuickOrBeKilled * quickness) + silentScope + (elementsOfRage *
      vitality) + furiousDemise + rightHandStrength + ((doubledStandards + 1) *
      bannerOfDiscipline) + conjureLightningHammer + signetOfAgility +
    signetOfFire + signetOfFury).toString();
  document.getElementById('criticalChance').innerText = (5 +
    ((document.getElementById('precision').innerText - 1000) / 21) + (fury *
      20) + minorSigilOfAccuracy + majorSigilOfAccuracy +
    superiorSigilOfAccuracy + (hematicFocus * bleeding) + highCaliber +
    (viciousQuarry * fury) + keenObserver + twinFangs + (superiorElements *
      weakness) + (dangerTime * slow) + deathPerception + (decimateDefenses *
      vulnerability) + targetTheWeak + (radiantPower * burning) + (retaliation *
      righteousInstinct) + brutalMomentum + unsuspectingFoe).toString();
}

function loadPrecisionCalculator () {
  const PROFESSION = [['engineer', ['hematicFocus', 10], ['highCaliber', 15]],
    ['ranger', ['spotter', 100], ['viciousQuarry', 10]], ['thief',
      ['beQuickOrBeKilled', 200], ['keenObserver', 5], ['silentScope', 240],
      ['twinFangs', 7]], ['elementalist', ['elementsOfRage', 0.13],
      ['superiorElements', 10]], ['mesmer', ['dangerTime', 15]], ['necromancer',
      ['deathPerception', 33], ['decimateDefenses', 2], ['furiousDemise', 180],
      ['targetTheWeak', 28]], ['guardian', ['radiantPower', 10],
      ['rightHandStrength', 80], ['righteousInstinct', 25]], ['revenant',
      ['brutalMomentum', 33]], ['warrior', ['doubledStandards', 1],
      ['unsuspectingFoe', 50]]];
  const PRECISION_CALCULATOR = [['fury', 1], ['quickness', 1], ['retaliation',
    1], ['bleeding', 1], ['burning', 1], ['slow', 1], ['vulnerability', 25],
  ['weakness', 1], ['agonyChanneler', 10], ['recursiveResourcing', 25],
  ['mistlockSingularities', 30], ['infiniteMistOmnipotion', 5],
  ['mistAttunement1', 5], ['mistAttunement2', 10], ['mistAttunement3', 15],
  ['mistAttunement4', 25], ['minorSigilOfAccuracy', 3], ['majorSigilOfAccuracy',
    5], ['superiorSigilOfAccuracy', 7], ['bannerOfDiscipline', 100],
  ['conjureLightningHammer', 180], ['signetOfAgility', 180], ['signetOfFire',
    180], ['signetOfFury', 180]];
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
}

function engineerMenu () {
  document.title = 'Engineer - Precision Calculator - Guild Wars 2 - Knouy';
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
  document.title = 'Ranger - Precision Calculator - Guild Wars 2 - Knouy';
  resetProfession();
  document.getElementById('ranger').style.borderColor = '#00FF00';
  ranger = 1;
  $(($) => {
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
  document.title = 'Thief - Precision Calculator - Guild Wars 2 - Knouy';
  resetProfession();
  document.getElementById('thief').style.borderColor = '#00FF00';
  thief = 1;
  $(($) => {
    $('#beQuickOrBeKilled').on('click', () => {
      beQuickOrBeKilled = onClick(200, 'beQuickOrBeKilled');
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
  document.title = 'Elementalist - Precision Calculator - Guild Wars 2 - Knouy';
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
  document.title = 'Mesmer - Precision Calculator - Guild Wars 2 - Knouy';
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
  document.title = 'Necromancer - Precision Calculator - Guild Wars 2 - Knouy';
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
  document.title = 'Guardian - Precision Calculator - Guild Wars 2 - Knouy';
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
  document.title = 'Revenant - Precision Calculator - Guild Wars 2 - Knouy';
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
  document.title = 'Warrior - Precision Calculator - Guild Wars 2 - Knouy';
  resetProfession();
  document.getElementById('warrior').style.borderColor = '#00FF00';
  warrior = 1;
  $(($) => {
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

function resetTrait () {
  hematicFocus = 0;
  highCaliber = 0;
  spotter = 0;
  viciousQuarry = 0;
  beQuickOrBeKilled = 0;
  keenObserver = 0;
  silentScope = 0;
  twinFangs = 0;
  elementsOfRage = 0;
  superiorElements = 0;
  dangerTime = 0;
  deathPerception = 0;
  decimateDefenses = 0;
  furiousDemise = 0;
  targetTheWeak = 0;
  radiantPower = 0;
  rightHandStrength = 0;
  righteousInstinct = 0;
  brutalMomentum = 0;
  doubledStandards = 0;
  unsuspectingFoe = 0;
  calculate();
}

function resetProfession () {
  resetProfessionMenu();
  engineer = 0;
  ranger = 0;
  thief = 0;
  elementalist = 0;
  mesmer = 0;
  necromancer = 0;
  guardian = 0;
  revenant = 0;
  warrior = 0;
}

function resetFractalAttunement () {
  agonyChanneler = 0;
  recursiveResourcing = 0;
  mistlockSingularities = 0;
}

function resetMistAttunement () {
  mistAttunement1 = 0;
  mistAttunement2 = 0;
  mistAttunement3 = 0;
  mistAttunement4 = 0;
}

function resetSigilOfAccuracy () {
  minorSigilOfAccuracy = 0;
  majorSigilOfAccuracy = 0;
  superiorSigilOfAccuracy = 0;
}

/* uceCounter.html */

let apiKey = '?access_token=74C4807F-4E95-5B4F-A649-2C47D7F54965C4414169-033B' +
  '-405A-BE36-5A638C14C1D2';

function uceCounter () {
  document.title = 'UCE Counter - Guild Wars 2 - Knouy';
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
