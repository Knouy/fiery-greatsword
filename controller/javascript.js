import {home} from "../model/home.js";
import {uceCounter} from "../model/uce-counter.js";
import {onClick} from "../model/on-click.js";
import {resetProfessionMenu} from "../model/reset-profession-menu.js";

VANTA.FOG({
  el: "#fog",
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
    $('#guildWars2').load('view/home.html', () => home());
  });
  $('#menuPrecisionCalculator').on('click', () => {
    $('#guildWars2').load('view/precisionCalculator.html', () =>
      precisionCalulator());
  });
  $('#menuUceCounter').on('click', () => {
    $('#guildWars2').load('view/uceCounter.html', () => {
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

/* Precision Calculator */

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
let fractalAttunement = 30;
/* Gizmo */
let infiniteMistOmnipotion = 5;
/* Mist Attunement */
let mistAttunement = 25;
/* Sigil of Accuracy */
let sigilOfAccuracy = 0;
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
let doubledStandards = 1;
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
  loadPrecisionCalculator();
  document.title = 'Precision Calculator - Guild Wars 2 - Knouy';
  calculate();
  $(($) => {
    /* Profession */
    $('#engineer').on('click', () => {
      $('#trait').load('view/precisionCalculator/engineer.html', () =>
        engineer());
    });
    $('#ranger').on('click', () => {
      $('#trait').load('view/precisionCalculator/ranger.html', () => ranger());
    });
    $('#thief').on('click', () => {
      $('#trait').load('view/precisionCalculator/thief.html', () => thief());
    });
    $('#elementalist').on('click', () => {
      $('#trait').load('view/precisionCalculator/elementalist.html', () =>
        elementalist());
    });
    $('#mesmer').on('click', () => {
      $('#trait').load('view/precisionCalculator/mesmer.html', () => mesmer());
    });
    $('#necromancer').on('click', () => {
      $('#trait').load('view/precisionCalculator/necromancer.html', () =>
        necromancer());
    });
    $('#guardian').on('click', () => {
      $('#trait').load('view/precisionCalculator/guardian.html', () =>
        guardian());
    });
    $('#revenant').on('click', () => {
      $('#trait').load('view/precisionCalculator/revenant.html', () =>
        revenant());
    });
    $('#warrior').on('click', () => {
      $('#trait').load('view/precisionCalculator/warrior.html', () =>
        warrior());
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
      burning = onClick('burning');
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
      fractalAttunement = onClick(10, 'agonyChanneler', 'recursiveResourcing',
        'mistlockSingularities');
      calculate();
    });
    $('#recursiveResourcing').on('click', () => {
      fractalAttunement = onClick(25, 'recursiveResourcing', 'agonyChanneler',
        'mistlockSingularities');
      calculate();
    });
    $('#mistlockSingularities').on('click', () => {
      fractalAttunement = onClick(30, 'mistlockSingularities', 'agonyChanneler',
        'recursiveResourcing');
      calculate();
    });
    /* Gizmo */
    $('#infiniteMistOmnipotion').on('click', () => {
      infiniteMistOmnipotion = onClick(5, 'infiniteMistOmnipotion');
      calculate();
    });
    /* Mist Attunement */
    $('#mistAttunement1').on('click', () => {
      mistAttunement = onClick(5, 'mistAttunement1', 'mistAttunement2',
        'mistAttunement3', 'mistAttunement4');
      calculate();
    });
    $('#mistAttunement2').on('click', () => {
      mistAttunement = onClick(10, 'mistAttunement2', 'mistAttunement1',
        'mistAttunement3', 'mistAttunement4');
      calculate();
    });
    $('#mistAttunement3').on('click', () => {
      mistAttunement = onClick(15, 'mistAttunement3', 'mistAttunement1',
        'mistAttunement2', 'mistAttunement4');
      calculate();
    });
    $('#mistAttunement4').on('click', () => {
      mistAttunement = onClick(25, 'mistAttunement4', 'mistAttunement1',
        'mistAttunement2', 'mistAttunement3');
      calculate();
    });
    /* Sigil of Accuracy */
    $('#minorSigilOfAccuracy').on('click', () => {
      sigilOfAccuracy = onClick(3, 'minorSigilOfAccuracy',
        'majorSigilOfAccuracy', 'superiorSigilOfAccuracy');
      calculate();
    });
    $('#majorSigilOfAccuracy').on('click', () => {
      sigilOfAccuracy = onClick(5, 'majorSigilOfAccuracy',
        'minorSigilOfAccuracy', 'superiorSigilOfAccuracy');
      calculate();
    });
    $('#superiorSigilOfAccuracy').on('click', () => {
      sigilOfAccuracy = onClick(7, 'superiorSigilOfAccuracy',
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
    162 + mistAttunement) * fractalAttunement / 100) * infiniteMistOmnipotion +
    spotter + (beQuickOrBeKilled * quickness) + silentScope + (elementsOfRage *
      vitality) + furiousDemise + rightHandStrength + ((doubledStandards + 1) *
      bannerOfDiscipline) + conjureLightningHammer + signetOfAgility +
    signetOfFire + signetOfFury).toString();
  document.getElementById('criticalChance').innerText = (5 +
    ((document.getElementById('precision').innerText - 1000) / 21) + (fury *
      20) + sigilOfAccuracy + (hematicFocus * bleeding) + highCaliber +
    (viciousQuarry * fury) + keenObserver + twinFangs + (superiorElements *
      weakness) + (dangerTime * slow) + deathPerception + (decimateDefenses *
      vulnerability) + targetTheWeak + (radiantPower * burning) + (retaliation *
      righteousInstinct) + brutalMomentum + unsuspectingFoe).toString();
}

function engineer () {
  document.title = 'Engineer - Precision Calculator - Guild Wars 2 - Knouy';
  resetProfessionMenu();
  document.getElementById('engineer').style.borderColor = '#00FF00';
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

function ranger () {
  document.title = 'Ranger - Precision Calculator - Guild Wars 2 - Knouy';
  resetProfessionMenu();
  document.getElementById('ranger').style.borderColor = '#00FF00';
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

function thief () {
  document.title = 'Thief - Precision Calculator - Guild Wars 2 - Knouy';
  resetProfessionMenu();
  document.getElementById('thief').style.borderColor = '#00FF00';
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
      silentScope = onClick(0, 'silentScope');
      calculate();
    });
    $('#twinFangs').on('click', () => {
      twinFangs = onClick(7, 'twinFangs');
      calculate();
    });
  });
}

function elementalist () {
  document.title = 'Elementalist - Precision Calculator - Guild Wars 2 - Knouy';
  resetProfessionMenu();
  document.getElementById('elementalist').style.borderColor = '#00FF00';
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

function mesmer () {
  document.title = 'Mesmer - Precision Calculator - Guild Wars 2 - Knouy';
  resetProfessionMenu();
  document.getElementById('mesmer').style.borderColor = '#00FF00';
  $(($) => {
    $('#dangerTime').on('click', () => {
      dangerTime = onClick(15, 'dangerTime');
      calculate();
    });
  });
}

function necromancer () {
  document.title = 'Necromancer - Precision Calculator - Guild Wars 2 - Knouy';
  resetProfessionMenu();
  document.getElementById('necromancer').style.borderColor = '#00FF00';
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

function guardian () {
  document.title = 'Guardian - Precision Calculator - Guild Wars 2 - Knouy';
  resetProfessionMenu();
  document.getElementById('guardian').style.borderColor = '#00FF00';
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

function revenant () {
  document.title = 'Revenant - Precision Calculator - Guild Wars 2 - Knouy';
  resetProfessionMenu();
  document.getElementById('revenant').style.borderColor = '#00FF00';
  $(($) => {
    $('#brutalMomentum').on('click', () => {
      brutalMomentum = onClick(33, 'brutalMomentum');
      calculate();
    });
  });
}

function warrior () {
  document.title = 'Warrior - Precision Calculator - Guild Wars 2 - Knouy';
  resetProfessionMenu();
  document.getElementById('warrior').style.borderColor = '#00FF00';
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
